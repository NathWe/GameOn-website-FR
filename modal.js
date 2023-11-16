function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".cross");
const fistForm = document.querySelector("#form")
const modalregister = document.querySelector(".register");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal event
function closeModal() {
  modalbg.style.display = "none";
}

// close modal form and open validationForm
function launchModalRegister() {
  modalbg.style.display = "none";
  modalregister.style.display = "block";
}
// Fonction pour afficher le message de remerciement
function showMessage() {
  // Masquer le formulaire principal
  form.style.display = 'none';
  // Afficher le message de remerciement
  const confirmationMessage = document.querySelector('.confirmation-message');
  confirmationMessage.style.display = 'block';
  // Afficher le bouton "Fermer" et la croix
  const formfermer = document.getElementById('formfermer');
  formfermer.style.display = 'block';
}

const form = document.querySelector('#form');
const prenom = document.querySelector('#prenom');
const nom = document.querySelector('#nom');
const email = document.querySelector('#email');
const birthdate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const conditionU = document.querySelector('#conditionU');
const locations = document.querySelector("#locations");
//Regex
const regexNomPrenom = /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]{2,}$/;
const regexEmail = /\S+@\S+\.\S+/;
const regexQuantity = /^[1-9]?[0-9]{1,1}$/;
// Messages d'erreurs
const ErreurPrenom = "Le champ Prénom a un minimum de 2 caractères";
const ErreurNom = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
const ErreurEmail = "L'adresse électronique n'est pas valide.";
const ErreurBirthdate = "Vous devez entrer votre date de naissance.";
const ErreurQuantity ="Vous devez entrer votre nombre de participation.";
const ErreurLocations ="Vous devez choisir une ville.";
const ErreurConditionU = "Vous devez vérifier que vous acceptez les termes et conditions.";

// Fonction Messages d'erreurs 
const setErreur = (element, message) => {
  const inputControl = element.parentElement;
  const erreurDisplay = inputControl.querySelector('.erreur');
// Fonction messages d'erreurs 
  erreurDisplay.innerText = message;
  inputControl.classList.add('erreur');
  inputControl.classList.remove('success');
}
// Fonction comportement valide 
const setSuccess = element => {
  const inputControl = element.parentElement;
  const erreurDisplay = inputControl.querySelector('.erreur');
  erreurDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('erreur');
};
// combinaison des constantInput et des regex 
const isValidPrenom = prenom =>{
  return regexNomPrenom.test(String(prenom).toLowerCase());
}
const isValidNom = nom =>{
  return regexNomPrenom.test(String(nom).toLowerCase());
}
const isValidEmail = email => {
  return regexEmail.test(String(email).toLowerCase());
}

const isValidQuantity = quantity => {
  return regexQuantity.test(String(quantity).toLowerCase());
}

// Fonction de vérification des Inputs 
const validateInputs = () => {
  const prenomValue = prenom.value.trim();
  const nomValue = nom.value.trim();
  const emailValue = email.value.trim();
  const birthdateValue = birthdate.value.trim();
  const conditionUValue = conditionU.checked;
  const quantityValue = quantity.value.trim();
  if(!isValidPrenom (prenomValue)){
    setErreur(prenom, ErreurPrenom)
  }else{
    setSuccess(prenom);
  }
  if(!isValidNom(nomValue)){
    setErreur(nom, ErreurNom)
  }else{
    setSuccess(nom);
  }
  if(!isValidEmail(emailValue)){
    setErreur(email, ErreurEmail)
  }else{
    setSuccess(email);
  }
  if (!birthdateValue){
    setErreur(birthdate, ErreurBirthdate)
  }else{
    setSuccess(birthdate);
  }
  if (!isValidQuantity(quantityValue)){
    setErreur(quantity, ErreurQuantity)
  }else{
    setSuccess(quantity);
  }
  if (conditionUValue == false){
    setErreur(conditionU, ErreurConditionU)
  }else{
    setSuccess(conditionU); 
  }
  // vérifie si au moins 1 boutton radio est séléctioné.
  if (document.querySelectorAll('[name="location"]:checked').length < 1) {
  setErreur(locations, ErreurLocations)
  }else{
    setSuccess(locations);  
  } 

  // Écouteur sur le bouton "C'est parti"
document.querySelector('.btn-submit').addEventListener('click', function() {
  // Vérification des champs et affichage du message de remerciement si tout est valide
  validateInputs();
});
// Écouteur sur le bouton "Fermer"
document.querySelector('.fermer').addEventListener('click', function() {
  closeForm();
});

// écouteur btn submit lance la vérification des champs
form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
}
);
  // vérifie si 7 de mes class success sont actives.
  if (document.querySelectorAll('.success').length >= 7) {
    // Ferme la modal, affiche le message de remerciement et réinitialise le formulaire

    showMessage();

  }
};

function cleanModal() {
  // Masquer le message de confirmation
  const confirmationMessage = document.querySelector('.confirmation-message');
  confirmationMessage.style.display = 'none';

 // Réinitialiser le formulaire principal
 form.reset();


  // Réinitialiser le style des éléments de contrôle
  const inputControls = document.querySelectorAll('.input-control');
  inputControls.forEach(control => {
    control.classList.remove('success', 'erreur');
    const erreurDisplay = control.querySelector('.erreur');
    erreurDisplay.innerText = '';
  });

  // Désélectionner toutes les options radio
  const radioButtons = document.querySelectorAll('[type="radio"]');
  radioButtons.forEach(radio => (radio.checked = false));

    // Recharger la page
    window.location.reload();
}
// Ajoutez une fonction pour fermer le formulaire
function closeForm() {
  const formfermer = document.getElementById('formfermer');
  formfermer.style.display = 'none';

  closeModal();
    // Réinitialise le formulaire principal
    cleanModal();

}

  
