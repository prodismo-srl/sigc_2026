// Función para inicializar todos los componentes
document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    initializeSearch();
    initializeTableOfContents();
    initializeSmoothScroll();
    initializeBackToTop();
    initializeQuickActions();
    initializePDFDownload();
    initializeContactLinks();
    initializeRiskCalculator();
});

// Función para el toggle de tema claro/oscuro
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const savedTheme = localStorage.getItem('theme') || 'light';

    // console.log('themeToggle', themeToggle);
    // console.log('themeIcon', themeIcon);
    // console.log('savedTheme', savedTheme);
    // Función para cambiar imágenes
    function updateImages(isDark) {
        const logoImages = document.querySelectorAll('[data-theme-logo]');

        logoImages.forEach(img => {
            if (isDark) {
                img.src = img.getAttribute('data-dark-src');
            } else {
                img.src = img.getAttribute('data-light-src');
            }
        });
    }

    // Apply saved theme on initial load
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
        if (themeIcon) {
            themeIcon.classList.add('fa-sun');
            themeIcon.classList.remove('fa-moon');
        }
        updateImages(true);
    } else {
        document.documentElement.classList.remove('dark');
        if (themeIcon) {
            themeIcon.classList.add('fa-moon');
            themeIcon.classList.remove('fa-sun');
        }
        updateImages(false);
    }

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');

            if (themeIcon) {
                if (isDark) {
                    themeIcon.classList.add('fa-sun');
                    themeIcon.classList.remove('fa-moon');
                } else {
                    themeIcon.classList.add('fa-moon');
                    themeIcon.classList.remove('fa-sun');
                }
            }

            // Actualizar imágenes cuando se cambie el tema
            updateImages(isDark);
        });
    }
}

// Función para la búsqueda en el contenido
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const mobileSearchInput = document.getElementById('mobile-search-input');

    function performSearch(query) {
        if (!query.trim()) return;

        // Buscar en todo el contenido
        const content = document.querySelector('main').textContent;
        const regex = new RegExp(query, 'gi');
        const matches = content.match(regex);

        if (matches) {
            // Resaltar resultados (implementación básica)
            highlightSearchResults(query);

            // Mostrar número de resultados
            Swal.fire({
                title: 'Resultados de búsqueda',
                text: `Se encontraron ${matches.length} coincidencias para "${query}"`,
                icon: 'info',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'Sin resultados',
                text: `No se encontraron coincidencias para "${query}"`,
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });
        }
    }

    function highlightSearchResults(query) {
        // Remover resaltados anteriores
        const existingHighlights = document.querySelectorAll('.search-highlight');
        existingHighlights.forEach(el => {
            const parent = el.parentNode;
            parent.replaceChild(document.createTextNode(el.textContent), el);
            parent.normalize();
        });

        // Resaltar nuevas coincidencias
        const walker = document.createTreeWalker(
            document.querySelector('main'),
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while (node = walker.nextNode()) {
            if (node.textContent.toLowerCase().includes(query.toLowerCase())) {
                const span = document.createElement('span');
                span.className = 'search-highlight bg-yellow-200 dark:bg-yellow-800';
                span.textContent = node.textContent;
                node.parentNode.replaceChild(span, node);
            }
        }
    }

    // Event listeners para búsqueda
    [searchInput, mobileSearchInput].forEach(input => {
        if (input) {
            input.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    performSearch(this.value);
                }
            });
        }
    });
}

// Table of Contents Navigation
function initializeTableOfContents() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const sections = Array.from(tocLinks).map(link => {
        const href = link.getAttribute('href');
        return document.querySelector(href);
    });

    function updateActiveTocLink() {
        const scrollPosition = window.scrollY + 100;

        let activeIndex = 0;
        sections.forEach((section, index) => {
            if (section && scrollPosition >= section.offsetTop) {
                activeIndex = index;
            }
        });

        tocLinks.forEach(link => link.classList.remove('active'));
        if (tocLinks[activeIndex]) {
            tocLinks[activeIndex].classList.add('active');
        }
    }

    window.addEventListener('scroll', updateActiveTocLink);
    updateActiveTocLink();
}

