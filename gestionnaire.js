// Exemple d'utilisation de la classe Personnage avec des compétences
const joueur1 = new Personnage("Joueur 1", 100, 10,"image/imagePersonnage/talgor.png");

const competence1 = new Competence("Boule de feu", 20, "magique");
const competence2 = new Competence("Coup d'épée", 15, "combat");

const equipement1 = new Equipement("Épée légendaire", "arme", "+20 attaque");
const equipement2 = new Equipement("Armure de chevalier", "armure", "+50 défense");


joueur1.ajouterCompetence(competence1);
joueur1.ajouterCompetence(competence2);
joueur1.ajouterEquipement(equipement1);
joueur1.ajouterEquipement(equipement2);



function afficherJoueurs(){
    joueur1.afficherInfos();
}