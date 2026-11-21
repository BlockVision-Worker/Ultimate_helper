
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];

const I18N = {
  pl: {
    navHome:"Strona główna",navCreator:"Kreator KP",navEncyclopedia:"Encyklopedia",
    heroTitle:'Twoja postać.<br><em>Twoja historia.</em>',
    heroText:"Poznaj świat czarodziejów, sprawdzaj informacje i dobieraj elementy karty postaci RP zgodnie z kanonem Harry'ego Pottera.",
    startCreator:"✧ Otwórz kreator KP",openEncyclopedia:"Przeglądaj encyklopedię →",
    canonPromise:"Kanon oddzielony od inspiracji fanowskich.",discover:"DISCOVER",
    whatCanYouDo:"Co tutaj znajdziesz?",homeIntro:"Wybieraj informacje, poznawaj zasady świata i zapisuj pomysły na swoją postać.",
    homeCard1:"Kreator karty postaci",homeCard1Text:"Dobieraj wszystkie najważniejsze elementy swojej KP.",
    homeCard2:"Encyklopedia",homeCard2Text:"Sprawdzaj wiedzę o Hogwarcie, różdżkach i świecie magii.",
    homeCard3:"Twoje notatki",homeCard3Text:"Zapisuj pomysły i wracaj do nich, kiedy chcesz.",
    truthTitle:"Najpierw kanon, potem inspiracja.",truthText:"Nieustalone informacje oznaczamy jako nieustalone. Własne pomysły są wyraźnie oddzielone od faktów z książek i oficjalnych materiałów.",
    creatorEyebrow:"CHARACTER WORKSHOP",creatorTitle:'Kreator <em>karty postaci</em>',
    creatorIntro:"Wybierz dział, poznaj dostępne informacje i dodaj wybrane elementy do swojego roboczego zestawu KP.",
    yourProfile:"TWOJA KARTA",sidebarTip:"Nie musisz wypełniać wszystkiego naraz. Twoje wybory zapisują się automatycznie.",
    livePreview:"LIVE PREVIEW",yourChoices:"Twoje wybory",summaryHint:"Tutaj pojawiają się informacje, które wybierzesz w kreatorze.",
    copySummary:"Kopiuj podsumowanie",clearSelections:"Wyczyść wybory",
    previous:"Poprzedni",next:"Następny",personalNotes:"PERSONAL NOTES",notesTitle:"Notatki do postaci",
    notesDescription:"Tutaj możesz zapisywać własne pomysły, które nie pasują do żadnego działu.",
    notesPlaceholder:"Twoje pomysły...",clearNotes:"Wyczyść notatki",
    encyclopediaTitle:'Encyklo<em>pedia</em>',encyclopediaIntro:"Wiedza potrzebna do tworzenia postaci. Przeglądaj tematy lub wyszukaj konkretne hasło.",
    searchPlaceholder:"Szukaj: różdżka, Hogwart, Ravenclaw...",sourceDisclaimer:"Baza jest punktem wyjścia. W przypadku szczegółowych informacji sprawdzaj książki i oficjalne materiały Wizarding World. Nie traktuj fanowskich interpretacji jako kanonu.",
    footerText:"Niezależny projekt fanowski. Nie jest oficjalną stroną Wizarding World.",
    empty:"Brak pasujących haseł.",saved:"Zapisano lokalnie ✓",added:"Dodano do wyborów ✓",
    removed:"Usunięto z wyborów.",copied:"Podsumowanie skopiowane.",cleared:"Wybory wyczyszczone.",
    all:"Wszystkie",canon:"KANON",inspiration:"INSPIRACJA",unknown:"NIEUSTALONE",
    name:"Imię i nazwisko",birth:"Data urodzenia i wiek",house:"Dom Hogwartu",
    wand:"Różdżka",appearance:"Wygląd",personality:"Charakter",
    history:"Historia",interests:"Zainteresowania",
    nameDesc:"Wpisz własne imię i nazwisko albo potraktuj przykłady jako inspirację. Nie istnieje jedna kanoniczna lista imion dla wszystkich postaci.",
    birthDesc:"Wpisz datę urodzenia. Wiek zostanie obliczony automatycznie względem wybranej daty odniesienia.",
    houseDesc:"Poznaj cztery domy Hogwartu. To wartości i tradycje, a nie sztywne typy osobowości.",
    wandDesc:"Różdżki różnią się drewnem, rdzeniem, długością i elastycznością. Wybór różdżki to element świata przedstawionego.",
    appearanceDesc:"Wygląd postaci jest Twoim wyborem. Poniższe cechy to pomysły do opisu, a nie kanoniczne reguły.",
    personalityDesc:"Zaznacz cechy, które pasują do Twojej koncepcji. Postać może mieć sprzeczne cechy.",
    historyDesc:"Zaplanuj rodzinę, dzieciństwo i przeszłość. Historia Twojej postaci może być autorska, o ile pasuje do zasad serwera.",
    interestsDesc:"Wybierz hobby, przedmioty lub aktywności, które mogą być częścią życia postaci.",
    firstName:"Imię",lastName:"Nazwisko",birthDate:"Data urodzenia",referenceDate:"Wiek liczony na dzień",
    age:"Obliczony wiek",houseChoice:"Wybierz dom",wood:"Drewno różdżki",core:"Rdzeń różdżki",
    length:"Długość (cale)",flexibility:"Elastyczność",custom:"Własna odpowiedź",
    add:"Dodaj",selected:"Wybrane",noSelection:"Jeszcze niczego tutaj nie wybrano.",
    chooseOne:"Wybierz jedną lub kilka propozycji.",appearanceNote:"Możesz dopisać własny opis wyglądu.",
    personalityNote:"Klikaj cechy, aby je zaznaczyć lub odznaczyć.",
    family:"Rodzina",childhood:"Dzieciństwo",past:"Ważne wydarzenia",
    familyPlaceholder:"Np. relacje rodzinne, rodzeństwo...",childhoodPlaceholder:"Jak wyglądało dzieciństwo postaci?",
    pastPlaceholder:"Jakie wydarzenia ukształtowały postać?",
    appearancePlaceholder:"Opisz wygląd postaci...",interestsPlaceholder:"Wpisz własne zainteresowania...",
    chooseHouse:"Wybierz dom, aby zobaczyć opis.",ageUnknown:"Wpisz obie daty, aby obliczyć wiek.",
    invalidDate:"Data urodzenia nie może być późniejsza od daty odniesienia.",
    years:"lat",houseValues:"Wartości kojarzone z domem",wandNote:"Ważne: nie ma oficjalnej tabeli, która przypisuje każdemu drewnu lub rdzeniowi dokładny typ osobowości.",
    noArticles:"Nie znaleziono artykułów."
  },
  en: {
    navHome:"Home",navCreator:"Character creator",navEncyclopedia:"Encyclopedia",
    heroTitle:'Your character.<br><em>Your story.</em>',
    heroText:"Explore the wizarding world, check information and choose character profile elements based on Harry Potter canon.",
    startCreator:"✧ Open character creator",openEncyclopedia:"Browse encyclopedia →",
    canonPromise:"Canon kept separate from fan inspiration.",discover:"DISCOVER",
    whatCanYouDo:"What can you find here?",homeIntro:"Explore information, learn about the world and save ideas for your character.",
    homeCard1:"Character creator",homeCard1Text:"Choose the most important parts of your character profile.",
    homeCard2:"Encyclopedia",homeCard2Text:"Explore Hogwarts, wands and the wizarding world.",
    homeCard3:"Your notes",homeCard3Text:"Save ideas and return to them whenever you like.",
    truthTitle:"Canon first, inspiration second.",truthText:"Unconfirmed information is marked as unknown. Original ideas are kept separate from facts in the books and official materials.",
    creatorEyebrow:"CHARACTER WORKSHOP",creatorTitle:'Character <em>creator</em>',
    creatorIntro:"Choose a section, explore the information and add your selections to your working character profile.",
    yourProfile:"YOUR PROFILE",sidebarTip:"You do not have to fill everything in at once. Your choices are saved automatically.",
    livePreview:"LIVE PREVIEW",yourChoices:"Your choices",summaryHint:"Your selected information will appear here.",
    copySummary:"Copy summary",clearSelections:"Clear choices",previous:"Previous",next:"Next",
    personalNotes:"PERSONAL NOTES",notesTitle:"Character notes",
    notesDescription:"Save your own ideas here.",notesPlaceholder:"Your ideas...",clearNotes:"Clear notes",
    encyclopediaTitle:'Encyclo<em>pedia</em>',encyclopediaIntro:"Knowledge for character creation. Browse topics or search for an entry.",
    searchPlaceholder:"Search: wand, Hogwarts, Ravenclaw...",sourceDisclaimer:"This database is a starting point. Check the books and official Wizarding World materials for detailed information. Do not treat fan interpretations as canon.",
    footerText:"Independent fan project. Not an official Wizarding World website.",
    empty:"No matching entries.",saved:"Saved locally ✓",added:"Added to choices ✓",
    removed:"Removed from choices.",copied:"Summary copied.",cleared:"Choices cleared.",
    all:"All",canon:"CANON",inspiration:"INSPIRATION",unknown:"UNCONFIRMED",
    name:"Name",birth:"Birth date and age",house:"Hogwarts house",wand:"Wand",
    appearance:"Appearance",personality:"Personality",history:"Backstory",interests:"Interests",
    nameDesc:"Enter your own first and last name or use examples as inspiration. There is no single canonical name list for every character.",
    birthDesc:"Enter a date of birth. Age is calculated using the selected reference date.",
    houseDesc:"Explore the four Hogwarts houses. They represent values and traditions, not rigid personality types.",
    wandDesc:"Wands differ in wood, core, length and flexibility. Wand selection is part of the fictional world.",
    appearanceDesc:"Your character's appearance is your choice. These are descriptive ideas, not canon rules.",
    personalityDesc:"Select traits that suit your concept. A character can have conflicting traits.",
    historyDesc:"Plan family, childhood and backstory. Your character's story can be original if it fits your server rules.",
    interestsDesc:"Choose hobbies, subjects or activities that could be part of your character's life.",
    firstName:"First name",lastName:"Last name",birthDate:"Date of birth",referenceDate:"Age calculated on",
    age:"Calculated age",houseChoice:"Choose a house",wood:"Wand wood",core:"Wand core",
    length:"Length (inches)",flexibility:"Flexibility",custom:"Custom answer",add:"Add",
    selected:"Selected",noSelection:"Nothing selected yet.",chooseOne:"Choose one or more options.",
    appearanceNote:"You can add your own appearance description.",
    personalityNote:"Click traits to select or deselect them.",
    family:"Family",childhood:"Childhood",past:"Important events",
    familyPlaceholder:"Family relationships, siblings...",childhoodPlaceholder:"What was the character's childhood like?",
    pastPlaceholder:"What events shaped the character?",
    appearancePlaceholder:"Describe your character's appearance...",interestsPlaceholder:"Enter your own interests...",
    chooseHouse:"Choose a house to see its description.",ageUnknown:"Enter both dates to calculate age.",
    invalidDate:"Date of birth cannot be later than the reference date.",
    years:"years",houseValues:"Values associated with the house",
    wandNote:"Important: there is no official table assigning every wood or core an exact personality type.",
    noArticles:"No articles found."
  }
};

