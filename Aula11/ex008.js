var velocidadeLimite = 80
var suaVelocidade = 90
console.log(`A velocidade do seu carro é ${suaVelocidade}KM/h`)

if (suaVelocidade >= velocidadeLimite ) {
    console.log(`Você foi multado por ultrapassar a velocidade limite de ${velocidadeLimite}KM/h`)
} else {
    console.log(`Dirija com cuidado.`)
}