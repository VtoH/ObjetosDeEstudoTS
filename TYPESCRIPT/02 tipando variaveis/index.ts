//PARA VER O CODIGO BUILDADO VA NO INDEX.JS NA MESMA PASTA(02)
//tipando variaveis de forma basica
//o importante mesmo são os conceitos da tipagem aqui tipo onde fica cada coisa

//sem tipar
const personName = "Vitin"

//forçando essa constante a ser uma string
const personName0:string = "Vitin" //com isso se voce ultilizar algo que não seja uma string dentro desta const
//ela simplesmente chamara sua atenção com um erro 
// const teste:string = 1  //tire as barras do comentario para testar

//tipos primitivos
const Name:string = "Vitin"
const age:number = 18
const taVivo:boolean = true

//obrigando a ser um array de strings 
const contatos:string []= [
    "Vtohlf@gmail.com",
    `Vitosauro@outlook.com`
]

//e dessa forma a gente ainda obriga a ser um array mais agora nele pode conter tanto numeros quanto strings
const contatos0:(string|number) []= [
    "Vtohlf@gmail.com",
    `Vitosauro@outlook.com`,
    84-9432-1089
]