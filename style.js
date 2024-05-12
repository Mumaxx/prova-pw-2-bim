function fazGet(url){
 let request = new XMLHttpRequest()
 request.open("GET",url, false)
 request.send()
 return request.responseText
}

function criaLinha(usuario){

linha = document.createElement("tr")
tdCode = document.createElement("td")
tdNome = document.createElement("td")
tdCode.innerHTML = usuario.code
tdNome.innerHTML = usuario.name

linha.appendChild(tdCode);
linha.appendChild(tdNome); 


return linha;
}

function main(){
 data = fazGet("https://parallelum.com.br/fipe/api/v2/cars/brands")
 let usuarios  =  JSON.parse(data);
 console.log(usuarios)
 let tabela = document.getElementById("tabela")
usuarios.forEach(element => {
    let linha =  criaLinha(element);
    tabela.appendChild(linha);
});
}

main()
