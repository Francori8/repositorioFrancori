/*
    Posibles mejoras:
        -Hacer una parte donde se explica dinamica de la materia y demas //Hacho
        -Hacer apartado apuntes / pdf de profesores dado en clase / que se vinculen con los videos dados  //Hecho
        -Utilizar de forma util el iframe cuando no tenga video // No tiene pinta que me convenga hacerlo
        -Arreglar que no se puede tocar el boton seleccionar si no seleccionaste materia //Hecho
        -Hacer un carrusel con los videos //no se si es buena idea, no queda bien o no se hacerlo quedar bien
        -Recrear el prototipo de juego de preguntas // Hecho
        -Crear las preguntas
        -Crear las alertas yo con un modal
        -Hacer las nuevas secciones web responsive // ¿?

*/
const css = document.getElementById("css")
const footer = document.querySelector("footer")
const seccionModal = document.getElementById("seccionModal")
const contenedorMaterias = document.getElementById("contenedorMaterias")
const contenedorVideos = document.getElementById("grillaVideos")
const contenedorApuntesTeoricos = document.getElementById("apuntesTeoricos")
const contenedorApuntesPracticos = document.getElementById("apuntesPracticos")
const contenedorInfoMateria = document.getElementById("informacionMateria")
const contenedorJuego = document.getElementById("eleccion")
const contenedorPreguntas = document.getElementById("preguntas")
const seccionAudiovisual = document.getElementById("audiovisual")
const seccionApuntes = document.getElementById("apuntes")
const seccionInformacion = document.getElementById("informacion")
const seccionJuego = document.getElementById("juego")
const home = document.getElementById("home")
const titulo = document.getElementById("titulo")
const botonMateria = document.getElementById("seleccionarMateria")
const volver = document.getElementById("volver")
const imagen = document.getElementById("imagen")
const tituloMateria = document.getElementById("titulito")
const reproductorVideos = document.getElementById("repro")
const reproductorTeoricos = document.getElementById("teorico")
const reproductorPracticos = document.getElementById("practico")
const reproductorInformaion = document.getElementById("archivoMaterias")
const navegacion = document.getElementById("navegador")
const botonIrVideo = document.getElementById("irVideo")
const botonIrApuntes = document.getElementById("irApunte")
const botonIrJuego = document.getElementById("irJuego")
const botonIrInformacion = document.getElementById("irInformacion")


const root = document.documentElement

const cambioColor = document.getElementById("cambiarColor")
cambioColor.addEventListener("click",cambiarColor)

volver.addEventListener("click",volverAlInicio)
botonIrApuntes.addEventListener("click",apartadoApunte)
botonIrVideo.addEventListener("click",apartadoVideos)
botonIrInformacion.addEventListener("click",apartadoInformacion)
botonIrJuego.addEventListener("click",apartadoJuego)

let iconModal
let textoCabecera
let precuepoModal 
let cuerpoModal
let pieModal
let sacarModal
let contenedorModal
let procesoModal
let indexModal
let puntaje
let lineadePregunta
let contenedorOpciones
let materiaSeleccionada
let unidadSeleccionada
let juegoSeleccionado
let escritura

function cambiarColor(){
   
    if(getComputedStyle(root).getPropertyValue("--colorFondo") === "black"){
      root.style.setProperty("--colorLetra","black")
      root.style.setProperty("--colorFondo","rgba(172, 172, 2, 0.774)")
      imagen.style.filter = "drop-shadow(1px 1px 3px #000)"

    }else{
        root.style.setProperty("--colorLetra","#908070")
        root.style.setProperty("--colorFondo","black")
        imagen.style.filter = "drop-shadow(0px 0px 2px #ff0)"
    }
    
}


