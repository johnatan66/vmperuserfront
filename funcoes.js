function autenticar(){
    var txtEmail = document.getElementById("txtEmail").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log(txtEmail+'/'+txtSenha);
    // montando o corpo da mensagem
    var msgBody ={
        email: txtEmail,
        senha: txtSenha

}

// como é solicitação usa o POST e temos que montar um objeto cabeçalho
// como fizemos a seleção no POStMAN, indicamos que o metodo é POST, o corpo é o objeto convertido para um string e o 
//cabeçaho é para indicar que essa STRING vai no formato JSON
var cabecalho ={
    method: "POST",
    body : JSON.stringify(msgBody),
    headers : {
        'Content-Type': 'application/json'
    }

}

fetch("http://localhost:8080/login", cabecalho)
.then(res => res.json())
.then(res => logar(res))
.catch(err => trataErro(err));
}
function logar(res){
    //alert("login bem sucedido!!") //mandaria um alerta em formato de push dizendo que o login foi bem sucedido
    //console.log(res);
    localStorage.setItem("VMuser", JSON.stringify(res));
    window.location = "perfil.html";

}
function trataErro(err){
    console.log(err)
    document.getElementById("msg").style="visibility:visible";
    
}