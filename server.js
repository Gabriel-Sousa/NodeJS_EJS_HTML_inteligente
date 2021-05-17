const express = require("express")

const app = express()

app.set("view engine", "ejs")

app.get("/", (request, response) => {
    const items = [
        {
            tittle: "D",
            message: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            tittle: "E",
            message: "JS usa JavaScript para renderizar HTML"
        },
        {
            tittle: "M",
            message: "uito fácil de usar"
        },
        {
            tittle: "A",
            message: "mazing"
        },
        {
            tittle: "I",
            message: "nstall ejs"
        },
        {
            tittle: "S",
            message: "intaxe simples"
        }
    ]

    const subtitle = "Uma linguagem de modalagem para criação de página HTML utilizando JS"
    response.render("pages/index", {
        qualitys: items,
        subtitulo: subtitle
    })
})

app.get("/sobre", (request, response) => {response.render("pages/about")})

app.listen(5500, () => console.log("Servidor funcionando"))

// digite no console `node app`


