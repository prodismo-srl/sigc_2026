/** Sistema de módulos HTML para GitHub Pages
 * Carga componentes reutilizables dinámicamente
 */

class HTMLModuleLoader {
    constructor() {
        this.components = new Map();
        this.isDarkMode = false;
        this.basePath = this.getSiteRoot() + 'partials/';

        // Inicializar cuando el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }

    getSiteRoot() {
        // Obtener la raíz del sitio basado en la URL actual
        const path = window.location.pathname;

        // Si estamos en GitHub Pages con subdirectorio
        if (path.includes('/documentacion/')) {
            const segments = path.split('/');
            // Encontrar la raíz del proyecto
            const projectRoot = segments.slice(0, segments.indexOf('documentacion')).join('/') + '/';
            return projectRoot;
        }

        // Para desarrollo local o sitio en raíz
        return '/';
    }

    init() {
        // Configurar tema oscuro/claro
        this.setupTheme();

        // Cargar todos los componentes con data-module
        document.querySelectorAll('[data-module]').forEach(element => {
            const moduleName = element.getAttribute('data-module');
            this.loadComponent(moduleName, element.id);
        });
    }

    async loadComponent(componentName, containerId) {
        try {
            const container = document.getElementById(containerId);
            if (!container) {
                console.warn(`Contenedor #${containerId} no encontrado para ${componentName}`);
                return;
            }

            // Usar cache si está disponible
            if (this.components.has(componentName)) {
                this.renderComponent(componentName, container);
                return;
            }

            // Cargar desde archivo
            const response = await fetch(`${this.basePath}${componentName}.html`);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const html = await response.text();

            // Parsear y almacenar en cache
            const template = document.createElement('template');
            template.innerHTML = html.trim();
            this.components.set(componentName, template);

            // Renderizar
            this.renderComponent(componentName, container);

        } catch (error) {
            console.error(`Error cargando ${componentName}:`, error);
            this.showFallback(componentName, containerId);
        }
    }

    renderComponent(componentName, container) {
        const template = this.components.get(componentName);
        if (!template) return;

        // Clonar y añadir
        const clone = document.importNode(template.content, true);
        container.innerHTML = '';
        container.appendChild(clone);

        // Inicializar scripts y eventos del componente
        this.initComponentScripts(container);
        this.initComponentEvents(componentName, container);
        this.updateSubtitle(container);
    }

    initComponentScripts(container) {
        // Ejecutar scripts dentro del componente
        const scripts = container.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });

