// Seleciona todos os elementos com a classe 'card'
const cards = document.querySelectorAll('.card');

// Adiciona o evento de mouseover e mouseout para cada card
cards.forEach(card => {
    // Quando o mouse passar sobre o card
    card.addEventListener('mouseover', () => {
        card.classList.add('card-hover'); // Adiciona a classe de animação
    });

    // Quando o mouse sair do card
    card.addEventListener('mouseout', () => {
        card.classList.remove('card-hover'); // Remove a classe de animação
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Captura o link de "Home"
    const linkHomeLogo = document.querySelector('#link-home-logo');
    // Captura a seção "Home"
    const paginaInicial = document.getElementById('pagina1');
    
    // Adiciona um evento de clique no link
    linkHomeLogo.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Realiza a rolagem suave até a seção "Home"
        paginaInicial.scrollIntoView({
            behavior: 'smooth' // Suave rolagem
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Captura o link de "Home"
    const linkHomeCabecalho = document.querySelector('#link-home-cabecalho');
    // Captura a seção "Home"
    const paginaInicial = document.getElementById('pagina1');
    
    // Adiciona um evento de clique no link
    linkHomeCabecalho.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Realiza a rolagem suave até a seção "Home"
        paginaInicial.scrollIntoView({
            behavior: 'smooth' // Suave rolagem
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Captura o link de "Conteúdo"
    const linkConteudo = document.getElementById('link-conteudo');
    // Captura a seção "Conteúdo"
    const secaoConteudo = document.getElementById('pagina-conteudo');
    
    // Adiciona um evento de clique no link
    linkConteudo.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Realiza a rolagem suave até a seção "Conteúdo"
        secaoConteudo.scrollIntoView({
            behavior: 'smooth' // Suave rolagem
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Captura o link de "Sobre"
    const linkSobre = document.getElementById('link-sobre');
    // Captura a seção "Sobre"
    const secaoCards = document.getElementById('cards-container');
    
    // Adiciona um evento de clique no link
    linkSobre.addEventListener('click', function(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Realiza a rolagem suave até a seção "Sobre"
        secaoCards.scrollIntoView({
            behavior: 'smooth' // Suave rolagem
        });
    });
});

document.addEventListener('DOMContentLoaded', function(){
    const linkAvaliacoes = document.getElementById('link-avaliacoes');
    const secaoAvaliacoes = document.getElementById('carrossel-section');

    linkAvaliacoes.addEventListener('click', function(event){
        event.preventDefault();
        secaoAvaliacoes.scrollIntoView({
            behavior: 'smooth'
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const modulos = document.querySelectorAll('.modulo');

    modulos.forEach(modulo => {
        const titulo = modulo.querySelector('.titulo-modulo');
        
        titulo.addEventListener('click', function() {
            // Adiciona ou remove a classe "active" no módulo clicado
            modulo.classList.toggle('active');
        });
    });
});


const carrossel = document.querySelector('.carrossel');
const items = document.querySelectorAll('.carrossel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;
const totalItems = items.length;

function showItem(idx) {
    const offset = -(idx * 620); // O container agora tem 620px de largura total
    carrossel.style.transform = `translateX(${offset}px)`;
}

prevBtn.addEventListener('click', () => {
    index = (index > 0) ? index - 1 : totalItems - 1;
    showItem(index);
});

nextBtn.addEventListener('click', () => {
    index = (index < totalItems - 1) ? index + 1 : 0;
    showItem(index);
});