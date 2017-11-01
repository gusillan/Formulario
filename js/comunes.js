/****** Funciones comunes ******/

/* Variables y expresiones globales */
var expresion_regular_letras = /^[a-zA-Z]+$/;
var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;


/* Comprueba sin un campo está vacio */
function vacio(campo){
	if (campo.val() == null || campo.val().length == 0 || /^\s*$/.test(campo.val())){
    		return true;
    	}else{
    		return false;
    	}
}
/* Rellena con 0 por la izquierda */
function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
}



/****** Funciones para comprobar DNI/CIF ******/

/* 1 comprobar si es DNI, CIF o DNI extranjero */
function comprobarTipoDni(dni){	
	
	dni = dni.toUpperCase();
	
	if (dni.length > 9) {
        alert("El DNI/CIF no puede tener mas de 9 cifras");
        return false;
    } else {
        var primera = dni.substring(0, 1);
        if (!expresion_regular_letras.test(primera)) {
            console.log("La primere cifra es un numero " + primera);
            return comprobarDni(dni);

        }else{
        	if (primera == 'X' || primera == 'Y' || primera == 'Z') {
                console.log("EXTRANJERO"); //****** DNI EXTRANJERO
                return "Extranjero";
            } else {
                console.log("EMPRESA");   //******* CIF EMPRESA
                return "Empresa";               
            }
        }
    }
}
/* 2 Es un DNI nacional */
function comprobarDni(dni) {
    var ultima = dni.substring(dni.length - 1, dni.length);
    var digitos = dni.length;
    
    if (expresion_regular_letras.test(ultima)) {
        console.log("tiene letra al final . Añadir 0 si es necesario y comprobarla");
        dniSinLetra = dni.substring(0, dni.length - 1);
        console.log("DNI sin Letra " + dniSinLetra);
        console.log("comparativa " + ultima + " - " + dniLetra(dniSinLetra));
        if (ultima == dniLetra(dniSinLetra)) {
            console.log("Letra DNI correcta");
            dni = pad(dni, 9);
            return dni;
        } else {
            alert("Letra DNI ERRONEA");
            return ""; // letra dni erronea
        }
    } else {
        console.log("No tiene letra.Añadir 0 y calcularla");
        if(dni.length>8){
        	alert ("El DNI no puede tener mas de 8 números");
        	return ""; // + de ocho números
        }
        console.log("los numeros de dni contienen caracteres No numeros "+expresion_regular_dni.test(dni));
        dni = dni + dniLetra(dni);
        dni = pad(dni, 9);
        console.log("DNI DEFINITIVO " + dni);
        return dni;
    }
    if (digitos < 9) {
        dni = pad(dni, 9);
        console.log(dni);
    } else {

    }

}
function dniLetra(dni) {
    cadena = "TRWAGMYFPDXBNJZSQVHLCKET";
    posicion = dni % 23;
    letra = cadena.substring(posicion, posicion + 1);
    return letra;

}
/* 3 Es un NIE extranjero */
function comprobarNie(dni){
	console.log ("El Ni")

}

/* 4 Es un CIF de empresa */
function comprobarCif(dni){

}