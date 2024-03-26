export default class Equipement {
    // Getter pour l'imageexport default class Personnage {
    constructor(img, nom, description) {
        this._img = img;
        this._nom = nom;
        this._description = description;
    }

    // Getter pour l'image
    get image() {
        return this._img;
    }

    // Getter pour le nom
    get nom() {
        return this._nom;
    }

    // Getter pour la description
    get description() {
        return this._description;
    }
}

