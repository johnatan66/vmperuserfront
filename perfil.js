var templatefoto='<img src="{{IMAGEMFOTO}}">';
var templateBio='<h3> {{NOME}} </h3> <hr> <p>RACKF: {{RACF}}</p> <p>Setor: {{SETOR}}</p> <p>Telefone: {{TELEFONE}}</p>';
var templatePedidos = '<div class="row">'+'<div class="col-12"><a href="detalhe.html?id={{NUM}}"> {{DATA}} {{OBSERVACOES}} </a></div>'+'</div>';




function carregaperfil(){
    // qual a logica disso?
    // primeiro: se o usuario esta logado, as info dele estão no localStorage,
    // se nao tiver, eu mando pro index
    // se tiver eu só preencho as coisas

    var userSTR = localStorage.getItem("VMuser");
    console.log(userSTR);

    if(!userSTR){
        window.location="index.html"; // se nao existir info do usuario, ele nao ta logado, logo mando pro index
    }

    usuario = JSON.parse(userSTR);
    
    document.getElementById("foto").innerHTML = templatefoto.replace("{{IMAGEMFOTO}}",usuario.linkfoto);
    document.getElementById("personal").innerHTML = templateBio.replace("{{NOME}}",usuario.nome)
                                                            .replace("{{RACF}}",usuario.racf)
                                                            .replace("{{SETOR}}",usuario.setor)
                                                            .replace("{{TELEFONE}}",usuario.telefone);

    var todosPedidos="";
    for(i=0; i<usuario.pedidos.length; i++){
        todosPedidos = todosPedidos+templatePedidos.replace("{{DATA}}",usuario.pedidos[i].data)
                                                    .replace("{{OBSERVACOES}}",usuario.pedidos[i].observacoes)
                                                    .replace("{{NUM}}",usuario.pedidos[i].numSolicitacao);

    }
    document.getElementById("pedidos").innerHTML = todosPedidos;
}
function logout(){
    localStorage.removeItem("VMuser");
    window.location = "index.html";
}
