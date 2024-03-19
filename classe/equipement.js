class Equipement {
    constructor(nom, type, bonus) {
        this.nom = nom;
        this.type = type;
        this.bonus = bonus;
    }

    afficherEquipement() {
        let html = `<div class="equipement">
                        <h3>${this.nom}</h3>
                        <ul>
                            <li><strong>Nom:</strong> ${this.nom}</li>
                            <li><strong>Type:</strong> ${this.type}</li>
                            <li><strong>Bonus:</strong> ${this.bonus}</li>
                        </ul>
                    </div>`;
        return html;
    }
}