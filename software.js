
/* aqui criamos o template com os marcadores SOFtWARE, FORNECEDOR e VALOR, criamos colunas col-2 (só vai ate 12 max somando tudo)
e fizemoz no formato que queremos ver
*/
var template='<div class="row"> '+
'<div class="col-6"> {{SOFTWARE}}</div>'+
'<div class="col-4"> {{FORNECEDOR}}</div>'+
'<div class="col-2"> {{VALOR}}</div>'+
'</div>'

function inicializa(){
    alert("funcionou");

    /*a logica dessa função é, entrar em contato com o back end, receber o JSON (em formato de texto)
    converte-lo e exibir dentro da div "conteudo"
    O que vamos usar para isso a API fetch!*/
    fetch("http://localhost:8080/softwares")
    .then(res => res.json())
    .then(res => preenche(res));
    }
    function preenche(res){
        console.log(res);
        var texto="";
    /* aqui chamamos aquele template com os replace para substituir os marcadores pelos vaolores que estão na base slq, 
    colocamos fazer isso de i = 0 até i<que o tamanho da nossa lista, substituindo cada marcador pelo seu respectivo valor 
    dentro do campo no sql*/

        for(i=0; i<res.length; i++){
            texto = texto + 
            template.replace("{{SOFTWARE}}", res[i].nome) 
            .replace("{{FORNECEDOR}}", res[i].fornecedor)
            .replace("{{VALOR}}", "USS " +res[i].valor.toFixed(2));

        }
        document.getElementById("conteudo").innerHTML = texto;

}