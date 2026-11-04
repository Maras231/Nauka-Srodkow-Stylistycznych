// Baza danych wszystkich 17 środków stylistycznych
const devicesData = [
    {
        name: "Apostrofa",
        definition: "Uroczysty zwrot do adresata, osoby, pojęcia, bóstwa, idei, przedmiotu.",
        example: "Głosie, bądź pod mym liściem [...]!",
        highlight: "Głosie",
        functions: ["Wskazuje na emocjonalny stosunek do odbiorcy", "Pozwala uzyskać podniosły charakter wypowiedzi"]
    },
    {
        name: "Inwokacja",
        definition: "Rozbudowana apostrofa, zwyczajowo rozpoczynająca epopeję, kierowana najczęściej do bóstwa, muzy.",
        example: "Litwo! Ojczyzno moja! ty jesteś jak zdrowie;\nIle cię trzeba cenić, ten tylko się dowie,\nKto cię stracił...",
        highlight: "Litwo! Ojczyzno moja!",
        functions: ["Wskazuje na emocjonalny stosunek do odbiorcy", "Pozwala uzyskać podniosły charakter wypowiedzi"]
    },
    {
        name: "Anafora",
        definition: "Powtórzenie tego samego słowa lub zwrotu na początku kolejnych wersów.",
        example: "Fraszki to wszystko czokolwiek myślemy,\nFraszki to wszystko czokolwiek czyniemy",
        highlight: "Fraszki to wszystko",
        functions: ["Podkreśla znaczenie powtarzanych słów", "Sprawia, że wypowiedź jest rytmiczna"]
    },
    {
        name: "Epitety",
        definition: "Poetyckie określenie rzeczownika, wyrażone najczęściej przymiotnikiem, imiesłowem lub innym rzeczownikiem.",
        example: "Lecz ten wódz, choć w żołnierskiej odzieży,\nJakie piękne dziewicze ma lica?",
        highlight: "żołnierskiej odzieży, Jakie piękne dziewicze",
        functions: ["Uwydatnia cechy przedmiotu lub zjawiska", "Nadaje plastyczność obrazom poetyckim", "Umożliwia wyrażenie oceny"]
    },
    {
        name: "Eufemizmy",
        definition: "Wyraz łagodzący słowa lub zwroty przykre i niestosowne.",
        example: "Niestetyż, i posąg i ona\nW jednej skrzynce zamkniona",
        highlight: "W jednej skrzynce zamkniona",
        functions: ["Pozwala ująć myśl w sposób delikatniejszy"]
    },
    {
        name: "Hiperbola",
        definition: "Wyolbrzymienie cech przedmiotów.",
        example: "Wylewa się spod skrzydła\nŚciśniona piechota\nDługą, czarną kolumną\nJako lawa błota",
        highlight: "Wylewa się spod skrzydła",
        functions: ["Zwiększa intensywność przekazu", "Buduje nastrój"]
    },
    {
        name: "Neologizm",
        definition: "Wyraz nowo utworzony, który nie istniał do tej pory w języku.",
        example: "Wylazł z rowu Dusiołek,\nJak półbabek z łoża",
        highlight: "Dusiołek, półbabek",
        functions: ["Nadaje oryginalność dziełu", "Ułatwia obrazowe wyrażenie myśli i uczuć"]
    },
    {
        name: "Ożywienie (animizacja)",
        definition: "Odmiana metafory – nadanie cech istot żywych przedmiotom nieożywionym, pojęciom abstrakcyjnym, zjawiskom przyrody.",
        example: "Słońce ostatnich kresów nieba dochodziło",
        highlight: "dochodziło",
        functions: ["Sprawia, że opis działa na wyobraźnię", "Podkreśla niezwykłość zjawiska"]
    },
    {
        name: "Porównanie",
        definition: "Zestawienie wskazujące na podobieństwo.",
        example: "Oddzielili cię, syneczku,\nOd snów, co jak motyl drżą",
        highlight: "co jak motyl drżą",
        functions: ["Uwidacznia podobieństwo zjawisk", "Eksponuje ich cechy", "Pozwala opisać coś w sposób podniosły"]
    },
    {
        name: "Porównanie homeryckie",
        definition: "Rozbudowane porównanie stosowane m.in. w epopei.",
        example: "A jako chirurg naprzód miękką rękę składa\nNa ciele chorującym, nim ostrzem raz zada;\nTak Robak wyraz bystrych oczu swych złagodził",
        highlight: "A jako chirurg... Tak Robak",
        functions: ["Uwidacznia podobieństwo zjawisk", "Eksponuje ich cechy", "Pozwala opisać coś w sposób podniosły"]
    },
    {
        name: "Powtórzenie",
        definition: "Wielokrotne użycie tego samego elementu; odmianą powtórzenia jest refren.",
        example: "Car dziwi się [...],\nCar gniewa się [...]",
        highlight: "Car",
        functions: ["Zwraca uwagę na powtarzany element", "Nadaje tekstowi rytmiczność"]
    },
    {
        name: "Przenośnia (metafora)",
        definition: "Połączenie wyrazów w taki sposób, by razem uzyskały nowe, niedosłowne znaczenie.",
        example: "Wpłynąłem na suchego przestwór oceanu",
        highlight: "suchego przestwór oceanu",
        functions: ["Ułatwia zrozumienie opisywanego zjawiska", "Ukazuje je w sposób obrazowy, działający na wyobraźnię"]
    },
    {
        name: "Pytanie retoryczne",
        definition: "Pytanie, które nie wymaga odpowiedzi (jest ona oczywista).",
        example: "Gdzież jest król, co na rzezie tłumy te wyprawia?",
        highlight: "Gdzież jest król, co na rzezie tłumy te wyprawia?",
        functions: ["Wzbudza ciekawość odbiorcy i zmusza go do refleksji", "Zwiększa emocjonalność wypowiedzi", "Buduje podniosły nastrój"]
    },
    {
        name: "Uosobienie (personifikacja)",
        definition: "Odmiana metafory – nadawanie cech ludzkich przedmiotom, roślinom, zwierzętom, ideom.",
        example: "Brama na wciąż otwarta przechodniom ogłasza,\nŻe gościnna, i wszystkich w gościnę zaprasza.",
        highlight: "przechodniom ogłasza, Że gościnna, i wszystkich w gościnę zaprasza",
        functions: ["Dynamizuje obraz poetycki", "Wpływa na plastyczność wypowiedzi", "Wywołuje zaskoczenie odbiorcy"]
    },
    {
        name: "Wyraz dźwiękonaśladowczy (onomatopeja)",
        definition: "Wyraz, który naśladuje dźwięki pozajęzykowe.",
        example: "Zdarto żagle, ster trysnął, ryk wód, szum zawiei",
        highlight: "ryk wód, szum zawiei",
        functions: ["Pobudza wyobraźnię słuchową", "Pozwala uzyskać melodyjność tekstu"]
    },
    {
        name: "Zdrobnienie",
        definition: "Wyraz o nacechowaniu emocjonalnym, zwykle pozytywnym, utworzony najczęściej za pomocą przyrostków -ek, -ko.",
        example: "Giezleczka tylko dała,\nA lichą tkaneczkę",
        highlight: "Giezleczka, tkaneczkę",
        functions: ["Wyraża emocjonalny stosunek nadawcy (zwykle pozytywny)"]
    },
    {
        name: "Zgrubienie",
        definition: "Wyraz o nacechowaniu emocjonalnym, zwykle negatywnym, utworzony m.in. za pomocą przyrostków -uch, -us, -sko.",
        example: "Poległ cielsko tobołem\nMiędzy szkapą a wołem",
        highlight: "cielsko",
        functions: ["Podkreśla emocjonalny stosunek nadawcy (zwykle negatywny)"]
    }
];

