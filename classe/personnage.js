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


    afficherInfos() {
        let html = `<div class="personnage">
                        <h2>${this.nom}</h2>
                        <img src="${this.image}" alt="${this.nom}">
                        <ul>
                            <li><strong>Nom:</strong> ${this.nom}</li>
                            <li><strong>Vie:</strong> ${this.vie}</li>
                            <li><strong>Dégâts:</strong> ${this.degats}</li>
                            <li><h2>Compétences:</h2>`;
                            this.competences.forEach(comp => {
                                html += `<li>${comp.afficherInfosCompetences()}</li>`;
                            });
        html += `
                            </li>
                            <li><h2>Équipements:</h2></li>`;
                            this.equipements.forEach(equi => {
                                html += `<li>${equi.afficherEquipement()}</li>`;
                            });
        html += `
                        </ul>
                    </div>`;
        document.write(html);
    }
}

    




