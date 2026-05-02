const questions = [
    {
        scenario: "Você recebe um email aparentando ser do WhatsApp pedindo para 'confirmar sua conta' clicando em um link suspeito e informando sua senha.",
        question: "Como identificar um email de phishing?",
        options: [
            "Geralmente tem ortografia errada, links suspeitos e solicita informações sensíveis",
            "Se tem o logo da empresa, é sempre seguro",
            "Emails de phishing nunca parecem profissionais",
            "Não é possível identificar um email falso"
        ],
        correct: 0,
        feedback: "Phishing é uma técnica onde criminosos fingem ser empresas legítimas. Sempre procure por erros, links suspeitos e nunca clique em links de emails desconhecidos!"
    },
    {
        scenario: "Em um jogo online, alguém que você não conhece bem pede seu endereço 'para enviar um presente'.",
        question: "Qual informação você NUNCA deve compartilhar online?",
        options: [
            "Seu gosto musical favorito",
            "Endereço, telefone, escola, horários de rotina, documentos",
            "Seu nome de usuário",
            "A marca de seu videogame"
        ],
        correct: 1,
        feedback: "Nunca compartilhe informações pessoais com desconhecidos. Isso pode ser usado por golpistas e predadores para localizá-lo ou roubar sua identidade."
    },
    {
        scenario: "Você descobre que sua senha é muito fraca (12345 ou seu nome) e alguém entrou na sua conta, postando coisas inapropriadas em seu nome.",
        question: "Qual é a melhor prática para criar uma senha segura?",
        options: [
            "Nome + ano de nascimento",
            "Números sequenciais (123456)",
            "Combinação de letras maiúsculas, minúsculas, números e símbolos, com mínimo 8 caracteres",
            "Uma palavra simples fácil de lembrar"
        ],
        correct: 2,
        feedback: "Senhas fortes devem ter pelo menos 8 caracteres combinando letras, números e símbolos. Isso as torna muito mais difíceis de quebrar!"
    },
    {
        scenario: "Em um site de compras, alguém oferece um videogame conhecidíssimo por apenas R$ 50, muito abaixo do preço original.",
        question: "Como reconhecer um golpe online?",
        options: [
            "Preço muito abaixo do mercado, site sem informações de contato, sem criptografia",
            "Todo site de compras é seguro",
            "Se está na internet, é confiável",
            "Golpes não existem mais"
        ],
        correct: 0,
        feedback: "Se o preço parece muito bom para ser verdade, provavelmente é um golpe! Golpistas usam preços baixos para atrair vítimas incautas."
    },
    {
        scenario: "Você recebe um WhatsApp dizendo: 'Parabéns! Ganhou um iPhone 15! Clique aqui para receber'.",
        question: "O que fazer quando recebe mensagens de prêmios que não participou?",
        options: [
            "Clicar no link para confirmar o ganho",
            "Compartilhar com amigos",
            "Ignorar, bloquear e denunciar a mensagem",
            "Responder pedindo mais informações"
        ],
        correct: 2,
        feedback: "Prêmios de loterias que você não participou são 100% golpe! Não clique em links suspeitosos. Denuncie a mensagem para proteger você e seus contatos."
    },
    {
        scenario: "Um perfil em rede social oferece: 'Ganhe R$ 5.000 fazendo tarefas simples em casa! Abra uma conta com R$ 100 para começar'.",
        question: "Como identificar golpes de 'ganhar dinheiro fácil'?",
        options: [
            "Esses são oportunidades reais de renda",
            "Geralmente precisa depositar dinheiro primeiro - é um golpe",
            "Ninguém ofereceria este tipo de coisa na internet",
            "Basta ter 18 anos para participar"
        ],
        correct: 1,
        feedback: "Golpes de 'dinheiro fácil' SEMPRE pedem depósito primeiro. Ninguém ganha dinheiro 'sem fazer nada'. Isso é um esquema de fraude!"
    },
    {
        scenario: "Você recebe um SMS: 'Sua conta foi bloqueada! Confirme seus dados clicando aqui ou ligando para este número'.",
        question: "Como agir quando recebe SMS de 'bloqueio de conta'?",
        options: [
            "Clicar no link e confirmar os dados imediatamente",
            "Ligar para o número fornecido",
            "Entrar no app ou site oficial e verificar diretamente",
            "Responder via SMS com seus dados"
        ],
        correct: 2,
        feedback: "Banks NUNCA pedem dados por SMS ou links. Sempre acesse o app ou site oficial diretamente. Se tiver dúvida, ligue para o banco pelo número que conhece."
    },
    {
        scenario: "Em um jogo online, alguém oferece: 'Vendo diamantes por R$ 20, super barato!' (Preço 80% abaixo do normal).",
        question: "O que fazer quando ofertas de itens de jogo parecem muito baratas?",
        options: [
            "Comprar logo antes de 'acabar a promoção'",
            "Desconfiar - pode estar roubado, hackeado ou ser golpe",
            "Pedir empréstimo para amigos",
            "Não importa o preço, total é só um jogo"
        ],
        correct: 1,
        feedback: "Itens de jogos por preços muito baixos podem ser roubados ou de contas hackeadas. Ao comprar, você cometeria crime e perderia o dinheiro!"
    },
    {
        scenario: "Alguém no Instagram ou TikTok promete: 'Invista R$ 500 agora e ganhe R$ 5.000 em 24 horas com meu sistema secreto'.",
        question: "Como identificar golpes de investimento rápido?",
        options: [
            "Isso é uma oportunidade legítima de ganhar dinheiro",
            "Investir assim é seguro se vir testemunhas falsas",
            "Ninguém consegue ganhar 900% em 24 horas legitimamente - é golpe",
            "É só clicar e ficar rico sem risco"
        ],
        correct: 2,
        feedback: "Não existe investimento com retorno de 900% em 24 horas! Esses são esquemas de pirâmide ou fraude. Você perde o dinheiro e não ganha nada!"
    },
    {
        scenario: "Um app promete: 'Empreste dinheiro em 5 minutos! Sem análise de crédito! Sem burocracia!' E você tem 13 anos.",
        question: "O que você deve saber sobre apps de empréstimo rápido?",
        options: [
            "São sempre seguros e confiáveis",
            "Menores de idade podem contratar livremente",
            "Podem ter juros muito altos, cobranças ocultas e pedir dados pessoais",
            "Não há risco de fraude em apps"
        ],
        correct: 2,
        feedback: "Apps de empréstimo rápido frequentemente têm juros altíssimos (até 300% ao ano!) e cobranças extras. Para menores, é proibido. Sempre converse com seus pais!"
    },
    {
        scenario: "Você encontra um 'atalho' para gerar créditos grátis num jogo famoso compartilhando um código com amigos.",
        question: "O que fazer com promessas de 'crédito grátis' em jogos?",
        options: [
            "Compartilhar com o máximo de amigos para ganhar",
            "Clicar em links promocionais desconhecidos",
            "Ignorar - geralmente são golpes ou phishing que roubam dados",
            "Dar login em sites falsos que copiam o jogo real"
        ],
        correct: 2,
        feedback: "Promessas de créditos grátis são 90% golpes! Esses links roubam seus dados, sua conta ou instalam malware. Nunca clique em links aleatórios!"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function initQuiz() {
    document.getElementById('totalQuestions').textContent = questions.length;
    renderQuestion();
}

function renderQuestion() {
    const container = document.getElementById('quizContainer');
    const q = questions[currentQuestion];
    
    let html = `
        <div class="question-card active">
            <div class="scenario">
                <strong>📍 Situação:</strong> ${q.scenario}
            </div>
            <div class="question-text">${q.question}</div>
            <div class="options" id="optionsContainer">
    `;
    
    q.options.forEach((option, index) => {
        html += `
            <div class="option" onclick="selectAnswer(${index})">
                <input type="radio" name="answer" id="option${index}" value="${index}" ${answered ? 'disabled' : ''}>
                <label for="option${index}">${option}</label>
            </div>
        `;
    });
    
    html += `
            </div>
            <div class="feedback" id="feedback"></div>
            <div class="buttons">
                ${answered ? `<button class="btn-next" onclick="nextQuestion()">Próxima Pergunta</button>` : ''}
                ${currentQuestion === questions.length - 1 && answered ? `<button class="btn-reset" onclick="resetQuiz()">Ver Resultados</button>` : ''}
            </div>
        </div>
    `;
    
    container.innerHTML = html;
    updateProgress();
}

function selectAnswer(index) {
    if (answered) return;
    
    answered = true;
    const correct = index === questions[currentQuestion].correct;
    
    if (correct) {
        score++;
        document.getElementById(`option${index}`).parentElement.classList.add('correct');
        showFeedback(true);
    } else {
        document.getElementById(`option${index}`).parentElement.classList.add('incorrect');
        document.getElementById(`option${questions[currentQuestion].correct}`).parentElement.classList.add('correct');
        showFeedback(false);
    }
    
    renderQuestion();
}

function showFeedback(isCorrect) {
    const feedback = document.getElementById('feedback');
    const q = questions[currentQuestion];
    
    if (isCorrect) {
        feedback.innerHTML = `✅ <strong>Correto!</strong> ${q.feedback}`;
        feedback.classList.add('correct');
    } else {
        feedback.innerHTML = `❌ <strong>Incorreto</strong> - A resposta correta é: <strong>"${q.options[q.correct]}"</strong><br><br><strong>Explicação:</strong> ${q.feedback}`;
        feedback.classList.add('incorrect');
    }
    feedback.classList.add('show');
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        answered = false;
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const percentage = Math.round((score / questions.length) * 100);
    const resultsDiv = document.getElementById('results');
    const scoreCircle = document.getElementById('scoreCircle');
    const resultMessage = document.getElementById('resultMessage');
    
    scoreCircle.textContent = `${percentage}%`;
    
    let message = '';
    if (percentage === 100) {
        message = `🏆 Perfeito! Você é um especialista em segurança cibernética!`;
    } else if (percentage >= 80) {
        message = `🌟 Excelente! Você sabe muito sobre segurança online!`;
    } else if (percentage >= 60) {
        message = `👍 Bom! Você tem conhecimentos importantes sobre segurança.`;
    } else if (percentage >= 40) {
        message = `📚 Continue aprendendo! Há ainda muito a descobrir sobre segurança.`;
    } else {
        message = `💡 Não desista! Pratique mais e revise os conceitos de segurança. Seu Score: ${score}/${questions.length}`;
    }
    
    resultMessage.textContent = message;
    document.getElementById('quizContainer').style.display = 'none';
    resultsDiv.classList.add('show');
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;
    document.getElementById('results').classList.remove('show');
    document.getElementById('quizContainer').style.display = 'block';
    renderQuestion();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('currentQuestion').textContent = currentQuestion + 1;
}

// Iniciar o quiz quando a página carregar
document.addEventListener('DOMContentLoaded', initQuiz);
