import {
  Armchair,
  ArrowRight,
  BatteryCharging,
  Bell,
  Brain,
  CalendarBlank,
  CheckCircle,
  ClipboardText,
  EnvelopeSimple,
  GraduationCap,
  Heart,
  InstagramLogo,
  Leaf,
  LockKey,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkle,
  UserCircleCheck,
  UsersThree,
  VideoCamera,
  WhatsappLogo
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

const PROFESSIONAL_CONFIG = {
  professionalName: "Dra. Helena Vasconcelos",
  professionalTitle: "Psicóloga Clínica",
  crp: "CRP 04/00000",

  city: "Patrocínio",
  state: "MG",

  headline: "Cuidado psicológico com acolhimento, profundidade e uma experiência contemporânea.",

  subheadline:
    "Atendimento psicológico presencial em Patrocínio/MG e online, com escuta qualificada, sigilo e recursos modernos que tornam o processo mais fluido, organizado e acolhedor.",

  phone: "5534999999999",
  whatsappMessage:
    "Olá, gostaria de saber mais sobre o atendimento psicológico e verificar disponibilidade de horários.",

  instagramUrl: "https://instagram.com/seuinstagram",
  instagramHandle: "@seuinstagram",

  email: "contato@drahelenavasconcelos.com.br",

  address: {
    street: "Rua Fictícia",
    number: "123",
    complement: "Sala 401",
    neighborhood: "Centro",
    city: "Patrocínio",
    state: "MG",
    zipCode: "38740-000",
    googleMapsUrl: "https://maps.google.com"
  },

  serviceMode: ["Presencial", "Online"],

  approach: "Terapia Cognitivo-Comportamental com olhar integrativo",

  mainAudience: ["Adultos", "Adolescentes", "Mulheres"],

  profilePhotoUrl: "",

  specialties: [
    {
      title: "Ansiedade",
      description: "Estratégias para compreender e lidar melhor com a ansiedade no dia a dia.",
      icon: "brain"
    },
    {
      title: "Autoestima",
      description: "Fortalecimento da autoimagem, confiança e relação consigo.",
      icon: "mirror"
    },
    {
      title: "Relacionamentos",
      description: "Apoio para melhorar vínculos, comunicação e limites nas relações.",
      icon: "hearts"
    },
    {
      title: "Regulação emocional",
      description: "Desenvolvimento de recursos para lidar com emoções e desafios.",
      icon: "lotus"
    },
    {
      title: "Burnout",
      description: "Apoio para identificar, prevenir e manejar sobrecarga emocional.",
      icon: "battery"
    },
    {
      title: "Adultos e adolescentes",
      description: "Acolhimento especializado para diferentes fases e demandas da vida.",
      icon: "profile"
    }
  ],

  digitalFeatures: [
    {
      title: "Agenda online",
      description: "Agende, remaneje ou cancele quando precisar, com praticidade.",
      tag: ""
    },
    {
      title: "Teleatendimento seguro",
      description: "Videoconsultas com sigilo e ambiente confidencial.",
      tag: "Conexão segura"
    },
    {
      title: "Lembretes automatizados",
      description: "Notificações por WhatsApp e e-mail para não esquecer suas consultas.",
      tag: ""
    },
    {
      title: "Materiais de apoio",
      description: "Conteúdos complementares para apoiar sua reflexão entre sessões.",
      tag: "Exclusivo"
    },
    {
      title: "Formulário inicial inteligente",
      description: "Preencha antes da primeira sessão. Suas respostas chegam organizadas para que o atendimento já comece com foco.",
      tag: ""
    }
  ],

  testimonials: [
    {
      texto:
        "Aprendi a reconhecer os padrões que alimentavam minha ansiedade. Hoje consigo respirar antes de reagir — isso mudou completamente a minha rotina.",
      nome: "Mariana A.",
      contexto: "Paciente há 10 meses"
    },
    {
      texto:
        "A terapia me ajudou a entender o que eu precisava nas minhas relações. Finalmente consigo pedir o que preciso sem culpa.",
      nome: "Fernanda O.",
      contexto: "Paciente há 1 ano e 2 meses"
    },
    {
      texto:
        "Fiz todas as sessões online e nunca senti que estava em desvantagem. O acolhimento foi real e constante desde o primeiro contato.",
      nome: "Débora C.",
      contexto: "Atendimento online"
    }
  ],

  ctaPrimary: "Agendar consulta",
  ctaSecondary: "Falar no WhatsApp",

  seoTitle: "Psicóloga em Patrocínio/MG | Atendimento psicológico",
  seoDescription:
    "Atendimento psicológico presencial em Patrocínio/MG e online, com escuta qualificada, sigilo e cuidado profissional.",

  developerCredit: {
    label: "Desenvolvido por dev.RR",
    url: "https://devrigoni.com.br"
  }
};

function getFullAddress(config) {
  const address = config.address;

  return `${address.street}, ${address.number}${address.complement ? " - " + address.complement : ""} - ${address.neighborhood}, ${address.city}/${address.state} - CEP ${address.zipCode}`;
}

function getWhatsAppUrl(config, customMessage) {
  const phone = config.phone.replace(/\D/g, "");
  const message = encodeURIComponent(customMessage || config.whatsappMessage);

  return `https://wa.me/${phone}?text=${message}`;
}

function getInstagramLabel(config) {
  return config.instagramHandle || "Instagram";
}

function getFallbackPhoto(config) {
  if (config.profilePhotoUrl && config.profilePhotoUrl.trim() !== "") {
    return config.profilePhotoUrl;
  }

  return "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=90";
}

function getEmailAddress(config) {
  const match = String(config.email).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  return match ? match[0] : String(config.email);
}

function formatPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 13) {
    return `+${digits.slice(0, 2)} (${digits.slice(2, 4)}) ${digits.slice(4, 9)}-${digits.slice(9)}`;
  }

  return `+${digits}`;
}

