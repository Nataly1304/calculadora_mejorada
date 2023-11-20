
// Definimos la función principal llamada "mostrar"
function mostrar(){
    // Obtiene los valores de los inputs y la opción seleccionada
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let opc = parseInt(document.getElementById("opc").value);

    // Se utiliza un switch para realizar diferentes operaciones según la opción seleccionada
    switch(opc){
        // Caso 1: llama a la función sumar con los valores de n1 y n2
        case 1:
            sumar(n1, n2);
            break;

        // Caso 2: llama a la función restar con los valores de n1 y n2
        case 2:
            restar(n1, n2);
            break;

        // Caso 3: llama a la función multiplicar con los valores de n1 y n2
        case 3:
            multiplicar(n1, n2);
            break;

        // Caso 4: llama a la función dividir con los valores de n1 y n2
        case 4:
            dividir(n1, n2);
            break;

        // Caso 5: llama a la función potencia con los valores de n1 y n2
        case 5:
            potencia(n1, n2);
            break;

        // Si la opción no es válida, muestra una alerta
        default:
            alert("la opción no es válida");
    }
}

// se define la función para sumar dos números
function sumar(n1, n2){
    // Calcula la suma y obtiene el elemento donde se mostrará el resultado
    var resultado = n1 + n2;
    var res = document.getElementById("resultado");

    // Muestra el resultado en un bloque con color verde si los datos son válidos, de lo contrario, en rojo
    if(n1 != 0 && n2 != 0){
        respuesta.style.display = "block";
        res.innerHTML = `total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `verifique sus datos`;
        res.style.color = "red";
    }
}

// Define la función para restar dos números
function restar(n1, n2){
    // Calcula la resta y obtiene el elemento donde se mostrará el resultado 
    var resultado = n1 - n2;
    var res = document.getElementById("resultado");

    // Muestra el resultado en un bloque con color verde si los datos son válidos, de lo contrario, en rojo
    if(n1 != 0 && n2 != 0){
        respuesta.style.display = "block";
        res.innerHTML = `total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `verifique sus datos`;
        res.style.color = "red";
    }
}

// Define la función para multiplicar dos números
function multiplicar(n1, n2){
    // Calcula la multiplicación y obtiene el elemento donde se mostrará el resultado
    var resultado = n1 * n2;
    var res = document.getElementById("resultado");

    // Muestra el resultado en un bloque con color verde si los datos son válidos, de lo contrario, en rojo
    if(n1 != 0 && n2 != 0){
        respuesta.style.display = "block";
        res.innerHTML = `total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `verifique sus datos`;
        res.style.color = "red";
    }
}

// Define la función para dividir dos números
function dividir(n1, n2){
    // Calcula la división y obtiene el elemento donde se mostrará el resultado
    var resultado = n1 / n2;
    var res = document.getElementById("resultado");

    // Muestra el resultado en un bloque con color verde si los datos son válidos, de lo contrario, en rojo
    if(n1 != 0 && n2 != 0){
        respuesta.style.display = "block";
        res.innerHTML = `total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `verifique sus datos`;
        res.style.color = "red";
    }
}

// Define la función para elevar un número a una potencia
function potencia(n1, n2){
    // Calcula la potencia y obtiene el elemento donde se mostrará el resultado
    var resultado = n1 ** n2;
    var res = document.getElementById("resultado");

    // Muestra el resultado en un bloque con color verde si los datos son válidos, de lo contrario, en rojo
    if(n1 != 0 && n2 != 0){
        respuesta.style.display = "block";
        res.innerHTML = `total: ${resultado}`;
        res.style.color = "green";
    } else {
        respuesta.style.display = "block";
        res.innerHTML = `verifique sus datos`;
        res.style.color = "red";
    }
}

    
    


    
    







    