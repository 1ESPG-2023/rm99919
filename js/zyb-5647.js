const liELement = document.getElementsByTagName("li");
//console.log(liELement)
//for (let index = 0; index < liELement.length; index++) {
//    console.log(liELement[index].textContent)
//}

//declaração de arrays
let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
let nr3 = nr1+nr2
console.log(`Array-1 ${nr1}`)
console.log(`array -2 ${nr2}`)
console.log(`Array-3 ${nr3}`)

nr3.forEach((itemDoArray)=>{
    console.log(`Array-3 sendo listado ${itemDoArray}`)
});
   console.log(`Array-3 sendo listado ${nr3}`)