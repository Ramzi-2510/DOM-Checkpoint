// variables
const Btnplus= document.querySelectorAll(".btn-plus")
console.log(Btnplus)

const lesqte= document.querySelectorAll(".quantity")
console.log(lesqte)


const Btnmoin= document.querySelectorAll(".btn-moins")
console.log(Btnmoin)

let Totalprice= document.querySelector("#prix-total")
console.log(Totalprice)
let totaux=0

const lesprix= document.querySelectorAll(".prx")
console.log(lesprix)

const supr= document.querySelectorAll(".btn-delete")
console.log(supr)

const leslikes= document.querySelectorAll(".btn-like")


// les bouttons plus
for(let i=0;i<Btnplus.length;i++){
    Btnplus[i].addEventListener("click",function(){
lesqte[i].innerHTML++
// btnplus[i].previousElementSibling.innerHTML++
calcule()

})

}

// ****************************

// les bouttons MOINS
for(let i=0; i<Btnmoin.length;i++){
    Btnmoin[i].addEventListener("click",function(){
   
        if (lesqte[i].innerHTML>0){
            lesqte[i].innerHTML--
         }
 calcule()
})
}

// suppression article
for (let i=0; i<supr.length;i++) {
    supr[i].addEventListener("click", function(){
        supr[i].parentElement.parentElement.remove()
        lesqte[i].innerHTML=0
        calcule()
    })

    
}    
// les likes

for(let i=0; i<leslikes.length; i++){

    leslikes[i].addEventListener('click', function(){
    leslikes[i].classList.toggle("btn-like");
    })
}

function calcule (){
    let somme=0
for(x=0;x<lesqte.length;x++){
somme= somme+(lesqte[x].innerHTML*lesprix[x].innerHTML)
 console.log(totaux)
 
}
totaux=somme
Totalprice.innerHTML=totaux
}

