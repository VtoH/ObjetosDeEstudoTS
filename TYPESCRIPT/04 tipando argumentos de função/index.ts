function Hello (name:any) {   //qual o problema deste codigo? ele e do tipo any ou seja ele aceita qualquer coisa
    //seja um numero, uma string, um boolean etc mais qual o verdadeiro problema disso?
    console.log(`hello ${name}`)
}


//vamos supor que o que eu quero e usar o metodo toUpperCase que e um metodo de strings
('Vitin').toUpperCase //porem como o name e literalmente qualquer coisa ele pode não ser uma string
//e ae que mora o problema ja que como ele pode ser qualquer coisa ele pode não ser uma string e outro problema
//e: como o tipo e any essa função NÃO consegue trackiar o problema por que afinal de contas ele não consegue
//saber se o tipo e realmente string 

function Hello0 (name:any) {
    console.log(`hello ${name}`.toUpperCase) //esse metodo por exemplo ele claramente espera receber uma string 
    //mais o tipo dele e any então ele pode sim não funcionar da maneira que nos queremos
}

Hello0('vitin')
Hello0(0)

//mais se o tipo for string ele conseguiria trackear
function Hello1 (name:string) {   
        console.log(`hello ${name}`.toUpperCase)
}

Hello1('Vitin')
//Hello1(0) //descomente para testar

//mais como o erro foi parar no segundo metodo e so eu colocar que ele tambem aceita number certo?
//c voce for o ver o video 9 aos 32/33 minutos voce vai ver que no dele deu um erro mais aqui esta tudo dando certo
function Hello2 (name:string | number) {   
    console.log(`hello ${name}`.toUpperCase)
}

Hello2('Vitin')
Hello2(0) 

//e possivel passar 2 argumentos?
function Hello3 (name:string, age:number) {  //TEORICAMENTE era pra dar um erro no TS pq ele consideraria o age
    //obrigatorio a ser passado no hello2 porem era pra isso ser resolveido adicionando um ? pds do age para que 
    //ele não fosse obrigatorio 
    console.log(`hello ${name}`.toUpperCase)
}


Hello2('Vitin')
