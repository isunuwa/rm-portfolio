'use strict';

let  icon = document.querySelector(".fa-moon-o");
let  logo = document.querySelector(".rz-logo");

icon.addEventListener('click', function(){
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    logo.src = "./assets/images/logo-light.png";
    icon.className = 'fa fa-circle';
  }
  else{
    logo.src = "./assets/images/logo.png";
    icon.className = 'fa fa-moon-o';
  }
});

// fa-circle
