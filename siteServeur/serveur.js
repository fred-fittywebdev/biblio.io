let express = require("express")
let server = express()
let morgan = require("morgan")
let routeur = require('./routeur')

server.use(express.static("public"))
server.use(morgan("dev"))
server.use('/', routeur)

server.listen(8080)

