(function(){

  var vignette = document.getElementById('vignette');

  vignette.addEventListener("click", function(event) {

    if (vignette.className == 'pop') {
      vignette.className = '';
    } else {
      vignette.className = 'pop';
    }

  });

});