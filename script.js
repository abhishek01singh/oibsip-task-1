var h1 = document.querySelector("#nav h4:nth-child(1)")
var h2 = document.querySelector("#nav h4:nth-child(2)")
var h3 = document.querySelector("#nav h4:nth-child(3)")
var h4 = document.querySelector("#nav h4:nth-child(4)")
var h5 = document.querySelector("#nav h4:nth-child(5)")

var col = document.querySelector("#collection")
var swiss = document.querySelector("#swiss")
var about = document.querySelector("#about")
var service = document.querySelector("#services")
var serviceh2 = document.querySelector("#services h2")
var abouth2 = document.querySelector("#about h2")
var collectionh2 = document.querySelector("#collection h2")
var swissh2 = document.querySelector("#swiss h2")



var state=2
h4.addEventListener("click",function(){
    if(state==2){
        swiss.style.scale="1"
        swissh2.style.scale="1"
        swiss.style.backgroundColor ="#fff"
        state=3
    }
    else{
        swiss.style.scale="0"
        swissh2.style.scale="0"
        swiss.style.backgroundColor="transparent"
        state=2
    }

})


