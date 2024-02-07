
let alunos = [
    {
    id: 1,
    nome,
    nota1,
    nota2,
    nota3,
    nota4,
    mf,
    situacao
    }
]

let mg = 0

function calcular(){
    let id = 1
  let nome = document.getElementById("nome").value
  let nota1 = document.getElementById("nota1").value
  let nota2 = document.getElementById("nota2").value
  let nota3 = document.getElementById("nota3").value
  let nota4 = document.getElementById("nota4").value

  if (nota1 && nota2 && nota3 && nota4 && nome != "") {
    let mf = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    Situacao(mf)
   // mediageral(mf)
    
    document.getElementById("mf").innerHTML = mf
    document.getElementById("id").innerHTML = id
    document.getElementById("nomes").innerHTML = nome
  } else {
    document.getElementById("error").innerHTML =
      "Favor preencher todos os campos do formulario!!"
  }
}

function Situacao(mf){
    const situacao = ["Aprovado!", "Recuperação!", "Reprovado!"]

    switch (true) {
        case mf >= 70:
          document.getElementById("situacao").innerHTML = situacao[0]
          break
  
        case mf >= 50 && mf < 70:
          document.getElementById("situacao").innerHTML = situacao[1]
          break
  
        case mf < 50:
          document.getElementById("situacao").innerHTML = situacao[2]
          break
  
        default:
          console.log("Algo deu errado no Switch case")
      }
}

// function mediageral(mf){
//     let mg += mf
// }