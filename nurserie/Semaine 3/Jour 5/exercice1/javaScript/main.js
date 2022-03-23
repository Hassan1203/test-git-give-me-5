console.log(document.querySelector("h1").textContent);
document.querySelector("h1").textContent = "Java Script Course";
// Lorem architecto esse quaerat hic repellat libero nisi ad eos ex vero at in velit.
document.querySelector(".para1").innerText = "para modifié 2eme fois";
var h1Elements = document.getElementsByTagName("h1");
console.log(h1Elements)
    // for (var i = 0; i < h1Elements.length; i++) {
h1Elements[0].style.color = "white";
h1Elements[0].style.background = "green";
// }






document.querySelector("button").addEventListener("click", clickbutton);

function clickbutton() {
    document.querySelector(".para1").textContent = document.querySelector("h1").textContent;
}


var img = document.createElement