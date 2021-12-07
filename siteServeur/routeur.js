let express = require("express")
// on génère les routes grâce a la fonction express
let routeur = express.Router()
const twig = require('twig')
const livreModel = require('./models/livre.models')

routeur.get('/', (requete, reponse) => {
    reponse.render("accueil.html.twig")
})

routeur.get('/livres', (requete, reponse) => {
    livreModel.find()
        .exec()
        .then(livres => {
            reponse.render('livres/liste.html.twig', {livres: livres})
        })
        .catch()
    
})

routeur.get('/livres/:id', (requete, reponse) => {
    livreModel.findById(requete.params.id)
    .exec()
    .then(livre => {
        // on revnoie l'info récupéré en paramètre dans le template avec {}
        reponse.render('livres/livre.html.twig', {livre: livre})
    })
    .catch(error => {
        console.log(error);
    })

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