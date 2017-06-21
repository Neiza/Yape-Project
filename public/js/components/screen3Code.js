"use strict";

const Screen3Code = (registeredNumber) => {
  const containerCodeS3 = $('<div class="container-s3"></div>');
  const messageImg = $('<img class="phone-img" src="img/icons/message.png"></img>');
  const titleS3 = $('<h3 class="titleP2">Ahora ingresa tu código</h3>');
  const textS3 = $('<span class="textP2">Enviamos un SMS con un código de validación al número '+registeredNumber+' </span>');
  const divInputS3 = $('<div class="divInput"></div>');
  const imgInputS3 = $('<img class="input-img" src="img/icons/lock.png"></img>');
  const inputS3 = $('<input class="input" type="text"></input>');
  const inputTextS3 = $('<span class="checkbox-text">Reintentar en <img src="img/icons/clock.png" class></img> 21 seg.</span>');

  containerCodeS3.append(messageImg);
  containerCodeS3.append(titleS3);
  containerCodeS3.append(textS3);
  containerCodeS3.append(divInputS3);
  containerCodeS3.append(inputTextS3);
  divInputS3.append(imgInputS3);
  divInputS3.append(inputS3);

//   const resendCode = () => {
//     const inputS2 = $('.input').val();
//     $.post("http://localhost:3000/api/resendCode",
//     {
//       phone: inputS2
//     },
//     function(){
//       {
//
//       }
//     });
// };

  const codeValidation = (code) => {
    const inputValue = $('.input').val();
    if (inputValue == code){
      root.empty();
      root.append(Screen4YapeUser());
    }
  }



  inputS3.on('click', (data) => {
    // const data =
    console.log(data.data.code);
    // codeValidation(data.data.code);
  });

  return containerCodeS3;
}
