"use strict";
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    responsive:{
        0:{
            items:1}
        },

  })
});

const RegistroP1 = () => {
  const containerRegistroP1 = $('<div class="container-registro-p1"></div>');
  const slideContainer = $('<div class="slide-container"></div>');
  const btnRegistrarme = $('<a class="btn-registrarme btn-yellow"><span class="btn-text">REGISTRARME</span></a>');

  const slide = () => {
    const containerS = $('<div class="container-S"></div>');
    const owlCont = $('<div class="owl-carousel"></div>');

    const img1 = $('<div class="img-cont"><img class="img-registrarmeP1" src="img/icons/happy-person.png"></img></div>');
    const img2 = $('<div class="img-cont"><img class="img-registrarmeP1" src="img/icons/happy-person.png"></img></div>');
    const img3 = $('<div class="img-cont"><img class="img-registrarmeP1" src="img/icons/group-people.png"></img></div>');


    containerS.append(owlCont);

    owlCont.append(img1);
    owlCont.append(img2);
    owlCont.append(img3);


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
