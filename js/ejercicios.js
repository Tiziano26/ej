//Ejercicio 1
function Ejercicio1() {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }

}
//Ejercicio 2 
function Ejercicio2() {
    var valores = [true, 5, false, "hola", "adios", 2, "gjdjdflk"];
    var valor = "";

    for (let i = 0; i < valores.length; i++) {
        if (typeof (valores[i]) == "string") {
            if (valores[i].length > valor.length) {
                valor = valores[i];
            }
        }
    }
    console.log("El mayor es " + valor);
}
//Ejercicio 3
function Ejercicio3() {
    var numero1 = 5;
    var numero2 = 8;
    if (numero1 < numero2) {
        console.log("numero1 no es mayor que numero2");
    }
    if (numero2 > 0) {
        console.log("numero2 es positivo");
    }
    if (numero1 < 0 || numero1 != 0) {
        console.log("numero1 es negativo o distinto de cero");
    }
    numero1 = numero1 + 1;
    if (numero2 > numero1) {
        console.log("incrementar en 1 unidad el valor de numero1 no lo gace mayor o igual que numero2")
    }

}
//Ejercicio 4
function Ejercicio4(params) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
'E', 'T'];

var dni = document.querySelector("#dni").value;
var letraUsuario = document.querySelector("#letra").value;
var letraUsuarioMayuscula = letraUsuario.toUpperCase();

if (dni > 0 && dni < 99999999) {
    var posicion = dni % 23;
    if (letras[posicion] == letraUsuarioMayuscula) {
        console.log("El número DNI y la letra son correctos");
    }else {
        console.log("La letra que ha indicado no es correcta");
    }
}else {
    console.log("El número proporcionado no es válido");
}

}

function solicitudAJAX() {

    var id = document.querySelector("#entrada").value;
    var url = "https://pokeapi.co/api/v2/pokemon/"+id;

    var objXMLHttpRequest = new XMLHttpRequest();

    objXMLHttpRequest.onreadystatechange = function() {
    if(objXMLHttpRequest.readyState === 4) {
        if(objXMLHttpRequest.status === 200) {
          console.log(objXMLHttpRequest.responseText);
        }else {
          alert('Error Code: ' +  objXMLHttpRequest.status);
          alert('Error Message: ' + objXMLHttpRequest.statusText);
        }
    }
}
objXMLHttpRequest.open('GET', url);
objXMLHttpRequest.send();
}
//Ejercicio 5

//Ejercicio 6 
function Ejercicio6(numero) {
    if (numero % 2 === 0) {
        return "El numero es par";
    }
    else {
        return "El numero es impar"
    }
}
console.log(esPar(4));
console.log(esPar(7));
//Ejercicio 7
function Ejercicio7(cadena) {
    if (cadena === cadena.toUpperCase()) {
        console.log("La cadena está formada solo por mayúsculas.");
    } else if (cadena === cadena.toLowerCase()) {
        console.log("La cadena está formada solo por minúsculas.");
    } else {
        console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas.");
    }
}
mostrarInformacion("HOLA");
mostrarInformacion("hola");
mostrarInformacion("Hola");
mostrarInformacion("Hola 123");
//Ejercicio 8
function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, "");

    var cadenaInvertida = cadena.split("").reverse().join("");

    if (cadena === cadenaInvertida) {
        return true;
    } else {
        return false;
    }
}

var texto = "La ruta nos aporto otro paso natural";
if (esPalindromo(texto)) {
    console.log("El texto es un palíndromo.");
} else {
    console.log("El texto no es un palíndromo.");
}
//Ejercicio 9
function Persona(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }
  
  Persona.prototype.obtDetalles = function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Género: " + this.genero);
  }
  
  function Estudiante(nombre, edad, genero, curso, grupo) {
    Persona.call(this, nombre, edad, genero);
    this.curso = curso;
    this.grupo = grupo;
  }
  
  Estudiante.prototype = Object.create(Persona.prototype);
  Estudiante.prototype.constructor = Estudiante;
  
  Estudiante.prototype.registrar = function() {
    console.log("El estudiante " + this.nombre + " ha sido registrado en el curso " + this.curso + ", grupo " + this.grupo + ".");
  }
  
  function Profesor(nombre, edad, genero, asignatura, nivel) {
    Persona.call(this, nombre, edad, genero);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }
  
  Profesor.prototype = Object.create(Persona.prototype);
  Profesor.prototype.constructor = Profesor;
  

  Profesor.prototype.asignar = function() {
    console.log("El profesor " + this.nombre + " ha sido asignado a la asignatura " + this.asignatura + ", nivel " + this.nivel + ".");
  }
  
  var persona1 = new Persona("Juan", 25, "Masculino");
  persona1.obtDetalles();
  
  var estudiante1 = new Estudiante("María", 20, "Femenino", "Matemáticas", "Grupo A");
  estudiante1.obtDetalles();
  estudiante1.registrar();
  
  var profesor1 = new Profesor("Pedro", 35, "Masculino", "Física", "Avanzado");
  profesor1.obtDetalles();
  profesor1.asignar();

//Ejercicio 10
function Ejercicio10() {
    var resultados = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < 36000; i++) {
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;
        const suma = dado1 + dado2;
        resultados[suma - 2]++;
    }
    for (let i = 0; i < resultados.length; i++) {
        console.log('La suma ${(i+2)} ha aparecido ${resultados[i]} veces ');
    }
}
