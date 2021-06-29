const localhost = requires('localhost')

const server = localhost()

server.listen(0000, ()=> console.log("Rodando"))

/* node src/server.js || npm start ou run -> Terminal */