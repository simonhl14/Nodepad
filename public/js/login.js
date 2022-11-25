const formulario = document.querySelector('#form_login');

const email = document.querySelector('#email').value;

formulario.addEventListener('submit', () =>{
    localStorage.setItem('email', JSON.stringify(email));
});