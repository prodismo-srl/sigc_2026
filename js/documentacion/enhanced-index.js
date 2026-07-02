// ============================================================================
// enhanced-index.js
// ============================================================================
// Datos extraídos del Excel "F111-IT-1 Indice_Normas_TISAX_ISO27001_Rev0.xlsx"
// ============================================================================

// 1. POLÍTICAS (hoja "Politicas-Procedimientos")
const politicas = [
    { tipo: "Política", nombre: "Seguridad de la Información", codigo: "MC111-IT-1", revision: 1, fecha: "2025-11-25", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Organización de la seguridad de la información", codigo: "MC121-IT-1", revision: 1, fecha: "2025-11-25", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Gestión de Activos", codigo: "MC131-IT-1", revision: 1, fecha: "2026-01-05", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Riesgos", codigo: "MC141-IT-1", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Evaluaciones", codigo: "MC151-IT-1", revision: 1, fecha: "2026-01-05", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión de Incidentes", codigo: "MC161-IT-1", revision: 1, fecha: "2025-12-30", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Requisitos Específicos para Puestos Claves", codigo: "MC211-IT-1", revision: 1, fecha: "2026-01-15", areas: ["RRHH"], complejidad: "Media" },
    { tipo: "Política", nombre: "Uso Aceptable de Recursos de IT", codigo: "MC211-IT-2", revision: 0, fecha: "2025-08-25", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Obligación Contractual de Cumplimiento", codigo: "MC212-IT-1", revision: 0, fecha: "2025-08-25", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Concientización y Capacitación en SI", codigo: "MC213-IT-1", revision: 1, fecha: "2025-12-29", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión Segura de Teletrabajo", codigo: "MC214-IT-1", revision: 0, fecha: "2025-08-25", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Acceso para Visitantes", codigo: "MC311-IT-1", revision: 1, fecha: "2025-12-18", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Gestión de Activos de Apoyo", codigo: "MC313-IT-1", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Seguridad para Dispositivos Móviles y Medios de Almacenamiento", codigo: "MC314-IT-2", revision: 0, fecha: "2025-08-25", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Medios de Identificación", codigo: "MC411-IT-1", revision: 1, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Autenticación y Control de Accesos", codigo: "MC412-IT-1", revision: 1, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Cuentas de Usuario", codigo: "MC413-IT-1", revision: 1, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Contraseñas Seguras", codigo: "MC413-IT-2", revision: 1, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Mínimos Privilegios", codigo: "MC421-IT-1", revision: 1, fecha: "2026-01-06", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Clasificación de Datos", codigo: "MC511-IT-1", revision: 1, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Protocolos Criptográficos Seguros", codigo: "MC511-IT-2", revision: 1, fecha: "2026-01-06", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Transferencia Segura de Información", codigo: "MC512-IT-1", revision: 1, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Cambios", codigo: "MC521-IT-1", revision: 1, fecha: "2026-01-06", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Entornos de Desarrollo", codigo: "MC522-IT-1", revision: 1, fecha: "2026-01-06", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión de Sistemas IT contra Malware", codigo: "MC523-IT-1", revision: 1, fecha: "2026-01-07", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión y Análisis de Registros de Eventos (Logs)", codigo: "MC524-IT-1", revision: 1, fecha: "2026-01-07", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Retención y Eliminación de Logs", codigo: "MC524-IT-2", revision: 1, fecha: "2026-01-07", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión de Monitorización de Vulnerabilidades", codigo: "MC525-IT-1", revision: 1, fecha: "2026-01-07", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión de Auditoría de Sistemas IT", codigo: "MC526-IT-1", revision: 1, fecha: "2026-01-07", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión de Red de la Organización", codigo: "MC527-IT-1", revision: 1, fecha: "2026-01-07", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Preparación de las TIC para la continuidad del negocio", codigo: "MC528-IT-1", revision: 0, fecha: "2026-01-08", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Media" },
    { tipo: "Política", nombre: "Copia de seguridad de la información", codigo: "MC529-IT-1", revision: 1, fecha: "2026-06-09", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Requisitos de Seguridad de Sistemas IT Nuevos o en Desarrollo", codigo: "MC531-IT-1", revision: 1, fecha: "2026-01-07", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Requisitos de Servicios de Red", codigo: "MC532-IT-1", revision: 1, fecha: "2026-01-08", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Retirada Segura de Activos Externos", codigo: "MC533-IT-1", revision: 1, fecha: "2026-01-08", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Servicios IT Externos Compartidos", codigo: "MC534-IT-1", revision: 1, fecha: "2026-01-08", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Contratistas y Socios", codigo: "MC611-IT-1", revision: 1, fecha: "2026-01-08", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Confidencialidad de la Información Intercambiada con Terceros", codigo: "MC612-IT-1", revision: 1, fecha: "2026-01-08", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Cumplimiento de Disposiciones Reglamentarias", codigo: "MC711-IT-1", revision: 1, fecha: "2026-01-08", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Protección de Datos Personales", codigo: "MC712-IT-1", revision: 1, fecha: "2026-01-08", areas: ["Todas"], complejidad: "Media" }
];

