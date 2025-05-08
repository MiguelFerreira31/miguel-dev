// #region Inicialização de animações
AOS.init();
// #endregion

// #region Skills - Barras de Progresso
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");
    progressBars.forEach((bar) => {
        const value = bar.getAttribute("data-value");
        setTimeout(() => {
            bar.style.width = `${value}%`;
        }, 500);
    });
});
// #endregion


// #region Pré-carregamento
const pre_carremento = document.querySelector(".pre-carregamento");

function preCarregamento() {
    pre_carremento.style.opacity = "0";
    pre_carremento.style.display = "none";
    setTimeout(() => {
        pre_carremento.style.display = "none";
    }, 5000);
}
// #endregion

// #region Modo escuro/claro automático e manual
document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.theme-toggle-button');

    function switchMode() {
        const currentHour = new Date().getHours();
        const body = document.body;
        if (currentHour >= 18 || currentHour < 6) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
        }
    }

    function toggleThemeManually() {
        const body = document.body;
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleButton.textContent = 'Switch to Light Mode';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleButton.textContent = 'Switch to Dark Mode';
        }
        updateFogueteImg();
    }

    switchMode();
    setInterval(switchMode, 360000);
    toggleButton.addEventListener('click', toggleThemeManually);
});
// #endregion

// #region Sidebar
function showSidebar() {
    document.querySelector('.sidebar').style.display = 'flex';
}

function hideSidebar() {
    document.querySelector('.sidebar').style.display = 'none';
}
// #endregion

// #region Swiper - Slides Gerais
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 30 },
        1024: { slidesPerView: 4, spaceBetween: 40 },
    },
});
// #endregion

// #region Swiper - Cards
var swiper = new Swiper(".mySwiperCard", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
    breakpoints: {
        480: {         // smartphones pequenos
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {         // tablets
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {        // notebooks e desktops
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1280: {        // telas grandes
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});

// #endregion

// #region Swiper - Contato
var swiper = new Swiper(".mySwiperContato", {
    autoplay: { delay: 5000 },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});
// #endregion

// #region Contador animado
function ativaContador() {
    $('.contador').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            },
            complete: function () {
                $(this).stop(true, true);
            },
        });
    });
}

$(window).scroll(function () {
    var alturaBody = $(window).height();
    var distanciaElemento = $('.contador').offset().top;
    var posicaoScroll = $(this).scrollTop();
    var alturaElemento = $('.contador').outerHeight();

    if (posicaoScroll > (distanciaElemento + alturaElemento - alturaBody)) {
        ativaContador();
    }
});
// #endregion

// #region Texto animado (typewriter)
document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.querySelector('.titulo-principal');
    const palavras = ['Back-End', 'Front-End', 'SASS', 'Angular', 'React', 'PHP'];

    function typeWrite(elemento, palavras) {
        let contador = 0;
        let textoAtual = '';
        let isDeleting = false;

        function escrever() {
            const palavraAtual = palavras[contador % palavras.length];
            textoAtual = isDeleting
                ? palavraAtual.substring(0, textoAtual.length - 1)
                : palavraAtual.substring(0, textoAtual.length + 1);

            elemento.innerHTML = `<span>${textoAtual}</span>`;
            let velocidade = isDeleting ? 50 : 100;

            if (!isDeleting && textoAtual === palavraAtual) {
                velocidade = 1000;
                isDeleting = true;
            } else if (isDeleting && textoAtual === '') {
                isDeleting = false;
                contador++;
                velocidade = 400;
            }

            setTimeout(escrever, velocidade);
        }

        escrever();
    }

    typeWrite(titulo, palavras);
});
// #endregion

// #region Menu mobile
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});
// #endregion

// #region Botão voltar ao topo
let mybutton = document.getElementById("backToTopBtn");

window.onscroll = function () { scrollFunction(); };

function scrollFunction() {
    mybutton.style.display = (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) ? "block" : "none";
}

function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// #endregion

