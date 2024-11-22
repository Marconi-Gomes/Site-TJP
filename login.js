// login.js

// Array para armazenar as credenciais dos usuários
const users = [
    { username: "marconi", password: "123" },
    { username: "luiz", password: "123" },
    { username: "Luiz Mario", password: "123" },
    { username: "visitante", password: "123" }
];

// Função para validar as credenciais
function isValidUser(username, password) {
    return users.some(user => user.username === username && user.password === password);
}

// Função para exibir mensagens de erro
function showErrorMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.style.color = "red";
    messageElement.textContent = message;
}

// Função de login principal
function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Verifica se as credenciais são válidas
    if (isValidUser(username, password)) {
        localStorage.setItem("isLoggedIn", "true"); // Armazena a sessão
        window.location.href = "index.html"; // Redireciona para a página principal
    } else {
        showErrorMessage("Usuário ou senha inválidos."); // Exibe mensagem de erro
    }
}

// Adiciona um evento ao botão de login
document.getElementById("loginButton").addEventListener("click", login);
