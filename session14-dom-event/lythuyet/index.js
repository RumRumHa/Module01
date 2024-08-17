let getElementsByTagName = document.getElementsByTagName("p");
console.log(getElementsByTagName);
let getElementById = document.getElementById("btn");
console.log(getElementById);
function text() {
    document.getElementById("code").className = "active";
}

let getElementsByClassName = document.getElementsByClassName("btn");
console.log(getElementsByClassName);

let querySelector = document.querySelector("#btn");
console.log(querySelector);

let querySelectorAll = document.querySelectorAll("p");
console.log(querySelectorAll);

function btn() {
    let h3 = document.getElementsByTagName("h3");
    h3[0].setAttribute("class", "active");
    let h4 = document.getElementsByClassName("class1");
    //h4[0].classList.add("class3");
    //h4[0].classList.remove("class1");
    h4[0].classList.toggle("active");
    document.getElementsByClassName("container")[0].innerHTML = "<h1>Xin chào</h1>";
}