let pessoa = [];
let lista = [];
let lista2 = [];
let sorteio = document.getElementById('lista-sorteio');

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value;
    let quant_amigo = document.getElementById('lista-amigos');

    pessoa.push(amigo);
    lista.push(amigo);

    let duplicates = pessoa.filter((item, index) => pessoa.indexOf(item) !== index);

    if (amigo == '') {
      alert("Favor coloque um nome válido");
    }
    else if (duplicates != ''){
      alert("Favor colocar nomes diferentes");
      pessoa.pop();
      lista.pop();
    }
    
    quant_amigo.innerHTML = pessoa;
    
}

function sortear() {
   embaralha(lista); 
   /*if(lista.length <= 3){
      alert("Favor adicionar mais de três nomes");
      return;
   }*/
   
   for(let i = 0; i < pessoa.length; i++){
    if(pessoa[i] != lista[i]){
        lista2.push(lista[i]);
    }
    else{
        embaralha[lista];
    };
   }
   pessoa.forEach((element, index) => {sorteio.innerHTML += `${element} -> ${lista2[index]}<br>`});
   
}

//Algorítmo de Fisher-Yates
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar() {
    pessoa = [];
    lista = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('nome-amigo').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}