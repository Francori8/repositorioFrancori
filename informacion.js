class Materias{
    constructor (id,nombre,cargaHoraria,cronograma,programa, linksUtiles = null, observacion){
        this.id = id
        this.nombre = nombre
        this.cargaHoraria = cargaHoraria
        this.cronograma = `https://docs.google.com/viewer?srcid=${cronograma}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`
        this.programa = `https://docs.google.com/viewer?srcid=${programa}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`
        this.links = linksUtiles
        this.observacion = observacion
        this.videos = []
        this.apuntesteoricos = []
        this.apuntespracticos = []
        this.juego = null
       
    }

    agregarJuego(juego){
        this.juego = juego
    }
}


class ApuntesT {
        constructor(indice,src,fecha,titulo,tema,tipo,videocorrespondiente,tpcorrespondiente,ejercicios){
            this.indice = indice
            this.src = `https://docs.google.com/viewer?srcid=${src}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`
            this.fecha = fecha
            this.titulo = titulo 
            this.tema = tema
            this.tipo = tipo
            this.correspondencia = videocorrespondiente
            this.tp = tpcorrespondiente
            this.ejercicios = ejercicios
          
        }
            
}

class ApuntesP {
    constructor(indice,src,fecha,titulo,tema,tipo){
        this.indice = indice
        this.src = `https://docs.google.com/viewer?srcid=${src}&pid=explorer&efh=false&a=v&chrome=false&embedded=true`
        this.fecha = fecha
        this.titulo = titulo 
        this.tema = tema
        this.tipo = tipo 
    }
        
}

class Videos{
    constructor(indice,src,fecha,titulo,tema){
        this.indice = indice
        this.src = `https://www.youtube.com/embed/${src}`
        this.fecha = fecha
        this.titulo = titulo
        this.tema = tema
       
    }
}

// Apuntes desde google drive "https://docs.google.com/viewer?srcid=[identificador]&pid=explorer&efh=false&a=v&chrome=false&embedded=true"

// MATEMATICA 1
const matematica1 = new Materias("Mat1","Matemática 1",8,"1uT1fhQkMv1vXHHdp0v7QHHiUzOy0mOPz","1uT1fhQkMv1vXHHdp0v7QHHiUzOy0mOPz",null,"La materia es complicada, la base de EPyL es bastante util al principio, es mucha abstraccion, tu decide si eso es bueno o malo, aunque casi todos los temas son las bases de materias posteriores. La practica es la parte mas fundamental, ademas que hay ejercicios que no sabras si los estas justificando bien o mal. Las clases son teoricas/practicas, lo mejor para este tipo de materias, ademas del apoyo de los videos y los pdfs son bastantes entendibles, aunque las practicas ya es otro tema, aun asi si la sigues quizas no sea tan dificil (2022 mi caso)")

