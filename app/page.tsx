const links = {
  hero: "https://wa.me/558781105983?text=Vim%20pelo%20site%20da%20Dra.%20Laise%20Oliveira%20e%20quero%20agendar%20minha%20avalia%C3%A7%C3%A3o.&utm_source=site&utm_medium=botao&utm_campaign=hero",
  method: "https://wa.me/558781105983?text=Vim%20pelo%20site%20e%20quero%20conhecer%20mais%20sobre%20o%20M%C3%A9todo%20Oliveira.%20Gostaria%20de%20uma%20avalia%C3%A7%C3%A3o.&utm_source=site&utm_medium=botao&utm_campaign=metodo_oliveira",
  services: "https://wa.me/558781105983?text=Vim%20pelo%20site%20e%20quero%20saber%20qual%20tratamento%20%C3%A9%20ideal%20para%20mim.%20Pode%20me%20ajudar%3F&utm_source=site&utm_medium=botao&utm_campaign=servicos",
  results: "https://wa.me/558781105983?text=Vim%20pelo%20site%20e%20gostei%20dos%20resultados.%20Quero%20saber%20como%20posso%20iniciar%20minha%20avalia%C3%A7%C3%A3o.&utm_source=site&utm_medium=botao&utm_campaign=resultados",
  final: "https://wa.me/558781105983?text=Vim%20pelo%20site%20da%20Dra.%20Laise%20Oliveira%20e%20quero%20agendar%20meu%20atendimento.&utm_source=site&utm_medium=botao&utm_campaign=contato_final",
  phone: "tel:+558738627284",
  instagram: "https://instagram.com/dra.laiseoliveira",
  map: "https://www.google.com/maps/search/?api=1&query=R.%20Jos%C3%A9%20Rabelo%20Padilha%2C%201174%20-%20Centro%2C%20Petrolina%20-%20PE%2C%2056302-090",
};

const procedures = [
  { number: "01", title: "Harmonização facial", text: "Planejamento completo para equilibrar proporções e valorizar seus traços com naturalidade." },
  { number: "02", title: "Toxina botulínica", text: "Suavização estratégica das linhas de expressão, preservando leveza e movimento." },
  { number: "03", title: "Preenchimento facial", text: "Reposição de volume e definição de pontos faciais com técnica e precisão." },
  { number: "04", title: "Rejuvenescimento", text: "Bioestimuladores e protocolos avançados para firmeza, viço e qualidade da pele." },
  { number: "05", title: "Skincare e limpeza", text: "Cuidados personalizados para uma pele saudável, equilibrada e luminosa." },
  { number: "06", title: "Tratamentos capilares", text: "Protocolos para couro cabeludo e fios, definidos após uma avaliação individual." },
];

