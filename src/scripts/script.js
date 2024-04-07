let darkBtn = document.getElementById('dark') // Botão Modo Dark
let lightBtn = document.getElementById('light') // Botão Modo Light
let bodyElement = window.document.body // Captura o Body

// Adiciona evento de clique ao Botão Modo Dark
darkBtn.addEventListener('click', () => {
    bodyElement.classList.add('dark-mode') // Adiciona a Class "dark-mode" para ativar o modo escuro
    darkBtn.classList.add('dark-mode') // Adiciona a Class "dark-mode" para ativar o modo escuro
}); 

// Adiciona evento de clique ao Botão Modo Light
lightBtn.addEventListener('click', () => {
    bodyElement.classList.remove('dark-mode'); // Remove a class "dark-mode" para desativar o modo escuro
    darkBtn.classList.remove('dark-mode'); // Remove a class "dark-mode" para desativar o modo escuro
}); 