let lang = localStorage.getItem("wa-language") || "pl";
let theme = localStorage.getItem("wa-theme") || "dark";
let currentCategory = 0;
let selections = JSON.parse(localStorage.getItem("wa-selections") || "{}");
let notes = localStorage.getItem("wa-notes") || "";
let toastTimer;

const categories = [
  {id:"name",icon:"✎"},
  {id:"birth",icon:"◷"},
  {id:"house",icon:"♜"},
  {id:"wand",icon:"⌁"},
  {id:"appearance",icon:"◈"},
  {id:"personality",icon:"☾"},
  {id:"history",icon:"⌂"},
  {id:"interests",icon:"✧"}
];

const houses = [
  {
    id:"Gryffindor",name:"Gryffindor",animal:"Lew",color:"Szkarłat i złoto",
    values:"Odwaga, śmiałość, determinacja i rycerskość.",
    description:"Dom założony przez Godryka Gryffindora. W tradycji domu szczególne znaczenie mają odwaga i gotowość do działania.",
    founder:"Godryk Gryffindor"
  },
  {
    id:"Hufflepuff",name:"Hufflepuff",animal:"Borsuk",color:"Żółć i czerń",
    values:"Pracowitość, cierpliwość, lojalność i uczciwość.",
    description:"Dom założony przez Helgę Hufflepuff. Wyróżnia się naciskiem na sprawiedliwość, lojalność i ciężką pracę.",
    founder:"Helga Hufflepuff"
  },
  {
    id:"Ravenclaw",name:"Ravenclaw",animal:"Orzeł",color:"Niebieski i brąz",
    values:"Mądrość, inteligencja, kreatywność i zamiłowanie do nauki.",
    description:"Dom założony przez Rowenę Ravenclaw. Cenione są w nim wiedza, bystrość i pomysłowość.",
    founder:"Rowena Ravenclaw"
  },
  {
    id:"Slytherin",name:"Slytherin",animal:"Wąż",color:"Zieleń i srebro",
    values:"Ambicja, zaradność, determinacja i pomysłowość.",
    description:"Dom założony przez Salazara Slytherina. W jego tradycji ważne są ambicja, zaradność i dążenie do celu.",
    founder:"Salazar Slytherin"
  }
];

