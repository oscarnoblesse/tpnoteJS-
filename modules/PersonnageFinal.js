import Competence from '../classe/competence.js';
import Equipement from '../classe/equipement.js';
import Personnage from '../classe/personnage.js';

export default class PersonnageFinal {
    async render () {
        // Effectuer une requête HTTP vers l'API jsonserver pour récupérer les données
        const response = await fetch('http://localhost:3000/personnages');
        const personnages = await response.json();
        let personneAcreer = [];
        let competenceAcreer = [];
        let equipementAcreer = [];
        personnages.forEach(equipement => {
            equipementAcreer.push(new Equipement(equipement.id,equipement.img,equipement.nom,equipement.description))
        });
        personnages.forEach(competence => {
            competenceAcreer.push(new Competence(competence.id,competence.img,competence.nom,competence.description))
        });
        personnages.forEach(personnage => {
            let equipementP = null;
            let competenceP = null;
            for (let i = 0; i < equipementAcreer.length; i++) {
                if (equipementAcreer[i].id == personnage.equipement) {
                    equipementP = equipementAcreer[i];
                }
            }
            for (let i = 0; i < competenceAcreer.length; i++) {
                if (competenceAcreer[i].id == personnage.primordiaux) {
                    competenceP = competenceAcreer[i];
                }
            }
        personneAcreer.push(new Personnage(personnage.img,personnage.nom,personnage.description,personnage.equipement,personnage.primordiaux))
        });
       
        let view = '';
        // Parcourir chaque personnage
        personneAcreer.forEach(personnage => {
            // Construire le HTML pour chaque personnage
            view += `
                <div class="personnage">
                <h2>${personnage.nom}</h2>
                <img src="${personnage.image}" alt="${personnage.nom}">
                    <ul>
                        <li><strong>Nom:</strong> ${personnage.nom}</li>
                        <li><strong>Description:</strong> ${personnage.description}</li>
                        <li><strong>Armes:</strong> ${personnage.armes}</li>
                        <li><strong>Primordiaux:</strong> ${personnage.primordiaux}</li>
                    </ul>
                </div>
            `;
        });

        return view;
    }
}