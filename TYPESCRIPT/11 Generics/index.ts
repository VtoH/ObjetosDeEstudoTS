fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3')
//usando o metodo then para conseguir os daos so site
.then(res => res.json())
.then(data => {
    //e aqui fazer o que voce quer com os dados
}) 
//abstraindo o metodo res.json

async function FetchMelhorado(url:string) {
    const res =await fetch(url)
    const data = await res.json()
    return data;
}

FetchMelhorado('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3')
.then(data =>{
    //por o que voce quer com os dados
})
//mais agora surge um problema, como tipar todo mundo? e bem simples sabendo que o site vai te retornar alguns
//objetos e so fazer uma interface que receba eles

interface Photo {
    albumId:number,
    id:number,
    title:string,
    url:string,
    thumbnailUrl:string
}
//tentando percorer o meu data
async function FetchMelhorado0(url:string) {
    const res =await fetch(url)
    const data = await res.json()
    return data;
}

FetchMelhorado0('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3')
.then((data:Photo[]) => {
    data.map(item => console.log(item.albumId))
})
//mais e se por exemplo nos quisesemos retornar algo a mais como um status?
async function FetchMelhorado1(url:string) {
    const res =await fetch(url)
    const data = await res.json()
    return{
        status: res.status, 
        data
    }
}

//e agora ja temos um erro por que na verdade nos não sabemos o ainda o valor de retorno desta api
FetchMelhorado1('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3')
.then((data:Photo[]) => { 
    data.map(item => console.log(item.albumId))
})
//concertando o erro usando generic
//o que o generic faz? ele permite que a gente tipe um valor generico para que a função retorne para gente o dado tipado corretamente
                                     //o que essa parte faz e dar um valor padrão ao type, 
                                     //caso nada for passsado ele sera um array de strings (= strings[])
                                     //ele não e necessario para o funcionamento mais ajuda
async function FetchMelhorado2 <Type = string[]> (url:string) {
    const res = await fetch(url);
    const data:Type = await res.json(); //E AQUI E COMO SE NOS PASSASEMOS UM TIPO COMO PARAMETRO
    return{
        status: res.status,  
        data
    }
}

//e agora ja temos um erro por que na verdade nos não sabemos o ainda o valor de retorno desta api
FetchMelhorado2<Photo[]>('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=3')
.then(res => { 
    res.data.map(item => console.log(item.albumId))
});