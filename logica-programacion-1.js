
const prompt = require("prompt-sync")();
const numero1 = Number(prompt("Escribe un número: "));
const numero2 = Number(prompt("Escribe otro número: "));
const numero3 = Number(prompt("Escribe otro número: "));
let mayor;
let centro;
let menor;

if (numero1 === numero2 && numero2 === numero3) {
    console.log("Los tres números son iguales.");

} else {
    if (numero1 >= numero2 && numero1 >= numero3) {
        mayor = numero1;

        if (numero2 >= numero3) {
            centro = numero2;
            menor = numero3;
        } else {
            centro = numero3;
            menor = numero2;
        }

    } else if (numero2 >= numero1 && numero2 >= numero3) {
        mayor = numero2;

        if (numero1 >= numero3) {
            centro = numero1;
            menor = numero3;
        } else {
            centro = numero3;
            menor = numero1;
        }

    } else {
        mayor = numero3;

        if (numero1 >= numero2) {
            centro = numero1;
            menor = numero2;
        } else {
            centro = numero2;
            menor = numero1;
        }
    }

    console.log("De mayor a menor: " + mayor + ", " + centro + ", " + menor);
    console.log("De menor a mayor: " + menor + ", " + centro + ", " + mayor);
}
