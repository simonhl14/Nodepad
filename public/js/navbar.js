window.addEventListener('load', () => {
    const boton = document.querySelector('#boton');
    const menu = document.querySelector('#menu');
    const botones = document.querySelectorAll('#botones');
    const dropdown = document.querySelector('#dropdownDefault');
    const listDropdown = document.querySelector('#dropdown');
    const url = window.location.href.search('dashboard');

    if(url == -1){
        botones.forEach( element => {
            element.style.display = 'inline-block';
        });
    } else{
        botones.forEach( element => {
            element.style.display = 'none';
        });
    }

    if(listDropdown != null || dropdown != null){
        listDropdown.classList.toggle('hidden');

        dropdown.addEventListener('click', () => {
            listDropdown.classList.toggle('hidden');
        });
    }
    menu.classList.toggle('hidden');
    
    boton.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    
});