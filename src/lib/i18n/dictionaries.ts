export type Lang = "es" | "en";

export const dictionaries = {
  es: {
    nav: {
      about: "Quiénes somos",
      services: "Servicios",
      faq: "Preguntas frecuentes",
      contact: "Contacto",
      cta: "Solicitar propuesta",
    },
    hero: {
      eyebrow: "Soporte y Consultoría TI",
      place: "Zonamérica, Montevideo — Uruguay · México",
      badge: "Tu General Contractor de TI",
      headlineTop: "Un solo socio para",
      headlineBottom: "toda tu",
      headlineAccent: "tecnología",
      headline: "Tu General Contractor de TI: un solo socio para toda tu tecnología.",
      subheadline:
        "Mi Cloud centraliza la infraestructura, la ciberseguridad, el desarrollo y el soporte de tu empresa bajo un mismo equipo, para que dejes de coordinar proveedores y empieces a avanzar.",
      subheadlineShort:
        "Infraestructura, ciberseguridad, desarrollo y soporte bajo un mismo equipo.",
      cta: "Solicitar propuesta",
      ctaSecondary: "Conocer los servicios",
      trusted: "Sectores que confían su tecnología a Mi Cloud",
      cards: [
        {
          title: "Servicios",
          body: "Ocho líneas de servicio de TI para operar, proteger y hacer crecer tu empresa.",
          cta: "Explorar servicios",
          href: "#servicios",
        },
        {
          title: "Por qué Mi Cloud",
          body: "Un solo interlocutor senior en lugar de una lista de proveedores desconectados.",
          cta: "Conocer el enfoque",
          href: "#quienes-somos",
        },
        {
          title: "Soporte",
          body: "Atención al usuario y soporte técnico con un equipo humano disponible 24/7.",
          cta: "Hablar con nosotros",
          href: "#contacto",
        },
      ],
    },
    social: {
      title: "Sectores que ya confían su tecnología a Mi Cloud",
      note: "Espacio reservado para logos y cifras de clientes reales.",
      industries: [
        "Retail",
        "Manufactura",
        "Servicios financieros",
        "Salud",
        "Logística",
      ],
      stats: [
        { value: "+8", label: "líneas de servicio de TI" },
        { value: "1", label: "equipo, todos los frentes" },
        { value: "24/7", label: "soporte disponible" },
      ],
    },
    showcase: {
      titleTop: "Toda tu operación de TI,",
      titleAccent: "bajo control",
    },
    about: {
      title: "¿Quiénes somos?",
      body: "Somos Mi Cloud, una consultora de TI que actúa como el General Contractor tecnológico de tu empresa: coordinamos infraestructura, seguridad, desarrollo y soporte bajo una sola relación, con un equipo que entiende tu negocio tanto como tu stack.",
    },
    why: {
      title: "Por qué Mi Cloud",
      subtitle:
        "No sumamos un proveedor más a tu lista: reemplazamos esa lista por un solo socio.",
      items: [
        {
          title: "Un solo interlocutor",
          body: "Coordinamos todos los frentes de TI bajo un mismo equipo, para que dejes de lidiar con múltiples proveedores.",
        },
        {
          title: "Equipo senior multidisciplinario",
          body: "Especialistas en infraestructura, seguridad, datos y desarrollo trabajando de forma coordinada.",
        },
        {
          title: "Escala con tu negocio",
          body: "Sumamos o ajustamos servicios a medida que tu empresa crece, sin renegociar todo de cero.",
        },
        {
          title: "Visión estratégica, no solo soporte",
          body: "Pensamos la tecnología como palanca de negocio, con hoja de ruta y objetivos claros.",
        },
      ],
    },
    services: {
      title: "Servicios",
      label: "Alcance de servicios",
      subtitle: "Ocho líneas de servicio, un solo proveedor.",
      cta: "Consultar por este servicio",
      items: [
        {
          name: "Transformación Digital",
          body: "Modernizamos tus procesos y sistemas para que tu empresa opere con la agilidad de una nativa digital.",
        },
        {
          name: "Gestión de Infraestructura y Plataformas",
          body: "Administramos tu infraestructura y plataformas cloud para que nunca tengas que pensar en ellas.",
        },
        {
          name: "Ciberseguridad Integral",
          body: "Protegemos tus datos y sistemas de punta a punta, de la prevención a la respuesta ante incidentes.",
        },
        {
          name: "Inteligencia Artificial y Analítica Avanzada",
          body: "Convertimos tus datos en decisiones, con inteligencia artificial aplicada a problemas reales de negocio.",
        },
        {
          name: "Aplicaciones y Desarrollo",
          body: "Diseñamos y desarrollamos software a medida que se adapta a tu operación, no al revés.",
        },
        {
          name: "Consultoría y Mejora Continua",
          body: "Auditamos y optimizamos tus procesos de TI de forma continua, con foco en resultados medibles.",
        },
        {
          name: "Soporte Técnico y Atención al Usuario",
          body: "Resolvemos los problemas de tus usuarios rápido, con un equipo humano disponible cuando lo necesitás.",
        },
        {
          name: "Gobernanza y Estrategia de TI",
          body: "Alineamos la tecnología con tus objetivos de negocio, con políticas claras y una hoja de ruta a largo plazo.",
        },
      ],
    },
    faq: {
      title: "Preguntas frecuentes",
      items: [
        {
          q: "¿Qué pasa con la seguridad de nuestros datos si tercerizamos la TI?",
          a: "Aplicamos protocolos de ciberseguridad integral desde el día uno: control de accesos, monitoreo continuo y buenas prácticas del sector, para que tercerizar no signifique perder control.",
        },
        {
          q: "¿Cómo es la transición desde nuestro proveedor actual?",
          a: "Empezamos con un diagnóstico de tu infraestructura y procesos actuales, definimos un plan de migración por etapas y acompañamos la transición para minimizar cualquier interrupción del servicio.",
        },
        {
          q: "¿Qué pasa si necesitamos escalar o reducir servicios?",
          a: "Nuestros planes están pensados para ajustarse a tu operación: podés sumar o quitar líneas de servicio sin renegociar todo el contrato desde cero.",
        },
        {
          q: "¿Tienen costos ocultos?",
          a: "No. Trabajamos con propuestas claras por alcance de servicio; cualquier trabajo adicional se cotiza antes de ejecutarse.",
        },
        {
          q: "¿Con qué tipo de empresas trabajan?",
          a: "Trabajamos con empresas que necesitan un socio tecnológico integral, sin importar si ya tienen un equipo de TI interno o están tercerizando por primera vez.",
        },
        {
          q: "¿Cómo empezamos?",
          a: "Completá el formulario de contacto y coordinamos una primera reunión para entender tu situación actual y armar una propuesta a medida.",
        },
      ],
    },
    contact: {
      title: "Solicitá tu propuesta",
      subtitle:
        "Contanos sobre tu empresa y te contactamos para coordinar una primera reunión, sin costo.",
      form: {
        name: "Nombre",
        namePlaceholder: "Tu nombre completo",
        company: "Empresa",
        companyPlaceholder: "Nombre de tu empresa",
        email: "Email",
        emailPlaceholder: "tu@empresa.com",
        message: "Mensaje",
        messagePlaceholder: "Contanos brevemente qué estás buscando",
        submit: "Enviar mensaje",
      },
      direct: "También podés escribirnos directamente a",
    },
    footer: {
      tagline: "Soporte y Consultoría TI",
      address: "Zonamérica · Ruta 8, Km 17.500 · Edificio @3-101 · Montevideo, Uruguay",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      about: "About us",
      services: "Services",
      faq: "FAQ",
      contact: "Contact",
      cta: "Request a proposal",
    },
    hero: {
      eyebrow: "IT Support & Consulting",
      place: "Zonamérica, Montevideo — Uruguay · Mexico",
      badge: "Your IT General Contractor",
      headlineTop: "One partner for",
      headlineBottom: "all your",
      headlineAccent: "technology",
      headline: "Your IT General Contractor: one partner for all your technology.",
      subheadline:
        "Mi Cloud centralizes your company's infrastructure, cybersecurity, development and support under a single team, so you stop coordinating vendors and start moving forward.",
      subheadlineShort:
        "Infrastructure, cybersecurity, development and support under one team.",
      cta: "Request a proposal",
      ctaSecondary: "See our services",
      trusted: "Industries that trust Mi Cloud with their technology",
      cards: [
        {
          title: "Services",
          body: "Eight IT service lines to run, protect and grow your business.",
          cta: "Explore services",
          href: "#servicios",
        },
        {
          title: "Why Mi Cloud",
          body: "One senior point of contact instead of a list of disconnected vendors.",
          cta: "See our approach",
          href: "#quienes-somos",
        },
        {
          title: "Support",
          body: "Help desk and technical support with a human team available 24/7.",
          cta: "Talk to us",
          href: "#contacto",
        },
      ],
    },
    social: {
      title: "Industries that already trust Mi Cloud with their technology",
      note: "Reserved space for real client logos and figures.",
      industries: [
        "Retail",
        "Manufacturing",
        "Financial services",
        "Healthcare",
        "Logistics",
      ],
      stats: [
        { value: "+8", label: "IT service lines" },
        { value: "1", label: "team, every front" },
        { value: "24/7", label: "support available" },
      ],
    },
    showcase: {
      titleTop: "Your entire IT operation,",
      titleAccent: "under control",
    },
    about: {
      title: "About us",
      body: "We're Mi Cloud, an IT consultancy that acts as your company's technology General Contractor: we coordinate infrastructure, security, development and support under a single relationship, with a team that understands your business as well as your stack.",
    },
    why: {
      title: "Why Mi Cloud",
      subtitle: "We don't add another vendor to your list — we replace that list with one partner.",
      items: [
        {
          title: "One point of contact",
          body: "We coordinate every IT front under a single team, so you stop juggling multiple vendors.",
        },
        {
          title: "Senior, multidisciplinary team",
          body: "Specialists in infrastructure, security, data and development working in coordination.",
        },
        {
          title: "Scales with your business",
          body: "We add or adjust services as your company grows, without renegotiating everything from scratch.",
        },
        {
          title: "Strategic vision, not just support",
          body: "We treat technology as a business lever, with a clear roadmap and goals.",
        },
      ],
    },
    services: {
      title: "Services",
      label: "Scope of services",
      subtitle: "Eight service lines, one single provider.",
      cta: "Ask about this service",
      items: [
        {
          name: "Digital Transformation",
          body: "We modernize your processes and systems so your company operates with the agility of a digital native.",
        },
        {
          name: "Infrastructure & Platform Management",
          body: "We manage your infrastructure and cloud platforms so you never have to think about them.",
        },
        {
          name: "Comprehensive Cybersecurity",
          body: "We protect your data and systems end-to-end, from prevention to incident response.",
        },
        {
          name: "AI & Advanced Analytics",
          body: "We turn your data into decisions, applying artificial intelligence to real business problems.",
        },
        {
          name: "Applications & Development",
          body: "We design and build custom software that adapts to your operation, not the other way around.",
        },
        {
          name: "Consulting & Continuous Improvement",
          body: "We continuously audit and optimize your IT processes, focused on measurable results.",
        },
        {
          name: "Technical Support & Help Desk",
          body: "We resolve your users' issues fast, with a human team available whenever you need them.",
        },
        {
          name: "IT Governance & Strategy",
          body: "We align technology with your business goals, with clear policies and a long-term roadmap.",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        {
          q: "What happens to our data security if we outsource IT?",
          a: "We apply comprehensive cybersecurity protocols from day one: access control, continuous monitoring and industry best practices, so outsourcing never means losing control.",
        },
        {
          q: "What does the transition from our current provider look like?",
          a: "We start with a diagnostic of your current infrastructure and processes, define a phased migration plan, and support the transition to minimize any service disruption.",
        },
        {
          q: "What if we need to scale services up or down?",
          a: "Our plans are designed to adapt to your operation: you can add or remove service lines without renegotiating the entire contract from scratch.",
        },
        {
          q: "Are there hidden costs?",
          a: "No. We work with clear proposals scoped by service; any additional work is quoted before it's executed.",
        },
        {
          q: "What kind of companies do you work with?",
          a: "We work with companies that need a comprehensive technology partner, whether they already have an internal IT team or are outsourcing for the first time.",
        },
        {
          q: "How do we get started?",
          a: "Fill out the contact form and we'll set up an initial meeting to understand your current situation and put together a tailored proposal.",
        },
      ],
    },
    contact: {
      title: "Request your proposal",
      subtitle:
        "Tell us about your company and we'll reach out to set up a first, no-cost meeting.",
      form: {
        name: "Name",
        namePlaceholder: "Your full name",
        company: "Company",
        companyPlaceholder: "Your company name",
        email: "Email",
        emailPlaceholder: "you@company.com",
        message: "Message",
        messagePlaceholder: "Briefly tell us what you're looking for",
        submit: "Send message",
      },
      direct: "You can also reach us directly at",
    },
    footer: {
      tagline: "IT Support & Consulting",
      address: "Zonamérica · Ruta 8, Km 17.500 · Building @3-101 · Montevideo, Uruguay",
      rights: "All rights reserved.",
    },
  },
};

export type Dictionary = typeof dictionaries.es;
