import Perso from '../modules/PersonnageFinal.js';
import Bar from '../modules/searchbar.js';

export default class Accueil {
    async render () {
        let view = '';
        
        // Rendre la barre de recherche
        const barInstance = new Bar();
        const searchBarHTML = await barInstance.render();
        
        // Rendre les personnages
        const persoInstance = new Perso();
        const persoHTML = await persoInstance.render();
        
        // Assembler les éléments HTML
        view += `
            <div class="Accueil">
                ${searchBarHTML}
                ${persoHTML}
            </div>
        `;
   
        return view;
    }
}