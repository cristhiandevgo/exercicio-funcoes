// Atividade 1: Alunos Aprovados

const alunos = [
    {
        id: 1,
        nome: "Maria",
        media: 8
    },
    {
        id: 2,
        nome: "Pedro",
        media: 7
    },
    {
        id: 3,
        nome: "Raul",
        media: 9
    },
    {
        id: 4,
        nome: "Aline",
        media: 5
    }
];

const media_aprovacao = 6;

let verifica_media = (alunos, media_aprovacao) => {
    let alunos_aprovados = [];

    for(let i = 0; i < alunos.length; i++){
        let {nome, media} = alunos[i];

        if(media >= media_aprovacao){
            alunos_aprovados.push(nome);
        }
    }

    exibe_aprovados(alunos_aprovados);
}

let exibe_aprovados = (alunos) => {
    console.log("Alunos aprovados: \n");
    for(aluno of alunos){
        console.log(aluno);
    }
}

verifica_media(alunos, media_aprovacao);

// Atividade 2: Call e apply
console.log("\nAtividade 2: This\n");

// call
function calcula_idade(anos){
	return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa_1 = {
    nome: "Raul",
    idade: 30
}

const pessoa_2 = {
    nome: "Maria",
    idade: 20
}

console.log(calcula_idade.call(pessoa_1, 11));
console.log(calcula_idade.apply(pessoa_2, [12]));