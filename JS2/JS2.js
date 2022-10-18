let dato1, dato2, dato3, num1, num2, num3;
        try {
            dato1 = window.prompt("Introduce la primer nota: ", "0");
            num1 = parseFloat(dato1);
        } catch (error) {
            window.alert("Ingresa un número valido");
        }

        try {
            dato2 = window.prompt("Introduce la segundo nota: ", "0");
            num2 = parseFloat(dato2);
        } catch (error) {
            window.alert("Ingresa un número valido");
        }

        try {
            dato3 = window.prompt("Introduce la tercera nota: ", "0");
            num3 = parseFloat(dato3);
        } catch (error) {
            window.alert("Ingresa un número valido");
        }

        let media = (num1 + num2 + num3)/3;

        if (media >= 5) {
            document.write(`<br/> <br/> Aprobaste con una media de ${media.toFixed(3)} ` );
        }else{
            document.write(`<br/> <br/> Reprobaste con una media de ${media.toFixed(3)} ` );
        }