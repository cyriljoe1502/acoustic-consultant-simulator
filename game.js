const QUESTIONS_PER_GAME = 10;


// -----------------------------
// SCREEN ELEMENTS
// -----------------------------

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const resultsScreen = document.getElementById("resultsScreen");

const startButton = document.getElementById("startButton");
const resetProgressButton =
    document.getElementById("resetProgressButton");

const quitButton = document.getElementById("quitButton");
const nextButton = document.getElementById("nextButton");

const playAgainButton =
    document.getElementById("playAgainButton");

const menuButton = document.getElementById("menuButton");

const difficultySelect =
    document.getElementById("difficultySelect");


// -----------------------------
// START SCREEN ELEMENTS
// -----------------------------

const startCareerLevel =
    document.getElementById("startCareerLevel");

const startTotalXp =
    document.getElementById("startTotalXp");

const startBestScore =
    document.getElementById("startBestScore");


// -----------------------------
// GAME ELEMENTS
// -----------------------------

const questionNumberDisplay =
    document.getElementById("questionNumber");

const totalQuestionsDisplay =
    document.getElementById("totalQuestions");

const scoreDisplay = document.getElementById("score");
const accuracyDisplay = document.getElementById("accuracy");
const streakDisplay = document.getElementById("streak");
const xpEarnedDisplay = document.getElementById("xpEarned");

const progressBar = document.getElementById("progressBar");

const categoryBadge =
    document.getElementById("categoryBadge");

const difficultyBadge =
    document.getElementById("difficultyBadge");

const scenarioTitle =
    document.getElementById("scenarioTitle");

const scenarioDescription =
    document.getElementById("scenarioDescription");

const dataPanel = document.getElementById("dataPanel");

const answerContainer =
    document.getElementById("answerContainer");

const feedbackPanel =
    document.getElementById("feedbackPanel");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackExplanation =
    document.getElementById("feedbackExplanation");

const learningPoint =
    document.getElementById("learningPoint");


// -----------------------------
// RESULTS ELEMENTS
// -----------------------------

const resultIcon = document.getElementById("resultIcon");

const resultCareerTitle =
    document.getElementById("resultCareerTitle");

const resultMessage =
    document.getElementById("resultMessage");

const finalScore = document.getElementById("finalScore");
const finalCorrect = document.getElementById("finalCorrect");
const finalAccuracy = document.getElementById("finalAccuracy");

const finalBestStreak =
    document.getElementById("finalBestStreak");

const finalXp = document.getElementById("finalXp");
const finalTotalXp = document.getElementById("finalTotalXp");

const promotionPanel =
    document.getElementById("promotionPanel");

const promotionMessage =
    document.getElementById("promotionMessage");


// -----------------------------
// SAVED PROGRESS
// -----------------------------

let savedProgress = loadProgress();


// -----------------------------
// GAME STATE
// -----------------------------

let activeQuestions = [];
let currentQuestionIndex = 0;

let score = 0;
let correctAnswers = 0;

let streak = 0;
let bestStreak = 0;

let xpEarned = 0;
let answerSelected = false;

let careerAtStart = getCareerLevel(savedProgress.totalXp);


// -----------------------------
// LOAD SAVED PROGRESS
// -----------------------------

function loadProgress() {

    const storedProgress =
        localStorage.getItem("acousticConsultantProgress");

    if (!storedProgress) {

        return {
            totalXp: 0,
            bestScore: 0,
            gamesCompleted: 0
        };
    }

    try {

        const parsedProgress = JSON.parse(storedProgress);

        return {
            totalXp: Number(parsedProgress.totalXp) || 0,
            bestScore: Number(parsedProgress.bestScore) || 0,
            gamesCompleted:
                Number(parsedProgress.gamesCompleted) || 0
        };

    } catch (error) {

        return {
            totalXp: 0,
            bestScore: 0,
            gamesCompleted: 0
        };
    }
}