const wandWoods = [
  ["Dąb","Oak","Drewno różdżki występujące w świecie czarodziejów. Nie przypisujemy mu automatycznie charakteru właściciela."],
  ["Ostrokrzew","Holly","Drewno różdżki Harry'ego Pottera."],
  ["Cis","Yew","Drewno różdżki Lorda Voldemorta."],
  ["Winorośl","Vine","Jedno z rodzajów drewna opisywanych w materiałach o różdżkach."],
  ["Wierzba","Willow","Drewno różdżki spotykane w opisach różdżkarstwa."],
  ["Jesion","Ash","Drewno różdżki spotykane w opisach różdżkarstwa."],
  ["Klon","Maple","Drewno różdżki spotykane w opisach różdżkarstwa."],
  ["Orzech","Walnut","Drewno różdżki spotykane w opisach różdżkarstwa."]
];

const wandCores = [
  ["Pióro feniksa","Phoenix feather","Jeden z trzech głównych rdzeni różdżek Ollivandera. Pióra użyte w różdżkach Harry'ego i Voldemorta pochodziły od tego samego feniksa."],
  ["Włos jednorożca","Unicorn hair","Jeden z trzech głównych rdzeni różdżek Ollivandera."],
  ["Struna smoczego serca","Dragon heartstring","Jeden z trzech głównych rdzeni różdżek Ollivandera."]
];

const flexibilities = [
  "Bardzo sztywna","Sztywna","Nieco sztywna","Elastyczna","Dość giętka","Giętka","Bardzo giętka"
];

const appearanceOptions = [
  ["Kolor włosów","Hair colour",["Czarne","Brązowe","Blond","Rude","Siwe","Białe","Inny"]],
  ["Fryzura","Hairstyle",["Krótkie","Długie","Kręcone","Proste","Falowane","Związane","Rozczochrane"]],
  ["Kolor oczu","Eye colour",["Niebieskie","Zielone","Brązowe","Szare","Piwne","Inny"]],
  ["Znaki szczególne","Distinctive features",["Piegi","Blizna","Znamiona","Okulary","Brak","Własny opis"]]
];

const personalityOptions = [
  ["Odważny","Brave"],["Ambitny","Ambitious"],["Lojalny","Loyal"],
  ["Ciekawski","Curious"],["Nieśmiały","Shy"],["Uparty","Stubborn"],
  ["Opanowany","Calm"],["Impulsywny","Impulsive"],["Pomysłowy","Creative"],
  ["Sarkastyczny","Sarcastic"],["Tajemniczy","Mysterious"],["Towarzyski","Sociable"],
  ["Nieufny","Distrustful"],["Cierpliwy","Patient"],["Perfekcjonista","Perfectionist"],
  ["Roztargniony","Absent-minded"],["Empatyczny","Empathetic"],["Zdeterminowany","Determined"]
];

const interests = [
  ["Czytanie","Reading"],["Zielarstwo","Herbology"],["Astronomia","Astronomy"],
  ["Quidditch","Quidditch"],["Historia magii","History of Magic"],
  ["Opieka nad magicznymi stworzeniami","Care of magical creatures"],
  ["Eliksiry","Potions"],["Transmutacja","Transfiguration"],
  ["Zaklęcia","Charms"],["Muzyka","Music"],["Rysowanie","Drawing"],
  ["Pisanie","Writing"],["Szachy","Chess"],["Pływanie","Swimming"],
  ["Odkrywanie nowych miejsc","Exploring"]
];