// Función para scroll suave en los enlaces del índice
function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Función para el botón "Volver arriba"
function initializeBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');

    if (backToTopButton) {
        window.addEventListener('scroll', function () {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.remove('opacity-0', 'invisible');
                backToTopButton.classList.add('opacity-100', 'visible');
            } else {
                backToTopButton.classList.remove('opacity-100', 'visible');
                backToTopButton.classList.add('opacity-0', 'invisible');
            }
        });

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Función para las acciones rápidas
function initializeQuickActions() {
    const reportIncidentBtn = document.getElementById('report-incident');
    const contactSupportBtn = document.getElementById('contact-support');
    const inventaryResume = document.getElementById('inventary-resume');
    const reportStolenBtn = document.getElementById('report-perdida-robo');
    const requestRenewBtn = document.getElementById('solicitar-renovacion');
    const checkListBtn = document.getElementById('consultar-inventario');
    const cvss_calculator = document.getElementById('cvss-calculator');

    if (reportIncidentBtn) {
        reportIncidentBtn.addEventListener('click', function () {
            // Abrir cliente de correo para reportar incidente
            const subject = 'Reporte de Incidente de Seguridad';
            const body = `Hola equipo de seguridad,\n\nMe pongo en contacto para reportar el siguiente incidente relacionado con activos:\n\n- Tipo de incidente:\n- Activo(s) afectado(s):\n- Fecha y hora:\n- Descripción:\n- Impacto estimado:\n\nSaludos cordiales.`;
            window.location.href = `mailto:itprodismo@prodismo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    if (contactSupportBtn) {
        contactSupportBtn.addEventListener('click', function () {
            // Mostrar opciones de contacto
            Swal.fire({
                title: 'Contactar Soporte',
                imageUrl: '../../../../images/ITProdimo_logo.png',
                imageWidth: 225,
                imageHeight: 60,
                showCancelButton: true,
                html: `
                    <div class="text-left">
                        <p class="mb-4">Seleccione una opción de contacto:</p>
                        <div class="space-y-3">
                            <a href="mailto:itprodismo@prodismo.com" class="block p-3 bg-gray-600 rounded-lg hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors" target="_blank">
                                <div class="flex items-center">
                                    <i class="fas fa-envelope mr-3" style="color: #e9e9ea;"></i>
                                    
                                    <div>
                                        <div class="font-medium text-gray-400 dark:text-gray-200">Correo electrónico</div>
                                        <div class="text-sm text-gray-300 dark:text-gray-400">itprodismo@prodismo.com</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://wa.me/5493515217958" class="block p-3 bg-gray-600 rounded-lg hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors" target="_blank">
                                <div class="flex items-center">
                                    <i class="fab fa-whatsapp mr-3" style="color:rgb(70, 225, 88);"></i>
                                    <div>
                                        <div class="font-medium text-gray-400 dark:text-gray-200">WhatsApp</div>
                                        <div class="text-sm text-gray-300 dark:text-gray-400">+54 9 351 521-7958</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                `,
                showConfirmButton: false,
                showCloseButton: true,
                draggable: true
            });
        });
    }

    if (inventaryResume) {
        inventaryResume.addEventListener('click', function () {
            // Abrir App inventario en nueva pestaña sin opciones específicas
            window.open('https://prodismo.snipe-it.io/', '_blank', 'noopener,noreferrer');
        });
    }

    if (reportStolenBtn) {
        reportStolenBtn.addEventListener('click', function () {
            // Abrir cliente de correo para reportar incidente
            const subject = 'Reporte de Incidente de Seguridad - Gestión de Riesgos';
            const body = `Hola equipo de seguridad,\n\nMe pongo en contacto para reportar el siguiente incidente relacionado con riesgos de seguridad:\n\n- Tipo de incidente:\n- Riesgo(s) identificado(s):\n- Fecha y hora:\n- Descripción:\n- Impacto estimado:\n\nSaludos cordiales.`;
            window.location.href = `mailto:itprodismo@prodismo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    if (requestRenewBtn) {
        requestRenewBtn.addEventListener('click', function () {
            // Abrir cliente de correo para reportar incidente
            const subject = 'Solicitar Renovación - Gestión de Medios Identificación';
            const body = `Hola equipo de seguridad,\n\nMe pongo en contacto para solicitar la renovación de identificación:\n\n- Equipo Id#:\n-Descripción:\n - Fecha y hora:\n\nSaludos cordiales.`;
            window.location.href = `mailto:itprodismo@prodismo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });
    }

    if (checkListBtn) {
        checkListBtn.addEventListener('click', function () {
            // Mostrar opciones de contacto
            Swal.fire({
                title: 'Contactar Soporte',
                imageUrl: '../../../../images/ITProdimo_logo.png',
                imageWidth: 225,
                imageHeight: 60,
                showCancelButton: true,
                html: `
                    <div class="text-left">
                        <p class="mb-4">Seleccione una opción de contacto:</p>
                        <div class="space-y-3">
                            <a href="mailto:itprodismo@prodismo.com" class="block p-3 bg-gray-600 rounded-lg hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors" target="_blank">
                                <div class="flex items-center">
                                    <i class="fas fa-envelope mr-3" style="color: #e9e9ea;"></i>
                                    
                                    <div>
                                        <div class="font-medium text-gray-400 dark:text-gray-200">Correo electrónico</div>
                                        <div class="text-sm text-gray-300 dark:text-gray-400">itprodismo@prodismo.com</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://wa.me/5493515217958" class="block p-3 bg-gray-600 rounded-lg hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors" target="_blank">
                                <div class="flex items-center">
                                    <i class="fab fa-whatsapp mr-3" style="color:rgb(70, 225, 88);"></i>
                                    <div>
                                        <div class="font-medium text-gray-400 dark:text-gray-200">WhatsApp</div>
                                        <div class="text-sm text-gray-300 dark:text-gray-400">+54 9 351 521-7958</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                `,
                showConfirmButton: false,
                showCloseButton: true,
                draggable: true
            });
        });
    }

    if (cvss_calculator) {
        cvss_calculator.addEventListener('click', function () {
            // Mostrar opciones de contacto
            Swal.fire({
                title: 'Sistema Común de Puntuación de Vulnerabilidades (SIG)',
                imageUrl: '../../../../images/ITProdimo_logo.png',
                imageWidth: 225,
                imageHeight: 60,
                showCancelButton: true,
                html: `
                    <div class="text-left">
                        <p class="mb-4">Seleccione una opción:</p>
                        <div class="space-y-3">
                            <a href="https://www.first.org/cvss/" class="block p-3 bg-gray-600 rounded-lg hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors" target="_blank">
                                <div class="flex items-center">
                                    <i class="fa-regular fa-file-lines mr-3" style="color:rgb(167, 167, 167);"></i>
                                    
                                    <div>
                                        <div class="font-medium text-gray-400 dark:text-gray-200">Documentos CVSS 3.1</div>
                                        <div class="text-sm text-gray-300 dark:text-gray-400">https://www.first.org/cvss/</div>
                                    </div>
                                </div>
                            </a>
                            <a href="https://www.first.org/cvss/calculator/3-1" class="block p-3 bg-gray-600 rounded-lg hover:bg-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors" target="_blank">
                                <div class="flex items-center">
                                    <i class="fas fa-calculator mr-3" style="color:rgb(225, 158, 70);"></i>
                                    <div>
                                        <div class="font-medium text-gray-400 dark:text-gray-200">Calculadora CVSS 3.1</div>
                                        <div class="text-sm text-gray-300 dark:text-gray-400">https://www.first.org/cvss/calculator/3-18</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                `,
                showConfirmButton: false,
                showCloseButton: true,
                draggable: true
            });
        });
    }
}

// Función para la descarga de PDF (A4 fijo, sin desbordes)
function initializePDFDownload() {
    const pdfDownloadBtn = document.getElementById('pdf-download');
    if (!pdfDownloadBtn) return;

    pdfDownloadBtn.addEventListener('click', async function () {
        const isDarkMode = document.getElementById('theme-icon');
        if (isDarkMode && isDarkMode.classList.contains('fa-sun')) {
            Swal.fire({
                title: 'Modo oscuro detectado',
                html: `
                    <div class="text-left">
                        <p class="mb-3">Para una correcta generación del PDF, es necesario cambiar al <strong>modo claro</strong>.</p>
                        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded-lg">
                        <div class="flex">
                            <div class="ml-3">
                            <p class="text-sm text-yellow-700">
                                <strong>Instrucciones:</strong>
                                <ol class="list-decimal space-y-2 pl-4 mt-1">
                                <li>Haga clic en el botón de cambio de tema <i class="fas fa-sun ml-1"></i></li>
                                <li>Cambie a modo claro</li>
                                <li>Vuelva a intentar la descarga del PDF</li>
                                </ol>
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    `,
                icon: 'warning',
                confirmButtonText: 'Entendido',
                showCancelButton: false
            });
            return;
        }

        const result = await Swal.fire({
            title: 'Generar PDF',
            text: '¿Desea generar y descargar el documento en formato PDF?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Generar PDF',
            cancelButtonText: 'Cancelar',
            showLoaderOnConfirm: true,
            preConfirm: () => {
                return new Promise((resolve) => setTimeout(resolve, 500));
            }
        });

        if (!result.isConfirmed) return;

        try {
            const docTitle = document.querySelector('h1')?.textContent || 'Documento';
            const docCode = document.querySelector('.flex.items-center.space-x-1:has(.fa-file-code) span')?.textContent || 'Sin_Codigo';
            const docRev = document.querySelector('.flex.items-center.space-x-1:has(.fa-file-alt) span')?.textContent || 'Rev.X';
            const docDate = document.querySelector('.flex.items-center.space-x-1:has(.fa-calendar) span')?.textContent || new Date().toLocaleDateString();

            const cleanDocCode = docCode.replace('Código:', '').trim();
            const cleanDocRev = docRev.replace('Rev. N°:', '').trim();
            const cleanDocDate = docDate.replace('Última revisión:', '').trim();
            const maxTitleLength = 50;
            const formattedDate = cleanDocDate.replace(/\//g, '-');

            const cleanDocTitle = docTitle
                .replace(/\r?\n|\r/g, '')
                .replace(/\t/g, '')
                .trim()
                .replace(/\s+/g, ' ')
                .replace(/\s{2,}/g, ' ');
            const fileName = `${cleanDocCode}_${cleanDocTitle.substring(0, maxTitleLength)}-Rev#${cleanDocRev}-Fecha_${formattedDate}.pdf`;

            const mainContent = document.querySelector('main article.prose');
            if (!mainContent) throw new Error('No se encontró el contenido principal');

            // Clonar y limpiar
            const elementToPrint = mainContent.cloneNode(true);
            const elementsToRemove = [
                '.flex.justify-between.items-center',
                '#back-to-top',
                '.toc-link',
                'button',
                'a[href^="#"]',
                'aside',
                'header',
                'footer',
                'nav',
                '.mobile-search',
                '.theme-toggle',
                '.quick-actions',
                '.document-info',
                'h1',
                '#metadata',
            ];
            elementsToRemove.forEach(selector => {
                elementToPrint.querySelectorAll(selector).forEach(el => el.remove());
            });

            // Contenedor A4: ancho útil 190 mm (márgenes laterales 10 mm)
            const pdfContainer = document.createElement('div');
            pdfContainer.style.cssText = `
                font-family: 'Inter', Arial, sans-serif;
                width: 1436px !important; /* Ancho A4 190mm */
                max-width: 1436px !important; /* Ancho máximo A4 190mm */
                margin: 0 !important; /* Margen 0 */
                padding: 0 !important;
                color: #000;
                line-height: 1.5 !important;
                box-sizing: border-box !important;
                overflow-wrap: anywhere !important;
                word-break: break-word !important;
                background: #fff;
            `;

            // Header
            const docHeader = document.createElement('div');
            docHeader.style.cssText = `
                border-bottom: 2px solid #1a429a;
                padding-bottom: 6mm;
                margin-bottom: 6mm;
                box-sizing: border-box;
                max-width: 100%;
            `;

            const logo = document.querySelector('img[alt="Logo Prodismo"]') || document.querySelector('img[alt="LogoProdismo"]');
            if (logo) {
                const logoClone = logo.cloneNode(true);
                logoClone.style.maxWidth = '150px';
                logoClone.style.height = 'auto';
                logoClone.style.display = 'block';
                logoClone.style.marginBottom = '5mm';
                logoClone.style.objectFit = 'contain';
                docHeader.appendChild(logoClone);
            }

            const title = document.createElement('h1');
            title.textContent = docTitle;
            title.style.cssText = `
                font-size: 8mm; font-weight: 700; color: #1f2937; margin: 2mm 0; 
                box-sizing: border-box; max-width: 100%;
            `;
            docHeader.appendChild(title);

            const metadata = document.createElement('div');
            metadata.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                gap: 3mm;
                font-size: 4.5mm;
                color: #6b7280;
                margin-top: 2mm;
                box-sizing: border-box;
                max-width: 100%;
            `;
            [
                { icon: '📄', text: docCode },
                { icon: '📅', text: docDate },
                { icon: '🔄', text: docRev },
                { icon: '🛡️', text: 'ISO 27001:2022 | TISAX AL3' }

            ].forEach(item => {
                const span = document.createElement('span');
                span.style.cssText = 'display: flex; align-items: center; gap: 2mm;';
                span.innerHTML = `${item.icon} ${item.text}`;
                metadata.appendChild(span);
            });
            docHeader.appendChild(metadata);

            pdfContainer.appendChild(docHeader);
            pdfContainer.appendChild(elementToPrint);

            // Estilos globales para ajuste a A4
            const styleElement = document.createElement('style');
            styleElement.textContent = `
                /* Ajustes de tipografía y flujo */
                h1 { font-size: 9mm !important; margin: 4mm 1mm !important; }
                h2 { font-size: 8mm !important; margin: 4mm 1mm !important; }
                h3 { font-size: 7mm !important; margin: 3mm 1mm !important; }
                p, li {
                    font-size: 6.5mm !important;
                    margin: 2.5mm 2mm !important;
                    padding: 1mm !important;
                    box-sizing: border-box !important;
                    max-width: 100% !important;
                    white-space: normal !important;
                    overflow-wrap: anywhere !important;
                    word-break: break-word !important;
                }
                span {
                    font-size: 7mm !important;
                }
                ul, ol, section, div {
                    margin: 3mm 2mm !important;
                    padding: 2mm !important;
                    box-sizing: border-box !important;
                    width: 100% !important;
                    max-width: 100% !important;
                    overflow: visible !important;
                    white-space: normal !important;
                }

                /* Imágenes y figuras 
                img, svg, canvas, figure {
                    max-width: 100% !important;
                    height: auto !important;
                    box-sizing: border-box !important;
                } */

                /* Tablas */
                table {
                    width: 100% !important;
                    max-width: 100% !important;
                    table-layout: fixed !important;
                    border-collapse: collapse !important;
                    border: 1px solid #e5e7eb !important;
                    font-size: 5mm !important;
                    margin: 3mm 0 !important;
                    box-sizing: border-box !important;
                    page-break-inside: avoid !important;
                    break-inside: avoid !important;
                }
                thead, tbody, tr { page-break-inside: avoid !important; break-inside: avoid !important; }
                th, td {
                    padding: 2mm !important;
                    border: 1px solid #e5e7eb !important;
                    vertical-align: top !important;
                    white-space: normal !important;
                    overflow-wrap: anywhere !important;
                    word-break: break-word !important;
                    min-width: 0 !important;
                    max-width: 100% !important;
                }
                th { font-weight: 700 !important; background-color: #f3f4f6 !important; text-align: left !important; }

                /* Evitar cortes bruscos */
                .avoid-page-break, h1, h2, h3, table, span {
                    page-break-inside: avoid !important;
                    break-inside: avoid !important;
                }

                /* Contenedores que suelen desbordarse */
                .overflow-x-auto, .min-w-full {
                    width: 100% !important;
                    max-width: 100% !important;
                    overflow: visible !important;
                }

                /* Footer visual dentro del DOM (opcional, solo si lo renderizas en el canvas) */
                .pdf-footer {
                    margin-top: 4mm;
                    padding-top: 2mm;
                    border-top: 1px solid #e5e7eb;
                    font-size: 3.5mm;
                    color: #3e4247;
                    text-align: center;
                    position: relative;
                    min-height: 20mm;
                    box-sizing: border-box;
                }

                /* @page para navegadores que lo respeten (no interferirá con html2pdf/jsPDF, pero ayuda) */
                @page {
                    size: A4;
                    margin: 10mm;
                }
            `;
            pdfContainer.appendChild(styleElement);

            // Marcar elementos que no deben romperse
            pdfContainer.querySelectorAll('table, h1, h2, .no-break').forEach(el => el.classList.add('avoid-page-break'));

            const scale = 2;

            // Opciones de html2pdf + jsPDF
            const opt = {
                margin: [12, 10, 23, 10], // mm: top, left, bottom, right
                filename: fileName,
                image: { type: 'jpeg', quality: 0.8 },

                html2canvas: {
                    scale: scale,
                    windowWidth: scale * 700,
                    useCORS: true,
                    logging: false,
                    backgroundColor: '#ffffff',
                    letterRendering: true, // Mejor para texto
                    imageTimeout: 10000,
                    removeContainer: true,
                    scrollY: 0,
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait',
                    compressPdf: true,
                    compress: true,
                    floatPrecision: 2
                },
                pagebreak: {
                    mode: ['avoid-all', 'css', 'legacy'],
                    avoid: ['.avoid-page-break', 'tr', 'td', 'th']
                },
                onclone: function (clonedDoc) {
                    const style = clonedDoc.createElement('style');
                    style.textContent = `
                    .avoid-page-break { page-break-inside: avoid !important; break-inside: avoid !important; }
                    h1, h2, h3 { page-break-after: avoid !important; }
                    table { page-break-inside: avoid !important; }
                `;
                    clonedDoc.head.appendChild(style);
                }
            };

            document.body.appendChild(pdfContainer);

            const pageNumberCallback = (pdf) => {
                const totalPages = pdf.internal.getNumberOfPages();
                const downloadDate = new Date().toLocaleString('es-ES', {
                    day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
                });

                for (let i = 1; i <= totalPages; i++) {
                    pdf.setPage(i);
                    const pageSize = pdf.internal.pageSize;
                    const pageWidth = pageSize.width ? pageSize.width : pageSize.getWidth();
                    const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();

                    pdf.setFontSize(8);
                    pdf.setTextColor(50, 50, 150);

                    const footerY = pageHeight - 12;
                    const footerText = [
                        'INFORMACIÓN INTERNA',
                        'Propiedad de Prodismo SRL, documentación impresa no controlada',
                        `Fecha de descarga: ${downloadDate}`
                    ];

                    footerText.forEach((line, index) => {
                        const textWidth = pdf.getStringUnitWidth(line) * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
                        const xPosition = (pageWidth - textWidth) / 2;
                        pdf.text(line, xPosition, footerY + (index * 3));
                    });

                    pdf.setDrawColor(200, 200, 200);
                    pdf.line(10, footerY - 5, pageWidth - 10, footerY - 5);

                    pdf.setFontSize(9);
                    pdf.setTextColor(120, 120, 120);
                    const pageText = `Página ${i} de ${totalPages}`;
                    const pageTextWidth = pdf.getStringUnitWidth(pageText) * pdf.internal.getFontSize() / pdf.internal.scaleFactor;
                    const pageXPosition = pageWidth - pageTextWidth - 10;
                    pdf.text(pageText, pageXPosition, footerY + 6);
                }
            };

            function addWatermark(pdf, text) {
                const totalPages = pdf.internal.getNumberOfPages();

                for (let i = 1; i <= totalPages; i++) {
                    pdf.setPage(i);

                    const pageWidth = pdf.internal.pageSize.getWidth();
                    const pageHeight = pdf.internal.pageSize.getHeight();

                    pdf.saveGraphicsState();
                    pdf.setTextColor(180, 180, 180);
                    pdf.setFontSize(40);
                    pdf.setGState(new pdf.GState({ opacity: 0.12 }));

                    pdf.text(
                        text,
                        pageWidth / 2,
                        pageHeight / 2,
                        { angle: 45, align: 'center' }
                    );

                    pdf.restoreGraphicsState();
                }
            }


            await html2pdf()
                .set(opt)
                .from(pdfContainer)
                .toPdf()
                .get('pdf')
                .then((pdf) => {
                    pageNumberCallback(pdf);
                    pdf.save(fileName);
                });

            document.body.removeChild(pdfContainer);

            // Mostrar mensaje de éxito
            Swal.fire({
                title: '¡PDF Generado!',
                text: `El documento "${fileName}" se ha descargado correctamente.`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
                timer: 3000,
                timerProgressBar: true
            });

        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Ocurrió un error al generar el PDF. Por favor, intente nuevamente.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    });
}

// CONSEJOS PARA OPTIMIZAR TAMAÑO Y CANTIDAD DE HOJAS:
// 
// 1. PARA REDUCIR NÚMERO DE HOJAS:
//    - Reducir márgenes: margin: [5, 5, 10, 5]
//    - Reducir tamaño de fuente: font-size en styleAdjustments
//    - Reducir interlineado: line-height: 1.4
//    - Reducir espaciado entre elementos
//    - Cambiar a landscape: orientation: 'landscape'
//    - Usar papel más grande: format: 'a3'
//
// 2. PARA REDUCIR TAMAÑO DEL ARCHIVO:
//    - Reducir calidad de imágenes: quality: 0.7
//    - Reducir escala: scale: 1.5
//    - Deshabilitar enlaces: enableLinks: false
//    - Habilitar compresión: compress: true y compressPdf: true
//    - Reducir tamaño de marca de agua: font-size: 40px
//
// 3. PARA MEJOR CALIDAD:
//    - Aumentar escala: scale: 3
//    - Aumentar calidad: quality: 0.98
//    - Aumentar márgenes para mejor legibilidad

// Función para esperar que un elemento esté disponible en el DOM
function waitForElement(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
        const startTime = Date.now();

        function checkElement() {
            const element = document.querySelector(selector);
            if (element) {
                resolve(element);
            } else if (Date.now() - startTime > timeout) {
                reject(new Error(`Elemento ${selector} no encontrado después de ${timeout}ms`));
            } else {
                setTimeout(checkElement, 100);
            }
        }

        checkElement();
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Esperar a que el botón de descarga esté disponible
    waitForElement('#pdf-download')
        .then(() => {
            initializePDFDownload();
        })
        .catch(error => {
            console.warn('Botón de descarga PDF no encontrado:', error);
        });
});

// Función para inicializar enlaces de contacto (email y WhatsApp)
function initializeContactLinks() {
    // Los enlaces ya están en el HTML, esta función podría usarse para agregar funcionalidad adicional

    // Podemos agregar tracking de clics aquí si es necesario
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me/"]');

    emailLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Tracking de analytics para clics en email
            console.log('Email clickeado:', this.href);
        });
    });

    whatsappLinks.forEach(link => {
        link.addEventListener('click', function () {
            // Tracking de analytics para clics en WhatsApp
            console.log('WhatsApp clickeado:', this.href);
        });
    });
}

// Función para calcular nivel de riesgo
function initializeRiskCalculator() {
    // Ejemplo de función para calcular nivel de riesgo basado en probabilidad e impacto
    window.calculateRiskLevel = function (probability, impact) {
        const riskScore = probability * impact;
        let riskLevel, riskColor;

        if (riskScore <= 6) {
            riskLevel = 'Bajo';
            riskColor = 'green';
        } else if (riskScore <= 12) {
            riskLevel = 'Medio';
            riskColor = 'yellow';
        } else if (riskScore <= 18) {
            riskLevel = 'Alto';
            riskColor = 'orange';
        } else {
            riskLevel = 'Crítico';
            riskColor = 'red';
        }

        return {
            score: riskScore,
            level: riskLevel,
            color: riskColor
        };
    };
}

// Función para generar reporte de riesgos
function generateRiskReport(risks) {
    // Esta función podría generar un reporte de riesgos en formato estructurado
    const report = {
        fecha: new Date().toISOString().split('T')[0],
        riesgos: risks,
        total: risks.length,
        criticos: risks.filter(r => r.nivel === 'Crítico').length,
        altos: risks.filter(r => r.nivel === 'Alto').length
    };

    return report;
}

function safeLinkNavigation(url, timeout = 5000) {
    return new Promise((resolve) => {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        fetch(url, {
            method: 'HEAD',
            signal: controller.signal
        })
            .then(response => {
                clearTimeout(timeoutId);
                resolve(response.ok);
            })
            .catch(() => {
                clearTimeout(timeoutId);
                resolve(false);
            });
    });
}

// Uso:
document.addEventListener('click', async function (event) {
    const link = event.target.closest('a');

    if (link && link.hostname === window.location.hostname) {
        event.preventDefault();

        const isAvailable = await safeLinkNavigation(link.href);

        if (isAvailable) {
            window.location.href = link.href;
        } else {
            window.location.href = '/404.html';
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const botonCopiar = document.getElementById('copiar-urls-btn');
    const mensajeCopiado = document.getElementById('mensaje-copiado');

    if (botonCopiar && mensajeCopiado) {
        botonCopiar.addEventListener('click', function () {
            // Definir las URLs que quieres copiar
            const urls = [
                'https://forms.office.com/r/RR3wYqHg8v',
                'https://forms.office.com/r/Rd0zz2RpvN'
            ];

            // Formatear las URLs para copiar
            const textoParaCopiar = urls.join('\n');

            // Usar la API del portapapeles
            navigator.clipboard.writeText(textoParaCopiar)
                .then(() => {
                    // Mostrar mensaje de éxito
                    mensajeCopiado.classList.remove('hidden');

                    // Ocultar mensaje después de 3 segundos
                    setTimeout(() => {
                        mensajeCopiado.classList.add('hidden');
                    }, 3000);
                })
                .catch(err => {
                    console.error('Error al copiar al portapapeles: ', err);
                    alert('No se pudo copiar al portapapeles. Por favor, copia las URLs manualmente.');
                });
        });
    }
});

// Mobile sidebar functionality
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const closeSidebar = document.getElementById('close-sidebar');
        const mobileSidebar = document.getElementById('mobile-sidebar');

        // Función para abrir el sidebar
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', () => {
                mobileSidebar.classList.remove('sidebar-hidden');
            });
        }

        // Función para cerrar el sidebar
        const closeSidebarFunction = () => {
            mobileSidebar.classList.add('sidebar-hidden');
            document.body.style.overflow = '';
        };

        // Cerrar con el botón
        if (closeSidebar) {
            closeSidebar.addEventListener('click', closeSidebarFunction);
        }

        // Cerrar al hacer clic fuera del sidebar
        document.addEventListener('click', (event) => {
            const isClickInsideSidebar = mobileSidebar.contains(event.target);
            const isClickOnMenuButton = mobileMenuButton.contains(event.target);
            const isSidebarVisible = !mobileSidebar.classList.contains('sidebar-hidden');

            // Si el clic fue fuera del sidebar, no en el botón del menú y el sidebar está visible
            if (!isClickInsideSidebar && !isClickOnMenuButton && isSidebarVisible) {
                closeSidebarFunction();
            }
        });

        // Opcional: Cerrar con la tecla Escape
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && !mobileSidebar.classList.contains('sidebar-hidden')) {
                closeSidebarFunction();
            }
        });
    }, 250);
});