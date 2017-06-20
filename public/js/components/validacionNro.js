"use strict";
const NumberValidationP2 = () => {
  const containerNumValidation = $('<div class="container-Nvalidation"></div>');
  const phoneImg = $('<img class="phone-img" src="img/icons/phone.png"></img>');
  const titleP2 = $('<h3 class="titleP2">Para comenzar validemos tu número</h3>');
  const textP2 =  $('<span class="textP2">Recibirás un SMS con un código de validación</span>');
  const formP2 = $('<form class="form"></form>');
  const divInput = $('<div class="divInput"></div>');
  const imgInput = $('<img class="input-img" src="/img/icons/phoneandnumber.png"></img>')
  const inputP2 = $('<input class="input" type="text"></input>');
  const checkbox = $('<input class="cheeckbox" type="checkbox" name="" value="">Acepto los <span class="terminos">Terminos y condiciones </span></input>');
  const btnContinuar = $('<a class="btn-continuar btn-yellow"><span class="btn-text">CONTINUAR</span></a>');

  containerNumValidation.append(phoneImg);
  containerNumValidation.append(titleP2);
  containerNumValidation.append(textP2);
  containerNumValidation.append(formP2);
  formP2.append(divInput);
  formP2.append(checkbox);
  containerNumValidation.append(btnContinuar);
  divInput.append(imgInput);
  divInput.append(inputP2);

  return containerNumValidation;

}