// Pomocnicza funkcja do podświetlania tekstu w przykładzie
function getHighlightedExample(item) {
    let ex = item.example;
    if (!item.highlight) return ex;
    
    const phrases = item.highlight.split(', ');
    phrases.forEach(p => {
        if (p.includes('...')) {
            const parts = p.split('...');
            if (ex.includes(parts[0]) && ex.includes(parts[1])) {
                ex = ex.replace(parts[0], `<span class="highlight-word">${parts[0]}</span>`);
                ex = ex.replace(parts[1], `<span class="highlight-word">${parts[1]}</span>`);
            }
        } else if (ex.includes(p)) {
            ex = ex.replaceAll(p, `<span class="highlight-word">${p}</span>`);
        }
    });
    return ex;
}

// --- NAWIGACJA ZAKŁADEK ---
const navButtons = document.querySelectorAll('.nav-btn');
const tabContents = document.querySelectorAll('.tab-content');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        navButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(s => s.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(`${targetTab}-section`).classList.add('active');

        if (targetTab === 'matching') initMatchingGame();
        if (targetTab === 'typing') initTypingGame();
    });
});

// --- 1. BAZA WIEDZY ---
const cardsContainer = document.getElementById('cards-container');
const searchInput = document.getElementById('search-input');

function renderCards(filterText = '') {
    cardsContainer.innerHTML = '';
    const filtered = devicesData.filter(item => 
        item.name.toLowerCase().includes(filterText.toLowerCase()) ||
        item.definition.toLowerCase().includes(filterText.toLowerCase())
    );

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'stylistic-card';
        const functionsList = item.functions.map(f => `<li>${f}</li>`).join('');

        card.innerHTML = `
            <div>
                <h3>${item.name}</h3>
                <p class="card-definition">${item.definition}</p>
                <div class="card-section-title">Przykład:</div>
                <div class="card-example">"${item.example}"</div>
            </div>
            <div>
                <div class="card-section-title">Funkcja w tekście:</div>
                <div class="card-function"><ul>${functionsList}</ul></div>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => renderCards(e.target.value));
renderCards();


// --- 2. FISZKI ---
let fcIndex = 0;
const flashcard = document.getElementById('flashcard');
const fcFrontTitle = document.getElementById('fc-front-title');
const fcBackDef = document.getElementById('fc-back-def');
const fcBackEx = document.getElementById('fc-back-ex');
const fcCurrent = document.getElementById('fc-current');
const fcTotal = document.getElementById('fc-total');

document.getElementById('fc-total').textContent = devicesData.length;

function updateFlashcard() {
    flashcard.classList.remove('flipped');
    const item = devicesData[fcIndex];
    fcFrontTitle.textContent = item.name;
    fcBackDef.textContent = item.definition;
    fcBackEx.textContent = `"${item.example}"`;
    fcCurrent.textContent = fcIndex + 1;
}

flashcard.addEventListener('click', () => flashcard.classList.toggle('flipped'));
document.getElementById('fc-flip-btn').addEventListener('click', (e) => {
    e.stopPropagation();
    flashcard.classList.toggle('flipped');
});

document.getElementById('fc-next-btn').addEventListener('click', () => {
    fcIndex = (fcIndex + 1) % devicesData.length;
    updateFlashcard();
});

document.getElementById('fc-prev-btn').addEventListener('click', () => {
    fcIndex = (fcIndex - 1 + devicesData.length) % devicesData.length;
    updateFlashcard();
});

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.getElementById('flashcards-section').classList.contains('active')) {
        e.preventDefault();
        flashcard.classList.toggle('flipped');
    }
});
updateFlashcard();


// --- 3. QUIZ WIELOKROTNY ---
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;

const quizStartBox = document.getElementById('quiz-start-box');
const quizActiveBox = document.getElementById('quiz-active-box');
const quizResultBox = document.getElementById('quiz-result-box');
const optionsContainer = document.getElementById('options-container');
const feedbackMessage = document.getElementById('feedback-message');
const nextQuestionBtn = document.getElementById('next-question-btn');

document.getElementById('start-quiz-btn').addEventListener('click', startQuiz);
document.getElementById('restart-quiz-btn').addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion();
});

function startQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    const shuffled = [...devicesData].sort(() => 0.5 - Math.random());
    currentQuestions = shuffled.slice(0, 10).map(item => {
        const type = Math.random() > 0.5 ? 'example' : 'definition';
        const wrong = devicesData.filter(d => d.name !== item.name).sort(() => 0.5 - Math.random()).slice(0, 3).map(d => d.name);
        const options = [...wrong, item.name].sort(() => 0.5 - Math.random());
        return {
            correctAnswer: item.name,
            definition: item.definition,
            highlightedExample: getHighlightedExample(item),
            prompt: type === 'example' ? `"${item.example}"` : item.definition,
            typeLabel: type === 'example' ? 'Wskaż środek dla przykładu:' : 'Wskaż środek dla definicji:',
            options
        };
    });

    quizStartBox.classList.add('hidden');
    quizResultBox.classList.add('hidden');
    quizActiveBox.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = currentQuestions[currentQuestionIndex];
    document.getElementById('question-tracker').textContent = `Pytanie ${currentQuestionIndex + 1} / 10`;
    document.getElementById('score-tracker').textContent = `Punkty: ${score}`;
    document.getElementById('question-type').textContent = q.typeLabel;
    document.getElementById('question-text').textContent = q.prompt;

    optionsContainer.innerHTML = '';
    feedbackMessage.classList.add('hidden');
    nextQuestionBtn.classList.add('hidden');

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleQuizAnswer(opt, q, btn));
        optionsContainer.appendChild(btn);
    });
}

function handleQuizAnswer(selected, q, btn) {
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    const correct = q.correctAnswer;
    const explanationText = `<strong>${correct}</strong> – ${q.definition}<br><em>Przykład z podświetleniem:</em> "${q.highlightedExample}"`;

    if (selected === correct) {
        score++;
        btn.classList.add('correct');
        feedbackMessage.innerHTML = `<div>Poprawna odpowiedź!</div><div class="explanation-box">${explanationText}</div>`;
        feedbackMessage.className = 'feedback-msg correct';
    } else {
        btn.classList.add('wrong');
        buttons.forEach(b => { if (b.textContent === correct) b.classList.add('correct'); });
        feedbackMessage.innerHTML = `<div>Błąd! Poprawna odpowiedź to: <strong>${correct}</strong></div><div class="explanation-box">${explanationText}</div>`;
        feedbackMessage.className = 'feedback-msg wrong';
    }

    feedbackMessage.classList.remove('hidden');
    document.getElementById('score-tracker').textContent = `Punkty: ${score}`;

    if (currentQuestionIndex < currentQuestions.length - 1) {
        nextQuestionBtn.classList.remove('hidden');
    } else {
        setTimeout(showQuizResults, 3500);
    }
}

function showQuizResults() {
    quizActiveBox.classList.add('hidden');
    quizResultBox.classList.remove('hidden');
    document.getElementById('final-score-text').textContent = `Twój wynik: ${score} / 10`;
    document.getElementById('final-message').textContent = score >= 8 ? 'Świetny wynik!' : 'Warto jeszcze powtórzyć materiał.';
}


// --- 4. DOPASUJ PARY ---
let matchingPairs = [];
let selectedTerm = null;
let matchedCount = 0;

const termsContainer = document.getElementById('matching-terms');
const examplesContainer = document.getElementById('matching-examples');

function initMatchingGame() {
    matchedCount = 0;
    selectedTerm = null;
    document.getElementById('matching-score').textContent = `Dopasowano: 0 / 5`;
    
    const subset = [...devicesData].sort(() => 0.5 - Math.random()).slice(0, 5);
    matchingPairs = subset;

    const terms = subset.map(d => d.name).sort(() => 0.5 - Math.random());
    const examples = subset.map(d => ({ name: d.name, example: d.example })).sort(() => 0.5 - Math.random());

    termsContainer.innerHTML = '';
    examplesContainer.innerHTML = '';

    terms.forEach(term => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.textContent = term;
        div.addEventListener('click', () => selectTerm(div, term));
        termsContainer.appendChild(div);
    });

    examples.forEach(item => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.textContent = `"${item.example}"`;
        div.addEventListener('click', () => selectExample(div, item.name));
        examplesContainer.appendChild(div);
    });
}

function selectTerm(element, term) {
    if (element.classList.contains('matched')) return;
    termsContainer.querySelectorAll('.match-item').forEach(el => el.classList.remove('selected'));
    element.classList.add('selected');
    selectedTerm = { element, term };
}

function selectExample(element, termName) {
    if (element.classList.contains('matched') || !selectedTerm || selectedTerm.element.classList.contains('wrong')) return;

    if (selectedTerm.term === termName) {
        selectedTerm.element.classList.remove('selected');
        selectedTerm.element.classList.add('matched');
        element.classList.add('matched');
        selectedTerm = null;
        matchedCount++;
        document.getElementById('matching-score').textContent = `Dopasowano: ${matchedCount} / 5`;
    } else {
        const termElement = selectedTerm.element;
        termElement.classList.remove('selected');
        termElement.classList.add('wrong');
        element.classList.add('wrong');
        selectedTerm = null;

        setTimeout(() => {
            termElement.classList.remove('wrong');
            element.classList.remove('wrong');
        }, 600);
    }
}

document.getElementById('reset-matching-btn').addEventListener('click', initMatchingGame);


// --- 5. WPISZ NAZWĘ ---
let typingCurrent = null;
const typingInput = document.getElementById('typing-input');
const typingPrompt = document.getElementById('typing-prompt');
const typingFeedback = document.getElementById('typing-feedback');
const typingSubmitBtn = document.getElementById('typing-submit-btn');
const typingNextBtn = document.getElementById('typing-next-btn');

function initTypingGame() {
    typingCurrent = devicesData[Math.floor(Math.random() * devicesData.length)];
    typingPrompt.textContent = `"${typingCurrent.example}"`;
    typingInput.value = '';
    typingInput.disabled = false;
    typingFeedback.classList.add('hidden');
    typingNextBtn.classList.add('hidden');
    typingSubmitBtn.classList.remove('hidden');
}

typingSubmitBtn.addEventListener('click', checkTypingAnswer);
typingInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkTypingAnswer();
});

function checkTypingAnswer() {
    const userVal = typingInput.value.trim().toLowerCase();
    const correctVal = typingCurrent.name.toLowerCase();
    const cleanCorrect = correctVal.split('(')[0].trim();
    const highlightedEx = getHighlightedExample(typingCurrent);
    const explanationText = `<strong>${typingCurrent.name}</strong> – ${typingCurrent.definition}<br><em>Przykład z podświetleniem:</em> "${highlightedEx}"`;

    if (userVal === cleanCorrect || userVal === correctVal) {
        typingFeedback.innerHTML = `<div>Dobrze! Świetna robota.</div><div class="explanation-box">${explanationText}</div>`;
        typingFeedback.className = 'feedback-msg correct';
    } else {
        typingFeedback.innerHTML = `<div>Błąd! Poprawna nazwa to: <strong>${typingCurrent.name}</strong></div><div class="explanation-box">${explanationText}</div>`;
        typingFeedback.className = 'feedback-msg wrong';
    }
    
    typingFeedback.classList.remove('hidden');
    typingInput.disabled = true;
    typingSubmitBtn.classList.add('hidden');
    typingNextBtn.classList.remove('hidden'); // Przycisk "Następny przykład" pokazuje się teraz zawsze (zarówno przy dobrej, jak i złej odpowiedzi)
}

typingNextBtn.addEventListener('click', initTypingGame);