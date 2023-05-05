import { ExitStatus } from "typescript"

//para tipar um objeto e usado as chaves e dentro delas e colocado as propriedades e os tipos dessas propriedades
const person:{ 
    name:string  //aqui nos passamos as propriedades e seus tipos
    age:number
    contacts:string|number[]
    teste:string[]
    sex?: "female"|"male"| undefined //o que esta interogação esta fazendo e transformando esse parametro em um 
    //parametro não obrigatorio então se voce retirar do objeto por exemplo o nome cleitin ele vai lhe retornar um erro
    //porem se voce retirar o sex não
 } = {  //agora nos damos o valor ao nosso person ctrl espaço e um atalho rapido para criar as propriedades
 name: "cletin",
 age:22,
 contacts:`vtohlf@gmail.com`,
 sex: "female", //teste comentando o sex e retirando o ?
 teste: [] //um array vazio tambem satisfaz o programa porem algo que não seja uma string dentro deste array
 //lhe gera um erro
}
//abstraindo as propriedades

type Person = { 
    //e dessa forma nos fizemos o que antes eram as propriedades a serem passadas virar um tipo
    name:string  
    age:number
    contacts:string|number[]
    teste?:string[]
    sex?: "female"|"male"| undefined
    estavivo:boolean
 }

const person2:Person = {
    name: "cletin",
    age:22,
    contacts:`vtohlf@gmail.com`, 
    estavivo:true
}

//entendo o parametro não obrigatorio

type teste = {
    teste:string //sabemos q e obrigatorio passar esta propriedade
    teste0?:string //e dessa forma nos ja sabemos que ele não e obrigatorio a se passar mais em resumo
    //o que o ? faz e dar a liberdade daquele parametro ser undefined então 
    teste1:string | undefined //esse parametro em resumo tem a mesma funcionalidade do teste0?:string
}

    //não gera erro
const teste:teste = {
    teste:"abablueble",
    teste1:undefined
}
    //gera erro
    //o erro e gerado por que mesmo o teste1 tem a mesma funcionalidade do teste0 ele ainda tem que ser definido
    //mesmo que essa definição seja um undefined
//const teste0:teste = {
//   teste:"abablueble",
//}
