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
    if(!document.querySelector('#monForm')) {
        let formulaire = document.createElement("form")
        formulaire.setAttribute("id", "monForm")
        formulaire.innerHTML = `
        <fieldset class="mt-2">
        <legend>Ajout d'un livre</legend>
            <div class="my-3">
                <label for="titre" class="form-label">Titre</label>
                <input type="text" class="form-control" id="titre">
            </div>
            <div class="mb-3">
                <label for="auteur" class="form-label">Auteur</label>
                <input type="text" class="form-control" id="auteur">
            </div>
            <div class="mb-3">
                <label for="pages" class="form-label">Pages</label>
                <input type="number" class="form-control" id="pages">
            </div>
            <button type="submit" class="btn btn-primary">Ajouter</button>
        </fieldset>
        `
        document.querySelector('.container').appendChild(formulaire)
    }

}

