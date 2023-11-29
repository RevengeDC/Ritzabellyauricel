function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatMessages = document.getElementById('chatMessages');

    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.innerHTML = `<p class="message-text">${messageInput.value}</p>`;
    chatMessages.appendChild(userMessage);

    // Simular respuesta automática (puedes personalizar esto según tus necesidades)
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'other-message');
        botMessage.innerHTML = '<p class="message-text">¡Hola! Soy la inteligencia artificial. ¿En qué puedo ayudarte?</p>';
        chatMessages.appendChild(botMessage);

        // Hacer que el chat se desplace hacia abajo para mostrar la última respuesta
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);

    // Limpiar el cuadro de entrada
    messageInput.value = '';
}
