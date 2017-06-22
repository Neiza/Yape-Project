"use strict";
const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  const update = () =>{
    render(root);
  }
  wrapper.append(RegistroP1());
  root.append(wrapper);
}

const state = {
  number: null,
  cod: null
}


$( _ => {
  const root = $('.root');
  render(root);
  // $.post('package.json', (err) => {
  //
  //   if (err) { return alert(err.message);}
  //
  //   state.stations = json;
  //
  //   const root = $('.root');
  //   render(root);
  // });

});
