let dato1, dato2, num1, num2;
        try {
            dato1 = window.prompt("Introduce primer número: ", "0");
            num1 = parseInt(dato1);
        } catch (error) {
            window.alert("Ingresa un número entero");
        }

        try {
            dato2 = window.prompt("Introduce segundo número: ", "0");
            num2 = parseInt(dato2);
        } catch (error) {
            window.alert("Ingresa un número entero");
        }

        if (num1 > num2) {
            document.write(`<br/> <br/> El primer número (${num1}) es mayor que el segundo número (${num2}) ` );
        }else{
            if (num2 > num1) {
                document.write(`<br/> <br/> El segundo número (${num2}) es mayor que el primero número (${num1}) ` );
            }else{
                document.write(`<br/> <br/> Los dos números son iguales (${num2} y ${num2})` );
            }
        }