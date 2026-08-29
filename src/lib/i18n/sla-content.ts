import type { Lang } from "./dictionaries"

export const slaContent = {
  es: {
    eyebrow: "Compromiso de servicio",
    title: "Nuestro SLA, publicado y por escrito",
    intro:
      "La mayoría de los proveedores de TI de la región no publica sus tiempos de respuesta. Nosotros sí: acá están, para que usted sepa exactamente qué está contratando antes de firmar.",
    tableTitle: "Tiempos por severidad",
    columns: ["Severidad", "1ª respuesta", "Resolución objetivo", "Qué significa"],
    rows: [
      { s: "Crítica", r: "15 min", res: "4 h", d: "Operación detenida o sistema crítico caído." },
      { s: "Alta", r: "1 h", res: "8 h", d: "Función clave degradada; hay impacto operativo." },
      { s: "Media", r: "4 h", res: "2 días háb.", d: "Problema que afecta a un usuario o una función no crítica." },
      { s: "Baja", r: "1 día háb.", res: "5 días háb.", d: "Consulta, solicitud o mejora sin impacto operativo." },
    ],
    coverageTitle: "Cobertura y canales",
    coverage: [
      { t: "24/7 en severidad crítica", d: "Guardia disponible fuera de horario para incidentes que detienen la operación." },
      { t: "Horario extendido para el resto", d: "Atención de lunes a viernes en jornada laboral ampliada, con jornada solapada Uruguay–México." },
      { t: "Múltiples canales", d: "Teléfono, email, portal de tickets y WhatsApp. Usted elige por dónde nos escribe." },
      { t: "Reporte mensual", d: "Cumplimiento del SLA con los números reales del mes —los buenos y los malos—, incidentes y mejoras aplicadas." },
    ],
    exclusionsTitle: "Qué queda fuera del SLA",
    exclusions:
      "Los tiempos comprometidos no aplican a: casos de fuerza mayor, caídas de servicios de terceros (nube, proveedor de internet o fabricante), ventanas de mantenimiento programado comunicadas con anticipación, e incidentes originados por cambios o acciones del propio cliente fuera de nuestra gestión.",
    ctaTitle: "¿Quiere ver cómo aplica a su operación?",
    ctaText: "Agende un diagnóstico sin costo y definimos el alcance y el SLA para su caso concreto.",
    cta: "Agendar diagnóstico",
    back: "Volver al inicio",
  },
  en: {
    eyebrow: "Service commitment",
    title: "Our SLA, published and in writing",
    intro:
      "Most IT providers in the region won't publish their response times. We do: here they are, so you know exactly what you're contracting before you sign.",
    tableTitle: "Times by severity",
    columns: ["Severity", "First response", "Target resolution", "What it means"],
    rows: [
      { s: "Critical", r: "15 min", res: "4 h", d: "Operation stopped or a critical system down." },
      { s: "High", r: "1 h", res: "8 h", d: "Key function degraded; there is operational impact." },
      { s: "Medium", r: "4 h", res: "2 business days", d: "Issue affecting one user or a non-critical function." },
      { s: "Low", r: "1 business day", res: "5 business days", d: "Question, request or improvement with no operational impact." },
    ],
    coverageTitle: "Coverage and channels",
    coverage: [
      { t: "24/7 for critical severity", d: "On-call availability after hours for incidents that stop the operation." },
      { t: "Extended hours for everything else", d: "Monday to Friday during extended business hours, with overlapping Uruguay–Mexico time zones." },
      { t: "Multiple channels", d: "Phone, email, ticket portal and WhatsApp. You choose how you reach us." },
      { t: "Monthly report", d: "SLA compliance with the real numbers of the month —good and bad—, incidents and improvements applied." },
    ],
    exclusionsTitle: "What's outside the SLA",
    exclusions:
      "Committed times do not apply to: force majeure, outages of third-party services (cloud, internet provider or vendor), scheduled maintenance windows communicated in advance, and incidents caused by the client's own changes or actions outside our management.",
    ctaTitle: "Want to see how it applies to your operation?",
    ctaText: "Book a free diagnostic and we'll define the scope and SLA for your specific case.",
    cta: "Book a diagnostic",
    back: "Back to home",
  },
} satisfies Record<Lang, unknown>
