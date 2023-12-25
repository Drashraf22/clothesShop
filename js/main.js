let navBar=document.querySelector('header ul');
let xmark=document.getElementById("xmark");
let bar=document.getElementById("bar");

bar.onclick=function(){
    navBar.classList.add("appear");
}

xmark.onclick=function(){
    navBar.classList.remove("appear");
}
