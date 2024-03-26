import Competence from '../classe/competence.js';
import Equipement from '../classe/equipement.js';
import Personnage from '../classe/personnage.js';

export default class PersonnageFinal {
    async render () {
        // Effectuer une requête HTTP vers l'API jsonserver pour récupérer les données
        const responseP = await fetch('http://localhost:3000/personnages');
        const personnages = await responseP.json();
        const responseE = await fetch('http://localhost:3000/equipement');
        const equipement = await responseE.json();
        const responseC = await fetch('http://localhost:3000/competence');
        const competence = await responseC.json();
        let personneAcreer = [];
        let competenceAcreer = [];
        let equipementAcreer = [];
        equipement.forEach(equipement => {
            equipementAcreer.push(new Equipement(equipement.id,equipement.img,equipement.nom,equipement.description))
        });
        competence.forEach(competence => {
            competenceAcreer.push(new Competence(competence.id,competence.img,competence.nom,competence.description))
        });
        personnages.forEach(personnage => {
            let equipementP = [];
            let competenceP = [];
            for (let i = 0; i < equipementAcreer.length; i++) {
                if ( personnage.equipement.includes(equipementAcreer[i].id)) {
                    console.log(equipementAcreer[i].id);
                    equipementP.push(equipementAcreer[i]);  
                }
            }
            for (let i = 0; i < competenceAcreer.length; i++) {
                if (competenceAcreer[i].id in personnage.competence) {
                    competenceP.push(competenceAcreer[i]);
                }
            }
            personneAcreer.push(new Personnage(personnage.img,personnage.nom,personnage.description,equipementP,personnage.primordiaux))
 
    });
       
        let view = '';
        // Parcourir chaque personnage
        personneAcreer.forEach(personnage => {
            // Construire le HTML pour chaque personnage
            let equipementPersonnage = '';
            for (let i = 0; i < personnage.equipement.length; i++) {
                equipementPersonnage += `<li>${personnage.equipement[i].nom}</li>`;
            }
            view += `
                <div class="personnage">
                <h2>${personnage.nom}</h2>
                <img src="${personnage.image}" alt="${personnage.nom}">
                    <ul>
                        <li><strong>Nom:</strong> ${personnage.nom}</li>
                        <li><strong>Description:</strong> ${personnage.description}</li>
                        <li><strong>Armes:</strong> ${equipementPersonnage}</li>
                        <li><strong>Primordiaux:</strong> ${personnage.primordiaux}</li>
                    </ul>
                </div>
            `;
        });
        return view;
    }
}