const videoM1 = new Videos(1,"94WQQE-3Fu8","23/08/2022", "Lógica  ","Logica, Formulas Proposicionales, Leyes Logicas")
const videoM2 = new Videos(2,"bl_8qx4a3J8","30/08/2022", "Logica Razonamiento 1 ","Razonamientos, Explicacion, Formalizacion")
const videoM3 = new Videos(3,"GoLXyZ4KaZs","30/08/2022", "Logica Razonamiento 2 ","Razonamientos, Metodo Directo")
const videoM4 = new Videos(4,"9znqg-g4Q0E","30/08/3022","Logica Razonamientos 3 ","Razonamientos, Metodo por el Absurdo" )
const videoM5 = new Videos(5,"7amY_yBIw8g","30/08/3022","Logica Razonamientos 4 ","Razonamientos, Metodo por indirecto" )
const videoM6 = new Videos (6,"5q2BHOp4qfM","02/09/2022","Logica Formulas Proposicionales 1","Formula Proposicional, universal")
const videoM7 = new Videos(7,"eYrcrzDSccY","02/09/2022","Logica Formulas Proposicionales 2", "Cuantificadores: Todos, Algunos")
const videoM8 = new Videos (8,"ismtawrNls0","02/09/2022", "Logica Formulas Proposicionales 3","Negacion de cuantificadores")
const videoM9 = new Videos (9, "wxrZLx-vNuE", "02/09/2022", "Logica Formula Proposicional 4", "Razonamientos con Cuantificadores")
const videoM10 = new Videos(10,"BPzGGxHxUJw","09/09/2022", "Teoria de Conjuntos 1","Conjuntos, Inclucion, Igualdad")
const videoM11 = new Videos(11,"S_xbThZOavE", "09/09/2022", "Teoria de Conjuntos2","Conjuntos de Partes")
const videoM12 = new Videos(12,"nnDthElkkZw","09/09/2022","Teoria de Conjuntos 3","Complemento de un conjunto")
const videoM13 = new Videos (13,"lAZPOA7H-aU", "13/09/2022","Teoria de Conjuntos 4", "Union de Conjuntos")
const videoM14 = new Videos (14,"-1KVvxYHbXw","13/09/2022","Teoria de Conjuntos 5", "Interseccion de Conjuntos")
const videoM15 = new Videos (15,"7PO_R_IzRAY","13/09/2022","Teoria de Conjuntos 6", "Resolucion de Ejercicios de Conjuntos")
const videoM16 = new Videos(16,"Sf5_7xFPnEc","16/09/2022","Teoria de Conjuntos 7","Particion de Conjuntos")
const videoM17 = new Videos(17,"OpzU-sLFCow","16/09/2022","Teoria de Conjuntos 8","Diferencia de Conjuntos")
const videoM18 = new Videos(18,"bBP7lbs9jSA","16/09/2022","Teoria de Conjuntos 9", "Diferencia Simentrica de Conjuntos")
const videoM19 = new Videos(19,"ixZCQU24sC0","16/09/2022","Teoria de Conjuntos 10","Producto Cartesiano entre conjuntos")
const videoM20 = new Videos(20,"zvAaOhuXIuI","23/09/2022","Relaciones 1", "Relaciones Binarias")
const videoM21 = new Videos(21,"vmXgYNUaxqA","23/09/2022","Relaciones 2","Relacion Inversion")
const videoM22 = new Videos(22, "tSw7aJ-3hS4","23/09/2022","Relaciones 3", "Composicion de Relacion")
const videoM23= new Videos(23,"kqJhginNcqw","27/09/2022","Relaciones 4","Relaciones definidas en un conjunto")


const apunteMT1 = new ApuntesT(1,"11FKyBjjHMXqiwRs5N_zYokG_3fizW4-p","23/08/2022","Logica 1","Logica, Formulas Proposicionales, Leyes Logicas","Teorico",1,1,"1-19")
const apunteMT2 = new ApuntesT(2,"1nPrMsmmqCMc2N2qItmjnnD4PgW49k5-h","30/08/2022","Logica 2","Razonamientos y sus metodos","Teorico",[2,3,4,5],1,"19-22")
const apunteMT3 = new ApuntesT(3,"1xmkAVuMJ8-uoqvmMsXOZd1s7p7ra_Zmw","02/09/2022","Logica 3","Formulas Proposicionales y cuantificadores","Teorico",[6,7,8,9],1,"23-Completo")
const apunteMT4 = new ApuntesT(4,"1GSnsPrzKEkvVsIkCa_u0WnXS0rBCIeCX","09/09/2022","Conjuntos 1","Conjuntos, Inlcucion de conjuntos, igualdad entre ellos, propiedades", "Teorico",[10,11,12], 2,"1, 4(a) y 9(a,b,c)")
const apunteMT5 = new ApuntesT(5, "16pedoq2CFpKq-wB5GpDLT-pBFWBoG5bC","13/09/2022","Conjuntos 2", "Union de Conjuntos","Teorico",[13,15],2,"4 (b, d), ")
const apunteMT6 = new ApuntesT(6, "1P0SwldVolZklOVC-LWgTjHJRFUwPrRyk","13/09/2022","Conjuntos 3", "Interseccion de Conjuntos","Teorico",[14,15],2,"4 (b,d)")
const apunteMT7 = new ApuntesT(7,"1dx0josMbQhPW1_ICT88QNwi2yM_zSMnu","16/09/2022","Connjuntos 4","Particion de Conjuntos","Teorico",16,2,"2 (a, b, c), 3 (a, b, c), 4 (c, d), 5 (d), 6, (a, b, c), 7 (a, b, c), 8 (d, e, f) y 10 (b, d)")
const apunteMT8 = new ApuntesT(8,"1ABjxKtjghVV0IfBNRU4ToUiY4zk-X7Ha","16/09/2022","Conjuntos 5", "Diferencia de Conjuntos","Teorico",17,2,"2 (a, b, c), 3 (a, b, c), 4 (c, d), 5 (d), 6, (a, b, c), 7 (a, b, c), 8 (d, e, f) y 10 (b, d)")
const apunteMT9 = new ApuntesT(9,"1GOVJEAOItb_0yVeqj6ST0wQMsMM2XLti","16/09/2022","Conjuntos 6","Diferencia Simetrica","Teorico",18,2,"2 (f, g), 5 (e) y 11 ")
const apunteMT10 = new ApuntesT(10,"1MEOkMDL-dPVfceVctZaNlQMwhQN31jTq","16/09/2022","Conjuntos 7","Producto Cartesiano","Teorico",19,2,"2 (f, g), 5 (e) y 11 ")
const apunteMT11 = new ApuntesT(11,"1SccCLm5Nzy9UW6qzMrxN4RheA2cvD8Sq","23/09/2022","Relaciones 1","Relaciones Binarias, dominio e imagen","Teorico",[20,21],3,[1,2,3])
const apunteMT12 = new ApuntesT(12,"1inWCCMPzolu1owndTkfpBcN3UoafsuD4","23/09/2022","Relaciones 2","Composicion de Relaciones","Teorico",22,3,[1,2,3])
const apunteMT13 = new ApuntesT(13,"13gT6RjIXsslsSnZPI_JZ1dD_d32dVidx","27/09/2022","Relaciones 3","Relacione entre un conjunto","Teorico",23,3,"1,2,3,5")

