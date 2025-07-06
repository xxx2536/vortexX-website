// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Purchase Modal Functionality
const modal = document.getElementById('purchaseModal');
const buyButtons = document.querySelectorAll('.buy-btn');
const closeBtn = document.querySelector('.close');
const confirmPurchaseBtn = document.getElementById('confirmPurchase');

// Product data for VortexX
const products = {
    'VortexX FiveM Pro': {
        name: 'VortexX FiveM Pro',
        description: 'โซลูชัน FiveM ระดับมืออาชีพ',
        price: 599,
        stock: 25
    },
    'VortexX CMD Elite': {
        name: 'VortexX CMD Elite',
        description: 'คำสั่งและเครื่องมือขั้นสูง',
        price: 399,
        stock: 35
    },
    'VortexX Security Pro': {
        name: 'VortexX Security Pro',
        description: 'ระบบความปลอดภัยขั้นสูง',
        price: 799,
        stock: 15
    },
    'VortexX Valorant Suite': {
        name: 'VortexX Valorant Suite',
        description: 'โปรแกรม Valorant ล่าสุด',
        price: 899,
        stock: 10
    },
    'VortexX Server Manager': {
        name: 'VortexX Server Manager',
        description: 'จัดการเซิร์ฟเวอร์อย่างมืออาชีพ',
        price: 1299,
        stock: 8
    },
    'VortexX Custom Script': {
        name: 'VortexX Custom Script',
        description: 'สคริปต์เฉพาะตามความต้องการ',
        price: 499,
        stock: 20
    }
};

// Open modal when buy button is clicked
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product');
        const product = products[productId];
        
        if (product) {
            document.getElementById('modalProductName').textContent = product.name;
            document.getElementById('modalProductDesc').textContent = product.description;
            document.querySelector('.price-info .price').textContent = `฿${product.price}`;
            document.getElementById('modalStock').textContent = product.stock;
            
            // Reset quantity
            document.getElementById('quantity').value = 1;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Confirm purchase
confirmPurchaseBtn.addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('quantity').value);
    const productName = document.getElementById('modalProductName').textContent;
    const price = parseInt(document.querySelector('.price-info .price').textContent.replace('฿', ''));
    const total = quantity * price;
    
    // Validate quantity
    if (quantity < 1) {
        showNotification('กรุณาเลือกจำนวนสินค้าที่ต้องการ', 'error');
        return;
    }
    
    // Simulate purchase process
    showNotification('กำลังดำเนินการสั่งซื้อ VortexX...', 'info');
    
    setTimeout(() => {
        showNotification(`สั่งซื้อ ${productName} จำนวน ${quantity} ชิ้น เรียบร้อยแล้ว!`, 'success');
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Add to recent orders
        addToRecentOrders(productName, quantity);
    }, 2000);
});

// Add to recent orders
function addToRecentOrders(productName, quantity) {
    const ordersList = document.querySelector('.orders-list');
    const newOrder = document.createElement('div');
    newOrder.className = 'order-item';
    
    const now = new Date();
    const timeString = now.toISOString().slice(0, 19).replace('T', ' ');
    
    newOrder.innerHTML = `
        <div class="order-info">
            <h4>${productName}</h4>
            <p class="order-time">${timeString}</p>
        </div>
        <span class="order-status sold">ขายแล้ว !!</span>
    `;
    
    // Add to the beginning of the list
    ordersList.insertBefore(newOrder, ordersList.firstChild);
    
    // Remove oldest order if more than 10
    const orders = ordersList.querySelectorAll('.order-item');
    if (orders.length > 10) {
        orders[orders.length - 1].remove();
    }
}

// Form submission handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('กำลังส่งข้อความไปยัง VortexX...', 'info');
        
        setTimeout(() => {
            showNotification('ส่งข้อความเรียบร้อยแล้ว! ทีม VortexX จะติดต่อกลับโดยเร็วที่สุด', 'success');
            this.reset();
        }, 2000);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#06b6d4'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Button click effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .category-card, .order-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Counter animation for statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Add some interactive features to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll to top functionality
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: #06b6d4;
    color: #0f172a;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.visibility = 'visible';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover effect to social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Category card click functionality
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const categoryName = card.querySelector('h3').textContent;
        showNotification(`กำลังไปยังหมวดหมู่ ${categoryName}...`, 'info');
        
        // Simulate navigation to category
        setTimeout(() => {
            showNotification(`แสดงสินค้าในหมวดหมู่ ${categoryName}`, 'success');
        }, 1000);
    });
});

// Quantity input validation
document.getElementById('quantity').addEventListener('input', function() {
    const value = parseInt(this.value);
    const stock = parseInt(document.getElementById('modalStock').textContent);
    
    if (value > stock) {
        this.value = stock;
        showNotification(`มีสินค้าคงเหลือเพียง ${stock} ชิ้น`, 'error');
    }
    
    if (value < 1) {
        this.value = 1;
    }
});

// VortexX specific features
function initializeVortexXFeatures() {
    // Add VortexX branding effects
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // Add special effects for VortexX products
    document.querySelectorAll('.product-card').forEach(card => {
        const productName = card.querySelector('h3').textContent;
        if (productName.includes('VortexX')) {
            card.style.border = '2px solid #06b6d4';
            card.addEventListener('mouseenter', function() {
                this.style.boxShadow = '0 20px 40px rgba(6, 182, 212, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.boxShadow = '0 15px 30px rgba(6, 182, 212, 0.15)';
            });
        }
    });
}

// Initialize VortexX features
window.addEventListener('load', initializeVortexXFeatures);

console.log('VortexX Store loaded successfully! 🎮'); 