function apartadoVideos(){
  
    todasLasMaterias.forEach((materia)=>{
        if (document.getElementById(materia.id).checked){
            materiaSeleccionada = materia
            titulo.style.fontSize = "12px"
            volver.style.display ="block"
            navegacion.style.display = "flex"
            home.style.display = "none"
            seccionAudiovisual.style.display = "grid"
            tituloMateria.style.display = "grid"
            seccionApuntes.style.display = "none"
            seccionInformacion.style.display = "none"
            seccionJuego.style.display = "none"
            botonIrVideo.disabled = true
            botonIrApuntes.disabled = false
            botonIrInformacion.disabled = false
            botonIrJuego.disabled = false
            contenedorApuntesTeoricos.innerHTML = ""
            contenedorApuntesPracticos.innerHTML = ""
            contenedorJuego.innerHTML = ""
            contenedorPreguntas.innerHTML=""
            cargarVideos()
        
           
    }
})
}

function cargarVideos(){
    
    tituloMateria.innerHTML = materiaSeleccionada.nombre
    
    materiaSeleccionada.videos.forEach((vide)=>{
        escritura =`
              <div class="videos">
                   <a href="${vide.src}" title="${vide.titulo}"target="VideoVer">${vide.indice}° subido al campus ${vide.fecha}</a>
                    <p><i style="font-size: smaller;">${vide.tema} </i></p>
                </div>
                              `
                      contenedorVideos.innerHTML += escritura
                 })
                escritura=""
    
        }


function apartadoApunte(){
           
            seccionAudiovisual.style.display = "none"
            seccionInformacion.style.display = "none"
            seccionJuego.style.display = "none"
            seccionApuntes.style.display = "grid"
            botonIrApuntes.disabled = true
            botonIrVideo.disabled = false
            botonIrInformacion.disabled = false
            botonIrJuego.disabled = false
            contenedorVideos.innerHTML=""
            contenedorJuego.innerHTML = ""
            contenedorPreguntas.innerHTML=""
           cargarApuntes()
}

function cargarApuntes(){

    materiaSeleccionada.apuntesteoricos.forEach((apunte)=>{
        escritura =`
              <div class="apuntes">
                   <a href="${apunte.src}" title="${apunte.tema}"target="ApunteTeoria">${apunte.titulo}°  (${apunte.tipo}) </a>
                   <p><i style="font-size: smaller;">${apunte.indice} subido el ${apunte.fecha}</i></p>
                   <p style = "font-size: 10px">Corresponde a los videos ${apunte.correspondencia} </p>
                   <p style = "font-size: 10px">Ejercitacion ${apunte.tp} los ejercicios ${apunte.ejercicios}</p> 
                   <p><i style="font-size: smaller;">${apunte.tema}</i></p>
                </div>
                              `
                      contenedorApuntesTeoricos.innerHTML += escritura
                 })
                escritura=""

        materiaSeleccionada.apuntespracticos.forEach((apunte)=>{
            escritura =`
                    <div class="apuntes">
                        <a href="${apunte.src}" title="${apunte.tema}"target="ApuntePractico">${apunte.titulo}°  (${apunte.tipo}) </a>
                        <p><i style="font-size: smaller;">${apunte.indice} subido el ${apunte.fecha}</i></p>
                        <p><i style="font-size: smaller;">${apunte.tema}</i></p>
                    </div>
                                    `
                            contenedorApuntesPracticos.innerHTML += escritura
                        })
                    escritura=""   
}


function apartadoJuego(){
    seccionInformacion.style.display = "none"
    seccionApuntes.style.display = "none"
    seccionJuego.style.display = "Flex"
    seccionAudiovisual.style.display = "none"
    botonIrApuntes.disabled = false
    botonIrVideo.disabled = false
    botonIrInformacion.disabled = false
    botonIrJuego.disabled = true
    contenedorVideos.innerHTML=""
    contenedorApuntesTeoricos.innerHTML = ""
    contenedorApuntesPracticos.innerHTML = ""
    
    cargarUnidades()
}

function cargarUnidades(){

    if(materiaSeleccionada.juego !== null){
    materiaSeleccionada.juego.forEach((juego) =>{
        escritura = `
        <div>
            <p class="modosJuegos margen10">${juego.indice}</p>
        </div>
        `

        contenedorJuego.innerHTML += escritura
    })
        cargarPreguntas()
      
    } else{
    escritura = `
    <p class="disculpa"> EN PROCESO, EN BREVE ESTA SECCION ESTARA PREPARADA PARA ESTA MATEIRA </p>
    `
    contenedorJuego.innerHTML += escritura
}
}

