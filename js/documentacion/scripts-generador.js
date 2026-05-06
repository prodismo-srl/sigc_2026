// ---------- Utilidades ----------
// Arrays de meses
const monthsEs = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const monthsEn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const months = lang === 'es' ? monthsEs : monthsEn;

// Helper para escape HTML
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function (m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Convierte fecha YYYY-MM-DD a objeto con día, mes nombre, año, fecha corta
function parseFechaAcuerdo(dateString) {
    if (!dateString) return { diaLargo: "09", mesLargo: "Enero", mesLargoEn: "January", mesNumero: 1, anoLargo: "2026", fechaCorta: "09/01/2026" };
    const parts = dateString.split('-');
    if (parts.length !== 3) return { diaLargo: "09", mesLargo: "Enero", mesLargoEn: "January", mesNumero: 1, anoLargo: "2026", fechaCorta: "09/01/2026" };
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    if (isNaN(month) || isNaN(day)) return { diaLargo: "09", mesLargo: "Enero", mesLargoEn: "January", mesNumero: 1, anoLargo: "2026", fechaCorta: "09/01/2026" };
    
    const diaLargo = day.toString(); // <--- AGREGAR ESTA LÍNEA
    const fechaCorta = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    const monthNumber = month;
    const monthNameSpanish = monthsEs[monthNumber - 1];
    const monthNameEnglish = monthsEn[monthNumber - 1];
    
    return { diaLargo, mesLargo: monthNameSpanish, mesLargoEn: monthNameEnglish, mesNumero: monthNumber, anoLargo: year, fechaCorta };
}

// Obtener fecha actual en formato YYYY-MM-DD
function getCurrentDateString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Al inicializar (después de definir fields)
const fechaInput = document.getElementById('fechaAcuerdo');
if (fechaInput && !fechaInput.value) {
    fechaInput.value = getCurrentDateString();
}

let currentLang = 'es';   // 'es' o 'en'
const translateBtn = document.getElementById('translateBtn');

// ---------- PLANTILLA PRINCIPAL DEL CONTRATO (estructura fiel al documento original) ----------
function generateContractHTML(data, lang = 'es') {
    // --- Textos estáticos según idioma ---
    const texts = {
        // Para español (es)
        es: {
            headerBadge: "Conforme a Normas TISAX (AL2) & ISO/IEC 27001:2022",
            title: "Acuerdo de Confidencialidad y Cláusulas de Seguridad",
            partiesTitle: "1. PARTES",
            objectTitle: "2. OBJETO DEL ACUERDO",
            definitionsTitle: "3. DEFINICIONES",
            securityPrinciplesTitle: "4. PRINCIPIOS DE SEGURIDAD DE LA INFORMACIÓN (ISO 27001 - TISAX (AL2))",
            obligationsTitle: "5. OBLIGACIONES DEL PRESTADOR (ISO 27001 / TISAX (AL2))",
            clientObligationsTitle: "6. OBLIGACIONES DEL CLIENTE",
            scopeTitle: "7. ALCANCE DE LOS SERVICIOS",
            excludedSubtitle: "7.1 Servicios excluidos del alcance",
            ipTitle: "8. PROPIEDAD INTELECTUAL",
            incidentTitle: "9. INCIDENTES DE SEGURIDAD Y REPORTE OBLIGATORIO",
            termTitle: "10. PLAZO DE VIGENCIA",
            terminationTitle: "11. RESCISIÓN",
            jurisdictionTitle: "12. JURISDICCIÓN",
            addressesTitle: "13. DOMICILIOS",
            signatureText: "En prueba de conformidad, se firman dos ejemplares de idéntico tenor, en la Ciudad de Córdoba,",
            clientLabel: "PRODISMO SRL",
            clientRole: "Gerente de IT / Representante",
            providerLabel: "EL PRESTADOR",
            providerRole: "Representante Legal",
            footerNote: "*F612-IT-2 Documento generado bajo lineamientos TISAX (AL2) & ISO/IEC 27001:2022. La firma digital o manuscrita valida el acuerdo.",
            
            betweenParties: "Entre",
            and: "y",
            partiesParagraph: "Entre <strong>PRODISMO SRL, CUIT 33-54778858-9</strong>, con domicilio en Av. Japón 2230, Ciudad de Córdoba, representada por su Responsable del Área de IT, %CLIENTE% (en adelante \"<strong>EL CLIENTE</strong>\") y <strong>%PROVEEDOR%</strong>, representada por %REPRESENTANTE%, %ID%, con domicilio en %DOMICILIO% (en adelante \"<strong>EL PRESTADOR</strong>\"); se celebra el presente <strong>Contrato de Confidencialidad y Alcance de Servicios</strong>, conforme a las exigencias de <strong>TISAX</strong> — Information Security Assessment e <strong>ISO/IEC 27001:2022</strong>.",
            objectPurpose: "El presente acuerdo tiene por finalidad:",
            objectPoints: [
                "Establecer las obligaciones de confidencialidad, protección y uso adecuado de la información que <strong>EL PRESTADOR</strong> reciba, procese o gestione para <strong>EL CLIENTE</strong>.",
                "Definir el alcance de los servicios, roles y responsabilidades bajo estándares de seguridad.",
                "Asegurar el cumplimiento de las normas <strong>ISO/IEC 27001:2022, TISAX (AL2)</strong> y prácticas asociadas (ISO 27002, ISO 27017, ISO 27018)."
            ],
            objectApplicability: "Este acuerdo aplica a toda la información en formato físico, digital, verbal, audiovisual o cualquier otro medio.",
            confidentialityLabel: "<strong>Información Confidencial:</strong>",
            servicesLabel: "<strong>Servicios:</strong>",
            providerCommitPrinciples: "<strong>EL PRESTADOR</strong> se compromete a cumplir los principios de:",
            providerCommitObligations: "<strong>EL PRESTADOR</strong> se compromete a:",
            providerWillProvide: "<strong>EL PRESTADOR</strong> brindará al <strong>CLIENTE</strong> los siguientes servicios según contratos u órdenes de trabajo vigentes:",
            datePrefix: "a los",
            dateDay: "día/s del mes de",
            dateOf: "de",

            noServicesDetail: "Sin servicios detallados adicionales.",
            noExclusionsDefined: "No se han definido exclusiones específicas."
        },
        // Para inglés (en)
        en: {
            headerBadge: "Compliant with TISAX (AL2) & ISO/IEC 27001:2022",
            title: "Non Disclosure Agreement and Security Clauses",
            partiesTitle: "1. PARTIES",
            objectTitle: "2. PURPOSE OF THE AGREEMENT",
            definitionsTitle: "3. DEFINITIONS",
            securityPrinciplesTitle: "4. INFORMATION SECURITY PRINCIPLES (ISO 27001 - TISAX (AL2))",
            obligationsTitle: "5. OBLIGATIONS OF THE PROVIDER (ISO 27001 / TISAX (AL2))",
            clientObligationsTitle: "6. OBLIGATIONS OF THE CLIENT",
            scopeTitle: "7. SCOPE OF SERVICES",
            excludedSubtitle: "7.1 Services excluded from the scope",
            ipTitle: "8. INTELLECTUAL PROPERTY",
            incidentTitle: "9. SECURITY INCIDENTS AND MANDATORY REPORTING",
            termTitle: "10. TERM OF VALIDITY",
            terminationTitle: "11. TERMINATION",
            jurisdictionTitle: "12. JURISDICTION",
            addressesTitle: "13. NOTICE ADDRESSES",
            signatureText: "As proof of agreement, two copies of identical content are signed in the City of Córdoba,",
            clientLabel: "PRODISMO SRL",
            clientRole: "IT Manager / Representative",
            providerLabel: "THE PROVIDER",
            providerRole: "Legal Representative",
            footerNote: "*F612-IT-2 Document generated under TISAX (AL2) and ISO/IEC 27001:2022 guidelines. Digital or handwritten signature validates the agreement.",

            betweenParties: "Between",
            and: "and",
            partiesParagraph: "Between <strong>PRODISMO SRL, TAX ID 33-54778858-9</strong>, with registered address at Av. Japón 2230, City of Córdoba, represented by its IT Area Responsible, %CLIENTE% (hereinafter \"<strong>THE CLIENT</strong>\") and <strong>%PROVEEDOR%</strong>, represented by %REPRESENTANTE%, %ID%, with address at %DOMICILIO% (hereinafter \"<strong>THE PROVIDER</strong>\"); this <strong>Confidentiality and Scope of Services Agreement</strong> is entered into, in compliance with the requirements of <strong>TISAX</strong> — Information Security Assessment and <strong>ISO/IEC 27001:2022</strong>.",
            objectPurpose: "This agreement aims to:",
            objectPoints: [
                "Establish the confidentiality, protection and proper use obligations of the information that <strong>THE PROVIDER</strong> receives, processes or manages for <strong>THE CLIENT</strong>.",
                "Define the scope of services, roles and responsibilities under security standards.",
                "Ensure compliance with <strong>ISO/IEC 27001:2022, TISAX (AL2)</strong> and associated practices (ISO 27002, ISO 27017, ISO 27018)."
            ],
            objectApplicability: "This agreement applies to information in physical, digital, verbal, audiovisual or any other media.",
            confidentialityLabel: "<strong>Confidential Information:</strong>",
            servicesLabel: "<strong>Services:</strong>",
            providerCommitPrinciples: "<strong>THE PROVIDER</strong> undertakes to comply with the following principles:",
            providerCommitObligations: "<strong>THE PROVIDER</strong> undertakes to:",
            providerWillProvide: "<strong>THE PROVIDER</strong> will provide <strong>THE CLIENT</strong> with the following services according to current contracts or work orders:",
            datePrefix: "on the",
            dateDay: "day/s of",
            dateOf: "of",

            noServicesDetail: "No additional services detailed.",
            noExclusionsDefined: "No specific exclusions have been defined."
        }
    };
    const t = texts[lang];

    // Construcción de listas dinámicas (sin traducción)
    const alcanceLines = data.alcanceServicios.split(/\r?\n/).filter(line => line.trim() !== "");
    const alcanceListItems = alcanceLines.map(line => `<li class="ml-6 list-disc">${escapeHtml(line.trim())}</li>`).join('');
    const serviciosExcluidosLines = data.serviciosExcluidos.split(/\r?\n/).filter(l => l.trim() !== "");
    const excluidosListItems = serviciosExcluidosLines.map(line => `<li class="ml-6 list-disc">${escapeHtml(line.trim())}</li>`).join('');

    const serviciosDef = escapeHtml(data.serviciosDesc);
    const representanteFull = `${data.saludo} ${data.nombreRepresentante}`;
    const domicilioCompleto = `${data.domicilio}, ${data.ciudad}, ${data.pais}`;
    const idCompleto = `${data.idTipo} ${data.idNumero}`;
    const mesNombre = lang === 'es' ? data.mesLargo : data.mesLargoEn;
    
    const fechaLargaTexto = `${t.datePrefix} ${data.diaLargo} ${t.dateDay} ${mesNombre} ${t.dateOf} ${data.anoLargo}`;
    const ipItems = data.propiedadItems.trim() !== "" ? data.propiedadItems : "sistemas, diseños 2D/3D, desarrollos";

    // Textos de definiciones y principios (también traducibles)
    const confidentialityDef = lang === 'es' 
        ? "Toda información técnica, operativa, financiera, personal, estratégica, de infraestructura o procesos del CLIENTE, incluyendo datos personales, accesos, credenciales, configuraciones, bases de datos, documentación funcional, código fuente, reportes y logs, propiedad intelectual o normativa de privacidad."
        : "Any technical, operational, financial, personal, strategic, infrastructure or process information of the CLIENT, including but not limited to personal data, accesses, credentials, configurations, databases, functional documentation, source code, reports and logs, intellectual property or privacy regulations.";
    
    const servicesDefText = lang === 'es'
        ? `Actividades ejecutadas por <strong>EL PRESTADOR</strong> que incluyen: <strong>${serviciosDef}</strong>.`
        : `Activities carried out by <strong>THE PROVIDER</strong> including: <strong>${serviciosDef}</strong>.`;

    const principlesList = lang === 'es' ? [
        "<strong>Confidencialidad:</strong> La información del <strong>CLIENTE</strong> será protegida de accesos no autorizados.",
        "<strong>Integridad:</strong> Los datos se mantendrán completos y exactos.",
        "<strong>Disponibilidad:</strong> Los servicios y datos garantizarán niveles operativos acordados.",
        "<strong>Legalidad y Protección de Datos:</strong> Cumplimiento de Ley 25.326 y normativa vigente."
    ] : [
        "<strong>Confidentiality:</strong> <strong>CLIENTE</strong> information will be protected from unauthorized access.",
        "<strong>Integrity:</strong> Data will remain complete and accurate.",
        "<strong>Availability:</strong> Services and data will ensure agreed operational levels.",
        "<strong>Legality and Data Protection:</strong> Compliance with Law 25.326 and current regulations."
    ];

    const obligationsList = lang === 'es' ? [
        "Confidencialidad estricta: No divulgar, copiar ni utilizar información del <strong>CLIENTE</strong> para fines distintos a los servicios contratados. Acuerdos individuales con su personal y subcontratistas.",
        "Gestión de accesos y credenciales: utilizar credenciales autorizadas, no almacenar claves en texto plano y revocar accesos de personal desvinculado de forma inmediata.",
        "Seguridad en trabajo remoto: canales cifrados (VPN, HTTPS, TLS), equipos administrados con antivirus, firewall y actualizaciones.",
        "Protección de datos: no transferir datos a terceros sin autorización, controles de backup y recuperación, no alojar datos en entornos inseguros.",
        "Registro y trazabilidad: mantener logs, tickets, reportar incidentes de seguridad en máximo 24 horas.",
        "Subcontratistas: cualquier tercero deberá ser aprobado por <strong>EL CLIENTE</strong> y suscribir este mismo acuerdo."
    ] : [
        "Strict confidentiality: Not to disclose, copy or use <strong>CLIENT</strong> information for purposes other than the contracted services. Maintain individual confidentiality agreements with all personnel and subcontractors.",
        "Access and credential management: use only authorized credentials, do not store passwords in plain text, and immediately revoke access for disassociated personnel.",
        "Remote work security: encrypted channels (VPN, HTTPS, TLS), managed equipment with antivirus, firewall and update policies.",
        "Data protection: do not transfer data to third parties without authorization, implement backup and recovery controls, do not host data in unsafe environments.",
        "Logging and traceability: maintain evidence of relevant activities (logs, tickets, interventions). Report unauthorized access or security incidents within 24 hours.",
        "Subcontractors: any third party must be approved by <strong>THE CLIENT</strong> and adhere to this same agreement."
    ];

    const clientObligationsText = lang === 'es'
        ? "Proveer información, accesos y documentación necesaria; notificar cambios que afecten los sistemas; mantener interlocutor designado."
        : "Provide necessary information, access and documentation; notify changes affecting systems; maintain a designated contact for requirement validation.";

    const ipText = lang === 'es'
        ? `Todos los <strong>${escapeHtml(ipItems)}</strong> y documentación provistos por <strong>EL PRESTADOR</strong> seguirán siendo de su propiedad intelectual. La información del <strong>CLIENTE</strong> almacenada dentro de dichos sistemas seguirá siendo propiedad exclusiva del <strong>CLIENTE</strong>.`
        : `All <strong>${escapeHtml(ipItems)}</strong> and documentation provided by <strong>THE PROVIDER</strong> will remain its intellectual property. The <strong>CLIENT</strong>'s information stored within such systems will remain the exclusive property of the <strong>CLIENT</strong>.`;

    const incidentText = lang === 'es'
        ? `Conforme a <strong>ISO 27035</strong> y estándares <strong>TISAX</strong>: Todo incidente que afecte datos del <strong>CLIENTE</strong> deberá reportarse dentro de las <strong>primeras 24 horas</strong>. <strong>EL PRESTADOR</strong> colaborará en la mitigación, análisis de causa raíz y remediación.`
        : `According to <strong>ISO 27035</strong> and <strong>TISAX</strong> standards: Any incident affecting <strong>CLIENT</strong> data must be reported within the <strong>first 24 hours</strong>. <strong>THE PROVIDER</strong> will cooperate in mitigation, root cause analysis and remediation actions.`;

    const termText = lang === 'es'
        ? `Este acuerdo tendrá una vigencia de <strong>5 (cinco) años</strong> desde su firma y continuará aplicando durante <strong>5 (cinco) años</strong> posteriores a la finalización de la relación comercial, respecto de la confidencialidad.`
        : `This agreement will be valid for <strong>5 (five) years</strong> from its signature and will continue to apply for <strong>5 (five) years</strong> after the termination of the commercial relationship, with respect to confidentiality.`;

    const terminationText = lang === 'es'
        ? `Cualquiera de las partes podrá rescindir este acuerdo mediante notificación fehaciente con 30 días de anticipación. Las obligaciones de confidencialidad no se extinguen.`
        : `Either party may terminate this agreement by written notice with 30 days in advance. However, confidentiality obligations do not cease.`;

    const jurisdictionText = lang === 'es'
        ? `Las partes se someten a la jurisdicción de los Tribunales Ordinarios de la Provincia de Córdoba (Argentina), renunciando a cualquier otro fuero.`
        : `The parties submit to the jurisdiction of the Ordinary Courts of the Province of Córdoba (Argentina), waiving any other jurisdiction.`;

    const addressesText = lang === 'es'
        ? `Los domicilios declarados en el encabezado serán válidos para notificaciones, salvo modificación notificada fehacientemente.`
        : `The addresses stated in the header will be valid for notifications, except for modification notified in writing.`;

    // HTML completo
    return `
        <div class="text-xs text-right text-gray-500 mb-2">${t.headerBadge}</div>
        <h1 class="text-2xl font-bold text-center mb-4">${t.title}</h1>
        <p class="text-center text-sm mb-4">${t.betweenParties} <strong>Prodismo SRL</strong> ${t.and} <strong>${escapeHtml(data.proveedor)}</strong><br> (${t.headerBadge})</p><br>
        
        <h2>${t.partiesTitle}</h2>
        <p>${t.partiesParagraph
            .replace('%CLIENTE%', escapeHtml(data.nombreResponsable))
            .replace('%PROVEEDOR%', escapeHtml(data.proveedor))
            .replace('%REPRESENTANTE%', representanteFull)
            .replace('%ID%', idCompleto)
            .replace('%DOMICILIO%', domicilioCompleto)
        }</p>

        <h2>${t.objectTitle}</h2>
        <p>${t.objectPurpose}</p>
        <ul class="list-disc ml-8 space-y-1">
            ${t.objectPoints.map(point => `<li>${point}</li>`).join('')}
        </ul>
        <p class="mt-1">${t.objectApplicability}</p>

        <h2>${t.definitionsTitle}</h2>
        <p>${t.confidentialityLabel} ${confidentialityDef}</p>
        <p>${t.servicesLabel} ${servicesDefText}</p>

        <h2>${t.securityPrinciplesTitle}</h2>
        <p>${t.providerCommitPrinciples}</p>
        <ul class="list-disc ml-8">${principlesList.map(p => `<li>${p}</li>`).join('')}</ul>

        <h2>${t.obligationsTitle}</h2>
        <p>${t.providerCommitObligations}</p>
        <ul class="list-disc ml-8">${obligationsList.map(o => `<li>${o}</li>`).join('')}</ul>

        <h2>${t.clientObligationsTitle}</h2>
        <p>${clientObligationsText}</p>

        <h2>${t.scopeTitle}</h2>
        <p>${t.providerWillProvide}</p>
        ${alcanceListItems ? `<ul class="list-disc ml-8 mb-2">${alcanceListItems}</ul>` : `<p class="ml-4 italic">${t.noServicesDetail}</p>`}
        
        <h3 class="text-md font-semibold mt-3">${t.excludedSubtitle}</h3>
        ${excluidosListItems ? `<ul class="list-disc ml-8">${excluidosListItems}</ul>` : `<p class="ml-4 italic">${t.noExclusionsDefined}</p>`}
        
        <h2>${t.ipTitle}</h2>
        <p>${ipText}</p>

        <h2>${t.incidentTitle}</h2>
        <p>${incidentText}</p>

        <h2>${t.termTitle}</h2>
        <p>${termText}</p>

        <h2>${t.terminationTitle}</h2>
        <p>${terminationText}</p>

        <h2>${t.jurisdictionTitle}</h2>
        <p>${jurisdictionText}</p>

        <h2>${t.addressesTitle}</h2>
        <p>${addressesText}</p>

        <div class="mt-8 pt-4 border-t border-gray-300">
            <p class="text-center">${t.signatureText} ${fechaLargaTexto}.</p>
            <div class="flex flex-col md:flex-row justify-between gap-10 mt-6">
                <div class="text-center flex-1">
                    <div class="font-bold">${t.clientLabel}</div>
                    <div class="mt-4 mb-1">${escapeHtml(data.nombreResponsable)}</div>
                    <div class="signature-line mx-auto w-48"></div>
                    <div class="text-sm">${t.clientRole}</div>
                    <div class="text-xs text-gray-500">Fecha: ${escapeHtml(data.fechaCorta)}</div>
                </div>
                <div class="text-center flex-1">
                    <div class="font-bold">${escapeHtml(data.proveedor)}</div>
                    <div class="mt-4 mb-1">${representanteFull}</div>
                    <div class="signature-line mx-auto w-48"></div>
                    <div class="text-sm">${t.providerRole}</div>
                    <div class="text-xs text-gray-500">${idCompleto}</div>
                </div>
            </div>
            <p class="text-xs text-center text-gray-500 mt-6">${t.footerNote}</p>
        </div>
    `;
}

// ---------- Gestión de estado y campos ----------
const fields = {
    proveedor: document.getElementById('proveedor'),
    saludo: document.getElementById('saludo'),
    nombreRepresentante: document.getElementById('nombreRepresentante'),
    idTipo: document.getElementById('idTipo'),
    idNumero: document.getElementById('idNumero'),
    domicilio: document.getElementById('domicilio'),
    ciudad: document.getElementById('ciudad'),
    pais: document.getElementById('pais'),
    serviciosDesc: document.getElementById('serviciosDesc'),
    alcanceServicios: document.getElementById('alcanceServicios'),
    serviciosExcluidos: document.getElementById('serviciosExcluidos'),
    propiedadItems: document.getElementById('propiedadItems'),
    nombreResponsable: document.getElementById('nombreResponsable'),
    fechaAcuerdo: document.getElementById('fechaAcuerdo')
};

// Obtener objeto de datos actual (incluye transformación de fecha)
function getCurrentData() {
    const fechaRaw = fields.fechaAcuerdo.value;
    const { diaLargo, mesLargo, mesLargoEn, anoLargo, fechaCorta } = parseFechaAcuerdo(fechaRaw);

    return {
        proveedor: fields.proveedor.value,
        saludo: fields.saludo.value,
        nombreRepresentante: fields.nombreRepresentante.value,
        idTipo: fields.idTipo.value,
        idNumero: fields.idNumero.value,
        domicilio: fields.domicilio.value,
        ciudad: fields.ciudad.value,
        pais: fields.pais.value,
        serviciosDesc: fields.serviciosDesc.value,
        alcanceServicios: fields.alcanceServicios.value,
        serviciosExcluidos: fields.serviciosExcluidos.value,
        propiedadItems: fields.propiedadItems.value,
        diaLargo: diaLargo,
        mesLargo: mesLargo,
        mesLargoEn: mesLargoEn,
        anoLargo: anoLargo,
        fechaCorta: fechaCorta,
        nombreResponsable: fields.nombreResponsable.value
    };
}

function updatePreview() {
    const data = getCurrentData();
    const htmlContent = generateContractHTML(data, currentLang);
    const previewDiv = document.getElementById('previewContainer');
    if (previewDiv) previewDiv.innerHTML = htmlContent;
}

translateBtn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    translateBtn.innerHTML = currentLang === 'es' 
        ? '<i class="fas fa-language"></i> Traducir a Inglés' 
        : '<i class="fas fa-language"></i> Ver en Español';
    updatePreview();
});

