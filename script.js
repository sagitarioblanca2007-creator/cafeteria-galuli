// ==========================================
// GALULI - JavaScript Principal
// ==========================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. MENÚ HAMBURGUESA
    // ==========================================
    const menuBtn = document.getElementById('menuBtn');
    const menuOverlay = document.getElementById('menuOverlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Abrir/cerrar menú
    menuBtn.addEventListener('click', function() {
        menuOverlay.classList.toggle('active');
    });

    // Cerrar menú al hacer clic fuera
    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            menuOverlay.classList.remove('active');
        }
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuOverlay.classList.remove('active');
        });
    });

    // ==========================================
    // 2. BOTÓN DE BÚSQUEDA
    // ==========================================
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', function() {
        alert('Función de búsqueda - Próximamente');
    });

    // ==========================================
    // 3. CARRITO DE COMPRAS
    // ==========================================
    const cartBtn = document.getElementById('cartBtn');
    
    cartBtn.addEventListener('click', function() {
        alert('Carrito de compras - Tienes 2 productos');
    });

    // ==========================================
    // 4. BOTONES AGREGAR AL CARRITO
    // ==========================================
    const addCartButtons = document.querySelectorAll('.btn-add-cart');
    
    addCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            // Animación de éxito
            this.textContent = '✓ Agregado';
            this.style.background = '#28a745';
            
            // Restaurar después de 2 segundos
            setTimeout(() => {
                this.textContent = '🛒 Agregar';
                this.style.background = '';
            }, 2000);
            
            // Actualizar contador del carrito
            const badge = document.querySelector('.badge');
            if (badge) {
                const currentCount = parseInt(badge.textContent);
                badge.textContent = currentCount + 1;
                
                // Animación del badge
                badge.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    badge.style.transform = 'scale(1)';
                }, 300);
            }
            
            console.log(`Producto agregado: ${productName} - ${productPrice}`);
        });
    });

    // ==========================================
    // 5. ANIMACIÓN DE SCROLL SUAVE
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==========================================
    // 6. ANIMACIÓN DE FADE-IN AL HACER SCROLL
    // ==========================================
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

    // Aplicar animación a las secciones
    const sections = document.querySelectorAll('.hero-section, .buttons-section, .coffee-section, .product-card');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // ==========================================
    // 7. EFECTO HOVER EN BOTONES
    // ==========================================
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // ==========================================
    // 8. OBSERVER PARA ANIMACIÓN DE IMAGEN
    // ==========================================
    const coffeeImageContainer = document.querySelector('.coffee-image-container');
    
    if (coffeeImageContainer) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            });
        }, { threshold: 0.2 });

        coffeeImageContainer.style.opacity = '0';
        coffeeImageContainer.style.transform = 'scale(0.95)';
        coffeeImageContainer.style.transition = 'opacity 1s ease, transform 1s ease';
        
        imageObserver.observe(coffeeImageContainer);
    }

    // ==========================================
    // 9. ESTILOS DINÁMICOS PARA IMAGEN (SIN HOVER)
    // ==========================================
    const style = document.createElement('style');
    style.textContent = `
        .coffee-image {
            transition: none;
        }
    `;
    document.head.appendChild(style);

    // ==========================================
    // 10. CONSOLE LOG DE BIENVENIDA
    // ==========================================
    console.log('%c¡Bienvenido a GALULI! ☕', 'color: #C87533; font-size: 20px; font-weight: bold;');
    console.log('%cEl sabor auténtico del café en cada taza', 'color: #8B4513; font-size: 14px;');
});

// ==========================================
// 11. PREVENIR COMPORTAMIENTO POR DEFECTO
// ==========================================
document.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Formulario enviado - Función en desarrollo');
});

// ==========================================
// 12. DETECCIÓN DE SCROLL PARA HEADER
// ==========================================
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
});