  
if(JSON.parse(localStorage.getItem("user-token")) != null){
    
    let usuario = JSON.parse(localStorage.getItem("user-validado"));
    
    const legenda = document.querySelector("#figure-img figcaption");
    const img = document.querySelector("#foto");

    img.src = usuario.avatarUsuario;
    img.alt = usuario.nomeCompleto;
    
    legenda.textContent = usuario.nomeCompleto +" - "+ usuario.nomeUsuario;
    

    const botaoLogout = document.querySelector("#btnLogout");
    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("user-token");
        window.location.href = "../login.html";
    });
}else{
    alert("PARA ACESSAR ESSE CONTEUDO É PRECISO ESTAR LOGADO")
    window.location.href = "../login.html";
}
