"use strict";

const Screen3Code = (time) => {
  const containerCodeS3 = $('<div class="container-s3"></div>');
  const messageImg = $('<img class="phone-img" src="img/icons/message.png"></img>');
  const titleS3 = $('<h3 class="titleP2">Ahora ingresa tu código</h3>');
  const textS3 = $('<span class="textP2">Enviamos un SMS con un código de validación al número '+ state.number +' </span>');
  const divInputS3 = $('<div class="divInput"></div>');
  const imgInputS3 = $('<img class="input-img" src="img/icons/lock.png"></img>');
  const inputS3 = $('<input class="input" type="text"></input>');
  const inputTextS3 = $('<span class="checkbox-text">Reintentar en <img src="img/icons/clock.png" class></img> ' + time + ' seg.</span>');

  containerCodeS3.append(messageImg);
  containerCodeS3.append(titleS3);
  containerCodeS3.append(textS3);
  containerCodeS3.append(divInputS3);
  containerCodeS3.append(inputTextS3);
  divInputS3.append(imgInputS3);
  divInputS3.append(inputS3);

   const resendCode = (data) => {
    $.post("http://localhost:3000/api/resendCode",
      {
        phone:state.number
      },
      function(){
       console.log(data.data);
       alert("El tiempo de espera acabó.Tu nuevo código es: " + data.data );

    });
  };

  const typingcode = () => {
    const inputValue = $('.input').val();
    if (inputValue == state.cod){
      const root = $('.root');
      root.empty();
      root.append(Screen4YapeUser());
    }
  }

  inputS3.on('keyup', () => {
    typingcode();
  });

  return containerCodeS3;
  setInterval(resendCode,21000);
}