// #region Chatbot
const chatIcon = document.getElementById('chat-icon');
const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const backButton = document.getElementById('back-button');
const sendButton = document.getElementById('send-button');

const botMessages = {
    "1": " eu construo, otimizo e mantenho sites responsivos e atrativos...",
    "2": "valorizo a entrega pontual dos serviços...",
    "3": "ofereço diversas formas de pagamento...",
    "ajuda": "Olá, você está falando com nosso Boot de atendimento do Miguel...",
    "voltar": "Olá, você está falando com nosso Boot de atendimento do Miguel...",
    "oi": "Digite abaixo o número referente à sua dúvida:..."
};

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    const icon = sender === 'Você' ? '<i class="bx bxs-user"></i> ' : '<i class="bx bxs-bot"></i>';
    messageElement.innerHTML = `<strong>${icon} ${sender}:</strong> ${message}`;
    messageElement.classList.add('message-container', sender === 'Você' ? 'user-message' : 'bot-message');
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage) {
        addMessage('Você', userMessage);
        userInput.value = '';
        setTimeout(() => {
            const botMessage = botMessages[userMessage] || "Desculpe, não entendi. Digite 'ajuda' para ver os comandos disponíveis.";
            addMessage('Atendimento', botMessage);
        }, 500);
    }
}

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') sendMessage();
});

sendButton.addEventListener('click', sendMessage);

chatIcon.addEventListener('click', () => {
    chatContainer.style.display = 'block';
});

backButton.addEventListener('click', () => {
    chatContainer.style.display = 'none';
});

addMessage('Atendimento', 'Olá, você está falando com nosso Boot de atendimento do Miguel :). Digite "oi" para começar.');
// #endregion

// #region Animações de Blobs
document.addEventListener('DOMContentLoaded', () => {
    const homeContainer = document.querySelector('.home-container');
    const images = document.querySelectorAll('.blobImage');
    let currentIndex = 0;

    function createExplosion(x, y) {
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        explosion.style.width = '20px';
        explosion.style.height = '20px';
        explosion.style.position = 'absolute';
        explosion.style.left = `${x}px`;
        explosion.style.top = `${y}px`;
        homeContainer.appendChild(explosion);
        setTimeout(() => { explosion.remove(); }, 500);
    }

    homeContainer.addEventListener('click', (event) => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');

        const x = event.clientX - homeContainer.offsetLeft;
        const y = event.clientY - homeContainer.offsetTop;
        createExplosion(x, y);
    });

    const handleHoverEffect = (image, offset) => {
        image.addEventListener('mouseover', () => {
            image.style.transform = `translateY(-${offset}%)`;
        });
        image.addEventListener('mouseout', () => {
            image.style.transform = 'translateY(0)';
        });
    };

    handleHoverEffect(document.getElementById('siteImage'), 30);
    handleHoverEffect(document.getElementById('siteImage2'), 37);
    handleHoverEffect(document.getElementById('siteImage3'), 37);
});
// #endregion
document.addEventListener('DOMContentLoaded', function () {
    const modalElement = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = document.getElementById('modalVideoSource');
    const bootstrapModal = new bootstrap.Modal(modalElement);

    // Clique no botão "Ver Mais" dentro de cada item
    document.querySelectorAll('.item').forEach(item => {
      const button = item.querySelector('button');
      if (button) {
        button.addEventListener('click', (e) => {
          e.stopPropagation(); // evitar propagação desnecessária
          const videoSrc = item.getAttribute('data-video');

          if (videoSrc) {
            modalVideo.pause();
            modalVideoSource.src = videoSrc;
            modalVideo.load();
            bootstrapModal.show();
            modalVideo.play();
          }
        });
      }
    });

    // Pausar vídeo ao fechar o modal
    modalElement.addEventListener('hidden.bs.modal', () => {
      modalVideo.pause();
      modalVideo.currentTime = 0;
    });

    // Reproduzir os vídeos pequenos no hover
    document.querySelectorAll('.item video').forEach(video => {
      video.addEventListener('mouseenter', () => video.play());
      video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    });
  });