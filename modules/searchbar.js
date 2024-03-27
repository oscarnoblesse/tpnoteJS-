export default class searchbar {
    async render () {

        let view = '';
        // Parcourir chaque personnage
            // Construire le HTML pour chaque personnage
            view += `
               
                <div class="bar">
                <input oninput="rechercher()" type="text" id="searchInput" placeholder="Nom du personnage">
                </div>
            `;


        return view;
    }
}

