let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");
let comisionIngresada = prompt("Ingresar número de comisión");

if (
  nombreIngresado != "" &&
  apellidoIngresado != "" &&
  comisionIngresada != ""
) {
  alert(
    "Nombre: " +
      nombreIngresado +
      "\nApellido: " +
      apellidoIngresado +
      "\nComisión: " +
      comisionIngresada +
      "\nEn el próximo paso ingresara sus calificaciones"
  );
} else {
  alert("error: Usted debe ingresar nombre, apellido y número de comisión");
}



let calificacionoralIngresado = prompt("Ingrese la nota de su examen oral");
let calificacionescritoIngresado = prompt(
  "Ingrese la nota de su evaluación escrita"
);
let calificacionlisteningIngresado = prompt("ingrese la nota del listening");
let resultado;

function promedioCalificaciones(
  calificacionoralIngresado,
  calificacionescritoIngresado,
  calificacionlisteningIngresado
) {
  resultado =
    calificacionoralIngresado / 3 +
    calificacionescritoIngresado / 3 +
    calificacionlisteningIngresado / 3;
  return resultado;
}

resultado = promedioCalificaciones(
  calificacionoralIngresado,
  calificacionescritoIngresado,
  calificacionlisteningIngresado
);
alert("Tu promedio es:" + "\n" + resultado);

if (resultado >= 6) {
  alert("Usted aprobó el curso");
} else {
  alert("Usted debe rendir un recuperatorio");
}
