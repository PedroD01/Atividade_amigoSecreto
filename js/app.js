let pessoa = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;
    let quant_amigo = document.getElementById('lista-amigos');
    pessoa.push(amigo);
    quant_amigo.innerHTML = pessoa;
    
}

/*function sortear() {
    
}

function reiniciar() {
    
}*/