// Suscribir eventos
for (let key in fields) {
    if (fields[key]) {
        fields[key].addEventListener('input', updatePreview);
        fields[key].addEventListener('change', updatePreview);
    }
}

// Restaurar valores por defecto (incluyendo fecha)
function resetToExample() {
    currentLang = 'es';
    translateBtn.innerHTML = '<i class="fas fa-language"></i> Traducir a Inglés';

    fields.proveedor.value = "Soluciones Tecnológicas SRL";
    fields.saludo.value = "Ing.";
    fields.nombreRepresentante.value = "Gustavo Víctor Gilobert";
    fields.idTipo.value = "DNI";
    fields.idNumero.value = "20.112.148";
    fields.domicilio.value = "Bv. Rivadavia 797";
    fields.ciudad.value = "Córdoba";
    fields.pais.value = "Argentina";
    fields.serviciosDesc.value = "Provisión y operación de software (SaaS u On-Premise), soporte técnico, mantenimiento evolutivo, monitoreo y gestión de incidentes.";
    fields.alcanceServicios.value = "Soporte Técnico 24/7\nMesa de ayuda\nAtención remota y presencial\nMantenimiento Evolutivo y Correctivo\nActualizaciones y despliegue de nuevas versiones";
    fields.serviciosExcluidos.value = "Desarrollo de sistemas no contratados\nTareas fuera de alcance sin orden de servicio\nIntervención sobre infraestructura de terceros sin autorización";
    fields.propiedadItems.value = "sistemas, diseños 2D/3D, desarrollos";
    fields.nombreResponsable.value = "Germán C. Montalbetti";
    fields.fechaAcuerdo.value = getCurrentDateString();
    updatePreview();
}

