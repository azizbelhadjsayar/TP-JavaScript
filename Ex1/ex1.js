function AfficherTexte () {
    var parag = document.getElementById("paragraphe");
    parag.style.visibility = "visible";         //najmou na3mlou .style.display : block
}
//==
const afficher=() => document.getElementById("paragraphe").style.visibility = "visible";

function CacherTexte () {
    var parag = document.getElementById("paragraphe");
    parag.style.visibility = "hidden";       //najmou na3mlou .style.display : none
}
//==
const cacher=() => document.getElementById("paragraphe").style.visibility = "hidden";

document.getElementById("palette").oninput = function () {
    var texte = document.getElementById("paragraphe");
    texte.style.color = this.value;
}
//les deux focntions edhouma 9oulch alina mchina lel css w badalna fel style mta3 l p w hatina visiblity wala display
//pour declarer une fonction on peut mettre avant le nom const ou function ouu rien de tout juste le nom
//on doit mettre <script> toujours a la fin du code html car il va consulter les fonctions et constituer la structure avant script
//si on le met avant ou au debut on peut avoir une erreur car il va consulter les fonctions js et retourner avant et ne rien trouver