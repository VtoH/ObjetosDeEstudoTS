//MUDA DE GOSTO PARA GOSTO NORMALMENTE E POSSIVEL FAZER O QUE VOCE QUER ULTILIZANDO QUALQUER UMA DAS DUAS JA QUE AS MAIORES DIFERENÇAS
//SÃO EM COMO SE EH ESCRITO E A FORMA QUE RECEBEMOS O ERRO


//ultilizando INTERFACES

interface Animal {
    sex: "male" | "female"
    fome:boolean
    age:number
}

//asim como um type pode ser mesclado com uma interface usando o & uma interface pode se extender de um type
type zeru = {
    name:string
}

interface dois extends zeru {
    age:number
}

interface Mammal extends Animal {
    weaned:boolean
}

const animal:Mammal = {
sex:"male",
fome:true,
weaned:false,
age:6
}

//ultilizando TYPES
//se voce acresentar um extends mammal aqui no type person voce recebera um erro ja que nos types não da pra extender porem e sim possivel
//mesclar ultilizando o &

type Person = Mammal &{      //troque esse Mammal & por extends Mammal para testar
     name:string
} 

const animal0:Person = {
    name:"cletiin",
    sex:"male",
    fome:true,
    weaned:true,
    age:22
}

//UMA VANTAGEN DO TYPE
//desta forma damos referencia ao objeto cleitin que o sex deve ser igual ao SEXO o que eh algo que dessa forma não pode ser feito com
//interfaces
type SEXO = "MALE" | "FEMALE"

type cleitin = SEXO & {
    name:"cleitin"
    sex:SEXO
}