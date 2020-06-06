const express = require("express")
const server = express()

//configurar pasta pública

server.use(express.static("public"))

//utilizando o template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express.server,
    noCache: true
})

//caminho da aplicação - pagina inicial
/*ou nodemon (tem que instalar e escrever no server)*/
//req - requisição e res - resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})
server.listen(3000) //ligar o servidor