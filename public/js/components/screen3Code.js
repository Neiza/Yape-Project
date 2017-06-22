"use strict";

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
       alert("El tiempo de espera acabó.Tu nuevo código es: " + data );

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
