
		// Player name
		var player1 = "Player 1";
		var player2 = "Player 2";
        var player3 = "Player 3";
        var con1 = 0, con2 = 0, con3 = 0;

		// Function to change the player name
		function editNames() {
			player1 = prompt("Change Player1 name");
			player2 = prompt("Change player2 name");
            player3 = prompt("Change player3 name");

			document.querySelector("p.Player1")
							.innerHTML = player1;
							
			document.querySelector("p.Player2")
							.innerHTML = player2;

            document.querySelector("p.Player3")
							.innerHTML = player3;
		}

		// Function to roll the dice
		// function rollTheDice() {
		// 	setTimeout(function () {
		// 		var randomNumber1 = Math.floor(Math.random() * 6) + 1;
		// 		var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        //         var randomNumber3 = Math.floor(Math.random() * 6) + 1;
        //         con1 = con1 + randomNumber1;
        //         con2 = con2 + randomNumber2;
        //         con3 = con3 + randomNumber3;

		// 		document.querySelector(".img1").setAttribute("src",
		// 			"dice" + randomNumber1 + ".png");

		// 		document.querySelector(".img2").setAttribute("src",
		// 			"dice" + randomNumber2 + ".png");

        //         document.querySelector(".img3").setAttribute("src",
		// 			"dice" + randomNumber3 + ".png");

		// 		//Detectar ganador de ronda
		// 		if ((randomNumber1 === randomNumber2) && (randomNumber2 === randomNumber3)) {
		// 			document.querySelector("h1").innerHTML = "TODOS EMPATAN RONDA!";
		// 		}

		// 		else if (randomNumber1 < randomNumber2) {
        //             if (randomNumber2 < randomNumber3) {
        //                 document.querySelector("h1").innerHTML = (player3 + " GANA RONDA!");
        //             }else{
        //                 if (randomNumber2 > randomNumber3) {
        //                     document.querySelector("h1").innerHTML = (player2 + " GANA RONDA!");
        //                 }else{
        //                     document.querySelector("h1").innerHTML = (player2 + " Y " + player3 + " GANAN RONDA!");
        //                 }
        //             }
		// 		}

		// 		else {
        //             if (randomNumber1 === randomNumber2) {
		// 				if (randomNumber2 > randomNumber3) {
		// 					document.querySelector("h1").innerHTML = (player1 + " Y " + player2 + " GANAN RONDA!");
		// 				}else{
		// 					document.querySelector("h1").innerHTML = (player3 + " GANA RONDA!");
		// 				}
                        

        //             }else{
        //                 if (randomNumber1 < randomNumber3) {
        //                     document.querySelector("h1").innerHTML = (player3 + " GANA RONDA!");
        //                 }else{
        //                     if (randomNumber1 > randomNumber3) {
        //                         document.querySelector("h1").innerHTML = (player1 + " GANA RONDA!");
        //                     }else{
        //                         document.querySelector("h1").innerHTML = (player1 + " Y " + player3 + " GANAN RONDA!");
        //                     }
        //                 }
        //             }
					
		// 		}

				
		// 	}, 1500);

		// 	//Detectar ganador FINAL
		// 	if ((con1 >= 21) || (con2 >= 21) || (con3 >= 21)) {
		// 		if ((con1 === con2) && (con2 === con3)) {
		// 			window.alert("Ganadores Finales son TODOS!");
		// 		}else if (con1 < con2) {
		// 			if (con2 < con3) {
		// 				window.alert("Ganador Final es" + player3);
		// 			}else{
		// 				if (con2 > con3) {
		// 					window.alert("Ganador Final es" + player2);
		// 				}else{
		// 					window.alert(player2 + " Y " + player3 + " GANAN!");
		// 				}
		// 			}
		// 		}

		// 		else {
		// 			if (con1 === con2) {
		// 				if (con2 > con3) {
		// 					window.alert("Ganadores Finales son" + player1 + " Y " + player2);
		// 				}else{
		// 					window.alert("Ganador Final es" + player3);
		// 				}
						
		// 			}else{
		// 				if (con1 < con3) {
		// 					window.alert("Ganador Final es" + player3);
		// 				}else{
		// 					if (con1 > con3) {
		// 						window.alert("Ganador Final es" + player1);
		// 					}else{
		// 						window.alert("Ganadores Finales son" + player1 + " Y " + player3);
		// 					}
		// 				}
		// 			}
					
		// 		}
		// 		con1 = 0;
		// 		con2 = 0;
		// 		con3 = 0;
		// 	}
		// }

		function rollTheDice() {
			var randomNumber1 = Math.floor(Math.random() * 6) + 1;
			var randomNumber2 = Math.floor(Math.random() * 6) + 1;
			var randomNumber3 = Math.floor(Math.random() * 6) + 1;
			con1 = con1 + randomNumber1;
			con2 = con2 + randomNumber2;
			con3 = con3 + randomNumber3;

			document.querySelector(".img1").setAttribute("src",
				"dice" + randomNumber1 + ".png");

			document.querySelector(".img2").setAttribute("src",
				"dice" + randomNumber2 + ".png");

			document.querySelector(".img3").setAttribute("src",
				"dice" + randomNumber3 + ".png");

			//Detectar ganador de ronda
			if ((randomNumber1 === randomNumber2) && (randomNumber2 === randomNumber3)) {//Todos empatan
				document.querySelector("h1").innerHTML = "TODOS EMPATAN RONDA!";
			} else {
				if ((randomNumber1 === randomNumber2) && (randomNumber2 > randomNumber3)) { //1y2 empatan
					document.querySelector("h1").innerHTML = (player1 + " Y " + player2 + " GANAN RONDA!");
				} else {
					if ((randomNumber1 === randomNumber3) && (randomNumber1 > randomNumber2)) {//1y3 empatan
						document.querySelector("h1").innerHTML = (player1 + " Y " + player3 + " GANAN RONDA!");
					} else {
						if ((randomNumber2 === randomNumber3) && (randomNumber2 > randomNumber1)) {//2y3 empatan
							document.querySelector("h1").innerHTML = (player2 + " Y " + player3 + " GANAN RONDA!");
						} else {
							if (randomNumber1 > randomNumber2) {
								if (randomNumber1 > randomNumber3) {//1 gana
									document.querySelector("h1").innerHTML = (player1 + " GANA RONDA!");
								} else {//3 gana
									document.querySelector("h1").innerHTML = (player3 + " GANA RONDA!");
								}
							} else {
								if (randomNumber2 > randomNumber3) {//2 gana
									document.querySelector("h1").innerHTML = (player2 + " GANA RONDA!");
								} else {//3 gana
									document.querySelector("h1").innerHTML = (player3 + " GANA RONDA!");
								}
							}
						}
					}
				}
			}

			// if ((randomNumber1 === randomNumber2) && (randomNumber2 === randomNumber3)) {
			// 	document.querySelector("h1").innerHTML = "TODOS EMPATAN RONDA!";
			// }

			// else if (randomNumber1 < randomNumber2) {
			//     if (randomNumber2 < randomNumber3) {
			//         document.querySelector("h1").innerHTML = (player3 + " GANA RONDA!");
			//     }else{
			//         if (randomNumber2 > randomNumber3) {
			//             document.querySelector("h1").innerHTML = (player2 + " GANA RONDA!");
			//         }else{
			//             document.querySelector("h1").innerHTML = (player2 + " Y " + player3 + " GANAN RONDA!");
			//         }
			//     }
			// }

			// else {
			//     if (randomNumber1 === randomNumber2) {
			// 		if (randomNumber2 > randomNumber3) {
			// 			document.querySelector("h1").innerHTML = (player1 + " Y " + player2 + " GANAN RONDA!");
			// 		}else{
			// 			document.querySelector("h1").innerHTML = (player3 + " GANA RONDA!");
			// 		}
					

			//     }else{
			//         if (randomNumber1 < randomNumber3) {
			//             document.querySelector("h1").innerHTML = (player3 + " GANA RONDA!");
			//         }else{
			//             if (randomNumber1 > randomNumber3) {
			//                 document.querySelector("h1").innerHTML = (player1 + " GANA RONDA!");
			//             }else{
			//                 document.querySelector("h1").innerHTML = (player1 + " Y " + player3 + " GANAN RONDA!");
			//             }
			//         }
			//     }
				
			// }

			
		
			setTimeout(() => {
				//Detectar ganador FINAL
				if ((con1 >= 21) || (con2 >= 21) || (con3 >= 21)) {
					if ((con1 === con2) && (con2 === con3)) {//Todos empatan
						window.alert("Ganadores Finales son TODOS!");
					} else {
						if ((con1 === con2) && (con2 > con3)) { //1y2 empatan
							window.alert("Ganadores Finales son " + player1 + " Y " + player2);
						} else {
							if ((con1 === con3) && (con1 > con2)) {//1y3 empatan
								window.alert("Ganadores Finales son " + player1 + " Y " + player3);
							} else {
								if ((con2 === con3) && (con2 > con1)) {//2y3 empatan
									window.alert("Ganadores Finales son " + player2 + " Y " + player3);
								} else {
									if (con1 > con2) {
										if (con1 > con3) {//1 gana
											window.alert("Ganador Final es " + player1);
										} else {//3 gana
											window.alert("Ganador Final es " + player3);
										}
									} else {
										if (con2 > con3) {//2 gana
											window.alert("Ganador Final es " + player2);
										} else {//3 gana
											window.alert("Ganador Final es " + player3);
										}
									}
								}
							}
						}
					}

					con1 = 0;
					con2 = 0;
					con3 = 0;

				}








			// if ((con1 >= 21) || (con2 >= 21) || (con3 >= 21)) {
			// 	if ((con1 === con2) && (con2 === con3)) {
			// 		window.alert("Ganadores Finales son TODOS!");
			// 	}else if (con1 < con2) {
			// 		if (con2 < con3) {
			// 			window.alert("Ganador Final es " + player3);
			// 		}else{
			// 			if (con2 > con3) {
			// 				window.alert("Ganador Final es " + player2);
			// 			}else{
			// 				window.alert(player2 + " Y " + player3 + " GANAN!");
			// 			}
			// 		}
			// 	}

			// 	else {
			// 		if (con1 === con2) {
			// 			if (con2 > con3) {
			// 				window.alert("Ganadores Finales son " + player1 + " Y " + player2);
			// 			}else{
			// 				window.alert("Ganador Final es " + player3);
			// 			}
						
			// 		}else{
			// 			if (con1 < con3) {
			// 				window.alert("Ganador Final es " + player3);
			// 			}else{
			// 				if (con1 > con3) {
			// 					window.alert("Ganador Final es " + player1);
			// 				}else{
			// 					window.alert("Ganadores Finales son " + player1 + " Y " + player3);
			// 				}
			// 			}
			// 		}
					
			// 	}
				// con1 = 0;
				// con2 = 0;
				// con3 = 0;
			//}
			}, 400);
				
		}