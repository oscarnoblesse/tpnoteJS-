export default class Personnage {

    async render () {
        let view = 
        `<div class="personnage">
                        <h2>uyggyufuyuy</h2>
                        <ul>
                            <li><strong>Nom:</strong> ${this.nom}</li>
                            <li><strong>Vie:</strong> ${this.vie}</li>
                            <li><strong>Dégâts:</strong> ${this.degats}</li>
                            <li><strong>Compétences:</strong>
                                <ul>`;
        this.competences.forEach(comp => {
            html += `<li>${comp.description} (${comp.nature}) - Dégâts: ${comp.degats}</li>`;
        });
        html += `                   </ul>
                            </li>
                            <li><strong>Équipements:</strong> ${this.equipements.join(', ')}</li>
                        </ul>
                    </div>`;
        return view
    }
}