// Ejercicio: 
// Preguntar la hora,
// mostrar menu, 
// elegir platos,
// mostrar la elección y coste total

// Primero están las funciones que se llamarán más adelante 

// Analizar el primer input (la hora)
function esHoraValida(hora) {
  // Expresión regular para verificar el formato de hora HH:MM
  const formato_hora = /^([01]\d|2[0-3]):([0-5]\d)$/;
  return formato_hora.test(hora);
}

// Tipo de comida segun la hora
function tipoComida(hora) {
if (hora >= '07:00' && hora <= '12:00') {
  return "Desayuno";
} 
if (hora > '12:00' && hora <= '16:00') {
  return "Comida";
}
if (hora > '20:00' && hora <= '23:00') {
  return "Cena";
}
return "Cerrado";
}

// Los tres menus al completo
let menu = {
  Desayuno: {
      Primero: [
          { nombre: "Fruta", precio: 2 },
          { nombre: "Yogurt", precio: 2 },
          { nombre: "Batido", precio: 3 }
      ],
      Segundo: [
          { nombre: "Pancakes", precio: 3 },
          { nombre: "Tortilla", precio: 4 },
          { nombre: "Tostada", precio: 2 }
      ],
      Postre: [
          { nombre: "Tarta", precio: 3 },
          { nombre: "Cafe", precio: 2 },
          { nombre: "Infusion", precio: 2 }
      ]
  },
  Comida: {
      Primero: [
          { nombre: "Ensalada", precio: 5 },
          { nombre: "Macarrones", precio: 4 },
          { nombre: "Pure", precio: 3 }
      ],
      Segundo: [
          { nombre: "Merluza", precio: 9 },
          { nombre: "Escalope", precio: 8 },
          { nombre: "Pollo", precio: 8 }
      ],
      Postre: [
          { nombre: "Bizcocho", precio: 5 },
          { nombre: "Helado", precio: 4 },
          { nombre: "Fruta", precio: 2 }
      ]
  },
  Cena: {
        Primero: [
          { nombre: "Ensalada", precio: 5.5 },
          { nombre: "Macarrones", precio: 5 },
          { nombre: "Pure", precio: 3.5 }
      ],
      Segundo: [
          { nombre: "Merluza", precio: 11 },
          { nombre: "Escalope", precio: 10 },
          { nombre: "Pollo", precio: 10 }
      ],
      Postre: [
          { nombre: "Bizcocho", precio: 5.5 },
          { nombre: "Helado", precio: 5 },
          { nombre: "Fruta", precio: 2.5 }
      ]
  }
};

// Mostrar el menú en la pantalla
function mostrarMenu(tipoComida) {
  if (!menu[tipoComida]) {
      alert("Tipo de comida no disponible.");
      return;
  }

  let menuSeleccionado = menu[tipoComida];
  let mensaje = `Menú de ${tipoComida}:\n\n`;

  // Recorrer cada categoría (primero, segundo, postre)
  for (let categoria in menuSeleccionado) {
      mensaje += categoria + ":\n"; // Encabezado (Primero, segundo, postre)

      // Recorrer cada plato (nombre, precio)
      menuSeleccionado[categoria].forEach(plato => {
          mensaje += `- ${plato.nombre}: ${plato.precio} €\n`;
      });

      mensaje += "\n"; 
  }

  alert(mensaje);
}

// Para probar que funciona
// mostrarMenu("Cena"); 

// Elegir los platos. 
// Utilizar while para verificar que se ha escrito correctamente los platos
function elegir_platos(tipo_plato){
var mensaje1 = `Elige ${tipo_plato}: \n`

menu[tipo_comida][tipo_plato].forEach(plato => {
  mensaje1 += `${plato.nombre} (${plato.precio} €)\n`;
}); 

var verificar_plato = false;

while (verificar_plato == false){
  input_plato = prompt(mensaje1);
  // Comprobar si el plato está en la lista
  let platoEncontrado = menu[tipo_comida][tipo_plato].find(plato => plato.nombre.toLowerCase() === input_plato.toLowerCase());
  if (platoEncontrado) {
    // Mensaje fijo
    // alert("Has elegido: " + input_plato.toLowerCase());
    // Mensaje aleatorio 
    alert(comentarioCamarera());
    verificar_plato = true; //salir de while
    //return input_plato.charAt(0).toUpperCase() + input_plato.slice(1); // guardar el input (primero en mayuscula)
    return platoEncontrado // nombre y precio
  } else {
    alert("El plato seleccionado no está en la lista. Por favor, elige uno de la lista.");
  }
}
}

// Mensajes aleatorios
function comentarioCamarera() {
const comentario = [
"Bien!", 
"Espero que le guste!",
"Qué rico!",
"Te encantará!",
"Buena elección"  
];
const randIndice = Math.floor(Math.random() * comentario.length);
return comentario[randIndice];
};

// Resumen y factura (primero, segundo y tercero son un objeto (keys: nombre, precio))
factura = function(primero,segundo,tercero){
var mensaje2 = "El resumen de tu elección y coste total: \n \n";
mensaje2 += primero.nombre + " -> " + primero.precio + "€ \n";
mensaje2 += segundo.nombre + " -> " + segundo.precio + "€ \n";
mensaje2 += tercero.nombre + " -> " + tercero.precio + "€ \n \n";
var total = primero.precio + segundo.precio  + tercero.precio
mensaje2 += "Total: " + total + "€ \n";
alert(mensaje2);
}


// Aquí empieza la interacción con el/la usuario/a.

// El usuario introduce la hora 
// Se checkea si el formato es adecuado. Después y si el menú es desayuno, comida, cena o está cerrado

var poder_continuar = false;
var tipo_comida; 

while(poder_continuar == false){
let hora_input = prompt("Escribe la hora en formato hh:mm");
if(esHoraValida(hora_input) == true){
  //console.log("bien");
  if(tipoComida(hora_input) == "Cerrado") {
    alert ("Está cerrado, intentelo más tarde");
  } else {
    poder_continuar = true;
    tipo_comida = tipoComida(hora_input);
    //alert(`${tipo_comida}: Aquí tiene la carta`);
  }
} else {
  console.log("Formato de hora incorrecta")
  alert ("No es válida, intentelo de nuevo");
}
}

// Enseñar la carta al completo
mostrarMenu(tipo_comida);

// Elegir
p1 = elegir_platos("Primero");

p2 = elegir_platos("Segundo");

p3 = elegir_platos("Postre");

// Resumen y factura
factura(p1,p2,p3)