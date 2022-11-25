window.addEventListener('load', () => {
    const trash = document.querySelectorAll('#trash');
    const eliminar = document.querySelectorAll('#eliminar');
    const reporte = document.querySelectorAll('#reporte');
    const editar = document.querySelectorAll('#editar');

    editar.forEach(element => {
      element.addEventListener('click', function () { 
          window.location.href =  `/dashboard/editProject/${element.value}`
       });
    });
    
    eliminar.forEach(element => {
        element.addEventListener('click', function () { 
            console.log("Id seleccionado DELETE: ", element.value)
         });
    });

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