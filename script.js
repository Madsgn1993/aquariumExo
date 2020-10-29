import './style.scss';
import $ from 'jquery';
// import axios from 'axios';

$('body').append('<div id="octopu"></div>');
$('body').append('<div id="milenium"></div>');
$('body').append('<div id="megalodon"></div>');
$('body').append('<div class="poisson"></div>');
$('body').append('<div id="baracouda"></div>');
$('#milenium').on('click', function () {
  alert('Oh..désolé... Boire ou conduire, il faut choisir *hic . Allez Chouwi! Je t"avais dit le bistro de la mort *hic!');
  setInterval(function () {
    $('#milenium').remove();
  }, 2000);
});
// rend cliquable la class poisson. le click declache une alert et apres
// la fermeture alert, il disparait et le requin avance sur lui
$('.poisson').on('click', function () {
  alert('Oh non, il va me manger !');

  setInterval(function () {
    $('.poisson').remove();
    $('#megalodon').css('left', '1300px');
  }, 3000);
});
// rend cliquable l id octopus. le click declache une alert et apres la fermeture alert, il bouge
$('#octopu').on('click', function () {
  alert('Je suis le monstre Raaaaaaaaaaw!!!!!');
  setInterval(function () {
    $('#octopu').css('top', '479px');
    $('#octopu').css('left', '1084px');
  }, 1000);
});
