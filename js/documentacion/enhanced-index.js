// ============================================================================
// enhanced-index.js
// ============================================================================
// Datos del índice de documentos del SGSI (actualizado 25/11/2026, revisión TISAX VDA ISA 6).
// Cada elemento del HTML lleva data-code con el código del documento.
// ============================================================================

// 1. POLÍTICAS (orden VDA ISA 6)
const politicas = [
    { tipo: "Política", nombre: "Seguridad de la Información", codigo: "MC111-IT-1", revision: 2, fecha: "2026-11-06", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Organización de la Seguridad de la Información", codigo: "MC121-IT-1", revision: 2, fecha: "2026-11-06", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Responsabilidades de la Organización de la Seguridad de la Información", codigo: "MC122-IT-1", revision: 2, fecha: "2026-11-06", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Requisitos de Seguridad en Proyectos", codigo: "MC123-IT-1", revision: 2, fecha: "2026-11-07", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Responsabilidades entre Proveedores Externos de Servicios de TI y la Propia Organización", codigo: "MC124-IT-1", revision: 2, fecha: "2026-11-10", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Activos de Información", codigo: "MC131-IT-1", revision: 1, fecha: "2026-01-05", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Clasificación de Activos de Información", codigo: "MC132-IT-1", revision: 2, fecha: "2026-11-12", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Servicios de TI Externos", codigo: "MC133-IT-1", revision: 2, fecha: "2026-11-13", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión de Software Aprobado", codigo: "MC134-IT-1", revision: 2, fecha: "2026-11-13", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión de Riesgos de Seguridad de la Información", codigo: "MC141-IT-1", revision: 2, fecha: "2026-11-14", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Auditorías Internas del SGSI", codigo: "MC151-IT-1", revision: 2, fecha: "2026-11-14", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Auditoría Externa Independiente del SGSI", codigo: "MC152-IT-1", revision: 2, fecha: "2026-11-14", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Reporte de Eventos de Seguridad de la Información", codigo: "MC161-IT-1", revision: 2, fecha: "2026-11-14", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Incidentes de Seguridad de la Información", codigo: "MC162-IT-1", revision: 2, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Crisis", codigo: "MC163-IT-1", revision: 2, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Requisitos para Puestos Sensibles", codigo: "MC211-IT-1", revision: 2, fecha: "2026-11-15", areas: ["RRHH"], complejidad: "Media" },
    { tipo: "Política", nombre: "Obligación Contractual de Cumplimiento", codigo: "MC212-IT-1", revision: 1, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Uso Aceptable de Recursos IT", codigo: "MC212-IT-2", revision: 2, fecha: "2026-11-25", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Concientización y Capacitación en Seguridad de la Información", codigo: "MC213-IT-1", revision: 2, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión Segura de Teletrabajo", codigo: "MC214-IT-1", revision: 1, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Zonas de Seguridad y Acceso de Visitantes", codigo: "MC311-IT-1", revision: 2, fecha: "2026-11-16", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Gestión de Activos de Apoyo", codigo: "MC313-IT-1", revision: 1, fecha: "2026-11-16", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Seguridad para Dispositivos Móviles", codigo: "MC314-IT-1", revision: 1, fecha: "2026-11-16", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Medios de Identificación", codigo: "MC411-IT-1", revision: 2, fecha: "2026-11-16", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Autenticación y Control de Accesos", codigo: "MC412-IT-1", revision: 2, fecha: "2026-11-16", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Cuentas de Usuario y Contraseñas", codigo: "MC413-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Política", nombre: "Mínimo Privilegio y Gestión de Derechos de Acceso", codigo: "MC421-IT-1", revision: 2, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Criptografía", codigo: "MC511-IT-1", revision: 2, fecha: "2026-11-17", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Transferencia Segura de Información", codigo: "MC512-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Cambios", codigo: "MC521-IT-1", revision: 2, fecha: "2026-11-18", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Entornos de Desarrollo", codigo: "MC522-IT-1", revision: 2, fecha: "2026-11-18", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Configuración Segura y Protección contra Malware", codigo: "MC523-IT-1", revision: 2, fecha: "2026-11-18", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión, Retención y Protección de Registros de Eventos", codigo: "MC524-IT-1", revision: 2, fecha: "2026-11-18", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión de Vulnerabilidades y Parches", codigo: "MC525-IT-1", revision: 2, fecha: "2026-11-19", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Auditoría Técnica de Sistemas y Servicios IT", codigo: "MC526-IT-1", revision: 2, fecha: "2026-11-19", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Gestión y Segmentación de Red", codigo: "MC527-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Preparación de las TIC para la Continuidad del Negocio", codigo: "MC528-IT-1", revision: 1, fecha: "2026-11-24", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Media" },
    { tipo: "Política", nombre: "Copia de Seguridad de la Información", codigo: "MC529-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Requisitos de Seguridad de Sistemas IT Nuevos o Modificados", codigo: "MC531-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Requisitos de Servicios de Red", codigo: "MC532-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Devolución y Eliminación Segura de Información en Servicios IT Externos", codigo: "MC533-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Protección de la Información en Servicios IT Externos Compartidos", codigo: "MC534-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { tipo: "Política", nombre: "Gestión de Contratistas y Socios", codigo: "MC611-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Confidencialidad de la Información Intercambiada con Terceros", codigo: "MC612-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Alta" },
    { tipo: "Política", nombre: "Cumplimiento Legal y Contractual", codigo: "MC711-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Política", nombre: "Protección de Datos Personales", codigo: "MC712-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Media" }
];

// 1. PROCEDIMIENTOS
const procedimientos = [
    { tipo: "Procedimiento", nombre: "Seguridad de la Información", codigo: "P111-IT-1", revision: 2, fecha: "2026-11-06", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Organización de la Seguridad de la Información", codigo: "P121-IT-1", revision: 2, fecha: "2026-11-06", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Organizar Responsabilidades de Seguridad", codigo: "P122-IT-1", revision: 2, fecha: "2026-11-06", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Incorporar Requisitos de Seguridad en Proyectos", codigo: "P123-IT-1", revision: 2, fecha: "2026-11-07", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Responsabilidades con Proveedores Externos de Servicios de TI", codigo: "P124-IT-1", revision: 2, fecha: "2026-11-10", areas: ["IT"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Identificación y Registro de Activos de Información", codigo: "P131-IT-1", revision: 2, fecha: "2026-11-11", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Clasificación y Gestión de Activos de Información", codigo: "P132-IT-1", revision: 2, fecha: "2026-11-12", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión de Servicios de IT Externos", codigo: "P133-IT-1", revision: 2, fecha: "2026-11-13", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión de Software Aprobado", codigo: "P134-IT-1", revision: 2, fecha: "2026-11-13", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión de Riesgos de Seguridad de la Información", codigo: "P141-IT-1", revision: 2, fecha: "2026-11-14", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Verificación y Mejora Continua", codigo: "P151-IT-1", revision: 2, fecha: "2026-11-14", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Auditoría Externa Independiente del SGSI", codigo: "P152-IT-1", revision: 2, fecha: "2026-11-14", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Reporte de Eventos de Seguridad de la Información", codigo: "P161-IT-1", revision: 0, fecha: "2026-11-14", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión de Incidentes de Seguridad de la Información", codigo: "P162-IT-1", revision: 2, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión de Crisis", codigo: "P163-IT-1", revision: 2, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Cualificación de Personal en Puestos Sensibles", codigo: "P211-IT-1", revision: 2, fecha: "2026-11-15", areas: ["RRHH"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Obligación Contractual de Cumplimiento", codigo: "P212-IT-1", revision: 2, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Concientización y Capacitación en Seguridad de la Información", codigo: "P213-IT-1", revision: 2, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión Segura de Teletrabajo", codigo: "P214-IT-1", revision: 2, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión de Zonas de Seguridad", codigo: "P311-IT-1", revision: 2, fecha: "2026-11-16", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Acceso de Visitantes", codigo: "P311-IT-2", revision: 2, fecha: "2026-11-16", areas: ["Todas"], complejidad: "Baja" },
    { tipo: "Procedimiento", nombre: "Gestión de Activos de Apoyo", codigo: "P313-IT-1", revision: 2, fecha: "2026-11-16", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión de Dispositivos Móviles", codigo: "P314-IT-1", revision: 2, fecha: "2026-11-16", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión de Medios de Identificación", codigo: "P411-IT-1", revision: 2, fecha: "2026-11-16", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Protección del Acceso a Servicios de Red, Sistemas IT y Aplicaciones", codigo: "P412-IT-1", revision: 2, fecha: "2026-11-16", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Gestión de Cuentas de Usuario y Contraseñas", codigo: "P413-IT-1", revision: 2, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Derechos de Acceso", codigo: "P421-IT-1", revision: 2, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión de Cuentas Privilegiadas", codigo: "P421-IT-2", revision: 2, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión Criptográfica", codigo: "P511-IT-1", revision: 2, fecha: "2026-11-17", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Protección de la Información en Transferencia", codigo: "P512-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Configuración y Gestión de Accesos VPN", codigo: "P512-IT-2", revision: 2, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Gestión de Cambios", codigo: "P521-IT-1", revision: 2, fecha: "2026-11-18", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Separación de Entornos de Desarrollo", codigo: "P522-IT-1", revision: 2, fecha: "2026-11-18", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Protección y Respuesta contra Malware", codigo: "P523-IT-1", revision: 2, fecha: "2026-11-18", areas: ["Todas"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Gestión de Registros de Eventos", codigo: "P524-IT-1", revision: 2, fecha: "2026-11-18", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Gestión de Vulnerabilidades y Parches", codigo: "P525-IT-1", revision: 2, fecha: "2026-11-19", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Auditoría Técnica de Sistemas y Servicios IT", codigo: "P526-IT-1", revision: 2, fecha: "2026-11-19", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Gestión y Segmentación de Red", codigo: "P527-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Plan de Continuidad de los Servicios IT", codigo: "P528-IT-1", revision: 1, fecha: "2026-11-24", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Copias de Seguridad", codigo: "P529-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Seguridad en el Ciclo de Vida de Sistemas IT", codigo: "P531-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Requisitos y Monitorización de Servicios de Red", codigo: "P532-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Devolución y Retiro Seguro de Información en Servicios IT Externos", codigo: "P533-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Protección de la Información en Servicios IT Externos Compartidos", codigo: "P534-IT-1", revision: 2, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Seguridad con Contratistas y Socios", codigo: "P611-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Gestión de la Confidencialidad con Terceros", codigo: "P612-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Ingeniería","Compras","Proyectos"], complejidad: "Alta" },
    { tipo: "Procedimiento", nombre: "Cumplimiento Legal y Contractual", codigo: "P711-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Media" },
    { tipo: "Procedimiento", nombre: "Protección de Datos Personales", codigo: "P712-IT-1", revision: 2, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Media" }
];

// 2. FORMULARIOS Y REGISTROS (solo vigentes)
const formularios = [
    { nombre: "Declaración de Aplicabilidad (DoA)", codigo: "F121-IT-1", revision: 1, fecha: "2026-11-06", areas: ["IT"], complejidad: "Media" },
    { nombre: "Checklist de Seguridad por Fase del Proyecto", codigo: "F123-IT-1", revision: 0, fecha: "2026-11-07", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Evaluación de Riesgos de Seguridad del Proyecto", codigo: "F123-IT-2", revision: 0, fecha: "2026-11-07", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Registro de Servicios de TI Externos y Matriz de Responsabilidades", codigo: "F124-IT-1", revision: 1, fecha: "2025-12-02", areas: ["IT"], complejidad: "Media" },
    { nombre: "Checklist de Evaluación de Seguridad del Proveedor", codigo: "F124-IT-2", revision: 1, fecha: "2025-12-02", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Configuración Segura del Servicio", codigo: "F124-IT-3", revision: 1, fecha: "2025-12-02", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Activos de Información", codigo: "F131-IT-1", revision: 1, fecha: "2026-11-11", areas: ["IT"], complejidad: "Media" },
    { nombre: "Acta de Devolución y Reasignación de Equipos", codigo: "F132-IT-2", revision: 0, fecha: "2026-11-12", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Evaluación de Riesgos de Servicios de TI Externos", codigo: "F133-IT-1", revision: 0, fecha: "2026-11-13", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Requisitos Legales, Reglamentarios y Contractuales", codigo: "F133-IT-2", revision: 0, fecha: "2026-11-13", areas: ["IT"], complejidad: "Media" },
    { nombre: "Verificación de Servicios y Software No Aprobados", codigo: "F133-IT-3", revision: 0, fecha: "2026-11-13", areas: ["IT"], complejidad: "Media" },
    { nombre: "Inventario de Software Aprobado", codigo: "F134-IT-1", revision: 2, fecha: "2026-11-13", areas: ["IT"], complejidad: "Media" },
    { nombre: "Solicitud y Evaluación de Software Nuevo", codigo: "F134-IT-2", revision: 0, fecha: "2026-11-13", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Excepciones de Software sin Soporte", codigo: "F134-IT-3", revision: 0, fecha: "2026-11-13", areas: ["IT"], complejidad: "Media" },
    { nombre: "Acta de Revisión de la Matriz de Riesgos", codigo: "F141-IT-1", revision: 3, fecha: "2026-11-14", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Acta de Aceptación de Riesgos", codigo: "F141-IT-2", revision: 3, fecha: "2026-11-14", areas: ["IT"], complejidad: "Media" },
    { nombre: "Informe de Auditoría Interna", codigo: "F151-IT-1", revision: 0, fecha: "2026-11-14", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Checklist de Auditoría Interna", codigo: "F151-IT-2", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Plan de Acción Correctiva", codigo: "F151-IT-3", revision: 0, fecha: "2026-11-14", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Registro de No Conformidades y Acciones Correctivas", codigo: "F151-IT-4", revision: 0, fecha: "2026-11-14", areas: ["IT"], complejidad: "Media" },
    { nombre: "Programa de Verificación de Cumplimiento", codigo: "F151-IT-5", revision: 0, fecha: "2026-11-14", areas: ["IT"], complejidad: "Media" },
    { nombre: "Programa anual de auditorías", codigo: "F33a-0", revision: 1, fecha: "2025-12-30", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Planificación detallada Auditoría Interna SI-2026", codigo: "F33b-0", revision: 1, fecha: "2026-01-15", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Programa y Registro de Revisiones Independientes", codigo: "F152-IT-1", revision: 0, fecha: "2026-11-14", areas: ["IT"], complejidad: "Media" },
    { nombre: "Guía rápida para reportar eventos de seguridad", codigo: "F161-IT-1", revision: 0, fecha: "2026-11-14", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Registro de Eventos e Incidentes de Seguridad", codigo: "F162-IT-1", revision: 0, fecha: "2026-11-14", areas: ["IT"], complejidad: "Media" },
    { nombre: "Informe Post-Incidente y Lecciones Aprendidas", codigo: "F162-IT-2", revision: 0, fecha: "2026-11-15", areas: ["IT"], complejidad: "Media" },
    { nombre: "Plan y Acta de Simulacro de Incidente", codigo: "F162-IT-3", revision: 0, fecha: "2026-12-04", areas: ["IT"], complejidad: "Media" },
    { nombre: "Plan de Crisis (ejercicios y pruebas)", codigo: "F163-IT-1", revision: 0, fecha: "2026-11-15", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Activación de Crisis, Bitácora y Lecciones Aprendidas", codigo: "F163-IT-2", revision: 0, fecha: "2026-11-15", areas: ["IT"], complejidad: "Media" },
    { nombre: "Acta de Conformación del Equipo de Gestión de Crisis", codigo: "F163-IT-3", revision: 2, fecha: "2026-11-15", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Cualificación de Personal en Puestos Sensibles", codigo: "F211-IT-1", revision: 0, fecha: "2026-11-15", areas: ["RRHH"], complejidad: "Media" },
    { nombre: "Anexo de Confidencialidad y Seguridad para Contratos", codigo: "F212-IT-1", revision: 0, fecha: "2025-12-29", areas: ["RRHH"], complejidad: "Baja" },
    { nombre: "Registro de Capacitación en Seguridad de la Información", codigo: "F213-IT-1", revision: 0, fecha: "2025-12-18", areas: ["RRHH"], complejidad: "Baja" },
    { nombre: "Plan Anual de Capacitación y Concientización", codigo: "F213-IT-3", revision: 0, fecha: "2026-11-15", areas: ["RRHH"], complejidad: "Media" },
    { nombre: "Planilla de Asistencia de Capacitación", codigo: "R12a-3", revision: 1, fecha: "2026-02-23", areas: ["RRHH"], complejidad: "Baja" },
    { nombre: "Curso e-learning de Capacitación Inicial en Seguridad de la Información", codigo: "F213-IT-B", revision: 0, fecha: "2025-08-25", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Acuerdo de Teletrabajo", codigo: "F214-IT-1", revision: 0, fecha: "2025-08-25", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Checklist de Seguridad para Teletrabajo", codigo: "F214-IT-2", revision: 0, fecha: "2026-11-15", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Registro de Viajes con Equipos de la Empresa", codigo: "F214-IT-3", revision: 0, fecha: "2026-11-15", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Visitantes y Acuerdo de Confidencialidad", codigo: "F311-IT-1", revision: 0, fecha: "2026-01-06", areas: ["Público"], complejidad: "Baja" },
    { nombre: "Acuerdo de Confidencialidad para Visitantes (PDF)", codigo: "F311-IT-2", revision: 0, fecha: "2026-01-06", areas: ["Público"], complejidad: "Baja" },
    { nombre: "Registro de Dispositivos Electrónicos de Visitantes", codigo: "F311-IT-3", revision: 0, fecha: "2026-01-06", areas: ["Público"], complejidad: "Baja" },
    { nombre: "Solicitud de Visita", codigo: "F311-IT-4", revision: 0, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Registro de Zonas de Seguridad", codigo: "F311-IT-6", revision: 1, fecha: "2026-11-16", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Registro de Accesos a Zonas Rojas", codigo: "F311-IT-7", revision: 0, fecha: "2026-01-06", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Formulario de Mantenimiento y Reparación", codigo: "F313-IT-2", revision: 0, fecha: "2026-01-06", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Registro de Proveedores Autorizados de Reparación y Eliminación", codigo: "F313-IT-3", revision: 0, fecha: "2026-11-16", areas: ["IT"], complejidad: "Media" },
    { nombre: "Formulario de Baja y Eliminación Segura", codigo: "F313-IT-4", revision: 0, fecha: "2026-01-06", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Formulario de Pérdida o Robo", codigo: "F314-IT-2", revision: 0, fecha: "2026-01-06", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Acuerdo de uso para dispositivos personales (BYOD)", codigo: "F314-IT-3", revision: 0, fecha: "2026-01-07", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Registro de Estado de Seguridad de Dispositivos Móviles", codigo: "F314-IT-4", revision: 0, fecha: "2026-11-16", areas: ["IT"], complejidad: "Media" },
    { nombre: "Solicitud de Medios de Identificación", codigo: "F411-IT-1", revision: 0, fecha: "2026-01-07", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Registro de Medios de Identificación", codigo: "F411-IT-2", revision: 0, fecha: "2026-11-16", areas: ["IT"], complejidad: "Media" },
    { nombre: "Solicitud de Acceso a Sistemas", codigo: "F412-IT-1", revision: 0, fecha: "2026-01-07", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Revisión de Inicios de Sesión", codigo: "F412-IT-2", revision: 0, fecha: "2026-11-16", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Cuentas Colectivas", codigo: "F413-IT-1", revision: 0, fecha: "2026-01-07", areas: ["IT"], complejidad: "Media" },
    { nombre: "Inventario de Cuentas", codigo: "F413-IT-3", revision: 0, fecha: "2026-01-07", areas: ["IT"], complejidad: "Media" },
    { nombre: "Solicitud de Alta de Usuario o Nuevos Ingresos de Personal", codigo: "F413-IT-4", revision: 0, fecha: "2026-01-07", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Informe de Revisión de Cuentas de Usuarios", codigo: "F413-IT-5", revision: 0, fecha: "2026-01-08", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Cuentas en Sistemas de Clientes y de Proveedores", codigo: "F413-IT-6", revision: 0, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Revisión de Derechos de Acceso y Cuentas Privilegiadas", codigo: "F421-IT-2", revision: 0, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Algoritmos y Usos Criptográficos", codigo: "F511-IT-2", revision: 1, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { nombre: "Inventario de Claves y Certificados", codigo: "F511-IT-4", revision: 0, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Servicios de Transferencia", codigo: "F512-IT-1", revision: 1, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Solicitud de Configuración de VPN", codigo: "F512-IT-2", revision: 0, fecha: "2026-01-08", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Registro de Envíos en Medios Físicos", codigo: "F512-IT-3", revision: 0, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Formulario de Solicitud de Cambio", codigo: "F521-IT-1", revision: 0, fecha: "2026-01-08", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Registro de Cambios", codigo: "F521-IT-2", revision: 0, fecha: "2026-11-18", areas: ["IT"], complejidad: "Media" },
    { nombre: "Verificación de Estado Antimalware", codigo: "F523-IT-3", revision: 0, fecha: "2026-11-18", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Registro de Eventos", codigo: "F524-IT-1", revision: 0, fecha: "2026-11-18", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Revisión de Logs", codigo: "F524-IT-2", revision: 0, fecha: "2026-11-18", areas: ["IT"], complejidad: "Media" },
    { nombre: "Inventario de Sistemas", codigo: "F525-IT-1", revision: 1, fecha: "2026-11-19", areas: ["IT"], complejidad: "Baja" },
    { nombre: "Registro de Vulnerabilidades y Parches", codigo: "F525-IT-2", revision: 0, fecha: "2026-11-19", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Informe de Auditoría Técnica", codigo: "F526-IT-3", revision: 0, fecha: "2026-11-19", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Inventario de Red y Segmentación", codigo: "F527-IT-1", revision: 1, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { nombre: "Concepto de Respaldo y Recuperación", codigo: "F529-IT-2", revision: 1, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { nombre: "Requisitos y Aprobación de Seguridad de Sistemas", codigo: "F531-IT-1", revision: 0, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Plan de Salida y Registro de Bajas de Servicios IT Externos", codigo: "F533-IT-1", revision: 1, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Esquema de Separación de Servicios Externos Compartidos", codigo: "F534-IT-1", revision: 1, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { nombre: "Formulario de Evaluación de Riesgos para Terceros", codigo: "F611-IT-1", revision: 0, fecha: "2026-01-16", areas: ["Ingeniería","Proyectos","IT"], complejidad: "Media" },
    { nombre: "Registro de Contratistas y Socios", codigo: "F611-IT-2", revision: 0, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { nombre: "Requisitos de Clientes por Proyecto", codigo: "F611-IT-3", revision: 0, fecha: "2026-01-16", areas: ["Ingeniería","Proyectos","IT"], complejidad: "Media" },
    { nombre: "Anexo de Seguridad de la Información para Proveedores", codigo: "F611-IT-4", revision: 0, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Cuestionario de Autoevaluación de Seguridad para Proveedores", codigo: "F611-IT-5", revision: 0, fecha: "2026-11-17", areas: ["Ingeniería","Proyectos","IT"], complejidad: "Media" },
    { nombre: "Clasificación de Información a Compartir por Proyecto", codigo: "F612-IT-1", revision: 0, fecha: "2026-01-20", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Generador de Acuerdo de Confidencialidad (NDA) y Cláusulas de Seguridad", codigo: "F612-IT-2", revision: 0, fecha: "2026-01-20", areas: ["Ingeniería","Compras","Proyectos","IT"], complejidad: "Baja" },
    { nombre: "Registro de Acuerdos de Confidencialidad", codigo: "F612-IT-3", revision: 0, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Checklist de Verificación de Cumplimiento", codigo: "F711-IT-3", revision: 1, fecha: "2026-11-17", areas: ["RRHH","IT"], complejidad: "Baja" },
    { nombre: "Informe Anual de Evaluación de Cumplimiento", codigo: "F711-IT-4", revision: 1, fecha: "2026-04-21", areas: ["IT"], complejidad: "Media" },
    { nombre: "Registro de Tratamientos de Datos Personales", codigo: "F712-IT-1", revision: 0, fecha: "2026-11-17", areas: ["RRHH"], complejidad: "Media" },
    { nombre: "Consentimiento para el Tratamiento de Datos Personales (tulegajo.com)", codigo: "F712-IT-3", revision: 1, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Registro de Solicitudes de Titulares de Datos", codigo: "F712-IT-4", revision: 0, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Acta de Designación del Responsable de Protección de Datos", codigo: "F712-IT-5", revision: 0, fecha: "2026-11-17", areas: ["RRHH"], complejidad: "Media" }
];

// 3. MATRICES
const matrices = [
    { nombre: "Matriz de Roles y Responsabilidades de S.I.", codigo: "M121-IT-1", revision: 0, fecha: "2025-08-25", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Clasificación de Proyectos", codigo: "M123-IT-1", revision: 1, fecha: "2026-11-07", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Riesgos", codigo: "M141-IT-1", revision: 3, fecha: "2026-11-14", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Riesgos de Accesos", codigo: "M411-IT-1", revision: 1, fecha: "2026-11-16", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Roles y Permisos", codigo: "M421-IT-3", revision: 1, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Riesgos de Cambios", codigo: "M521-IT-1", revision: 1, fecha: "2026-11-18", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Accesos por Entorno", codigo: "M522-IT-1", revision: 0, fecha: "2026-11-18", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Evaluación de Riesgos de Entornos", codigo: "M522-IT-2", revision: 1, fecha: "2026-11-18", areas: ["IT"], complejidad: "Media" },
    { nombre: "Matriz de Riesgos Malware", codigo: "M523-IT-1", revision: 1, fecha: "2026-11-18", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Priorización CVSS", codigo: "M525-IT-1", revision: 1, fecha: "2026-11-19", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Servicios Críticos y RTO/RPO", codigo: "M528-IT-1", revision: 1, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Matriz de Requisitos Legales y Contractuales", codigo: "M711-IT-2", revision: 1, fecha: "2026-11-17", areas: ["IT","RRHH"], complejidad: "Alta" },
    { nombre: "Matriz de Evaluación de Riesgos de Privacidad", codigo: "M712-IT-2", revision: 1, fecha: "2026-11-17", areas: ["IT","RRHH"], complejidad: "Alta" }
];

// 4. INSTRUCTIVOS
const instructivos = [
    { nombre: "Instructivo de acceso al portal SGSI", codigo: "I111-IT-1", revision: 0, fecha: "2026-05-11", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Identificación y Registro de Activos de Información", codigo: "I131-IT-1", revision: 0, fecha: "2025-10-30", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Instructivo datos de equipos (laptops, PC y teléfonos)", codigo: "I131-IT-1_b", revision: 0, fecha: "2025-10-30", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Instructivo de Bloqueo de Pantalla y Contraseña", codigo: "I314-IT-1", revision: 0, fecha: "2026-11-16", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Configuración de Seguridad de AnyDesk", codigo: "I411-IT-1", revision: 0, fecha: "2026-01-22", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Microsoft Authenticator + Microsoft Teams", codigo: "I413-IT-1", revision: 1, fecha: "2026-02-10", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Gestor de Contraseñas Bitwarden", codigo: "I413-IT-2", revision: 1, fecha: "2026-02-02", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Instructivo de Configuración 2FA", codigo: "I413-IT-3", revision: 1, fecha: "2026-10-10", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Instructivo de Cambio de Contraseña del SIP actual", codigo: "I413-IT-4", revision: 0, fecha: "2024-08-20", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Pantalla y Escritorio Limpio", codigo: "I413-IT-5", revision: 1, fecha: "2025-11-17", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "BitLocker Windows", codigo: "I511-IT-1", revision: 1, fecha: "2025-08-25", areas: ["IT"], complejidad: "Media" },
    { nombre: "PIN de inicio de sesión de Windows", codigo: "I511-IT-2", revision: 1, fecha: "2025-11-17", areas: ["IT"], complejidad: "Media" },
    { nombre: "Instructivo de Etiquetas de Confidencialidad", codigo: "I511-IT-3", revision: 0, fecha: "2026-05-17", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Instructivo de Cifrado con Etiquetas y Outlook", codigo: "I511-IT-4", revision: 0, fecha: "2026-11-17", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Advertencia de Destinatario Externo y Bloqueo de CAD en Correo", codigo: "I512-IT-1", revision: 0, fecha: "2026-11-17", areas: ["IT"], complejidad: "Media" },
    { nombre: "Instructivo de Instalación de Outlook PWA", codigo: "I-11-06", revision: 0, fecha: "2024-11-19", areas: ["Todas"], complejidad: "Baja" },
    { nombre: "Guía de Identificación de Phishing", codigo: "I523-IT-3", revision: 1, fecha: "2026-02-18", areas: ["Todas"], complejidad: "Media" },
    { nombre: "Instructivo de Configuración de Microsoft Defender", codigo: "I523-IT-4", revision: 0, fecha: "2026-11-18", areas: ["IT"], complejidad: "Media" },
    { nombre: "Instructivo de Actualizaciones de Windows con Intune", codigo: "I525-IT-1", revision: 0, fecha: "2026-11-19", areas: ["IT"], complejidad: "Media" },
    { nombre: "Instructivo de Escaneo Técnico Interno", codigo: "I526-IT-1", revision: 0, fecha: "2026-11-19", areas: ["IT"], complejidad: "Media" },
    { nombre: "Instructivo de Restauración de Copias de Seguridad", codigo: "I529-IT-1", revision: 0, fecha: "2026-06-16", areas: ["IT"], complejidad: "Media" },
    { nombre: "Instructivo de Alertas por Correo de Veeam", codigo: "I529-IT-2", revision: 0, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { nombre: "Instructivo de Respaldo de SIP4.0 en Azure", codigo: "I529-IT-3", revision: 0, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { nombre: "Instructivo de Retención en Microsoft 365", codigo: "I529-IT-4", revision: 0, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { nombre: "Guía de Desarrollo Seguro de Automatizaciones y Macros", codigo: "I531-IT-1", revision: 1, fecha: "2026-11-24", areas: ["IT"], complejidad: "Alta" },
    { nombre: "Guía de Desarrollo Seguro de SIP4.0", codigo: "I531-IT-2", revision: 0, fecha: "2026-11-24", areas: ["IT"], complejidad: "Media" },
    { nombre: "Instructivo de Inscripción de Bases de Datos en la AAIP", codigo: "I712-IT-1", revision: 0, fecha: "2026-11-17", areas: ["RRHH"], complejidad: "Media" }
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

        // Buscar el documento por su código (atributo data-code); si no lo tiene, por el título
        let docData = null;
        const code = item.getAttribute('data-code');
        if (code) {
            docData = allDocuments.find(d => d.codigo === code) || null;
        } else {
            for (let d of allDocuments) {
                if (title.includes(d.codigo) || title === d.nombre) { docData = d; break; }
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