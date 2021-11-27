let express = require("express")
let server = express()
let morgan = require("morgan")

server.use(morgan("dev"))

server.listen(8080)

server.get('/', (requete, reponse) => {
    console.log("Page d'accueil");
    reponse.end('page d\'accueil !')
})

server.get('/test', (requete, reponse) => {
    console.log("Demande reçue sur la route /test avec la méthode GET");
    reponse.end('Demande GET reçue !')
})

server.post('/test', (requete, reponse) => {
    console.log("Demande reçue sur la route /test avec la méthode POST");
    reponse.end('Demande POST reçue !')
})