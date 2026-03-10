/* ============================================
   DOPPIO ARQUITETURA - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // 1. NAVEGAÇÃO MOBILE
    // ============================================
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
    
    // ============================================
    // 2. SCROLL ATIVO NA NAVEGAÇÃO
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    function scrollActive() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink?.classList.add('active');
            } else {
                navLink?.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', scrollActive);
    
    // ============================================
    // 3. HEADER AO SCROLL
    // ============================================
    const header = document.getElementById('header');
    
    function scrollHeader() {
        if (window.scrollY >= 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', scrollHeader);
    
    // ============================================
    // 4. SMOOTH SCROLL
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const section = document.querySelector(href);
                
                if (section) {
                    const offsetTop = section.offsetTop - 80;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ============================================
    // 5. ANIMAÇÃO FADE IN AO SCROLL
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Adicionar classe fade-in aos elementos
    const elementsToAnimate = document.querySelectorAll(`
        .about__member,
        .value__card,
        .differential__card,
        .portfolio__item
    `);
    
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // ============================================
    // 6. FORMULÁRIO DE CONTATO
    // ============================================
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Pegar dados do formulário
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validação simples
            if (!data.name || !data.email || !data.message) {
                showNotification('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Validar email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Por favor, insira um email válido.', 'error');
                return;
            }
            
            // Criar corpo do email
            const subject = encodeURIComponent('Contato - Site DOPPIO Arquitetura');
            const body = encodeURIComponent(`
Nome: ${data.name}
Email: ${data.email}
Telefone: ${data.phone || 'Não informado'}
Tipo de Projeto: ${data['project-type'] || 'Não especificado'}

Mensagem:
${data.message}
            `);
            
            // Abrir cliente de email
            window.location.href = `mailto:doppio.arqui@gmail.com?subject=${subject}&body=${body}`;
            
            showNotification('Abrindo seu cliente de email...', 'success');
            
            // Limpar formulário após 2 segundos
            setTimeout(() => {
                contactForm.reset();
            }, 2000);
        });
    }
    
    // ============================================
    // 7. SISTEMA DE NOTIFICAÇÕES
    // ============================================
    function showNotification(message, type = 'success') {
        // Remover notificação existente
        const existingNotif = document.querySelector('.notification');
        if (existingNotif) {
            existingNotif.remove();
        }
        
        // Criar nova notificação
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;
        notification.textContent = message;
        
        // Adicionar estilos inline
        Object.assign(notification.style, {
            position: 'fixed',
            top: '100px',
            right: '20px',
            padding: '1rem 2rem',
            background: type === 'success' ? '#4CAF50' : '#f44336',
            color: 'white',
            borderRadius: '4px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: '9999',
            animation: 'slideInRight 0.3s ease-out',
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.95rem',
            maxWidth: '400px'
        });
        
        document.body.appendChild(notification);
        
        // Remover após 5 segundos
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    // ============================================
    // 8. LAZY LOADING DE IMAGENS
    // ============================================
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ============================================
    // 9. PERFORMANCE - VÍDEO HERO
    // ============================================
    const heroVideo = document.querySelector('.hero__video');
    
    if (heroVideo) {
        // Pausar vídeo quando não estiver visível
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    heroVideo.play();
                } else {
                    heroVideo.pause();
                }
            });
        }, { threshold: 0.5 });
        
        videoObserver.observe(heroVideo);
    }
    
    // ============================================
    // 10. CONTADOR DE ESTATÍSTICAS (FUTURO)
    // ============================================
    function animateCounter(element, target, duration = 2000) {
        let current = 0;
        const increment = target / (duration / 16);
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }
    
    // ============================================
    // 11. WHATSAPP FLUTUANTE (OPCIONAL)
    // ============================================
    function createWhatsAppButton() {
        const whatsappBtn = document.createElement('a');
        whatsappBtn.href = 'https://wa.me/5586994010085?text=Olá! Gostaria de saber mais sobre os serviços da DOPPIO Arquitetura.';
        whatsappBtn.target = '_blank';
        whatsappBtn.className = 'whatsapp-float';
        whatsappBtn.innerHTML = `
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="30" fill="#25D366"/>
                <path d="M30.5 13C20.835 13 13 20.835 13 30.5c0 3.043.78 5.908 2.145 8.405L13 47l8.308-2.135A17.397 17.397 0 0030.5 47c9.665 0 17.5-7.835 17.5-17.5S40.165 13 30.5 13zm8.625 24.73c-.358.99-2.115 1.928-2.925 2.025-.81.098-1.485.375-5.01-1.05-4.245-1.72-6.953-6.038-7.163-6.315-.21-.278-1.73-2.295-1.73-4.38 0-2.085 1.095-3.12 1.485-3.54.39-.42.848-.525 1.13-.525.283 0 .563.008.81.015.26.008.608-.098.953.735.345.833 1.185 2.895 1.29 3.105.105.21.173.457.035.735-.138.278-.21.45-.42.69-.21.24-.442.533-.63.72-.21.21-.428.435-.188.848.24.413 1.073 1.763 2.295 2.85 1.57 1.395 2.895 1.83 3.307 2.025.413.195.653.165.893-.098.24-.263.99-1.155 1.253-1.553.263-.397.525-.33.885-.195.36.135 2.295 1.08 2.685 1.275.39.195.653.293.75.458.098.165.098.953-.263 1.943z" fill="white"/>
            </svg>
        `;
        
        Object.assign(whatsappBtn.style, {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '60px',
            height: '60px',
            zIndex: '999',
            borderRadius: '50%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
        });
        
        whatsappBtn.addEventListener('mouseenter', () => {
            whatsappBtn.style.transform = 'scale(1.1)';
        });
        
        whatsappBtn.addEventListener('mouseleave', () => {
            whatsappBtn.style.transform = 'scale(1)';
        });
        
        document.body.appendChild(whatsappBtn);
    }
    
    // Ativar botão WhatsApp (descomente para ativar)
    // createWhatsAppButton();
    
    // ============================================
    // 12. ANIMAÇÕES CSS ADICIONAIS
    // ============================================
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // ============================================
    // 13. CONSOLE LOG BONITO
    // ============================================
    console.log('%c🏗️ DOPPIO Arquitetura', 'font-size: 24px; font-weight: bold; color: #AA5641;');
    console.log('%cSite desenvolvido com ❤️ e Claude AI', 'font-size: 12px; color: #666;');
    console.log('%cCriamos espaços que contam histórias', 'font-size: 14px; font-style: italic; color: #3C3C3C;');
    
    // ============================================
    // FIM DO SCRIPT
    // ============================================
});

// ============================================
// FUNÇÕES UTILITÁRIAS GLOBAIS
// ============================================

// Debounce para performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle para scroll
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
