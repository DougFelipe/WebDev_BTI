class Passageiro {
    constructor(nome, cpf, endereco, classe) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.classe = classe;
    }
}


// Função para carregar os passageiros do localStorage
function carregarPassageiros() {
    // Verificar se existe algo armazenado no localStorage
    if (localStorage.getItem('passageiros')) {
        // Converter de volta para um array de objetos JavaScript
        return JSON.parse(localStorage.getItem('passageiros'));
    } else {
        // Se não houver dados, retornar um array vazio
        return [];
    }
}

// Carregar passageiros existentes no localStorage ao iniciar a aplicação
var passageiros = carregarPassageiros();

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

    // Armazenar o vetor de passageiros no localStorage
    localStorage.setItem('passageiros', JSON.stringify(passageiros));

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

}

//Teste para ver o JSON no console.log
/*var jsonPassageiros = JSON.stringify(passageiros);

var passageirosJS = JSON.parse(jsonPassageiros)*/

function filtrarPassageiros(criterio, consulta) {
    return passageiros.filter(function(passageiro) {
        // Verifica se a propriedade existe e não é undefined antes de chamar toLowerCase
        if (passageiro[criterio] !== undefined) {
            return passageiro[criterio].toLowerCase().includes(consulta.toLowerCase());
        }
        return false; // Se a propriedade for undefined, retorna false para o filtro
    });
}



function filtrar(tipo, valor) 
{
    
    if (tipo === 'all') 
    {

        const listaPassageiros = document.getElementById('passengersList');
        listaPassageiros.innerHTML = ''; // Limpa a lista anterior

        // Utiliza forEach para iterar sobre o array de passageiros
        passageiros.forEach((passageiro, indice) => 
        {
            // Cria um elemento div para cada passageiro e define seu conteúdo HTML
            const div = document.createElement('div');
            div.className = 'passenger';
            div.innerHTML = `
            <strong>Passageiro ${indice + 1}:</strong><br>
            <strong>Nome:</strong> ${passageiro.nome}<br>
            <strong>CPF:</strong> ${passageiro.cpf}<br>
            <strong>Endereço:</strong> ${passageiro.endereco}<br>
            <strong>Classe:</strong> ${passageiro.classe}<br>`;
            // Adiciona a div criada ao elemento pai
            listaPassageiros.appendChild(div);

        });


    }

    else
    {
        // Definindo searchType e searchInput com base nos parâmetros tipo e valor
        const searchType = tipo; // O tipo de campo a ser filtrado (ex: 'nome', 'cpf', etc.)
        const searchInput = valor; // O valor a ser procurado
        const passageirosFiltrados = filtrarPassageiros(searchType, searchInput);
        exibirPassageirosFiltrados(passageirosFiltrados);

    }


}

const exibirPassageirosFiltrados = function(passageirosFiltrados) {
    const listaPassageiros = document.getElementById('passengersList');
    listaPassageiros.innerHTML = ''; // Limpa a lista anterior

    // Verifica se há passageiros após o filtro
    if (passageirosFiltrados.length > 0) {
        // Se sim, exibe os passageiros filtrados
        passageirosFiltrados.forEach((passageiro, indice) => {
            const div = document.createElement('div');
            div.className = 'passenger';
            div.innerHTML = `
                <strong>Passageiro ${indice + 1}:</strong><br>
                <strong>Nome:</strong> ${passageiro.nome}<br>
                <strong>CPF:</strong> ${passageiro.cpf}<br>
                <strong>Endereço:</strong> ${passageiro.endereco}<br>
                <strong>Classe:</strong> ${passageiro.classe}<br>
            `;
            listaPassageiros.appendChild(div);
        });
    } else {
        // Se não, informa que nenhum passageiro foi encontrado
        listaPassageiros.innerHTML = '<div>Nenhum passageiro encontrado.</div>';
    }
};