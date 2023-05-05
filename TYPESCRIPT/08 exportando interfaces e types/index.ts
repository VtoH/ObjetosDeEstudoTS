//essa parte vem do interfaces .ts
import { Person, Email } from "./interfaces";

const person: Person = {
    name:"cleitin",
    age:22
}

//e dessa vez vimos que sem nem um tipo de importe o person ja veio diretamente ao index.ts
//ja que o outro diretorio e .d.ts o typescript logo o reconhece e o implementa neste diretorio
const email:Email = "ta flinstons?"

const pessoa:Person0.Default = {
    name:"vitin",
    age:32
}

const pessoaComEmail:Person0.WithContacts = {
    name:"cleitin",
    age:32,
    contacts:["cleitin@flinstons.com"]
}

//principais diferenças: o interfaces.ts e em resumo outro ts onde voce declara as interfaces e as importa aqui
//ja o person.d.ts ele e um arquivo proprio de DECLARAÇÃO logo com ele voce faz um codigo muito menor
//sem precisar importar nada mais muito typado