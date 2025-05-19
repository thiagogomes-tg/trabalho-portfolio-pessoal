document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão
        alert('Mensagem enviada! Obrigado por entrar em contato.');
        formulario.reset();
    });
});