            if (oldScript.src) {
                // Script externo
                newScript.src = oldScript.src;
                document.head.appendChild(newScript);
            } else {
                // Script inline
                newScript.textContent = oldScript.textContent;
                document.head.appendChild(newScript);
                document.head.removeChild(newScript); // Ejecutar y remover
            }
        });
    }

    initComponentEvents(componentName, container) {
        // Configurar eventos específicos por componente
        switch (componentName) {
            case 'header':
                this.setupHeaderEvents(container);
                break;
            case 'sidebar':
                this.setupSidebarEvents(container);
                break;
            case 'footer':
                this.setupFooterEvents(container);
                break;
        }
    }

    setupHeaderEvents(container) {
        // Toggle tema oscuro/claro
        const themeToggle = container.querySelector('#theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Menú móvil
        const mobileMenuBtn = container.querySelector('#mobile-menu-button');
        if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => this.toggleSidebar());
        }

        // Busqueda
        this.setupSearch(container);
    }

    setupSidebarEvents(container) {
        // Cerrar sidebar
        const closeBtn = container.querySelector('#close-sidebar');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeSidebar());
        }

        // Contacto WhatsApp
        const contactoBtn = container.querySelector('#mobile-contacto-btn');
        if (contactoBtn) {
            contactoBtn.addEventListener('click', () => {
                window.open('https://wa.me/5493541669837', '_blank');
            });
        }
    }

    setupFooterEvents(container) {
        // Nada especial por ahora
    }

    setupSearch(container) {
        const searchInput = container.querySelector('#search-input');
        const mobileSearch = container.querySelector('#mobile-search-input');

        const performSearch = (query) => {
            if (query.trim()) {
                // Implementar búsqueda según tu necesidad
                console.log('Buscando:', query);
                // Ejemplo: window.location.href = `busqueda.html?q=${encodeURIComponent(query)}`;
            }
        };

        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') performSearch(e.target.value);
            });
        }

        if (mobileSearch) {
            mobileSearch.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') performSearch(e.target.value);
            });
        }
    }

    setupTheme() {
        // Verificar preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            this.enableDarkMode();
        }
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;

        if (this.isDarkMode) {
            this.enableDarkMode();
        } else {
            this.disableDarkMode();
        }

        // Actualizar icono
        const themeIcon = document.querySelector('#theme-icon');
        if (themeIcon) {
            themeIcon.className = this.isDarkMode ? 'fas fa-sun text-yellow-400' : 'fas fa-moon text-gray-600';
        }
    }

    enableDarkMode() {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        this.isDarkMode = true;
        this.updateLogos('dark');
    }

    disableDarkMode() {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        this.isDarkMode = false;
        this.updateLogos('light');
    }

    updateLogos(theme) {
        // Actualizar logos según el tema
        document.querySelectorAll('[data-theme-logo]').forEach(img => {
            const lightSrc = img.getAttribute('data-light-src');
            const darkSrc = img.getAttribute('data-dark-src');

            if (theme === 'dark' && darkSrc) {
                img.src = darkSrc;
            } else if (lightSrc) {
                img.src = lightSrc;
            }
        });
    }

    toggleSidebar() {
        const sidebar = document.getElementById('mobile-sidebar');
        if (sidebar) {
            sidebar.classList.toggle('sidebar-hidden');
            document.body.style.overflow = sidebar.classList.contains('sidebar-hidden') ? '' : 'hidden';
        }
    }

    closeSidebar() {
        const sidebar = document.getElementById('mobile-sidebar');
        if (sidebar) {
            sidebar.classList.add('sidebar-hidden');
            document.body.style.overflow = '';
        }
    }

    showFallback(componentName, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Mostrar contenido de respuesto
        switch (componentName) {
            case 'header':
                container.innerHTML = `
                    <div class="p-4 bg-yellow-50 border-l-4 border-yellow-400">
                        <p class="text-yellow-700">Header no disponible. <a href="/" class="underline">Volver al inicio</a></p>
                    </div>
                `;
                break;
            case 'footer':
                container.innerHTML = `
                    <div class="text-center p-4 text-gray-500">
                        <p>© ${new Date().getFullYear()} PRODISMO SRL</p>
                    </div>
                `;
                break;
        }
    }

    updateSubtitle(container) {
        const subtitle = container.querySelector('#header-subtitle');
        if (!subtitle) return;

        // 1. Intentar obtener de data attribute
        const pageSubtitle = document.documentElement.getAttribute('data-page-subtitle');

        // 2. Si no, intentar de meta tag
        if (!pageSubtitle) {
            const metaTag = document.querySelector('meta[name="page-subtitle"]');
            if (metaTag) {
                subtitle.textContent = metaTag.getAttribute('content');
                return;
            }
        }

        // 3. Si no, usar título de la página con mapeo inteligente
        if (!pageSubtitle) {
            this.getSubtitleFromTitle(container);
        } else {
            subtitle.textContent = pageSubtitle;
        }
    }

    getSubtitleFromTitle(container) {
        const subtitle = container.querySelector('#header-subtitle');
        const title = document.title;

        // Extraer la parte relevante del título (después del guión)
        const titleParts = title.split(' - ');
        const mainTitle = titleParts.length > 1 ? titleParts[0] : title;

        // Diccionario de transformaciones
        const transformations = {
            'Política de Seguridad': 'Política de Seguridad de la Información',
            'Política': 'Política Documentada',
            'Procedimiento': 'Procedimiento Operativo',
            'Instrucción': 'Instrucción de Trabajo',
            'Formulario': 'Formulario de Registro',
            'Manual': 'Manual de Procedimientos',
            'ISO 27001': 'Sistema de Gestión de la Información',
            'ISO 9001': 'Sistema de Gestión de Calidad',
            'ISO 14001': 'Sistema de Gestión Ambiental',
            'ISO 45001': 'Sistema de Gestión SST'
        };

        // Aplicar transformación o usar título original
        let finalSubtitle = mainTitle;
        Object.keys(transformations).forEach(key => {
            if (mainTitle.includes(key)) {
                finalSubtitle = transformations[key];
            }
        });

        subtitle.textContent = finalSubtitle;
    }
}

// Inicializar cuando se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    window.HTMLModules = new HTMLModuleLoader();
});