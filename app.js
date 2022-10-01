


let nombreIngresado = prompt ("ingresar nombre")
let apellidoIngresado = prompt ("ingresar apellido")
let comisionIngresada = prompt ("ingresar comision")

if ((nombreIngresado !="") && (apellidoIngresado !="") && (comisionIngresada !=""))
{
alert ("Nombre: " +nombreIngresado + "\nApellido: " +apellidoIngresado + "\nComision: " +comisionIngresada +"\nEn el próximo paso ingresara sus calificaciones");
  }

else{
    alert("error: Usted debe ingresar nombre, apellido y numero de comision")
}   

let calificacionoralIngresado = prompt ("ingrese la nota del examen oral")
let calificacionescritoIngresado = prompt ("ingresar nota de la evaluacion escrita")
let calificacionlisteningIngresado = prompt ("ingresar nota del listening")
let resultado;

function promedioCalificaciones (calificacionoralIngresado, calificacionescritoIngresado, calificacionlisteningIngresado)
{
    
    resultado = calificacionoralIngresado/3 + calificacionescritoIngresado/3 + calificacionlisteningIngresado/3 ;
    return resultado;
   
}

resultado = promedioCalificaciones (calificacionoralIngresado, calificacionescritoIngresado, calificacionlisteningIngresado)
alert ("Tu promedio es:" + "\n"+ resultado);

if (resultado >= 6)
{
alert ("Usted a aprobado el curso")  }

else{
    alert("Usted debe rendir un recuperatorio")
}   
