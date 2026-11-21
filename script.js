
const translations = {
  pl: {
    guideQuestions: [
      {
        q: "Jakiego elementu KP potrzebujesz teraz?",
        opts: [
          "Imię i nazwisko",
          "Dom Hogwartu",
          "Różdżka",
          "Wygląd postaci",
          "Charakter",
          "Historia postaci",
          "Zainteresowania"
        ]
      },
      {
        q: "Jaki klimat ma mieć Twoja postać?",
        opts: [
          "Tajemnicza i skryta",
          "Towarzyska i otwarta",
          "Ambitna i zdeterminowana",
          "Spokojna i refleksyjna",
          "Jeszcze nie wiem"
        ]
      },
      {
        q: "Jakiego rodzaju pomocy oczekujesz?",
        opts: [
          "Chcę poznać kanoniczne informacje",
          "Potrzebuję inspiracji do własnego pomysłu",
          "Chcę porównać kilka możliwości",
          "Nie wiem — pokaż mi przykłady"
        ]
      },
      {
        q: "Jak szczegółowa ma być podpowiedź?",
        opts: [
          "Krótka lista propozycji",
          "Wyjaśnienie każdej możliwości",
          "Pytania, które pomogą mi zdecydować"
        ]
      },
      {
        q: "Co zrobisz z wybraną propozycją?",
        opts: [
          "Zapiszę ją do swoich notatek",
          "Wrócę do niej później",
          "Potrzebuję jeszcze czasu na decyzję"
        ]
      }
    ],
    browseItems: [
      ["Imiona i nazwiska", "Pomysły i inspiracje do nazwania postaci."],
      ["Dom Hogwartu", "Cechy domów i pomoc w przemyślanym wyborze."],
      ["Różdżki", "Drewno, rdzenie, długość i elastyczność."],
      ["Wygląd", "Pomysły na opis wyglądu postaci."],
      ["Charakter", "Cechy, zalety, wady i sprzeczności."],
      ["Historia", "Rodzina, dzieciństwo i ważne wydarzenia."],
      ["Zainteresowania", "Hobby, pasje i upodobania."]
    ],
    categories: {
      all: "WSZYSTKIE",
      wand: "RÓŻDŻKI",
      school: "HOGWART",
      houses: "DOMY",
      world: "ŚWIAT MAGII"
    }
  },

  en: {
    guideQuestions: [
      {
        q: "Which part of your character profile are you working on?",
        opts: [
          "First and last name",
          "Hogwarts house",
          "Wand",
          "Character appearance",
          "Personality",
          "Backstory",
          "Interests"
        ]
      },
      {
        q: "What kind of atmosphere should your character have?",
        opts: [
          "Mysterious and reserved",
          "Sociable and open",
          "Ambitious and determined",
          "Calm and thoughtful",
          "Not sure yet"
        ]
      },
      {
        q: "What kind of help do you need?",
        opts: [
          "I want canon information",
          "I need inspiration for my own idea",
          "I want to compare options",
          "Not sure — show me examples"
        ]
      },
      {
        q: "How detailed should the suggestions be?",
        opts: [
          "A short list of ideas",
          "An explanation of each option",
          "Questions to help me decide"
        ]
      },
      {
        q: "What will you do with your choice?",
        opts: [
          "Save it in my notes",
          "Come back to it later",
          "I need more time to decide"
        ]
      }
    ],
    browseItems: [
      ["Names", "Ideas and inspiration for naming your character."],
      ["Hogwarts house", "House traits and help with a thoughtful choice."],
      ["Wands", "Wood, cores, length and flexibility."],
      ["Appearance", "Ideas for describing your character."],
      ["Personality", "Traits, strengths, flaws and contradictions."],
      ["Backstory", "Family, childhood and important events."],
      ["Interests", "Hobbies, passions and preferences."]
    ],
    categories: {
      all: "ALL",
      wand: "WANDS",
      school: "HOGWARTS",
      houses: "HOUSES",
      world: "WIZARDING WORLD"
    }
  }
};

