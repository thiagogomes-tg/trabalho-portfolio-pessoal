// Seleciona o elemento 'form'
document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector('form');

    // Adiciona um evento de escuta para o envio do formulário
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão para evitar recarregar a página
        alert('Mensagem enviada! Obrigado por entrar em contato.');
        formulario.reset();
    });
});