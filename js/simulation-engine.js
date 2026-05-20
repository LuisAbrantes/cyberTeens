/* ================================================================
   SIMULATION-ENGINE.JS — Motor da simulação interativa (genérico)
   Depende de: um array de estágios definido globalmente antes de
               chamar resetSimulation(stages).
   CyberTeens Academy
   ================================================================ */

(function () {
    'use strict';

    let currentStages = [];          // Estágios da simulação ativa
    const chatMessages = document.getElementById('chatMessages');
    const chatOptions = document.getElementById('chatOptions');
    const safeCountEl = document.getElementById('safeCount');
    const totalStagesEl = document.getElementById('totalStages');
    const scoreDotsEl = document.getElementById('scoreDots');
    const restartBtn = document.getElementById('restartBtn');
    const simScoreDiv = document.getElementById('simScore');

    let currentStageIndex = 0;
    let safeChoicesCount = 0;
    let simulationComplete = false;
    let userChoices = [];

    function scrollChatToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addMessage(type, text, delay = 0) {
        return new Promise(resolve => {
            setTimeout(() => {
                const msgDiv = document.createElement('div');
                msgDiv.className = 'msg ' + type;
                msgDiv.textContent = text;
                chatMessages.appendChild(msgDiv);
                scrollChatToBottom();
                resolve();
            }, delay);
        });
    }

    function addTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingDiv);
        scrollChatToBottom();
        return typingDiv;
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) indicator.remove();
    }

    function updateScoreDisplay() {
        safeCountEl.textContent = safeChoicesCount;
        totalStagesEl.textContent = currentStages.length;

        let dotsHTML = '';
        userChoices.forEach((isSafe, i) => {
            const cls = isSafe ? 'safe' : 'risky';
            const label = isSafe ? 'Segura' : 'Arriscada';
            dotsHTML += `<span class="score-dot ${cls}" title="Etapa ${i + 1}: ${label}"></span>`;
        });
        for (let i = userChoices.length; i < currentStages.length; i++) {
            dotsHTML += `<span class="score-dot" style="background:#cbd5e1;" title="Etapa ${i + 1}: Pendente"></span>`;
        }
        scoreDotsEl.innerHTML = dotsHTML;
    }

    function renderOptions(stage, disabled = false) {
        chatOptions.innerHTML = '';
        stage.options.forEach((opt, idx) => {
            const btn = document.createElement('button');
            btn.textContent = opt.text;
            btn.disabled = disabled;
            btn.addEventListener('click', () => handleChoice(stage, idx, opt));
            chatOptions.appendChild(btn);
        });
    }

    async function handleChoice(stage, choiceIndex, chosenOption) {
        if (simulationComplete) return;

        const allButtons = chatOptions.querySelectorAll('button');
        allButtons.forEach(b => (b.disabled = true));
        const chosenButton = allButtons[choiceIndex];
        chosenButton.classList.add(chosenOption.isSafe ? 'correct-highlight' : 'incorrect-highlight');

        userChoices.push(chosenOption.isSafe);
        if (chosenOption.isSafe) safeChoicesCount++;
        updateScoreDisplay();

        const userText = chosenOption.text.replace(/^[✅❌]\s*"/, '').replace(/"$/, '');
        await addMessage('user', userText, 150);

        const feedbackType = chosenOption.isSafe ? 'feedback-safe' : 'feedback-risky';
        const feedbackPrefix = chosenOption.isSafe ? '✅ ' : '⚠️ ';
        await addMessage(feedbackType, feedbackPrefix + chosenOption.feedback, 400);

        currentStageIndex++;
        if (currentStageIndex < currentStages.length) {
            await addMessage('system', '— O golpista está digitando… —', 500);
            await loadStage(currentStageIndex);
        } else {
            await endSimulation();
        }
    }

    async function loadStage(stageIndex) {
        if (stageIndex >= currentStages.length) {
            await endSimulation();
            return;
        }
        const stage = currentStages[stageIndex];
        addTypingIndicator();
        scrollChatToBottom();
        await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 600));
        removeTypingIndicator();

        // Se o estágio tiver um e-mail (simulação de análise), renderiza o e-mail formatado
        if (stage.email) {
            const emailDiv = document.createElement('div');
            emailDiv.className = 'msg email-preview';
            emailDiv.innerHTML = `
            <div class="email-sender">De: ${stage.email.sender}</div>
            <div class="email-subject">Assunto: ${stage.email.subject}</div>
            <div class="email-body">${stage.email.body.replace(/\n/g, '<br>')}</div>
            <div class="email-indicators">
                <span class="suspicious">⚠️ Suspeito: ${stage.email.indicators.suspicious.join(', ') || 'Nenhum'}</span>
                <span class="legitimate">✅ Legítimo: ${stage.email.indicators.legitimate.join(', ') || 'Nenhum'}</span>
            </div>
        `;
            chatMessages.appendChild(emailDiv);
            scrollChatToBottom();
            // As opções serão "É phishing" ou "É legítimo"
            renderEmailOptions(stage);
        } else {
            // Comportamento normal para outras simulações
            await addMessage('scammer', stage.scammerMessage, 200);
            renderOptions(stage, false);
        }
        updateScoreDisplay();
    }

    // Nova função para renderizar botões de phishing/legítimo
    function renderEmailOptions(stage) {
        chatOptions.innerHTML = '';
        const options = [
            { text: '🎣 É phishing', isPhishing: true },
            { text: '✅ É legítimo', isPhishing: false },
        ];
        options.forEach((opt) => {
            const btn = document.createElement('button');
            btn.textContent = opt.text;
            btn.addEventListener('click', () => {
                // Desabilita e verifica
                chatOptions.querySelectorAll('button').forEach(b => b.disabled = true);
                const isCorrect = (opt.isPhishing === stage.isPhishing);
                userChoices.push(isCorrect);
                if (isCorrect) safeChoicesCount++;
                updateScoreDisplay();

                const feedbackText = isCorrect ? stage.feedbackCorrect : stage.feedbackWrong;
                const feedbackType = isCorrect ? 'feedback-safe' : 'feedback-risky';
                addMessage(feedbackType, feedbackText, 200);

                currentStageIndex++;
                if (currentStageIndex < currentStages.length) {
                    addMessage('system', '— Próximo e‑mail… —', 500);
                    loadStage(currentStageIndex);
                } else {
                    endSimulation();
                }
            });
            chatOptions.appendChild(btn);
        });
    }
    window.renderEmailOptions = renderEmailOptions;

    async function endSimulation() {
        simulationComplete = true;
        chatOptions.innerHTML = '';

        const allSafe = safeChoicesCount === currentStages.length;
        const summaryText = allSafe
            ? '🏆 Parabéns! Você fez TODAS as escolhas seguras. Identificou cada tática de golpe e protegeu suas informações com perfeição.'
            : `📊 Simulação concluída! Você fez ${safeChoicesCount} de ${currentStages.length} escolhas seguras. Revise os feedbacks acima para entender quais respostas colocariam seus dados em risco.`;

        await addMessage('system', summaryText, 300);
        restartBtn.style.display = 'block';
        simScoreDiv.style.background = allSafe ? '#d1fae5' : '#fef3cd';
        document.getElementById('backToMenuBtn').style.display = 'block';
    }

    /** Reinicia a simulação com os estágios fornecidos */
    function resetSimulation(stages) {
        if (stages) {
            currentStages = stages;
        }
        if (!currentStages.length) return;

        currentStageIndex = 0;
        safeChoicesCount = 0;
        simulationComplete = false;
        userChoices = [];

        chatMessages.innerHTML = '';
        chatOptions.innerHTML = '';
        restartBtn.style.display = 'none';
        document.getElementById('backToMenuBtn').style.display = 'none';
        simScoreDiv.style.background = '#f1f5f9';

        updateScoreDisplay();
        addMessage('system', '🔔 Uma mensagem de um número desconhecido aparece…', 100)
            .then(() => loadStage(0));
    }

    restartBtn.addEventListener('click', () => resetSimulation());

    // Expõe funções globalmente
    window.resetSimulation = resetSimulation;
    window.hideSimulation = () => {
        document.getElementById('simulation-area').style.display = 'none';
        document.getElementById('simulation-menu').style.display = 'flex';
    };

    console.log('🕹️ Motor da Simulação genérico inicializado.');
})();
