'use strict'

window.addEventListener("resize", promena_vel);

$('body').append('<div class="wrap"></div>');

$('.wrap').append('<div class="header">header</div>');
$('.wrap').append('<div class="center"></div>');
$('.wrap').append('<div class="foother">footer</div>');


for (var i = 0; i < 7; i++) {
$('.center').append('<div class="element">'+i+'</div>');
}


promena_vel();

function promena_vel() {
  var sirina_dev = $('.wrap').width();
  console.log(sirina_dev);
  if (sirina_dev>=972) {
    var br_red = 2;
  } else if (sirina_dev>= 572) {
    var br_red = 3;
  } else if (sirina_dev>=372) {
    var br_red = 4;
  } else {
    var br_red = 7;
  }
  
  var sirina = $('.element').width();
  var duzina = (sirina / 9 * 13);
  var margina = sirina * 2 / 100;
  $('.element').height(duzina);
  $('.element').css("margin", margina);

  var duz_centra = duzina *br_red + margina*(2.5*br_red);
  $('.center').height(duz_centra);
}
