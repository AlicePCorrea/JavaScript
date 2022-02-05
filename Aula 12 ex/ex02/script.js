function verificar() {
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("[ERRO] Verifique o dado e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src', 'menino.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                //crianca
                img.setAttribute('src', 'menina.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else{
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Dectectamos ${genero}, com ${idade} anos`
        res.appendChild(img)
    }
}