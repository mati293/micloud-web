import type { Lang } from "./dictionaries"

type Section = { heading: string; paragraphs: string[]; list?: string[] }

type PrivacyContent = {
  eyebrow: string
  title: string
  updated: string
  draftNote: string
  back: string
  sections: Section[]
}

export const privacyContent: Record<Lang, PrivacyContent> = {
  es: {
    eyebrow: "Legal",
    title: "Política de privacidad",
    updated: "Última actualización: agosto de 2026",
    draftNote: "Borrador sujeto a revisión legal antes de su publicación definitiva.",
    back: "Volver al inicio",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        paragraphs: [
          "El responsable del tratamiento de los datos personales recogidos a través de este sitio es MiCloud SAS, con domicilio en Zonamérica, Ruta 8 Km 17.500, Edificio @3-101, Montevideo, Uruguay.",
          "Para cualquier consulta sobre esta política o sobre sus datos, puede escribirnos a contacto@micloud.uy.",
        ],
      },
      {
        heading: "2. Qué datos recogemos",
        paragraphs: [
          "Recogemos los datos que usted nos proporciona voluntariamente a través del formulario de contacto:",
        ],
        list: [
          "Nombre y apellido",
          "Empresa",
          "Email corporativo",
          "Teléfono o WhatsApp (opcional)",
          "País, número de empleados y tipo de necesidad",
          "El contenido del mensaje que nos envíe",
        ],
      },
      {
        heading: "3. Finalidad del tratamiento",
        paragraphs: [
          "Utilizamos sus datos únicamente para responder su consulta, elaborar una propuesta de diagnóstico y mantener el contacto comercial que usted inició. No los usamos para fines distintos ni los cedemos con fines publicitarios de terceros.",
          "Adicionalmente, utilizamos herramientas de analítica web para entender de forma agregada cómo se usa el sitio y mejorarlo.",
        ],
      },
      {
        heading: "4. Base legal",
        paragraphs: [
          "La base legal del tratamiento es su consentimiento, que usted otorga al completar y enviar el formulario y al aceptar esta política. Puede retirar ese consentimiento en cualquier momento.",
        ],
      },
      {
        heading: "5. Plazo de conservación",
        paragraphs: [
          "Conservamos sus datos durante el tiempo necesario para atender su consulta y gestionar la relación comercial, y luego durante el plazo que exija la normativa aplicable. Transcurrido ese plazo, los eliminamos o anonimizamos.",
        ],
      },
      {
        heading: "6. Destinatarios y transferencias internacionales",
        paragraphs: [
          "Sus datos pueden ser tratados por proveedores tecnológicos que nos prestan servicios de infraestructura y analítica (por ejemplo, servicios de correo y hosting, y herramientas de medición de uso del sitio), actuando como encargados del tratamiento y bajo obligaciones de confidencialidad.",
          "Algunos de estos proveedores pueden estar ubicados fuera de Uruguay, lo que puede implicar transferencias internacionales de datos, realizadas con las garantías que exige la normativa aplicable.",
        ],
      },
      {
        heading: "7. Sus derechos",
        paragraphs: [
          "Usted tiene derecho a acceder a sus datos, rectificarlos, solicitar su supresión y oponerse a su tratamiento. Para ejercer estos derechos, escríbanos a contacto@micloud.uy indicando el derecho que desea ejercer.",
        ],
      },
      {
        heading: "8. Marco normativo",
        paragraphs: [
          "El tratamiento de sus datos se rige por la Ley N.º 18.331 de Protección de Datos Personales de la República Oriental del Uruguay y su normativa complementaria. La autoridad de control es la Unidad Reguladora y de Control de Datos Personales (URCDP), ante la cual usted puede presentar reclamos.",
        ],
      },
      {
        heading: "9. Cookies",
        paragraphs: [
          "Este sitio utiliza cookies propias y de terceros con fines de analítica. Las cookies no esenciales se activan únicamente con su consentimiento. Puede configurar o rechazar el uso de cookies desde su navegador.",
        ],
      },
      {
        heading: "10. Cambios en esta política",
        paragraphs: [
          "Podemos actualizar esta política para reflejar cambios legales o en nuestros servicios. Publicaremos la versión vigente en esta misma página, con su fecha de actualización.",
        ],
      },
    ],
  },
  en: {
    eyebrow: "Legal",
    title: "Privacy policy",
    updated: "Last updated: August 2026",
    draftNote: "Draft subject to legal review before final publication.",
    back: "Back to home",
    sections: [
      {
        heading: "1. Data controller",
        paragraphs: [
          "The controller of the personal data collected through this site is MiCloud SAS, located at Zonamérica, Ruta 8 Km 17.500, Building @3-101, Montevideo, Uruguay.",
          "For any question about this policy or your data, you can write to us at contacto@micloud.uy.",
        ],
      },
      {
        heading: "2. What data we collect",
        paragraphs: [
          "We collect the data you voluntarily provide through the contact form:",
        ],
        list: [
          "Full name",
          "Company",
          "Work email",
          "Phone or WhatsApp (optional)",
          "Country, number of employees and type of need",
          "The content of the message you send us",
        ],
      },
      {
        heading: "3. Purpose of processing",
        paragraphs: [
          "We use your data only to respond to your inquiry, prepare a diagnostic proposal and maintain the business contact you initiated. We do not use it for other purposes or share it for third-party advertising.",
          "Additionally, we use web analytics tools to understand, in aggregate, how the site is used and to improve it.",
        ],
      },
      {
        heading: "4. Legal basis",
        paragraphs: [
          "The legal basis for processing is your consent, which you give by completing and submitting the form and accepting this policy. You may withdraw that consent at any time.",
        ],
      },
      {
        heading: "5. Retention period",
        paragraphs: [
          "We keep your data for as long as necessary to handle your inquiry and manage the business relationship, and then for the period required by applicable law. After that period, we delete or anonymize it.",
        ],
      },
      {
        heading: "6. Recipients and international transfers",
        paragraphs: [
          "Your data may be processed by technology providers that supply us with infrastructure and analytics services (for example, email and hosting services and site-usage measurement tools), acting as processors and under confidentiality obligations.",
          "Some of these providers may be located outside Uruguay, which may involve international data transfers, carried out with the safeguards required by applicable law.",
        ],
      },
      {
        heading: "7. Your rights",
        paragraphs: [
          "You have the right to access your data, rectify it, request its deletion and object to its processing. To exercise these rights, write to us at contacto@micloud.uy stating the right you wish to exercise.",
        ],
      },
      {
        heading: "8. Legal framework",
        paragraphs: [
          "The processing of your data is governed by Law No. 18.331 on the Protection of Personal Data of the Eastern Republic of Uruguay and its supplementary regulations. The supervisory authority is the Personal Data Regulatory and Control Unit (URCDP), before which you may file complaints.",
        ],
      },
      {
        heading: "9. Cookies",
        paragraphs: [
          "This site uses first- and third-party cookies for analytics purposes. Non-essential cookies are activated only with your consent. You can configure or reject the use of cookies from your browser.",
        ],
      },
      {
        heading: "10. Changes to this policy",
        paragraphs: [
          "We may update this policy to reflect legal changes or changes in our services. We will publish the current version on this same page, with its update date.",
        ],
      },
    ],
  },
}
