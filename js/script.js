


var inputt=document.querySelector("input");



inputt.addEventListener("focus",function(){

    inputt.setAttribute("placeholder"," ");
})

inputt.addEventListener("blur",function(){

    inputt.setAttribute("placeholder","focus on placeholder");
})