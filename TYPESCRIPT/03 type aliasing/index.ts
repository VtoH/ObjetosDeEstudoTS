type Cpf = string //declarando um tipo
//o tipo cpf nesse exemplo e so um shortcute de string
type Fpc = string | number
//nesse outro exemplo nos juntamos dois tipos primiticos declarando eles em um so tipo o fpc
//outra coisa que podemos fazer e limitar mais ainda
type Sex = "male" | "female" | undefined
//e dessa forma o tipo sex so aceita esses 2 termos


const cpf:Cpf = "123" //pra testar e so tira as aspas 
const fpc:Fpc = "123"

const sex:Sex = "female" //voce pode apagar o que esta escrito e por somente as aspas
//que ele ja te sujere o que pode ser