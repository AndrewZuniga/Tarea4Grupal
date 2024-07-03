class Arreglo {
    pares5() {
        let nums,num,cad, r, msg=" "
        cad = document.getElementById("pares5").value
        nums=cad.split(",")
        for (let i=0; i < nums.length; i++) {
            num=parseInt(nums[i])
            if (num%5==0){
            msg+= num+ "<br>"
        }
    }
        r = document.getElementById("resp9")
        r.innerHTML = msg
        let explicacion=document.getElementById('explicacion9')
    explicacion.innerHTML="Se usa un bucle for que empieza desde i = 0 y continúa mientras i sea menor que el tamaño de la cadena, recorre el arreglo, convierte cada elemento en un número entero, y si alguno de estos números es divisible por 5 lo muestra."
    }
    promedio() {
        let nums,num,cad, r,msg=0,promedio=0
        cad = document.getElementById("promedio").value
        nums=cad.split(",")
        for (let i = 0; i < nums.length; i++) {
            num=parseInt(nums[i])
            msg += num
        promedio=(msg/nums.length)
        }
        r = document.getElementById("resp10")
        r.innerHTML = "El promedio es: "+promedio
        let explicacion=document.getElementById('explicacion10')
    explicacion.innerHTML="Se usa un bucle for que empieza desde i = 0 y continúa mientras i sea menor que el tamaño de la cadena, recorre el arreglo, calcula la suma de todos los números, y luego determina el promedio dividiendo esta suma por la cantidad de números en el arreglo."
    }
    mayormenor() {
        let nums=0,cad,r
        cad = document.getElementById("mayormenor").value
        nums=cad.split(",").map(num => parseInt(num))
        let mayor = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > mayor) {
                mayor = nums[i];
            }
        }
        r = document.getElementById("resp11");
        r.innerHTML = "El mayor es: " + mayor
        let explicacion=document.getElementById('explicacion11')
        explicacion.innerHTML="Se usa un bucle for que empieza desde i = 0 y continúa mientras i sea menor que el tamaño de la cadena, recorre el arreglo, comenzando desde el segundo elemento, compara cada elemento con una variable inicializada con el primer elemento, y actualiza si encuentra un número más grande. Al final del bucle, mayor contendrá el número más grande en el arreglo."    }
    diferente() {
        let cad,r,msg="",nombres
        cad = document.getElementById("diferente").value
        nombres=cad.split(",")
        for (let i = 0; i < nombres.length; i++) { 
            if (nombres[i].toLowerCase() !== "ana"){
            msg+=nombres[i]+" "
            } 
        } 
        r = document.getElementById("resp12");
        r.innerHTML = "Nombres diferentes a Ana: " + msg
        let explicacion=document.getElementById('explicacion12')
        explicacion.innerHTML="Se usa un bucle for que empieza desde i = 0 y continúa mientras i sea menor que el tamaño de la cadena, recorre el arreglo, excluyendo cualquier ocurrencia de Ana y concatena todos los nombres que no coinciden con Ana en una sola cadena de texto.."    }
    pares2() {
    let cad,numeros=0, r, msg=""
    cad = document.getElementById("pares2").value
    numeros=cad.split(",")
    for (let i = numeros.length - 1; i >= 0; i--) { 
        if (numeros[i] % 2 === 0) { 
        msg+=numeros[i]+","
        } 
    }
    r = document.getElementById("resp13")
    r.innerHTML = msg
    let explicacion=document.getElementById('explicacion13')
    explicacion.innerHTML="Se usa un bucle for que empieza desde i = 0 y continúa mientras i sea menor que el tamaño de la cadena, recorre el arreglo, de atrás hacia adelante, identifica los números pares y los concatena en una cadena de texto separados"    }
}
let arreglo = new Arreglo