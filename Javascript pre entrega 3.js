//CODIGO DE PRE-ENTREGA 3

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

  //CAPTURO DATOS DEL DOM
  let guardarEstudiante = document.getElementById("registrarEstudianteBtn")
  let buscarPorDocumento = document.getElementById("buscarDNIBtn")
  let estudiantesDiv = document.getElementById("estudiantes")
  let mostrarRegistro = document.getElementById("btnMostrarRegistro")

  //Creo funcion para cargar estudiantes - OK CON DOM
  function registrarEstudiantes(array) {
    let inputNombre = document.getElementById("nombreInput");
    let inputApellido = document.getElementById("apellidoInput");
    let inputDNI = document.getElementById("dniInput");
    let inputEdad = document.getElementById("edadInput");
    const nuevoEstudiante = new sistemaEstudiantes(array.length + 1, inputDNI.value, inputNombre.value, inputApellido.value, inputEdad.value);
    array.push(nuevoEstudiante);
    localStorage.setItem("estudiantes", JSON.stringify(array))
    let formAgregarEstudiante = document.getElementById("formAgregarEstudiante")
    formAgregarEstudiante.reset()
    console.log(array)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Registro guardado con éxito',
      showConfirmButton: false,
      timer: 1500,
      width: "25%"
    })
    }


  //Funcion para buscar por DNI. OK - SE MUESTRA POR ALERT LUEGO PASARLO A JSON
  function buscoPorDocumento(array) {
    let dniIngresado = document.getElementById("dniBuscadoInput")
    let busqueda = array.filter((elemento) => elemento.dni == parseInt(dniIngresado.value));
    if (busqueda.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se encontró un resultado para el DNI ingresado'
      })
    } else {
      busqueda = JSON.stringify(busqueda);
      Swal.fire({
        text: `${busqueda}`,
      })
    }
}    
    


function verRegistro(array) {
  estudiantesDiv.innerHTML = ""
  for (let estudiante of array) {
    let nuevoEstudianteDiv = document.createElement("div")
    nuevoEstudianteDiv.className = "col-12 col-md-6 col-lg-4 my-3"
    nuevoEstudianteDiv.innerHTML = `
          <div id="${estudiante.id}" class="card" style="width: 21rem;">
                  <h4 class="card-title" style = "text-align: center;">Información del estudiante ${estudiante.id}</h4>
                  <p style = "margin-left: 20px"><strong>Nombre: </strong> ${estudiante.nombre}</p>
                  <p style = "margin-left: 20px"><strong>Apellido: </strong>${estudiante.apellido}</p>
                  <p style = "margin-left: 20px" class=""><strong>Documento: </strong>${estudiante.dni}</p>
                  <p style = "margin-left: 20px" class=""><strong>Edad: </strong>${estudiante.edad}</p>
              </div>
          </div> 
          `
    estudiantesDiv.appendChild(nuevoEstudianteDiv)

  }
}
  
  //Funcion para recorrer array y mostrarlo en consola - OK - FUERA DE USO YA QUE HAY OTRA FUNCION QUE LO IMPRIME EN DOM
  function recorroArray(array) {
    array.forEach((element) => {
      console.log(element)
    });
  }
  // Funcion para eliminar un elemento del array -- OK - NO EN DOM
  function borrarEstudiante(array){
    for(let elem of array){
        console.log(`${elem.id} - ${elem.nombre} - ${elem.apellido}`)
    }
    let dniEliminar = parseInt(prompt("Ingrese el DNI a eliminar"))
    let arrayDNI = array.map(el => el.dni)
    let seleccion = arrayDNI.includes(dniEliminar)
    array.splice(seleccion-1,1)
  }
  
  
  //---------------------------------------------------HASTA ACÁ FUNCIONES---------------------------------------------------------//
  const estudiantes = [];
//menu()
guardarEstudiante.addEventListener("click", ()=>{ 
  registrarEstudiantes(estudiantes) 
})

buscarPorDocumento.addEventListener("click", ()=>{
  buscoPorDocumento(estudiantes) })

  mostrarRegistro.addEventListener("click", ()=>{
    verRegistro(estudiantes)
  })

  