/* ================================================================
   SIMULATION-MENU.JS — Controla a escolha da simulação e inicia o motor
   CyberTeens Academy
   ================================================================ */

(function () {
    'use strict';

    const menuDiv          = document.getElementById('simulation-menu');
    const simulationArea   = document.getElementById('simulation-area');
    const backToMenuBtn    = document.getElementById('backToMenuBtn');
    const simChatName      = document.getElementById('simChatName');
    const simChatLabel     = document.getElementById('simChatLabel');
    const simChatAvatar    = document.getElementById('simChatAvatar');

    // Mapeamento dos tipos de simulação para os dados e aparência
    const simConfig = {
        'phishing': {
            stages: SIMULATION_STAGES_PHISHING,
            chatName: '"Banco Itaú Segurança"',
            chatLabel: 'SMS / WhatsApp',
            avatarBg: 'var(--red)',
        },
        'tech-support': {
            stages: SIMULATION_STAGES_TECH_SUPPORT,
            chatName: '"Richard - Suporte Microsoft"',
            chatLabel: 'Chamada telefônica',
            avatarBg: '#0078d4',
        },
        'email-analysis': {
            stages: SIMULATION_STAGES_EMAIL,
            chatName: '"Caixa de Entrada"',
            chatLabel: 'Análise de E‑mail',
            avatarBg: '#6c5ce7', // roxo
        },
        'romance-scam': {
            stages: SIMULATION_STAGES_ROMANCE_SCAM,
            chatName: '"Lucas 💙"',
            chatLabel: 'Rede Social / Messenger',
            avatarBg: 'var(--accent)',
        },
        'fake-giveaway': {
            stages: SIMULATION_STAGES_FAKE_GIVEAWAY,
            chatName: '"Meta Brasil Sorteios"',
            chatLabel: 'Rede Social',
            avatarBg: '#1f2937',
        },
    };

    function selectSimulation(simType) {
        const config = simConfig[simType];
        if (!config) return;

        simChatName.textContent = config.chatName;
        simChatLabel.textContent = config.chatLabel;
        simChatAvatar.style.background = config.avatarBg;

        menuDiv.style.display = 'none';
        simulationArea.style.display = 'block';

        resetSimulation(config.stages);
    }

    menuDiv.addEventListener('click', function (e) {
        const card = e.target.closest('.sim-choice-card');
        if (!card) return;
        const simType = card.getAttribute('data-sim');
        selectSimulation(simType);
    });

    backToMenuBtn.addEventListener('click', function () {
        simulationArea.style.display = 'none';
        menuDiv.style.display = 'flex';
        document.getElementById('chatMessages').innerHTML = '';
        document.getElementById('chatOptions').innerHTML = '';
        document.getElementById('restartBtn').style.display = 'none';
        backToMenuBtn.style.display = 'none';
    });

    console.log('📋 Menu de simulação carregado.');
})();