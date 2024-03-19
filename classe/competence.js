class Competence {
    constructor(description, degats, nature) {
        this.description = description;
        this.degats = degats;
        this.nature = nature;
    }

    afficherInfos() {
        console.log(`Description: ${this.description}`);
        console.log(`Dégâts: ${this.degats}`);
        console.log(`Nature: ${this.nature}`);
    }
}

