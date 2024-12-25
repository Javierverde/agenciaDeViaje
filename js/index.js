const destinos = [
    { id: 1,
    continente: "Europa", 
    ciudad: "París", 
    pais: "Francia" 
    },

    { id: 2, 
    continente: "Asia", 
    ciudad: "Tokio", 
    pais: "Japón" 
    },

    { id: 3, 
    continente: "América", 
    ciudad: "Nueva York", 
    pais: "Estados Unidos"
    },

    { id: 4,
    continente: "America",
    ciudad: "Lima",
    pais: "Peru"
    }
  ];
  
  const vuelos = [
    { id: 1, 
    destinoId: 1, 
    precio: 1200
    },

    { id: 2, 
    destinoId: 2, 
    precio: 1500
    },

    { id: 3, 
    destinoId: 3, 
    precio: 900 
    },

    {id: 4,
    destinoId:4,
    precio: 1200
    }
  ];

  const alojamientos = [
    {
      destinoId: 1,
      opciones: [
        { hotel: "Hotel París Deluxe", 
          precioPorNoche: 200 
        },
        { hotel: "Hotel París Económico",
          precioPorNoche: 100 
        },
        { hotel: "Hotel París Boutique", 
          precioPorNoche: 150 
        },
      ],
    },
    {
      destinoId: 2,
      opciones: [
        { hotel: "Hotel Tokio Central", 
          precioPorNoche: 180 
        },
        { hotel: "Hotel Tokio Económico", 
          precioPorNoche: 90 
        },
        { hotel: "Hotel Tokio Lujo", 
          precioPorNoche: 250 
        },
      ],
    },
    {
      destinoId: 3,
      opciones: [
        { hotel: "Hotel Manhattan", 
          precioPorNoche: 250 
        },
        { hotel: "Hotel Brooklyn Económico", 
          precioPorNoche: 120 
        },
        { hotel: "Hotel Times Square", 
          precioPorNoche: 300 
        },
      ],
    },
    {
      destinoId: 4,
      opciones: [
        { hotel: "Hotel Holiday Inn Lima", 
          precioPorNoche: 175
        },
        { hotel: "Hotel Lima Economico", 
          precioPorNoche: 125
        },
        { hotel: "Hotel Hilton Lima", 
          precioPorNoche: 150
        },
        ]
    }
  ];

  function mostrarDestinos() {
    console.log("Destinos disponibles:");
    destinos.forEach((destino) => {
      console.log(
        `${destino.id}. ${destino.ciudad}, ${destino.pais} (${destino.continente})`
      );
    });
  }

  function buscarVuelos(destinoId) {
    const vuelo = vuelos.find((v) => v.destinoId === destinoId);
    if (vuelo) {
      console.log(
        `Vuelo disponible: $${vuelo.precio} para ${destinos.find(d => d.id === destinoId).ciudad}`
      );
    } else {
      console.log("No hay vuelos disponibles para este destino.");
    }
  }
  function buscarAlojamientos(destinoId) {
    const alojamiento = alojamientos.find((a) => a.destinoId === destinoId);
    if (alojamiento) {
      console.log("Opciones de alojamiento disponibles:");
      alojamiento.opciones.forEach((opcion, index) => {
        console.log(`${index + 1}. ${opcion.hotel}, Precio por noche: $${opcion.precioPorNoche}`);
      });
  
      const eleccionHotel = parseInt(
        prompt(
          `¿Qué hotel prefieres? Ingresa el número:\n` +
            alojamiento.opciones
              .map(
                (opcion, index) =>
                  `${index + 1}. ${opcion.hotel}, Precio por noche: $${opcion.precioPorNoche}`
              )
              .join("\n")
        )
      );
  
      if (isNaN(eleccionHotel) || eleccionHotel < 1 || eleccionHotel > alojamiento.opciones.length) {
        alert("Por favor, selecciona una opción válida.");
      } else {
        const hotelSeleccionado = alojamiento.opciones[eleccionHotel - 1];
        console.log(`Has seleccionado: ${hotelSeleccionado.hotel}`);
  
        const noches = parseInt(prompt("¿Cuántas noches deseas hospedarte?(Descuento del 10% a partir de 5 noches y del 20% a partir de 10 noches"));
        if (isNaN(noches) || noches <= 0) {
          alert("Por favor, ingresa un número válido de noches.");
        } else {
          let precioTotal = noches * hotelSeleccionado.precioPorNoche;
          if (noches < 5) {
            console.log(`Sin descuento`);
          }
          else if(noches< 10) {
            const descuento5a9Noches = precioTotal *0.1; // 10%
            precioTotal -= descuento5a9Noches;
            console.log(`Descuento aplicado: -$${descuento5a9Noches}`)
          }
          else if(noches>= 10) {
              const descuento10oMasNoches = precioTotal *0.2; //20%
              precioTotal -= descuento10oMasNoches;
              console.log(`Descuento aplicado: -$${descuento10oMasNoches}`)  
          }
  
          console.log(
            `Precio total por ${noches} noche(s) en ${hotelSeleccionado.hotel}: $${precioTotal}`
          );
          alert(
            `El precio total de tu estadía en ${hotelSeleccionado.hotel} por ${noches} noche(s) es de $${precioTotal}.`
          );
  
          return { hotel: hotelSeleccionado.hotel, noches, precioTotal };
        }
      }
    } else {
      console.log("No hay alojamientos disponibles para este destino.");
      alert("No hay alojamientos disponibles para este destino.");
    }
    return null;
  }

  function simuladorAgencia() {
    alert("¡Bienvenido a la agencia Mundo Aventurero!");
    mostrarDestinos();
    const destinoSeleccionado = parseInt(
      prompt("Ingresa el ID del destino que te interesa:")
    );
  
    if (isNaN(destinoSeleccionado)) {
      alert("Por favor, ingresa un ID válido.");
      return;
    }
  
    const destino = destinos.find((d) => d.id === destinoSeleccionado);
    if (!destino) {
      alert("Destino no encontrado.");
      return;
    }
  
    buscarVuelos(destinoSeleccionado);
    const vuelo = vuelos.find((v) => v.destinoId === destinoSeleccionado);
    const alojamientoSeleccionado = buscarAlojamientos(destinoSeleccionado);
    
  
    if (alojamientoSeleccionado) {
      console.log("---------- Resumen de tu viaje ----------");
      console.log(`Destino: ${destino.ciudad}, ${destino.pais}`);
      console.log(`Alojamiento: ${alojamientoSeleccionado.hotel}, Noches: ${alojamientoSeleccionado.noches}, Total: $${alojamientoSeleccionado.precioTotal}`
      )
      const totalGeneral =alojamientoSeleccionado.precioTotal + vuelo.precio
      console.log(`el costo del vuelo es: $${vuelo.precio}`)
      console.log(`Precio total del viaje: $${totalGeneral}`);
      console.log("-----------------------------------------");
      console.log("¡Que disfrutes de tu viaje!");
      console.log("Gracias por confiar en la agencia Mundo Aventurero.");
      alert("Comunicate con nosotros para conocer excursiones y otras promociones sobre tu lugar de destino")
      alert("Consulta la consola para ver el resumen de tu viaje.");
    }
  }
simuladorAgencia();

