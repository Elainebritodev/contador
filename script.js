function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let resultado= document.getElementById('res')

    //resolvendo se algum campo estiver vazio

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Por favor preencha todos os campos indicados e tente novamente')
    } else {
        resultado.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

    //resolvendo se passo for 0

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for ( let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        } else {
            //contagem regressiva
            for ( let c = i; c>= f; c -= p) {
                resultado.innerHTML += `${c} \u{1F449} `
            }
        }   
        resultado.innerHTML += `\u{1F3C1}`
    }
}
