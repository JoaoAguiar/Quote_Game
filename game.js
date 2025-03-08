/**
 * Quote Game - Main Game Logic
 * Handles question management, user interaction, scoring, and game flow
 */

/**
 * Collection of quotes with their sources
 * Each quote object contains:
 * - question: The actual quote text
 * - optionA: Text for first option (Jesus Christ)
 * - optionB: Text for second option (Gustavo Santos)
 * - correctOption: Identifier for the correct answer ("optionA" or "optionB")
 */
const quotes = [
    {
        question: "'For what shall it profit a man, if he gain the whole world, and suffer the loss of his soul?'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'The present, if we divide the word in two, is a pre-feel. It is before feeling'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'And know that I am with you always; yes, to the end of time'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'The love of my life is me.'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'So I say to you, Ask and it will be given to you; search, and you will find; knock, and the door will be opened for you'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'There are 3 times, past, present and future, right? Then there is now. The now is not the present, I come to say that in my 5th book called 'Grab the Now''",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'But I say to you, Love your enemies and pray for those who persecute you, so that you may be sons of your Father'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'We cannot feel and think at the same time. Either you think or feel'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'Give to everyone who begs from you; and of him who takes away your goods do not ask them again. And as you wish that men would do to you, do so to them.'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'If you are kissing someone, in principle you will be feeling that emotion, but if you are kissing someone and your mind takes you to what you have to do tomorrow, your tongue walks around but you don't feel anything'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'Behold, I stand at the door and knock. If anyone hears my voice and opens the door, I will come in to him and eat with him, and he with me'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'Our mind is called mind because it lies to us every day'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'It is easier for a camel to go through the eye of a needle than for a rich man to enter the kingdom'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'People have expectations, certainties, that that will happen. Result, nothing happens, you get beaten and they deserve it'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'And, behold, I come quickly; and my reward is with Me, to give every man according as his work shall be. I am Alpha and Omega, the beginning and the end, the first and the last.'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'Living attached to the past is like breathing through a fan, it's not you who do it, it's something or someone who does it for you'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'Do not be anxious about tomorrow, for tomorrow will be anxious for itself. Let the day's own trouble be sufficient for the day'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'Your energy is like a stock portfolio: you must know how to invest it, increase it and then share it'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'So I say to you, Ask and it will be given to you; search, and you will find; knock, and the door will be opened for you'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'Freedom is the ultimate exponent of self-love'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'For everyone who exalts himself will be humbled, and everyone who humbles himself will be exalted'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'The truth shakes anyone because we got used to living in the lie'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'Blessed are the merciful, for they will be shown mercy'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'The last wish of a happy person is to be the owner of reason, it doesn't have to, because yours is enough to inspire everyone around them'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'Man shall not live by bread alone, but by every word that proceeds from the mouth of God.'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'The more you complain the less respect you will have'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'If you want to be perfect, go, sell your possessions and give to the poor, and you will have treasure in heaven.'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'Only the truth carries with it the transforming force capable of taking anyone to action'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'For if you love those who love you, what reward have you? Do not even the tax collectors do the same?'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'The weight of unspoken words is heavier and more painful than the cross itself '",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'Blessed are the meek, for they will inherit the earth'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'To be like the others I prefer to assume I'm nobody'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'As the Father has loved me, so have I loved you'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'Once happiness is found it needs to be expanded and shared, otherwise it will eventually founder'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'Let the one among you who is without sin be the first to cast a stone'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'Loneliness is not and will never be the absence of others, but the lack you make of yourself'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'Love one another. As I have loved you, so you must love one another'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'There is no resurrection without trust and much less happiness if you don't trust yourself'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
    {
        question: "'Do not let your hearts be troubled. Trust in God'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionA"
    },
    {
        question: "'If there are dangerous people, it's people dominated by the ego'",
        optionA: "Jesus Christ",
        optionB: "Gustavo Santos",
        correctOption: "optionB"
    },
]

// DOM elements
const buttonA = document.getElementById("option_one");
const buttonB = document.getElementById("option_two");
const quoteDisplay = document.getElementById("display_question");
const scoreModal = document.getElementById("score_modal");
const gradePercentage = document.getElementById("grade_percentage");
const wrongAnswersElement = document.getElementById("wrong_answers");
const rightAnswersElement = document.getElementById("right_answers");

// Audio elements
const santosCorrectSound = new Audio('assets/gustavo1.mp3');
const jesusWrongSound = new Audio('assets/jesus1.mp3');
const santosWrongSound = new Audio('assets/gustavo2.mp3');
const jesusCorrectSound = new Audio('assets/jesus2.mp3');

// Game state variables
let shuffledQuotes = [];
let currentQuestionIndex = 0;
let playerScore = 0;
let wrongAttempts = 0;
const totalQuestions = 10;

/**
 * Initialize the game when page loads
 */
window.onload = function() {
    initializeGame();
};

/**
 * Set up the game by shuffling quotes and displaying the first one
 */
function initializeGame() {
    // Reset game state
    shuffledQuotes = [];
    currentQuestionIndex = 0;
    playerScore = 0;
    wrongAttempts = 0;
    
    // Get random quotes and show the first one
    shuffleQuotes();
    displayQuestion(currentQuestionIndex);
}

/**
 * Display a question to the user
 * @param {number} index - The index of the question to display
 */
function displayQuestion(index) {
    if (index >= shuffledQuotes.length) {
        console.error("Question index out of bounds");
        return;
    }

    const currentQuestion = shuffledQuotes[index];
    
    quoteDisplay.innerHTML = currentQuestion.question;
    buttonA.innerHTML = currentQuestion.optionA;
    buttonB.innerHTML = currentQuestion.optionB;
}

/**
 * Shuffle quotes and select a subset for the game
 */
function shuffleQuotes() { 
    // Create a copy of the original quotes array to avoid modifying it
    const quotesCopy = [...quotes];
    
    // Fisher-Yates shuffle algorithm
    for (let i = quotesCopy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quotesCopy[i], quotesCopy[j]] = [quotesCopy[j], quotesCopy[i]];
    }
    
    // Take the first 10 quotes
    shuffledQuotes = quotesCopy.slice(0, totalQuestions);
}

