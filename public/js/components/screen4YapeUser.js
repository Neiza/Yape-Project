"use strict";

const Screen4YapeUser = () => {
  const constainerS4YapeUser = $('<div class="containerS4-yapeUser"></div>');
  const lockImg = $('<img class="phone-img" src="img/icons/lockone.png"></img>');
  const titleS4 = $('<h3 class="titleP2">Crea tu usuario Yape</h3>');
  const textS4 =  $('<span class="textP2">Ingresa tu nombre, email y nombre de usuario</span>');
  const divInputName = $('<div class="divInputName"></div>');
  const imgInputName = $('<img class=" img-size" src="/img/icons/user.png"></img>');
  const inputS3Name = $('<input class="input" type="text" placeholder="Nombre"></input>');
  const divInputEmail = $('<div class="divInputEmail input-container"></div>');
  const imgInputEmail = $('<img class=" img-size" src="/img/icons/message-gray.png"></img>');
  const inputS3Email = $('<input class="input" placeholder="correo@ejemplo.com" type="text"></input>');
  const divInputPass = $('<div class="divInputPass input-container"></div>');
  const imgInputPass = $('<img class="img-size" src="/img/icons/lock.png"></img>');
  const inputS3Pass = $('<input class="inputs" placeholder="Ingresa clave de 6 dígitos" type="password"></input>');
  const lowerText = $('<span class="lower-text">Cuida esta cave como oro, es tu acceso a Yape.</span>');
  const btnS4CrearCuenta = $('<button class="btn-continuar disabled" disabled><span class="btn-text text-disabled">CREAR CUENTA</span></button>');

  constainerS4YapeUser.append(lockImg);
  constainerS4YapeUser.append(titleS4);
  constainerS4YapeUser.append(textS4);
  constainerS4YapeUser.append(divInputName);
  constainerS4YapeUser.append(divInputEmail);
  constainerS4YapeUser.append(divInputPass);
  constainerS4YapeUser.append(lowerText);
  constainerS4YapeUser.append(btnS4CrearCuenta);
  divInputName.append(imgInputName);
  divInputName.append(inputS3Name);
  divInputEmail.append(imgInputEmail);
  divInputEmail.append(inputS3Email);
  divInputPass.append(imgInputPass);
  divInputPass.append(inputS3Pass);


btnS4CrearCuenta.on('click', () =>{
  const root = $('.root');
  root.empty();
  root.append(Screen5UsarYape());
});

 return constainerS4YapeUser;

}
