
// PÁGINA DE LOGUIN
document.getElementById('loginForm').addEventListener('submit', function(event) 
{
    event.preventDefault(); // Impede o envio do formulário

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username === 'admin' && password === 'admin') 
    {
        window.location.href = 'venda.html'; // Redireciona para a página de cadastro
    } else 
    {
        alert('Login e/ou senha incorretos');
    }
});

document.getElementById('limpar').addEventListener('click', function() 
{
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});