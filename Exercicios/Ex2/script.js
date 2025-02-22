function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('ano');
    var res = document.getElementById ('res');

    if(fAno.value.length ==  0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var sexo = document.getElementsByName('sexo');
        var idade = ano - Number(fAno.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexo[0].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //crianca
            } else if (idade < 21 ) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }

        } else if (sexo[1].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                //crianca
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    }
}


