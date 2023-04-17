const body = document.querySelector('body');
const toggle = document.querySelector('.toggle-box');
const darkMode = document.querySelector('.dark-mode');
const header = document.querySelector('header');


toggle.addEventListener('click',()=>{
  darkMode.classList.toggle('light-mode');
  toggle.classList.toggle('light-mode');
  body.classList.toggle('active');
  header.classList.toggle('light-mode')

});

