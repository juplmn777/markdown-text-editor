const text = document.querySelector("textarea");
const render = document.querySelector(".render");

text.value = localStorage.getItem("text");

text.value ? render.innerHTML = localStorage.getItem("text") : null;

text.addEventListener("keyup", function(){
    localStorage.setItem("text", text.value);
    render.innerHTML = marked(text.value);//rendu = valeur du texte dans textarea
});