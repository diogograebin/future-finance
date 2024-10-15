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
    const linkHome = document.getElementById('link-home');
    // Captura a seção "Home"
    const paginaInicial = document.getElementById('pagina1');
    
    // Adiciona um evento de clique no link
    linkHome.addEventListener('click', function(event) {
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

