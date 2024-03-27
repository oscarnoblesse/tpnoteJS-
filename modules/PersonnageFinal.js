import Personnage from '../classe/personnage.js';

export default class PersonnageFinal {

    constructor(pageSize = 3) {
  
      this.pageSize = pageSize;
  
      this.pageNumber = 1;
  
    }
  
  
    async render() {
  
      const response = await fetch('http://localhost:3000/personnages');
  
      const personnages = await response.json();
  
      let personneAcreer = [];
  
      personnages.forEach((personnage) => {
  
        personneAcreer.push(
  
          new Personnage(personnage.img, personnage.nom, personnage.description, personnage.armes, personnage.primordiaux)
  
        );
  
      });
  
  
      const startIndex = (this.pageNumber - 1) * this.pageSize;
  
      const endIndex = startIndex + this.pageSize;
  
      const paginatedPersonnages = personneAcreer.slice(startIndex, endIndex);
  
  
      let view = '';
  
      // Parcourir chaque personnage sur la page actuelle
  
      paginatedPersonnages.forEach((personnage) => {
  
        // Construire le HTML pour chaque personnage
  
        view += `
  
              <div class="personnage">
  
              <h2>${personnage.nom}</h2>
  
              <img src="${personnage.image}" alt="${personnage.nom}" loading="lazy">
  
                  <ul>
  
                      <li><strong>Nom:</strong> ${personnage.nom}</li>
  
                      <li><strong>Description:</strong> ${personnage.description}</li>
  
                      <li><strong>Armes:</strong> ${personnage.armes}</li>
  
                      <li><strong>Primordiaux:</strong> ${personnage.primordiaux}</li>
  
                  </ul>
  
              </div>
  
          `;
  
      });
  
  
      // Ajouter des liens de navigation pour la pagination
  
      view += `
  
        <div class="pagination">
  
          <button onclick="prevPage()">Previous</button>
  
          <span>Page ${this.pageNumber} of ${Math.ceil(personneAcreer.length / this.pageSize)}</span>
  
          <button onclick="nextPage()">Next</button>
  
        </div>
  
      `;
  
  
      return view;
  
    }
  
  
   
  
  }