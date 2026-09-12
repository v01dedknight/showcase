import { useEffect, useRef, useState, type MouseEvent } from "react";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiArrowUpRight,
  FiCode,
  FiDatabase,
  FiGithub,
  FiLayers,
  FiMail,
  FiMenu,
  FiShield,
  FiX,
  FiZap,
} from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const NAV = [
  ["work", "Работы"],
  ["expertise", "Подход"],
  ["about", "Обо мне"],
  ["contact", "Контакты"],
] as const;

const stack = [
  "React / TypeScript",
  "Python / FastAPI",
  "PostgreSQL",
  "Docker",
  "CI/CD",
  "Linux",
  "Product UX",
  "API integrations",
];

const capabilities = [
  {
    icon: FiLayers,
    number: "01",
    title: "Product frontend",
    text: "Не просто верстаю экраны. Собираю интерфейс как систему: структура, состояния, адаптивность, доступность и ощущение продукта в деталях.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
  },
  {
    icon: FiDatabase,
    number: "02",
    title: "Backend & data",
    text: "Проектирую API, работу с данными и прикладную бизнес-логику. Думаю не страницами, а потоком данных и поведением всей системы.",
    tags: ["FastAPI", "PostgreSQL", "REST", "Migrations"],
  },
  {
    icon: FiShield,
    number: "03",
    title: "Production engineering",
    text: "Сборка, контейнеризация, проверки, резервные копии и безопасный rollout — часть результата, а не задача «на потом».",
    tags: ["Docker", "Linux", "CI/CD", "Observability"],
  },
];

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="v01d — на главную">
        <span className="brand-mark">V/</span>
        <span className="brand-text">v01d.dev</span>
      </a>

      <nav className="desktop-nav" aria-label="Основная навигация">
        {NAV.map(([id, label]) => (
          <button key={id} onClick={() => go(id)}>{label}</button>
        ))}
      </nav>

      <a className="header-cta" href="https://t.me/v01dedknight" target="_blank" rel="noreferrer">
        Обсудить проект <FiArrowUpRight />
      </a>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Открыть меню" aria-expanded={open}>
        {open ? <FiX /> : <FiMenu />}
      </button>

      {open && (
        <div className="mobile-nav">
          {NAV.map(([id, label]) => (
            <button key={id} onClick={() => go(id)}>{label}<FiArrowRight /></button>
          ))}
          <a href="https://t.me/v01dedknight" target="_blank" rel="noreferrer">Обсудить проект <FiArrowUpRight /></a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="top" className="hero" ref={ref} onMouseMove={handleMove}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-a" aria-hidden="true" />
      <div className="hero-orb hero-orb-b" aria-hidden="true" />

      <div className="hero-content">
        <div className="eyebrow hero-eyebrow">
          <span className="status-dot" />
          Independent developer · product engineer
        </div>

        <h1>
          Создаю цифровые продукты,
          <span>которые выглядят и работают на уровне.</span>
        </h1>

        <div className="hero-bottom">
          <p>
            От интерфейса до production-инфраструктуры. Проектирую, разрабатываю и довожу продукт до состояния,
            которое не стыдно показывать пользователям, команде и бизнесу.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
              Смотреть работы <FiArrowDownRight />
            </button>
            <a className="button button-ghost" href="https://github.com/v01dedknight" target="_blank" rel="noreferrer">
              GitHub <FiGithub />
            </a>
          </div>
        </div>

        <div className="hero-meta">
          <div><span>Фокус</span><strong>Web products / systems</strong></div>
          <div><span>Работаю с</span><strong>Frontend · Backend · Infra</strong></div>
          <div><span>Принцип</span><strong>Ship. Verify. Improve.</strong></div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section section-work">
      <div className="section-heading" data-reveal>
        <span className="section-index">01 / Selected work</span>
        <h2>Избранные работы.<br />Без лишнего шума — только то, что стоит показывать.</h2>
      </div>

      <div className="work-secondary" data-reveal>
        <div className="secondary-intro">
          <span>Selected projects</span>
          <h3>Коммерческая разработка и UI-практика</h3>
        </div>
        <a className="mini-project" href="https://rowelltz-arch.ru/" target="_blank" rel="noreferrer">
          <div className="mini-image"><img src={`${import.meta.env.BASE_URL}projects/p1.jpg`} alt="Сайт архитектурного бюро" /></div>
          <div className="mini-info"><span>Web / frontend</span><strong>Rowelltz Arch</strong><p>Адаптивный сайт архитектурного бюро с акцентом на визуальную подачу.</p></div>
          <FiArrowUpRight />
        </a>
        <a className="mini-project mini-project-code" href="https://github.com/v01dedknight/web-layout-basics" target="_blank" rel="noreferrer">
          <div className="mini-code"><FiCode /></div>
          <div className="mini-info"><span>Practice / experiments</span><strong>Web layout archive</strong><p>Эксперименты с интерфейсами, компонентами, адаптивностью и визуальными паттернами.</p></div>
          <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="section section-expertise">
      <div className="section-heading split-heading" data-reveal>
        <span className="section-index">02 / What I do</span>
        <div>
          <h2>Думаю продуктом.<br />Реализую системой.</h2>
          <p>Хорошая разработка начинается раньше кода и заканчивается позже deploy.</p>
        </div>
      </div>

      <div className="capability-grid">
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <article className="capability-card" key={item.number} data-reveal>
              <div className="capability-top"><span>{item.number}</span><Icon /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          );
        })}
      </div>

      <div className="stack-marquee" aria-label="Технологии">
        <div className="stack-track">
          {[...stack, ...stack].map((item, index) => <span key={`${item}-${index}`}>{item}<i>↗</i></span>)}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section section-about">
      <div className="about-grid">
        <div className="about-title" data-reveal>
          <span className="section-index">03 / About</span>
          <h2>Я не продаю<br />«просто сайт».</h2>
        </div>
        <div className="about-copy" data-reveal>
          <p className="about-lead">Мне важно, чтобы результат выдерживал не только первый взгляд, но и реальную эксплуатацию.</p>
          <p>
            Поэтому я разбираюсь глубже интерфейса: как устроены данные, где система сломается под нагрузкой,
            как её обновить без сюрпризов и что увидит человек в каждом состоянии продукта.
          </p>
          <p>
            Я ценю ясную архитектуру, контролируемую сложность и детали, которые создают ощущение качества —
            от hover-анимации до сценария восстановления после неудачного релиза.
          </p>
          <div className="about-principles">
            <div><span>01</span><strong>Сначала понять задачу</strong></div>
            <div><span>02</span><strong>Упростить до ясной системы</strong></div>
            <div><span>03</span><strong>Собрать и проверить</strong></div>
            <div><span>04</span><strong>Довести до production</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-main" data-reveal>
        <span className="section-index">04 / Contact</span>
        <h2>Есть задача,<br />которую стоит сделать <em>хорошо?</em></h2>
        <p>Опишите продукт, идею или проблему. Разберёмся, что действительно нужно сделать и как лучше к этому подойти.</p>
        <a className="contact-button" href="https://t.me/v01dedknight" target="_blank" rel="noreferrer">
          <span><FaTelegramPlane /> Написать в Telegram</span>
          <FiArrowUpRight />
        </a>
      </div>

      <div className="footer-row">
        <div className="footer-brand"><span className="brand-mark">V/</span><strong>v01d.dev</strong></div>
        <div className="footer-links">
          <a href="mailto:artur_freelance@mail.ru"><FiMail /> Email</a>
          <a href="https://github.com/v01dedknight" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
          <a href="https://kwork.ru/user/v01dedknight" target="_blank" rel="noreferrer"><FiZap /> Kwork</a>
        </div>
        <span className="copyright">© {year}</span>
      </div>
    </footer>
  );
}

function App() {
  useReveal();
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Work />
        <Expertise />
        <About />
      </main>
      <Contact />
    </div>
  );
}

export default App;
