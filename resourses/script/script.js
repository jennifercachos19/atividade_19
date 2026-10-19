let produtos = ["Vestido","Calças","Camisetas","Jaquetas","Calçados","Acessorios","Peças íntimas","Pijamas","Bolsas","Bodies"]
//cadastra um novo item
produtos.push("saia")
//verifica se o item está cadastrado no sistema
let buscar = prompt("digite o item que deseja verificar: ")
if(buscar == ""){
    alert("não é permitido campo vazio")
}
else{
 let verifique = produtos.filter(item =>
    item.toLocaleLowerCase().includes(buscar.toLocaleLowerCase().trim())
)
if(verifique.length != 0){
    alert("item cadastrado no sistema")
}
else{
    alert("item não cadastrado no sistema")
}
}
let condicao = prompt("digite a condiçao desejada: ")
if(condicao === ""){
    alert("não é permitido campo vazio")
}
else{
 // cria uma nova lista com os itens que atendem a condição desejada
 let listaFiltrada = produtos.filter(item => item.toLowerCase().startsWith(condicao.toLowerCase().trim()));

 if(listaFiltrada.length != 0){
  alert("item com as condições desejadas foram encontrados" + "\n" + listaFiltrada.join("\n"));  
 } 
else {
 alert("items com as condições desejadas não foram encontrados");
}
console.log(produtos);
console.log(listaFiltrada);
}

