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

// for mbl mblIcon
let  mblIcon = document.querySelector(".mbl-moon");
let  mblLogo = document.querySelector(".mbl-rz-logo");

mblIcon.addEventListener('click', function(){
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    mblLogo.src = "./assets/images/logo-light.png";
    mblIcon.className = 'fa fa-circle';
  }
  else{
    mblLogo.src = "./assets/images/logo.png";
    mblIcon.className = 'fa fa-moon-o';
  }
});

// responsive navigation
let burger = document.querySelector('.burger');
let nav = document.querySelector('.rz-navbar-wrapper');
let navLinks = document.querySelectorAll('.rz-navbar-wrapper ul li');

const toggleNav = function() {
  nav.classList.toggle('active');
  document.body.classList.toggle("fixed-position");
  // burger animation
  burger.classList.toggle('active');
}

const navSlide = () => {
  burger.addEventListener('click', toggleNav);
}

const navClick = () => {
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', toggleNav);
  });
}

burger.addEventListener('click', navClick(), navSlide());
