import Competence from '../classe/competence.js';
import Equipement from '../classe/equipement.js';
import Personnage from '../classe/personnage.js';
import Utils from '../Utils.js';

export default class PersonnageFinal {

    constructor(pageSize = 3) {

              this.pageSize = pageSize;

              this.pageNumber = 1;

    }
    async render (){
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
                  console.log(personnage.equipement);
                  if (personnage.equipement.includes(equipementsAcreer[i].id)) {
                      equipementP.push(equipementsAcreer[i]);  
                  }
                }

                for (let i = 0; i < competencesAcreer.length; i++) {
                  if (personnage.competence.includes(competencesAcreer[i].id)) {
                      competenceP.push(competencesAcreer[i]);
                  }
                }

                personnagesAcreer.push(new Personnage(personnage.id,personnage.img, personnage.nom, personnage.description, equipementP, personnage.primordiaux));
            });


            const startIndex = (this.pageNumber - 1) * this.pageSize;

            const endIndex = startIndex + this.pageSize;
            //coucou
            const paginatedPersonnages = personnagesAcreer.slice(startIndex, endIndex);
            
            let view = '';

            // Parcourir chaque personnage
            paginatedPersonnages.forEach(personnage => {
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
          view += `
  
            <div class="pagination">

              <button onclick="prevPage()">Previous</button>

              <span>Page ${this.pageNumber} of ${Math.ceil(personnagesAcreer.length / this.pageSize)}</span>

              <button onclick="nextPage()">Next</button>

            </div>

          `;
        
            return view;
        } catch (error) {
            console.error("Une erreur s'est produite lors du rendu des personnages :", error);
            return '';
        }
    }
}
