/************************************************************************
 *                  Autor: Juan Pedro Martínez Pedrizco                 *
 *                 Correo: iscjpmartinez@gmail.com                      *
 *               Teléfono: 453 228 6451                                 *
 *                    Web: juanmartinezweb.com                          *
 * **********************************************************************/

//-----------Bloque de código para el ejercicio número 1----------------//

// Aplicando escucha al botón uno.
let botonUno = document.getElementById("btn-uno");
botonUno.addEventListener("click", ejercicioUno);

// Función que se ejecuta al presionar el botón del ejercicio 1.
function ejercicioUno() {
  // Extraemos la palabra del input y la guardamos en una variable.
  let palabra = document.getElementById("palabra").value.toLowerCase();
  let vectorPalabra = [];
  let palabraOrdenada = ""; //  Declaración de variables.
  let objetoContado = {};
  let imprimirObjeto = "";

  // Extraemos cada letra de la palabra y la guardamos en un vector.
  for (let i = 0; i < palabra.length; i++) {
    vectorPalabra[i] = palabra.charAt(i);
  }

  // Ordenamos el Vector A-Z 
  vectorPalabra.sort();

  // Agregamos el vector ordenado a la variable palabraOrdenada.
  for (let i = 0; i < vectorPalabra.length; i++) {
    palabraOrdenada += vectorPalabra[i];
  }

  // Mandamos la palabra original para contar sus letras y guardar la respuesta en un objeto.
  objetoContado = contarLetras(palabra);

  // Recorremos el objeto y concatenamos el resultado en la variable imprimirObjeto.
  for (var elemento in objetoContado) {
    imprimirObjeto += elemento + " = " + objetoContado[elemento] + ", ";
  }
  // Quitamos la última coma(", ") que no es necesaria.
  imprimirObjeto = imprimirObjeto.substring(0, imprimirObjeto.length - 2);

  // Mostramos en pantalla cuantas letras hay de cada una.
  document.getElementById("resultado-cantidad").textContent = imprimirObjeto;

  // Mostramos en pantalla la palabra ordenada A-Z.
  document.getElementById("resultado-orden").textContent = palabraOrdenada;
}

// Función que cuenta cuantas letras hay en la palabra que se le envía de argumento.
function contarLetras(letras) {
  var objeto = {};
  for (var i in letras) {
    objeto[letras[i]] = (objeto[letras[i]] || 0) + 1;
  }
  return objeto;
}

//--------------Bloque de código para el ejercicio número 2------------------------//

/* NOTA IMPOTANTE: Este ejercicio no me fue posible resolverlo con simples condicionales
                   es algo complejo que requiere más conocimiento y tiempo. Pero para no
                   dejarlo en blanco la solución que se me ocurrió fué implementar una 
                   librería: https://github.com/nicofrem/silabajs  */ 

// Aplicando escucha al botón Dos.
let botonDos = document.getElementById("btn-dos");
botonDos.addEventListener("click", ejercicioDos);

// Función que se ejecuta al presionar el botón del ejercicio 2.
function ejercicioDos(){
    
    // Guardamos la palabra del input.
    let palabrausUario = document.getElementById("palabra-separar").value.toLowerCase();
    let palabraSilabas = "";

    // Cremos un objeto y mandamos llamar la función que la separa en silabas pasandole la palabra.
    var objetoSilaba = silabaJS.getSilabas(palabrausUario);
    
    for(let i=0; i<objetoSilaba.numeroSilaba; i++){
        palabraSilabas += objetoSilaba.silabas[i].silaba +" - "; // Guardamos cada sílaba en una palabra.
    }
    // Quitamos el último guion(" - ") que no es necesario.
    palabraSilabas = palabraSilabas.substring(0, palabraSilabas.length - 3);
    
    //Imprimimos en pantalla el resultado  de la variable palabraSilabas
    document.getElementById("resultado-silaba").textContent = palabraSilabas;
}

//--------------Bloque de código para el ejercicio número 3------------------------//

// Aplicando escucha al botón Tres.
let botonTres = document.getElementById("btn-tres");
botonTres.addEventListener("click", ejercicioTres);

// Función que se ejecuta al presionar el botón del ejercicio 3.
function ejercicioTres() {
  
  let error = "";
  let contarMayusculas = 0;
  let contarNumeros = 0;
  let contarCaracteres = 0;      // Declaración de variables
  let tieneEspacios = false;
  let numeroRepetido = false;
  let vectorPass = [];
  let pass = document.getElementById("pass").value; // Extraemos la contraseña del input.
  let vectorMayusculas = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let vectorNumeros = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let vectorCaractares = ["*", "_", "-", "¿", "!", "?", "#", "$"];

  // Con la ayuda de un ciclo extraemos cada letra de la variable pass y la guardamos en un vector.
  for (let i = 0; i < pass.length; i++) {
    vectorPass[i] = pass.charAt(i);
  }

  for (let i = 0; i < vectorMayusculas.length; i++) {
    for (let j = 0; j < pass.length; j++) {
      if (vectorMayusculas[i] === vectorPass[j]) {
        contarMayusculas++;          // Contamos cuantas mayúsculas tiene la pass ingresada.
      }
      if (vectorNumeros[i] === vectorPass[j]) {
        contarNumeros++;             // Contamos cuantos números tiene la pass ingresada.
      }
      if (vectorCaractares[i] === vectorPass[j]) {
        contarCaracteres++;         // Contamos cuantos caracteres tiene.
      }
      if (" " === vectorPass[j]) {
        tieneEspacios = true;       // Comprobamos si tiene espacios.
      }
    }
  }
//  Expresión regular para determinar si es número.
  let expresion = /^[0-9]+$/;

  for (let i = 0; i < pass.length; i++) {
    if (pass.charAt(i) === pass.charAt(i + 1)) { // Comprobamos si son iguales los caracteres
      if (pass.charAt(i).match(expresion)) {     // Si son iguales, reviso si son números.
        numeroRepetido = true;                   // Ponemos en true si hay números repetidos.
      }
    }
  }

  // Por último con la ayuda de condicionales compruebo que se cumplan las condiciones requeridas.
  if (contarMayusculas < 2) {
    error += "<p>Error la contraseña debe contener al menos 2 letras mayúsculas</p>";
  }
  if (numeroRepetido) {
    error += "<p>Error la contraseña no debe tener numeros repetidos</p>";
  }
  if (contarNumeros < 3) {
    error += "<p>Error la contraseña debe tener 3 números</p>";
  }
  if (contarCaracteres < 1) {
    error += "<p>Error la contraseña debe tener al menos 1 caracter especial (*_-¿!?#$)</p>";
  }
  if (tieneEspacios) {
    error += "<p>Error la contraseña no debe tener espacios en blanco</p>";
  }
  if (pass.length < 8 || pass.length > 15) {
    error += "<p>Error la contraseña no debe tener menos de 8 y mas de 15 caracteres</p>";
  }
  if (error === "") {
    document.getElementById("mensaje").textContent = "Contraseña valida";
  } else {
    document.getElementById("mensaje").innerHTML = error;
  }
}
