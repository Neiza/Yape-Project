"use strict";
const NumberValidationP2 = () => {
  const containerNumValidation = $('<div class="container-Nvalidation"></div>');
  const phoneImg = $('<img class="phone-img" src="img/icons/phone.png"></img>');
  const titleP2 = $('<h3 class="titleP2">Para comenzar validemos tu número</h3>');
  const textP2 =  $('<span class="textP2">Recibirás un SMS con un código de validación</span>');
  const divInput = $('<div class="divInput"></div>');
  const imgInput = $('<img class="input-img" src="/img/icons/phoneandnumber.png"></img>');
  const inputP2 = $('<input class="input" type="text"></input>');
  const checkbox = $('<input class="checkbox" type="checkbox" name=""></input>');
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

const numberValidation = () =>{
  const expressionPhoneNum = /9[0-9]{8}/;
  inputP2.blur(() => {
    if(expressionPhoneNum.test(inputP2.val())){
        alert("si");
        btnContinuar.removeClass("disabled");
        btnContinuar.addClass("btn-enable");
        btnContinuar.removeAttr("disabled");
    }
    else{
      alert("escribir un número de celular válido");
    }
  });
}
// falta hacer el check del checkbox;


const numberCode = (data) =>{
  $.post("http://localhost:3000/api/registerNumber",
    {
      phone: inputP2.val(),
      terms: true
    },
    function(data){
      alert("Tu código es: " + data.data.code);
      state.cod = data.data.code
      console.log(data.data.code);
    });

};



  btnContinuar.on('click', () =>{
    state.number = inputP2.val();
    const root = $('.root');
    root.empty();
    root.append(Screen3Code());
    numberCode();
 });

 numberValidation();
  return containerNumValidation;


}
