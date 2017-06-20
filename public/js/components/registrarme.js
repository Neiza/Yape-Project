"use strict";

const RegistroP1 = () => {
  const containerRegistroP1 = $('<div class="container-registro-p1"></div>');
  const slideContainer = $('<div class="slide-container"></div>');
  const btnRegistrarme = $('<a class="btn-registrarme btn-yellow"><span class="btn-text">REGISTRARME</span></a>');

  const slide = () => {
    const containerS = $('<div class="containerS"></div>');
    const ul = $('<ul class="slides"></ul>');
    const li1 = $('<li class="contenedor-img"></li>');
    const li2= $('<li class="contenedor-img"></li>');
    const li3 = $('<li class="contenedor-img"></li>');
    const figcap1 = $('<figcaption class="caption cap-img1"><h3>Paga a tus amigos</h3>Paga a quien quieras desde donde <br> quieras, sin usar efectivo.</figcaption>');
    const figcap2 = $('<figcaption class="caption cap-img2"><h3>Sin nùmero de cuenta</h3>Elige a quien pagar desde tu lista de contactos.</figcaption>');
    const figcap3 = $('<figcaption class="caption cap-img3"><h3>Gratis y seguro</h3>La transferencia es inmediata y gratuitade una cuenta a otra.</figcaption>');
    const img1 = $('<img class="img-registrarmeP1" src="img/icons/icon-people.png"></img>');
    const img2 = $('<img class="img-registrarmeP1" src="img/icons/happy-person.png"></img>');
    const img3 = $('<img class="img-registrarmeP1" src="img/icons/group-people.png"></img>');
    const dotContainer = $('<div class="dot-container"></div>');
    const dot1 = $('<span class="dot" data-id="1"></span>');
    const dot2 = $('<span class="dot" data-id="2"></span>');
    const dot3 = $('<span class="dot" data-id="3"></span>');

    containerS.append(ul);
    containerS.append(dotContainer);
    ul.append(li1);
    ul.append(li2);
    ul.append(li3);
    li1.append(img1);
    li2.append(img2);
    li3.append(img3);
    li1.append(figcap1);
    li2.append(figcap2);
    li3.append(figcap3);
    dotContainer.append(dot1);
    dotContainer.append(dot2);
    dotContainer.append(dot3);

     return containerS;
  }

  containerRegistroP1.append(slideContainer);
  containerRegistroP1.append(btnRegistrarme);
  slideContainer.append(slide());


  btnRegistrarme.on('click', () =>{
    const root = $('.root');
    root.empty();
    root.append(NumberValidationP2());
});



  return containerRegistroP1;
}