document.getElementById('resetBtn').addEventListener('click', resetToExample);
document.getElementById('backBtn').addEventListener('click', () => window.history.back());

// ---------- Generación de PDF con header/footer y SweetAlert2 ----------
// Función auxiliar para agregar una imagen dividida en páginas

/**
 * Convierte una imagen larga en un PDF con saltos de página automáticos
 * @param {Object} doc - Instancia de jsPDF
 * @param {string} imgData - URL de la imagen (base64)
 * @param {number} imgWidth - Ancho de la imagen en mm (dentro del PDF)
 * @param {number} imgHeight - Alto total de la imagen en mm
 * @param {number} pageHeight - Alto de la página en mm (ej. 297)
 * @param {Object} margins - Márgenes { top, bottom, left, right } en mm
 */
async function addImagesToPdf(doc, imgData, imgWidth, imgHeight, pageHeight, margins) {
    // Altura útil del contenido dentro de una página (alto - márgenes)
    const contentHeight = pageHeight - margins.top - margins.bottom;
    
    let heightLeft = imgHeight;     // Altura de imagen que aún falta por colocar
    let yPosition = 0;              // Desplazamiento Y dentro de la imagen original
    let pageNum = 1;

    while (heightLeft > 0) {
        // Determinar cuánto espacio ocupará esta página (mínimo entre lo que cabe y lo que queda)
        const currentHeight = Math.min(contentHeight, heightLeft);
        
        // Si la altura a dibujar es cero o negativa, salir del bucle (evita páginas vacías)
        if (currentHeight <= 0) break;

        // Si no es la primera página, agregar una nueva hoja
        if (pageNum > 1) {
            doc.addPage();
        }

        // Crear un canvas temporal para extraer el fragmento correspondiente
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = imgData;

        // Esperar a que la imagen se cargue para poder dibujar el fragmento
        await new Promise((resolve) => {
            img.onload = () => {
                const sourceWidth = img.width;
                const sourceHeight = img.height;

                // Calcular coordenadas dentro de la imagen original
                const sourceY = (yPosition / imgHeight) * sourceHeight;
                const fragmentHeight = (currentHeight / imgHeight) * sourceHeight;

                // Configurar el canvas con el tamaño exacto del fragmento
                canvas.width = sourceWidth;
                canvas.height = fragmentHeight;
                
                // Dibujar SOLO la porción correspondiente
                ctx.drawImage(img, 0, sourceY, sourceWidth, fragmentHeight, 0, 0, sourceWidth, fragmentHeight);
                
                // Convertir el fragmento a imagen y agregarlo al PDF
                const fragmentData = canvas.toDataURL('image/jpeg', 1.0);
                doc.addImage(fragmentData, 'JPEG', margins.left, margins.top, imgWidth, currentHeight);
                resolve();
            };
        });

        // Actualizar contadores para la siguiente página
        heightLeft -= currentHeight;
        yPosition += currentHeight;
        pageNum++;
    }
}

