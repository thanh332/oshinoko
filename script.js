
// ===================================
// STERNE IM HINTERGRUND
// ===================================

const starsBackground = document.getElementById("starsBackground");

for (let i = 0; i < 65; i++) {
    const star = document.createElement("span");
    star.className = "bg-star";
    star.textContent = Math.random() > 0.5 ? "✦" : "✧";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = (Math.random() * 12 + 5) + "px";
    star.style.animationDelay = Math.random() * 4 + "s";
    starsBackground.appendChild(star);
}


// ===================================
// STAR MODE
// ===================================

const starMode = document.getElementById("starMode");

starMode.addEventListener("click", () => {
    document.body.classList.toggle("star-mode");

    if (document.body.classList.contains("star-mode")) {
        starMode.textContent = "✦ Star Mode ON";
        showToast("✨ Die Bühne beginnt zu leuchten!");
    } else {
        starMode.textContent = "✧ Star Mode";
        showToast("Der Sternenmodus ist ausgeschaltet.");
    }
});


// ===================================
// STERNENAUGEN
// ===================================

document.getElementById("heroStarButton").addEventListener("click", () => {
    document.body.classList.add("eye-mode", "star-mode");
    showToast("⭐ Die Sterne erwachen!");
});

document.getElementById("eyeButton").addEventListener("click", () => {
    document.body.classList.toggle("eye-mode");

    if (document.body.classList.contains("eye-mode")) {
        showToast("✦ Deine Sternenaugen leuchten!");
    } else {
        showToast("Die Sterne schlafen wieder.");
    }
});


// ===================================
// CHARAKTER-PROFILE
// ===================================

const characters = {
    ai: {
        name: "Ai Hoshino",
        role: "Idol · B-Komachi",
        symbol: "✦",
        description: "Ai ist das berühmte Idol der Gruppe B-Komachi und die Mutter von Aqua und Ruby. Sie ist für ihre strahlende Ausstrahlung und ihre besonderen Sternenaugen bekannt. Ihr Verhältnis zu Liebe, Wahrheit und ihrem öffentlichen Image gehört zu den zentralen Themen der Geschichte."
    },
    aqua: {
        name: "Aqua Hoshino",
        role: "Schauspieler · Zwillingsbruder",
        symbol: "◆",
        description: "Aqua ist Rubys Zwillingsbruder. Er ist ruhig, beobachtet Menschen genau und interessiert sich für die Film- und Fernsehwelt. Seine Vergangenheit und seine Suche nach Antworten beeinflussen viele seiner Entscheidungen."
    },
    ruby: {
        name: "Ruby Hoshino",
        role: "Idol · Zwillingsschwester",
        symbol: "✧",
        description: "Ruby träumt davon, ein berühmtes Idol zu werden. Sie ist begeistert von der Bühne und möchte selbst Menschen mit Musik und Auftritten erreichen. Sie bringt viel Energie und Hoffnung in die Geschichte."
    },
    kana: {
        name: "Kana Arima",
        role: "Schauspielerin",
        symbol: "★",
        description: "Kana ist eine talentierte Schauspielerin, die schon als Kind vor der Kamera stand. Sie ist ehrgeizig, direkt und manchmal unsicher. Ihre Entwicklung als Darstellerin und ihr Platz in B-Komachi sind wichtige Teile der Geschichte."
    },
    akane: {
        name: "Akane Kurokawa",
        role: "Schauspielerin",
        symbol: "◇",
        description: "Akane ist eine sehr aufmerksame Schauspielerin. Sie kann Menschen genau beobachten und ihre Eigenschaften für Rollen nutzen. Sie ist intelligent, konzentriert und nimmt ihre Arbeit sehr ernst."
    },
    mem: {
        name: "MEM-cho",
        role: "Content Creator · Idol",
        symbol: "♡",
        description: "MEM-cho ist bekannt für ihre Online-Präsenz und ihre Erfahrung mit Social Media. Sie bringt Humor und Leben in die Gruppe. Sie versteht, wie man Inhalte erstellt und eine Community erreicht."
    },
    miyako: {
        name: "Miyako Saitou",
        role: "Managerin",
        symbol: "✿",
        description: "Miyako kümmert sich um die organisatorische Seite der Familie und des Unternehmens. Mit der Zeit übernimmt sie eine wichtige Rolle für Aqua und Ruby und unterstützt deren Wege."
    },
    gotanda: {
        name: "Taishi Gotanda",
        role: "Filmregisseur",
        symbol: "▣",
        description: "Gotanda arbeitet als Regisseur und ist eine wichtige Bezugsperson für Aqua. Durch ihn lernt Aqua mehr über die Arbeit hinter der Kamera und die Filmproduktion."
    }
};

const modal = document.getElementById("characterModal");

document.querySelectorAll(".character-card").forEach(card => {
    card.querySelector(".card-button").addEventListener("click", () => {
        const character = characters[card.dataset.character];

        document.getElementById("modalName").textContent = character.name;
        document.getElementById("modalRole").textContent = character.role;
        document.getElementById("modalSymbol").textContent = character.symbol;
        document.getElementById("modalDescription").textContent = character.description;

        modal.classList.add("show");
    });
});