const results = [
  { src: "/resultado-01.png", alt: "Resultado real de tratamento facial — antes e depois" },
  { src: "/resultado-02.png", alt: "Resultado real de harmonização facial — antes e depois" },
  { src: "/resultado-03.png", alt: "Resultado real de tratamento estético — antes e depois" },
  { src: "/resultado-04.png", alt: "Resultado real de rejuvenescimento facial — antes e depois" },
  { src: "/resultado-05.png", alt: "Resultado real de harmonização — antes e depois" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "Dra. Laise Oliveira",
  image: "/dra-laise-hero.png",
  telephone: "+55 87 3862-7284",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. José Rabelo Padilha, 1174 - Centro",
    addressLocality: "Petrolina",
    addressRegion: "PE",
    postalCode: "56302-090",
    addressCountry: "BR",
  },
  sameAs: [links.instagram],
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Brand() {
  return (
    <span className="brand-lockup">
      <span>Dra.</span>
      <strong>Laise Oliveira</strong>
      <small>Estética avançada</small>
    </span>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="top-note">Atendimento presencial com hora marcada em Petrolina — PE</div>
        <div className="nav-shell">
          <a className="brand" href="#inicio" aria-label="Dra. Laise Oliveira — início"><Brand /></a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">Dra. Laise</a>
            <a href="#metodo">Método Oliveira</a>
            <a href="#procedimentos">Procedimentos</a>
            <a href="#resultados">Resultados</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="nav-cta" href={links.hero} target="_blank" rel="noopener noreferrer" data-track="click_whatsapp_hero">
            Agendar avaliação <Arrow />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Abrir menu"><i /><i /><i /></summary>
            <nav>
              <a href="#sobre">Dra. Laise</a>
              <a href="#metodo">Método Oliveira</a>
              <a href="#procedimentos">Procedimentos</a>
              <a href="#resultados">Resultados</a>
              <a href="#contato">Contato</a>
            </nav>
          </details>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <img className="hero-image" src="/dra-laise-hero.png" alt="" aria-hidden="true" width="289" height="388" />
          <div className="hero-overlay" />
          <div className="orbit" aria-hidden="true" />
          <div className="container hero-content">
            <p className="eyebrow eyebrow-light">Método Oliveira · Petrolina</p>
            <h1>Sua beleza, elevada com <em>naturalidade.</em></h1>
            <p className="hero-copy">Harmonização facial com técnica, propósito e 10 anos de experiência para valorizar o que já é único em você.</p>
            <div className="hero-actions">
              <a className="button button-gold" href={links.hero} target="_blank" rel="noopener noreferrer" data-track="click_whatsapp_hero">
                Agendar minha avaliação <Arrow />
              </a>
              <a className="text-link text-link-light" href="#metodo">Conhecer o método <span aria-hidden="true">↓</span></a>
            </div>
            <p className="microcopy microcopy-light">Atendimento individual e presencial.</p>
            <div className="hero-proof" aria-label="Diferenciais principais">
              <div><strong>10 anos</strong><span>de experiência</span></div>
              <div><strong>Método próprio</strong><span>planejamento individual</span></div>
              <div><strong>Naturalidade</strong><span>resultados sem excessos</span></div>
            </div>
          </div>
        </section>

        <section className="section about" id="sobre">
          <div className="container about-grid">
            <figure className="portrait reveal">
              <img src="/dra-laise-marrom.png" alt="Dra. Laise Oliveira" width="293" height="391" loading="lazy" />
              <figcaption><strong>10 anos</strong><span>transformando histórias</span></figcaption>
            </figure>
            <div className="about-copy reveal">
              <p className="eyebrow">Autoridade com proximidade</p>
              <h2>Uma profissional que cuida da sua imagem com <em>propósito.</em></h2>
              <p className="lead">Dra. Laise Oliveira construiu sua trajetória unindo experiência, olhar clínico e uma busca constante por resultados elegantes.</p>
              <p>Seu atendimento começa pela escuta. Cada indicação considera seus traços, objetivos e momento, para que a estética valorize sua identidade — nunca a apague.</p>
              <a className="text-link" href={links.instagram} target="_blank" rel="noopener noreferrer">Conhecer a Dra. Laise no Instagram <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="method" id="metodo">
          <img className="method-image" src="/dra-laise-lifestyle.png" alt="" aria-hidden="true" width="288" height="389" loading="lazy" />
          <div className="method-overlay" />
          <div className="container method-content">
            <div className="section-heading section-heading-light reveal">
              <div>
                <p className="eyebrow eyebrow-light">Assinatura de cuidado</p>
                <h2>O Método <em>Oliveira.</em></h2>
              </div>
              <p>Uma abordagem desenvolvida ao longo de 10 anos para entregar harmonia, segurança e naturalidade em cada detalhe.</p>
            </div>
            <div className="method-grid">
              <article className="reveal"><span>01</span><h3>Leitura individual</h3><p>Análise cuidadosa do rosto, das proporções e do que você deseja expressar.</p></article>
              <article className="reveal"><span>02</span><h3>Plano preciso</h3><p>Escolhas personalizadas, sem protocolos prontos ou intervenções desnecessárias.</p></article>
              <article className="reveal"><span>03</span><h3>Resultado natural</h3><p>Transformações que preservam sua essência e elevam sua autoestima.</p></article>
            </div>
            <a className="button button-gold reveal" href={links.method} target="_blank" rel="noopener noreferrer" data-track="click_whatsapp_metodo">
              Conhecer o Método Oliveira <Arrow />
            </a>
          </div>
        </section>

        <section className="section procedures" id="procedimentos">
          <div className="container">
            <div className="section-heading reveal">
              <div><p className="eyebrow">Procedimentos e soluções</p><h2>Cuidado certo para cada <em>objetivo.</em></h2></div>
              <p>A indicação acontece somente após avaliação. Mais que escolher um procedimento, você entende o que realmente faz sentido para você.</p>
            </div>
            <div className="procedure-grid">
              {procedures.map((item) => (
                <article className="procedure-card reveal" key={item.number}>
                  <span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p>
                </article>
              ))}
            </div>
            <div className="section-cta reveal">
              <a className="button button-dark" href={links.services} target="_blank" rel="noopener noreferrer" data-track="click_whatsapp_servicos">
                Descobrir meu tratamento ideal <Arrow />
              </a>
              <span>Conte seu objetivo e receba uma orientação inicial.</span>
            </div>
          </div>
        </section>

        <section className="section results" id="resultados">
          <div className="container">
            <div className="section-heading reveal">
              <div><p className="eyebrow">Resultados reais</p><h2>Transformações que preservam a <em>identidade.</em></h2></div>
              <p>Casos reais da clínica, apresentados para demonstrar equilíbrio, técnica e respeito aos traços de cada pessoa.</p>
            </div>
            <div className="results-grid">
              {results.map((item, index) => (
                <figure className={`result-card result-${index + 1} reveal`} key={item.src}>
                  <img src={item.src} alt={item.alt} width="294" height="393" loading="lazy" />
                  <figcaption><span>Antes</span><span>Depois</span></figcaption>
                </figure>
              ))}
            </div>
            <p className="result-note">Imagens de pacientes autorizadas. Os resultados variam de acordo com as características e respostas individuais.</p>
            <div className="section-cta reveal">
              <a className="button button-gold" href={links.results} target="_blank" rel="noopener noreferrer" data-track="click_whatsapp_resultados">
                Quero um resultado natural <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section className="section experience" id="experiencia">
          <div className="container experience-grid">
            <div className="experience-feature reveal">
              <span className="quote-mark">“</span>
              <h2>Mais que um procedimento. Uma experiência de cuidado.</h2>
              <p>Segurança, escuta e clareza para que você participe de cada decisão.</p>
            </div>
            <div className="experience-points">
              <article className="reveal"><span>01</span><div><h3>Avaliação personalizada</h3><p>Seu objetivo e sua individualidade orientam o plano.</p></div></article>
              <article className="reveal"><span>02</span><div><h3>Indicação com transparência</h3><p>Você entende cada escolha antes de seguir.</p></div></article>
              <article className="reveal"><span>03</span><div><h3>Acompanhamento próximo</h3><p>O cuidado continua durante a sua evolução.</p></div></article>
            </div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <p className="eyebrow eyebrow-light">Onde cuidar de você</p>
              <h2>Seu primeiro passo começa com uma <em>conversa.</em></h2>
              <p>Fale com a equipe, conte o que deseja cuidar e agende sua avaliação presencial.</p>
              <a className="button button-gold" href={links.final} target="_blank" rel="noopener noreferrer" data-track="click_whatsapp_footer">
                Falar no WhatsApp <Arrow />
              </a>
            </div>
            <div className="contact-card reveal">
              <div><span>Endereço</span><strong>R. José Rabelo Padilha, 1174<br />Centro, Petrolina — PE</strong></div>
              <div><span>Atendimento</span><strong>Presencial, com hora marcada<br />Atendimento até aproximadamente 20h</strong></div>
              <div><span>Contato</span><strong>(87) 3862-7284<br />@dra.laiseoliveira</strong></div>
              <div className="contact-links">
                <a href={links.map} target="_blank" rel="noopener noreferrer">Ver localização <Arrow /></a>
                <a href={links.phone}>Ligar para a clínica <Arrow /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-grid">
          <Brand />
          <p>Harmonização facial com naturalidade, técnica e propósito.</p>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">@dra.laiseoliveira <Arrow /></a>
        </div>
        <div className="container footer-bottom"><span>© 2026 Dra. Laise Oliveira</span><span>Petrolina — PE</span></div>
      </footer>

      <a className="whatsapp-float" href={links.final} target="_blank" rel="noopener noreferrer" aria-label="Agendar pelo WhatsApp" data-track="click_whatsapp_float">
        <span>WhatsApp</span><strong>Agendar</strong>
      </a>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('click', function (event) {
          var target = event.target.closest('[data-track]');
          if (!target) return;
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({ event: target.dataset.track });
        });
        if ('IntersectionObserver' in window) {
          var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
              }
            });
          }, { threshold: 0.12 });
          document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });
        } else {
          document.querySelectorAll('.reveal').forEach(function(el) { el.classList.add('is-visible'); });
        }
      ` }} />
    </>
  );
}
