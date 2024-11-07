async function funcaoAssincriona() {
    console.log('Início da minha função');

    let promesa = await new Promise((resolve) => setTimeout( () => resolve('Promise Resolvida'), 2000));

    console.log(promesa);
    console.log('finalizei');

}

funcaoAssincriona()

console.log('codigo fora da função ainda esta sendo execitado');