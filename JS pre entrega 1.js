//CODIGO DE PRE-ENTREGA 1
function simulador() {
    let precio = parseInt(prompt("Ingrese precio del producto a calcular cuotas..."));
    let cuotas = parseInt(prompt("Ingrese cuotas..."));
    calcular(precio, cuotas);
    decision();
  }
  
  function calcular(a, b) {
    let resultado = a / b;
    alert(`El valor ${a} dividido ${b} da como resultado ${resultado}`);
  }
  
  function decision() {
    let decision = prompt("¿Desea calcular las cuotas de otro producto? S/N");
    if (decision.toUpperCase() == "S") {
      simulador();
    } else {
      alert("Gracias por utilizar el simulador");
    }
  }
  
  simulador();