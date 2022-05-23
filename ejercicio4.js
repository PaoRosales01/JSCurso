/* Elaborar secuencia o sesión de 
Fibonacci 50 (f=50) */   

//Universidad Tecnológica de Durango
//Ejercicio 04
//Elaborado por: Rosales Verdín Paola Elizabeth
//25/01/2021
   
   
   var f = 50;
    var i = 0;
	var fibonacci = [];
	for (i; i<=f; i++){
		if(i==0){
			fibonacci.push(0);
		}
		else if(i==1){
			fibonacci.push(1);
		}
		else{
			fibonacci.push(fibonacci[i-1]+fibonacci[i-2]);
		}
	}
	console.log(fibonacci);









	/* var f = 50;
	var fibo = [0,1];

	for(i=2; i <= f; i++){
		fibo.push(fibo[i-1] + fibo[i-2]);
		console.log(fibo[i]+"\n");	
	} */