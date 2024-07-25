document.addEventListener('DOMContentLoaded', (event) => {
    // Добавляем активный класс к текущей странице в навигации
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Простая валидация формы (если вы добавите форму на страницу контактов)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Здесь можно добавить код для отправки формы или показа сообщения об успешной отправке
            alert('Сообщение отправлено!');
        });
    }
});

const connectButton = document.querySelector('.btn');
    if (connectButton) {
        connectButton.addEventListener('click', function(e) {
            if (!confirm('Вы будете перенаправлены на внешний сайт для подключения. Продолжить?')) {
                e.preventDefault();
            }
        });
    }


const speedtestImages = document.querySelectorAll('.speedtest-img');
    speedtestImages.forEach(img => {
        img.addEventListener('click', function() {
            const overlay = document.createElement('div');
            overlay.style.position = 'fixed';
            overlay.style.top = '0';
            overlay.style.left = '0';
            overlay.style.width = '100%';
            overlay.style.height = '100%';
            overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
            overlay.style.display = 'flex';
            overlay.style.justifyContent = 'center';
            overlay.style.alignItems = 'center';
            overlay.style.zIndex = '1000';

            const fullImg = document.createElement('img');
            fullImg.src = this.src;
            fullImg.style.maxWidth = '90%';
            fullImg.style.maxHeight = '90%';
            fullImg.style.objectFit = 'contain';

            overlay.appendChild(fullImg);
            document.body.appendChild(overlay);

            overlay.addEventListener('click', function() {
                document.body.removeChild(overlay);
            });
        });
    });
