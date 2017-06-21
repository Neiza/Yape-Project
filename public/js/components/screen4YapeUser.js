"use strict";

const Screen4YapeUser = () => {
  const constainerS4YapeUser = $('<div class="containerS4-yapeUser"></div>');
  const lockImg = $('<img class="phone-img" src="img/icons/lockone.png"></img>');
  const titleS4 = $('<h3 class="titleP2">Crea tu usuario Yape</h3>');
  const textS4 =  $('<span class="textP2">Ingresa tu nombre, email y nombre de usuario</span>');
  const divInputName = $('<div class="divInput"></div>');
  const imgInputName = $('<img class="input-img" src="/img/icons/user.png"></img>');
  const inputS3Name = $('<input class="input" type="text"></input>');
  const divInputEmail = $('<div class="divInputEmail"></div>');
  const imgInputEmail = $('<img class="input-imgEmail" src="/img/icons/message-gray.png"></img>');
  const inputS3Email = $('<input class="inputEmail" type="text"></input>');
  const divInputPass = $('<div class="divInputPass"></div>');
  const imgInputPass = $('<img class="input-imgPass" src="/img/icons/lock.png"></img>');
  const inputS3Pass = $('<input class="inputPass" type="password"></input>');
  const lowerText = $('<span class="lower-text">Cuida esta cave como oro, es tu acceso a Yape.</span>');
  const btnS4CrearCuenta = $('<button class="btn-continuar disabled" disabled><span class="btn-text text-disabled">CREAR CUENTA</span></button>');

  constainerS4YapeUser.append(lockImg);
  constainerS4YapeUser.append(titleS4);
  constainerS4YapeUser.append(textS4);
  constainerS4YapeUser.append(divInputName);
  constainerS4YapeUser.append(divInputEmail);
  constainerS4YapeUser.append(divInputPass);
  constainerS4YapeUser.append();
  constainerS4YapeUser.append();
  constainerS4YapeUser.append();

btnS4CrearCuenta.on('click', () =>{
  const root = $('.root');
  root.empty();
  root.append(Screen5UsarYape());
});

 return constainerS4YapeUser;

}
