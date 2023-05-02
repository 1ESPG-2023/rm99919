// const liELement = document.getElementsByTagName("li");
// console.log(liELement)
// for (let index = 0; index < liELement.length; index++) {
//    console.log(liELement[index].textContent)
// }
//--------------------------------------------------------------------------------------------------------------
// declaração de arrays
// let nr1 = [1, 2, 3, 4, 5]
// let nr2 = [, 6, 7, 8, 9, 10]
// let nr3 = [nr1, nr2]
// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);
//-------------------------------------------------------------------------------------------------------------- 
//    // listando um Array
// nr3.forEach((itensDoArray) => {
//     console.log(`Array-3 sendo listado ${itensDoArray}`)
// });
//--------------------------------------------------------------------------------------------------------------
// //listando o array com MAP
// nr3.map((numero, key)=>{

//     console.log(`${key+1} - Itens do array - ${numero}`)
//     numero.forEach((digitos)=>{
//         console.log(digitos)
//     })
// })
//--------------------------------------------------------------------------------------------------------------
// //declaração de arrays
// let nr1 = [1, 2, 3, 4, 5]
// let nr2 = [ 6, 7, 8, 9, 10]
// //espalhar o array com[...]
// let nr3 = [...nr1,... nr2]
// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);
//--------------------------------------------------------------------------------------------------------------
// nr3.map((numero, key)=>{
//     console.log(`${key+1} - Itens do array - ${numero}`)
  
// })
//--------------------------------------------------------------------------------------------------------------
// //convertendo htmllCollection em array de forma indireta
// const liELementHTML = document.getElementsByTagName("li");
// const liELementArray = [...liELementHTML];
// liELementArray.map((item,key)=>{
//     if (item.textContent == "item-39"){
//         console.log(`${key+1}-${item.textContent = "LOCALIZADO"}`)
//     }  
// })
//--------------------------------------------------------------------------------------------------------------
// function soma(p1, p2, p3){
//     nr1 = p1;
//     nr2 = p2;
//     return (parseInt(nr1) + parseInt(nr2) + parseInt(p3));
//     // console.log(`Resultado : ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`);
//     // console.log(`este foi o pararamtro que foi passado para a função: ${parametro}`);
// }
// soma();
//--------------------------------------------------------------------------------------------------------------
// //arrow function
// const mudaCor = ()=>{
//     //função set-TIMEOUT    
//     setTimeout(alert("EXECUTOU"), 50000);
// }
//--------------------------------------------------------------------------------------------------------------
//Função tradicional

function MudaCor(){
    let r = "";
    let g = "";
    let b = "";
    //random = gera numeros aleatorios entre 0 e 1
    //ceil, floor e round que arredondam o numero para cima, para baixo ou aleatoriamente
    //determinando para variavel r um valor entre 0 e 255
    r = Math.round(Math.random() * 255);
    g = Math.round(Math.random() * 255);
    b = Math.round(Math.random() * 255);
    const cabecalho = document.querySelector(".cabeçalho");
    cabecalho.setAttribute("style", `background-color: rgb(${r}, ${g}, ${b})`)
    tmp = setTimeout(MudaCor, 1000)

}
MudaCor();
//--------------------------------------------------------------------------------------------------------------
//exercicio 1

//alterar banner

function alterarBanner1(){

   let img1 = "img/banner-lateral-1.png";
   const esquerda = document.querySelector(".l-e img");
   const direita = document.querySelector(".l-d img")
   esquerda.src = img1;
   direita.src = img1
   tempo = setTimeout(alterarBanner2, 1000);
}
function alterarBanner2(){

    let img1 = "img/banner-lateral-2.png";
    const esquerda = document.querySelector(".l-e img");
    const direita = document.querySelector(".l-d img")
    esquerda.src = img1;
    direita.src = img1
    tempo = setTimeout(alterarBanner3, 1000);
 }

 function alterarBanner3(){

    let img1 = "img/banner-lateral-3.png";
    const esquerda = document.querySelector(".l-e img");
    const direita = document.querySelector(".l-d img")
    esquerda.src = img1;
    direita.src = img1
    tempo = setTimeout(alterarBanner1, 1000);
 }
alterarBanner1()
//--------------------------------------------------------------------------------------------------------------
//botao liga e desliga 
const botao = document.querySelector(".central button");
botao.addEventListener("click", ()=> {
   const imgLampada = document.querySelector(".central img");
   // const botao = document.querySelector(".central button");

   if(botao.textContent == "LIGAR"){
      imgLampada.src = "/img/pic_bulbon.gif"
      botao.textContent = "DESLIGAR"
   }else{
      imgLampada.src = "/img/pic_bulboff.gif"
      botao.textContent = "LIGAR"
   }
});
//--------------------------------------------------------------------------------------------------------------
// function ligaEDesliga(){

//    const imgLampada = document.querySelector(".central img");
//    // const botao = document.querySelector(".central button");

//    if(botao.textContent == "LIGAR"){
//       imgLampada.src = "/img/pic_bulbon.gif"
//       botao.textContent = "DESLIGAR"
//    }else{
//       imgLampada.src = "/img/pic_bulboff.gif"
//       botao.textContent = "LIGAR"
//    }
// }
//--------------------------------------------------------------------------------------------------------------

const inputUser = document.querySelector("input[name = 'nmUser']");
const labelUser = document.querySelector("label[for = 'idUser']")
inputUser.addEventListener("focus", () => {
   inputUser.setAttribute("style", `outline-color: #ff0000`);

});
inputUser.addEventListener("keyup", () => {
   if(inputUser.value.length<8){
   inputUser.setAttribute("style", `outline-color: #ff0000`);
   labelUser.setAttribute("style", `color: #ff0000`);
   console.log(inputUser.value.length)
   }else{
      inputUser.setAttribute("style", `outline-color: #dddddd`);
   }
});
