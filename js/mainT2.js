function determinarParidad(){
let numero= document.getElementById('numero-paridad').value 
numero = parseInt(numero)
let r = document.getElementById('resultado-paridad')
if (numero % 2 === 0) { 
    r.innerHTML= numero + " es par"
} else {
    r.innerHTML= numero + " es impar"
}
let explicacion=document.getElementById('paridad')
explicacion.innerHTML="Primero, evaluamos numero % 2 === 0 para saber si el número es divisible para 2. Si la condición(numero % 2 === 0) es verdadera, el número es par sino el número es impar."
}

function determinarMayorEdad(){
let edad = document.getElementById('edad').value 
edad = parseInt(edad)
let r = document.getElementById('resultado-mayor-edad')
if (edad >= 18) {
    r.innerHTML="Eres mayor de edad"
} else {
    r.innerHTML="Eres menor de edad"
}
let explicacion=document.getElementById('edadex')
explicacion.innerHTML="Primero evaluamos edad >= 18 para saber si la edad es mayor o igual a 18. Si la condición(edad >= 18) es verdadera, la persona es mayor de edad sino la persona es menor de edad"
}

function determinarSignoNumero(){
let numero = document.getElementById('numero-signo').value
numero = parseInt(numero)
let r = document.getElementById('resultado-signo')
if (numero > 0) {
    r.innerHTML=numero + " es positivo"
} else if (numero < 0) { 
    r.innerHTML=numero + " es negativo"
} else {
    r.innerHTML=numero + " es cero"
}
let explicacion=document.getElementById('signo')
explicacion.innerHTML="Primero se evalua si numero > 0, si es verdadero el numero es positivo sino se evalua numero < 0 si es verdadero entonces el numero es negativo. Si la condicion(numero < 0) es falsa entonces el numero es 0"
}

function determinarBisiesto(){
let anio = document.getElementById('anio').value
anio=parseInt(anio)
let r = document.getElementById('resultado-bisiesto')
if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    r.innerHTML= anio + " es un año bisiesto"
} else {
    r.innerHTML= anio + " no es un año bisiesto"
}
let explicacion=document.getElementById('bisiesto')
explicacion.innerHTML="Para saber si un año es bisiesto debe cumplir que ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) si es verdadero el año es bisiesto si la condicion es falsa entonces el año no es bisiesto"
}

function determinarMayor(){
let numero1 = document.getElementById('numero1').value
let numero2 = document.getElementById('numero2').value
numero1=parseInt(numero1)
numero2=parseInt(numero2)
let r = document.getElementById('resultado-mayor')
if (numero1 > numero2) {
    r.innerHTML=numero1 + " es mayor que " + numero2
} else if (numero1 < numero2) {
    r.innerHTML=numero2 + " es mayor que " + numero1
} else {
    r.innerHTML="Ambos números son iguales"
}
let explicacion=document.getElementById('mayor')
explicacion.innerHTML="Primero se evalua si numero1 > numero2 si es verdadero entonces el numero mayor es numero1. Si la anterior condicion es falta entonces se evalua numero1 < numero2 si es verdadero el numero2 es el mayo sino los dos numeros sosn iguales"
}

function caractercadena() {
    let cadena=document.getElementById('cadena').value
    let r = document.getElementById('resultado-cadena')
    r.innerHTML = ""
    for (let i = 0; i < cadena.length; i++) { 
        r.innerHTML += cadena[i] + "<br>"
    } 
    let explicacion=document.getElementById('cadenaexp')
    explicacion.innerHTML="Se usa un bucle for que empieza desde i = 0 y continúa mientras i sea menor que el tamaño de la cadena, dentro del bucle se va presentando el carácter que le corresponde de la posición i de la cadena."
}

function vocalcadena(){
let cadena = document.getElementById('vocales').value 
let vocales = "aeiouAEIOU" 
let contador = 0 
let r = document.getElementById('resultado-vocal')
for (let i = 0; i < cadena.length; i++) { 
for (let j = 0; j < vocales.length; j++) { 
if (cadena[i] === vocales[j]) { 
contador++
} 
} 
} 
r.innerHTML=(contador)
let explicacion=document.getElementById('vocal')
explicacion.innerHTML="Se usa un bucle for para recorrer cada carácter de la cadena.Dentro del bucle, usar otro bucle for para comparar el carácter actual con cada vocal. Si hay una coincidencia, incrementar el contador. "
} 

function invertircadena(){
let cadena = document.getElementById('inverso').value
let cadenaInvertida = ""
let r = document.getElementById('resultado-invertir')
for (let i = cadena.length - 1; i >= 0; i--) { 
cadenaInvertida += cadena[i]; 
} 
r.innerHTML=cadenaInvertida
let explicacion=document.getElementById('invertir')
explicacion.innerHTML="Se usa un bucle for que empieza desde el último carácter (cadena.length - 1) y decrementa i hasta 0.En cada iteración, añadir el carácter actual a cadenaInvertida. "
}

