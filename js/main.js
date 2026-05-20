/* ================================================================
   MAIN.JS — Ponto de entrada e inicialização da aplicação
   Depende de: navigation.js e simulation-engine.js
   CyberTeens Academy
   ================================================================ */

(function () {
    'use strict';

    /**
     * Inicia a simulação se a seção já estiver ativa ao carregar a página
     * (por exemplo, quando a URL contém #simulacao).
     */
    function initSimulationIfActive() {
        const simSection = document.getElementById('page-simulacao');
        const chatMessages = document.getElementById('chatMessages');

        if (
            simSection &&
            simSection.classList.contains('active') &&
            chatMessages &&
            chatMessages.children.length === 0
        ) {
            resetSimulation();
        }
    }

    // ── Inicializa a simulação se a página já estiver ativa ──
    initSimulationIfActive();

    // ── Mensagem de diagnóstico no console ──────────────────
    console.log('🛡️ Simulação CyberTeens — Todos os sistemas inicializados.');
    console.log('📚 Páginas: O que é | Importância | Proteção | Golpes | Simulação');
    console.log('🕹️ Acesse a Simulação de Golpe para praticar comportamentos seguros online!');
})();
