"use strict"
const Screen6CardPass= () => {
  const container6CardPass = $('<div class="container-s7"></div>');
  const bcpImg = $('<img class="phone-img" src="img/icons/bcp-logo.png"></img>');
  const titleS6 = $('<h3 class="titleP2">Registra tu tarjeta de débito BCP</h3>');
  const textS6 = $('<span class="textP2">Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles.</span>');
  const divInputS6 = $('<div class="divInput"></div>');
  const imgInputS6 = $('<img class="input-img" src="img/icons/card.png"></img>');
  const inputS6 = $('<input class="input" type="text"></input>');
  const inputTextS6 = $('<span class="checkbox-text"><img class="input-img" src="img/icons/scan.png"></img><a>Escanear tarjeta</a></span>');
  const expirationDateDivInput = $('<div class="divInput"></div>');
  const expirationDateText = $('<span class="checkbox-text">Fecha de vencimiento</span>');
  const monthInput = $('<input class="input" type="text"></input>');
  const yearInput = $('<input class="input" type="text"></input>');
  const btnCrearCuenta = $('<button class="btn-continuar disabled" disabled><span class="btn-text text-disabled">CREAR CUENTA</span></button>');

  container6CardReg.append(bcpImg);
  container6CardReg.append(titleS6);
  container6CardReg.append(textS6);
  container6CardReg.append(divInputS6);
  container6CardReg.append(inputTextS6);
  container6CardReg.append(expirationDateDivInput);
  container6CardReg.append(btnCrearCuenta);
  divInputS6.append(imgInputS6);
  divInputS6.append(inputS6);
  expirationDateDivInput.append(expirationDateText);
  expirationDateDivInput.append(monthInput);
  expirationDateDivInput.append(yearInput);

  btnContinuar.on('click', () =>{
    const root = $('.root');
    root.empty();
    root.append(Screen7PassCard());
  });

  return container6CardReg;
}