function palabrascadena(){
let cadena = document.getElementById('palabras').value
let contadorPalabras = 1; // Asumimos que hay al menos una palabra 
let r = document.getElementById('resultado-contar')
for (let i = 0; i < cadena.length; i++) { 
if (cadena[i] === " ") { 
contadorPalabras++ 
} 
} 
r.innerHTML=contadorPalabras
let explicacion=document.getElementById('expconteo')
explicacion.innerHTML="Se usa un bucle for para recorrer la cadena (comenzando el conteo desde 1). Si el carácter actual es un espacio, incrementar contadorPalabras. "
}

function espaciocadena(){
let cadena = document.getElementById('espacios').value
let cadenaModificada = ""
let r = document.getElementById('resultado-guiones')
for (let i = 0; i < cadena.length; i++) { 
if (cadena[i] === " ") { 
cadenaModificada += "-"
} else { 
cadenaModificada += cadena[i]
} 
} 
r.innerHTML=cadenaModificada
let explicacion=document.getElementById('expguiones')
explicacion.innerHTML="Se usa un bucle for para recorrer cada carácter de la cadena. Si el carácter actual es un espacio, añadir un guion a cadenaModificada, de lo contrario, añadir el carácter actual. "
}

function especificocadena(){
let cadena = document.getElementById('específico').value 
let caracter = document.getElementById('cantidad').value 
let contador = 0 
let r = document.getElementById('resultado-caracteres-especificos')
for (let i = 0; i < cadena.length; i++) { 
if (cadena[i] === caracter) { 
contador++; 
} 
} 
r.innerHTML=contador 
let explicacion=document.getElementById('expespecificos')
explicacion.innerHTML="Se usa un bucle for para recorrer la cadena. Si el carácter actual es igual a caracter, incrementar el contador. "
}

function eliminarcaractercadena(){
    let cadena = document.getElementById('específicoeliminar').value 
    let caracter = document.getElementById('cantidad2').value 
    let nuevaCadena = ""
    let r = document.getElementById('resultado-caracteres-eliminados')
    for (let i = 0; i < cadena.length; i++) { 
    if (cadena[i] !== caracter) { 
    nuevaCadena += cadena[i]
    } 
    } 
    r.innerHTML=nuevaCadena 
    let explicacion=document.getElementById('expcaracterelimi')
    explicacion.innerHTML="Se usa un bucle for para recorrer la cadena. Si el carácter actual no es igual a caracter, añadirlo a nuevaCadena."
}

function mayusculaminuscula(){
    let cadena = document.getElementById('convertido').value
    let nuevaCadena = ""
    let r = document.getElementById('resultado-conversion')
    for (let i = 0; i < cadena.length; i++) { 
    let char = cadena[i]
    if (char >= 'a' && char <= 'z') { 
    nuevaCadena += String.fromCharCode(char.charCodeAt(0) - 32) 
    } else if (char >= 'A' && char <= 'Z') { 
    nuevaCadena += String.fromCharCode(char.charCodeAt(0) + 32)
    } else { 
    nuevaCadena += char   
    } 
    } 
    r.innerHTML=nuevaCadena
    let explicacion=document.getElementById('expcaracterlargo')
    explicacion.innerHTML="Se usa un bucle for para recorrer cada carácter de la cadena. Usar char.charCodeAt(0) para obtener el código ASCII del carácter y ajustar el valor para convertir entre mayúsculas y minúsculas. "
}

function eliminarespacios(){
    let cadena = document.getElementById('espacioseliminar').value 
    let nuevaCadena = ""
    let r = document.getElementById('resultado-eliminacion') 
    for (let i = 0; i < cadena.length; i++) { 
    if (cadena[i] !== " ") { 
    nuevaCadena += cadena[i] 
    } 
    } 
    r.innerHTML=nuevaCadena
    let explicacion=document.getElementById('expcaracterlargo')
    explicacion.innerHTML="Se usa un  un bucle for para recorrer la cadena. Si el carácter actual no es un espacio, añadirlo a nuevaCadena. "
}

function caracterlargo(){
    let cadena = document.getElementById('longitud').value
    let palabraActual = "" 
    let longitudMaxima = 0
    let r = document.getElementById('resultado-caracter-largo') 
    for (let i = 0; i < cadena.length; i++) { 
    if (cadena[i] === " " || i === cadena.length - 1) { 
    if (i === cadena.length - 1) { 
    palabraActual += cadena[i] 
    } 
    if (palabraActual.length > longitudMaxima) { 
    longitudMaxima = palabraActual.length 
    } 
    palabraActual = "" 
    } else { 
    palabraActual += cadena[i]; 
    } 
    } 
    r.innerHTML=longitudMaxima
    let explicacion=document.getElementById('expcaracterlargo')
    explicacion.innerHTML="Se usa  un bucle for para recorrer la cadena. Construir palabraActual carácter por carácter. Si se encuentra un espacio o se llega al final de la cadena, comparar la longitud de palabraActual con longitudMaxima y actualizar longitudMaxima si es necesario. Reiniciar palabraActual después de cada palabra."
}