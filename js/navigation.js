/* ================================================================
   NAVIGATION.JS — Roteamento entre seções e menu hambúrguer
   CyberTeens Academy
   ================================================================ */

(function () {
    'use strict';

    const navLinks          = document.querySelectorAll('.nav-links a[data-page]');
    const pageSections      = document.querySelectorAll('.page-section');
    const hamburger         = document.getElementById('hamburger');
    const navLinksContainer = document.getElementById('navLinks');

    /**
     * Ativa a seção correspondente ao nome de página informado,
     * atualiza o link ativo e fecha o menu mobile.
     * @param {string} pageName - valor do atributo data-page
     */
    function navigateToPage(pageName) {
        // Atualiza link ativo na navbar (somente nos links que têm data-page)
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageName) {
                link.classList.add('active');
            }
        });

        // Mostra a seção correta e oculta as demais
        pageSections.forEach(section => {
            section.classList.remove('active');
            if (section.getAttribute('data-page') === pageName) {
                section.classList.add('active');
            }
        });

        // Fecha o menu mobile se estiver aberto usando a função exposta globalmente
        if (typeof window.closeMobileMenu === 'function') {
            window.closeMobileMenu();
        }

        // Rola suavemente até o topo do conteúdo principal
        const mainContent = document.getElementById('mainContent');
        if (mainContent) {
            mainContent.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    // ── Eventos de clique nos links internos ──────────
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageName = this.getAttribute('data-page');
            if (pageName) {
                navigateToPage(pageName);
                window.location.hash = pageName;
            }
        });
    });

    // ── Lida com hash da URL na entrada/mudança ──────
    const VALID_PAGES = ['o-que-e', 'importancia', 'protecao', 'golpes', 'faq', 'creditos'];

    function handleHash() {
        const hash = window.location.hash.replace('#', '');
        if (VALID_PAGES.includes(hash)) {
            navigateToPage(hash);
        }
    }

    window.addEventListener('hashchange', handleHash);
    handleHash(); // Verifica hash inicial ao carregar a página

    // ── Expõe função globalmente para uso em outros módulos ──
    window.navigateToPage = navigateToPage;
})();