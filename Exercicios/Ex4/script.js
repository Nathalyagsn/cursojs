function calcular() {
    let numero = document.getElementById('txtnum')
    let tabuada = document.getElementById('seltab')
    
    if(numero.value.length == 0) {
        console.log('Digite um número')
    } else {
        let num = Number(numero.value)
        console.log(num)

        let c = 1
        tabuada.innerHTML = ''
        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            tabuada.appendChild(item)
            c++
        }
    } 
}