const apunteMP1 = new ApuntesP(1,"12NetAvDgn7barmTUuDTFfJkD5M8Ifz0R/","23/08/2022","Logica TP","Logica /Razonamientos / Formulas Proposicionales","Practico")
const apunteMP2 = new ApuntesP(2,"1s5rky_xxbQ3SBTHv30Gg-IUU5cIH53Nf","09/09/2022","Conjuntos TP","Teoria de conjuntos / Union / Interseccion","Practico")
const apunteMP3 = new ApuntesP(3,"1EcjjSxA4_-3S0RSBoNkwCfv9SuLR1pyS","23/09/2022","Relaciones","Relaciones entre conjuntos, binaria","Practico")


matematica1.videos.push(videoM1,videoM2,videoM3,videoM4,videoM5, videoM6,videoM7, videoM8, videoM9, videoM10, videoM11,videoM12,videoM13, videoM14,videoM15, videoM16,videoM17, videoM18,videoM19, videoM20,videoM21,videoM22, videoM23)
matematica1.apuntesteoricos.push(apunteMT1,apunteMT2,apunteMT3,apunteMT4,apunteMT5,apunteMT6, apunteMT7,apunteMT8,apunteMT9,apunteMT10,apunteMT11,apunteMT12, apunteMT13)
matematica1.apuntespracticos.push(apunteMP1,apunteMP2, apunteMP3)

//INTRODUCCIONPROGRAMACION
const introduccionProgramacion = new Materias("Inpr","Introducción a la programación",8,"1BEQTT_9Lisq-PX6dEAGoclC6Nr1TjGF8","1n0fOy_9yfjjdQorwG4X_ZN1iOUSoO1XK",`<a href ="https://gobstones.github.io/gobstones-jr/?course=gobstones/curso-InPr-UNQ" target = "_blanck">Entorno Gobstone JR</a> ,<a href="https://gobstones.github.io/gobstones-sr/?course=gobstones/curso-InPr-UNQ" target= "_blank">Entorno Gobstone SR</a>`,"De las 8 hrs semanales se vuelven 6 ya que las dos correspondientes a los miercoles, es para que practiques en tu casa, igual se reservan ese dia y horario para que el examen sea ese dia. Examen en papel aunque todas las clases son en computadora, Si no sabes programar hasta parametros es relativamente facil despues de eso se complica un poco, Si sabes programar, lo que mas te va a costar son los contratos, la sintaxis y algunas cosas raras de gobstone. Clases totalmente invertidas, es decir, la forma de la clase es: indagacion, teoria y luego practica, la cual en clase presencial la idea es que sea solo practica, aunque los profesores te responden cualquier consulta que tengas, los contenidos se van desbloqueando semana a semana y tienen un campus virtual distinto al de la facultad (2022 mi caso)")

