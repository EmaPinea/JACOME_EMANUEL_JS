const precio_entrada = 20;
const cupos_iniciales = 50;

const descuentos_estudiantes = 0.30;
const descuentos_docente = 0.15;
const descuento_general = 0;

const max_entradas = 5;

let cuposDisponibles = cupos_iniciales;
let entradasVendidas = 0;
let ingresosAcumulados = 0;
let comprasRealizadas = 0;

let opcion;

do {
    opcion = prompt(
        "INNOVA ESPE 2026\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir"
    );

    switch (opcion) {
        case "1":
            break;

        case "2":
            break;

        case "3":
            break;

        case "4":
            alert("Gracias por utilizar el sistema");
            break;

        default:
            alert("Opcion incorrecta");
    }

} while (opcion !== "4");