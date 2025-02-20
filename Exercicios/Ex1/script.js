function carregar() {
    var msg = document.getElementById('msg');
    var img = document.querySelector('img'); 
    var data = new Date();
    //var hora = data.getHours(); 
    var hora = 22
    

    
    

    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        msg.innerHTML = `Agora são ${hora} horas. Bom dia!`
        document.body.style.background = '#F2C879'
        
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        msg.innerHTML = `Agora são ${hora} horas. Boa tarde!`
        document.body.style.background = '#F28705'
    } else {
        img.src = 'imagens/noite.png'
        msg.innerHTML = `Agora são ${hora} horas. Boa noite!`
        document.body.style.background = '#0468BF'
    }
}
