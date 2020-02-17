const text = document.querySelector("textarea");
const render = document.querySelector("div");

text.addEventListener("keyup", function(){
    render.innerHTML = text.value;
});