//INTERFACE E ALGO QUE PODE SUBSTITUIR A TIPAGEN

//usando tipagen
type Person = {
    name:string
    age:number
}
//usando interface

interface Person0 {
    name:string
    age:number
}

//VANTAGENS DA INTERFACE
//01 VOCE PDOE TER MAIS DE UMA INTERFACE COM O MESMO NOME
interface Person0 {
    sex: "male" | "female"
} //como pode ser visto isso não gerou nem um erro mais por que? por que o ts indentifica isso como algo a ser
//adicionado em uma interface so então agora nos temos uma interface Person0 com name,age e sex

const person: Person0 = {
   name:"cleitin",
    age:32,
    sex:"male" //se voce comentar o sex voce vai poder verificar que sim ela e obrigatoria
}

//02 UMA INTERFACE PODE EXTENDER DA OUTRA DE 2 MANEIRAS
//jeito A
interface Animal {
    sex: "male" | "female"
}
interface Human {
    name:string
    age:number
}
type Cleitin = Human & Animal

//jeito B
interface Animal0 {
    sex: "male" | "female"
}
interface Human0 extends Animal0 {
    name:string
    age:number
}

//existem outras diferenças mais a princiopio e isso
