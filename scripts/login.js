

let Ingresarf=document.getElementById('Ingresar');

Ingresarf.addEventListener('click',Ingresar)



function Ingresar(){
  
    let Usuario=document.getElementById('usuario').value;
    let Contraseña=document.getElementById('contraseña').value;
    console.log(Contraseña);
    console.log(Usuario);


  

    let NombreUsuario= 'estefania.henao5';
    let Password='e1234';

    if((NombreUsuario==Usuario) && (Password==Contraseña)){
        location.href="asignarcita.html";
    }else{
        alert('Contraseña Incorrecta');
    }



}