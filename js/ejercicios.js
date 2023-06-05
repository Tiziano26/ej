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
if  (numero1 < numero2){
    console.log("numero1 no es mayor que numero2");
}
if(numero2 > 0){
    console.log("numero2 es positivo");
}
if(numero1 < 0 || numero1 !=0){
    console.log("numero1 es negativo o distinto de cero");
}
numero1 = numero1 + 1;
if(numero2 > numero1){
    console.log("incrementar en 1 unidad el valor de numero1 no lo gace mayor o igual que numero2")
}

}
//Ejercicio 4


//Ejercicio 10
function Ejercicio10(){
    var resultados = [0,0,0,0,0,0,0,0,0,0,0];
    for(let i = 0; i < 36000; i++){
        const dado1 = Math.floor(Math.random()*6)+1;
        const dado2 = Math.floor(Math.random()*6)+1;
        const suma = dado1 + dado2;
        resultados[suma - 2]++;
    }
    for(let i = 0; i < resultados.length; i++){
        console.log('La suma ${(i+2)} ha aparecido ${resultados[i]} veces ');
    }
}
