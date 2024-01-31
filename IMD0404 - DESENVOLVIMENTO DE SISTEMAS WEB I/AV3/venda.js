class Passageiro
{
    constructor(nome, cpf, endereco, classe)
    {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.classe = classe;
    }
}

var passageiros = [];

function cadastrarPassageiro()
{
    var nome = document.getElementById('nome').value;
    var cpf = document.getElementById('cpf').value;
    var endereco = document.getElementById('endereco').value;
    
    var opcoes = document.getElementsByName('opcao');
    var classe;

    for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            classe = opcoes[i].value;
        }
    }

    var passageiro = new Passageiro(nome, cpf, endereco, classe);
    passageiros.push(passageiro);

    // Limpa os campos após o cadastro
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('endereco').value = '';
    var opcoes = document.getElementsByName('opcao');
    for (var i = 0; i < opcoes.length; i++) {
        opcoes[i].checked = false;
    }

    //  alerta de cadastro realizado
    alert('Cadastro Realizado');

    // Teste para ver se está cadastrando os passageiros no vetor
    for(var pessoa of passageiros)
    {
        console.log(pessoa);
    }
}