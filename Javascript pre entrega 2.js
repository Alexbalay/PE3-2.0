//CODIGO DE PRE-ENTREGA 2

//Creo un objeto constructor para sistema de estudiantes - OK
class sistemaEstudiantes {
    constructor(id, dni, nombre, apellido, edad) {
      this.id = id;
      this.dni = dni;
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
    }
  }
  
  //Creo funcion para cargar estudiantes - OK
  function registrarEstudiantes(array) {
    let decision = "S";
    while (decision.toUpperCase() == "S") {
      let dni = parseInt(prompt("Ingrese número de DNI del estudiante a registrar"));
      let nombre = prompt("Ingrese nombre del estudiante");
      let apellido = prompt("Ingrese apellido del estudiante");
      let edad = parseInt(prompt("Ingrese edad"));
      const nuevoEstudiante = new sistemaEstudiantes(array.length + 1, dni, nombre, apellido, edad);
      array.push(nuevoEstudiante);
      decision = prompt("¿Desea cargar otro estudiante? S/N");
    }
  
  }
  
  //Funcion para buscar por DNI. - OK
  function buscoPorDocumento(array) {
    let dniBuscado = parseInt(prompt("Ingrese numero de DNI a buscar:"));
    let busqueda = array.filter((elemento) => elemento.dni === dniBuscado);
    console.log(busqueda);
  }
  
  //Funcion para recorrer array y mostrarlo en consola - OK
  function recorroArray(array) {
    array.forEach((element) => {
      console.log(element)
    });
  }
  // Funcion para eliminar un elemento del array -- OK
  function borrarEstudiante(array){
    for(let elem of array){
        console.log(`${elem.id} - ${elem.nombre} - ${elem.apellido}`)
    }
    let dniEliminar = parseInt(prompt("Ingrese el DNI a eliminar"))
    let arrayDNI = array.map(el => el.dni)
    let seleccion = arrayDNI.includes(dniEliminar)
    array.splice(seleccion-1,1)
  }
  
  //Creo menu con las funciones ya declaradas - OK
  function menu() {
    let salirMenu = true;
    do {
      let opcion = prompt(`Ingrese la opción deseada
    1 - Registrar estudiantes
    2 - Buscar estudiante por DNI
    3 - Muestro datos del registro
    4 - Borrar estudiante por DNI
    0 - Salir del menú`)
      switch (opcion) {
        case "1":
          registrarEstudiantes(estudiantes);
          break;
        case "2":
          buscoPorDocumento(estudiantes);
          break;
        case "3":
          recorroArray(estudiantes);
          break;
        case "4":
          borrarEstudiante(estudiantes);
          break;
        case "0":
          alert("Gracias por utilizar el sistema");
          salirMenu = false;
          break;
        default:
          alert("Ingrese una opción válida");
          break;
  
      }
    } while (salirMenu);
  }
  
  //---------------------------------------------------HASTA ACÁ FUNCIONES---------------------------------------------------------//
  const estudiantes = [];
//menu()
  