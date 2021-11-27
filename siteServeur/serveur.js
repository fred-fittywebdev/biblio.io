let express = require("express")
let server = express()

server.listen(8080)

server.use('/', function() {
    console.log('demande reçue');
})