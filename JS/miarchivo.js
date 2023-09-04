// Primera Funcion
const comprarProductos = () => {
  let producto = 0;
  let cantidad = 0;
  let precio = 0;
  let subtotal = 0;
  let sumarProducto = true;
  alert(
    "Bienvenido a nuestro catálogo online. Seleccione el numero del producto que desea comprar!"
  );

  do {
    producto = prompt(
      "LISTA DE PRODUCTOS\n1) Pistola 9mm\n2) Carabina S&W .22\n3) Carabina Semi Automatica\n4) Fusil Mirage cal 308\n5) Chaleco Tactico\n6) Munición 9mm\n7) Munición .22mm\n8) Munición cal 308"
    );
    cantidad = Number(prompt("Cantidad a comprar"));

    console.log(producto);
    console.log(cantidad);

    switch (producto) {
      case "1":
        precio = 289000;
        break;
      case "2":
        precio = 634000;
        break;
      case "3":
        precio = 487000;
        break;
      case "4":
        precio = 998000;
        break;
      case "5":
        precio = 157000;
        break;
      case "6":
        precio = 32000;
        break;
      case "7":
        precio = 26000;
        break;
      case "8":
        precio = 72000;
        break;
      default:
        alert("El dato ingresado es incorrecto.");
    }

    subtotal += precio * cantidad;

    sumarProducto = confirm("¿Desea sumar otro producto?");
  } while (sumarProducto);

  return subtotal;
};

// Segunda Funcion

function descEfectivo() {
  let descuentoEfectivo = subtotal * 0.8;
  return descuentoEfectivo;
}

// Tercera Funcion

function descTarjeta() {
  let descuentoTarjeta = subtotal * 0.9;
  return descuentoTarjeta;
}

/*------------- INCIO DEL CODIGO -------------*/

alert("Bienvenido :)");

let ingresarCatalogo = confirm(
  "¿Desea ingresar a nuestro catálogo online? Calcule el costo estimado de comprar en nuestra tienda."
);

if (ingresarCatalogo == true) {
  subtotal = comprarProductos();
  alert("El total de su compra es de $" + subtotal);
} else {
  alert("Le recomendamos visitar nuestro sitio web :)");
}

let descuentoEfectivo = descEfectivo();
let descuentoTarjeta = descTarjeta();

/* Se da la opcion de ver la compra con descuentos */

let opcionDescuentos = confirm("¿Desea ver los descuentos disponibles?");
if (opcionDescuentos == true) {
  alert(
    "> 20% Descuento pago en Efectivo\n\nSin Descuento $" +
      subtotal +
      "\n Con Duescuento $" +
      descuentoEfectivo +
      "\n\n\n> 10% Descuento Pago con Débito/Crédito hasta 3 cuotas\n\nSin Descuento $" +
      subtotal +
      "\n Con Descuento $" +
      descuentoTarjeta
  );
}

alert(
  "Gracias por visitar nuestro catalogo online, lo esperamos pronto en nuestro comercio :)"
);

/* FIN */
