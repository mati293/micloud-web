export type Lang = "es" | "en";

export const dictionaries = {
  es: {
    nav: {
      model: "Modelo",
      services: "Servicios",
      sla: "SLA",
      about: "Nosotros",
      faq: "Preguntas",
      contact: "Contacto",
      cta: "Agendar diagnóstico",
    },
    hero: {
      context: "Zonamérica, Uruguay · Operación en México",
      stack: "Oracle · Azure · Microsoft 365 · Libra · Primavera",
      headline1: "Un solo contrato. Un equipo.",
      headline2: "Toda su operación tecnológica.",
      subheadline:
        "MiCloud asume la responsabilidad integral de la TI de su empresa —infraestructura, seguridad, aplicaciones y soporte— con un único responsable y un costo mensual previsible.",
      ctaPrimary: "Agendar diagnóstico",
      ctaSecondary: "Ver nuestro SLA",
    },
    problem: {
      eyebrow: "El problema",
      title: "Cuando algo falla, ¿a quién llama?",
      lead: "La mayoría de las empresas no tiene un problema de tecnología. Tiene un problema de responsabilidad.",
      items: [
        {
          title: "Cinco proveedores, ninguno responsable",
          body: "El de redes dice que es del hosting. El de hosting dice que es del ERP. Usted queda en el medio.",
        },
        {
          title: "Costos que aparecen",
          body: "Licencias duplicadas, capacidad que no usa, horas extra que nadie presupuestó.",
        },
        {
          title: "Su equipo apagando incendios",
          body: "La gente que debería mejorar procesos se pasa el día resolviendo urgencias.",
        },
        {
          title: "Nadie mira el conjunto",
          body: "Cada proveedor optimiza su parte. Nadie optimiza su operación.",
        },
      ],
    },
    model: {
      eyebrow: "El modelo",
      title: "Somos su General Contractor de TI",
      body: "En construcción, el contratista general no levanta cada pared: responde por la obra entera. Coordina especialistas, controla plazos y presupuesto, y es el único número al que llamar cuando algo no sale como estaba previsto.",
      bodyStrong: "MiCloud aplica ese modelo a la tecnología.",
      body2:
        "Coordinamos plataformas, proveedores y especialistas —Oracle, Azure, Microsoft 365, ciberseguridad, desarrollo— bajo un solo contrato. Usted no gestiona proveedores: gestiona su negocio.",
      diagram: {
        client: "Su empresa",
        before: "Antes",
        beforeNote: "4 contratos · 4 facturas · 0 responsables",
        after: "Con MiCloud",
        afterNote: "1 contrato · 1 responsable",
        vendors: ["Redes", "Hosting", "Seguridad", "ERP"],
      },
    },
    services: {
      eyebrow: "Servicios",
      title: "Todo lo que su operación tecnológica necesita",
      subtitle:
        "Empezamos por donde más duele y ampliamos a medida que su empresa lo necesita.",
      featuredLabel: "Puertas de entrada",
      moreLabel: "Y además",
      cta: "Consultar por este servicio",
      featured: [
        {
          name: "Soporte y mesa de ayuda",
          body: "Su gente trabaja. Nosotros resolvemos. Un solo equipo para todas sus plataformas, con tiempos de respuesta comprometidos.",
        },
        {
          name: "Infraestructura y plataformas",
          body: "La capacidad exacta que necesita. Nunca paga recursos que no usa, nunca se topa con un límite.",
        },
        {
          name: "Ciberseguridad integral",
          body: "No vendemos productos de seguridad: asumimos la responsabilidad. Prevención, monitoreo, detección y respuesta.",
        },
      ],
      more: [
        {
          name: "Aplicaciones y desarrollo",
          body: "Usted usa el software. Nosotros nos ocupamos de que funcione, se integre y evolucione.",
        },
        {
          name: "Gobernanza y estrategia de TI",
          body: "Sin estrategia, la tecnología es gasto. Con gobernanza, es retorno.",
        },
        {
          name: "Consultoría y mejora continua",
          body: "Medimos, ajustamos y volvemos a medir. La operación mejora todos los trimestres.",
        },
        {
          name: "Transformación digital",
          body: "Rediseñamos procesos, no solo migramos sistemas.",
        },
        {
          name: "IA y analítica avanzada",
          body: "Sus datos convertidos en decisiones: predicción, automatización y detección de anomalías.",
        },
      ],
    },
    sla: {
      eyebrow: "Compromiso de servicio",
      title: "Nuestro SLA no está en la letra chica. Está acá.",
      lead: "La mayoría de los proveedores de TI de la región no publica sus tiempos de respuesta. Nosotros sí, porque es la única forma de que usted sepa qué está comprando antes de firmar.",
      columns: ["Severidad", "1ª respuesta", "Resolución"],
      rows: [
        { severity: "Crítica", response: "15 min", resolution: "4 h" },
        { severity: "Alta", response: "1 h", resolution: "8 h" },
        { severity: "Media", response: "4 h", resolution: "2 días háb." },
        { severity: "Baja", response: "1 día háb.", resolution: "5 días háb." },
      ],
      footnote:
        "Cobertura 24/7 para severidad crítica. Reporte mensual de cumplimiento, con los números reales del mes —los buenos y los malos.",
      cta: "Ver el SLA completo",
    },
    uruguay: {
      eyebrow: "Por qué desde Uruguay",
      title: "Por qué operamos desde Uruguay",
      items: [
        {
          title: "Estructura de zona franca",
          body: "Operamos desde Zonamérica, la zona franca de servicios más importante de la región. Esa estructura nos permite ofrecer servicio de nivel corporativo a un costo que no se sostiene en otros mercados —sin recortar calidad ni pagar peor a nuestro equipo.",
        },
        {
          title: "Jornada solapada",
          body: "Montevideo está a 3 horas de Ciudad de México y a 2 de Bogotá. Su equipo y el nuestro trabajan al mismo tiempo, todos los días. Nadie espera 12 horas por una respuesta.",
        },
        {
          title: "Talento especializado",
          body: "Uruguay es el segundo exportador de software per cápita de América Latina y el sector TI representa el 4,3 % de su PIB.",
        },
        {
          title: "Estabilidad",
          body: "Marco jurídico previsible, legislación de protección de datos alineada con estándares internacionales y continuidad institucional.",
        },
      ],
    },
    about: {
      eyebrow: "Quiénes somos",
      title: "Nacimos operando tecnología corporativa de verdad",
      body1:
        "MiCloud no empezó con una presentación: empezó operando. Nuestro equipo gestiona la infraestructura, las aplicaciones y la seguridad de un grupo corporativo mexicano con más de 60 años de trayectoria y múltiples empresas en operación.",
      body2:
        "Esa es nuestra escuela: entornos reales, usuarios reales, operaciones que no se pueden detener.",
      trustLabel: "Confían en nosotros",
      trustName: "Grupo corporativo mexicano",
      trustNote:
        "Operación tecnológica integral para las empresas del grupo. (Logo y nombre sujetos a autorización del cliente.)",
      teamNote: "Equipo — fotos, nombres y trayectoria a completar con el cliente.",
    },
    steps: {
      eyebrow: "Cómo empezamos",
      title: "Cambiar de proveedor no tiene por qué doler",
      items: [
        {
          n: "01",
          title: "Diagnóstico sin costo",
          time: "5 días",
          body: "Relevamos su infraestructura, sus aplicaciones, sus contratos vigentes y sus puntos de falla. Le entregamos el informe aunque no trabajemos juntos.",
        },
        {
          n: "02",
          title: "Propuesta con alcance y precio",
          time: "5 días",
          body: "Qué asumimos, qué queda de su lado, qué SLA aplica y cuánto cuesta por mes. Sin sorpresas después.",
        },
        {
          n: "03",
          title: "Transición ordenada",
          time: "30 días",
          body: "Tomamos la operación en paralelo con lo que ya tiene. Documentamos todo. Su operación no se detiene ni un día.",
        },
        {
          n: "04",
          title: "Operación con reporte mensual",
          time: "Cada mes",
          body: "Cumplimiento de SLA, incidentes, mejoras aplicadas y recomendaciones. Todos los meses, sin que tenga que pedirlo.",
        },
      ],
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que suele preguntar quien está por cambiar",
      items: [
        {
          q: "¿Tengo que despedir a mi equipo de TI?",
          a: "No. Nuestro modelo está diseñado para sumar capacidad, no para reemplazar personas: cubrimos guardias, especialidades que su empresa no tiene internamente y la operación de base, para que su equipo se dedique a lo que agrega valor al negocio. Si prefiere tercerizar la operación completa, también lo hacemos —pero es una decisión suya, no una condición nuestra.",
        },
        {
          q: "¿Cómo es la transición desde mi proveedor actual?",
          a: "Trabajamos 30 días en paralelo con la operación vigente antes de tomar el control. Relevamos, documentamos y recién después asumimos. Nunca hay un día sin cobertura.",
        },
        {
          q: "¿Qué pasa si quiero irme?",
          a: "Se va con toda la documentación de su operación en la mano: inventario, accesos, configuraciones y procedimientos. No trabajamos con dependencia forzada.",
        },
        {
          q: "¿Cuánto cuesta?",
          a: "Depende de la cantidad de usuarios, la criticidad de su operación y el alcance que contrate. Después del diagnóstico le damos un número mensual cerrado, no un rango. El diagnóstico es sin costo.",
        },
        {
          q: "Somos una empresa chica. ¿Voy a ser una cuenta menor?",
          a: "Nuestro modelo es escalonado: usted contrata el alcance que necesita hoy y lo amplía cuando crece, sin cambiar de proveedor ni renegociar el contrato entero. Los tiempos de respuesta son los mismos para todos los clientes; lo que varía es el alcance de lo que cubrimos, no la urgencia con la que atendemos.",
        },
        {
          q: "¿Dónde quedan mis datos?",
          a: "Definimos la ubicación con usted según su normativa aplicable —nube pública en la región, nube privada o esquema híbrido. Uruguay tiene legislación de protección de datos alineada con estándares internacionales, lo que facilita operaciones transfronterizas.",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de su operación tecnológica",
      subtitle:
        "Cuéntenos qué tiene hoy y qué le duele. Respondemos en menos de 24 horas hábiles con una propuesta de diagnóstico.",
      form: {
        name: "Nombre y apellido",
        namePlaceholder: "Su nombre",
        company: "Empresa",
        companyPlaceholder: "Nombre de su empresa",
        email: "Email corporativo",
        emailPlaceholder: "usted@empresa.com",
        phone: "Teléfono / WhatsApp",
        phonePlaceholder: "Opcional",
        country: "País",
        countryOptions: ["Uruguay", "México", "Otro"],
        size: "Nº de empleados",
        sizeOptions: ["1–20", "21–100", "101–500", "+500"],
        need: "¿Qué necesita?",
        needOptions: [
          "Soporte y mesa de ayuda",
          "Infraestructura",
          "Ciberseguridad",
          "Toda la operación",
          "Otro",
        ],
        message: "Mensaje",
        messagePlaceholder: "Cuéntenos brevemente qué está buscando",
        consent: "Acepto la política de privacidad y el tratamiento de mis datos.",
        submit: "Enviar consulta",
        placeholderSelect: "Seleccione…",
      },
      success:
        "Listo. Recibimos su consulta y le respondemos en menos de 24 horas hábiles.",
      directLabel: "Escríbanos directo",
      whatsapp: "WhatsApp",
    },
    footer: {
      tagline: "Soporte y Consultoría TI",
      company: "MiCloud SAS",
      address: "Zonamérica · Ruta 8, Km 17.500 · Edificio @3-101 · Montevideo, Uruguay",
      privacy: "Política de privacidad",
      rights: "Todos los derechos reservados.",
    },
  },

  en: {
    nav: {
      model: "Model",
      services: "Services",
      sla: "SLA",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
      cta: "Book a diagnostic",
    },
    hero: {
      context: "Zonamérica, Uruguay · Operating in Mexico",
      stack: "Oracle · Azure · Microsoft 365 · Libra · Primavera",
      headline1: "One contract. One team.",
      headline2: "Your entire technology operation.",
      subheadline:
        "MiCloud takes full ownership of your company's IT —infrastructure, security, applications and support— under a single point of accountability and a predictable monthly cost.",
      ctaPrimary: "Book a diagnostic",
      ctaSecondary: "See our SLA",
    },
    problem: {
      eyebrow: "The problem",
      title: "When something breaks, who do you call?",
      lead: "Most companies don't have a technology problem. They have an accountability problem.",
      items: [
        {
          title: "Five vendors, no one accountable",
          body: "The network vendor says it's the hosting. The hosting vendor says it's the ERP. You're stuck in the middle.",
        },
        {
          title: "Costs that appear from nowhere",
          body: "Duplicate licenses, capacity you don't use, overtime no one budgeted for.",
        },
        {
          title: "Your team fighting fires",
          body: "The people who should be improving processes spend the day handling emergencies.",
        },
        {
          title: "No one sees the whole picture",
          body: "Each vendor optimizes their piece. No one optimizes your operation.",
        },
      ],
    },
    model: {
      eyebrow: "The model",
      title: "We're your IT general contractor",
      body: "A general contractor doesn't lay every brick — they answer for the whole build. They coordinate specialists, control schedule and budget, and are the one number to call when something goes wrong.",
      bodyStrong: "MiCloud brings that model to technology.",
      body2:
        "We coordinate platforms, vendors and specialists —Oracle, Azure, Microsoft 365, cybersecurity, development— under a single contract. You don't manage vendors: you run your business.",
      diagram: {
        client: "Your company",
        before: "Before",
        beforeNote: "4 contracts · 4 invoices · 0 owners",
        after: "With MiCloud",
        afterNote: "1 contract · 1 owner",
        vendors: ["Network", "Hosting", "Security", "ERP"],
      },
    },
    services: {
      eyebrow: "Services",
      title: "Everything your technology operation needs",
      subtitle:
        "We start where it hurts most and scale as your company needs it.",
      featuredLabel: "Where most clients start",
      moreLabel: "And more",
      cta: "Ask about this service",
      featured: [
        {
          name: "Support & help desk",
          body: "Your people work. We resolve. One team for all your platforms, with committed response times.",
        },
        {
          name: "Infrastructure & platforms",
          body: "Exactly the capacity you need. You never pay for resources you don't use, and never hit a ceiling.",
        },
        {
          name: "Comprehensive cybersecurity",
          body: "We don't sell security products: we take ownership. Prevention, monitoring, detection and response.",
        },
      ],
      more: [
        {
          name: "Applications & development",
          body: "You use the software. We make sure it works, integrates and evolves.",
        },
        {
          name: "IT governance & strategy",
          body: "Without strategy, technology is a cost. With governance, it's a return.",
        },
        {
          name: "Consulting & continuous improvement",
          body: "We measure, adjust and measure again. Your operation improves every quarter.",
        },
        {
          name: "Digital transformation",
          body: "We redesign processes, not just migrate systems.",
        },
        {
          name: "AI & advanced analytics",
          body: "Your data turned into decisions: prediction, automation and anomaly detection.",
        },
      ],
    },
    sla: {
      eyebrow: "Service commitment",
      title: "Our SLA isn't in the fine print. It's right here.",
      lead: "Most IT providers in the region won't publish their response times. We do — because it's the only way you know what you're buying before you sign.",
      columns: ["Severity", "First response", "Resolution"],
      rows: [
        { severity: "Critical", response: "15 min", resolution: "4 h" },
        { severity: "High", response: "1 h", resolution: "8 h" },
        { severity: "Medium", response: "4 h", resolution: "2 business days" },
        { severity: "Low", response: "1 business day", resolution: "5 business days" },
      ],
      footnote:
        "24/7 coverage for critical severity. Monthly compliance report with the real numbers of the month — the good and the bad.",
      cta: "See the full SLA",
    },
    uruguay: {
      eyebrow: "Why from Uruguay",
      title: "Why we operate from Uruguay",
      items: [
        {
          title: "Free-zone structure",
          body: "We operate from Zonamérica, the region's leading services free zone. That structure lets us offer corporate-grade service at a cost that doesn't hold up in other markets — without cutting quality or underpaying our team.",
        },
        {
          title: "Overlapping business hours",
          body: "Montevideo is 3 hours from Mexico City and 2 from Bogotá. Your team and ours work at the same time, every day. No one waits 12 hours for an answer.",
        },
        {
          title: "Specialized talent",
          body: "Uruguay is Latin America's second-largest software exporter per capita, and IT accounts for 4.3% of its GDP.",
        },
        {
          title: "Stability",
          body: "A predictable legal framework, data-protection law aligned with international standards, and institutional continuity.",
        },
      ],
    },
    about: {
      eyebrow: "About us",
      title: "We were born running real corporate technology",
      body1:
        "MiCloud didn't start with a pitch deck: it started operating. Our team runs the infrastructure, applications and security of a Mexican corporate group with over 60 years of history and multiple companies in operation.",
      body2:
        "That's our school: real environments, real users, operations that can't stop.",
      trustLabel: "They trust us",
      trustName: "Mexican corporate group",
      trustNote:
        "End-to-end technology operation for the group's companies. (Logo and name subject to client authorization.)",
      teamNote: "Team — photos, names and background to be completed with the client.",
    },
    steps: {
      eyebrow: "How we start",
      title: "Switching providers doesn't have to hurt",
      items: [
        {
          n: "01",
          title: "Free diagnostic",
          time: "5 days",
          body: "We assess your infrastructure, applications, current contracts and points of failure. You get the report even if we don't end up working together.",
        },
        {
          n: "02",
          title: "Proposal with scope and price",
          time: "5 days",
          body: "What we take on, what stays on your side, which SLA applies and how much it costs per month. No surprises later.",
        },
        {
          n: "03",
          title: "Orderly transition",
          time: "30 days",
          body: "We take over the operation in parallel with what you already have. We document everything. Your operation doesn't stop for a single day.",
        },
        {
          n: "04",
          title: "Operation with monthly reporting",
          time: "Every month",
          body: "SLA compliance, incidents, improvements applied and recommendations. Every month, without you having to ask.",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "What people ask when they're about to switch",
      items: [
        {
          q: "Do I have to lay off my IT team?",
          a: "No. Our model is designed to add capacity, not replace people: we cover on-call, specialties your company doesn't have in-house, and baseline operations, so your team can focus on what adds value to the business. If you'd rather outsource the whole operation, we do that too — but that's your decision, not our condition.",
        },
        {
          q: "What does the transition from my current provider look like?",
          a: "We work 30 days in parallel with your current operation before taking control. We assess, document, and only then take over. There's never a day without coverage.",
        },
        {
          q: "What if I want to leave?",
          a: "You leave with all your operational documentation in hand: inventory, access, configurations and procedures. We don't work with forced lock-in.",
        },
        {
          q: "How much does it cost?",
          a: "It depends on the number of users, how critical your operation is, and the scope you contract. After the diagnostic we give you a fixed monthly figure, not a range. The diagnostic is free.",
        },
        {
          q: "We're a small company. Will I be a minor account?",
          a: "Our model is tiered: you contract the scope you need today and expand as you grow, without switching providers or renegotiating the whole contract. Response times are the same for every client; what varies is the scope of what we cover, not the urgency with which we respond.",
        },
        {
          q: "Where does my data live?",
          a: "We define the location with you according to your applicable regulations — public cloud in the region, private cloud or a hybrid setup. Uruguay's data-protection law is aligned with international standards, which makes cross-border operations easier.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your technology operation",
      subtitle:
        "Tell us what you have today and what hurts. We reply within 24 business hours with a diagnostic proposal.",
      form: {
        name: "Full name",
        namePlaceholder: "Your name",
        company: "Company",
        companyPlaceholder: "Your company name",
        email: "Work email",
        emailPlaceholder: "you@company.com",
        phone: "Phone / WhatsApp",
        phonePlaceholder: "Optional",
        country: "Country",
        countryOptions: ["Uruguay", "Mexico", "Other"],
        size: "Number of employees",
        sizeOptions: ["1–20", "21–100", "101–500", "500+"],
        need: "What do you need?",
        needOptions: [
          "Support & help desk",
          "Infrastructure",
          "Cybersecurity",
          "The whole operation",
          "Other",
        ],
        message: "Message",
        messagePlaceholder: "Briefly, what are you looking for?",
        consent: "I accept the privacy policy and the processing of my data.",
        submit: "Send inquiry",
        placeholderSelect: "Select…",
      },
      success:
        "Done. We received your inquiry and will reply within 24 business hours.",
      directLabel: "Reach us directly",
      whatsapp: "WhatsApp",
    },
    footer: {
      tagline: "IT Support & Consulting",
      company: "MiCloud SAS",
      address: "Zonamérica · Ruta 8, Km 17.500 · Building @3-101 · Montevideo, Uruguay",
      privacy: "Privacy policy",
      rights: "All rights reserved.",
    },
  },
};

export type Dictionary = typeof dictionaries.es;