const articles = [
  {
    cat:"houses",icon:"♜",title:"Cztery domy Hogwartu",
    desc:"Gryffindor, Hufflepuff, Ravenclaw i Slytherin.",
    body:"Hogwart ma cztery domy: Gryffindor, Hufflepuff, Ravenclaw i Slytherin. Każdy został założony przez jednego z czworga założycieli szkoły. Tiara Przydziału decyduje, do którego domu trafi uczeń.",
    note:"Dom nie jest testem osobowości. Postacie z jednego domu mogą się od siebie bardzo różnić."
  },
  {
    cat:"houses",icon:"🦁",title:"Gryffindor",
    desc:"Dom Godryka Gryffindora.",
    body:"Gryffindor został założony przez Godryka Gryffindora. Z domem kojarzone są odwaga, śmiałość, determinacja i rycerskość. Jego symbolem jest lew, a barwami szkarłat i złoto.",
    note:"Wartości domu nie oznaczają, że każdy Gryfon zawsze jest odważny."
  },
  {
    cat:"houses",icon:"🦡",title:"Hufflepuff",
    desc:"Dom Helgi Hufflepuff.",
    body:"Hufflepuff został założony przez Helgę Hufflepuff. Kojarzony jest z pracowitością, cierpliwością, lojalnością i uczciwością. Symbolem domu jest borsuk, a barwami żółć i czerń.",
    note:"Przynależność do domu nie determinuje całego charakteru postaci."
  },
  {
    cat:"houses",icon:"🦅",title:"Ravenclaw",
    desc:"Dom Roweny Ravenclaw.",
    body:"Ravenclaw został założony przez Rowenę Ravenclaw. Dom ceni mądrość, inteligencję, kreatywność i zamiłowanie do nauki. Jego symbolem jest orzeł, a barwami niebieski i brąz w książkowym opisie.",
    note:"Nie każdy Krukon musi być szkolnym prymusem."
  },
  {
    cat:"houses",icon:"🐍",title:"Slytherin",
    desc:"Dom Salazara Slytherina.",
    body:"Slytherin został założony przez Salazara Slytherina. Kojarzony jest z ambicją, zaradnością, determinacją i pomysłowością. Jego symbolem jest wąż, a barwami zieleń i srebro.",
    note:"Nie każdy Ślizgon jest zły. Nie należy utożsamiać domu z moralnością."
  },
  {
    cat:"school",icon:"🏰",title:"Hogwart",
    desc:"Szkoła Magii i Czarodziejstwa.",
    body:"Hogwart to szkoła magii i czarodziejstwa w Szkocji. Uczniowie uczą się w niej między innymi zaklęć, transmutacji, eliksirów, zielarstwa, astronomii i historii magii.",
    note:"Dokładne szczegóły szkolnego życia mogą zależeć od okresu, w którym rozgrywa się RP."
  },
  {
    cat:"school",icon:"🎩",title:"Tiara Przydziału",
    desc:"Zaczarowany przedmiot przydzielający uczniów do domów.",
    body:"Tiara Przydziału jest zaczarowanym kapeluszem, który przydziela nowych uczniów Hogwartu do jednego z czterech domów. Potrafi rozmawiać i zaglądać do umysłu osoby, którą przydziela.",
    note:"Wybór ucznia może mieć znaczenie. Przykładem jest Harry Potter, który prosił, by nie przydzielać go do Slytherinu."
  },
  {
    cat:"wand",icon:"⌁",title:"Różdżki — podstawy",
    desc:"Drewno, rdzeń, długość i elastyczność.",
    body:"Różdżki są narzędziami używanymi przez czarodziejów do kierowania magią. W opisach różdżkarstwa istotne są między innymi rodzaj drewna, rdzeń, długość oraz elastyczność.",
    note:"Nie każda różdżka ma szczegółowo opisane wszystkie parametry. Nie należy dopisywać niepotwierdzonych właściwości jako faktów."
  },
  {
    cat:"wand",icon:"🪶",title:"Rdzenie różdżek",
    desc:"Trzy główne rdzenie Ollivandera.",
    body:"Wśród trzech głównych rdzeni używanych przez Garricka Ollivandera znajdują się pióro feniksa, włos jednorożca i struna smoczego serca.",
    note:"Istnieją również inne rdzenie w szerszym świecie czarodziejów. Ta lista dotyczy trzech głównych rdzeni Ollivandera."
  },
  {
    cat:"wand",icon:"🌳",title:"Drewno różdżki",
    desc:"Różne gatunki drewna stosowane do tworzenia różdżek.",
    body:"W materiałach o różdżkach opisywane są różne rodzaje drewna, między innymi ostrokrzew, cis, dąb, winorośl, wierzba, jesion i klon.",
    note:"Drewno różdżki Harry'ego to ostrokrzew, a Voldemorta — cis. Nie oznacza to, że każda różdżka z danego drewna ma identyczne cechy."
  },
  {
    cat:"world",icon:"🪄",title:"Czarodzieje i mugole",
    desc:"Dwa światy funkcjonujące obok siebie.",
    body:"W świecie Harry'ego Pottera czarodzieje żyją obok społeczności niemagicznej, określanej w brytyjskim angielskim jako Muggles (mugole). Świat czarodziejów posiada własne instytucje, miejsca i zwyczaje.",
    note:"Szczegóły dotyczące społeczności zależą od okresu i miejsca."
  },
  {
    cat:"world",icon:"🧪",title:"Przedmioty nauczane w Hogwarcie",
    desc:"Przykładowe przedmioty szkolne.",
    body:"W Hogwarcie uczniowie poznają między innymi zaklęcia, transmutację, eliksiry, zielarstwo, astronomię, historię magii i obronę przed czarną magią.",
    note:"Plan zajęć i dostępność przedmiotów mogą zależeć od roku nauki."
  }
];

