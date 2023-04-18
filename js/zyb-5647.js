//const liELement = document.getElementsByTagName("li");
//console.log(liELement)
//for (let index = 0; index < liELement.length; index++) {
//    console.log(liELement[index].textContent)
//}

//declaração de arrays
// let nr1 = [1, 2, 3, 4, 5]
// let nr2 = [, 6, 7, 8, 9, 10]
// let nr3 = [nr1, nr2]
// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);
   
//    // listando um Array
// nr3.forEach((itensDoArray) => {
//     console.log(`Array-3 sendo listado ${itensDoArray}`)
// });

// //listando o array com MAP
// nr3.map((numero, key)=>{

//     console.log(`${key+1} - Itens do array - ${numero}`)
//     numero.forEach((digitos)=>{
//         console.log(digitos)
//     })
// })

// //declaração de arrays
// let nr1 = [1, 2, 3, 4, 5]
// let nr2 = [ 6, 7, 8, 9, 10]
// //espalhar o array com[...]
// let nr3 = [...nr1,... nr2]
// console.log(`Array-1 ${nr1}`);
// console.log(`Array-2 ${nr2}`);
// console.log(`Array-3 ${nr3}`);

// nr3.map((numero, key)=>{
//     console.log(`${key+1} - Itens do array - ${numero}`)
  
// })

// //convertendo htmllCollection em array de forma indireta
// const liELementHTML = document.getElementsByTagName("li");
// const liELementArray = [...liELementHTML];
// liELementArray.map((item,key)=>{
//     if (item.textContent == "item-39"){
//         console.log(`${key+1}-${item.textContent = "LOCALIZADO"}`)
//     }  
// })

function soma(p1, p2, p3){
    nr1 = p1;
    nr2 = p2;
    return (parseInt(nr1) + parseInt(nr2) + parseInt(p3));
    // console.log(`Resultado : ${parseInt(nr1) + parseInt(nr2) + parseInt(parametro)}`);
    // console.log(`este foi o pararamtro que foi passado para a função: ${parametro}`);
}
soma();

//arrow function
const mudaCor = ()=>{
    //função set-TIMEOUT    
    setTimeout(alert("EXECUTOU"), 50000);

}