document.getElementById("closeModal").addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});


// ===================================
// QUIZ
// ===================================

const questions = [
    {
        question: "Wie heisst das berühmte Idol, das Aqua und Ruby zur Mutter haben?",
        answers: ["Kana Arima", "Ai Hoshino", "Akane Kurokawa"],
        correct: 1,
        info: "Richtig! Ai Hoshino ist das berühmte Idol und die Mutter der Zwillinge."
    },
    {
        question: "Wie heisst die Idol-Gruppe, zu der Ai gehört?",
        answers: ["B-Komachi", "Star Girls", "Moonlight"],
        correct: 0,
        info: "Genau! Ai ist Mitglied der Gruppe B-Komachi."
    },
    {
        question: "Was möchte Ruby werden?",
        answers: ["Regisseurin", "Ärztin", "Idol"],
        correct: 2,
        info: "Richtig! Ruby träumt davon, auf der Bühne zu stehen."
    },
    {
        question: "Wer ist eine talentierte Schauspielerin und Aquas Bekannte?",
        answers: ["Akane Kurokawa", "Miyako Saitou", "Ai Hoshino"],
        correct: 0,
        info: "Richtig! Akane ist eine sehr genaue und talentierte Schauspielerin."
    },
    {
        question: "Welches Symbol ist besonders bekannt für Oshi no Ko?",
        answers: ["Ein Blitz", "Ein Stern im Auge", "Ein goldener Ring"],
        correct: 1,
        info: "Richtig! Die Sternenaugen gehören zu den bekanntesten Symbolen."
    }
];

let questionIndex = 0;
let score = 0;
let hasAnswered = false;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const feedbackElement = document.getElementById("quizFeedback");
const nextButton = document.getElementById("nextQuestion");

function showQuestion() {
    const current = questions[questionIndex];

    questionElement.textContent = current.question;
    document.getElementById("quizProgress").textContent =
        `FRAGE ${questionIndex + 1} / ${questions.length}`;

    document.getElementById("progressBar").style.width =
        ((questionIndex + 1) / questions.length * 100) + "%";

    answersElement.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.disabled = true;
    nextButton.textContent = questionIndex === questions.length - 1
        ? "Ergebnis anzeigen ✦"
        : "Weiter →";

    hasAnswered = false;

    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer";
        button.textContent = answer;

        button.addEventListener("click", () => {
            if (hasAnswered) return;
            hasAnswered = true;

            const allButtons = answersElement.querySelectorAll("button");

            allButtons.forEach((btn, i) => {
                btn.disabled = true;

                if (i === current.correct) {
                    btn.classList.add("correct");
                }
            });

            if (index === current.correct) {
                score++;
                feedbackElement.textContent = "✦ " + current.info;
            } else {
                button.classList.add("wrong");
                feedbackElement.textContent = "Fast! " + current.info;
            }

            nextButton.disabled = false;
        });

        answersElement.appendChild(button);
    });
}

nextButton.addEventListener("click", () => {
    if (!hasAnswered) return;

    if (questionIndex < questions.length - 1) {
        questionIndex++;
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quizProgress").textContent = "DEIN ERGEBNIS";
    questionElement.textContent = `Du hast ${score} von ${questions.length} Punkten erreicht!`;
    answersElement.innerHTML = "";
    feedbackElement.textContent =
        score === 5 ? "🌟 Perfekt! Du bist ein echter Oshi-no-Ko-Superfan!" :
        score >= 3 ? "✨ Sehr gut! Du kennst dich schon richtig gut aus!" :
        "💜 Gute Arbeit! Entdecke die Website und probiere es nochmals.";

    nextButton.textContent = "Quiz wiederholen ↻";
    nextButton.disabled = false;

    document.getElementById("progressBar").style.width = "100%";
    nextButton.onclick = restartQuiz;
}

function restartQuiz() {
    questionIndex = 0;
    score = 0;
    nextButton.onclick = null;
    showQuestion();
}

showQuestion();


// ===================================
// GEHEIMNIS-BUTTON
// ===================================

const secretMessages = [
    "Ein Stern leuchtet auch dann, wenn niemand hinsieht. ✦",
    "Hinter jedem Bühnenlächeln steckt eine eigene Geschichte. 💜",
    "Vielleicht bist du selbst der nächste grosse Star. ⭐",
    "Pssst ... die besten Geschichten beginnen hinter den Kulissen. 🎬"
];

document.getElementById("secretButton").addEventListener("click", () => {
    const randomMessage =
        secretMessages[Math.floor(Math.random() * secretMessages.length)];

    document.getElementById("secretMessage").textContent = randomMessage;
    showToast("Ein kleines Geheimnis wurde entdeckt!");
});


// ===================================
// TOAST NACHRICHTEN
// ===================================

let toastTimer;

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}
