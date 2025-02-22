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
                img.setAttribute('src','imagens/bebe-f.png')
            } else if (idade < 21 ) {
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-f.png')
            }

        } else if (sexo[1].checked) {
            genero = 'Homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else {
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos: ${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}


