//INTERFACE
interface Greet {
    (name:string): string
}

const greet:Greet = name => "hello " + name

//TYPE
type MetodoGreet = (name:string) => string

const greet1:MetodoGreet = name => "hello " + name

//sem usar nem um deles

const greet2 = (name:string) => "hello " + name