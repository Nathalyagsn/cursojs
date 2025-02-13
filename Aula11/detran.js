function calcular() {
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.getElementById('res')

    var vel = Number(txtv.value)

    res.innerHTML =  `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`

    if (vel > 60) {
        res.innerHTML += `Você ultrapassou o limite de <strong>60KM/h</strong>. Você está <strong>MULTADO</strong>.`
    }

    res.innerHTML += `<p>Digira sempre com cinto de segurança!</p>`
    
}