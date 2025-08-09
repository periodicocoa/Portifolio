let tema = document.getElementById("tema");

tema.addEventListener("click", function () {
    if (tema.src.includes("imagens/lua.png")) {
        tema.src = "imagens/sol.png"
    } else {
        tema.src = "imagens/lua.png"
    }
})