const iconProps = {
  size: 24,
  weight: "duotone",
  "aria-hidden": true
};

const specialtyIcons = {
  brain: Brain,
  mirror: Sparkle,
  hearts: Heart,
  lotus: Leaf,
  battery: BatteryCharging,
  profile: UserCircleCheck
};

const digitalIcons = [CalendarBlank, VideoCamera, Bell, Sparkle, ClipboardText];

function useSeo(config) {
  useEffect(() => {
    document.title = config.seoTitle;
    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", config.seoDescription);
    document
      .querySelector("meta[property='og:title']")
      ?.setAttribute("content", config.seoTitle);
    document
      .querySelector("meta[property='og:description']")
      ?.setAttribute("content", config.seoDescription);

    if (config.profilePhotoUrl) {
      document
        .querySelector("meta[property='og:image']")
        ?.setAttribute("content", config.profilePhotoUrl);
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: config.professionalName,
      description: config.seoDescription,
      areaServed: `${config.city}/${config.state}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${config.address.street}, ${config.address.number}${config.address.complement ? " - " + config.address.complement : ""}`,
        addressLocality: config.address.city,
        addressRegion: config.address.state,
        postalCode: config.address.zipCode,
        addressCountry: "BR"
      },
      telephone: `+${config.phone.replace(/\D/g, "")}`,
      sameAs: [config.instagramUrl],
      url: window.location.href
    };

    let node = document.getElementById("structured-data");
    if (!node) {
      node = document.createElement("script");
      node.type = "application/ld+json";
      node.id = "structured-data";
      document.head.appendChild(node);
    }
    node.textContent = JSON.stringify(schema);
  }, [config]);
}

function MotionBlock({ children, className = "", delay = 0, as = "div" }) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Component>
  );
}

function Monogram() {
  return (
    <span className="monogram" aria-hidden="true">
      HV
    </span>
  );
}

function Button({ href, children, variant = "primary", className = "", icon: Icon }) {
  return (
    <a className={`btn btn-${variant} ${className}`} href={href} target="_blank" rel="noopener">
      {Icon ? <Icon {...iconProps} size={20} /> : null}
      <span>{children}</span>
    </a>
  );
}