function cargarPreguntas(){
    let modosJuegos = document.querySelectorAll(".modosJuegos")
    
    modosJuegos.forEach((modo)=> {
        modo.addEventListener("click", (e) =>{
            modosJuegos.forEach((mod)=>{
                mod.style.color = "var(--colorLetra)"
            })
            materiaSeleccionada.juego.forEach((juego) =>{
                if(juego.indice === e.target.textContent){
                    unidadSeleccionada = juego
                    modo.style.color = "red"
                    escritura = `
                        <div id="encabezado">
                            <span id="pregunta">Aqui va la pregunta </span>
                        </div>
                
                        <div id="opciones">
                            
                        </div>
                    
                    `
                    contenedorPreguntas.innerHTML = escritura
                    
                    contenedorOpciones = document.getElementById("opciones")
                    lineadePregunta = document.getElementById("pregunta")
                    let index_pregunta = 0
                    puntaje = 0
                    unidadSeleccionada.preguntas.sort(()=> Math.random() - 0.5)
                    crearModal()
                    codigoPreguntas(index_pregunta)
                 
                }
            })

        })
    }
    )
}

 function codigoPreguntas(index){
    
    if(index<unidadSeleccionada.preguntas.length){
    let opciones = []    
    lineadePregunta.innerText = unidadSeleccionada.preguntas[index].pregunta
    opciones = [...unidadSeleccionada.preguntas[index].distractores]
    opciones.push(unidadSeleccionada.preguntas[index].respuesta)
    opciones.sort(() => Math.random() - 0.5)

    opciones.forEach((opcion)=>{
        escritura = `
            <span class="opcion">${opcion}</span>
        `
        contenedorOpciones.innerHTML += escritura
    })

    let  opcionesClick  = document.querySelectorAll(".opcion")

    opcionesClick.forEach((opcion)=>{
        opcion.addEventListener("click", (e)=>{
            let respuesta = e.target.textContent
            if(respuesta === unidadSeleccionada.preguntas[index].respuesta){
                puntaje++
                usarModal(index,true,respuesta)
                index++
                contenedorOpciones.innerHTML = ""
                codigoPreguntas(index)
            }else{
                usarModal(index,false,respuesta)
                index++
                contenedorOpciones.innerHTML = ""
                codigoPreguntas(index)
            }
        })
    })

}else{
    escritura = `<span class="resultado">Finalizado<span>
        <span class="resultado">Tu puntaje es de ${puntaje}/${unidadSeleccionada.preguntas.length} </span>
    `
    contenedorPreguntas.innerHTML = escritura
}

}


function crearModal(){
    escritura = `
    <div id="contenedorModal">
        <div id="modal">
            <div id="indexModal"></div>
            <div id="encabezadoModal" class="modal">
                <div id="contenedorCabecera">
                    <div id="cabeceraModal" >Pregunta</div>
                    <div id="textoModal"  class="centrado margen10"></div>
                </div>
            </div>
            <div id="contenedorCuerpoModal" class="modal">
                <div id="tuRespuestaModal">
                    <div id="precuerpoModal" class="centrado margen10"></div>
                </div>
                <div id="respuestaCorrectaModal">
                    <div id="cuerpoModal" class="centrado margen10" ></div>
                </div>
                <div id="validacion">
                    <div id="iconModal" class="centrado margen10"></div>
                    <div id="proceso"></div>
                </div>
            </div> 
       
            <div id="botones" class="margen10">
              
                <button id="sacarModal" class="botonModal">Siguiente</button>
            </div>
        </div>
    </div>  
    
    `
    // <button id="mandarReporte" class="botonModal">Reportar</button>   La idea es agregar esta clase de botones
    // <button id="mostrarExplicacion" class="botonModal">Explicacion</button>

    seccionModal.innerHTML = escritura
    iconModal = document.getElementById("iconModal")
    textoCabecera = document.getElementById("textoModal")
    cuerpoModal = document.getElementById("cuerpoModal")
    precuepoModal = document.getElementById("precuerpoModal")
    sacarModal = document.getElementById("sacarModal")
    contenedorModal = document.getElementById("contenedorModal")
    procesoModal = document.getElementById("proceso")
    indexModal = document.getElementById("indexModal")

    sacarModal.addEventListener("click",()=>{
        contenedorModal.style.display = "none"
        contenedorModal.style.opacity = "0"
        footer.style.display="block"
    })

}

