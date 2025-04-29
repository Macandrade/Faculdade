let boton = document.querySelector ("#botao");
botao.style.background="orange";

botao.addEventListener("click",e =>{
    botao.style.background="#f20";
    botao.innerHTML="A prática leva à perfeição!";
});

