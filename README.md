# Sistema de Gestión de Entradas — Innova ESPE 2026

## 1. Descripción del proyecto

Sistema básico de venta de entradas para el evento **Innova ESPE 2026**, desarrollado con JavaScript nativo. Permite registrar compras, calcular descuentos, controlar cupos disponibles y consultar los ingresos acumulados.

## 2. Objetivo

Desarrollar un sistema interactivo en JavaScript que permita gestionar la venta de entradas para el evento Innova ESPE 2026, aplicando validaciones, descuentos y controles de disponibilidad mediante estructuras condicionales, repetitivas y operadores básicos.

## 3. Funcionalidades del sistema

El sistema cuenta con un menú principal que permite realizar las siguientes operaciones:

### 1. Comprar entradas
- Solicitar el nombre del comprador, validando que no esté vacío ni contenga números.
- Seleccionar el tipo de participante mediante las opciones E (estudiante), D (docente) y G (público general).
- Ingresar y validar una cantidad de entradas entre 1 y 5.
- Verificar que existan suficientes cupos disponibles.
- Calcular el subtotal, descuento y total a pagar según el participante.
- Actualizar los cupos disponibles, las entradas vendidas, los ingresos y las compras realizadas.
- Mostrar un resumen de la compra.
- Permitir cancelar la compra sin modificar los registros.

### 2. Consultar cupos disponibles
- Mostrar el número de cupos disponibles cuando sea mayor que cero.
- Informar cuando existen más de 10 cupos.
- Advertir cuando quedan entre 1 y 10 cupos.
- Informar cuando el evento está agotado.

### 3. Consultar ingresos acumulados
- Mostrar el total de entradas vendidas.
- Consultar los ingresos acumulados.
- Mostrar el número de compras realizadas.

### 4. Salir
- Presentar un resumen final de las entradas vendidas, compras realizadas, ingresos acumulados y cupos restantes.
- Finalizar la ejecución del sistema.

## 4. Configuración del sistema

Los valores establecidos para el funcionamiento del sistema son:

| Concepto | Valor |
|---|---|
| Precio por entrada | $20.00 |
| Cupos iniciales | 50 |
| Descuento para estudiantes | 30 % |
| Descuento para docentes | 15 % |
| Descuento para público general | 0 % |
| Máximo de entradas por compra | 5 |

## 5. Tecnologías utilizadas

- HTML5
- JavaScript nativo
- Git y GitHub

## 6. Estructura del proyecto

```text
JACOME_EMANUEL_JS/
│
├── index.html
│
├── js/
│   └── app.js
│
└── README.md
```

## 7. Instrucciones de ejecución

Para ejecutar el sistema, se deben seguir los siguientes pasos:

1. Descargar o clonar el repositorio desde GitHub.
2. Abrir la carpeta del proyecto.
3. Ejecutar el archivo `index.html` en un navegador web.
4. Seleccionar una opción del menú principal.

**Nota:** Para seleccionar el tipo de participante, se deben ingresar las letras mayúsculas `E`, `D` o `G`.