const articles = [
  {
    id: "wand-basics",
    category: "wand",
    icon: "✧",
    title: {
      pl: "Różdżki — podstawy",
      en: "Wands — basics"
    },
    desc: {
      pl: "Podstawowe informacje o roli różdżek w czarodziejstwie.",
      en: "Basic information about the role of wands in wizarding."
    },
    body: {
      pl: "Różdżki są narzędziami używanymi przez czarodziejów do kierowania magią. W świecie przedstawionym różdżki mają różne właściwości, a ich dobór jest istotnym elementem relacji między czarodziejem a różdżką.",
      en: "Wands are tools used by witches and wizards to channel magic. In the fictional world, wands have different properties, and choosing one is an important part of the relationship between a wizard and their wand."
    },
    caveat: {
      pl: "To ogólny opis. Konkretne właściwości poszczególnych różdżek należy sprawdzać osobno w oficjalnych materiałach.",
      en: "This is a general description. Specific wand properties should be checked individually against official materials."
    }
  },
  {
    id: "wandmaker",
    category: "wand",
    icon: "⌁",
    title: {
      pl: "Różdżkarstwo",
      en: "Wandlore"
    },
    desc: {
      pl: "Dziedzina wiedzy zajmująca się różdżkami i ich właściwościami.",
      en: "The field of knowledge concerned with wands and their properties."
    },
    body: {
      pl: "Różdżkarstwo (ang. wandlore) to wiedza dotycząca różdżek. W materiałach o świecie Harry'ego Pottera pojawiają się informacje o drewnie, rdzeniach, długości, elastyczności oraz dopasowaniu różdżki do właściciela.",
      en: "Wandlore is the study and knowledge of wands. Harry Potter materials discuss wand wood, cores, length, flexibility and the relationship between a wand and its owner."
    },
    caveat: {
      pl: "Nie każda cecha różdżki ma jednoznaczne, oficjalnie opisane znaczenie psychologiczne.",
      en: "Not every wand feature has a clearly established, official psychological meaning."
    }
  },
  {
    id: "hogwarts",
    category: "school",
    icon: "⌂",
    title: {
      pl: "Szkoła Magii i Czarodziejstwa w Hogwarcie",
      en: "Hogwarts School of Witchcraft and Wizardry"
    },
    desc: {
      pl: "Szkoła magii, do której uczęszczają młodzi czarodzieje w Wielkiej Brytanii.",
      en: "A school of magic attended by young witches and wizards in Britain."
    },
    body: {
      pl: "Hogwart jest szkołą magii i czarodziejstwa w Wielkiej Brytanii. Uczniowie są przydzielani do jednego z czterech domów. Nauka obejmuje różne przedmioty magiczne, a szczegóły szkolnego życia zależą od okresu opisywanego w źródłach.",
      en: "Hogwarts is a school of witchcraft and wizardry in Britain. Students are sorted into one of four houses. The curriculum includes various magical subjects, and details of school life depend on the period described in the sources."
    },
    caveat: {
      pl: "Konkretne daty, regulaminy i obsada nauczycielska mogą zależeć od epoki RP.",
      en: "Specific dates, rules and staff may depend on the RP setting's time period."
    }
  },
  {
    id: "houses",
    category: "houses",
    icon: "♜",
    title: {
      pl: "Cztery domy Hogwartu",
      en: "The four Hogwarts houses"
    },
    desc: {
      pl: "Gryffindor, Hufflepuff, Ravenclaw i Slytherin.",
      en: "Gryffindor, Hufflepuff, Ravenclaw and Slytherin."
    },
    body: {
      pl: "Cztery domy Hogwartu to Gryffindor, Hufflepuff, Ravenclaw i Slytherin. Każdy z nich jest związany z innymi wartościami i tradycjami. Przydziału dokonuje Tiara Przydziału.",
      en: "The four Hogwarts houses are Gryffindor, Hufflepuff, Ravenclaw and Slytherin. Each is associated with different values and traditions. Students are sorted by the Sorting Hat."
    },
    caveat: {
      pl: "Dom nie powinien być traktowany jako sztywna etykieta osobowości. Postacie mogą być złożone i niejednoznaczne.",
      en: "A house should not be treated as a rigid personality label. Characters can be complex and multifaceted."
    }
  },
  {
    id: "sorting-hat",
    category: "houses",
    icon: "♧",
    title: {
      pl: "Tiara Przydziału",
      en: "The Sorting Hat"
    },
    desc: {
      pl: "Zaczarowany kapelusz przydzielający uczniów do domów.",
      en: "An enchanted hat that sorts students into houses."
    },
    body: {
      pl: "Tiara Przydziału jest zaczarowanym przedmiotem używanym w Hogwarcie do przydzielania nowych uczniów do jednego z czterech domów. Bierze pod uwagę cechy i możliwości ucznia.",
      en: "The Sorting Hat is an enchanted object used at Hogwarts to place new students into one of the four houses. It takes a student's qualities and potential into account."
    },
    caveat: {
      pl: "Wybór ucznia również może mieć znaczenie — nie należy upraszczać przydziału do jednego testu osobowości.",
      en: "A student's own choice can also matter — sorting should not be reduced to a single personality quiz."
    }
  },
  {
    id: "wizarding-world",
    category: "world",
    icon: "✦",
    title: {
      pl: "Świat czarodziejów",
      en: "The wizarding world"
    },
    desc: {
      pl: "Społeczność czarodziejów funkcjonująca obok świata mugoli.",
      en: "The magical community existing alongside the non-magical world."
    },
    body: {
      pl: "Świat czarodziejów to społeczność osób posługujących się magią, która w wielu aspektach funkcjonuje równolegle do świata niemagicznego. W książkach pojawiają się instytucje, miejsca i zwyczaje charakterystyczne dla tej społeczności.",
      en: "The wizarding world is a community of people who use magic and, in many ways, exists alongside the non-magical world. The books feature institutions, places and customs specific to this community."
    },
    caveat: {
      pl: "Szczegóły świata zależą od konkretnego źródła i okresu. Nie dopisujemy informacji, których nie da się potwierdzić.",
      en: "Details depend on the specific source and time period. We do not add information that cannot be verified."
    }
  }
];

