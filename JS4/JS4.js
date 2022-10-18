
        var moneda = false;
        //Aguila = False || Sol = True
        var selecion = false;

		// Function to change the player name
		function seleccionA() {
			moneda = false;
            selecion = true;
            document.querySelector("p.Player1").innerHTML = "Aguila";
		}

        function seleccionS() {
			moneda = true;
            selecion = true;
            document.querySelector("p.Player1").innerHTML = "Sol";
		}

		

		function lanzar() {
			//var randomNumber1 = Math.floor(Math.random() * 6) + 1;
            if (selecion == true){

                //Generacion de respuesta
                var respuesta = false;
                let valor = Math.round(Math.random());
                if (valor == 1) {
                    respuesta = true;
                    document.querySelector(".img1").setAttribute("src","sol.png");
                }else{
                    respuesta = false;
                    document.querySelector(".img1").setAttribute("src","aguila.png");
                }

                //Resultado
                if (respuesta == moneda) {
                    document.querySelector("h1").innerHTML = "GANASTE!";
                } else {
                    document.querySelector("h1").innerHTML = "PERDISTE!";
                }

                selecion = false;

                // setTimeout(() => {
                //     document.querySelector("h1").innerHTML = "Vamos a jugar!";
                //     document.querySelector("p.Player1").innerHTML = "¿?";
                // }, 2500);
                
                
            }else{
                window.alert("Selecciona una opción");
            }
		}