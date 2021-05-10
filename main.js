
var corpo_tabela = document.querySelector("tbody");

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function criaLinha(pesagem) {

    linha = document.createElement("tr");

    tdId = document.createElement("td");
    tdDataSaida = document.createElement("td");
    tdProduto = document.createElement("td");
    tdPlaca = document.createElement("td");
    tdPesoSaida = document.createElement("td");
    tdPesoEntrada = document.createElement("td");
    tdPesoLiquido = document.createElement("td");
    tdCliente = document.createElement("td");


    tdId.innerHTML = pesagem.Pes_Codigo
    tdDataSaida.innerHTML = pesagem.Pes_DataSaida
    tdProduto.innerHTML = pesagem.produto
    tdPlaca.innerHTML = pesagem.pes_placa
    tdPesoSaida.innerHTML = pesagem.Pes_PesoSaida
    tdPesoEntrada.innerHTML = pesagem.Pes_PesoEntrada
    tdPesoLiquido.innerHTML = pesagem.PesoLiquido
    tdCliente.innerHTML = pesagem.Cliente


    linha.appendChild(tdId);
    linha.appendChild(tdCliente);
    linha.appendChild(tdDataSaida);
    linha.appendChild(tdProduto);
    linha.appendChild(tdPlaca);
    linha.appendChild(tdPesoSaida);
    linha.appendChild(tdPesoEntrada);
    linha.appendChild(tdPesoLiquido);
    
    return linha;
}



function main() {
    let data = fazGet("http://mlsolucoes.online/teste");
    let pesagens = JSON.parse(data);
    let tabela = document.querySelector("tbody");
    pesagens.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    
    // Para cada usuario
    // criar uma linha
    // adicionar na tabela
}

main()