// -----------------------------
// SAVE PROGRESS
// -----------------------------

function saveProgress() {

    localStorage.setItem(
        "acousticConsultantProgress",
        JSON.stringify(savedProgress)
    );
}


// -----------------------------
// CAREER LEVEL
// -----------------------------

function getCareerLevel(totalXp) {

    if (totalXp >= 1500) {
        return "Principal Acoustic Consultant";
    }

    if (totalXp >= 800) {
        return "Senior Acoustic Consultant";
    }

    if (totalXp >= 300) {
        return "Acoustic Consultant";
    }

    return "Graduate Acoustic Consultant";
}


// -----------------------------
// SHOW SCREEN
// -----------------------------

function showScreen(screenToShow) {

    const screens = [
        startScreen,
        gameScreen,
        resultsScreen
    ];

    screens.forEach(function (screen) {
        screen.classList.remove("active");
    });

    screenToShow.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// -----------------------------
// SHUFFLE ARRAY
// -----------------------------

function shuffleArray(items) {

    const shuffledItems = [...items];

    for (
        let index = shuffledItems.length - 1;
        index > 0;
        index--
    ) {

        const randomIndex =
            Math.floor(Math.random() * (index + 1));

        const temporaryItem = shuffledItems[index];

        shuffledItems[index] =
            shuffledItems[randomIndex];

        shuffledItems[randomIndex] =
            temporaryItem;
    }

    return shuffledItems;
}


// -----------------------------
// START GAME
// -----------------------------

function startGame() {

    const selectedDifficulty = difficultySelect.value;

    let availableQuestions;

    if (selectedDifficulty === "mixed") {

        availableQuestions = [...questionBank];

    } else {

        availableQuestions = questionBank.filter(
            function (question) {
                return question.difficulty === selectedDifficulty;
            }
        );
    }

    activeQuestions =
        shuffleArray(availableQuestions)
            .slice(0, QUESTIONS_PER_GAME);

    currentQuestionIndex = 0;

    score = 0;
    correctAnswers = 0;

    streak = 0;
    bestStreak = 0;

    xpEarned = 0;
    answerSelected = false;

    careerAtStart =
        getCareerLevel(savedProgress.totalXp);

    totalQuestionsDisplay.textContent =
        activeQuestions.length;

    updateDashboard();

    showScreen(gameScreen);

    displayQuestion();
}


// -----------------------------
// DISPLAY QUESTION
// -----------------------------

function displayQuestion() {

    answerSelected = false;

    const currentQuestion =
        activeQuestions[currentQuestionIndex];

    questionNumberDisplay.textContent =
        currentQuestionIndex + 1;

    categoryBadge.textContent =
        currentQuestion.category;

    difficultyBadge.textContent =
        capitaliseWord(currentQuestion.difficulty);

    difficultyBadge.className =
        "difficulty-badge " +
        currentQuestion.difficulty;

    scenarioTitle.textContent =
        currentQuestion.title;

    scenarioDescription.textContent =
        currentQuestion.description;

    displayData(currentQuestion.data);

    displayAnswers(currentQuestion.answers);

    feedbackPanel.classList.add("hidden");

    const progressPercentage =
        ((currentQuestionIndex + 1) /
            activeQuestions.length) * 100;

    progressBar.style.width =
        progressPercentage + "%";
}


// -----------------------------
// DISPLAY DATA
// -----------------------------

function displayData(dataItems) {

    dataPanel.innerHTML = "";

    dataItems.forEach(function (item) {

        const dataCard =
            document.createElement("div");

        dataCard.className = "data-card";

        const label =
            document.createElement("span");

        label.textContent = item.label;

        const value =
            document.createElement("strong");

        value.textContent = item.value;

        dataCard.appendChild(label);
        dataCard.appendChild(value);

        dataPanel.appendChild(dataCard);
    });
}


// -----------------------------
// DISPLAY ANSWERS
// -----------------------------

function displayAnswers(answers) {

    answerContainer.innerHTML = "";

    answers.forEach(function (answer, index) {

        const answerButton =
            document.createElement("button");

        answerButton.className = "answer-button";

        const answerLetter =
            String.fromCharCode(65 + index);

        answerButton.innerHTML =
            "<span class='answer-letter'>" +
            answerLetter +
            "</span>" +
            "<span>" +
            answer +
            "</span>";

        answerButton.addEventListener(
            "click",
            function () {
                selectAnswer(index);
            }
        );

        answerContainer.appendChild(answerButton);
    });
}


// -----------------------------
// SELECT ANSWER
// -----------------------------

function selectAnswer(selectedIndex) {

    if (answerSelected) {
        return;
    }

    answerSelected = true;

    const currentQuestion =
        activeQuestions[currentQuestionIndex];

    const answerButtons =
        answerContainer.querySelectorAll(
            ".answer-button"
        );

    const isCorrect =
        selectedIndex === currentQuestion.correctAnswer;

    answerButtons.forEach(
        function (button, index) {

            button.disabled = true;

            if (index === currentQuestion.correctAnswer) {
                button.classList.add("correct-answer");
            }

            if (
                index === selectedIndex &&
                !isCorrect
            ) {
                button.classList.add("incorrect-answer");
            }
        }
    );

    if (isCorrect) {

        handleCorrectAnswer();

    } else {

        handleIncorrectAnswer();
    }

    feedbackExplanation.textContent =
        currentQuestion.explanation;

    learningPoint.innerHTML =
        "<strong>Learning point:</strong> " +
        currentQuestion.learningPoint;

    feedbackPanel.classList.remove("hidden");

    updateDashboard();
}


// -----------------------------
// CORRECT ANSWER
// -----------------------------

function handleCorrectAnswer() {

    correctAnswers++;

    streak++;

    bestStreak =
        Math.max(bestStreak, streak);

    const multiplier =
        getStreakMultiplier(streak);

    const questionPoints =
        100 * multiplier;

    const questionXp =
        20 + ((multiplier - 1) * 5);

    score += questionPoints;
    xpEarned += questionXp;

    feedbackPanel.className =
        "feedback-panel correct-feedback";

    feedbackTitle.textContent =
        "Correct assessment";

    feedbackTitle.innerHTML +=
        " · +" +
        questionPoints +
        " points";
}


// -----------------------------
// INCORRECT ANSWER
// -----------------------------

function handleIncorrectAnswer() {

    streak = 0;

    xpEarned += 5;

    feedbackPanel.className =
        "feedback-panel incorrect-feedback";

    feedbackTitle.textContent =
        "Not quite";
}


// -----------------------------
// STREAK MULTIPLIER
// -----------------------------

function getStreakMultiplier(currentStreak) {

    if (currentStreak >= 7) {
        return 2;
    }

    if (currentStreak >= 4) {
        return 1.5;
    }

    return 1;
}


// -----------------------------
// NEXT QUESTION
// -----------------------------

function nextQuestion() {

    currentQuestionIndex++;

    if (
        currentQuestionIndex >=
        activeQuestions.length
    ) {

        finishGame();

        return;
    }

    displayQuestion();
}


// -----------------------------
// UPDATE DASHBOARD
// -----------------------------

function updateDashboard() {

    scoreDisplay.textContent = score;

    streakDisplay.textContent = streak;

    xpEarnedDisplay.textContent = xpEarned;

    const questionsAnswered =
        currentQuestionIndex +
        (answerSelected ? 1 : 0);

    let accuracy = 0;

    if (questionsAnswered > 0) {

        accuracy = Math.round(
            (correctAnswers / questionsAnswered) * 100
        );
    }

    accuracyDisplay.textContent =
        accuracy + "%";
}


// -----------------------------
// FINISH GAME
// -----------------------------

function finishGame() {

    const totalQuestions =
        activeQuestions.length;

    const accuracy = Math.round(
        (correctAnswers / totalQuestions) * 100
    );

    savedProgress.totalXp += xpEarned;

    savedProgress.gamesCompleted++;

    if (score > savedProgress.bestScore) {
        savedProgress.bestScore = score;
    }

    saveProgress();

    const careerAfterGame =
        getCareerLevel(savedProgress.totalXp);

    finalScore.textContent = score;

    finalCorrect.textContent =
        correctAnswers + " / " + totalQuestions;

    finalAccuracy.textContent =
        accuracy + "%";

    finalBestStreak.textContent =
        bestStreak;

    finalXp.textContent =
        xpEarned;

    finalTotalXp.textContent =
        savedProgress.totalXp;

    resultCareerTitle.textContent =
        careerAfterGame;

    setResultMessage(accuracy);

    if (careerAfterGame !== careerAtStart) {

        promotionPanel.classList.remove("hidden");

        promotionMessage.textContent =
            "You have progressed from " +
            careerAtStart +
            " to " +
            careerAfterGame +
            ".";

    } else {

        promotionPanel.classList.add("hidden");
    }

    updateStartScreen();

    showScreen(resultsScreen);
}


// -----------------------------
// RESULT MESSAGE
// -----------------------------

function setResultMessage(accuracy) {

    if (accuracy === 100) {

        resultIcon.textContent = "🏆";

        resultMessage.textContent =
            "Excellent work. Every assessment decision was correct.";

        return;
    }

    if (accuracy >= 80) {

        resultIcon.textContent = "📈";

        resultMessage.textContent =
            "Strong performance. The project review was completed with good technical accuracy.";

        return;
    }

    if (accuracy >= 60) {

        resultIcon.textContent = "📋";

        resultMessage.textContent =
            "Project completed. Review the explanations for the scenarios that were answered incorrectly.";

        return;
    }

    resultIcon.textContent = "📚";

    resultMessage.textContent =
        "Further technical review is recommended. Try another project and use the learning points after each answer.";
}


// -----------------------------
// UPDATE START SCREEN
// -----------------------------

function updateStartScreen() {

    startCareerLevel.textContent =
        getCareerLevel(savedProgress.totalXp);

    startTotalXp.textContent =
        savedProgress.totalXp;

    startBestScore.textContent =
        savedProgress.bestScore;
}


// -----------------------------
// CAPITALISE WORD
// -----------------------------

function capitaliseWord(word) {

    return (
        word.charAt(0).toUpperCase() +
        word.slice(1)
    );
}


// -----------------------------
// RESET PROGRESS
// -----------------------------

function resetProgress() {

    const resetConfirmed =
        window.confirm(
            "Reset all saved XP, career progress and high scores?"
        );

    if (!resetConfirmed) {
        return;
    }

    localStorage.removeItem(
        "acousticConsultantProgress"
    );

    savedProgress = {
        totalXp: 0,
        bestScore: 0,
        gamesCompleted: 0
    };

    updateStartScreen();
}


// -----------------------------
// BUTTON EVENTS
// -----------------------------

startButton.addEventListener(
    "click",
    startGame
);

nextButton.addEventListener(
    "click",
    nextQuestion
);

playAgainButton.addEventListener(
    "click",
    startGame
);

menuButton.addEventListener(
    "click",
    function () {
        updateStartScreen();
        showScreen(startScreen);
    }
);

quitButton.addEventListener(
    "click",
    function () {

        const exitConfirmed =
            window.confirm(
                "Exit the current project? Current progress will be lost."
            );

        if (exitConfirmed) {
            showScreen(startScreen);
        }
    }
);

resetProgressButton.addEventListener(
    "click",
    resetProgress
);


// -----------------------------
// INITIAL SETUP
// -----------------------------

updateStartScreen();

showScreen(startScreen);