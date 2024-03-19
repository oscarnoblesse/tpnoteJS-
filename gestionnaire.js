// Exemple d'utilisation de la classe Personnage avec des compétences
const joueur1 = new Personnage("Joueur 1", 100, 10);

const competence1 = new Competence("Boule de feu", 20, "magique");
const competence2 = new Competence("Coup d'épée", 15, "combat");

joueur1.ajouterCompetence(competence1);
joueur1.ajouterCompetence(competence2);
joueur1.ajouterEquipement("Épée légendaire");



function afficherJoueurs(){
    joueur1.afficherInfos();
}