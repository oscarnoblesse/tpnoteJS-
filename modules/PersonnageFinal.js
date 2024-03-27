import Competence from '../classe/competence.js';
import Equipement from '../classe/equipement.js';
import Personnage from '../classe/personnage.js';
import Utils from '../Utils.js';

export default class PersonnageFinal {
    async render () {
        try {
            // Effectuer une requête HTTP vers l'API jsonserver pour récupérer les données
            const responseP = await fetch('http://localhost:3000/personnages');
            const personnages = await responseP.json();
            const responseE = await fetch('http://localhost:3000/equipement');
            const equipement = await responseE.json();
            const responseC = await fetch('http://localhost:3000/competence');
            const competence = await responseC.json();

            let personnagesAcreer = [];
            let competencesAcreer = [];
            let equipementsAcreer = [];

            equipement.forEach(equip => {
                equipementsAcreer.push(new Equipement(equip.id, equip.img, equip.nom, equip.description));
            });

            competence.forEach(comp => {
                competencesAcreer.push(new Competence(comp.id, comp.img, comp.nom, comp.description));
            });

            personnages.forEach(personnage => {
                let equipementP = [];
                let competenceP = [];

                for (let i = 0; i < equipementsAcreer.length; i++) {
                    for(let j = 0; j < personnage.equipement.length; j++){
                        if (equipementsAcreer[i].id == personnage.equipement[j]){
                            equipementP.push(equipementsAcreer[i]);
                        }
                    }
                }

                for (let i = 0; i < competencesAcreer.length; i++) {
                    for(let j = 0; j < personnage.competence.length; j++){
                        if (competencesAcreer[i].id == personnage.competence[j]){
                            competenceP.push(competencesAcreer[i]);
                        }
                    }
                }

                personnagesAcreer.push(new Personnage(personnage.id,personnage.img, personnage.nom, personnage.description, equipementP, personnage.primordiaux));
            });
            // Convertir l'objet en chaîne JSON
            var objetJSONP = JSON.stringify(personnagesAcreer);
            var objetJSONE = JSON.stringify(equipementsAcreer);
            var objetJSONC = JSON.stringify(competencesAcreer);
            
            sessionStorage.setItem("personnages", objetJSONP);
            sessionStorage.setItem("equipement", objetJSONE);
            sessionStorage.setItem("competence", objetJSONC);

            var objetJSONP = sessionStorage.getItem("personnages");
            var personnagesAcreernew = JSON.parse(objetJSONP);
            console.log(personnagesAcreernew);


            let view = '';

            // Parcourir chaque personnage
            personnagesAcreer.forEach(personnage => {
                // Construire le HTML pour chaque personnage
                let equipementPersonnage = '';

                for (let i = 0; i < personnage.equipement.length; i++) {
                    equipementPersonnage += `<li>${personnage.equipement[i].nom} <img src="${personnage.equipement[i].image}" alt="image" ></li>`;
                }
                view += `
                    <div class="personnage">
                        <h2>${personnage.nom}</h2>
                        <img src="${personnage.image}" alt="${personnage.nom}">
                        <button onclick="liker(${personnage.id})">like</button>
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
        } catch (error) {
            console.error("Une erreur s'est produite lors du rendu des personnages :", error);
            return '';
        }
    }
}

