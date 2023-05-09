// //criando obj para armazenar nosso usuario
// // const usuario = {
// //     nomeUsuario:"" ,
// //     senhaUsuario:""
// // }

// //gerando dois obj no localStorage
// const usuario1 = {
//     nomeUsuario:"pedro" ,
//     senhaUsuario:"12345"
// }
// const usuario2 = {
//     nomeUsuario:"anzina" ,
//     senhaUsuario:"12345"
// }

// let listaDeUsuarios = []
// listaDeUsuarios.push(usuario1)
// listaDeUsuarios.push(usuario2)

// localStorage.setItem("listaUser",  JSON.stringify(listaDeUsuarios));

// //evento login
// addEventListener("click",(evento)=>{
//     // console.log(evento.target.id == "btnSubmit");
//     evento.preventDefault
//     if(evento.target.id == "btnSubmit"){
        
//         // let usuario = document.querySelector("#idUser").value;
//         // let senha = document.querySelector("#idPass").value;
//         // console.log(usuario)
//         // console.log(senha)
//         //RECUPERANDO DOS INPUTS
//         let inputUserValue = document.querySelector("#idUser").value;
//         let inputSenhaValue = document.querySelector("#idPass").value;
//         const h1Titulo = document.querySelector("#titulo");

//         let lista = JSON.parse(localStorage.getItem("listaUser"));

//         lista.forEach((usuario) => {
//             console.log(usuario.nomeUsuario)
//             //VALIDAÇÃO
//             if(inputUserValue == usuario.nomeUsuario && inputSenhaValue == usuario.senhaUsuario){
//                 console.log("Validado")
//                 //const h1Titulo = document.querySelector("#titulo");
//                 h1Titulo.innerHTML = "BEM VINDO: "+ usuario.nomeUsuario.toUpperCase()
//                 return;
//             }else{
//                 console.log("Não Validou")
//                 h1Titulo.innerHTML = "";
//                 return;
//             }
//         });
//     }

// });

//parte do professor
//GERANDO DOIS OBJETOS NO LOCALSTORAGE
const usuario1 = {
    nomeUsuario:"predo",
    senhaUsuario:"12345"
}

const usuario2 = {
    nomeUsuario:"anzina",
    senhaUsuario:"12345"
}

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser",  JSON.stringify(listaDeUsuarios));


//VAMOS CRIAR UM OBJETO PARA ARMAZENAR O NOSSO USUÁRIO
// const usuario = {
//     nomeUsuario:"",
//     senhaUsuario:""
// }



addEventListener("click",(evento)=>{

    evento.preventDefault();

    if(evento.target.id == "btnSubmit"){
        // let usuario = document.querySelector("#idUser").value;
        // let senha = document.querySelector("#idPass").value;
       
        // RECUPERANDO DOS IMPUTS
        let inputUserValue = document.querySelector("#idUser").value;
        let inputPassValue = document.querySelector("#idPass").value;
        
        const h1Titulo = document.querySelector("#titulo");

        let lista = JSON.parse(localStorage.getItem("listaUser"));

        lista.forEach((usuario)=> {
             //VALIDAÇÃO
        if(inputUserValue == usuario.nomeUsuario && inputPassValue == usuario.senhaUsuario){
            console.log("VALIDADO!");   
            h1Titulo.innerHTML = "Bem vindo : " + usuario.nomeUsuario;
            return;
        }else{
            console.log("NÃO VALIDOU!");
            h1Titulo.innerHTML = "";
        }
        });
}
});