function Navigation({ config }) {
  const [open, setOpen] = useState(false);
  const whatsapp = getWhatsAppUrl(config);

  useEffect(() => {
    const onKeyDown = event => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  const links = [
    ["#inicio", "Início"],
    ["#sobre", "Sobre"],
    ["#abordagem", "Abordagem"],
    ["#areas", "Áreas de atuação"],
    ["#jornada", "Como funciona"],
    ["#recursos", "Recursos"],
    ["#contato", "Contato"]
  ];

  return (
    <header className="site-header">
      <div className="nav-shell">
        <a className="brand" href="#inicio" aria-label="Voltar ao início">
          <Monogram />
          <span>
            <strong>{config.professionalName}</strong>
            <small>{config.professionalTitle}</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {links.map(([href, label]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <Button href={whatsapp} className="nav-cta" icon={CalendarBlank}>
          {config.ctaPrimary}
        </Button>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(value => !value)}
        >
          <span />
          <span />
          <span />
          <b className="sr-only">Menu</b>
        </button>
      </div>

      <nav id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        {links.map(([href, label]) => (
          <a href={href} key={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a href={whatsapp} target="_blank" rel="noopener" onClick={() => setOpen(false)}>
          Agendar consulta
        </a>
      </nav>
    </header>
  );
}

function HeroHeadline({ text }) {
  const target = "contemporânea";
  const index = text.toLowerCase().indexOf(target);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <span>{text.slice(index, index + target.length)}</span>
      {text.slice(index + target.length)}
    </>
  );
}

function Hero({ config, photo }) {
  const whatsapp = getWhatsAppUrl(config);

  return (
    <section className="hero" id="inicio">
      <div className="hero-veil" />
      <div className="hero-shell">
        <MotionBlock className="hero-copy">
          <p className="eyebrow">Psicologia com propósito</p>
          <h1>
            <HeroHeadline text={config.headline} />
          </h1>
          <p className="hero-sub">{config.subheadline}</p>
          <div className="hero-actions">
            <Button href={whatsapp} icon={CalendarBlank}>
              {config.ctaPrimary}
            </Button>
            <Button href={whatsapp} variant="ghost" icon={WhatsappLogo}>
              {config.ctaSecondary}
            </Button>
          </div>
          <div className="hero-proof" aria-label="Diferenciais do atendimento">
            {[
              [ShieldCheck, "Sigilo absoluto e ética profissional"],
              [Sparkle, "Atendimento humanizado"],
              [LockKey, "Ambiente seguro e acolhedor"],
              [UsersThree, `${config.serviceMode.join(" e ")} em ${config.city}/${config.state}`]
            ].map(([Icon, label]) => (
              <span key={label}>
                <Icon {...iconProps} size={22} />
                {label}
              </span>
            ))}
          </div>
        </MotionBlock>

        <div className="hero-media">
          <motion.div
            className="portrait-window"
            initial={{ opacity: 0, x: 42, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={photo}
              alt={`${config.professionalName}, ${config.professionalTitle}`}
              loading="eager"
              fetchPriority="high"
            />
          </motion.div>
          <motion.div
            className="signal-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <CheckCircle {...iconProps} size={20} />
            <strong>Jornada organizada</strong>
            <span>Do primeiro contato ao acompanhamento, cada etapa fica clara.</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    [Armchair, "Atendimento presencial e online", "Mais flexibilidade para você"],
    [ShieldCheck, "Sigilo absoluto e ética profissional", "Sua privacidade é prioridade"],
    [Heart, "Acolhimento e escuta empática", "Um espaço seguro para ser você"],
    [UserCircleCheck, "Abordagem individualizada", "Cada história é única, cada cuidado também"],
    [CalendarBlank, "Agenda online prática e segura", "Tecnologia a serviço do seu bem-estar"]
  ];

  return (
    <section className="trust-strip" aria-label="Valores do atendimento">
      <MotionBlock className="trust-shell">
        {items.map(([Icon, title, text]) => (
          <article key={title} className="trust-item">
            <span>
              <Icon {...iconProps} size={28} />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </MotionBlock>
    </section>
  );
}

function SectionTitle({ children, text }) {
  return (
    <MotionBlock className="section-title">
      <h2>{children}</h2>
      {text ? <p>{text}</p> : null}
    </MotionBlock>
  );
}

function Specialties({ config }) {
  return (
    <section className="section specialties" id="areas">
      <div className="content-shell">
        <SectionTitle>Áreas de atuação</SectionTitle>
        <div className="specialty-grid">
          {config.specialties.map((item, index) => {
            const Icon = specialtyIcons[item.icon] || Sparkle;
            const message = `Olá, gostaria de saber mais sobre atendimento relacionado a ${item.title}.`;
            return (
              <MotionBlock as="article" className="specialty-card" delay={index * 0.04} key={item.title}>
                <div className="specialty-card-header">
                  <Icon {...iconProps} size={30} />
                  <span className="specialty-num">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={getWhatsAppUrl(config, message)} target="_blank" rel="noopener">
                  Saiba mais <ArrowRight {...iconProps} size={16} />
                </a>
              </MotionBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    ["Agendamento", "Escolha o melhor horário na agenda online de forma simples e segura."],
    ["Primeiro contato", "Preencha o formulário inicial para que eu conheça melhor a sua demanda."],
    ["Consulta", "Sessões acolhedoras e personalizadas, presenciais ou online, com total sigilo."],
    ["Plano terapêutico", "Construímos juntos um caminho com objetivos claros e alcançáveis."],
    ["Acompanhamento", "Evolução contínua com suporte, ajustes e recursos que fazem diferença."]
  ];

  return (
    <section className="section journey" id="jornada">
      <div className="content-shell">
        <SectionTitle>Como funciona a sua jornada</SectionTitle>
        <div className="journey-line">
          {steps.map(([title, text], index) => (
            <MotionBlock as="article" className="journey-node" delay={index * 0.05} key={title}>
              <div>
                <span className="journey-num">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </MotionBlock>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechSection({ config }) {
  return (
    <section className="section tech" id="recursos">
      <div className="content-shell">
        <SectionTitle text="Uma experiência digital discreta, útil e humana para deixar o processo mais claro desde o primeiro contato.">
          Tecnologia a serviço do seu bem-estar
        </SectionTitle>
        <div className="tech-grid">
          {config.digitalFeatures.map((item, index) => {
            const Icon = digitalIcons[index] || Sparkle;
            return (
              <MotionBlock as="article" className="tech-card" delay={index * 0.05} key={item.title}>
                <span className="tech-icon">
                  <Icon {...iconProps} size={32} />
                </span>
                {item.tag ? <small>{item.tag}</small> : null}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </MotionBlock>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function About({ config, photo }) {
  return (
    <section className="section about-section" id="sobre">
      <div className="content-shell">
        <MotionBlock className="about-card">
          <div className="about-photo">
            <img src={photo} alt={`Retrato de ${config.professionalName}`} loading="lazy" />
          </div>
          <div className="about-copy">
            <p className="about-label">Sobre a psicóloga</p>
            <h2>{config.professionalName}</h2>
            <p className="about-meta">
              {config.professionalTitle} • {config.crp}
            </p>
            <p>
              Acredito na psicologia como um encontro verdadeiro, capaz de promover transformações profundas e
              sustentáveis. Meu trabalho une acolhimento, ciência e tecnologia para oferecer uma experiência terapêutica
              moderna, humana e eficaz.
            </p>
            <div className="about-values">
              {[
                [GraduationCap, "Formação sólida e atualizada"],
                [Sparkle, "Ética, empatia e respeito"],
                [CheckCircle, "Abordagem baseada em evidências"]
              ].map(([Icon, label]) => (
                <span key={label}>
                  <Icon {...iconProps} size={22} />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <aside className="approach-card" id="abordagem">
            <h3>Abordagem</h3>
            <p>{config.approach}</p>
            <i />
            <h3>
              {config.city}/{config.state}
            </h3>
            <p>Atendimento presencial em espaço acolhedor e online para todo o Brasil.</p>
          </aside>
        </MotionBlock>
      </div>
    </section>
  );
}

function Testimonials({ config }) {
  return (
    <section className="section testimonials" aria-label="Depoimentos de pacientes">
      <div className="content-shell">
        <SectionTitle>Relatos reais</SectionTitle>
        <div className="testimonial-grid">
          {config.testimonials.map((item, index) => (
            <MotionBlock as="article" className="testimonial-card" delay={index * 0.08} key={item.nome}>
              <blockquote>
                <p>{item.texto}</p>
              </blockquote>
              <footer>
                <strong>{item.nome}</strong>
                <span>{item.contexto}</span>
              </footer>
            </MotionBlock>
          ))}
        </div>
        <p className="testimonials-note">* Nomes alterados para preservar o sigilo profissional.</p>
      </div>
    </section>
  );
}

function FinalCta({ config }) {
  return (
    <section className="section final-cta">
      <div className="content-shell">
        <MotionBlock className="cta-panel">
          <div>
            <h2>Vamos conversar?</h2>
            <p>Dê o primeiro passo para uma vida mais leve, com mais sentido e equilíbrio.</p>
          </div>
          <div>
            <Button href={getWhatsAppUrl(config)} icon={CalendarBlank}>
              {config.ctaPrimary}
            </Button>
            <small>Atendimento {config.serviceMode.join(" e ").toLowerCase()}</small>
          </div>
        </MotionBlock>
      </div>
    </section>
  );
}

function Footer({ config }) {
  const email = getEmailAddress(config);

  return (
    <footer className="footer" id="contato">
      <div className="content-shell footer-grid">
        <div>
          <a className="brand footer-brand" href="#inicio">
            <Monogram />
            <span>
              <strong>{config.professionalName}</strong>
              <small>{config.professionalTitle}</small>
            </span>
          </a>
          <p>Cuidado que transforma. Conexão que acolhe.</p>
        </div>

        <div>
          <h3>Contato</h3>
          <ul>
            <li>
              <a href={getWhatsAppUrl(config)} target="_blank" rel="noopener">
                <Phone {...iconProps} size={18} /> {formatPhone(config.phone)}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`}>
                <EnvelopeSimple {...iconProps} size={18} /> {email}
              </a>
            </li>
            <li>
              <a href={config.instagramUrl} target="_blank" rel="noopener">
                <InstagramLogo {...iconProps} size={18} /> {getInstagramLabel(config)}
              </a>
            </li>
            <li>
              <a href={getWhatsAppUrl(config)} target="_blank" rel="noopener">
                <WhatsappLogo {...iconProps} size={18} /> WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Endereço</h3>
          <address>
            <MapPin {...iconProps} size={18} /> {getFullAddress(config)}
          </address>
          <a className="map-link" href={config.address.googleMapsUrl} target="_blank" rel="noopener">
            Ver no mapa
          </a>
        </div>

        <div>
          <h3>Navegação</h3>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#abordagem">Abordagem</a>
            </li>
            <li>
              <a href="#areas">Áreas de atuação</a>
            </li>
            <li>
              <a href="#jornada">Como funciona</a>
            </li>
            <li>
              <a href="#recursos">Recursos</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Siga no Instagram</h3>
          <a className="insta-follow" href={config.instagramUrl} target="_blank" rel="noopener">
            <InstagramLogo size={20} weight="duotone" aria-hidden="true" />
            <span>{config.instagramHandle}</span>
          </a>
          <p className="insta-note">Conteúdo sobre saúde mental e bem-estar</p>
        </div>
      </div>

      <div className="content-shell footer-bottom">
        <span>
          © {new Date().getFullYear()} {config.professionalName}. Todos os direitos reservados.
        </span>
        <a href={config.developerCredit.url} target="_blank" rel="noopener">
          {config.developerCredit.label}
        </a>
      </div>
    </footer>
  );
}

export default function App() {
  const config = PROFESSIONAL_CONFIG;
  const photo = getFallbackPhoto(config);
  useSeo(config);

  return (
    <>
      <Navigation config={config} />
      <main>
        <Hero config={config} photo={photo} />
        <TrustStrip />
        <Specialties config={config} />
        <Journey />
        <TechSection config={config} />
        <About config={config} photo={photo} />
        <Testimonials config={config} />
        <FinalCta config={config} />
      </main>
      <Footer config={config} />
      <a className="floating-wa" href={getWhatsAppUrl(config)} target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
        <WhatsappLogo {...iconProps} size={27} />
      </a>
    </>
  );
}
