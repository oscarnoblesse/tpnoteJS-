class Competence {
    constructor(description, degats, nature,image) {
        this.description = description;
        this.degats = degats;
        this.nature = nature;
        this.image = image;
    }

    afficherInfosCompetences() {
        let html = `<div class="competence">
                        <h3>${this.description}</h3>
                        <img src="${this.image}" alt="${this.description}">
                        <ul>
                            <li><strong>Description:</strong> ${this.description}</li>
                            <li><strong>Dégâts:</strong> ${this.degats}</li>
                            <li><strong>Nature:</strong> ${this.nature}</li>
                        </ul>
                    </div>`;
        return html;
    }
}

