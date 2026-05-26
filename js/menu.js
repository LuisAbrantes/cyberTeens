/* ================================================================
   MENU.JS — Controle do menu hambúrguer (mobile)
   CyberTeens Academy
   ================================================================ */
(function () {
    'use strict';
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (!hamburger || !navLinks) return;

    function closeMenu() {
        navLinks.classList.remove('show');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', function () {
        const isOpen = navLinks.classList.toggle('show');
        hamburger.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', function (e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            closeMenu();
        }
    });

    // Fecha o menu ao redimensionar para desktop
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    // Expõe a função globalmente para navegação externa
    window.closeMobileMenu = closeMenu;
})();