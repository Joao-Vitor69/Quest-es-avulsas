while(true){
    let nota = prompt("Digite sua nota: ")
    nota = parseFloat(nota)

    if(nota >=0 && nota<=10){
        alert("Seu número é válido.")
        break
    }else{
        alert("Digite novamente")
    }
}