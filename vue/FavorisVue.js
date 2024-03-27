import favoris from '../modules/favoris.js';
import Bar from '../modules/searchbar.js';

export default class Accueil {
    async render () {
        let view = '';
        
        // Rendre la barre de recherche
        const barInstance = new Bar();
        const searchBarHTML = await barInstance.render();
        
        // Rendre les personnages
        const favorisInstance = new favoris();
        const favorisHTML = await favorisInstance.render();
        
        // Assembler les éléments HTML
        view += `
            <div class="Accueil">
                ${searchBarHTML}
                ${favorisHTML}
            </div>
        `;
   
        return view;
    }
}