
function verificarUsuario(usuario){
    if (usuario.lenght<9){
        return false;
    }
    
    if (!/[A-Z]/.test(usuario)) {
        return false;
    }
    if (!/\d/.test(usuario)){
        return false;
    }
    if (!/\/(usuario)){

    }
    return true;
}




var usuario = prompt("Ingrese un nombre de usuario que cumpla con los siguientes requisitos:\n" +
                        "- Debe tener al menos 9 caracteres de longitud.\n" +
                        "- Debe contener letras (mayúsculas y minúsculas) además de números.\n" +
                        "- Debe comenzar con un número y terminar con una letra.), '');

while (!verificarUsuario(usuario)) {
alert("El nombre de usuario no cumple con los requisitos solicitados.");
usuario = prompt("Ingrese una nombre de usuario que cumpla con los siguientes requisitos:\n"
                    "- Debe tener al menos 9 caracteres de longitud.\n" +
                    "- Debe contener letras (mayúsculas y minúsculas) además de números.\n" +
                    "- Debe comenzar con un número y terminar con una letra.);
}       
alert("El nombre de usuario es válido.");