const videoI1 = new Videos (1,"JWc58qgRh_A?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm","22/08/2022","Introduccion Gobstones 1","Concepto de gobstones, tablero, bolitas")
const videoI2 = new Videos (2,"f54Jka4phCw?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm","22/08/2022","Introduccion Gobstones 2", "Gobston Jr a Sr")
const videoI3 = new Videos (3, "ao5Utm85j1E?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm", "22/08/2022","Introduccion Gobston 3","Contratos: Proposito y Precondicion")
const videoI4 = new Videos (4,"M-l1xvCkB-8?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm","23/08/2022","Criterios para el curso", "Recomendaciones para seguir el curso")
const videoI5 = new Videos (5, "73tp9JSn57I?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm", "23/08/2022","Procedimientos 1","Definicion y Concepto de procedimiento")
const videoI6 = new Videos (6,"eN_aL4ty7jo?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm","23/08/2022","Procedimientos 2", "Representacion de problemas")
const videoI7 = new Videos (7, "u2hzzbqbZ_0?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm", "23/08/2022","Procedimeintos 3","Estrategias de solucion")
const videoI8 = new Videos (8,"pTNVPETFgbw?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm" ,"30/08/2022","Repeticion Simple", "Definicion y Concepto de repeticion simple")
const videoI9 = new Videos (9,"zi-OaXj7C5s?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm", "30/08/2022","Parametros 1", "Definicion y Concepto de parametros")
const videoI10 = new Videos (10,"KLk4ls1Zg_Y?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm", "30/08/2022", "Parametros 2", "Notacion y Contratos de parametros")
const videoI11 = new Videos (11, "PzVjqnMBvxw?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm", "06/09/2022", "Tipo de datos", "Tipos de datos, restricciones, nuevos operadores")
const videoI12 = new Videos (12, "99KvGq5OW-Y?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm", "13/09/2022", "Alternativa Condicional 1", "Definicion y Concepto de Alternativas")
const videoI13 = new Videos (13, "H-NGOxBY948?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm", "13/09/2022", "Alternativa Condiconal 2", "Booleanos y nuevos operadores")
const videoI14 = new Videos (14, "Q-exxwTe1k8?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm","13/09/2022", "Funciones Simples", "Definicion y Concepto de Funciones Simples")
const videoI15 = new Videos(15,"f6_2r8AQ82M?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm","20/09/2022","Repeticion Condicional 1","Explicacion de Repeticion condicional")
const videoI16 = new Videos (16, "IC0x0jq6rng?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm", "20/09/2022", "Repeticion condicional 2", "Recorrido en repeticion condicional")
const videoI17 = new Videos (17, "qifoeYBOopk?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm","27/09/2022", "Variables y Funciones con Procesamiento 1", "Explicacion de Variables")
const videoI18 = new Videos (18, "VFoLNk5BiyI?list=PLfrTDBDj636aRNJQA19LB7paPuQX_QEpm","27/09/2022", "Variables y Funciones con Procesamiento 2", "Explicacion de Funciones con procesamiento")

const apunteIT1 = new ApuntesT(1,"1Johi8RuxY0pVvyLp55_EPkvkpBY5gQZK","22/08/2022","Introduccion Gobstones","Dinamica de trabajo y concepto generales","Teorico",[1,2,3],1,"Todos")
const apunteIT2 = new ApuntesT(2,"1pOEz_PpA8a6dZ8haUcwl7xDRSszmJ-Lm","23/08/2022","Procedimientos","Procedimientos, Representacion de problemas, Estrategas de solucion","Teorico",[4,5,6,7],2,"Todos")
const apunteIT3 = new ApuntesT(3,"1rWhKM3giRjzjF2p218ZnQesEz3RV9qDx","30/08/2022","Repeticion simple y Parametros","Repeticion Simple, Parametros/notacion y contratos de los mismos","Teorico",[8,9,10],[3,4],"Todos")
const apunteIT4 = new ApuntesT(4,"1fqYF6hhwxvl9A-4pfc_i-O5DVPR907EP","06/09/2022","Tipos de datos","Tipos de datos, restricciones y nuevos operadores","Teorico",11,5,"Todos")
const apunteIT5 = new ApuntesT(5,"1FHWkR4uo0mwIXyZsCF3Mi6SIZv3ghzjy","15/09/2022","Alternativa Condicional y Funciones Simples","Alternativa Condicional, Boleeanos, Funciones Simples","Teoria",[12,13,14],[6,7],"Todos")
const apunteIT6 = new ApuntesT (6,"1GlaRaGrLGuSLn1HjOewOh3RujwTmSU1Q","20/09/2022","Repeticion Condicional","Repeticion COndicional  Recorridos","Teorico",[15,16],8,"Todos")
const apunteIT7 = new ApuntesT(7,"1PUL-NnH4NL-oB8KtfDPk7evXhtFohOqi","27/09/2022","Variables y funciones con procesamiento","Variables y funciones complejas","Teorico",[17,18],8,"Todos")


