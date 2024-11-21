
//addEventListener é uma funçao de alta ordem pois recebe uma funçao como argumento
document.addEventListener('click', handleDocumentClick)

function handleDocumentClick (){
    console.log('clicado')
}


//criando funçao de alta ordem

function getMultiplier (multiplier) {
    return function (aNumber){
        return aNumber * multiplier;
    }
}

const double    = getMultiplier(2);
const triple    = getMultiplier(3);
const quadruple = getMultiplier(4);

console.log(triple(2))


const getMultiplier_WithArrowFunction = multiplier => aNumber => aNumber * multiplier;

const quintuplo = getMultiplier_WithArrowFunction(5)

console.log(quintuplo(5))