// Función principal para generar PDF
async function generatePDF() {
    const element = document.getElementById('previewContainer');
    if (!element) return;

    // Obtener datos actuales para el nombre del archivo
    const dataActual = getCurrentData();
    const proveedorName = dataActual.proveedor.replace(/\s/g, '_');
    const fechaCortaFile = dataActual.fechaCorta.replace(/\//g, '-');
    const filename = `Acuerdo_Confidencialidad_${proveedorName}_${fechaCortaFile}.pdf`;

    // Configuración de márgenes (mm)
    const margins = {
        top: 14,
        bottom: 12,
        left: 12,
        right: 10
    };

    // Obtener el HTML completo del contrato (incluyendo header y footer)
    const contractHtml = generateContractHTML(dataActual, currentLang);
    
    // Crear un contenedor temporal con el contenido completo
    const tempDiv = document.createElement('div');
    tempDiv.style.backgroundColor = 'white';
    tempDiv.style.padding = '0';
    tempDiv.style.fontFamily = "'Times New Roman', 'Georgia', serif";
    tempDiv.style.width = '100%';
    tempDiv.style.maxWidth = '210mm';
    tempDiv.style.margin = '0 auto';
    
    // Header personalizado
    const headerDiv = document.createElement('div');
    headerDiv.className = 'pdf-header';
    headerDiv.style.marginBottom = '5px';
    headerDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 6px;">
            <div style="font-weight: bold; font-size: 1rem; color: #1e3a8a;">PRODISMO SRL</div>
            <div style="font-size: 0.75rem; color: #2c3e50;">NDA · TISAX(AL2) · ISO/IEC 27001:2022</div>
        </div>
        <div style="margin-top: 3px; font-size: 0.75rem; color: #4b5563;">F612-IT-2 Acuerdo de Confidencialidad y Cláusulas de Seguridad</div>
    `;
    
    // Footer con fecha y hora de generación
    const now = new Date();
    const fechaHoraGeneracion = now.toLocaleString('es-AR', {
        day: '2-digit', month: '2-digit', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    });
    const footerDiv = document.createElement('div');
    footerDiv.className = 'pdf-footer';
    footerDiv.style.marginTop = '10px';
    footerDiv.style.borderTop = '1px solid #ccc';
    footerDiv.style.paddingTop = '5px';
    footerDiv.style.marginBottom = '8px';
    footerDiv.style.textAlign = 'center';
    footerDiv.style.fontSize = '9pt';
    footerDiv.style.color = '#4b5563';
    footerDiv.innerHTML = `<span>Prodismo SRL - F612-IT-2 Documento generado el ${fechaHoraGeneracion}</span>`;
    
    // Contenedor del contenido del contrato
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = contractHtml;
    contentDiv.style.padding = '15px';
    
    tempDiv.appendChild(headerDiv);
    tempDiv.appendChild(contentDiv);
    tempDiv.appendChild(footerDiv);
    
    // Ocultar temporalmente en el DOM para capturar
    tempDiv.style.position = 'absolute';
    tempDiv.style.top = '-9999px';
    tempDiv.style.left = '-9999px';
    document.body.appendChild(tempDiv);
    
    // Esperar un momento para que los estilos se apliquen
    await new Promise(resolve => setTimeout(resolve, 600));
    
    const btn = document.getElementById('generarPdfBtn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-pulse"></i> Generando PDF...';
    btn.disabled = true;
    
    try {
        Swal.fire({
            title: 'Generando PDF',
            text: 'Por favor espere, el documento se está preparando...',
            allowOutsideClick: false,
            didOpen: () => { Swal.showLoading(); }
        });
        
        // Capturar el contenedor con html2canvas
        const canvas = await html2canvas(tempDiv, {
            scale: 1.5, //2, (1.5-2-3)
            logging: false,
            useCORS: false,
            letterRendering: true
        });
        
        // Eliminar el contenedor temporal del DOM
        document.body.removeChild(tempDiv);
        
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
        
        // Agregar la imagen dividida en páginas
        await addImagesToPdf(doc, imgData, imgWidth, imgHeight, pageHeight, margins);
        
        // Guardar el PDF
        doc.save(filename);
        
        Swal.close();
        await Swal.fire({
            icon: 'success',
            title: 'PDF generado correctamente',
            text: `El archivo "${filename}" se ha descargado.`,
            confirmButtonColor: '#1e3a8a'
        });
    } catch (err) {
        console.error("Error PDF:", err);
        Swal.close();
        await Swal.fire({
            icon: 'error',
            title: 'Error al generar el PDF',
            text: 'Ocurrió un problema inesperado. Intente nuevamente.',
            confirmButtonColor: '#d33'
        });
        // Asegurar que se elimine el contenedor temporal en caso de error
        if (document.body.contains(tempDiv)) document.body.removeChild(tempDiv);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

document.getElementById('generarPdfBtn').addEventListener('click', generatePDF);

// Inicializar vista previa
resetToExample();