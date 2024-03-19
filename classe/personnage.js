class Personnage {
    constructor(nom, vie, degats,image) {
        this.nom = nom;
        this.vie = vie;
        this.degats = degats;
        this.image = image;
        this.competences = [];
        this.equipements = [];
    }

    ajouterCompetence(competence) {
        this.competences.push(competence);
    }

    ajouterEquipement(equipement) {
        this.equipements.push(equipement);
    }

    recevoirDegats(degats) {
        this.vie -= degats;
        if (this.vie <= 0) {
            console.log(`${this.nom} a été vaincu !`);
        }
    }
}

    




