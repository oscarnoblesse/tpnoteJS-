export default class searchbar {
    async render () {

        let view = '';
        // Parcourir chaque personnage
            // Construire le HTML pour chaque personnage
            view += `
                <script>
                function rechercher() {
                    const searchValue = document.getElementById("searchInput");
                
                    const personnages = document.querySelectorAll(".personnage");
                
                    personnages.forEach(personnage => {
                        const nomPersonnage = personnage.querySelector("h2").textContent.toLowerCase();
                        if (nomPersonnage.includes(searchValue)) {
                            personnage.style.display = "block"; 
                        } else {
                            personnage.style.display = "none"; 
                        }
                    });
                }
                </script>
                <div class="bar">
                <input type='text' id="searchInput" placeholder="Nom du personnage">
                <button onclick="rechercher()"> rechercher </button>
                </div>
            `;


        return view;
    }
}

