let counter = document.querySelectorAll(".counter div")

let award = 0
let cups = 0
let project = 0
let happy = 0

setInterval(()=>{
    if(award != 100){
        counter[0].innerText = ++award
    }
},10)


setInterval(()=>{
    if(cups != 1500){
        counter[1].innerText = cups+=10
    }
},10)


setInterval(()=>{
    if(project != 30){
        counter[2].innerText = ++project
    }
},10)


setInterval(()=>{
    if(happy != 3000){
        counter[3].innerText = happy+=10
    }
},10)


let loader = document.querySelector(".loader")


setTimeout(()=>{
    loader.classList.remove("loader-black")
},1000)