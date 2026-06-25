const navItems = [
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Процесс", href: "#process" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Цены", href: "#pricing" },
  { label: "FAQ", href: "#faq" }
];

const problems = [
  "Нужно быстро запустить страницу под услугу без долгой разработки.",
  "Нет понятной упаковки предложения, и клиенту трудно сразу понять ценность.",
  "В сообщениях постоянно задают одни и те же вопросы вместо того, чтобы читать всё на сайте.",
  "Текущая страница устарела или бизнес до сих пор живёт только в соцсетях.",
  "Важно выглядеть надёжнее и аккуратнее в глазах новых клиентов.",
  "Нет желания разбираться в доменах, хостинге, формах и других технических деталях."
];

const solutions = [
  {
    title: "Структура сайта",
    text: "Помогаю собрать блоки так, чтобы сайт последовательно объяснял услугу и подводил к заявке."
  },
  {
    title: "Современный дизайн",
    text: "Делаю чистую подачу без шаблонного ощущения и визуального перегруза."
  },
  {
    title: "Адаптивная вёрстка",
    text: "Сайт аккуратно работает на телефоне, планшете и большом экране."
  },
  {
    title: "Форма заявки",
    text: "Добавляю простой и понятный способ связаться без лишних шагов."
  },
  {
    title: "Базовая SEO-подготовка",
    text: "Настраиваю метаданные, заголовки и базовую структуру, чтобы сайт был аккуратно подготовлен."
  },
  {
    title: "Помощь с публикацией",
    text: "Подскажу по домену, хостингу и запуску, чтобы проект не застрял на финальном этапе."
  }
];

const services = [
  {
    tag: "Под ключ",
    title: "Лендинг под услугу",
    description:
      "Для эксперта, мастера или локального сервиса, когда нужна одна сильная страница под конкретное предложение.",
    includes: [
      "Структура блоков и логика первого экрана",
      "Индивидуальный визуальный стиль без шаблонной сборки",
      "Адаптивная вёрстка и форма заявки",
      "Подготовка к публикации"
    ]
  },
  {
    tag: "База для личного бренда",
    title: "Сайт-визитка",
    description:
      "Небольшой сайт о вас, услугах, преимуществах и способах связи. Подходит для частной практики и самозанятых.",
    includes: [
      "Главная страница с услугами и преимуществами",
      "Контакты, ссылки на мессенджеры, форма связи",
      "Адаптивность для мобильных устройств",
      "Чистая и понятная структура"
    ]
  },
  {
    tag: "Для бизнеса",
    title: "Небольшой сайт для бизнеса",
    description:
      "Если нужно показать компанию, несколько направлений услуг, преимущества и основные точки контакта.",
    includes: [
      "Несколько смысловых блоков или страниц",
      "Упаковка услуг и доверительных элементов",
      "Базовая техническая настройка",
      "Поддержка при публикации"
    ]
  },
  {
    tag: "Без переделки с нуля",
    title: "Доработка существующего сайта",
    description:
      "Если сайт уже есть, но его нужно освежить, адаптировать под мобильные или улучшить отдельные блоки.",
    includes: [
      "Исправление структуры и визуальных слабых мест",
      "Адаптивные доработки и чистка интерфейса",
      "Подключение формы или обновление CTA",
      "Точечные правки без лишнего объёма"
    ]
  },
  {
    tag: "По готовому макету",
    title: "Адаптивная вёрстка по макету",
    description:
      "Если дизайн уже готов, аккуратно перенесу его в качественную HTML/CSS/JS-вёрстку с адаптацией под устройства.",
    includes: [
      "Pixel-accurate вёрстка по макету",
      "Адаптация сеток и типографики",
      "Hover, focus и аккуратные микровзаимодействия",
      "Понятная структура файлов"
    ]
  },
  {
    tag: "Практичная интеграция",
    title: "Подключение форм, аналитики и базовых интеграций",
    description:
      "Добавлю рабочие точки контакта и базовую техническую связку, чтобы сайт был не только красивым, но и полезным.",
    includes: [
      "Форма заявки и сценарий отправки",
      "Базовые события и аналитика",
      "Email, мессенджеры или простые интеграции",
      "Проверка пользовательского пути"
    ]
  }
];

const benefits = [
  {
    icon: "01",
    title: "Говорю простым языком",
    text: "Объясняю решения без технического тумана и лишних терминов."
  },
  {
    icon: "02",
    title: "Не навязываю лишний функционал",
    text: "Помогаю сделать именно тот сайт, который реально нужен сейчас."
  },
  {
    icon: "03",
    title: "Делаю аккуратный адаптив",
    text: "Сайт выглядит собранно и уверенно на телефоне, планшете и десктопе."
  },
  {
    icon: "04",
    title: "Думаю о задаче сайта",
    text: "Важно не просто сверстать блоки, а объяснить услугу и привести к заявке."
  },
  {
    icon: "05",
    title: "Помогаю с запуском",
    text: "Подскажу по публикации, домену, хостингу и финальной проверке."
  },
  {
    icon: "06",
    title: "Оставляю понятную структуру проекта",
    text: "Код и файлы собраны без хаоса, чтобы к сайту можно было вернуться позже."
  },
  {
    icon: "07",
    title: "Можно начать с простой версии",
    text: "Сначала делаем базовую рабочую версию, а дальше сайт можно развивать."
  }
];

