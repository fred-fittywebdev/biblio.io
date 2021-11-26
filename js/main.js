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

for (let i = 0; i < livres.length; i++) {
    let livre1 = document.createElement('tr')
    livre1.innerHTML = `
        <td>${livres[i].Nom}</td>
        <td>${livres[i].Auteur}</td>
        <td>${livres[i].Pages}</td>
        <td><button class="btn btn-warning">Modifier</button></td>
        <td><button class="btn btn-danger">Supprimer</button></td>
        `
    table.appendChild(livre1)
}

function ajouterFormulaire() {
    document.querySelector('#formAjout').removeAttribute("class")
}

document.querySelector('#validationAjout').addEventListener('click', function(e) {
    e.preventDefault()
    let titre = document.querySelector('#formAjout #titre').value
    let auteur = document.querySelector('#formAjout #auteur').value
    let pages = document.querySelector('#formAjout #pages').value
    ajoutLivre(titre, auteur, pages)
})

function ajoutLivre(titre, auteur, pages) {
    let livre = {
        "Nom": titre,
        "Auteur": auteur,
        "Pages": pages
    }
    livres.push(livre)
    console.log(livres)
}

