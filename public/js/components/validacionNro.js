"use strict";
const NumberValidationP2 = () => {
  const containerNumValidation = $('<div class="container-Nvalidation"></div>');
  const phoneImg = $('<img class="phone-img" src="img/icons/phone.png"></img>');
  const titleP2 = $('<h3 class="titleP2">Para comenzar validemos tu número</h3>');
  const textP2 =  $('<span class="textP2">Recibirás un SMS con un código de validación</span>');
  const divInput = $('<div class="divInput"></div>');
  const imgInput = $('<img class="input-img" src="/img/icons/phoneandnumber.png"></img>');
  const inputP2 = $('<input class="input" type="text"></input>');
  const checkbox = $('<input id="input1" class="checkbox" type="checkbox" name=""></input>');
  const checkboxText = $('<span class="checkbox-text">Acepto los <a>Términos y condiciones</a></span>')
  const btnContinuar = $('<button class="btn-continuar disabled" disabled><span class="btn-text text-disabled">CONTINUAR</span></button>');
//btn-yellow
  containerNumValidation.append(phoneImg);
  containerNumValidation.append(titleP2);
  containerNumValidation.append(textP2);
  containerNumValidation.append(divInput);
  containerNumValidation.append(checkbox);
  containerNumValidation.append(checkboxText);
  containerNumValidation.append(btnContinuar);
  divInput.append(imgInput);
  divInput.append(inputP2);


  const expressionPhoneNum = /[0-9]{9}/;
  const checkedCheckbox = $('.checkbox').prop("checked");

    $('.input').keyup(function (){
      this.value = (this.value + '').replace(/[^0-9]/g, '');
    });

  btnContinuar.on('click', () =>{
    const root = $('.root');
    root.empty();
    root.append(Screen3Code());
 });

  return containerNumValidation;

}
