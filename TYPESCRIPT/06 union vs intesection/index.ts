//para facilitar sua vida voce pode ver o codigo como | sendo um ou e o & sendo como um é mesmo

//UNION
type Cpf = string | number
function findPerson (cpf:Cpf) {
//cpf. aqui voce pode ver que os parametros dentro do cpf são bem diminuidos qunado comparamos com os do tipo
 //number ou do tipo string
 if (typeof cpf === "string") {
    return cpf.toUpperCase() //aqui ja vemos que temos bem mais parametros ja que o cpf so entra nesse bloco
    //de codigo se ele for uma string
    //dessa forma nos podemos indentificar se o typo vai ser uma string ou não ja que se ele for retornado em 
    //capslock ele sera uma string e se não for a unica possibilidade e que ele e um number
}

 //return cpf. //aqui o cpf tem todas os parametros de um tipo number
}

//findPerson("123")
//findPerson(123)

//INTESECTION ( & )

type Animal = {sex: "male" | "female"}
type Human = {fome:boolean}

type Person = Animal & Human 
//e dessa forma o person HERDA as propriedades tanto de animal quanto de human

function findPerons (person:Person) {
 //return person. //e aqui vemos que o person tem tanto sex do animal quanto o fome do human
}
