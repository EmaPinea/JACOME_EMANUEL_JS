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
        case "1": {

            if (cuposDisponibles === 0) {
                alert("Evento agotado, no hay entradas disponibles");
                break;
            }

            let nombre;
            let tieneNumeros;

            do {
                nombre = prompt("Ingrese el nombre del comprador:");
                tieneNumeros = false;

                if (nombre === null) {
                    break;
                }

                // se vslida si hay numeros
                for (let i = 0; i < nombre.length; i++) {
                    if (nombre[i] >= "0" && nombre[i] <= "9") {
                        tieneNumeros = true;
                        break;
                    }
                }

                if (nombre === "" || tieneNumeros) {
                    alert("Ingresa un nombre valido");
                }

            } while (nombre === "" || nombre === null || tieneNumeros);

            if (nombre === null) {
                break;
            }

            let tipoParticipante;
            let opcionParticipante;

            do {
                opcionParticipante = prompt(
                    "Seleccione el tipo de participante:\n" +
                    "E. Estudiante\n" +
                    "D. Docente\n" +
                    "G. Publico general"
                );

                if (opcionParticipante === null) {
                    break;
                }

                switch (opcionParticipante) {
                    case "E":
                        tipoParticipante = "estudiante";
                        break;

                    case "D":
                        tipoParticipante = "docente";
                        break;

                    case "G":
                        tipoParticipante = "general";
                        break;

                    default:
                        alert("Ingresa una opcion valida");
                        break;
                }

            } while (opcionParticipante !== "E" &&opcionParticipante !== "D" && opcionParticipante !== "G");

            if (opcionParticipante === null) {
                break;
            }

            let cantidadEntradas;
            let cantidadValida = false;

            do {
                let entrada = prompt("Ingrese la cantidad de entradas a comprar (1-5):");

                if (entrada === null) {
                    break;
                }

                cantidadEntradas = Number(entrada);

                if (cantidadEntradas <= 0 || cantidadEntradas > max_entradas || !Number.isInteger(cantidadEntradas)) {
                    alert("Cantidad de entradas no valida");

                } else if (cantidadEntradas > cuposDisponibles) {
                    alert("No hay suficientes cupos disponibles");

                }else {
                    cantidadValida = true;
                }

            } while (cantidadValida === false);

            if (cantidadValida === false) {
                break;
            }

            let subtotal = precio_entrada * cantidadEntradas;
            let descuento = 0;

            let porcentaje = 0;

            // se calcula el descuento
            switch (tipoParticipante) {
                case "estudiante":
                    porcentaje = 30;
                    descuento = subtotal * descuentos_estudiantes;
                    break;

                case "docente":
                    porcentaje = 15;
                    descuento = subtotal * descuentos_docente;
                    break;

                case "general":
                    porcentaje = 0;
                    descuento = subtotal * descuento_general;
                    break;
            }

            let total = subtotal - descuento;

            // se aactualiza los datos 
            cuposDisponibles -= cantidadEntradas;
            entradasVendidas += cantidadEntradas;
            ingresosAcumulados += total;
            comprasRealizadas++;

            alert(
                "COMPRA REALIZADA EXITOSAMENTE\n\n" +
                "Nombre: " + nombre + "\n" +
                "Participante: " + tipoParticipante + "\n" +
                "Cantidad de entradas: " + cantidadEntradas + "\n\n" +
                "Subtotal: $" + subtotal + "\n" +
                "Descuento (" + porcentaje + "%): $" + descuento + "\n" +
                "Total: $" + total + "\n" +
                "Cupos restantes: " + cuposDisponibles
            );

            break;
        }
        case "2":
            if (cuposDisponibles > 10) {
                alert("Cupos disponibles: " + cuposDisponibles);
            } else if (cuposDisponibles >= 1 && cuposDisponibles <= 10) {
                alert("Ultimos cupos disponibles: " + cuposDisponibles);
            } else {
                alert("Evento agotado, ya no hay cupos diisponibles");
            }
            break;

        case "3":
            alert(
                "RESUMEN DE INGRESOS\n\n" +
                "Entradas vendidas: " + entradasVendidas + "\n" +
                "Ingresos acumulados: $" + ingresosAcumulados + "\n" +
                "Compras realizadas: " + comprasRealizadas
            );
            break;

        case "4":
            alert(
                "RESUMEN FINAL\n\n" +
                "Entradas vendidas: " + entradasVendidas + "\n" +
                "Compras realizadas: " + comprasRealizadas + "\n" +
                "Ingresos acumulados: $" + ingresosAcumulados + "\n" +
                "Cupos restantes: " + cuposDisponibles + "\n\n" +
                "Gracias por comprar"
            );
            break;

        default:
            alert("Opcion incorrecta");
    }

} while (opcion !== "4");