// array for the generated fortune
const array = [
    "True wisdom comes not from knowledge, but from understanding",
        "Just one small positive thought in the morning can change your whole day",
        "Every day is a second chance",
        "You must be the change you wish to see in the world",
        "The greatest risk is not taking one.",
        "Believe in yourself and all that you are.",
        "Success is not final, failure is not fatal: it is the courage to continue that counts",
        "Love yourself first and everything else falls into line",
        "You only live once, but if you do it right, once is enough",
        "Your life does not get better by chance, it gets better by change."
];

// fortune generate function
function displayFortune(array) {
    
    const randomIndex = Math.floor(Math.random() * array.length);
    const randomElement = array[randomIndex];
    document.getElementById('fortune-text').innerText = randomElement;
    


    // var myArray = [
    //     "Apples",
    //     "Bananas",
    //     "Pears"
    //   ];
      
    //   var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
    //   document.getElementById('fortune-text').innerHTML = randomItem;
    
}


// for convert currency script 
const conversionRates = {
    usd: { usd: 1, gbp: 2.03032, cad: 1.01941, eur: 1.41544, aud: 0.88297, },
    gbp: { usd: 0.49246, gbp: 1, cad: 0.50221, eur: 0.69714, aud: 0.43497, },
    cad: { usd: 0.98054, gbp: 1.99169, cad: 1, eur: 1.38814, aud: 0.86613, },
    eur: { usd: 0.70641, gbp: 1.43448, cad: 0.72037, eur: 1, aud: 0.62382, },
    aud: { usd: 1.13262, gbp: 2.29964, cad: 1.15498, eur: 1.60329, aud: 1, },
};

// convert currency function
function convertCurrency(baseCurrency) {  //usd
    const baseValue = parseFloat(document.getElementById(baseCurrency).value); // 3

    if (isNaN(baseValue)) return;

    for (let currency in conversionRates[baseCurrency]) {
        if (currency !== baseCurrency) {
            const convertedValue = (baseValue * conversionRates[baseCurrency][currency]).toFixed(5);
            document.getElementById(currency).value = convertedValue;
        };
    };
}

// quiz questions

const questions = [
    {
        question: "What is the capital of Bangladesh?",
        answers: ["A) Dhaka City", "B) Rajshahi City", "C) Khulna city"],
        correct: "A"
    },
    {
        question: "How many meters in a K.M?",
        answers: ["A) 200", "B) 1000", "C) 100"],
        correct: "B"
    },
    {
        question: "Who was the first person to set foot on the moon?",
        answers: ["A) Buzz Aldrin", "B) Michael Collins", "C) Neil Armstrong"],
        correct: "C"
    },
    {
        question: "Who has the most goals in International Football?",
        answers: ["A) CR7", "B) Leo Messi", "C) Harry Kane"],
        correct: "A"
    },
    {
        question: "Who is the founder of Tesla?",
        answers: ["A) Bill Gates", "B) Elon Mask", "C) Warren Buffet"],
        correct: "B"
    },
    {
        question: "Who is the founder of Tesla?",
        answers: ["A) Bill Gates", "B) Elon Mask", "C) Warren Buffet"],
        correct: "B"
    },
    {
        question: "Who is the founder of Tesla?",
        answers: ["A) Bill Gates", "B) Elon Mask", "C) Warren Buffet"],
        correct: "B"
    },
    {
        question: "Who is the founder of Tesla?",
        answers: ["A) Bill Gates", "B) Elon Mask", "C) Warren Buffet"],
        correct: "B"
    },
    {
        question: "Who is the founder of Tesla?",
        answers: ["A) Bill Gates", "B) Elon Mask", "C) Warren Buffet"],
        correct: "B"
    },
    {
        question: "Who is the founder of Tesla?",
        answers: ["A) Bill Gates", "B) Elon Mask", "C) Warren Buffet"],
        correct: "B"
    },
    
];


// make quiz logics

function startQuiz() {
    const numQuestionsInput = document.getElementById("num-questions");
    const numQuestions = parseInt(numQuestionsInput.value) || 5;

    if (numQuestions > questions.length) {
        alert(`Please select maximum 10 questions.`);
        return;
    }

    const selectedQuestions = getRandomQuestions(numQuestions);
    displayQuiz(selectedQuestions);
}

function getRandomQuestions(num) {
    const shuffledQuestions = questions.sort(() => 0.5 - Math.random());
    return shuffledQuestions.slice(0, num);
}

function displayQuiz(selectedQuestions) {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";

    selectedQuestions.forEach((q, index) => {
        const questionBlock = document.createElement("div");
        questionBlock.className = "question-block";

        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${q.question}`;

        questionBlock.appendChild(questionText);

        q.answers.forEach(answer => {
            const answerLabel = document.createElement("label");
            answerLabel.textContent = answer;

            const answerInput = document.createElement("input");
            answerInput.type = "radio";
            answerInput.name = `question-${index}`;
            answerInput.value = answer[0];

            questionBlock.appendChild(answerInput);
            questionBlock.appendChild(answerLabel);
            questionBlock.appendChild(document.createElement("br"));
        });

        quizContainer.appendChild(questionBlock);
    });

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit Quiz";
    submitButton.onclick = () => submitQuiz(selectedQuestions);

    quizContainer.appendChild(submitButton);
}

// logic after submiting the quiz
function submitQuiz(selectedQuestions) {
    let correctCount = 0;

    // loop every question and check correct or not
    selectedQuestions.forEach((q, index) => {
        const answer = document.querySelector(`input[name="question-${index}"]:checked`);
        const resultText = document.createElement("p");

        if (answer) {
            const userAnswer = answer.value;
            if (userAnswer === q.correct) {
                resultText.textContent = `Question ${index + 1}: CORRECT`;
                resultText.className = "correct";
                correctCount++;
            } else {
                resultText.textContent = `Question ${index + 1}: INCORRECT, the correct answer is ${q.correct})`;
                resultText.className = "incorrect";
            }
        } else {
            resultText.textContent = `Question ${index + 1}: No answer provided, the correct answer is ${q.correct})`;
            resultText.className = "incorrect";
        }

        document.getElementById("result-container").appendChild(resultText);
    });

    const totalQuestions = selectedQuestions.length;
    const percentage = ((correctCount / totalQuestions) * 100).toFixed(1);

    const summaryText = document.createElement("p");
    summaryText.textContent = ` ${correctCount} Questions Correct out of ${totalQuestions} questions.  (${percentage}%).`;

    document.getElementById("result-container").appendChild(summaryText);
    
}



// page reload function

window.onload = function() {
    displayFortune(array);
    
}


