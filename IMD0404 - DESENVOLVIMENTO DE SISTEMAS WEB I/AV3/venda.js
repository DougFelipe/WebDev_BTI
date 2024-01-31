//CLASSE PASSAGEIRO
class Passageiro
{
    constructor(nome, cpf, endereco,classe)
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



    var passageiro = new Passageiro(nome,cpf,endereco,classe);

    passageiros.push(passageiro);


    //TESTE PRA VER SE TA CADASTRANDO OS PASSAGEIROS NO VETOR
    for(var pessoa of passageiros)
    {
        console.log(pessoa);
    }

};