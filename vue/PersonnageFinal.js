import Personnage from '../classe/personnage.js';

export default class PersonnageFinal {
    async render () {
        // Effectuer une requête HTTP vers l'API jsonserver pour récupérer les données
        const response = await fetch('http://localhost:3000/personnages');
        const personnages = await response.json();
        let personneAcreer = [];
        personnages.forEach(personnage => {
        personneAcreer.push(new Personnage(personnage.img,personnage.nom,personnage.description,personnage.armes,personnage.primordiaux))
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