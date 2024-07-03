class Tarea {
    obtenerNumerosPares() {
        const input = document.getElementById("inputNumerosPares").value;
        const numeros = input.split(",");
        const numeros_pares = [];

        for (let i = 0; i < numeros.length; i++) {
            const num = parseInt(numeros[i].trim());
            if (!isNaN(num) && num % 2 === 0) {
                numeros_pares.push(num);
            }
        }

        document.getElementById("resp1").innerHTML = "Números pares: " + numeros_pares.join(", ");
let explicacion=document.getElementById('explicacion1')
    explicacion.innerHTML="Este fragmento de código se utiliza comúnmente para generar una lista de números pares dentro de un rango específico, útil en diversas aplicaciones que requieren operaciones con números pares, como cálculos matemáticos, análisis de datos, entre otros."
    }

    obtenerDivisores() {
        const numero = parseInt(document.getElementById("inputDivisores").value);
        const divisores = [];
        for (let i = 1; i <= numero; i++) {
            if (numero % i === 0) {
                divisores.push(i);
            }
        }
        document.getElementById("resp2").innerHTML = "Divisores: " + divisores.join(", ");
        let explicacion=document.getElementById('explicacion2')
    explicacion.innerHTML="Este fragmento de código se utiliza para encontrar todos los divisores de un número dado, lo cual es útil en diversos contextos, como análisis matemático, verificación de números perfectos o para resolver problemas relacionados con factores de números."
    }

    esNumeroPerfecto() {
        const numero = parseInt(document.getElementById("inputNumeroPerfecto").value);
        let sumaDivisores = 0;
        for (let i = 1; i < numero; i++) {
            if (numero % i === 0) {
                sumaDivisores += i;
            }
        }
        const esPerfecto = sumaDivisores === numero;
        document.getElementById("resp3").innerHTML = numero + " es " + (esPerfecto ? "un número perfecto." : "no es un número perfecto.");
        let explicacion=document.getElementById('explicacion3')
    explicacion.innerHTML="Este fragmento de código se utiliza para calcular la suma de todos los divisores propios de un número dado, lo cual es útil para determinar si un número es perfecto. Un número es perfecto si la suma de sus divisores propios es igual al propio número. Por ejemplo, 28 es un número perfecto porque la suma de sus divisores propios ."
    }

    esNumeroPrimo() {
        const numero = parseInt(document.getElementById("inputNumeroPrimo").value);
        if (numero <= 1) {
            document.getElementById("resp4").innerHTML = numero + " no es un número primo.";
            return;
        }
        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                document.getElementById("resp4").innerHTML = numero + " no es un número primo.";
                return;
            }
        }
        document.getElementById("resp4").innerHTML = numero + " es un número primo.";
        let explicacion=document.getElementById('explicacion4')
    explicacion.innerHTML="Este fragmento de código se utiliza para determinar si un número dado es primo y actualizar una página web con el resultado. Un número primo es aquel que solo tiene dos divisores: 1 y sí mismo. Este tipo de verificación es útil en muchas aplicaciones matemáticas y de programación que requieren identificar números primos."
    }

    invertirNumero() {
        let numero = parseInt(document.getElementById("inputInvertirNumero").value);
        let invertido = 0;
        while (numero != 0) {
            const ultimoDigito = numero % 10;
            invertido = invertido * 10 + ultimoDigito;
            numero = Math.floor(numero / 10);
        }
        document.getElementById("resp5").innerHTML = "Número invertido: " + invertido;
            let explicacion=document.getElementById('explicacion5')
    explicacion.innerHTML="Este fragmento de código se utiliza para invertir los dígitos de un número ingresado por el usuario. El número se procesa de derecha a izquierda, extrayendo cada dígito y construyendo el número invertido paso a paso."
    }

    multiplicarPorSumasSucesivas() {
        const a = parseInt(document.getElementById("inputMultiplicarA").value);
        const b = parseInt(document.getElementById("inputMultiplicarB").value);
        let resultado = 0;
        for (let i = 0; i < b; i++) {
            resultado += a;
        }
        document.getElementById("resp6").innerHTML = a + " multiplicado por " + b + " es " + resultado;
        let explicacion=document.getElementById('explicacion6')
    explicacion.innerHTML="Este fragmento de código realiza la multiplicación de dos números usando sumas sucesivas. En lugar de usar el operador de multiplicación (*), suma repetidamente el primer número a al resultado un total de b veces. Este enfoque es una manera alternativa de realizar la multiplicación, útil en contextos educativos o en sistemas donde la multiplicación directa no está disponible."
    }

    dividirPorRestasSucesivas() {
        let dividendo = parseInt(document.getElementById("inputDividendo").value);
        const divisor = parseInt(document.getElementById("inputDivisor").value);
        let cociente = 0;
        while (dividendo >= divisor) {
            dividendo -= divisor;
            cociente++;
        }
        document.getElementById("resp7").innerHTML = "Cociente: " + cociente + ", Residuo: " + dividendo;
        let explicacion=document.getElementById('explicacion7')
    explicacion.innerHTML="Este fragmento de código realiza la división de dos números usando restas sucesivas. En lugar de usar el operador de división (/), resta repetidamente el divisor del dividendo hasta que el dividendo sea menor que el divisor. El número de veces que se puede restar el divisor del dividendo es el cociente de la división."
    }

    serieFibonacci() {
        const n = parseInt(document.getElementById("inputFibonacci").value);
        const fibonacci = [0, 1];
        for (let i = 2; i < n; i++) {
            const siguienteNumero = fibonacci[i - 1] + fibonacci[i - 2];
            fibonacci.push(siguienteNumero);
        }
        document.getElementById("resp8").innerHTML = "Serie Fibonacci: " + fibonacci.join(", ");
                let explicacion=document.getElementById('explicacion8')
    explicacion.innerHTML="Este fragmento de código genera los primeros n números de la secuencia de Fibonacci y los almacena en un array. La secuencia de Fibonacci comienza con 0 y 1, y cada número subsiguiente es la suma de los dos números anteriores. Esta secuencia es utilizada en matemáticas y programación para una variedad de propósitos, como modelado de crecimiento y optimización.."
    }
}

let tarea = new Tarea();