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