const categoryNames = {
  name:"Imię i nazwisko",birth:"Data urodzenia i wiek",house:"Dom Hogwartu",
  wand:"Różdżka",appearance:"Wygląd",personality:"Charakter",
  history:"Historia",interests:"Zainteresowania"
};

const categoryDescriptions = {
  name:"nameDesc",birth:"birthDesc",house:"houseDesc",wand:"wandDesc",
  appearance:"appearanceDesc",personality:"personalityDesc",
  history:"historyDesc",interests:"interestsDesc"
};

function tr(key){return I18N[lang][key] || I18N.pl[key] || key}
function saveSelections(){localStorage.setItem("wa-selections",JSON.stringify(selections))}
function saveNotes(){localStorage.setItem("wa-notes",notes);$("#saveStatus").textContent=tr("saved")}
function showToast(message){
  const el=$("#toast");el.textContent=message;el.classList.add("show");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2200);
}
function escapeHTML(value){
  return String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}
function updateStaticText(){
  document.documentElement.lang=lang;
  $$("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(I18N[lang][key])el.innerHTML=I18N[lang][key];
  });
  $$("[data-placeholder]").forEach(el=>el.placeholder=tr(el.dataset.placeholder));
  $("#languageToggle").textContent=lang==="pl"?"EN":"PL";
  $("#characterNotes").value=notes;
  renderCategoryMenu();renderCategory();renderSummary();renderFilters();renderArticles();
}
function showPage(name){
  $$(".page").forEach(p=>p.classList.toggle("active",p.id==="page-"+name));
  $$(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===name));
  $("#mainNav").classList.remove("open");
  window.scrollTo({top:0,behavior:"smooth"});
}
$$("[data-page]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.page)));
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>showPage(b.dataset.go)));

