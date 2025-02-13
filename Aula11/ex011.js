function origem() {
    var input = document.getElementById('nacionalidade');
    var nacionalidade = input.value.trim().toLowerCase(); 

    var res = document.getElementById('res');
    
    res.innerHTML = `<p>Nascido em ${nacionalidade}</p>`; 

    if (nacionalidade === 'brasil') {
        res.innerHTML += `<p>Você é Brasileiro</p>`;
    } else {
        res.innerHTML += `<p>Você é gringo</p>`;
    }
}
