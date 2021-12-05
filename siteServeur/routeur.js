let express = require("express")
// on génère les routes grâce a la fonction express
let routeur = express.Router()
const twig = require('twig')

routeur.get('/', (requete, reponse) => {
    reponse.render("accueil.html.twig")
})

routeur.get('/livres', (requete, reponse) => {
    reponse.render('livres/liste.html.twig')
})

routeur.get('/livres/:nom', (requete, reponse) => {
    console.log(requete.params.nom)
    // on revnoie l'info récupéré en paramètre dans le template avec {}
    reponse.render('livres/livre.html.twig', {nom:requete.params.nom})
})


// on crée une route poue l'erreur 404
routeur.use((requete, reponse, suite) => {
    const error = new Error('Page non trouvée')
    error.status = 404
    suite(error)
})

// on crée une route pour gérer l'erreur 404 que l'on reprends mais aussi d'autres types d'erreur, ici les 500 on peut aussi générer une pahe html
routeur.use((error, requete, reponse) => {
    reponse.status(error.status || 500)
    reponse.end(error.message)
})

module.exports = routeur