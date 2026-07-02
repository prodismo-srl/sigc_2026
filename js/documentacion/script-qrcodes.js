document.addEventListener('DOMContentLoaded', function() {
    // Lista de códigos a los que se les añadirá QR
    const codigos = [
        'F311-IT-1', 'F311-IT-2', 'F311-IT-3', 'F311-IT-4',
        'F161-IT-1', 'F412-IT-1', 'F214-IT-2', 'F314-IT-2',
        'F413-IT-4', 'F611-IT-1', 'F612-IT-3', 'F711-IT-4',
        'F314-IT-3', 'F512-IT-2', 'F532-IT-1', 'F612-IT-1'
    ];

    let formulariosEmpty = [];
    let datosCheatsheet = []; // La variable que almacenará los datos para la cheatsheet (no confundir con el array global)

    // Función para limpiar código y usarlo como ID
    function codigoLimpiar(texto) {
        return texto.replace(/[^a-zA-Z0-9\-]/g, '');
    }

    // Seleccionar todos los enlaces que están dentro de la sección principal (excluyendo header/nav)
    // Seleccionar enlaces dentro de la sección con id="documentacion".
    // Un selector que apunte a los enlaces dentro de los divs que contienen documentación, procedimientos, formularios, matrices, instructivos.

    const enlaces = document.querySelectorAll('section.py-16 a, section.bg-white a'); // ajustar según estructura

    enlaces.forEach(function(enlace) {
        const texto = enlace.textContent.trim();
        const coincide = codigos.some(cod => texto.includes(cod));
        if (!coincide) return;

        // Verificar si el enlace ya tiene un ícono QR (para no duplicar)
        if (enlace.querySelector('.qr-icon-wrapper')) return;

        // Obtener la URL absoluta
        const url = enlace.href;

        // Crear el contenedor del ícono y tooltip
        const wrapper = document.createElement('span');
        wrapper.className = 'qr-icon-wrapper';
        wrapper.style.position = 'relative';
        wrapper.style.display = 'inline-block';
        wrapper.style.marginLeft = '6px';

        // Ícono QR (FontAwesome)
        const icono = document.createElement('i');
        icono.className = 'fas fa-qrcode';
        icono.style.fontSize = '18px';
        icono.style.color = '#2563eb';
        icono.style.cursor = 'pointer';

        // Tooltip
        const tooltip = document.createElement('div');
        tooltip.className = 'qr-tooltip';
        tooltip.style.position = 'absolute';
        tooltip.style.top = 'calc(100% + 8px)';
        tooltip.style.left = '50%';
        tooltip.style.transform = 'translateX(-50%)';
        tooltip.style.background = 'white';
        tooltip.style.border = '1px solid #ccc';
        tooltip.style.borderRadius = '8px';
        tooltip.style.padding = '10px';
        tooltip.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        tooltip.style.zIndex = '9999';
        tooltip.style.display = 'none';
        tooltip.style.minWidth = '180px';
        tooltip.style.textAlign = 'center';
        tooltip.style.pointerEvents = 'none';

        // Añadir el código del formulario dentro del tooltip
        const codigoLabel = document.createElement('div');
        codigoLabel.textContent = texto.match(/F\d{3}-IT-\d+/)[0] || texto; // extraer código
        codigoLabel.style.fontWeight = 'bold';
        codigoLabel.style.marginBottom = '6px';
        codigoLabel.style.fontSize = '14px';
        tooltip.appendChild(codigoLabel);

        // Contenedor para el QR
        const qrContainer = document.createElement('div');
        qrContainer.id = 'qr-' + codigoLimpiar(texto);
        tooltip.appendChild(qrContainer);

        // Al hacer hover sobre el ícono, mostrar tooltip y generar QR
        let qrGenerado = false;
        icono.addEventListener('mouseenter', function(e) {
            tooltip.style.display = 'block';
            if (!qrGenerado) {
                new QRCode(qrContainer, {
                text: url,
                width: 180,
                height: 180,
                colorDark: '#000000',
                colorLight: '#ffffff',
                correctLevel: QRCode.CorrectLevel.H
                });
                qrGenerado = true;
            }
        });

        icono.addEventListener('mouseleave', function(e) {
            tooltip.style.display = 'none';
        });

        // Armar el wrapper
        wrapper.appendChild(icono);
        wrapper.appendChild(tooltip);

        // Insertar el wrapper DENTRO del enlace, al final
        enlace.appendChild(wrapper);
    });

    // Buscar los enlaces dentro de la sección de contenido (excluyendo el nav)
    const seccionContenido = document.querySelector('section.py-16'); // o un selector más específico
    if (!seccionContenido) {
        console.warn('No se encontró la sección principal. Los enlaces del menú podrían afectarse.');
        // Fallback: buscar en todo el documento pero excluir los que estén dentro de header o nav
        const todosLosEnlaces = document.querySelectorAll('a');
        todosLosEnlaces.forEach(function(enlace) {
            // Excluir si está dentro de header, nav o menús desplegables
            if (enlace.closest('header') || enlace.closest('nav') || enlace.closest('.relative.group')) {
                return;
            }
            procesarEnlace(enlace);
        });
    } else {
        const enlaces = seccionContenido.querySelectorAll('a');
        enlaces.forEach(procesarEnlace);
    }

    function procesarEnlace(enlace) {
        const texto = enlace.textContent.trim();
        // Buscar si el texto contiene alguno de los códigos (de la lista codigos)
        const codigoEncontrado = codigos.find(cod => texto.includes(cod));
        if (!codigoEncontrado) return;

        // Buscar el formulario en el array global 'formularios'
        const formData = formularios.find(f => f.codigo === codigoEncontrado);

        if (formData) {
            // Si se encuentra, usar todos los datos del array
            datosCheatsheet.push({
                codigo: formData.codigo,
                nombre: formData.nombre,
                revision: 'Rev' + String(formData.revision).padStart(2, '0'),
                fecha: formData.fecha,
                areas: formData.areas,
                complejidad: formData.complejidad,
                url: enlace.href,
                enlace: enlace
            });
        } else {
            // Fallback: extraer del texto (por si algún código no está en el array)
            let nombre = texto.replace(codigoEncontrado, '').trim();
            nombre = nombre.replace(/\b(Interno|DIT|Público|Todas|IngenieríaProyectos)\b/g, '').trim();
            nombre = nombre.replace(/Complejidad:\s*(Baja|Media)/g, '').trim();
            const codigoRegexGlobal = new RegExp(codigoEncontrado.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
            nombre = nombre.replace(codigoRegexGlobal, '').trim();
            nombre = nombre.replace(/\s+/g, ' ').trim();

            let revision = 'N/A';
            const revMatch = texto.match(/Rev(\d{2})/i);
            if (revMatch) revision = 'Rev' + revMatch[1];
            else {
                const revMatch2 = texto.match(/Rev\s*(\d+)/i);
                if (revMatch2) revision = 'Rev' + revMatch2[1].padStart(2, '0');
            }

            datosCheatsheet.push({
                codigo: codigoEncontrado,
                nombre: nombre || codigoEncontrado,
                revision: revision,
                fecha: 'N/A',
                areas: ['No definida'],
                complejidad: 'N/A',
                url: enlace.href,
                enlace: enlace
            });
        }
    }

    // Si no se encontraron formularios, mostrar error
    if (formularios.length === 0) {
        console.warn('No se encontraron formularios para los códigos especificados. Verifica los selectores.');
        return;
    }

    // Ordenar por código (opcional)
    formularios.sort((a, b) => a.codigo.localeCompare(b.codigo));

    // --- Crear el botón "Generar Cheatsheet" ---
    const tituloFormularios = document.querySelector('#formularios');
    if (tituloFormularios) {
        // const contenedor = tituloFormularios.parentElement; // el div flex que contiene título y badge
        const btn = document.getElementById('btn-cheatsheet');
        // btn.textContent = 'Generar Cheatsheet';
        // btn.className = 'ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium';
        // btn.style.marginLeft = 'auto';
        // contenedor.appendChild(btn);

        // Evento click
        btn.addEventListener('click', abrirCheatsheet);
    } else {
        // Si no se encuentra el título, agregar un botón flotante o en otro lugar
        console.warn('No se encontró el título #formularios. El botón no se agregará.');
    }

    // --- Modal / Overlay de la cheatsheet ---
    let modal = null;
    let cheatsheetContainer = null;

    function abrirCheatsheet() {
        // Si ya existe el modal, cerrarlo y reabrirlo (o simplemente mostrarlo)
        if (modal) {
            modal.style.display = 'block';
            // Regenerar el contenido para actualizar (por si cambió algo)
            generarCheatsheet();
            return;
        }

        // Crear el overlay
        modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = '0';
        modal.style.left = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0,0,0,0.6)';
        modal.style.zIndex = '10000';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.padding = '20px';

        // Contenedor del contenido
        const content = document.createElement('div');
        content.style.backgroundColor = 'white';
        content.style.borderRadius = '16px';
        content.style.maxWidth = '1200px';
        content.style.width = '100%';
        content.style.maxHeight = '90vh';
        content.style.overflowY = 'auto';
        content.style.padding = '24px';
        content.style.position = 'relative';
        content.style.boxShadow = '0 20px 60px rgba(0,0,0,0.3)';

        // Botón cerrar
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.position = 'sticky';
        closeBtn.style.top = '0';
        closeBtn.style.float = 'right';
        closeBtn.style.fontSize = '30px';
        closeBtn.style.background = 'none';
        closeBtn.style.border = 'none';
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.color = '#333';
        closeBtn.style.zIndex = '10';
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
        content.appendChild(closeBtn);

        // Título de la cheatsheet
        const titulo = document.createElement('h2');
        titulo.textContent = 'Cheatsheet de Formularios TISAX - ISO 27001';
        titulo.style.fontSize = '24px';
        titulo.style.fontWeight = 'bold';
        titulo.style.marginBottom = '20px';
        titulo.style.textAlign = 'center';
        content.appendChild(titulo);

        // Contenedor de las tarjetas
        cheatsheetContainer = document.createElement('div');
        cheatsheetContainer.id = 'cheatsheet-grid';
        cheatsheetContainer.style.display = 'grid';
        cheatsheetContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(220px, 1fr))';
        cheatsheetContainer.style.gap = '20px';
        cheatsheetContainer.style.marginBottom = '20px';
        content.appendChild(cheatsheetContainer);

        // Botón descargar PDF
        const downloadBtn = document.createElement('button');
        downloadBtn.textContent = '⬇️ Descargar PDF';
        downloadBtn.className = 'px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-medium';
        downloadBtn.style.display = 'block';
        downloadBtn.style.margin = '20px auto 0';
        downloadBtn.addEventListener('click', descargarPDF);
        content.appendChild(downloadBtn);

        modal.appendChild(content);
        document.body.appendChild(modal);

        // Generar las tarjetas
        generarCheatsheet();
    }

    function generarCheatsheet() {
        if (!cheatsheetContainer) return;
        cheatsheetContainer.innerHTML = '';

        datosCheatsheet.forEach(function(item) {
            const card = document.createElement('div');
            card.className = 'qr-card';
            card.style.backgroundColor = '#f9fafb';
            card.style.borderRadius = '12px';
            card.style.padding = '16px';
            card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
            card.style.border = '1px solid #e5e7eb';
            card.style.textAlign = 'center';
            card.style.display = 'flex';
            card.style.flexDirection = 'column';
            card.style.alignItems = 'center';

            // Código
            const codigoEl = document.createElement('div');
            codigoEl.textContent = item.codigo;
            codigoEl.style.fontWeight = 'bold';
            codigoEl.style.fontSize = '18px';
            codigoEl.style.color = '#1e3a8a';
            codigoEl.style.marginBottom = '4px';
            card.appendChild(codigoEl);

            // Nombre
            const nombreEl = document.createElement('div');
            nombreEl.textContent = item.nombre;
            nombreEl.style.fontSize = '14px';
            nombreEl.style.color = '#374151';
            nombreEl.style.marginBottom = '4px';
            nombreEl.style.flexGrow = '1';
            card.appendChild(nombreEl);

            // Revisión y fecha
            const infoEl = document.createElement('div');
            infoEl.textContent = `${item.revision}  |  ${item.fecha}`;
            infoEl.style.fontSize = '12px';
            infoEl.style.color = '#3c4049';
            infoEl.style.marginBottom = '4px';
            card.appendChild(infoEl);

            // Áreas (etiquetas)
            const areasEl = document.createElement('div');
            areasEl.style.display = 'flex';
            areasEl.style.flexWrap = 'wrap';
            areasEl.style.gap = '4px';
            areasEl.style.justifyContent = 'center';
            areasEl.style.marginBottom = '8px';
            item.areas.forEach(area => {
                const span = document.createElement('span');
                span.textContent = area;
                span.style.color = '#fbe2ffff';
                if (area === 'Todas') {
                    span.style.backgroundColor = '#26961bff';
                } else if (area === 'IT') {
                    span.style.backgroundColor = '#c51dc2ff';
                } else if (area === 'Proyectos') {
                    span.style.backgroundColor = '#466ebdff';
                } else if (area === 'Ingeniería') {
                    span.style.backgroundColor = '#298cbaff';
                } else {
                    span.style.backgroundColor = '#777f91ff';
                }
                span.style.padding = '2px 8px';
                span.style.borderRadius = '12px';
                span.style.fontSize = '10px';
                
                areasEl.appendChild(span);
            });
            card.appendChild(areasEl);

            // Complejidad
            const compEl = document.createElement('div');
            compEl.textContent = `Complejidad: ${item.complejidad}`;
            compEl.style.fontSize = '11px';
            compEl.style.color = '#6b7280';
            compEl.style.marginBottom = '8px';
            card.appendChild(compEl);

            // QR
            const qrContainer = document.createElement('div');
            qrContainer.id = `qr-${item.codigo}`;
            qrContainer.style.margin = '4px auto';
            qrContainer.style.width = '160px';
            qrContainer.style.height = '160px';
            card.appendChild(qrContainer);

            try {
                new QRCode(qrContainer, {
                    text: item.url,
                    width: 160,
                    height: 160,
                    colorDark: '#000000',
                    colorLight: '#ffffff',
                    correctLevel: QRCode.CorrectLevel.H
                });
            } catch (e) {
                qrContainer.textContent = 'Error QR';
            }

            cheatsheetContainer.appendChild(card);
        });
    }

    // --- Función para descargar PDF usando html2canvas + jspdf ---
    function descargarPDF() {
        const grid = document.getElementById('cheatsheet-grid');
        if (!grid) return;

        // Mostrar indicador de carga
        const downloadBtn = document.querySelector('#cheatsheet-grid + button');
        if (downloadBtn) {
            downloadBtn.textContent = '⏳ Generando PDF...';
            downloadBtn.disabled = true;
        }

        // Capturar el grid
        html2canvas(grid, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            logging: false,
            letterRendering: true
        }).then(function(canvas) {
            const imgData = canvas.toDataURL('image/png');
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            // Tamaño de la imagen (mantener proporción)
            const imgWidth = pdfWidth - 20; // márgenes 10mm cada lado
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            // Si la imagen es más alta que una página, dividir en varias páginas
            let heightLeft = imgHeight;
            let position = 10; // margen superior

            // Añadir título en la primera página
            pdf.setFontSize(18);
            pdf.text('Cheatsheet de Formularios TISAX - ISO 27001:2022', 30, 20);
            position = 30;

            // Añadir la imagen
            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= (pdfHeight - 30);

            while (heightLeft > 0) {
                position = heightLeft - imgHeight + 30; // ajustar
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= (pdfHeight - 30);
            }

            pdf.save('Cheatsheet_Formularios_TISAX_ISO27001.pdf');

            // Restaurar botón
            if (downloadBtn) {
                downloadBtn.textContent = '⬇️ Descargar PDF';
                downloadBtn.disabled = false;
            }
        }).catch(function(err) {
            console.error('Error al generar PDF:', err);
            alert('Hubo un error al generar el PDF. Intenta de nuevo.');
            if (downloadBtn) {
                downloadBtn.textContent = '⬇️ Descargar PDF';
                downloadBtn.disabled = false;
            }
        });
    }

});