/**
 * Handle user selection and proceed to next question
 * @param {number} selection - 1 for Jesus (optionA), 2 for Santos (optionB)
 */
function handleNextQuestion(selection) {
    // Disable buttons to prevent multiple selections
    buttonA.parentElement.setAttribute('tabindex', '-1');
    buttonB.parentElement.setAttribute('tabindex', '-1');
    buttonA.parentElement.style.pointerEvents = 'none';
    buttonB.parentElement.style.pointerEvents = 'none';

    // Check answer and provide feedback
    processAnswer(selection);
    
    // Set timeout to move to the next question
    setTimeout(() => {
        // Hide feedback
        hideAnswerFeedback();
        
        // Move to next question or end game
        currentQuestionIndex++;
        
        if (currentQuestionIndex < totalQuestions) {
            displayQuestion(currentQuestionIndex);
            // Re-enable buttons
            buttonA.parentElement.setAttribute('tabindex', '0');
            buttonB.parentElement.setAttribute('tabindex', '0');
            buttonA.parentElement.style.pointerEvents = 'auto';
            buttonB.parentElement.style.pointerEvents = 'auto';
        } else {
            endGame();
        }
    }, 3000);
}

/**
 * Process the user's answer and update score
 * @param {number} selection - 1 for Jesus (optionA), 2 for Santos (optionB)
 */
function processAnswer(selection) {
    const currentQuestion = shuffledQuotes[currentQuestionIndex];
    const selectedOption = selection === 1 ? "optionA" : "optionB";
    
    if (selectedOption === currentQuestion.correctOption) {
        // Correct answer
        playerScore++;
        showAnswerFeedback(true);
        
        // Play appropriate sound
        if (selectedOption === "optionA") { // Jesus correct
            jesusCorrectSound.play();
        } else { // Santos correct
            santosCorrectSound.play();
        }
    } else {
        // Wrong answer
        wrongAttempts++;
        showAnswerFeedback(false);
        
        // Play appropriate sound
        if (selectedOption === "optionA") { // Jesus wrong
            jesusWrongSound.play();
        } else { // Santos wrong
            santosWrongSound.play();
        }
    }
}

/**
 * Show visual feedback for answer (correct/incorrect)
 * @param {boolean} isCorrect - Whether the answer was correct
 */
function showAnswerFeedback(isCorrect) {
    if (isCorrect) {
        document.getElementById('noice').style.display = "flex";
    } else {
        document.getElementById('not_noice').style.display = "flex";
    }
}

/**
 * Hide all answer feedback elements
 */
function hideAnswerFeedback() {
    document.getElementById('noice').style.display = "none";
    document.getElementById('not_noice').style.display = "none";
    
    // Stop any playing sounds
    santosCorrectSound.pause();
    santosCorrectSound.currentTime = 0;
    jesusWrongSound.pause();
    jesusWrongSound.currentTime = 0;
    santosWrongSound.pause();
    santosWrongSound.currentTime = 0;
    jesusCorrectSound.pause();
    jesusCorrectSound.currentTime = 0;
}

/**
 * End the game and display the score modal
 */
function endGame() {
    const grade = (playerScore / totalQuestions) * 100;

    // Update score display elements
    gradePercentage.innerText = grade.toFixed(0);
    wrongAnswersElement.innerText = wrongAttempts;
    rightAnswersElement.innerText = playerScore;
    
    // Show the score modal
    scoreModal.style.display = "flex";
}

/**
 * Reset the game to play again
 */
function resetGame() {
    // Hide score modal
    scoreModal.style.display = "none";
    
    // Reset game state and start over
    initializeGame();
}

// Initialize the game
initializeGame();