const $ = (selector, root = document) =>
  root.querySelector(selector);

const $$ = (selector, root = document) =>
  [...root.querySelectorAll(selector)];

let language = localStorage.getItem("wa-language") || "pl";

let currentPage = "home";
let currentMode = "guided";
let currentStep = 0;
let answers = {};
let activeCategory = "all";

const pageButtons = $$(".nav-link");

/* ZMIANA STRON */

function showPage(page) {
  currentPage = page;

  $$(".page").forEach(section => {
    section.classList.toggle(
      "active",
      section.id === `page-${page}`
    );
  });

  pageButtons.forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.page === page
    );
  });

  $(".main-nav").classList.remove("open");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

$$("[data-page]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.page);
  });
});

$$("[data-go]").forEach(button => {
  button.addEventListener("click", () => {
    showPage(button.dataset.go);

    if (button.dataset.category) {
      setCategory(button.dataset.category);
    }
  });
});

/* JĘZYK */

function t(key) {
  return translations[language][key] ?? key;
}

function applyLanguage() {
  document.documentElement.lang = language;

  $("#languageToggle").textContent =
    language === "pl" ? "EN" : "PL";

  renderGuide();
  renderBrowse();
  renderArticles();
}

$("#languageToggle").addEventListener("click", () => {
  language = language === "pl" ? "en" : "pl";

  localStorage.setItem("wa-language", language);

  applyLanguage();
});

/* MOTYW */

$("#themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light");

  localStorage.setItem(
    "wa-theme",
    document.body.classList.contains("light")
      ? "light"
      : "dark"
  );
});

if (localStorage.getItem("wa-theme") === "light") {
  document.body.classList.add("light");
}

/* MENU TELEFONICZNE */

$("#menuToggle").addEventListener("click", () => {
  $(".main-nav").classList.toggle("open");
});

/* TRYBY KREATORA */

$$(".mode-button").forEach(button => {
  button.addEventListener("click", () => {
    currentMode = button.dataset.mode;

    $$(".mode-button").forEach(item => {
      item.classList.toggle("active", item === button);
    });

    $("#guidedPanel").classList.toggle(
      "hidden",
      currentMode !== "guided"
    );

    $("#browsePanel").classList.toggle(
      "hidden",
      currentMode !== "browse"
    );
  });
});

/* PROWADZONY KREATOR */

