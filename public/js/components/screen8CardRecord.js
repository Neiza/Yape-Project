"use strict"
const Screen8CardRecord= (tarjeta) => {
  const container8CardRecord = $('<div class="container-s8"></div>');
  const happyFaceImg = $('<img class="phone-img" src="img/icons/happy-face.png"></img>');
  const titleS8 = $('<h3 class="titleP2">Hola</h3>');
  const textS8 = $('<span class="textP2"><img class="input-img" src="img/icons/eye.png"></img> Mostrar Saldo</span>');
  const divInputS7 = $('<div class="divInput"></div>');
  const imgInputS7 = $('<img class="input-img" src="img/icons/lock.png"></img>');
  const inputS7 = $('<input class="input" type="text"></input>');
  const registrarBtn = $('<button class="btn-continuar disabled" disabled><span class="btn-text text-disabled">REGISTRAR</span></button>');

  container7CardReg.append(bcpImg);
  container7CardReg.append(titleS7);
  container7CardReg.append(textS7);
  container7CardReg.append(divInputS7);
  container6CardReg.append(registrarBtn);
  divInputS7.append(imgInputS7);
  divInputS7.append(inputS7);

  btnContinuar.on('click', () =>{
    const root = $('.root');
    root.empty();
    root.append(Screen8PassCard());
  });

  return container6CardReg;
}
