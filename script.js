// variables:

const numero1 = 10;
const numero2 = 20;

// condicionales:

if (numero1 > numero2) {
    console.log("El número 1 es mayor");
} else if (numero2 > numero1) {
    console.log("El número 2 es mayor");
} else {
    console.log("Los números son iguales");
}

// 1. Mayor de edad?
const edad = 20;

if (edad >= 18) {
    console.log("Puedes votar");
} else {
    console.log("Aún eres muy joven");
}


// 2. Número positivo o negativo
const numero = -5;

if (numero > 0) {
    console.log("Es positivo");
} else if (numero < 0) {
    console.log("Es negativo");
} else {
    console.log("Es cero");
}


// 3. Aprobado o Suspenso
const nota = 7;

if (nota >= 5) {
    console.log("Felicidades, has aprobado =)");
} else {
    console.log("Debes estudiar más para la próxima =(");
}


// 4. Par o Impar
const num = 4;

if (num % 2 === 0) {
    console.log("Es un número par");
} else {
    console.log("Es impar");
}


// 5. Es fin de semana?
const dia = "Sábado";

if (dia === "Sábado" || dia === "Domingo") {
    console.log("A disfrutar del descanso =)");
} else {
    console.log("Toca seguir trabajando");
}