const processSteps = [
  {
    title: "Обсуждаем задачу",
    text: "Коротко фиксируем цель сайта, аудиторию, формат и ожидаемый результат."
  },
  {
    title: "Собираем структуру и тексты",
    text: "Определяем блоки, акценты и то, как сайт будет объяснять услугу."
  },
  {
    title: "Делаю дизайн или прототип",
    text: "Собираю визуальную подачу, чтобы структура выглядела современно и понятно."
  },
  {
    title: "Верстаю и адаптирую",
    text: "Собираю рабочую страницу, проверяю поведение на разных устройствах."
  },
  {
    title: "Запускаем сайт",
    text: "Финально тестируем форму, тексты, контакты и готовим проект к публикации."
  }
];

const portfolio = [
  {
    tag: "Пример формата проекта",
    title: "Лендинг для мастера или эксперта",
    description:
      "Страница с оффером, услугами, кейс-блоком, ответами на вопросы и понятной формой связи.",
    meta: ["Упаковка услуги", "CTA и доверие", "Mobile first"]
  },
  {
    tag: "Пример формата проекта",
    title: "Сайт для локального сервиса",
    description:
      "Небольшой сайт для студии, сервиса или мастерской с понятным списком услуг и быстрым контактом.",
    meta: ["Контакты", "Карта/гео", "Услуги"]
  },
  {
    tag: "Пример формата проекта",
    title: "Страница для онлайн-услуги",
    description:
      "Лаконичная посадочная страница для консультаций, обучения, настройки или сопровождения.",
    meta: ["Онлайн-запись", "Тарифы", "Вопросы и ответы"]
  },
  {
    tag: "Пример формата проекта",
    title: "Мини-сайт для компании",
    description:
      "Аккуратная подача компании, направлений работы, преимуществ и основных способов связи.",
    meta: ["О компании", "Несколько блоков", "Подготовка к запуску"]
  }
];

const pricing = [
  {
    name: "Старт",
    tag: "Простой вход",
    price: "от …",
    description: "Подходит, когда нужна аккуратная одностраничная база под одну услугу.",
    features: [
      "Первый экран, преимущества и форма заявки",
      "Адаптивная вёрстка",
      "Базовая SEO-подготовка",
      "Помощь с публикацией"
    ],
    featured: false
  },
  {
    name: "Оптимальный",
    tag: "Чаще всего выбирают",
    price: "после обсуждения",
    description: "Лендинг с продуманной структурой, где важны упаковка услуги и доверие.",
    features: [
      "Глубже проработанная структура и сценарий страницы",
      "Несколько смысловых секций и CTA",
      "Форма, адаптив и базовые интеграции",
      "Поддержка на этапе запуска"
    ],
    featured: true
  },
  {
    name: "Индивидуальный",
    tag: "Под нестандартную задачу",
    price: "зависит от объёма",
    description: "Когда нужен сайт с нестандартными блоками, доработками или несколькими форматами страниц.",
    features: [
      "Индивидуальный состав работ",
      "Доработка существующего проекта или новый сайт",
      "Подключение аналитики и интеграций",
      "План развития после первой версии"
    ],
    featured: false
  }
];

const faqItems = [
  {
    question: "Сколько времени занимает создание сайта?",
    answer:
      "Зависит от объёма. Простой лендинг можно собрать быстро, а более продуманная структура с несколькими блоками и доработками занимает дольше. Сроки уточняем после короткого обсуждения."
  },
  {
    question: "Что нужно от меня для старта?",
    answer:
      "Достаточно коротко описать услугу, аудиторию и желаемый результат. Если есть тексты, референсы или старый сайт, это ускорит старт, но можно начать и без полного пакета материалов."
  },
  {
    question: "Можете ли вы помочь с текстами?",
    answer:
      "Да. Могу помочь собрать структуру и подсказать, как проще и понятнее сформулировать оффер, преимущества и блоки, даже если исходных текстов пока мало."
  },
  {
    question: "Сайт будет работать на телефоне?",
    answer:
      "Да. Адаптивная вёрстка закладывается сразу, чтобы сайт корректно выглядел и был удобен на смартфонах, планшетах и десктопе."
  },
  {
    question: "Можно ли потом доработать сайт?",
    answer:
      "Да. Сайт можно развивать поэтапно: добавить новые блоки, улучшить структуру, подключить формы, аналитику или расширить до нескольких страниц."
  },
  {
    question: "Поможете ли вы с доменом и хостингом?",
    answer:
      "Да. Подскажу, что выбрать, как подключить домен и где разместить сайт, чтобы он спокойно работал после запуска."
  },
  {
    question: "Что если у меня пока нет дизайна?",
    answer:
      "Это нормально. Можно начать с прототипа, структуры и общего направления, а затем собрать аккуратный современный интерфейс под задачу."
  }
];

