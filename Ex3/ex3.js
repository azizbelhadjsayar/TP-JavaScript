function CouleurH3(couleur) {
  let titresH3 = document.getElementsByTagName('h3');
  for (let i = 0; i < titresH3.length; i++) {
      titresH3[i].style.color = couleur;
  }
}