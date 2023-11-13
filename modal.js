function editNav() {
  let x = document.getElementById("myHeader");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const validation = document.forms["reserve"];

const closeBtn = document.querySelectorAll(".close");

let fname = document.getElementById("fname");
let l_name = document.getElementById("last");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let nberQuantity = document.getElementById("quantity");
let BtnRadio = document.getElementsByName('location');
let CheckCondition = document.getElementById('checkbox1');

const thankMsg = document.getElementById('thankMsg');
const thankBtn = document.getElementById('thankBtn');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Evénement 'click' sur bouton fermeture

closeBtn.forEach((btn) => {btn.addEventListener("click", closeModal)});
function closeModal(){
  modalbg.style.display = "none";
 }


// function display msg error
const setError = (element, message) => {
  const formData =  element.parentElement;
  const errorDisplay = formData.querySelector('.msgError');
  errorDisplay.innerHTML  = message;
  formData.classList.add("error")
  formData.classList.remove("success")
}
// function input success
const setSuccess = element => {
  const formData =  element.parentElement;
  const errorDisplay = formData.querySelector('.msgError');
  errorDisplay.innerHTML  = '';
  formData.classList.add("success")
  formData.classList.remove("error")
}


 //Contrôle entrée prénom

 fname.addEventListener("input", () => {
  const regexFname = /^[a-zA-Z]+(([- ])?[a-zA-Z])+$/;
  console.log(fname.value);
  if(fname.value == ''){
    setError(fname, 'Veuillez renseigner le Prénom');
    return false;
}
else if(!regexFname.test(fname.value)){
  setError(fname, 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.')
  return false;
}else{
    setSuccess(fname);
    return true;
}
})
//Contrôle entrée nom

l_name.addEventListener("input", () => {
  const regexLast = /^[a-zA-Z]+(([- ])?[a-zA-Z])+$/;
  l_name.value = l_name.value.toUpperCase();
  if(l_name.value == ''){
    setError(l_name, 'Veuillez renseigner le Nom');
    return false;
  }else if(!regexLast.test(l_name.value)){
      setError(l_name, 'Veuillez entrer 2 caractères ou plus pour le champ du Prénom.')
      return false;
  }else
    setSuccess(l_name);
    return true;
})
//Contrôle entrée email

function validEmail(email) {
  const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(String(email).toLowerCase());
};
email.addEventListener("input", () => {
  console.log(email.value);
  if(email.value == ''){
    setError(email, 'Veuillez renseigner votre email');
    return false;
  }
 else if (!validEmail(email.value) ){
    setError(email, 'Veuillez entrer une adresse e-mail valide.')
    return false;
  }else{
      setSuccess(email);
      return true;
  }
  })
  //Contrôle entrée date de naissance

  function validBirthday(birthdate) {
    const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    return dateRegex.test(birthdate);
  }
  birthdate.addEventListener("input", () => {
    console.log(birthdate.value);
     if(!validBirthday(birthdate.value)) {
      setError(birthdate, 'Veuillez entrer une date valide');
      return false;
    }else{
      setSuccess(birthdate);
      return true;
    }
    })
//Contrôle nombre de participation

nberQuantity.addEventListener("change", () => {
  console.log(nberQuantity.value);
if(nberQuantity.value == ''){
setError(nberQuantity, 'Veuillez entrer une valeur entre 0 et 99');
return false;
}else{
setSuccess(nberQuantity);
return true;
}
})
//Contrôle ville saisie

let city = null;
for (var i = 0; i < BtnRadio.length; i++) {
  BtnRadio[i].addEventListener('change', function() {
    city = this.value;
   
    if(city == ""){
      setError(BtnRadio, 'Veuillez choisir une ville.')
      return false;
    }else{
      return true;
    }
})
};
//Conditions d'utilisation

function condition() {
  let condition = this.value;
  if (condition.checked) {
    return true;
  } 
}

// Validation du formulaire
function isFormValid() {
  if (!fname.value ||
    !l_name.value ||
    !email.value ||
    !birthdate.value ||
    !nberQuantity ||
    !city ||
    !condition
    ) {
      return false;
  }
  return true;
}

//vérification champs remplis
validation.addEventListener('submit', function(e) {
  console.log
  //empêche la soumission par défaut
    e.preventDefault(); 
    if (!isFormValid()) {
      errorSubmit.innerHTML = "Veuillez renseigner tous les champs";
      errorSubmit.style.color = "red";
      return false;
    } else {
      message()
      return true;
    }
  })

  //masque formulaire + message validation réussie
  function message() {
    //Masquer le formulaire d'origine
    validation.className = 'hiddenModal';
    //Afficher le message et le bouton de fermeture
    thankMsg.className = 'showModal';
  };
  

  thankBtn.addEventListener('click', function event() {
    //Réactiver le formulaire d'origine
    validation.className = 'showModal';
    //Masquer le message
    thankMsg.className = 'hiddenModal';
    // forcer la fermuture de la modale
    closeModal();
    //Réinitialiser le formulaire
    validation.reset();
    
    
  });