function usarModal(index,validez,respuesta){
    footer.style.display="none"
    validez ? iconModal.innerHTML = "✅": iconModal.innerHTML = "❌"
    
    textoCabecera.innerHTML = `${unidadSeleccionada.preguntas[index].pregunta}`
    precuepoModal.innerHTML = `Tu respuesta : ${respuesta}`
    cuerpoModal.innerHTML = `Respuesta Correcta: ${unidadSeleccionada.preguntas[index].respuesta}`
    procesoModal.innerHTML = `${puntaje}/${unidadSeleccionada.preguntas.length}`
    indexModal.innerHTML = `${index + 1}`

    contenedorModal.style.display = "flex"
    contenedorModal.style.opacity = "1"
}

function apartadoInformacion(){
    seccionInformacion.style.display = "grid"
    seccionApuntes.style.display = "none"
    seccionJuego.style.display = "none"
    seccionAudiovisual.style.display = "none"
    botonIrApuntes.disabled = false
    botonIrVideo.disabled = false
    botonIrInformacion.disabled = true
    botonIrJuego.disabled = false
    contenedorVideos.innerHTML=""
    contenedorApuntesTeoricos.innerHTML = ""
    contenedorApuntesPracticos.innerHTML = ""
    contenedorJuego.innerHTML = ""
    contenedorPreguntas.innerHTML=""
    cargarInformacion()
}

function cargarInformacion(){

    escritura = `
 
    <div id="informacionMateria">
            
            <div>
                <p class="margen10"> Carga Horaria: ${materiaSeleccionada.cargaHoraria} hrs </p>
                
                <em class="margen10"> Links Utiles: ${materiaSeleccionada.links}</em> 

                <p class="margen10" style = "font-size: smaller;"> Observacion: ${materiaSeleccionada.observacion} </p>
            </div>
            <div id="links">
                <a href="${materiaSeleccionada.cronograma}" target="archivosMaterias">Cronograma</a>
                <a href="${materiaSeleccionada.programa}" target="archivosMaterias">Programa</a>
            </div>
    </div>


    <div class="reproductor">
    <iframe width="95%" height="550" src="" title="Programa/cronograma de la materia" name="archivosMaterias" frameborder="1"  id="archivoMaterias"  allowfullscreen> </iframe>
    </div>
    
    
    
    `
    seccionInformacion.innerHTML = escritura
}

function cargar(){
    // se itera para crear todas las tarjetas de materias que hay en el array todas las materias
    todasLasMaterias.forEach((materia)=>{
        escritura = `
        <input type="radio" name="materias" id=${materia.id} />
        <label class="materias select"   for=${materia.id}> 
            <p class ="select">${materia.nombre}</p>
        </label>
        `
        contenedorMaterias.innerHTML += escritura   
    }   
    )
        botonMateria.addEventListener("click",apartadoVideos)
        
}



function volverAlInicio(){
        reproductorVideos.src = ""
        reproductorPracticos.src = ""
        reproductorTeoricos.src = ""
        contenedorVideos.innerHTML = ""
        contenedorJuego.innerHTML = ""
        contenedorPreguntas.innerHTML = ""
        titulo.style.fontSize = "32px"
        home.style.display = "flex"
        seccionAudiovisual.style.display = "none"
        navegacion.style.display ="none"
        seccionInformacion.style.display = "none"
        seccionJuego.style.display = "none"
        volver.style.display = "none"
        
        tituloMateria.style.display = "none"
     
        seccionApuntes.style.display = "none"
   
}


window.addEventListener("onload",cargar())