var html = '';
for (var i = 1; i <= 100; i ++) {
  html += '<div class="flakeWrapper flakeWrapper--'+i+'"><div class="flake"></div></div>';
}
document.querySelector('.circle').innerHTML += html;