function renderGuide() {
  const questions = t("guideQuestions");
  const item = questions[currentStep];

  if (!item) return;

  $("#guideQuestion").textContent = item.q;

  $("#guideOptions").innerHTML = item.opts
    .map((option, index) => `
      <button class="guide-option ${
        answers[currentStep] === index ? "selected" : ""
      }" data-option="${index}">
        ${escapeHtml(option)}
      </button>
    `)
    .join("");

  $$(".guide-option").forEach(button => {
    button.addEventListener("click", () => {
      answers[currentStep] = Number(button.dataset.option);
      renderGuide();
    });
  });

  $("#stepCount").textContent =
    `${String(currentStep + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;

  $("#progressBar").style.width =
    `${((currentStep + 1) / questions.length) * 100}%`;

  $("#prevStep").disabled = currentStep === 0;

  $("#nextStep").textContent =
    currentStep === questions.length - 1
      ? (language === "pl" ? "Zakończ ✓" : "Finish ✓")
      : (language === "pl" ? "Dalej →" : "Next →");
}

$("#prevStep").addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    renderGuide();
  }
});

$("#nextStep").addEventListener("click", () => {
  const questions = t("guideQuestions");

  if (currentStep < questions.length - 1) {
    currentStep++;
    renderGuide();
    return;
  }

  const summary = questions.map((question, index) => {
    const answer = answers[index] === undefined
      ? "—"
      : question.opts[answers[index]];

    return `${question.q}\n${answer}`;
  }).join("\n\n");

  const notes = $("#characterNotes");

  notes.value +=
    (notes.value ? "\n\n---\n\n" : "") + summary;

  saveNotes();

  currentStep = 0;
  answers = {};

  renderGuide();

  showToast(
    language === "pl"
      ? "Podsumowanie dodano do notatek."
      : "Summary added to your notes."
  );

  notes.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

/* SAMODZIELNE PRZEGLĄDANIE */

function renderBrowse() {
  const items = t("browseItems");

  const icons = [
    "✧", "♜", "⌁", "◈", "☾", "⌂", "✦"
  ];

  $("#browseGrid").innerHTML = items.map((item, index) => `
    <button class="browse-item" data-browse="${index}">
      <span>${icons[index]}</span>
      <strong>${escapeHtml(item[0])}</strong>
      <small>${escapeHtml(item[1])}</small>
    </button>
  `).join("");

  $$(".browse-item").forEach(button => {
    button.addEventListener("click", () => {
      const label =
        t("browseItems")[Number(button.dataset.browse)][0];

      $("#encyclopediaSearch").value = label;

      showPage("encyclopedia");
      renderArticles();

      showToast(
        language === "pl"
          ? "W encyklopedii możesz sprawdzić powiązane hasła."
          : "Explore related entries in the encyclopedia."
      );
    });
  });
}

/* ENCYKLOPEDIA */

function setCategory(category) {
  activeCategory = category;

  $$(".category-tab").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.category === category
    );
  });

  renderArticles();
}

$$(".category-tab").forEach(button => {
  button.addEventListener("click", () => {
    setCategory(button.dataset.category);
  });
});

$("#encyclopediaSearch").addEventListener(
  "input",
  renderArticles
);

function renderArticles() {
  const query = $("#encyclopediaSearch")
    .value
    .trim()
    .toLocaleLowerCase(language === "pl" ? "pl" : "en");

  const filtered = articles.filter(article => {
    const title = article.title[language];
    const description = article.desc[language];

    const matchesCategory =
      activeCategory === "all" ||
      article.category === activeCategory;

    const searchable = `
      ${title}
      ${description}
      ${article.title.pl}
      ${article.title.en}
    `.toLocaleLowerCase();

    return matchesCategory &&
      (!query || searchable.includes(query));
  });

  $("#articleGrid").innerHTML = filtered.length
    ? filtered.map(article => `
        <button class="article-card"
          data-article="${article.id}">
          <span class="article-icon">${article.icon}</span>
          <small>${t("categories")[article.category]}</small>
          <strong>${escapeHtml(article.title[language])}</strong>
          <p>${escapeHtml(article.desc[language])}</p>
        </button>
      `).join("")
    : `
      <p class="empty-state">
        ${language === "pl"
          ? "Nie znaleziono pasujących haseł."
          : "No matching entries found."}
      </p>
    `;

  $$(".article-card").forEach(button => {
    button.addEventListener("click", () => {
      openArticle(button.dataset.article);
    });
  });
}

/* OKNA ARTYKUŁÓW */

function openArticle(id) {
  const article = articles.find(item => item.id === id);

  if (!article) return;

  $("#modalCategory").textContent =
    t("categories")[article.category];

  $("#modalTitle").textContent =
    article.title[language];

  $("#modalBody").textContent =
    article.body[language];

  $("#modalCaveat").textContent =
    article.caveat[language];

  $("#articleModal").classList.add("open");
}

function closeModal() {
  $("#articleModal").classList.remove("open");
}

$("#closeModal").addEventListener("click", closeModal);

$("#articleModal").addEventListener("click", event => {
  if (event.target.id === "articleModal") {
    closeModal();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeModal();
  }
});

/* NOTATKI */

function saveNotes() {
  localStorage.setItem(
    "wa-notes",
    $("#characterNotes").value
  );

  $("#saveStatus").textContent =
    language === "pl"
      ? "Zapisano lokalnie ✓"
      : "Saved locally ✓";
}

$("#characterNotes").value =
  localStorage.getItem("wa-notes") || "";

$("#characterNotes").addEventListener(
  "input",
  saveNotes
);

$("#clearNotes").addEventListener("click", () => {
  if (!$("#characterNotes").value) return;

  $("#characterNotes").value = "";

  saveNotes();

  showToast(
    language === "pl"
      ? "Notatki wyczyszczone."
      : "Notes cleared."
  );
});

/* KOMUNIKATY */

let toastTimer;

function showToast(message) {
  const element = $("#toast");

  element.textContent = message;
  element.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    element.classList.remove("show");
  }, 2400);
}

/* ZABEZPIECZENIE TEKSTU */

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

/* START APLIKACJI */

applyLanguage();
