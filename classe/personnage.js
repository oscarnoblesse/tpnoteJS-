export default class Personnage {
    constructor(img, nom, description, equipement, primordiaux) {
        this._img = img;
        this._nom = nom;
        this._description = description;
        this._equipement = equipement;
        console.log(this._equipement);
        this._primordiaux = primordiaux;
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

    // Getter pour les armes
    get equipement() {
        return this._equipement;
    }

    // Getter pour les primordiaux
    get primordiaux() {
        return this._primordiaux;
    }
}
