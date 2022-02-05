function contar() {
    let inicio = document.getElementById('txtin')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length ==0){
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = "Contando: <br>"  
  
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

    if (p <= 0){
        window.alert('Passo inválido! Considerando Passo 1.')
        p = 1
    }
        for(let c = i; c <= f; c += p){ //crescente
            res.innerHTML += `${c} \u{2B50}`
        }
        
        for (let c = i; c >= f; c-= p){ //regressiva
            res.innerHTML += `${c} \u{2B50}`
        }
        res.innerHTML += `\u{1F3C1}`
    }

  
}