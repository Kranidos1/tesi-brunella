// ===== BINGE THERAPY - JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    // Inizializza tutte le funzionalità
    initScrollToTop();
    initSmoothScroll();
    initAnimations();
    initNavbarScroll();
    initLoadingAnimations();
});

// ===== SCROLL TO TOP BUTTON =====
function initScrollToTop() {
    // Crea il pulsante scroll to top
    const scrollToTopBtn = document.createElement('div');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    // Mostra/nascondi il pulsante in base allo scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });

    // Funzione per scrollare in cima
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== SMOOTH SCROLL =====
function initSmoothScroll() {
    // Gestisce i link di navigazione interni
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Compensa l'header fisso
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== ANIMAZIONI =====
function initAnimations() {
    // Animazione per le cards delle serie
    const seriesCards = document.querySelectorAll('.series-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    seriesCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });
}

// ===== NAVBAR SCROLL EFFECT =====
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            navbar.style.background = 'rgba(255, 230, 240, 0.95)';
            navbar.style.backdropFilter = 'blur(15px)';
        } else {
            navbar.style.background = 'var(--gradient-primary)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    });
}

// ===== LOADING ANIMATIONS =====
function initLoadingAnimations() {
    // Aggiungi classe loading agli elementi
    const elementsToAnimate = document.querySelectorAll('.hero-content, .category-card, .about-content');
    
    elementsToAnimate.forEach((element, index) => {
        element.classList.add('loading');
        
        setTimeout(() => {
            element.classList.add('loaded');
        }, index * 200);
    });
}

// ===== DOWNLOAD PDF FUNCTION =====
function downloadPDF() {
    // Crea un messaggio di conferma
    const message = `
🎓 BINGE THERAPY - La guida di Brunella 🎓

📺 Le mie categorie preferite:

🎓 I teen drama da non perdere
- Gossip Girl (Netflix)
- The Vampire Diaries (Prime Video)
- Riverdale (Netflix)

😭 Prepara i fazzoletti
- This Is Us (Disney+)
- A Million Little Things (Prime Video)
- The Good Doctor (Disney+)

🇮🇹 Fiction italiana
- Mare Fuori (RaiPlay)
- Baby (Netflix)
- Suburra (Netflix)

🤣 Se vuoi divertirti
- Brooklyn Nine-Nine (Netflix)
- The Office (Prime Video)
- Parks and Recreation (Prime Video)

💣 Un po' d'azione
- Stranger Things (Netflix)
- The Boys (Prime Video)
- Wednesday (Netflix)

👶 Per tornare bambini
- Avatar: The Last Airbender (Netflix)
- The Mandalorian (Disney+)
- The Good Place (Netflix)

💖 Con amore, Brunella 💖

Scansiona il QR code per visitare il sito completo!
    `;
    
    // Crea un blob con il contenuto
    const blob = new Blob([message], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    // Crea un link temporaneo per il download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Binge-Therapy-Guida-Brunella.txt';
    document.body.appendChild(a);
    a.click();
    
    // Pulisci
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    // Mostra un messaggio di conferma
    showNotification('📄 Guida scaricata! Controlla la cartella download.');
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message) {
    // Crea la notifica
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Stili per la notifica
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--gradient-accent);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(194, 24, 91, 0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Aggiungi al DOM
    document.body.appendChild(notification);
    
    // Mostra la notifica
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Nascondi dopo 3 secondi
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ===== HOVER EFFECTS ENHANCEMENT =====
function initHoverEffects() {
    // Aggiungi effetti hover personalizzati
    const cards = document.querySelectorAll('.series-card, .category-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== MOBILE MENU ENHANCEMENT =====
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        // Chiudi il menu quando si clicca su un link
        const navLinks = navbarCollapse.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) {
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
}

// ===== LAZY LOADING PER LE IMMAGINI =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[src*="tmdb.org"]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // Trigger del caricamento
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== PERFORMANCE OPTIMIZATION =====
function initPerformanceOptimizations() {
    // Throttle per gli eventi di scroll
    let ticking = false;
    
    function updateOnScroll() {
        // Aggiorna solo se necessario
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateOnScroll);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// ===== ACCESSIBILITY ENHANCEMENTS =====
function initAccessibility() {
    // Aggiungi attributi ARIA
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        if (!button.getAttribute('aria-label')) {
            button.setAttribute('aria-label', button.textContent.trim());
        }
    });
    
    // Gestione focus per tastiera
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Chiudi menu mobile se aperto
            const navbarCollapse = document.querySelector('.navbar-collapse.show');
            if (navbarCollapse) {
                navbarCollapse.classList.remove('show');
            }
        }
    });
}

// ===== ERROR HANDLING =====
function initErrorHandling() {
    // Gestione errori per le immagini
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZiM2QxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2MxMTg1YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdpbmU8L3RleHQ+PC9zdmc+';
            this.alt = 'Immagine non disponibile';
        });
    });
}

// ===== INITIALIZE ALL FEATURES =====
document.addEventListener('DOMContentLoaded', function() {
    // Inizializza tutte le funzionalità
    initScrollToTop();
    initSmoothScroll();
    initAnimations();
    initNavbarScroll();
    initLoadingAnimations();
    initHoverEffects();
    initMobileMenu();
    initLazyLoading();
    initPerformanceOptimizations();
    initAccessibility();
    initErrorHandling();
    
    console.log('🎬 Binge Therapy - Sito caricato con successo! 💖');
});

// ===== UTILITY FUNCTIONS =====

// Funzione per debounce
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

// Funzione per throttle
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

// ===== ANALYTICS (OPZIONALE) =====
function trackEvent(eventName, eventData = {}) {
    // Qui puoi aggiungere Google Analytics o altri servizi di tracking
    console.log('Event tracked:', eventName, eventData);
}

// Traccia i click sui pulsanti
document.addEventListener('click', function(e) {
    if (e.target.closest('.btn')) {
        const button = e.target.closest('.btn');
        const buttonText = button.textContent.trim();
        trackEvent('button_click', { button: buttonText });
    }
});

// Traccia la navigazione
document.addEventListener('click', function(e) {
    if (e.target.closest('.nav-link')) {
        const link = e.target.closest('.nav-link');
        const linkText = link.textContent.trim();
        trackEvent('navigation', { section: linkText });
    }
}); 