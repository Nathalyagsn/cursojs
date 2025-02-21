function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ano')
    var res = document.getElementById ('res')

    if(fAno.value > ano || Number(fAno.value) == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } 
}