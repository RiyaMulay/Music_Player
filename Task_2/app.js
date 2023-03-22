const quizData = [{
        question: "How many states in India?",
        a: "27",
        b: "29",
        c: "25",
        d: "28",
        correct: "d",
    },
    {
        question: "Who opened the first school for girls in India?",
        a: "Mother Teresa",
        b: "Savitribai Phule",
        c: "Ahilya Bai Holkar",
        d: "Indira Gandhi",
        correct: "b",
    },
    {
        question: "Pune lies in which state?",
        a: "Kerala",
        b: "UP",
        c: "Maharashtra",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "Who is the Prime Minister?",
        a: "Narendra Modi",
        b: "Rahul Gandhi",
        c: "Smriti Irani",
        d: "Amit Shah",
        correct: "a",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> You've scored ${correct} / ${total} !</h3>
        </div>
    `
}
loadQuestion(index);

// for same page link
function next_pg(event){
    event.preventDefault;
}
document.getElementsByClassName("quiz").addEventListener("click",next_pg);