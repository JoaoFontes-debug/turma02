// const aPromise = new Promise((resolve, reject) => {
//     const aNumber = 37;
//     //reposta de sucesso
//     // resolve(aNumber)
//     //resposta de erro
//     reject(aNumber)
// })


// //consumindo promise
// // - Evocando o then - responsavel por receber a resposta de sucesso
// aPromise
//     .then(value =>  value)
//     .then(value => console.log(value))
//     .catch(reject => { 
//         console.log({reject})
//     })






// //USANDO FETCH

// //RESPONSE - objeto de retorno em co,unicaçao de API's
// const url = 'https://dog.ceo/api/breeds/image/random'
// const dogImg = document.querySelector('[data-js = "dog-img"]');
// console.log(dogImg);

// fetch(url)
//     //a resposta da fetch é enviada para o then
//     .then(dogData => {
//         //se false mmuda para true e executa
//         if(!dogData.ok){
//             //throw - manda a mensagem de erro para o catch
//             throw new Error(`HTTP error, status ${dogData.status}`)

//         }
//         //se tudo certo manda o objeto de reposta da api para o then
//         return dogData.json()

//     })
//     //pega a propriedade message do json enviado pelo then anterior
//     //poderia desestruturar e pegar apenas a mensagem assim then(({message}) => { console.lo(message)})
//     .then((qqcoisa) => {
//         dogImg.setAttribute('src', qqcoisa.message)

//         //O objeto tem apenas duas propriedades 'message e status'
//         console.log(qqcoisa.status)
//         console.log(qqcoisa.message)
//         console.log(qqcoisa)
        

//     })
//     .catch(error => {
//         console.log(error.message)
//         console.log(error)
//     })




//USANDO FETCH CODIGO MAIS LEGIVEL E DESACOPLADO ATRAVES DE FUNCÇOES COM APENAS UMA RESPONSABILIDADE

//RESPONSE - objeto de retorno em co,unicaçao de API's
const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js = "dog-img"]');
console.log(dogImg);

const ValidateHTTPStatus = dogData => {
    //se false mmuda para true e executa
    if(!dogData.ok){
        //throw - manda a mensagem de erro para o catch
        throw new Error(`HTTP error, status ${dogData.status}`)

    }
    //se tudo certo manda o objeto de reposta da api para o then
    return dogData.json()

}

const setDogImage = ({message: url}) => {
    dogImg.setAttribute('src', url)        
}

const handleRequestError = error => {
    console.log(error.message);
}

fetch(url)
    //a resposta da fetch é enviada para o then
    .then(ValidateHTTPStatus)
    //pega a propriedade message do json enviado pelo then anterior
    .then(setDogImage)
    .catch(handleRequestError)
