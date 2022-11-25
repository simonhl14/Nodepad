window.addEventListener('load', () => {
    const boton = document.querySelector('#boton');
    const menu = document.querySelector('#menu');
    const botones = document.querySelectorAll('#botones');
    const url = window.location.href.search('dashboard');

    if(url == -1){
        botones.forEach( element => {
            element.style.display = 'inline-block'
        });
    } else{
        botones.forEach( element => {
            element.style.display = 'none'
        });
    }

    menu.classList.toggle('hidden')
    
    boton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});