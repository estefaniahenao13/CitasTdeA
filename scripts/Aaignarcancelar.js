
let CitasD = document.getElementById('contenedor_citas_disponibles');
let Disponibilidad = document.getElementById('Disponibilidad').addEventListener('click',Disponibles);
let Seleccionarc= document.getElementById('Seleccionarc');


function Disponibles(){
    CitasD.style.visibility= 'visible'
}

$(function(){
    $('.ocultar').hide();

    $('.contenido-selecciona #Asignar').on('click',function(){
        $('.Contenido-asignar').show();
        $('.Contenido-cancelar').hide();

    });

    $('.contenido-selecciona #Cancelar').on('click',function(){
        $('.Contenido-asignar').hide();
        $('.Contenido-cancelar').show();

    });

    $('.contenido-selecciona button').on('click',function(){

        $('.contenido-selecciona button').removeClass('activo');
        $(this).addClass('activo');
        
    });

    
});