$("#languageToggle").addEventListener("click",()=>{
  lang=lang==="pl"?"en":"pl";localStorage.setItem("wa-language",lang);updateStaticText();
});
$("#themeToggle").addEventListener("click",()=>{
  theme=theme==="dark"?"light":"dark";document.body.classList.toggle("light",theme==="light");
  localStorage.setItem("wa-theme",theme);
});
$("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));

/* MENU KATEGORII */
function renderCategoryMenu(){
  $("#categoryMenu").innerHTML=categories.map((c,i)=>`
    <button class="category-button ${i===currentCategory?"active":""}" data-index="${i}">
      <span>${c.icon}</span>${tr(c.id)}
    </button>`).join("");
  $$(".category-button").forEach(b=>b.addEventListener("click",()=>{
    currentCategory=Number(b.dataset.index);renderCategory();
  }));
}

/* ZAPIS WYBORÓW */
function setSelection(id,value){
  selections[id]=value;saveSelections();renderSummary();
  showToast(tr("added"));
}
function toggleListValue(id,value){
  const list=Array.isArray(selections[id])?[...selections[id]]:[];
  const index=list.indexOf(value);
  if(index>=0)list.splice(index,1);else list.push(value);
  if(list.length)selections[id]=list;else delete selections[id];
  saveSelections();renderCategory();renderSummary();
}
function getSelectionText(value){
  if(Array.isArray(value))return value.join(", ");
  if(typeof value==="object"&&value!==null)return Object.values(value).filter(Boolean).join(" · ");
  return String(value??"");
}

/* WIDOK AKTUALNEJ KATEGORII */
function renderCategory(){
  const c=categories[currentCategory];
  $("#categoryEyebrow").textContent=String(currentCategory+1).padStart(2,"0")+" / "+String(categories.length).padStart(2,"0");
  $("#categoryTitle").textContent=tr(c.id);
  $("#categoryDescription").textContent=tr(categoryDescriptions[c.id]);
  $("#stepIndicator").textContent=String(currentCategory+1).padStart(2,"0")+" / "+String(categories.length).padStart(2,"0");
  $("#categoryProgress").style.width=((currentCategory+1)/categories.length*100)+"%";
  $("#previousCategory").disabled=currentCategory===0;
  $("#previousCategory").style.opacity=currentCategory===0?".4":"1";
  $("#nextCategory").innerHTML=currentCategory===categories.length-1?`${tr("next")} ↺`:`${tr("next")} →`;

  const renderers={
    name:renderName,birth:renderBirth,house:renderHouse,wand:renderWand,
    appearance:renderAppearance,personality:renderPersonality,
    history:renderHistory,interests:renderInterests
  };
  $("#categoryContent").innerHTML="";
  renderers[c.id]();
  renderCategoryMenu();
}
function field(label,id,value="",type="text"){
  return `<div class="field"><label for="${id}">${label}</label><input id="${id}" type="${type}" value="${escapeHTML(value||"")}"></div>`;
}
function bindInput(id,key){
  const el=$("#"+id);if(!el)return;
  el.addEventListener("input",()=>{
    const value=el.value.trim();
    if(value)selections[key]=value;else delete selections[key];
    saveSelections();renderSummary();
  });
}
function renderName(){
  const s=selections.name||{};
  $("#categoryContent").innerHTML=`
    <div class="form-row">
      ${field(tr("firstName"),"firstName",s.first||"")}
      ${field(tr("lastName"),"lastName",s.last||"")}
    </div>
    <div class="info-box"><b>${lang==="pl"?"Wskazówka":"Tip"}</b><p>${lang==="pl"?"Imiona i nazwiska mogą być autorskie. Jeśli postać należy do istniejącego rodu z książek, sprawdź chronologię i pokrewieństwo.":"Names can be original. If your character belongs to an existing book family, check chronology and relationships."}</p></div>
    <div class="custom-row"><input class="custom-input" id="fullName" placeholder="${lang==="pl"?"Lub wpisz pełne imię i nazwisko":"Or enter a full name"}"><button id="useFullName">${tr("add")}</button></div>`;
  $("#firstName").addEventListener("input",updateName);
  $("#lastName").addEventListener("input",updateName);
  $("#useFullName").addEventListener("click",()=>{
    const value=$("#fullName").value.trim();
    if(value){selections.name={first:value,last:""};saveSelections();renderCategory();renderSummary();showToast(tr("added"))}
  });
  function updateName(){
    const first=$("#firstName").value.trim(),last=$("#lastName").value.trim();
    if(first||last)selections.name={first,last};else delete selections.name;
    saveSelections();renderSummary();
  }
}
function calculateAge(birth,reference){
  if(!birth||!reference)return null;
  const b=new Date(birth+"T12:00:00"),r=new Date(reference+"T12:00:00");
  if(Number.isNaN(b.getTime())||Number.isNaN(r.getTime())||b>r)return null;
  let age=r.getFullYear()-b.getFullYear();
  if(r.getMonth()<b.getMonth()||(r.getMonth()===b.getMonth()&&r.getDate()<b.getDate()))age--;
  return age;
}
function renderBirth(){
  const s=selections.birth||{};
  $("#categoryContent").innerHTML=`
    <div class="form-row">
      ${field(tr("birthDate"),"birthDate",s.birth||"","date")}
      ${field(tr("referenceDate"),"referenceDate",s.reference||"2026-11-21","date")}
    </div>
    <div class="info-box"><b>${tr("age")}</b><p id="ageResult">${tr("ageUnknown")}</p></div>
    <div class="info-box"><b>${lang==="pl"?"Ważne przy RP":"For RP settings"}</b><p>${lang==="pl"?"Data urodzenia powinna pasować do okresu rozgrywania serwera. Jeśli akcja dzieje się w przeszłości, ustaw datę odniesienia na odpowiedni dzień.":"The date of birth should fit your server's setting. If the story takes place in the past, set the reference date accordingly."}</p></div>`;
  $("#birthDate").addEventListener("change",updateBirth);
  $("#referenceDate").addEventListener("change",updateBirth);
  updateBirth();
  function updateBirth(){
    const birth=$("#birthDate").value,reference=$("#referenceDate").value;
    const age=calculateAge(birth,reference);
    if(birth&&reference&&age===null){
      $("#ageResult").textContent=tr("invalidDate");
      delete selections.birth;
    }else if(age!==null){
      $("#ageResult").textContent=age+" "+tr("years");
      selections.birth={birth,reference,age};
    }else{
      $("#ageResult").textContent=tr("ageUnknown");
      delete selections.birth;
    }
    saveSelections();renderSummary();
  }
}
function renderHouse(){
  const selected=selections.house;
  $("#categoryContent").innerHTML=`
    <p class="subheading">${tr("houseChoice")}</p>
    <div class="option-grid">${houses.map(h=>`
      <button class="choice-card ${selected===h.name?"selected":""}" data-house="${h.name}">
        <b>${h.name}</b><small>${h.animal} · ${h.color}</small>
      </button>`).join("")}</div>
    <div id="houseDetails" class="info-box">${selected?houseInfo(selected):tr("chooseHouse")}</div>`;
  $$("[data-house]").forEach(b=>b.addEventListener("click",()=>{
    setSelection("house",b.dataset.house);renderCategory();
  }));
}
function houseInfo(name){
  const h=houses.find(x=>x.name===name);if(!h)return "";
  return `<b>${h.name} — ${h.founder}</b><p>${h.description}</p><p><strong>${tr("houseValues")}:</strong> ${h.values}</p>`;
}
function renderWand(){
  const s=selections.wand||{};
  const woodLabel=lang==="pl"?"Drewno":"Wood",coreLabel=lang==="pl"?"Rdzeń":"Core";
  $("#categoryContent").innerHTML=`
    <h3 class="subheading">${tr("wood")}</h3>
    <div class="option-grid">${wandWoods.map(w=>`
      <button class="choice-card ${s.wood===w[0]?"selected":""}" data-wood="${w[0]}">
        <b>${lang==="pl"?w[0]:w[1]}</b><small>${w[2]}</small>
      </button>`).join("")}</div>
    <h3 class="subheading">${tr("core")}</h3>
    <div class="option-grid">${wandCores.map(c=>`
      <button class="choice-card ${s.core===c[0]?"selected":""}" data-core="${c[0]}">
        <b>${lang==="pl"?c[0]:c[1]}</b><small>${c[2]}</small>
      </button>`).join("")}</div>
    <div class="form-row">
      <div class="field"><label>${tr("length")}</label><input id="wandLength" type="number" min="1" max="20" step=".25" value="${s.length||""}" placeholder="Np. 11"></div>
      <div class="field"><label>${tr("flexibility")}</label><select id="wandFlex"><option value="">—</option>${flexibilities.map(x=>`<option ${s.flex===x?"selected":""}>${x}</option>`).join("")}</select></div>
    </div>
    <div class="info-box"><b>${lang==="pl"?"O różdżkach":"About wands"}</b><p>${tr("wandNote")} Długość i elastyczność nie powinny być dobierane według wymyślonego testu osobowości.</p></div>`;
  $$("[data-wood]").forEach(b=>b.addEventListener("click",()=>updateWand("wood",b.dataset.wood)));
  $$("[data-core]").forEach(b=>b.addEventListener("click",()=>updateWand("core",b.dataset.core)));
  $("#wandLength").addEventListener("input",()=>updateWand("length",$("#wandLength").value));
  $("#wandFlex").addEventListener("change",()=>updateWand("flex",$("#wandFlex").value));
  function updateWand(key,value){
    const obj={...(selections.wand||{})};
    if(value)obj[key]=value;else delete obj[key];
    if(Object.keys(obj).length)selections.wand=obj;else delete selections.wand;
    saveSelections();renderSummary();
    if(key==="wood"||key==="core")renderCategory();
  }
}
function renderAppearance(){
  const saved=selections.appearance||{};
  $("#categoryContent").innerHTML=appearanceOptions.map((group,i)=>`
    <h3 class="subheading">${lang==="pl"?group[0]:group[1]}</h3>
    <div class="option-grid">${group[2].map(option=>`
      <button class="choice-card ${(saved[group[0]]||[]).includes(option)?"selected":""}" data-look="${i}" data-value="${option}">
        <b>${option}</b>
      </button>`).join("")}</div>`).join("")+
    `<div class="field" style="margin-top:17px"><label>${tr("appearance")}</label><textarea id="appearanceText" placeholder="${tr("appearancePlaceholder")}">${escapeHTML(saved.description||"")}</textarea></div>
    <div class="info-box"><p>${tr("appearanceNote")}</p></div>`;
  $$("[data-look]").forEach(b=>b.addEventListener("click",()=>{
    const group=appearanceOptions[Number(b.dataset.look)][0];
    const obj={...(selections.appearance||{})};const arr=[...(obj[group]||[])];
    const i=arr.indexOf(b.dataset.value);if(i>=0)arr.splice(i,1);else arr.push(b.dataset.value);
    if(arr.length)obj[group]=arr;else delete obj[group];
    selections.appearance=obj;saveSelections();renderCategory();renderSummary();
  }));
  $("#appearanceText").addEventListener("input",e=>{
    selections.appearance={...(selections.appearance||{}),description:e.target.value};
    saveSelections();renderSummary();
  });
}
function renderPersonality(){
  const saved=selections.personality||[];
  $("#categoryContent").innerHTML=`
    <p class="category-description">${tr("personalityNote")}</p>
    <div class="option-grid">${personalityOptions.map(p=>`
      <button class="choice-card ${saved.includes(p[0])?"selected":""}" data-trait="${p[0]}">
        <b>${lang==="pl"?p[0]:p[1]}</b>
      </button>`).join("")}</div>
    <div class="info-box"><b>${lang==="pl"?"Pamiętaj":"Remember"}</b><p>${lang==="pl"?"Dobra postać nie musi być idealna. Możesz połączyć np. odwagę z nieśmiałością albo ambicję z niepewnością.":"A good character does not have to be perfect. You can combine bravery with shyness or ambition with uncertainty."}</p></div>`;
  $$("[data-trait]").forEach(b=>b.addEventListener("click",()=>toggleListValue("personality",b.dataset.trait)));
}
function renderHistory(){
  const s=selections.history||{};
  $("#categoryContent").innerHTML=`
    <div class="field"><label>${tr("family")}</label><textarea id="historyFamily" placeholder="${tr("familyPlaceholder")}">${escapeHTML(s.family||"")}</textarea></div>
    <div class="field" style="margin-top:13px"><label>${tr("childhood")}</label><textarea id="historyChildhood" placeholder="${tr("childhoodPlaceholder")}">${escapeHTML(s.childhood||"")}</textarea></div>
    <div class="field" style="margin-top:13px"><label>${tr("past")}</label><textarea id="historyPast" placeholder="${tr("pastPlaceholder")}">${escapeHTML(s.past||"")}</textarea></div>
    <div class="info-box"><b>${lang==="pl"?"Zgodność z chronologią":"Chronology check"}</b><p>${lang==="pl"?"Jeżeli Twoja postać jest spokrewniona z postacią kanoniczną, sprawdź daty urodzenia, pokolenia i wydarzenia. Nie dopisuj jej do istniejącej rodziny bez sprawdzenia chronologii.":"If your character is related to a canon character, check birth dates, generations and events. Do not add them to an existing family without checking the timeline."}</p></div>`;
  ["historyFamily","historyChildhood","historyPast"].forEach((id,i)=>{
    $("#"+id).addEventListener("input",e=>{
      const key=["family","childhood","past"][i];
      selections.history={...(selections.history||{}),[key]:e.target.value};
      saveSelections();renderSummary();
    });
  });
}
function renderInterests(){
  const saved=selections.interests||[];
  $("#categoryContent").innerHTML=`
    <p class="category-description">${tr("chooseOne")}</p>
    <div class="option-grid">${interests.map(p=>`
      <button class="choice-card ${saved.includes(p[0])?"selected":""}" data-interest="${p[0]}">
        <b>${lang==="pl"?p[0]:p[1]}</b>
      </button>`).join("")}</div>
    <div class="custom-row"><input id="customInterest" class="custom-input" placeholder="${tr("interestsPlaceholder")}"><button id="addInterest">${tr("add")}</button></div>`;
  $$("[data-interest]").forEach(b=>b.addEventListener("click",()=>toggleListValue("interests",b.dataset.interest)));
  $("#addInterest").addEventListener("click",()=>{
    const value=$("#customInterest").value.trim();if(!value)return;
    const list=[...(selections.interests||[])];if(!list.includes(value))list.push(value);
    selections.interests=list;saveSelections();renderCategory();renderSummary();showToast(tr("added"));
  });
}

/* PODSUMOWANIE */
function summaryValue(id){
  const v=selections[id];
  if(!v)return "";
  if(id==="name")return [v.first,v.last].filter(Boolean).join(" ");
  if(id==="birth")return v.age+" "+tr("years")+" · "+v.birth;
  if(id==="wand")return [
    v.wood&&`${tr("wood")}: ${v.wood}`,
    v.core&&`${tr("core")}: ${v.core}`,
    v.length&&`${tr("length")}: ${v.length}`,
    v.flex&&`${tr("flexibility")}: ${v.flex}`
  ].filter(Boolean).join(" / ");
  if(id==="history")return [v.family,v.childhood,v.past].filter(Boolean).join(" · ");
  if(id==="appearance")return [
    ...Object.entries(v).filter(([k])=>k!=="description").map(([k,a])=>k+": "+a.join(", ")),
    v.description
  ].filter(Boolean).join(" / ");
  return getSelectionText(v);
}
function renderSummary(){
  const entries=categories.map(c=>({id:c.id,label:tr(c.id),value:summaryValue(c.id)})).filter(x=>x.value);
  $("#selectionSummary").innerHTML=entries.length?entries.map(x=>`
    <div class="summary-entry"><small>${escapeHTML(x.label)}</small><b>${escapeHTML(x.value)}</b></div>`).join("")
    :`<div class="summary-empty">${tr("noSelection")}</div>`;
}
$("#copySummary").addEventListener("click",async()=>{
  const lines=categories.map(c=>{
    const value=summaryValue(c.id);return value?`${tr(c.id)}: ${value}`:null;
  }).filter(Boolean);
  const text=lines.join("\n\n")||tr("noSelection");
  try{await navigator.clipboard.writeText(text);showToast(tr("copied"))}
  catch{showToast(lang==="pl"?"Nie udało się skopiować.":"Could not copy.")}
});
$("#resetSelections").addEventListener("click",()=>{
  if(!confirm(lang==="pl"?"Czy na pewno wyczyścić wszystkie wybory?":"Clear all choices?"))return;
  selections={};saveSelections();renderCategory();renderSummary();showToast(tr("cleared"));
});
$("#previousCategory").addEventListener("click",()=>{
  if(currentCategory>0){currentCategory--;renderCategory()}
});
$("#nextCategory").addEventListener("click",()=>{
  currentCategory=(currentCategory+1)%categories.length;renderCategory();
});

/* NOTATKI */
$("#characterNotes").addEventListener("input",e=>{notes=e.target.value;saveNotes()});
$("#clearNotes").addEventListener("click",()=>{
  if(!confirm(lang==="pl"?"Wyczyścić notatki?":"Clear notes?"))return;
  notes="";$("#characterNotes").value="";saveNotes();
});

/* ENCYKLOPEDIA */
const filters=[
  ["all","Wszystkie"],["houses","Domy Hogwartu"],["school","Hogwart"],
  ["wand","Różdżki"],["world","Świat magii"]
];
let activeFilter="all";
function renderFilters(){
  $("#encyclopediaFilters").innerHTML=filters.map(f=>`
    <button class="filter-button ${activeFilter===f[0]?"active":""}" data-filter="${f[0]}">${lang==="pl"?f[1]:({all:"All",houses:"Hogwarts houses",school:"Hogwarts",wand:"Wands",world:"Wizarding world"}[f[0]])}</button>`).join("");
  $$("[data-filter]").forEach(b=>b.addEventListener("click",()=>{
    activeFilter=b.dataset.filter;renderFilters();renderArticles();
  }));
}
function renderArticles(){
  const query=$("#searchInput").value.trim().toLocaleLowerCase();
  const found=articles.filter(a=>{
    const matchCategory=activeFilter==="all"||a.cat===activeFilter;
    const content=(a.title+" "+a.desc+" "+a.body+" "+a.note).toLocaleLowerCase();
    return matchCategory&&(!query||content.includes(query));
  });
  $("#encyclopediaResults").innerHTML=found.length?found.map((a,i)=>`
    <button class="article-card" data-article="${articles.indexOf(a)}">
      <span class="article-icon">${a.icon}</span>
      <small>${a.cat==="wand"?"RÓŻDŻKI":a.cat==="houses"?"DOMY HOGWARTU":a.cat==="school"?"HOGWART":"ŚWIAT MAGII"}</small>
      <b>${a.title}</b><p>${a.desc}</p>
    </button>`).join(""):`<p class="summary-empty">${tr("noArticles")}</p>`;
  $$("[data-article]").forEach(b=>b.addEventListener("click",()=>openArticle(Number(b.dataset.article))));
}
$("#searchInput").addEventListener("input",renderArticles);
$("#clearSearch").addEventListener("click",()=>{$("#searchInput").value="";renderArticles()});
function openArticle(index){
  const a=articles[index];if(!a)return;
  $("#modalCategory").textContent=a.cat.toUpperCase();
  $("#modalTitle").textContent=a.title;
  $("#modalStatus").textContent=tr("canon");
  $("#modalBody").textContent=a.body;
  $("#modalNote").textContent=a.note;
  $("#articleModal").classList.add("open");
}
function closeModal(){$("#articleModal").classList.remove("open")}
$("#modalClose").addEventListener("click",closeModal);
$("#articleModal").addEventListener("click",e=>{if(e.target.id==="articleModal")closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

/* URUCHOMIENIE */
document.body.classList.toggle("light",theme==="light");
$("#characterNotes").value=notes;
updateStaticText();
