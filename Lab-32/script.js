const questions = [
    {
        question: "Qual time da NBA possui mais títulos?",
        answers: ["Boston Celtics", "Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors"],
        correctAnswer: 0
    },
    {
        question: "Qual jogador tem o maior número de pontos na história da NBA?",
        answers: ["Kareem Abdul-Jabbar", "Michael Jordan", "LeBron James", "Karl Malone"],
        correctAnswer: 2
    },
    {
        question: "Qual time foi campeão da NBA na temporada de 2020?",
        answers: [
            "Los Angeles Lakers",
            "Milwaukee Bucks",
            "Golden State Warriors",
            "Miami Heat"
        ],
        correctAnswer: 0
    },
    {
        question: "Quem é o jogador mais jovem a ter vencido o prêmio de MVP da temporada regular da NBA?",
        answers: [
            "Kevin Durant",
            "LeBron James",
            "Derrick Rose",
            "Giannis Antetokounmpo"
        ],
        correctAnswer: 2
    },
    {
        question: "Em que ano Michael Jordan se aposentou pela última vez da NBA?",
        answers: [
            "2001",
            "1999",
            "1998",
            "2003"
        ],
        correctAnswer: 3
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;