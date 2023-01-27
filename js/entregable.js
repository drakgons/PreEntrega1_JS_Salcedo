/**Entregable condicionales */

// let edad = prompt("Ingresa tu edad: ")

// if (edad < 18) {
//   console.log("Usted es menor de 18 anios.");
// } else if (edad >= 18 && edad <= 21) {
//   console.log("Usted tiene entre 18 y 21 anios de edad.");
// } else {
//   console.log("Usted tiene mas de 21 anios.");
// }


// const fruta = prompt("Ingresa y Compra tu fruta favorita: ")

// switch (fruta) {
//     case "manzana":
//         alert("Te gusta la manzana");
//         break;
//     case "banano":
//         alert("Te gusta el banano");
//         break;
//     case "mango":
//         alert("Te gusta el mango");
//         break;
//     case "uva":
//         alert("Te gusta la uva");
//         break;
//     default:
//         alert("Tu fruta no esta en stock");
//         break;
// }

/** Entregable Ciclos*/

//Mostrando numeros pares en un bluce for

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//       alert( i );
//     }
//   }

//Mostrando valor de index en ascenso y valor de J en reverso
// for (index = 0, j = 5; index < 5; index++, j--) {
//     console.log("Valor de index y j:", index, j);
//   }

// let segundosCumpleanios = parseInt(prompt("Ingrese los segundos faltantes para su cumpleanios: "))

// var i = segundosCumpleanios;
// while (i > 0) {
//   console.log(i);
//   i--;
// }


alert("** CALCULADORA DE PRESTAMOS **");
let nombre = prompt("Ingrese su nombre: ");
let dineroIngresado = parseInt(prompt("Ingresa el monto de dinero que necesitas: "));
let cuotas = parseInt(prompt("Ingresa la cantidad de cuotas, para devolver el préstamo: \n1- EN 6 CUOTAS \n2- EN 12 CUOTAS \n3- EN 18 CUOTAS \n4- EN 24 CUOTAS"));


const seisCuotas = dineroIngresado*1.3;
const doceCuotas = dineroIngresado*1.75;
const dieciochoCuotas = dineroIngresado*2;
const veinticuartroCuotas = dineroIngresado*2.6;
const en6Meses = seisCuotas/6;
const en12Meses = doceCuotas/12;
const en18Meses = dieciochoCuotas/18;
const en24Meses = veinticuartroCuotas/24;


function calculadoraPrestamo() {
        switch (cuotas){
            case 1:
                alert("Pagarias 6 cuotas de $" + en6Meses + " sumando un total: $" + seisCuotas );
                break;
            case 2:
                alert("Pagarias 12 cuotas de $" + en12Meses + " sumando un total: $" + doceCuotas );
                break;
            case 3:
                alert("Pagarias 18 cuotas de $" + en18Meses + " sumando un total: $" + dieciochoCuotas );
                break;
            case 4:
                alert("Pagarias 24 cuotas de $" + en24Meses + " sumando un total: $" + veinticuartroCuotas);
                break;
            default:
                alert("A ingresado una cuota que no brindamos");
        }
        if (cuotas !=1 && cuotas !=2 && cuotas != 3 && cuotas !=4){
            alert("Tenemos solo estas cuotas:  \n1- 6 MESES \n2- 12 MESES \n3- 18 MESES \n4- 24 MESES \n \n ***** Actualiza el navegador (F5) ***** ");
            
        }
       


}

calculadoraPrestamo();

alert("Gracias "+ nombre +" Hasta luego 🤠");