const apunteIP1 = new ApuntesP(1,"1muIGBNXQbLQExOoUdNUh2B0GO6UX9OUU","22/08/2022","Introduccion Gobstones","Conceptos basicos","Practico")
const apunteIP2 = new ApuntesP(2,"1hvaH7FErP_VY4xv25pBn8IzNSO08ha3f","23/08/2022","Procedimientos","Procedimeintos, problemas y soluciones","Practico")
const apunteIP3 = new ApuntesP(3,"1CsGgCxo5siMhRGgEvdtm9ahs9XJl2v02","30/08/2022","Repeticion Simple","Repeticion simple, casos de borde","Practico")
const apunteIP4 = new ApuntesP(4,"1GxleuNPUmdSSZtpZKMXhmPXCpQdTpnY4","30/08/2022","Parametros","Parametros, contrato y notacion","Practico")
const apunteIP5 = new ApuntesP(5,"1gh2TvC0EZ6iWBZqzEF5atUkbsTv_GPEo","06/09/2022","Tipo de datos","Tipos de datos, nuevos operadores y sensores","Practico")
const apunteIP6 = new ApuntesP(6 ,"1Sel27vSbPD0a-ZvagLo_E_Iv_FMp31ce","15/09/2022","Alternativa Condicional","Condiciones y demas","Practico")
const apunteIP7 = new ApuntesP(7,"14ZdqDixxb6PcJ6ukI4S7GoJph-CcwQQb","15/09/2022","Funciones Simple","Funciones simples ","Practico")
const apunteIP8 = new ApuntesP(8,"1880uAjH23SvMldUT39KN9occrZPC8HnY","20/09/2022","Repeticion Condicional","Repeticion Condicional y Recorridos","Practico")
const apunteIP9 = new ApuntesP(9,"1vmSzReihz6ftnyIQUyhjXvcw72ViR6Q9","27/09/2022","Variables y funciones con procesamiento","Variables y funciones complejas","Practico")

introduccionProgramacion.videos.push(videoI1,videoI2,videoI3,videoI4,videoI5,videoI6,videoI7,videoI8,videoI9,videoI10, videoI11, videoI12, videoI13,videoI14, videoI15,videoI16, videoI17, videoI18)
introduccionProgramacion.apuntespracticos.push(apunteIP1,apunteIP2,apunteIP3,apunteIP4,apunteIP5, apunteIP6, apunteIP7, apunteIP8, apunteIP9)
introduccionProgramacion.apuntesteoricos.push(apunteIT1,apunteIT2,apunteIT3,apunteIT4, apunteIT5, apunteIT6, apunteIT7)


//TALLER TRABAJO UNIVERSITARIO

const tallerTabajoUniversitario = new Materias ("Ttu","Taller de Trabajo Universitario",2,"1s7Q4x-juOhCDfnXP4xyYZ7SvBIG_OQXo","1s7Q4x-juOhCDfnXP4xyYZ7SvBIG_OQXo",null,"La materia se trata sobre la historia de la Universidad en la Argentina, es full teorica, la clase es escuchar al profesor hablar y hablar, lo mas parecido a clase de historia, el tema no es tan aburrido como parece, aunque no esperes que realmente te den ganas de ir. En teoria no hay parciales, se hacen trabajos practicos, cada semana manda la clase escrita y videos, el profesor recomienda primero ver lo audiovisual y luego los textos (2022 mi caso)")

const videoT1 = new Videos(1,"hyYz3tKSPPA","25/08/2022","Historia del sistema Universitario 1","Los Origenes (1600-1820)")
const videoT2 = new Videos(2, "muF3fBNqFJs","03/09/2022", "Historia del sistema Universitario 2", "Ley Avellaneda (1820-1905)")
const videoT3 = new Videos(3,"pc6XeTwhAhk","08/08/2022","Historia del sistema Universitario 3","La Reforma Universitaria (1918-1930)")
const videoT4 = new Videos(4,"61ju4wPcJMc","15/09/2022","Historia Del sistema Universitario 4","Universidad y Trabajo (1946-1955)")

