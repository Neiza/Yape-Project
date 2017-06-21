"use strict";

const Screen5UsarYape = () => {
  const coonstainerS5 = $('<div class="container-Screen5"></div>');
  const checkImg = $('<img class="phone-img" src="img/icons/check.png"></img>');
  const titleS5= $('<h3 class="titleP2">¡Bien!<br> Ahora puedes usar Yape</h3>');

  coonstainerS5.append(checkImg);
  coonstainerS5.append(titleS5);

  return coonstainerS5

}
