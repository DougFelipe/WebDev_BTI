class Passageiro {
    constructor(nome, cpf, endereco, classe) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.classe = classe;
    }
}

var passageiros = [];

function verificarInputs() {

    try {

        var nome = document.getElementById('nome').value;
        var cpf = document.getElementById('cpf').value;
        var endereco = document.getElementById('endereco').value;
        var opcoes = document.getElementsByName('opcao');
        var opcao;

        for (var i = 0; i < opcoes.length; i++) {
            if (opcoes[i].checked == true) {
                opcao = opcoes[i].value;
                break;
            }
            if (opcoes[opcoes.length - 1].checked == false) {
                opcao = '';
            }
        }

        if (nome === '' || cpf === '' || endereco === '' || opcao === '') {
            throw new Error('Preencha todos os inputs.');
        }

        else {

            for (pessoa of passageiros) {
                if (pessoa.cpf == cpf) {
                    window.alert("CPF já cadastrado!");
                    return;
                }
            }


            cadastrarPassageiro(nome, cpf, endereco, opcao);
        }


    } catch (error) {
        window.alert(error.message);

    }



}

function cadastrarPassageiro(nome, cpf, endereco, classe) {

    var passageiro = new Passageiro(nome, cpf, endereco, classe);
    passageiros.push(passageiro);

    // Limpa os campos após o cadastro
    document.getElementById('nome').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('endereco').value = '';
    var classe = document.getElementsByName('opcao');
    for (var i = 0; i < classe.length; i++) {
        classe[i].checked = false;
    }

    //  alerta de cadastro realizado
    alert('Cadastro Realizado com sucesso!');

    /*// Teste para ver se está cadastrando os passageiros no vetor
    for (var pessoa of passageiros) {
        console.log(pessoa);
    }*/

    //Teste para ver o JSON no console.log
    var jsonPassageiros = JSON.stringify(passageiros);

    console.log(jsonPassageiros);
}