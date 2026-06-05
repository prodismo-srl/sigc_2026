        // ========================== ÁREA DE DATOS EDITABLE ==========================
        // 1. LISTA COMPLETA DE 18 KPIs (basada en Excel ISA6_EN)
        const datosKPIs = [
            { id: "KPI-01", controlISA: "2.1.3 - Capacitación", descripcion: "Cobertura de formación en seguridad", objetivo: "100% empleados capacitados", responsables: "DIT, RRHH, Alta Dirección", umbral: "Verde >90%", frecuencia: "Anual", componentes: "E-learnings, registros" },
            { id: "KPI-02", controlISA: "4.1.3 - Gestión cuentas", descripcion: "Revisión de cuentas de usuario", objetivo: "Accesos actualizados", responsables: "DIT, Responsable de Datos", umbral: "Verde >95%", frecuencia: "Trimestral", componentes: "MS EntraID" },
            { id: "KPI-03", controlISA: "5.2.1 - Gestión cambios", descripcion: "Cambios conforme a políticas", objetivo: "0 errores críticos", responsables: "DIT", umbral: "Rojo >10% error", frecuencia: "Mensual", componentes: "Formularios, Registros" },
            { id: "KPI-04", controlISA: "5.2.3 - Protección malware", descripcion: "Endpoint Security coverage", objetivo: "100% endpoints protegidos", responsables: "DIT, IT Seguridad", umbral: "Verde >98%", frecuencia: "Mensual", componentes: "Snipe-IT" },
            { id: "KPI-05", controlISA: "5.2.9 - Copia de seguridad", descripcion: "Pruebas de restauración", objetivo: "Restauraciones correctas", responsables: "DIT, IT Seguridad", umbral: "Verde 100%", frecuencia: "Trimestral", componentes: "Backup proveedores" },
            { id: "KPI-06", controlISA: "5.2.5 - Gestión vulnerabilidades", descripcion: "Cobertura de parches", objetivo: "Sistemas actualizados", responsables: "DIT, IT Seguridad", umbral: "Verde >90%", frecuencia: "Mensual", componentes: "Calculadora CVSS 4.0" },
            { id: "KPI-07", controlISA: "1.6.1 - Reporte incidentes", descripcion: "Detección de incidentes", objetivo: "100% detección oportuna", responsables: "DIT, Helpdesk", umbral: "Verde >95%", frecuencia: "Mensual", componentes: "F161-IT-1" },
            { id: "KPI-08", controlISA: "1.6.2 - Gestión incidentes", descripcion: "Resolución en plazos", objetivo: "Incidentes críticos resueltos <24h", responsables: "IT Seguridad, DIT", umbral: "Verde <5% incumplimiento", frecuencia: "Mensual", componentes: "STI" },
            { id: "KPI-09", controlISA: "1.1.1 - Políticas", descripcion: "Documentación actualizada", objetivo: "100% políticas vigentes", responsables: "DIT, Alta Dirección", umbral: "Verde =100%", frecuencia: "Anual", componentes: "Portal SGSI" },
            { id: "KPI-10", controlISA: "3.1.4 - Dispositivos móviles", descripcion: "Protección móviles", objetivo: "Cobertura total", responsables: "IT Seguridad, DIT", umbral: "Verde >95%", frecuencia: "Mensual", componentes: "MDM, Snipe-IT" },
            { id: "KPI-11", controlISA: "5.2.4 - Logs eventos", descripcion: "Registro en sistemas críticos", objetivo: "Logs activos y auditables", responsables: "DIT", umbral: "Verde >90%", frecuencia: "Trimestral", componentes: "Log server, MS Event Viewer" },
            { id: "KPI-12", controlISA: "5.2.6 - Auditoría sistemas", descripcion: "Sistemas auditados", objetivo: "Auditoría periódica", responsables: "Auditor Interno, DIT", umbral: "Verde >85%", frecuencia: "Semestral", componentes: "CMDB, Audit DB" },
            // NUEVOS 6 KPIs (tot 18)
            { id: "KPI-13", controlISA: "3.1.1 - Zonas de seguridad", descripcion: "Implementación de zonas de seguridad", objetivo: "Todas las propiedades con zonas definidas", responsables: "DIT, Guardia, Recepción", umbral: "Verde >90%", frecuencia: "Anual", componentes: "Zonas seguridad, Clasificación, Central de Monitoreo 24/7" },
            { id: "KPI-14", controlISA: "5.3.1 - Acuerdos de nivel de servicio", descripcion: "Cobertura de revisión SLAs", objetivo: "100% SLAs actualizados", responsables: "DIT", umbral: "Verde >95%", frecuencia: "Trimestral", componentes: "Contratos, Generador de contratos" },
            { id: "KPI-15", controlISA: "6.1.2 - Acuerdos de confidencialidad", descripcion: "NDA con socios externos", objetivo: "100% órdenes con NDA", responsables: "Compras, Proyectos, DIT", umbral: "Verde =100%", frecuencia: "Mensual", componentes: "Sistema de compras" },
            { id: "KPI-16", controlISA: "1.2.3 - Seguridad en proyectos", descripcion: "Requisitos de seguridad en proyectos", objetivo: "Todos los proyectos consideran seguridad", responsables: "PM, DIT", umbral: "Verde >90%", frecuencia: "Trimestral", componentes: "Base de proyectos" },
            { id: "KPI-17", controlISA: "5.2.4 - Logs de administrador", descripcion: "Registro de actividad admin", objetivo: "100% sistemas críticos con admin logs", responsables: "DIT", umbral: "Verde >90%", frecuencia: "Mensual", componentes: "MS EntraID" },
            { id: "KPI-18", controlISA: "1.5.1 - Cumplimiento en procesos", descripcion: "Eliminación de vulnerabilidades en auditorías", objetivo: "Hallazgos cerrados a tiempo", responsables: "Auditoría interna, DIT, Alta Dirección", umbral: "Verde >85%", frecuencia: "Trimestral", componentes: "Base de hallazgos" }
        ];

        // VALORES DE RENDIMIENTO ACTUALES (0-100) - EDITAR SEGÚN MEDICIONES REALES
        let valoresRendimiento = {
            "KPI-01": 94, "KPI-02": 88, "KPI-03": 78, "KPI-04": 97, "KPI-05": 89,
            "KPI-06": 81, "KPI-07": 92, "KPI-08": 84, "KPI-09": 100, "KPI-10": 99,
            "KPI-11": 74, "KPI-12": 96, "KPI-13": 89, "KPI-14": 87, "KPI-15": 100,
            "KPI-16": 82, "KPI-17": 73, "KPI-18": 79
        };

        // Métricas adicionales
        let incidentesAbiertosAlta = 1;
        let porcentajeAuditados = 94;

        // DATOS HISTÓRICOS (para gráfico de líneas) - EDITABLE
        // Meses desde Abr 2025 hasta Abr 2026 (13 puntos)
        const mesesHistoricos = ["Jun 2025", "Jul 2025", "Ago 2025", "Sep 2025", "Oct 2025", "Nov 2025", "Dic 2025", "Ene 2026", "Feb 2026", "Mar 2026", "Abr 2026", "May 2026", "Jun 2026"];
        let datosHistoricos = [0, 0, 5, 10, 22, 34, 43, 51, 60, 77, 81, 83, 88]; // cumplimiento promedio histórico

        // ========== FUNCIONES AUXILIARES ==========
        function getColorForValue(value) {
            if (value >= 90) return 'green';
            if (value >= 70) return 'yellow';
            return 'red';
        }

        function getBarColor(value) {
            if (value >= 90) return 'rgba(34, 197, 94, 0.7)';   // verde
            if (value >= 70) return 'rgba(234, 179, 8, 0.7)';    // amarillo
            return 'rgba(239, 68, 68, 0.7)';                     // rojo
        }

        // Variables globales de gráficos
        let complianceChart, priorityDonut, trendChart;

        // Renderizar todo el dashboard
        function renderDashboard() {
            // Actualizar tarjetas
            const valoresArray = Object.values(valoresRendimiento);
            const avg = valoresArray.reduce((a,b)=>a+b,0) / valoresArray.length;
            document.getElementById('avgCompliance').innerHTML = Math.round(avg) + '%';
            const greenCount = valoresArray.filter(v => v >= 90).length;
            document.getElementById('greenKpis').innerText = greenCount;
            document.getElementById('openIncidents').innerText = incidentesAbiertosAlta;
            document.getElementById('auditedSystems').innerText = porcentajeAuditados + '%';

            // Construir tabla con enlaces editables (href="#", puedes cambiarlo después)
            const tbody = document.getElementById('kpiTableBody');
            tbody.innerHTML = '';
            datosKPIs.forEach(kpi => {
                const valor = valoresRendimiento[kpi.id] || 0;
                const color = getColorForValue(valor);
                let badge = '';
                if (color === 'green') badge = '<span class="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">Verde ✔️</span>';
                else if (color === 'yellow') badge = '<span class="px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">Amarillo ⚠️</span>';
                else badge = '<span class="px-2 py-0.5 rounded-full bg-red-100 text-red-800 text-xs font-medium">Rojo 🔴</span>';
                
                // Enlace editable: cada fila tiene un <a> con clase "kpi-link" y href "#" (puedes cambiarlo manualmente o con script)
                const row = `<tr id="row-${kpi.id}" class="kpi-row">
                    <td class="px-4 py-3 font-mono text-xs text-center"><a href="#" class="kpi-link text-primary-600 hover:underline" data-id="${kpi.id}">${kpi.id}</a></td>
                    <td class="px-4 py-3 text-xs">${kpi.controlISA}</td>
                    <td class="px-4 py-3 text-xs max-w-xs">${kpi.descripcion}</td>
                    <td class="px-4 py-3 text-xs">${kpi.objetivo}</td>
                    <td class="px-4 py-3 text-xs font-semibold text-center">${valor}%<br>${badge}</td>
                    <td class="px-4 py-3 text-xs text-center">${kpi.umbral}</td>
                    <td class="px-4 py-3 text-xs text-center">${kpi.frecuencia}</td>
                    <td class="px-4 py-3 text-xs text-center">${kpi.responsables}</td>
                    <td class="px-4 py-3 text-xs">${kpi.componentes}</td>
                </tr>`;
                tbody.insertAdjacentHTML('beforeend', row);
            });

            // Gráfico de barras con colores individuales
            const labels = datosKPIs.map(k => k.id);
            const dataValues = datosKPIs.map(k => valoresRendimiento[k.id] || 0);
            const backgroundColors = dataValues.map(v => getBarColor(v));
            if (complianceChart) complianceChart.destroy();
            const ctx = document.getElementById('complianceChart').getContext('2d');
            complianceChart = new Chart(ctx, {
                type: 'bar',
                data: { labels, datasets: [{ label: 'Cumplimiento actual (%)', data: dataValues, backgroundColor: backgroundColors, borderRadius: 6 }] },
                options: { responsive: true, maintainAspectRatio: true, scales: { y: { max: 100, title: { display: true, text: '%' } } }, plugins: { tooltip: { callbacks: { label: (ctx) => `${ctx.raw}%` } } } }
            });

            // Gráfico de dona (Top 5 peores)
            const sorted = [...datosKPIs].sort((a,b)=> (valoresRendimiento[a.id]||100) - (valoresRendimiento[b.id]||100)).slice(0,5);
            const donutLabels = sorted.map(k => k.id);
            const donutData = sorted.map(k => valoresRendimiento[k.id]);
            if (priorityDonut) priorityDonut.destroy();
            const ctxDonut = document.getElementById('priorityDonut').getContext('2d');
            priorityDonut = new Chart(ctxDonut, {
                type: 'doughnut',
                data: { labels: donutLabels, datasets: [{ data: donutData, backgroundColor: ['#ef4444','#f97316','#eab308','#3b82f6','#10b981'], borderWidth: 0 }] },
                options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
            });

            // Gráfico de líneas (histórico)
            if (trendChart) trendChart.destroy();
            const ctxLine = document.getElementById('trendChart').getContext('2d');
            trendChart = new Chart(ctxLine, {
                type: 'line',
                data: { labels: mesesHistoricos, datasets: [{ label: 'Cumplimiento promedio mensual (%)', data: datosHistoricos, borderColor: '#3b82f6', backgroundColor: 'rgba(59,130,246,0.1)', tension: 0.3, fill: true, pointBackgroundColor: '#2563eb' }] },
                options: { responsive: true, scales: { y: { min: 0, max: 100, title: { display: true, text: '%' } } } }
            });

            // Generar índice lateral (TOC) con evento de highlight
            const tocDiv = document.getElementById('tocContainer');
            tocDiv.innerHTML = '';
            datosKPIs.forEach(kpi => {
                const link = document.createElement('a');
                link.className = 'toc-link block py-1.5 px-1 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors';
                link.innerHTML = `<i class="fas fa-chart-line w-4 text-xs"></i> ${kpi.id} - ${kpi.controlISA.substring(0,40)}`;
                link.onclick = (e) => {
                    e.preventDefault();
                    const targetRow = document.getElementById(`row-${kpi.id}`);
                    if (targetRow) {
                        targetRow.classList.add('highlight-row');
                        setTimeout(() => {
                            targetRow.classList.remove('highlight-row');
                        }, 3000);
                        targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                };
                tocDiv.appendChild(link);
            });
        }

        // Simular mejora aleatoria
        function simularMejora() {
            for (let k in valoresRendimiento) {
                let nuevo = valoresRendimiento[k] + Math.floor(Math.random() * 6) + 1;
                if (nuevo > 100) nuevo = 100;
                valoresRendimiento[k] = nuevo;
            }
            incidentesAbiertosAlta = Math.max(0, incidentesAbiertosAlta - 1);
            porcentajeAuditados = Math.min(100, porcentajeAuditados + 2);
            // También mejora ligera en históricos (simulación)
            for (let i = 0; i < datosHistoricos.length; i++) {
                datosHistoricos[i] = Math.min(100, datosHistoricos[i] + Math.random() * 2);
            }
            renderDashboard();
            Swal.fire('Datos actualizados', 'Se han mejorado los niveles de cumplimiento (simulación).', 'success');
        }

        function resetDataOriginal() {
            valoresRendimiento = {
                "KPI-01": 92, "KPI-02": 88, "KPI-03": 76, "KPI-04": 98, "KPI-05": 85,
                "KPI-06": 79, "KPI-07": 91, "KPI-08": 84, "KPI-09": 100, "KPI-10": 96,
                "KPI-11": 73, "KPI-12": 94, "KPI-13": 82, "KPI-14": 87, "KPI-15": 99,
                "KPI-16": 78, "KPI-17": 68, "KPI-18": 75
            };
            incidentesAbiertosAlta = 2;
            porcentajeAuditados = 90;
            datosHistoricos = [0, 0, 5, 10, 22, 34, 43, 51, 60, 77, 86, 88, 90];
            renderDashboard();
            Swal.fire('Restablecido', 'Los datos volvieron a los valores originales.', 'info');
        }

        // Exportar a PDF (solo el contenido principal, sin sidebar)
        async function exportToPDF() {
            // Seleccionar el elemento principal que contiene todo el dashboard (excluye sidebar)
            const element = document.querySelector('main');
            if (!element) {
                Swal.fire('Error', 'No se encontró el contenido principal', 'error');
                return;
            }

            // Obtener datos para el nombre del archivo (fecha actual)
            const now = new Date();
            const fechaStr = now.toISOString().slice(0, 19).replace(/:/g, '-');
            const filename = `Dashboard_KPIs_Seguridad_${fechaStr}.pdf`;

            // Márgenes en mm (izquierdo, superior, derecho, inferior)
            const margins = {
                left: 10,
                top: 15,
                bottom: 15,
                right: 10
            };

            // Ocultar temporalmente elementos que no deben aparecer en el PDF
            // (por ejemplo, botones de acción que flotan, el sidebar, etc.)
            const sidebar = document.querySelector('aside');
            const backBtn = document.querySelector('.flex.gap-2'); // botones de refrescar/exportar
            let sidebarDisplay = null;
            let backBtnDisplay = null;
            if (sidebar) {
                sidebarDisplay = sidebar.style.display;
                sidebar.style.display = 'none';
            }
            if (backBtn) {
                backBtnDisplay = backBtn.style.display;
                backBtn.style.display = 'none';
            }

            // Clonar profundamente el elemento para evitar modificar el original
            const cloneElement = element.cloneNode(true);
            
            // Eliminar del clon cualquier botón no deseado (por si acaso)
            const unwantedButtons = cloneElement.querySelectorAll('#refreshDashboard, #exportReport, #simulateUpdate, #resetData');
            unwantedButtons.forEach(btn => btn.remove());

            // Crear un contenedor temporal con el clon limpio
            const tempDiv = document.createElement('div');
            tempDiv.style.backgroundColor = 'white';
            tempDiv.style.padding = '12px';
            tempDiv.style.fontFamily = "'Inter', 'Segoe UI', sans-serif";
            tempDiv.style.width = '100%';
            tempDiv.style.maxWidth = '210mm'; // ancho A4
            tempDiv.style.margin = '0 auto';

            // Opcional: agregar un header con el título y fecha
            const headerDiv = document.createElement('div');
            headerDiv.style.marginBottom = '15px';
            headerDiv.style.borderBottom = '2px solid #1e3a8a';
            headerDiv.style.paddingBottom = '6px';
            headerDiv.style.display = 'flex';
            headerDiv.style.justifyContent = 'space-between';
            headerDiv.style.alignItems = 'flex-end';
            headerDiv.innerHTML = `
                <div style="font-weight: bold; font-size: 1.2rem; color: #1e3a8a;">Prodismo SRL - Dashboard de KPIs</div>
                <div style="font-size: 0.7rem; color: #4b5563;">Generado: ${now.toLocaleString()}</div>
            `;

            // Footer con número de página (se agregará luego durante la generación de PDF)
            // La función addImagesToPdf se encargará del pie de página personalizado

            tempDiv.appendChild(headerDiv);
            tempDiv.appendChild(cloneElement);

            // Agregar un footer fijo al final del contenido (no se repetirá por página automáticamente,
            // pero se añadirá como parte de la imagen; para que aparezca en todas las páginas habría
            // que inyectarlo en cada fragmento, pero por simplicidad se deja así)
            const footerDiv = document.createElement('div');
            footerDiv.style.marginTop = '20px';
            footerDiv.style.borderTop = '1px solid #ccc';
            footerDiv.style.paddingTop = '6px';
            footerDiv.style.textAlign = 'center';
            footerDiv.style.fontSize = '8pt';
            footerDiv.style.color = '#6c757d';
            footerDiv.innerHTML = `Documento generado por sistema de gestión de seguridad | F612-IT-2 Dashboard ISO 27001 / TISAX`;
            tempDiv.appendChild(footerDiv);

            // Ocultar temporalmente en el DOM para capturarlo con html2canvas
            tempDiv.style.position = 'absolute';
            tempDiv.style.top = '-9999px';
            tempDiv.style.left = '-9999px';
            document.body.appendChild(tempDiv);

            // Esperar un breve instante para que los estilos se apliquen
            await new Promise(resolve => setTimeout(resolve, 300));

            // Mostrar mensaje de espera
            Swal.fire({
                title: 'Generando PDF',
                text: 'Por favor espere, el dashboard se está procesando...',
                allowOutsideClick: false,
                didOpen: () => { Swal.showLoading(); }
            });

            try {
                // Capturar el contenedor temporal con html2canvas
                const canvas = await html2canvas(tempDiv, {
                    scale: 1.5, //2, (1.5-2-3)
                    logging: false,
                    useCORS: false,
                    letterRendering: true
                });

                // Eliminar el contenedor temporal del DOM
                document.body.removeChild(tempDiv);
                // Restaurar visibilidad de elementos ocultos
                if (sidebar) sidebar.style.display = sidebarDisplay;
                if (backBtn) backBtn.style.display = backBtnDisplay;

                const imgData = canvas.toDataURL('image/jpeg', 1.0);
                const { jsPDF } = window.jspdf;
                const doc = new jsPDF({
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait'
                });

                const pageHeight = doc.internal.pageSize.getHeight();
                const pageWidth = doc.internal.pageSize.getWidth();
                const imgWidth = pageWidth - margins.left - margins.right;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                const contentHeight = pageHeight - margins.top - margins.bottom;

                let heightLeft = imgHeight;
                let yPosition = 0;
                let pageNum = 1;

                // Función auxiliar para agregar fragmentos de imagen en múltiples páginas
                async function addImageFragments(doc, imgData, imgWidth, imgHeight, pageHeight, margins, contentHeight) {
                    let remaining = imgHeight;
                    let yOffset = 0;
                    let firstPage = true;

                    while (remaining > 0) {
                        const currentHeight = Math.min(contentHeight, remaining);
                        if (currentHeight <= 0) break;

                        if (!firstPage) {
                            doc.addPage();
                        }

                        // Crear canvas temporal para extraer el fragmento
                        const canvasFrag = document.createElement('canvas');
                        const ctxFrag = canvasFrag.getContext('2d');
                        const img = new Image();
                        img.src = imgData;

                        await new Promise((resolve) => {
                            img.onload = () => {
                                const sourceWidth = img.width;
                                const sourceHeight = img.height;
                                const sourceY = (yOffset / imgHeight) * sourceHeight;
                                const fragHeight = (currentHeight / imgHeight) * sourceHeight;

                                canvasFrag.width = sourceWidth;
                                canvasFrag.height = fragHeight;
                                ctxFrag.drawImage(img, 0, sourceY, sourceWidth, fragHeight, 0, 0, sourceWidth, fragHeight);
                                const fragData = canvasFrag.toDataURL('image/jpeg', 1.0);
                                doc.addImage(fragData, 'JPEG', margins.left, margins.top, imgWidth, currentHeight);
                                resolve();
                            };
                        });

                        remaining -= currentHeight;
                        yOffset += currentHeight;
                        firstPage = false;
                    }
                }

                await addImageFragments(doc, imgData, imgWidth, imgHeight, pageHeight, margins, contentHeight);

                // Guardar el PDF
                doc.save(filename);

                Swal.close();
                await Swal.fire({
                    icon: 'success',
                    title: 'PDF exportado',
                    text: `El archivo "${filename}" se ha descargado correctamente.`,
                    confirmButtonColor: '#1e3a8a'
                });
            } catch (error) {
                console.error('Error al generar PDF:', error);
                // Limpiar en caso de error
                if (document.body.contains(tempDiv)) document.body.removeChild(tempDiv);
                if (sidebar) sidebar.style.display = sidebarDisplay;
                if (backBtn) backBtn.style.display = backBtnDisplay;
                Swal.close();
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se pudo generar el PDF. Intente nuevamente.',
                    confirmButtonColor: '#d33'
                });
            }
        }

        // función vieja -------------------------------
        // function exportToPDF() {
        //     const element = document.querySelector('main');
        //     const opt = {
        //         margin: [0.5, 0.5, 0.5, 0.5],
        //         filename: 'dashboard_kpis_seguridad.pdf',
        //         image: { type: 'jpeg', quality: 0.98 },
        //         html2canvas: { scale: 2, useCORS: true },
        //         jsPDF: { unit: 'in', format: 'a4', orientation: 'landscape' }
        //     };
        //     Swal.fire({
        //         title: 'Generando PDF...',
        //         text: 'Por favor espera mientras se prepara el informe.',
        //         allowOutsideClick: false,
        //         didOpen: () => { Swal.showLoading(); }
        //     });
        //     html2pdf().set(opt).from(element).save().then(() => {
        //         Swal.close();
        //         Swal.fire('Éxito', 'El informe PDF ha sido descargado.', 'success');
        //     }).catch(err => {
        //         Swal.close();
        //         Swal.fire('Error', 'No se pudo generar el PDF: ' + err, 'error');
        //     });
        // }


        // Eventos y carga inicial
        document.getElementById('refreshDashboard')?.addEventListener('click', () => { renderDashboard(); Swal.fire('Actualizado', 'Dashboard refrescado con los datos actuales', 'info'); });
        document.getElementById('simulateUpdate')?.addEventListener('click', simularMejora);
        document.getElementById('resetData')?.addEventListener('click', resetDataOriginal);
        document.getElementById('exportReport')?.addEventListener('click', exportToPDF);
        
        renderDashboard();

        // Pequeño fallback para SweetAlert si no existiera
        if (typeof Swal === 'undefined') window.Swal = { fire: (t, m) => alert(`${t}: ${m}`) };
        
        // Scripts generales de Prodismo (para header/sidebar)
        if (typeof loadModules === 'function') loadModules();
