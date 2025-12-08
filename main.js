// Language Switching
document.addEventListener('DOMContentLoaded', function() {
    // Language Switching
    const langButtons = document.querySelectorAll('.lang-btn');
    const swElements = document.querySelectorAll('.lang-sw');
    const enElements = document.querySelectorAll('.lang-en');
    
    function switchLanguage(lang) {
        if (lang === 'sw') {
            swElements.forEach(el => el.style.display = 'block');
            enElements.forEach(el => el.style.display = 'none');
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.lang-btn[data-lang="sw"]').classList.add('active');
        } else {
            swElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = 'block');
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelector('.lang-btn[data-lang="en"]').classList.add('active');
        }
    }
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Active navigation link
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // WhatsApp order tracking
    document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
        link.addEventListener('click', function() {
            // Add analytics tracking here
            console.log('WhatsApp order initiated:', this.href);
        });
    });
    
    // Initialize with Swahili
    switchLanguage('sw');
});
