const alunos = [
    { nome: "Cris", nota: 10 },
    { nome: "Alexandre", nota: 7 },
    { nome: "Pablo", nota: 4 }
  ];
  
  function alunoAprovado(aluno) {
    return aluno.nota >= 7;
  }
  
  console.log(alunos.filter(alunoAprovado));
  console.log(alunos.some(alunoAprovado));
  console.log(alunos.every(alunoAprovado));