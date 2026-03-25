// variables:

const numero1 = 10;
const numero2 = 20;

// condicionales:

if (numero1 > numero2) {
    console.log("El número 1 es mayor");
} 
else if (numero2 > numero1) {
    console.log("El número 2 es mayor");
} 
else {
    console.log("Los números son iguales");
}

////------

// 1. Mayor de edad
const edad = 21;

if (edad >= 18) {
    console.log("Si puedes votar");
} 
else {
    console.log("No puedes votar, aún eres muy joven");
}


// 2. Número + o -
const numero = -5;

if (numero > 0) {
    console.log("Es positivo");
} 
else if (numero < 0) {
    console.log("Es negativo");
} 
else {
    console.log("Es cero");
}


// 3. Aprobado o Suspenso
const nota = 8;

if (nota >= 5) {
    console.log("Felicidades! has aprobado =)");
} 
else {
    console.log("Debes estudiar más para la próxima =(");
}


// 4. Par o Impar
const num = 4;

if (num % 2 === 0) {
    console.log("Es un número par");
} 
else {
    console.log("Es impar");
}


// 5. Es fin de semana?
const dia = "Sábado";

if (dia === "Sábado" || dia === "Domingo") {
    console.log("A disfrutar del descanso =)");
} 
else {
    console.log("Toca seguir trabajando");
}

///-----

// Ejercicio: Piedra, Papel o Tijera

const opciones = ["Piedra", "Papel", "Tijera"];

const select1 = document.getElementById("jugador1");
const select2 = document.getElementById("jugador2");
const btnJugar = document.getElementById("btnJugar");
const resultado = document.getElementById("resultado");

opciones.forEach(opcion => {
    select1.add(new Option(opcion, opcion));
    select2.add(new Option(opcion, opcion));
});

btnJugar.addEventListener("click", () => {
    const eleccion1 = select1.value;
    const eleccion2 = select2.value;

    if (eleccion1 === eleccion2) {
        resultado.textContent = "Empate";
    } else if (
        (eleccion1 === "Piedra"  && eleccion2 === "Tijera") ||
        (eleccion1 === "Papel"   && eleccion2 === "Piedra")  ||
        (eleccion1 === "Tijera" && eleccion2 === "Papel")
    ) {
        resultado.textContent = "Gana Jugador 1 =)";
    } else {
        resultado.textContent = "Gana Jugador 2 =)";
    }
});

