const start = document.getElementById("start-btn");
const next = document.getElementById("next-btn");
const question = document.getElementById("question-container");
let randomQuestions, questionIndex
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-buttons")

//const answerA = document.getElementById("A");
//const answerB = document.getElementById("B");
//const answerC = document.getElementById("C");
//const answerD = document.getElementById("D");



start.addEventListener("click", startQuiz);
next.addEventListener('click', () => {
    questionIndex++
    nextQuestion()
})


function startQuiz(){
    console.log('The quiz has started')
    start.classList.add('hide')
    randomQuestions = questionOptions.sort(() => Math.random() - .5)
    questionIndex = 0
    question.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    resetDisplay()
    displayQuestion(randomQuestions[questionIndex])
}

function resetDisplay() {
    clearStatusClass(document.body)
    next.classList.add("hide")
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function displayQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer)
        answerButtonElement.appendChild(button)
    })
}

function chooseAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > questionIndex + 1) {
        next.classList.remove("hide")
    } else {
        start.innerText = "Restart Quiz"
        start.classList.remove("hide")
    }
    next.classList.remove("hide")
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
} 

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const questionOptions = [
    {
        question: "Which vegetable is green?",
        answers: [
            {text: "tomato", incorrect: false },
            {text: "peas", correct: true },
            {text: "mushrooms", incorrect: false },
            {text: "pumpkin", incorrect: false },
        ]
    },
    {
        question: "Which vegetable is red?",
        answers: [
            {text: "tomato", correct: true },
            {text: "peas", incorrect: false },
            {text: "mushrooms", incorrect: false },
            {text: "pumpkin", incorrect: false },
        ] 
    },
    {
        question: "Which vegetable is orange?",
        answers: [
            {text: "tomato", incorrect: false },
            {text: "peas", incorrect: false },
            {text: "mushrooms", incorrect: false },
            {text: "pumpkin", correct: true },
        ] 
    },
    {
        question: "Which vegetable is actually a type of fungus?",
        answers: [
            {text: "tomato", incorrect: false },
            {text: "peas", incorrect: false },
            {text: "mushrooms", correct: true },
            {text: "pumpkin", incorrect: false },
        ] 
    }
]







