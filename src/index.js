import createMarkup from './template/template.hbs';

import menu from './data/menu.json';

const ref = {
  menu: document.querySelector('.js-menu'),

  input: document.querySelector('#theme-switch-toggle'),

  body: document.body,
};

// const markUP = createMenu()
// function createMenu(){
//     return  menu.map(createMarkup).join('');
// }

// ref.menu.innerHTML=markUP;

ref.menu.innerHTML = createMarkup(menu);
refs.input.addEventListener('change', onChangeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// function onChangeTheme(e) {
//   if (!e.target.checked) {
//     toggleTheme(Theme.LIGHT, Theme.DARK);
//     return;
//     toggleTheme(Theme.DARK, Theme.LIGHT);
//   }
//   toggleTheme(Theme.DARK, Theme, LIGHT);
// }


function onChangeTheme(e) {
e.target.checked ? toggleTheme(Theme.DARK, Theme.LIGHT) : toggleTheme(Theme.LIGHT,Theme.DARK);
}

function toggleTheme(add, rem) {
//   refs.body.classList.add(add);
//   refs.body.classList.remove(rem);

  refs.body.classList.replace(rem,add);
  localStorage.setItem('theme', add);
}


(function (){
// if (localStorage.getItem('theme', ) === Theme.DARK ){
    // if (localStorage.getItem('theme')) {
      // refs.body.classList.add(Theme.DARK);
        refs.body.classList.add(localStorage.getItem('theme') ? localStorage.getItem('theme') : Theme.LIGHT);
    
// refs.body.classList.add(Theme.DARK) 
// refs.input.checked = true;
refs.input.checked = localStorage.getItem('theme') === Theme.DARK;
// return;
  }

// refs.body.classList.add(Theme.LIGHT)
) (); 