function renderNav() {
  const markup = navItems
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  document.querySelectorAll("[data-nav]").forEach((node) => {
    node.innerHTML = markup;
  });
}

function renderProblems() {
  const target = document.querySelector("[data-problems]");

  target.innerHTML = problems
    .map(
      (item, index) => `
        <article class="problem-card reveal">
          <span class="problem-index">${String(index + 1).padStart(2, "0")}</span>
          <p>${item}</p>
        </article>
      `
    )
    .join("");
}

function renderSolutions() {
  const target = document.querySelector("[data-solutions]");

  target.innerHTML = solutions
    .map(
      (item) => `
        <article class="solution-card reveal">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderServices() {
  const target = document.querySelector("[data-services]");

  target.innerHTML = services
    .map(
      (service) => `
        <article class="service-card reveal">
          <span class="service-tag">${service.tag}</span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <ul class="service-list">
            ${service.includes.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
}

function renderBenefits() {
  const target = document.querySelector("[data-benefits]");

  target.innerHTML = benefits
    .map(
      (item) => `
        <article class="benefit-card reveal">
          <span class="benefit-icon">${item.icon}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderProcess() {
  const target = document.querySelector("[data-process]");

  target.innerHTML = processSteps
    .map(
      (item, index) => `
        <article class="timeline-step reveal">
          <span class="timeline-index">${index + 1}</span>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join("");
}

function renderPortfolio() {
  const target = document.querySelector("[data-portfolio]");

  target.innerHTML = portfolio
    .map(
      (item) => `
        <article class="portfolio-card reveal">
          <div class="portfolio-preview" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span class="portfolio-tag">${item.tag}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="portfolio-meta">
            ${item.meta.map((meta) => `<span>${meta}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderPricing() {
  const target = document.querySelector("[data-pricing]");

  target.innerHTML = pricing
    .map(
      (item) => `
        <article class="pricing-card reveal${item.featured ? " is-featured" : ""}">
          <span class="plan-tag">${item.tag}</span>
          <h3>${item.name}</h3>
          <div class="plan-price">${item.price}</div>
          <p>${item.description}</p>
          <ul class="plan-list">
            ${item.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <a class="button ${item.featured ? "button--primary" : "button--secondary"}" href="#contact">
            Обсудить формат
          </a>
        </article>
      `
    )
    .join("");
}

function renderFaq() {
  const target = document.querySelector("[data-faq]");

  target.innerHTML = faqItems
    .map(
      (item, index) => `
        <details class="faq-item reveal"${index === 0 ? " open" : ""}>
          <summary>${item.question}</summary>
          <div class="faq-answer">${item.answer}</div>
        </details>
      `
    )
    .join("");
}

function setupHeaderState() {
  const header = document.querySelector(".site-header");

  const sync = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  sync();
  window.addEventListener("scroll", sync, { passive: true });
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const panel = document.querySelector("#mobile-menu");

  if (!toggle || !panel) {
    return;
  }

  const closeMenu = () => {
    toggle.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    panel.hidden = true;
  };

  const openMenu = () => {
    toggle.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    panel.hidden = false;
  };

  toggle.addEventListener("click", () => {
    if (panel.hidden) {
      openMenu();
      return;
    }

    closeMenu();
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1040) {
      closeMenu();
    }
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  items.forEach((item) => observer.observe(item));
}

function setupForm() {
  const form = document.querySelector("#lead-form");
  const submitButton = form?.querySelector('button[type="submit"]');
  const status = document.querySelector("#form-status");

  if (!form || !submitButton || !status) {
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    submitButton.disabled = true;
    submitButton.classList.add("is-loading");
    status.textContent = "Отправляю заявку…";

    // Здесь можно заменить имитацию на реальную интеграцию:
    // fetch("/api/lead", { method: "POST", body: JSON.stringify(payload) })
    // или подключить Telegram bot / EmailJS / backend route.
    await new Promise((resolve) => window.setTimeout(resolve, 1600));

    submitButton.disabled = false;
    submitButton.classList.remove("is-loading");
    status.textContent = `Спасибо, ${payload.name || "заявка"} принята. Свяжусь с вами в ближайшее время.`;
    form.reset();
  });
}

function setCurrentYear() {
  const yearTarget = document.querySelector("[data-current-year]");

  if (yearTarget) {
    yearTarget.textContent = String(new Date().getFullYear());
  }
}

function init() {
  renderNav();
  renderProblems();
  renderSolutions();
  renderServices();
  renderBenefits();
  renderProcess();
  renderPortfolio();
  renderPricing();
  renderFaq();
  setupHeaderState();
  setupMenu();
  setupReveal();
  setupForm();
  setCurrentYear();
}

document.addEventListener("DOMContentLoaded", init);
