/*Elaborar un programa en consola que realice lo siguiente:
Declarar 3 variables e inicializarla con los valores:
•	Nombre=Pakito Perez 
•	Edad=22
•	INE=1
Imprimir en pantalla si puede votar (mayor de edad y contar con ine)
En caso de que no cuente con ello no puede votar*/

//Universidad Tecnológica de Durango
//Ejercicio 03
//Elaborado por: Rosales Verdín Paola Elizabeth
//25/01/2021

var nombre="Pakito Perez";
var edad=22;
var INE=1;


if (edad>17 && INE==1){
    console.log(nombre + " si puede votar");
}
else{
    console.log("No puede votar");
}
