// Inicializa a animação AOS
AOS.init();




const pre_carremento = document.querySelector(".pre-carregamento");

function preCarregamento(){
    pre_carremento.style.opacity = "0";
    pre_carremento.style.display = "none";
    setTimeout(() => {
        pre_carremento.style.display = "none";
    }, 5000);
}

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

    // Inicializa o tema e a imagem do foguete de acordo com a hora do dia
    switchMode();

   
    setInterval(switchMode, 360000);

    // Adiciona o evento de clique para alternar manualmente o tema
    toggleButton.addEventListener('click', toggleThemeManually);
});



function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}



// Configura o Swiper para a apresentação de slides
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
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});


// Carrousel card 

var swiper = new Swiper(".mySwiperCard", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable:true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1025: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});




// Carrousel Contato 


var swiper = new Swiper(".mySwiperContato", {
    autoplay: true,
    loop: true,
    autoplay: {
        delay: 5000, // Define o tempo de intervalo em milissegundos
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable:true,
    },
});


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

// Ativa o contador ao rolar a página
$(window).scroll(function () {
    var alturaBody = $(window).height();
    var distanciaElemento = $('.contador').offset().top;
    var posicaoScroll = $(this).scrollTop();
    var alturaElemento = $('.contador').outerHeight();

    if (posicaoScroll > (distanciaElemento + alturaElemento - alturaBody)) {
        ativaContador();
    }
});




// Função para exibir texto animado
document.addEventListener("DOMContentLoaded", function () {
    const titulo = document.querySelector('.titulo-principal');
    const palavras = [
        'Desenvolvedor',
        'Front-End',
        'SASS',
        'Angular',
        'React',
        'PHP',

    ];

    // Função para a animação de escrita
    function typeWrite(elemento, palavras) {
        let contador = 0;
        let textoAtual = '';
        let isDeleting = false;

        // Função recursiva para escrever e apagar texto
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


// Alterna a visibilidade do menu ao clicar no botão de menu
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', function () {
        navList.classList.toggle('active');
    });
});

// Mostra o botão de voltar ao topo ao rolar a página
let mybutton = document.getElementById("backToTopBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    mybutton.style.display = (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) ? "block" : "none";

}

// Função para rolar a página até o topo
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Funções do chatbot
const chatIcon = document.getElementById('chat-icon');
const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const backButton = document.getElementById('back-button');
const sendButton = document.getElementById('send-button');

// Mensagens do chatbot
const botMessages = {
    "1": " eu construo, otimizo e mantenho sites responsivos e atrativos. Também ofereço design gráfico, SEO, e-commerce, suporte técnico, marketing digital e consultoria, garantindo uma presença online eficaz para alcançar o público-alvo e impulsionar negócios.<br><br>Digite Voltar para retornar ao menu inicial.",
    "2": "valorizo a entrega pontual dos serviços. Com prazos bem definidos e comunicação transparente, garanto que cada projeto seja concluído dentro do cronograma acordado, atendendo às suas expectativas e necessidades sem comprometer a qualidade.<br><br>Digite Voltar para retornar ao menu inicial.",
    "3": "ofereço diversas formas de pagamento para sua conveniência. Aceito transferências bancárias, cartões de crédito e débito, além de pagamentos via plataformas digitais. Trabalho com planos de pagamento flexíveis, permitindo parcelamentos que se ajustam ao seu orçamento, sempre com total transparência e segurança.<br><br>Digite Voltar para retornar ao menu inicial.",
    "ajuda": "Olá, você está falando com nosso Boot de atendimento do Miguel Estou aqui para te ajudar a tirar suas dúvidas. Digite:<br><br>1 para dúvidas sobre nossos serviços<br><br>2 para dúvidas sobre nossa entrega de projeto<br><br>3 para dúvidas sobre formas de pagamento.<br><br>",
    "voltar": "Olá, você está falando com nosso Boot de atendimento do Miguel. Estou aqui para te ajudar a tirar suas dúvidas. Digite:<br><br>1 para dúvidas sobre nossos serviços<br><br>2 para dúvidas sobre nossa entrega de projeto<br><br>3 para dúvidas sobre formas de pagamento.<br><br>",
    "oi": "Digite abaixo o número referente à sua dúvida:<br><br>1 para dúvidas sobre nossos serviços<br><br>2 para dúvidas sobre nossa entrega de projeto<br><br>3 para dúvidas sobre formas de pagamento.<br><br>"
};

// Adiciona uma mensagem ao chat
function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    const icon = sender === 'Você' ? '<i class="bx bxs-user"></i> ' : '<i class="bx bxs-bot"></i>';
    messageElement.innerHTML = `<strong>${icon} ${sender}:</strong> ${message}`;
    messageElement.classList.add('message-container', sender === 'Você' ? 'user-message' : 'bot-message');
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Envia uma mensagem do usuário e responde com uma mensagem do bot
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

// Eventos para enviar mensagens
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') sendMessage();
});

sendButton.addEventListener('click', sendMessage);

// Abre o chat ao clicar no ícone
chatIcon.addEventListener('click', () => {
    chatContainer.style.display = 'block';
});

// Fecha o chat ao clicar no botão de voltar
backButton.addEventListener('click', () => {
    chatContainer.style.display = 'none';
});

// Mensagem inicial do chat
addMessage('Atendimento', 'Olá, você está falando com nosso Boot de atendimento do Miguel :). Estou aqui para te ajudar a tirar suas dúvidas. Digite "oi" para começar.');

// Função para manipular a animação de blobs na página inicial
document.addEventListener('DOMContentLoaded', () => {
    const homeContainer = document.querySelector('.home-container');
    const images = document.querySelectorAll('.blobImage');
    let currentIndex = 0;

    // Função para criar a explosão
    function createExplosion(x, y) {
        const explosion = document.createElement('div');
        explosion.className = 'explosion';
        explosion.style.width = '20px';
        explosion.style.height = '20px';
        explosion.style.position = 'absolute';
        explosion.style.left = `${x}px`;
        explosion.style.top = `${y}px`;
        homeContainer.appendChild(explosion);

        setTimeout(() => {
            explosion.remove();
        }, 500); // A explosão desaparecerá após 500 ms
    }

    homeContainer.addEventListener('click', (event) => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');

        // Cria uma explosão na posição do clique
        const x = event.clientX - homeContainer.offsetLeft;
        const y = event.clientY - homeContainer.offsetTop;
        createExplosion(x, y);
    });


    const image = document.getElementById('siteImage');

    image.addEventListener('mouseover', () => {
        image.style.transform = 'translateY(-30%)';
    });
  
    image.addEventListener('mouseout', () => {
        image.style.transform = 'translateY(0)';
    });
  
    const image2 = document.getElementById('siteImage2');
  
    image2.addEventListener('mouseover', () => {
        image2.style.transform = 'translateY(-37%)';
    });
  
    image2.addEventListener('mouseout', () => {
        image2.style.transform = 'translateY(0)';
    });
  
    const image3 = document.getElementById('siteImage3');
  
    image3.addEventListener('mouseover', () => {
        image3.style.transform = 'translateY(-37%)';
    });
  
    image3.addEventListener('mouseout', () => {
        image3.style.transform = 'translateY(0)';
    });
  




});



