function AnalyseForm(form) {
  let prenom = form.elements['prenom'].value;
  let nom = form.elements['nom'].value;
  let titre = '';
  if(form.elements['Madame'].checked) titre = 'Mme';
  if(form.elements['Monsieur'].checked) titre = 'Mr';
  
  let langues = [];
  if (form.elements['c1'].checked) langues.push('- Espagnol');
  if (form.elements['c2'].checked) langues.push('- Anglais');
  if (form.elements['c3'].checked) langues.push('- Allemand');
  if (form.elements['c4'].checked) langues.push('- Français');

  let message = "Bonjour " + titre + " " + prenom + " " + nom + "\n" + "Vous maitrisez les langues suivantes :\n" + langues.join('\n');
  return message;
}