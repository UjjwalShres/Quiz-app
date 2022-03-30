const quizData = [
    {
        question: "What was most likely the first of Paul’s letters written?",
        a: "Matthew",
        b: "Mark",
        c: "Romans",
        d: "1 Thessalonians",
        correct: "d",
    },
    {
        question: "How many days did God take to create the world?",
        a: "4",
        b: "6",
        c: "7",
        d: "8",
        correct: "b",
    },
    {
        question: "How many days and nights did it rain when Noah was on the ark?",
        a: "40",
        b: "42",
        c: "50",
        d: "80",
        correct: "a",
    },
    {
        question: "How many plagues did God send on Egypt?",
        a: "9",
        b: "10",
        c: "12",
        d: "14",
        correct: "b",
    },
    {
        question: "How many books have the name John in them?",
        a: "1",
        b: "3",
        c: "4",
        d: "2",
        correct: "c",
    },
    {
        question: "What is the shortest book in the Bible?",
        a: "3 John",
        b: "2 Peter",
        c: "Jude",
        d: "Amos",
        correct: "a",
    },
    {
        question: "How many books in the Old Testament?",
        a: "33",
        b: "36",
        c: "38",
        d: "39",
        correct: "d",
    },
     {
        question: "In what language was most of the Old Testament given?",
        a: "Egyptian",
        b: "Hebrew",
        c: "Latin",
        d: "Greek",
        correct: "b",
    },
    {
        question: "How many books in the New Testament?",
        a: "30",
        b: "26",
        c: "27",
        d: "29",
        correct: "c",
    },
    {
        question: "In what language was most of the New Testament given?",
        a: "Egyptian",
        b: "Hebrew",
        c: "Latin",
        d: "Greek",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
