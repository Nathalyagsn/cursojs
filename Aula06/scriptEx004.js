var nome =  prompt('Qual seu nome?')
document.write(`Olá, ${nome}. Seu nome tem ${nome.length} letras.</br>`) 
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()}.</br>`)
document.write(`Seu nome é minúsculo é ${nome.toLocaleLowerCase()}.`)
