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
        console.log(`Nom: ${this.nom}`);
        console.log(`Vie: ${this.vie}`);
        console.log(`Dégâts: ${this.degats}`);
        console.log(`Compétences:`);
        this.competences.forEach(comp => {
            console.log(`- ${comp.description} (${comp.nature}) - Dégâts: ${comp.degats}`);
        });
        console.log(`Équipements: ${this.equipements.join(', ')}`);
    }

    afficherInfos() {
        let html = `<div class="personnage">
                        <h2>${this.nom}</h2>
                        <ul>
                            <li><strong>Nom:</strong> ${this.nom}</li>
                            <li><strong>Vie:</strong> ${this.vie}</li>
                            <li><strong>Dégâts:</strong> ${this.degats}</li>
                            <li><strong>Compétences:</strong>
                                <ul>`;
        this.competences.forEach(comp => {
            html += `<li>${comp.description} (${comp.nature}) - Dégâts: ${comp.degats}</li>`;
        });
        html += `                   </ul>
                            </li>
                            <li><strong>Équipements:</strong> ${this.equipements.join(', ')}</li>
                        </ul>
                    </div>`;
        document.write(html);
    }
}

    




