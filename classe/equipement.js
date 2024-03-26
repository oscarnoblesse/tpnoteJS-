export default class Equipement {
    // Getter pour l'imageexport default class Personnage {
    constructor(id,img, nom, description) {
        this._id = id;
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

    // Getter pour l'id
    get id() {
        return this._id;
    }
    
}

