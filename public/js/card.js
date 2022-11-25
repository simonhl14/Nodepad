window.addEventListener('load', () => {
    const trash = document.querySelectorAll('#trash');
    const eliminar = document.querySelectorAll('#eliminar');
    const reporte = document.querySelectorAll('#reporte');
    const editar = document.querySelectorAll('#editar');
    
    const openmodal = document.querySelectorAll(`.modal-open`)
    const closemodal = document.querySelectorAll(`.modal-close`)
    const overlay = document.querySelector(`.modal-overlay`)
    
    editar.forEach(element => {
        element.addEventListener('click', function () { 
            window.location.href =  `/dashboard/editProject/${element.value}`
        });
    });
                    
    openmodal.forEach(opn => {
        opn.addEventListener('click', function(event){
            event.preventDefault()
            toggleModal();
        });
    });  
    
    overlay.addEventListener('click', toggleModal);

    closemodal.forEach(cls => {
        cls.addEventListener('click', () => {                    
            toggleModal();
        })
    })
    
    
    document.onkeydown = function(evt) {
        evt = evt || window.event
        var isEscape = false
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape && document.body.classList.contains(`modal-active`)) {
            toggleModal();
        }
    };
    
    
    function toggleModal () {
        const body = document.querySelector('body')
        const modal = document.querySelector(`.modal`)
        modal.classList.toggle('opacity-0')
        modal.classList.toggle(`pointer-events-none`)
        body.classList.toggle(`modal-active`)
    }
            
 

    reporte.forEach(element => {
        element.addEventListener('click', function () { 
            console.log("Id seleccionado REPORTE: ", element.value)
         });
    });

    trash.forEach((element, index) => {
        element.addEventListener('mouseover', function(){
            element.style.fill = 'red';
        });
    
        element.addEventListener('mouseout', function(){
            element.style.fill = 'black';
        });
    });

});