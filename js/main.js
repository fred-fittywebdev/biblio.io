const table = document.querySelector('#tableauLivres')

let livre1 = {
    "Nom": "Le seigneur des anneaux",
    "Auteur": "Tolkien",
    "Pages": 1000
}
let livre2 = {
    "Nom": "Le seigneur des anneaux",
    "Auteur": "Tolkien",
    "Pages": 1000
}
let livre3 = {
    "Nom": "Le seigneur des anneaux",
    "Auteur": "Tolkien",
    "Pages": 1000
}
let livre4 = {
    "Nom": "Le seigneur des anneaux",
    "Auteur": "Tolkien",
    "Pages": 1000
}
let livres = [livre1, livre2, livre3, livre4]
afficherLivres()

function afficherLivres() {
    let tableauLivres = document.querySelector('#tableauLivres tbody')
    let biblio = ""
    for (let i = 0; i < livres.length; i++) {
        biblio += `
        <tr>
            <td>${livres[i].Nom}</td>
            <td>${livres[i].Auteur}</td>
            <td>${livres[i].Pages}</td>
            <td><button class="btn btn-warning" onClick="afficherForpModif(${i})">Modifier</button></td>
            <td><button class="btn btn-danger" onClick="supprimerLivre(${i})">Supprimer</button></td>
        </tr>    `
    }
    tableauLivres.innerHTML = biblio
}

function ajouterFormulaire() {
    document.querySelector('#formAjout').removeAttribute("class")
    document.querySelector('#modifLivre').className = 'd-none'
}

document.querySelector('#validationAjout').addEventListener('click', function(e) {
    e.preventDefault()
    let titre = document.querySelector('#formAjout #titre').value
    let auteur = document.querySelector('#formAjout #auteur').value
    let pages = document.querySelector('#formAjout #pages').value
    ajoutLivre(titre, auteur, pages)
    const formulaire = document.querySelector('#formAjout')
    formulaire.reset()
    formulaire.className = 'd-none'
})

function ajoutLivre(titre, auteur, pages) {
    let livre = {
        "Nom": titre,
        "Auteur": auteur,
        "Pages": pages
    }
    livres.push(livre)
    afficherLivres()
}

function supprimerLivre(position) {
    if(confirm("Ce livre sera définitivement supprimer, confirmez-vous?")) {
        livres.splice(position, 1)
        afficherLivres()
        alert('Suprression effectuée')
    } else {
        alert('Suprression annulée')
    }
}

function afficherForpModif(position) {
    document.querySelector("#formAjout").className = 'd-none'
    document.querySelector('#modifLivre').removeAttribute("class")
    document.querySelector('#modifLivre #titre').value = livres[position].Nom
    document.querySelector('#modifLivre #auteur').value = livres[position].Auteur
    document.querySelector('#modifLivre #pages').value = livres[position].Pages
    document.querySelector('#modifLivre #identifiant').value = position
    console.log(position);
}

document.querySelector('#validationModif').addEventListener('click', function(e) {
    e.preventDefault()
    let titre = document.querySelector('#modifLivre #titre').value 
    let auteur = document.querySelector('#modifLivre #auteur').value 
    let pages = document.querySelector('#modifLivre #pages').value 
    let positionLivre = document.querySelector('#modifLivre #identifiant').value 

    livres[positionLivre].Nom = titre
    livres[positionLivre].Auteur = auteur
    livres[positionLivre].Pages = pages
    afficherLivres()
    document.querySelector('#modifLivre').className = 'd-none'
})