//1. PROCEDIMIENTOS (hoja "Politicas-Procedimientos")
const procedimientos = [
    // Procedimientos
    { tipo: "Procedimiento", nombre: "Procedimiento de seguridad de la información", codigo: "P111-IT-1", revision: 1, fecha: "2026-01-13", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Procedimiento organización de la seguridad de la información", codigo: "P121-IT-1", revision: 1, fecha: "2026-01-13", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Procedimiento organización de responsabilidades de seguridad de la información", codigo: "P121-IT-2", revision: 1, fecha: "2026-01-14", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Procedimiento incorporación de requisitos de seguridad en proyectos", codigo: "P123-IT-1", revision: 1, fecha: "2026-01-14", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Procedimiento definir de responsabilidades con proveedores de IT externos", codigo: "P124-IT-1", revision: 1, fecha: "2026-01-14", areas: ["IT"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Procedimiento identificación y registro de activos de información", codigo: "P131-IT-1", revision: 1, fecha: "2026-01-14", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento clasificación y de activos de información", codigo: "P132-IT-1", revision: 1, fecha: "2026-01-14", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de servicios IT externos", codigo: "P133-IT-1", revision: 1, fecha: "2026-01-14", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento de gestión de riesgos", codigo: "P141-IT-1", revision: 1, fecha: "2026-01-15", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento verificación y mejora continua", codigo: "P151-IT-1", revision: 1, fecha: "2026-01-15", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento auditoría externa independiente del SGSI", codigo: "P152-IT-1", revision: 1, fecha: "2026-01-15", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de incidentes", codigo: "P161-IT-1", revision: 0, fecha: "2026-01-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento cualificación de personal en áreas sensibles", codigo: "P211-IT-1", revision: 1, fecha: "2026-01-15", areas: ["RRHH"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento obligación contractual de cumplimiento", codigo: "P212-IT-1", revision: 1, fecha: "2026-01-16", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento concientización y capacitación en SI", codigo: "P213-IT-1", revision: 1, fecha: "2026-01-16", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión segura del teletrabajo", codigo: "P214-IT-1", revision: 1, fecha: "2026-01-16", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de zonas de seguridad", codigo: "P311-IT-1", revision: 1, fecha: "2026-01-16", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento acceso para visitantes", codigo: "P311-IT-2", revision: 1, fecha: "2026-01-16", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de activos de apoyo", codigo: "P313-IT-1", revision: 1, fecha: "2026-01-20", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento seguridad para dispositivos móviles y medios de almacenamiento", codigo: "P314-IT-1", revision: 1, fecha: "2026-01-20", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de medios de identificación", codigo: "P411-IT-1", revision: 1, fecha: "2026-01-21", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento protección de acceso a servicios de red, sistemas IT y aplicaciones", codigo: "P412-IT-1", revision: 1, fecha: "2026-01-21", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento cuentas de usuario", codigo: "P413-IT-1", revision: 1, fecha: "2026-01-22", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento contraseñas seguras", codigo: "P413-IT-2", revision: 1, fecha: "2026-01-28", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de accesos", codigo: "P421-IT-1", revision: 1, fecha: "2026-01-30", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento cuentas privilegiadas", codigo: "P421-IT-2", revision: 1, fecha: "2026-02-05", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimientos criptográficos", codigo: "P511-IT-1", revision: 1, fecha: "2026-02-24", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento protección de la información durante transferencia", codigo: "P512-IT-1", revision: 1, fecha: "2026-02-25", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento configuración de VPN", codigo: "P512-IT-2", revision: 1, fecha: "2026-02-25", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de cambios", codigo: "P521-IT-1", revision: 1, fecha: "2026-02-25", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de entornos de desarrollo", codigo: "P522-IT-1", revision: 1, fecha: "2025-02-26", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento protección contra malware", codigo: "P523-IT-1", revision: 1, fecha: "2026-02-27", areas: ["Todas"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento respuesta contra malware", codigo: "P523-IT-2", revision: 1, fecha: "2026-03-02", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento registros de eventos (Logs)", codigo: "P524-IT-1", revision: 1, fecha: "2026-03-04", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento configuración de logs", codigo: "P524-IT-2", revision: 1, fecha: "2026-03-05", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de vulnerabilidades", codigo: "P525-IT-1", revision: 1, fecha: "2026-03-06", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento aplicación de parches de seguridad", codigo: "P525-IT-2", revision: 1, fecha: "2026-03-06", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento auditoría de sistemas IT", codigo: "P526-IT-1", revision: 1, fecha: "2026-03-09", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento seguimiento de auditoría de sistemas IT", codigo: "P526-IT-2", revision: 1, fecha: "2025-03-09", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de red de la organización", codigo: "P527-IT-1", revision: 1, fecha: "2026-03-09", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento configuración de accesos", codigo: "P527-IT-2", revision: 1, fecha: "2026-03-10", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento respuesta a incidentes de seguridad", codigo: "P527-IT-3", revision: 1, fecha: "2026-03-10", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento preparación de las TIC para la continuidad del negocio", codigo: "P528-IT-1", revision: 0, fecha: "2026-03-12", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento copias de seguridad de la información", codigo: "P529-IT-1", revision: 0, fecha: "2026-03-12", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento seguridad en el ciclo de vida de sistemas IT", codigo: "P531-IT-1", revision: 1, fecha: "2026-03-26", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento evaluación de proveedores de servicios IT", codigo: "P531-IT-2", revision: 1, fecha: "2026-03-31", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento monitorización de red", codigo: "P532-IT-1", revision: 1, fecha: "2026-03-31", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento devolución y retiro seguro de activos en servicios IT externos", codigo: "P533-IT-1", revision: 1, fecha: "2026-04-01", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento protección de información en servicios IT compartidos", codigo: "P534-IT-1", revision: 1, fecha: "2026-04-06", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento gestión de SI entre contratistas y socios", codigo: "P611-IT-1", revision: 1, fecha: "2026-04-06", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento confidencialidad de la información intercambiada con terceros", codigo: "P612-IT-1", revision: 1, fecha: "2026-04-06", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Procedimiento cumplimiento de disposiciones reglamentarias", codigo: "P711-IT-1", revision: 1, fecha: "2026-04-22", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Procedimiento protección de datos personales", codigo: "P712-IT-1", revision: 1, fecha: "2026-04-22", areas: ["Todas"], complejidad: "Media" }
];

// 2. FORMULARIOS (hoja "Formularios")
const formularios = [
    { nombre: "Índice de Documentación/Procedimientos del SGSI", codigo: "F111-IT-1", revision: 0, fecha: "2026-05-11", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Declaración de Aplicabilidad (DoA)", codigo: "F121-IT-1", revision: 1, fecha: "2026-05-04", areas: ["IT"], complejidad: "Media" },
    { nombre: "Formulario de Registro de Riesgos", codigo: "F141-IT-1", revision: 0, fecha: "2026-04-13", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Formulario de Informe de Auditoría Interna", codigo: "F151-IT-1", revision: 1, fecha: "2026-04-13", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Checklist de Auditoría Interna", codigo: "F151-IT-2", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Formulario de Plan de Acción Correctiva", codigo: "F151-IT-3", revision: 1, fecha: "2026-01-05", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Programa anual de auditorías", codigo: "F33a-0", revision: 1, fecha: "2025-12-30", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Planificacion detallada Auditoria Interna SI_IT-2026", codigo: "F33b-0", revision: 1, fecha: "2026-01-15", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Formulario de Reporte de Eventos por Departamento", codigo: "F161-IT-1", revision: 0, fecha: "2025-08-25", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Formulario de Evaluación de Competencias", codigo: "F211-IT-1", revision: 0, fecha: "2025-08-25", areas: ["RRHH"], complejidad: "Media" },
    { nombre: "Certificado de Capacitación Inicial", codigo: "F212-IT-1", revision: 0, fecha: "2025-12-29", areas: ["RRHH"], complejidad: "Baja" },
    { nombre: "Anexo de Confidencialidad y Seguridad para Contratos", codigo: "F212-IT-2", revision: 0, fecha: "2025-08-25", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Registro de Capacitación Inicial en Seguridad de la Información", codigo: "F213-IT-1", revision: 0, fecha: "2025-12-18", areas: ["RRHH"], complejidad: "Baja" },
    { nombre: "Planilla de Asistencia de Capacitación", codigo: "R12a-3", revision: 1, fecha: "2026-02-23", areas: ["RRHH"], complejidad: "Baja" },
    { nombre: "Plan de Capacitación Inicial Seguridad IT", codigo: "F213-IT-B", revision: 0, fecha: "2025-08-25", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Acuerdo Modelo de Teletrabajo", codigo: "F214-IT-1", revision: 0, fecha: "2025-08-25", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Checklist de Seguridad para Teletrabajo", codigo: "F214-IT-2", revision: 0, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Formulario Registro de Visitantes", codigo: "F311-IT-1", revision: 0, fecha: "2026-01-06", areas: ["Público"], complejidad: "Baja" },
    { nombre: "Acuerdo de Confidencialidad para Visitantes", codigo: "F311-IT-2", revision: 0, fecha: "2026-01-06", areas: ["Público"], complejidad: "Baja" },
    { nombre: "Registro de Dispositivos Electrónicos de Visitantes", codigo: "F311-IT-3", revision: 0, fecha: "2026-01-06", areas: ["Público"], complejidad: "Baja" },
    { nombre: "Formulario Solicitud de Visita", codigo: "F311-IT-4", revision: 0, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Registro de zonas de Seguridad", codigo: "F311-IT-6", revision: 0, fecha: "2026-01-06", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Registro de accesos a zonas rojas", codigo: "F311-IT-7", revision: 0, fecha: "2026-01-06", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Formulario de Mantenimiento y Reparación", codigo: "F313-IT-2", revision: 0, fecha: "2026-01-06", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Formulario de Baja y Eliminación Segura", codigo: "F313-IT-4", revision: 0, fecha: "2026-01-06", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Formulario de Pérdida o Robo - STI", codigo: "F314-IT-2", revision: 0, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Acuerdo de uso para dispositivos personales BYOD", codigo: "F314-IT-3", revision: 0, fecha: "2026-01-07", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Formulario de Solicitud/Registro de Medios de Identificación", codigo: "F411-IT-1", revision: 0, fecha: "2026-01-07", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Formulario Solicitud Acceso a Sistemas Críticos", codigo: "F412-IT-1", revision: 0, fecha: "2026-01-07", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Cuentas Colectivas", codigo: "F413-IT-1", revision: 0, fecha: "2026-01-07", areas: ["IT"], complejidad: "Media" },
    { nombre: "Inventario de Cuentas", codigo: "F413-IT-3", revision: 0, fecha: "2026-01-07", areas: ["IT"], complejidad: "Media" },
    { nombre: "Solicitud Alta de Usuario o Nuevos Ingresos de Personal", codigo: "F413-IT-4", revision: 0, fecha: "2026-01-07", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Informe de Revisión de Cuentas", codigo: "F413-IT-5", revision: 0, fecha: "2026-01-08", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Algoritmos Aprobados", codigo: "F511-IT-2", revision: 0, fecha: "2026-01-09", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Servicios de Transferencia Autorizados", codigo: "F512-IT-1", revision: 0, fecha: "2026-01-07", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Formulario Solicitud Configuración de VPN", codigo: "F512-IT-2", revision: 0, fecha: "2026-01-08", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Informe de Pruebas de Cifrado", codigo: "F512-IT-5", revision: 0, fecha: "2026-01-08", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Formulario de Solicitud de Cambio", codigo: "F521-IT-1", revision: 0, fecha: "2026-01-08", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Formulario de Solicitud de Acceso a Entornos", codigo: "F522-IT-1", revision: 0, fecha: "2026-01-08", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Acciones Tomadas", codigo: "F523-IT-1", revision: 0, fecha: "2026-01-08", areas: ["IT"], complejidad: "Media" },
    { nombre: "Informe post-incidente", codigo: "F523-IT-2", revision: 0, fecha: "2026-01-08", areas: ["IT"], complejidad: "Media" },
    { nombre: "Inventario de Sistemas", codigo: "F525-IT-1", revision: 0, fecha: "2026-01-08", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Reporte Escaneo de Vulnerabilidades", codigo: "F525-IT-2", revision: 0, fecha: "2026-01-13", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Plantilla de Aceptación de Riesgo", codigo: "F525-IT-3", revision: 0, fecha: "2026-01-13", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Registro de hallazgos de Auditoría del SGSI", codigo: "F526-IT-1", revision: 0, fecha: "2026-01-14", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro Plan Anual de Auditorías", codigo: "F526-IT-2", revision: 0, fecha: "2026-01-14", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Reporte Auditoría del SGSI", codigo: "F526-IT-3", revision: 0, fecha: "2026-01-14", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Plan de Acciones Correctivas", codigo: "F526-IT-5", revision: 0, fecha: "2026-01-14", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Registro de pruebas de recuperación", codigo: "F528-IT-1", revision: 0, fecha: "2026-01-14", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Copias de Seguridad", codigo: "F529-IT-2", revision: 0, fecha: "2026-01-14", areas: ["IT"], complejidad: "Media" },
    { nombre: "Checklist de Pruebas (Básico)", codigo: "F531-IT-1", revision: 0, fecha: "2026-01-15", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Formulario de Solicitud de Cambio en Red", codigo: "F532-IT-1", revision: 0, fecha: "2026-01-15", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Checklist de Monitorización de Red", codigo: "F532-IT-4", revision: 0, fecha: "2026-01-15", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Revisión de Alertas de Seguridad", codigo: "F532-IT-5", revision: 0, fecha: "2026-01-15", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Registro de Activos en Proveedores Externos", codigo: "F533-IT-1", revision: 0, fecha: "2026-01-15", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Formulario de Retirada de Activos Externos", codigo: "F533-IT-3", revision: 0, fecha: "2026-01-16", areas: ["IT"], complejidad: "Media" },
    { nombre: "Evaluación de Proveedores Multi-inquilino", codigo: "F534-IT-1", revision: 0, fecha: "2026-01-16", areas: ["IT"], complejidad: "Media" },
    { nombre: "Formulario de Evaluación de Riesgos para Terceros", codigo: "F611-IT-1", revision: 0, fecha: "2026-01-16", areas: ["Ingeniería","Proyectos","IT"], complejidad: "Media" },
    { nombre: "Plantilla de Adenda para Requisitos de Clientes", codigo: "F611-IT-3", revision: 0, fecha: "2026-01-16", areas: ["Ingeniería","Proyectos","IT"], complejidad: "Media" },
    { nombre: "Informe de Auditoría a Terceros", codigo: "F611-IT-5", revision: 0, fecha: "2026-01-16", areas: ["Ingeniería","Proyectos","IT"], complejidad: "Media" },
    { nombre: "Formulario de Clasificación de Información a Compartir", codigo: "F612-IT-1", revision: 0, fecha: "2026-01-20", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Plantilla de Acuerdo de Confidencialidad (NDA) y Cláusulas de Seguridad", codigo: "F612-IT-2", revision: 0, fecha: "2026-01-20", areas: ["Ingeniería","Compras","Proyectos","IT"], complejidad: "Baja" },
    { nombre: "Registro de Información Compartida con Terceros", codigo: "F612-IT-3", revision: 0, fecha: "2026-01-21", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Formulario de Identificación de Requisitos Legales", codigo: "F711-IT-1", revision: 0, fecha: "2026-01-21", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Checklist de Verificación de Cumplimiento", codigo: "F711-IT-3", revision: 0, fecha: "2026-01-22", areas: ["RRHH","IT"], complejidad: "Baja" },
    { nombre: "Informe de Evaluación de Cumplimiento", codigo: "F711-IT-4", revision: 0, fecha: "2026-01-28", areas: ["IT"], complejidad: "Media" },
    { nombre: "Inventario de Tratamiento de Datos Personales", codigo: "F712-IT-1", revision: 0, fecha: "2026-01-30", areas: ["RRHH"], complejidad: "Media" },
    { nombre: "Formulario de Consentimiento", codigo: "F712-IT-3", revision: 0, fecha: "2026-04-21", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Registro de Ejercicio de Derechos de los Titulares", codigo: "F712-IT-4", revision: 0, fecha: "2026-04-21", areas: ["Todas"], complejidad: "Baja" }
];

// 3. MATRICES (hoja "Matrices")
const matrices = [
    { nombre: "Matriz de Roles y Responsabilidades de S.I.", codigo: "M121-IT-1", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Riesgos", codigo: "M141-IT-2", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Riesgos Excepcionales", codigo: "M312-IT-1", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Riesgos de Accesos", codigo: "M411-IT-1", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Asignación de Privilegios", codigo: "M413-IT-1", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Roles y Permisos", codigo: "M421-IT-3", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Riesgos de Cambios", codigo: "M521-IT-1", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Evaluación de Riesgos de Entornos", codigo: "M522-IT-2", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Riesgos Malware", codigo: "M523-IT-1", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Priorizacion CVSS", codigo: "M525-IT-1", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de servicios críticos y RTO-RPO", codigo: "M528-IT-1", revision: 0, fecha: "2026-01-10", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Evaluación de Riesgos de Sistemas", codigo: "M531-IT-1", revision: 0, fecha: "2025-12-18", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Evaluación de Proveedores IT", codigo: "M531-IT-2", revision: 0, fecha: "2025-12-18", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Cumplimiento Normativo", codigo: "M711-IT-2", revision: 0, fecha: "2025-12-18", areas: ["IT","RRHH"], complejidad: "Alta" },
    { nombre: "Matriz de Evaluación de Riesgos de Privacidad", codigo: "M712-IT-2", revision: 0, fecha: "2025-12-18", areas: ["IT","RRHH"], complejidad: "Alta" }
];

// 4. INSTRUCTIVOS (hoja "Instructivos")
const instructivos = [
    { nombre: "Instructivo acceso portal SGSI", codigo: "I111-IT-1", revision: 0, fecha: "2026-05-11", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Identificación y Registro de Activos de Información", codigo: "I131-IT-1", revision: 0, fecha: "2025-10-30", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Instructivo datos de equipos (laptops, pc y tel.)", codigo: "I131-IT-1_b", revision: 0, fecha: "2025-10-30", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Instructivo uso 7-Zip, WinRAR", codigo: "I214-IT-1", revision: 0, fecha: "2026-01-05", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Configuracion de Seguridad de Anydesk", codigo: "I411-IT-1", revision: 0, fecha: "2026-01-22", areas: ["Todas"], complejidad: "Media" },
    { nombre: "MS Authenticator + MS Teams", codigo: "I413-IT-1", revision: 1, fecha: "2026-02-10", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Gestor de Contraseñas Bitwarden", codigo: "I413-IT-2", revision: 1, fecha: "2026-02-02", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Instructivo Configuración 2FA", codigo: "I413-IT-3", revision: 1, fecha: "2026-10-10", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Instructivo Cambio Contraseña SIP actual", codigo: "I413-IT-4", revision: 0, fecha: "2024-08-20", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Pantalla y Escritorio Limpio", codigo: "I413-IT-5", revision: 1, fecha: "2025-11-17", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "BitLocker Windows", codigo: "I511-IT-1", revision: 1, fecha: "2025-08-25", areas: ["IT"], complejidad: "Media" },
    { nombre: "PIN inicio de Sesion", codigo: "I511-IT-2", revision: 1, fecha: "2025-11-17", areas: ["IT"], complejidad: "Media" },
    { nombre: "Instructivo Etiquetas de Confidencialidad", codigo: "I511-IT-3", revision: 0, fecha: "2026-05-17", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Instructivo Instalación Outlook PWA", codigo: "I-11-06", revision: 0, fecha: "2024-11-19", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Guía de Identificación de Phishing", codigo: "I523-IT-3", revision: 1, fecha: "2026-02-18", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Instructivo de Restauración de Copias de Seguridad", codigo: "I529-IT-1", revision: 0, fecha: "2026-06-16", areas: ["IT"], complejidad: "Media" },
    { nombre: "Guía de Desarrollo Seguro Apps Internas - Nivel Básico", codigo: "I531-IT-1", revision: 0, fecha: "2025-12-18", areas: ["IT"], complejidad: "Alta" }
];

// Unificar todos los documentos para búsqueda y filtrado
const allDocuments = [
    ...politicas,
    ...procedimientos,
    ...formularios,
    ...matrices,
    ...instructivos
];

// ============================================================================
// FUNCIONES PRINCIPALES
// ============================================================================

// Formatear fecha de YYYY-MM-DD a DD/MM/YYYY
function formatDate(dateStr) {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

// Enriquecer cada elemento del DOM con las etiquetas de metadatos
function enrichAllItems() {
    // Seleccionar todos los contenedores de elementos (tanto <a> como divs deshabilitados)
    const items = document.querySelectorAll('.grid a, .grid .disabled');
    
    items.forEach(item => {
        // Obtener el título: buscar dentro de h4 o del propio texto
        let title = '';
        const h4 = item.querySelector('h4');
        // console.log('h4: ', h4);
        if (h4) {
            title = h4.innerText.trim();
        } else {
            // Si no hay h4, tomar el texto del elemento (quitando íconos, etc.)
            title = item.innerText.trim();
        }
        // Limpiar título: quitar etiquetas como "NUEVA", "Reemplazada", etc.
        // title = title.replace(/NUEVA|Reemplazada/gi, '').trim();

        // Buscar coincidencia en allDocuments
        let docData = null;
        for (let d of allDocuments) {
            // Comparar por nombre o por código (si el título incluye el código)
            if ( title.includes(d.nombre) ||  title === d.nombre || title.includes(d.codigo)) {
                // console.log('title: ', title);
                // console.log('d: ', d);
                docData = d;
                break;
            }
        }
        if (!docData) return;

        // Buscar o crear contenedor de metadatos
        let metaDiv = item.querySelector('.meta-info');
        if (!metaDiv) {
            metaDiv = document.createElement('div');
            metaDiv.className = 'meta-info flex flex-wrap gap-2 mt-2';
            const contentDiv = item.querySelector('div:last-child') || item;
            contentDiv.appendChild(metaDiv);
        } else {
            metaDiv.innerHTML = ''; // Limpiar para evitar duplicados
        }

        // Código y revisión
        const codigoSpan = document.createElement('span');
        codigoSpan.className = 'text-xs font-mono bg-gray-100 text-gray-800 px-2 py-1 rounded-full';
        codigoSpan.innerText = `${docData.codigo} | Rev ${docData.revision}`;
        metaDiv.appendChild(codigoSpan);

        // Fecha de última revisión
        const fechaSpan = document.createElement('span');
        fechaSpan.className = 'text-xs font-mono bg-gray-100 text-gray-800 px-2 py-1 rounded-full';
        fechaSpan.innerText = `Últ. rev: ${formatDate(docData.fecha)}`;
        metaDiv.appendChild(fechaSpan);

        // Áreas alcanzadas
        docData.areas.forEach(area => {
            const areaSpan = document.createElement('span');
            areaSpan.className = `text-xs font-medium px-2 py-1 rounded-full area-badge`;
            areaSpan.innerText = area;
            // Colores según área
            if (area === 'Todas') areaSpan.classList.add('bg-green-100', 'text-green-800');
            else if (area === 'IT') areaSpan.classList.add('bg-purple-100', 'text-purple-800');
            else if (area === 'RRHH') areaSpan.classList.add('bg-orange-100', 'text-orange-800');
            else if (area === 'Ingeniería') areaSpan.classList.add('bg-blue-100', 'text-blue-800');
            else if (area === 'Compras') areaSpan.classList.add('bg-cyan-100', 'text-cyan-800');
            else if (area === 'Administración') areaSpan.classList.add('bg-yellow-100', 'text-yellow-800');
            else if (area === 'Proyectos') areaSpan.classList.add('bg-indigo-100', 'text-indigo-800');
            else if (area === 'Público') areaSpan.classList.add('bg-gray-200', 'text-gray-800');
            else areaSpan.classList.add('bg-gray-100', 'text-gray-700');
            metaDiv.appendChild(areaSpan);
        });

        // Complejidad
        const compSpan = document.createElement('span');
        compSpan.className = `text-xs font-medium px-2 py-1 rounded-full`;
        compSpan.innerText = `Complejidad: ${docData.complejidad}`;
        if (docData.complejidad === 'Baja') compSpan.classList.add('bg-green-100', 'text-green-800');
        else if (docData.complejidad === 'Media') compSpan.classList.add('bg-yellow-100', 'text-yellow-800');
        else if (docData.complejidad === 'Alta') compSpan.classList.add('bg-red-100', 'text-red-800');
        metaDiv.appendChild(compSpan);

        // Guardar áreas como data attribute para filtro
        item.setAttribute('data-areas', docData.areas.join(','));
    });
}

// Filtro combinado: texto + perfil - aplica a todas las secciones y expande los acordeones
function applyFilters() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.bg-purple-600')?.getAttribute('data-filter') || 'Todos';
    
    // Mapeo de perfil a áreas requeridas
    const profileAreaMap = {
        'Todos': null,               // muestra todos
        'Basico': ['Todas'],         // básico solo documentos que afectan a "Todas"
        'IT': ['IT'],
        'Compras': ['Compras', 'Proyectos', 'Ingeniería'],
        'RRHH': ['RRHH'],
        'Gerencia': ['Todas']        // gerencia ve documentos que afectan a "Todas"
    };
    
    const requiredAreas = profileAreaMap[activeFilter];
    
    // Definir las secciones principales con sus contadores y selectores
    const sections = [
        { counterId: 'doc-count', headingId: 'documentacion' },
        { counterId: 'proc-count', headingId: 'procedimientos' },
        { counterId: 'form-count', headingId: 'formularios' },
        { counterId: 'matrices-count', headingId: 'matrices' },
        { counterId: 'instructivo-count', headingId: 'instructivos' }
    ];
    
    sections.forEach(section => {
        // Encontrar el contenedor principal de la sección (el div con clase mb-16 que contiene el heading)
        const heading = document.getElementById(section.headingId);
        if (!heading) return;
        const sectionContainer = heading.closest('.mb-16');
        if (!sectionContainer) return;
        
        // Dentro de la sección, seleccionar todos los grids (cada subsección)
        const grids = sectionContainer.querySelectorAll('.grid');
        let totalVisible = 0;
        
        grids.forEach(grid => {
            // Obtener los elementos dentro de este grid (hijos directos)
            const items = grid.querySelectorAll(':scope > a'); // :scope > div, :scope > .disabled
            // console.log('items: ', items)
            let visibleCount = 0;
            
            items.forEach(item => {
                const text = item.innerText.toLowerCase();
                const areasAttr = item.getAttribute('data-areas') || '';
                const areas = areasAttr.split(',');
                
                let areaMatch = true;
                if (requiredAreas) {
                    areaMatch = areas.some(area => requiredAreas.includes(area));
                }
                const textMatch = text.includes(searchTerm);
                
                if (areaMatch && textMatch) {
                    item.style.display = 'flex';
                    visibleCount++;
                } else {
                    item.style.display = 'none';
                }
            });
            totalVisible += visibleCount;
        });
        
        // Actualizar el span contador correspondiente
        const countSpan = document.getElementById(section.counterId);
        if (countSpan) countSpan.innerText = totalVisible;
        
        // Expandir todas las subsecciones (acordeones) dentro de esta sección principal
        const buttons = sectionContainer.querySelectorAll('.border-b button');
        buttons.forEach(button => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            if (content && content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                if (icon) {
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');
                }
            }
        });
    });
}

// ============================================================================
// INICIALIZACIÓN Y EVENTOS
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    // Enriquecer todos los items con metadatos
    enrichAllItems();
    
    // Filtros por perfil (botones)
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Actualizar estilo activo
            filterButtons.forEach(b => b.classList.remove('bg-purple-600', 'text-white'));
            btn.classList.add('bg-purple-600', 'text-white');
            // Aplicar filtros
            applyFilters();
        });
    });
    
    // Búsqueda por texto
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            applyFilters();
        });
    }
    
    // Botón de búsqueda (enfoque)
    const searchBtn = document.getElementById('search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            if (searchInput) searchInput.focus();
        });
    }
    
    // Botón de impresión
    const printBtn = document.getElementById('print-btn');
    if (printBtn) {
        printBtn.addEventListener('click', () => window.print());
    }
    
    // Contacto con SweetAlert2 (si existe la función global Swal)
    const contactBtn = document.getElementById('contacto-btn');
    if (contactBtn && typeof Swal !== 'undefined') {
        contactBtn.addEventListener('click', () => {
            Swal.fire({
                title: 'Contacto',
                html: `<div class="text-left">
                        <p class="mb-4"><strong>Prodismo SRL</strong></p>
                        <p class="mb-2"><i class="fas fa-map-marker-alt mr-2"></i> Av. Japón 2230, Córdoba, Argentina</p>
                        <p class="mb-2"><i class="fas fa-phone mr-2"></i> +54 3541 669-937</p>
                        <p class="mb-4"><i class="fas fa-envelope mr-2"></i> itprodismo@prodismo.com</p>
                        <p class="text-sm text-gray-600">Estaremos encantados de atenderle.</p>
                    </div>`,
                icon: 'info',
                confirmButtonText: 'Cerrar',
                confirmButtonColor: '#3b82f6'
            });
        });
    }
    
    // Toggle de secciones (acordeón)
    const sectionButtons = document.querySelectorAll('.border-b button');
    sectionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            if (content) {
                content.classList.toggle('hidden');
                if (icon) {
                    icon.classList.toggle('fa-chevron-down');
                    icon.classList.toggle('fa-chevron-up');
                }
            }
        });
    });
    
    // Actualizar año en footer
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) yearSpan.innerText = new Date().getFullYear();
    
    // Aplicar filtro inicial (por defecto "Todos")
    applyFilters();

});