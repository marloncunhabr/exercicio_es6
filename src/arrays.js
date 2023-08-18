const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 7 },
    { nome: 'Carlos', nota: 5 },
    { nome: 'Ana', nota: 9 },
    { nome: 'Pedro', nota: 4 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log('Alunos Aprovados:');
console.log(alunosAprovados);
