export default class favoris {
    async render () {
        let view = '';
        let favoris = localStorage.getItem("favoris");
        let favorissplit = favoris.split(",");
        console.log(favorissplit)
        var objetJSONP = sessionStorage.getItem("personnages");
        var personnagesAcreer = JSON.parse(objetJSONP);
            // Parcourir chaque personnage
            personnagesAcreer.forEach(personnage => {
                // Construire le HTML pour chaque personnage
                let equipementPersonnage = '';
                for(let j = 0; j < favorissplit.length; j++){
                    if (personnage._id == favorissplit[j]){
                        for (let i = 0; i < personnage._equipement.length; i++) {
                            equipementPersonnage += `<li>${personnage._equipement[i]._nom} <img src="${personnage._equipement[i]._img}" alt="image" ></li>`;
                        }
                        view += `
                            <div class="personnage">
                                <h2>${personnage._nom}</h2>
                                <img src="${personnage._img}" alt="${personnage._nom}">
                                <button onclick="liker(${personnage._id})">like</button>
                                <ul>
                                    <li><strong>Nom:</strong> ${personnage._nom}</li>
                                    <li><strong>Description:</strong> ${personnage._description}</li>
                                    <li><strong>Armes:</strong> ${equipementPersonnage}</li>
                                    <li><strong>Primordiaux:</strong> ${personnage._primordiaux}</li>
                                </ul>
                            </div>
                        `;
                    }
                }
            });

            return view;
    } catch (error) {
        console.error("Une erreur s'est produite lors du rendu des personnages :", error);
        return '';
    }
}