const apunteT1 = new ApuntesT(1,"1augRuBhwtNDwIdI72mruY-BSN1Cx4V6v","25/08/2022","Clase 1","Origenes medievales de la universidad","Teorico",1,null,null)
const apunteT2 = new ApuntesT(2,"1L3hfJaEeXpGxm3j5qbYpiOufTGDUTSVY","03/09/2022","Clase 2","De 1820 a 1900, Ley de Avellaneda","Teorico",[2,3],null,null)
const apunteT3 = new ApuntesT(3,"1ILhJ0IB2tv4Vi3mKQzT-rhoG2700jx4n","15/09/2022","Clase 3 ","Peronismo (1946-1955)","Teorico",4)
const apunteT4 = new ApuntesT(4,"1ex1nE6vgmQJEuPg4sK0PwsCVV2SOdf4T","17/09/2022","TP 1","Historia de la universida y Reforma Universitaria","Practico",[1,2,3,4],"Leer algun texto de la bibliografia optatvia","al menos dos")

const apunteTBO1 = new ApuntesP(1,"1uo690XT8krxhxYc6mjYRtoxr-xXM_vfK","03/09/2022","Bibliografia Optativa 1","Historia de las Universidad Argentinas Pablo Buchbinder","BIbliografia Optativa")
const apunteTBO2 = new ApuntesP(2,"1cU9RYHfzvKLHlYdJfztequKKzln53G3x","03/09/2022","Bibliografia Optativa 2","Historia Argentina (1916-1955) Alejandro Cattaruzza","Bibliografia Optativa")
const apunteTBO3 = new ApuntesP(3,"10rJa_x-sSq9mfOOqX5ngg1I_bDmK8a73","03/09/2022","Bibliografia Optativa 3","Capitulo 5 La reforma Universitaria Pablo Buchbinder","Bibliografia Optativa")
const apunteTBO4 = new ApuntesP(4,"1U1myaVNltfyxXojXmnk9BULyqoLg6z5B","03/09/2022", "Bibliografia Optativa 4","Manifesto Liminar de la Reforma Universitaria Sandra Carli","Bibliografia Otativa")
const apunteTBO5 = new ApuntesP(5,"1kexMCsoImIhXgQjK-0yBfiEKVZWNZtlZ","10/09/2022","Bibliografia Optativa 5","La Juventud Argentina de Cordoba a America, desde la pag 6 hasta que termina ese articulo","Bibliografia Optativa")
const apunteTBO6 = new ApuntesP (6,"1eMVuXTadca-BDLjbRxn-fSh8SwRYAMEC","10/09/2022","Bibliografai Optativa 6","Todo lo que tenes que saber de la Reforma Universitaria","BIbliogarafia Optativa")
const apunteTBO7 = new ApuntesP(7,"13JF-QCvOczxpVgvUB88N5autVGxeRr68","10/09/2022","Bibliografia Optativa 7","La reforma Universitario Pasado-Presente","Bilbiografia Optativa")
const apunteTBO8 = new ApuntesP(8,"1JyDWtRcDJrKEWS0Xw5N3gJom9u6_tytR","17/09/2022","Bibliografia Optativa 8","Cuando los trabajadores salieron de compras","Bilbiografai OPtativa")
const apunteTBO9 = new ApuntesP(9,"1uUxbcpJBLbC3gb8jk14X39G4kjmTkCT0","17/09/2022","Bibliografia Optativa 9","La crisis del MOdelo Reformista","Bibliografia Optativa")
const apunteTBO10 = new ApuntesP(10,"1KScLm6n4r_YbFsLuM_sVHUb_EbZ4CNKs","17/09/2022","Bibliografia Optativa 10", "De zoologicos y carnavales")


tallerTabajoUniversitario.videos.push(videoT1,videoT2,videoT3, videoT4)
tallerTabajoUniversitario.apuntesteoricos.push(apunteT1,apunteT2, apunteT3,apunteT4)
tallerTabajoUniversitario.apuntespracticos.push(apunteTBO1,apunteTBO2,apunteTBO3,apunteTBO4,apunteTBO5,apunteTBO6,apunteTBO7,apunteTBO8,apunteTBO9,apunteTBO10)



//REGISTRO DE MATERIAS

let todasLasMaterias =[]

todasLasMaterias.push(matematica1,introduccionProgramacion,tallerTabajoUniversitario)
