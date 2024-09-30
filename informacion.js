class Materias{
    constructor (id,nombre,cargaHoraria,programa, linksUtiles = null, observacion){
        this.id = id
        this.nombre = nombre
        this.cargaHoraria = cargaHoraria
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

        cambiarPlataforma(link){
            this.src = link
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
    constructor(indice,srca,fecha,titulo,tema){
        this.indice = indice
        this.src = `https://www.youtube.com/embed/${srca}`
        this.fecha = fecha
        this.titulo = titulo
        this.tema = tema
       
    }
    cambiarVideosAOtraPlataforma(link){
        this.src = link
    }
}

// Apuntes desde google drive "https://docs.google.com/viewer?srcid=[identificador]&pid=explorer&efh=false&a=v&chrome=false&embedded=true"

// MATEMATICA 1
const matematica1 = new Materias("Mat1","Matemática 1",8,"1uT1fhQkMv1vXHHdp0v7QHHiUzOy0mOPz",null,"La materia es complicada, la base de EPyL es bastante util al principio, es mucha abstraccion, tu decide si eso es bueno o malo, aunque casi todos los temas son las bases de materias posteriores. La practica es la parte mas fundamental, ademas que hay ejercicios que no sabras si los estas justificando bien o mal. Las clases son teoricas/practicas, lo mejor para este tipo de materias, ademas del apoyo de los videos y los pdfs son bastantes entendibles, aunque las practicas ya es otro tema, aun asi si la sigues quizas no sea tan dificil (2022 mi caso)")

//Videos

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
const videoM23= new Videos(23,"kqJhginNcqw","27/09/2022","Relaciones 4","Relaciones definidas en un conjunto, Relaciones de Equivalencia")
const videoM24 = new Videos(24,"7zd2tHxZuSw","27/09/2022","Relaciones 5","Relaciones de Orden")
const videoM25 = new Videos(25,"HbUMm7k4hDY","14/10/2022","Funciones 1","Clasificacion de las funciones y varias de ellas")
const videoM26 = new Videos(26,"X6HDs6MAocc","18/10/2022","Funciones 2","Igualdad de Funciones")
const videoM27 = new Videos(27,"1CypdaruT5s","21/10/2022","Funciones 3", "Composicion de Funciones")
const videoM28 = new Videos(28,"u67EEWJIqnM","21/10/2022","Funciones 4","Funcion Inversa")
const videoM29 = new Videos(29,"VV1wPpi43HI","1/11/2022","Induccion Matematica","Principio de induccion matematica, Suamtoria, Factorial")
const videoM30 = new Videos(30,"gm5VTLz3S1c","11/11/2022 ","Analisis Combinatorio 1","Concepto de analisis combinatorio y Variaciones")
const videoM31 = new Videos(31,"m4pIJfL6ScM","11/11/2022","Analisis Combinatorio 2","Permutaciones")
const videoM32 = new Videos(32,"4TLs-UA9xwY","11/11/2022","Analisis Combinatorio 3","Combinaciones")
const videoM33 = new Videos(33,"xnrEmtnrAJM","11/11/2022","Analisis Combinatorio 4","Variaciones con repeticiones")
const videoM34 = new Videos(34,"xoNkogGzbjI" ,"11/11/2022","Analisis Combinatorio 5","Binomio de Newton")

//apuntes teoricos

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
const apunteMT14 = new ApuntesT(14,"1drl0zxMPHq6tuu_ntmatO08FwXYzV52I","30/09/2022","Relaciones 4","Relaciones de equivalencias","Teorico",23,3,"")
const apunteMT15 = new ApuntesT(15,"14o6ZjCH0TWLGhKTSYKlPvWxToLivV3q3","30/09/2022","Relaciones 5","Relaciones de Orden","Teorico",24,3,"")
const apunteMT16 = new ApuntesT(16,"1IuMHVyO-GHnVMgyRs1rKo2yMP56Dvc9G","14/10/2022","Funciones 1 a ","Funciones, Grafica, Dominio","Teorico",null,4,"1")
const apunteMT17 = new ApuntesT(17,"1Ck3d3cvsSCrhA0ItPgy1is6Jagttpkht","14/10/2022","Funciones 1 b","Biyectiva, Intectiva y Sobreyectiva","Teorico",25,4,"Todos")
const apunteMT18 = new ApuntesT(18,"1WZNSFBxw_CsVrlUu87anmiv3GcPxrPYJ","18/10/2022","Funciones 2","Igualdad de funciones, tipos de funciones","Teorico",26,5,"Todos")
const apunteMT19 = new ApuntesT(19,"1LfPeY_zuMNa_wTCcUsM5qiTuy09rRraU","21/10/2022","Funciones 3","Composicion de Funciones","Teorico",27,"","")
const apunteMT20 = new ApuntesT(20,"1sd_J_gPSZ8Xn3_yH7gXq2n7LqRihvdIJ","21/10/2022","Funicones 4","Funcion Inversa","Teorico",28,"","")
const apunteMT21 = new ApuntesT(21,"1oonCS17_AgHduA453DBb8avra_9DDe7F","01/11/2022","Induccion Matematica","Induccion Matematica","Teorico",null,null,null)
const apunteMT22 = new ApuntesT(22,"16ZXZzcv2Gem90uv57m5kt6fjH5w6_QiT","11/11/2022","Combinatoria 1", "Conbinatoria","Teorico",null,null,null)


// apuntes practico
const apunteMP1 = new ApuntesP(1,"12NetAvDgn7barmTUuDTFfJkD5M8Ifz0R/","23/08/2022","Logica TP","Logica /Razonamientos / Formulas Proposicionales","Practico")
const apunteMP2 = new ApuntesP(2,"1s5rky_xxbQ3SBTHv30Gg-IUU5cIH53Nf","09/09/2022","Conjuntos TP","Teoria de conjuntos / Union / Interseccion","Practico")
const apunteMP3 = new ApuntesP(3,"1EcjjSxA4_-3S0RSBoNkwCfv9SuLR1pyS","23/09/2022","Relaciones","Relaciones entre conjuntos, binaria","Practico")
const apunteMP4 = new ApuntesP(4,"18JhaU9aENk9copCSBgA3TcuKkT06YzgH","18/10/2022","Funciones TP","Funciones, composicion, inversa","Practico")
const apunteMP5 = new ApuntesP(5,"1L_z2Xrgrdpj1tZoZ4knWpxU17sD9-HGT","18/10/2022","Funciones TP 2","Ejercictacion funciones","Practico")
const apunteMP6 = new ApuntesP(6,"1xAQgjCS5flpcCZcX_orCwK2WEHxncm0c","01/11/2022","Induccion Matematica","Induccion Matematica","Practico")
const apunteMP7 = new ApuntesP(7,"1tM2vmxB2zLc9-2EhoWRplbvIxhbKRnAz","11/11/2022","Combinatoria", "Combinatoria","Practico")


matematica1.videos.push(videoM1,videoM2,videoM3,videoM4,videoM5, videoM6,videoM7, videoM8, videoM9, videoM10, videoM11,videoM12,videoM13, videoM14,videoM15, videoM16,videoM17, videoM18,videoM19, videoM20,videoM21,videoM22, videoM23, videoM24, videoM25,videoM26,videoM27,videoM28, videoM29,videoM30,videoM31,videoM32,videoM33,videoM34)
matematica1.apuntesteoricos.push(apunteMT1,apunteMT2,apunteMT3,apunteMT4,apunteMT5,apunteMT6, apunteMT7,apunteMT8,apunteMT9,apunteMT10,apunteMT11,apunteMT12, apunteMT13, apunteMT14, apunteMT15,apunteMT16, apunteMT17, apunteMT18,apunteMT19, apunteMT20,apunteMT21 ,apunteMT22)
matematica1.apuntespracticos.push(apunteMP1,apunteMP2, apunteMP3, apunteMP4, apunteMP5,apunteMP6, apunteMP7)

//INTRODUCCIONPROGRAMACION
const introduccionProgramacion = new Materias("Inpr","Introducción a la programación",8,"1n0fOy_9yfjjdQorwG4X_ZN1iOUSoO1XK",`<a href ="https://gobstones.github.io/gobstones-jr/?course=gobstones/curso-InPr-UNQ" target = "_blanck">Entorno Gobstone JR</a> ,<a href="https://gobstones.github.io/gobstones-sr/?course=gobstones/curso-InPr-UNQ" target= "_blank">Entorno Gobstone SR</a>`,"De las 8 hrs semanales se vuelven 6 ya que las dos correspondientes a los miercoles, es para que practiques en tu casa, igual se reservan ese dia y horario para que el examen sea ese dia. Examen en papel aunque todas las clases son en computadora, Si no sabes programar hasta parametros es relativamente facil despues de eso se complica un poco, Si sabes programar, lo que mas te va a costar son los contratos, la sintaxis y algunas cosas raras de gobstone. Clases totalmente invertidas, es decir, la forma de la clase es: indagacion, teoria y luego practica, la cual en clase presencial la idea es que sea solo practica, aunque los profesores te responden cualquier consulta que tengas, los contenidos se van desbloqueando semana a semana y tienen un campus virtual distinto al de la facultad (2022 mi caso)")

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
const apunteIT8 = new ApuntesT(8,"1w_z1MwdQC_TqP2m_Aa2qiD9OA4tJ23f9","11/10/2022","Registros y Variantes","Tipos de Datos Personalizados","Teorico",null,11,"Todos los ejercicios")
const apunteIT9 = new ApuntesT(9,"1AUEn1Chwyd4bcNJ2kK0sFs7QkNYE0Lem","25/10/2022","Listas","Indagacion listas","Teorico",null,12,"Todos")
const apunteIT10 = new ApuntesT(10,"1vLYZxeO9ssD2jc5xJjjwYefz3oRcEmU0","25/10/2022","Listas","Listas","Teorico",null,12,"Todos")
const apunteIT11 = new ApuntesT(11,"1iEjunf-ulyHtbWGqP_4YH2F-tiKzZ5ys","25/10/2022","Listas","Procesamiento listas","Teorico",null,12,"Todos")

const apunteIP1 = new ApuntesP(1,"1muIGBNXQbLQExOoUdNUh2B0GO6UX9OUU","22/08/2022","Introduccion Gobstones","Conceptos basicos","Practico")
const apunteIP2 = new ApuntesP(2,"1hvaH7FErP_VY4xv25pBn8IzNSO08ha3f","23/08/2022","Procedimientos","Procedimeintos, problemas y soluciones","Practico")
const apunteIP3 = new ApuntesP(3,"1CsGgCxo5siMhRGgEvdtm9ahs9XJl2v02","30/08/2022","Repeticion Simple","Repeticion simple, casos de borde","Practico")
const apunteIP4 = new ApuntesP(4,"1GxleuNPUmdSSZtpZKMXhmPXCpQdTpnY4","30/08/2022","Parametros","Parametros, contrato y notacion","Practico")
const apunteIP5 = new ApuntesP(5,"1gh2TvC0EZ6iWBZqzEF5atUkbsTv_GPEo","06/09/2022","Tipo de datos","Tipos de datos, nuevos operadores y sensores","Practico")
const apunteIP6 = new ApuntesP(6 ,"1Sel27vSbPD0a-ZvagLo_E_Iv_FMp31ce","15/09/2022","Alternativa Condicional","Condiciones y demas","Practico")
const apunteIP7 = new ApuntesP(7,"14ZdqDixxb6PcJ6ukI4S7GoJph-CcwQQb","15/09/2022","Funciones Simple","Funciones simples ","Practico")
const apunteIP8 = new ApuntesP(8,"1880uAjH23SvMldUT39KN9occrZPC8HnY","20/09/2022","Repeticion Condicional","Repeticion Condicional y Recorridos","Practico")
const apunteIP9 = new ApuntesP(9,"1vmSzReihz6ftnyIQUyhjXvcw72ViR6Q9","27/09/2022","Variables y funciones con procesamiento","Variables y funciones complejas","Practico")
const apunteIP10 = new ApuntesP(10,"1L59pzTE7EYiqGSl97SllHRIxhGSJvwet","06/10/2022","Ejercicios PreParcial","Gobs-Man, Ms. GobsMan, Integrador Zelda","Practico")
const apunteIP11 = new ApuntesP(11,"1n6aIhIjG7Q2Gv-8VJ_tfXTrk6Stbz7Qy","11/10/2022","Tipos de Datos Personalizados","Tipos de Datos Personalizados","Practico")
const apunteIP12 = new ApuntesP(12,"1Wggckpj7m3xB_K1caO5kgEHOLCSNz-mf","25/10/2022","Listas","Listas y recorridos","Practico")
const apunteIP13 = new ApuntesP(13,"1orKCA541Pp-AQGxtLgeghID9Fxxd9EWq","31/10/2022","Ejercicio PreParcial 2","Comidas Gobianas, Gobsmart, Pokemon","Practico")

introduccionProgramacion.videos.push(videoI1,videoI2,videoI3,videoI4,videoI5,videoI6,videoI7,videoI8,videoI9,videoI10, videoI11, videoI12, videoI13,videoI14, videoI15,videoI16, videoI17, videoI18)
introduccionProgramacion.apuntespracticos.push(apunteIP1,apunteIP2,apunteIP3,apunteIP4,apunteIP5, apunteIP6, apunteIP7, apunteIP8, apunteIP9, apunteIP10, apunteIP11, apunteIP12, apunteIP13)
introduccionProgramacion.apuntesteoricos.push(apunteIT1,apunteIT2,apunteIT3,apunteIT4, apunteIT5, apunteIT6, apunteIT7, apunteIT8, apunteIT9, apunteIT10, apunteIT11)


//TALLER TRABAJO UNIVERSITARIO

const tallerTabajoUniversitario = new Materias ("Ttu","Taller de Trabajo Universitario",2,"1s7Q4x-juOhCDfnXP4xyYZ7SvBIG_OQXo",null,"La materia se trata sobre la historia de la Universidad en la Argentina, es full teorica, la clase es escuchar al profesor hablar y hablar, lo mas parecido a clase de historia, el tema no es tan aburrido como parece, aunque no esperes que realmente te den ganas de ir. En teoria no hay parciales, se hacen trabajos practicos, cada semana manda la clase escrita y videos, el profesor recomienda primero ver lo audiovisual y luego los textos (2022 mi caso)")

const videoT1 = new Videos(1,"hyYz3tKSPPA","25/08/2022","Historia del sistema Universitario 1","Los Origenes (1600-1820)")
const videoT2 = new Videos(2, "muF3fBNqFJs","03/09/2022", "Historia del sistema Universitario 2", "Ley Avellaneda (1820-1905)")
const videoT3 = new Videos(3,"pc6XeTwhAhk","08/08/2022","Historia del sistema Universitario 3","La Reforma Universitaria (1918-1930)")
const videoT4 = new Videos(4,"61ju4wPcJMc","15/09/2022","Historia Del sistema Universitario 4","Universidad y Trabajo (1946-1955)")
const videoT5 = new Videos(5,"8mTSzd0C1EM","13/10/2022","Historia del sistema Universitario","Laica o Libre")
const videoT6 = new Videos(6,"nULmeM7K508","21/10/2022","Hsitoria del sistema Universitario","Universidad y dictadura")


const apunteT1 = new ApuntesT(1,"1augRuBhwtNDwIdI72mruY-BSN1Cx4V6v","25/08/2022","Clase 1","Origenes medievales de la universidad","Teorico",1,null,null)
const apunteT2 = new ApuntesT(2,"1L3hfJaEeXpGxm3j5qbYpiOufTGDUTSVY","03/09/2022","Clase 2","De 1820 a 1900, Ley de Avellaneda","Teorico",[2,3],null,null)
const apunteT3 = new ApuntesT(3,"1ILhJ0IB2tv4Vi3mKQzT-rhoG2700jx4n","15/09/2022","Clase 3 ","Peronismo (1946-1955)","Teorico",4)
const apunteT4 = new ApuntesT(4,"1ex1nE6vgmQJEuPg4sK0PwsCVV2SOdf4T","17/09/2022","TP 1","Historia de la universida y Reforma Universitaria","Practico",[1,2,3,4],"Leer algun texto de la bibliografia optatvia","al menos dos")
const apunteT5 = new ApuntesT (5,"1g06VVazJWXLqd0BCb5Yy1cVd_0CBm6x_","13/10/2022","Clase 4","El fin de la República de masas","Teorico",5) 


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
const apunteTBO11 = new ApuntesP(11,"1_Rxq9uwvjVPqq1edA2IxJUtMWa2P2Dmk","13/10/2022","Bibliografia Optativa 11","La Mensula ¿Laica o LIbre?","Bibliografia Optativa")

tallerTabajoUniversitario.videos.push(videoT1,videoT2,videoT3, videoT4, videoT5)
tallerTabajoUniversitario.apuntesteoricos.push(apunteT1,apunteT2, apunteT3,apunteT4, apunteT5)
tallerTabajoUniversitario.apuntespracticos.push(apunteTBO1,apunteTBO2,apunteTBO3,apunteTBO4,apunteTBO5,apunteTBO6,apunteTBO7,apunteTBO8,apunteTBO9,apunteTBO10, apunteTBO11)

// ORGANIZACION DE COMPUTADORAS

const orga = new Materias("Orga", "Organizacion de Computadoras", 6, "1zl-NYaHDeqwA4e4eycBC8z6NkdBvCanY" , `<a href=http://orga.blog.unq.edu.ar target = "_blanck">blog</a>`, "Muy buena materia, comoda con el alumno, no seguir a pie de letra el libro y las practicas porque la van actualizando siempre, el blog tiene toda informacion necesaria, Comision 2, Primer Cuatrimestre 2023")


const videosOrga1 = new Videos(1,"","1/4/2023","Unidad 1","Sistema Binario")
videosOrga1.cambiarVideosAOtraPlataforma("https://archive.org/details/UNQ-U1-bss")
const videosOrga2 = new Videos(2,"","1/4/2023","Unidad 2","Q1 y ciclo de vida")
videosOrga2.cambiarVideosAOtraPlataforma("https://archive.org/details/orga-ciclo-de-vida")
const videosOrga3 = new Videos(3,"","1/4/2023","Unidad 3","Logica Digital")
videosOrga3.cambiarVideosAOtraPlataforma("https://archive.org/details/UNQ-U3-logica-digital")
const videosOrga4 = new Videos(4,"","1/4/2023","Unidad 4","Memoria Principal y Buses Q2")
videosOrga4.cambiarVideosAOtraPlataforma("https://archive.org/details/UNQ-U4-memoria-buses")
const videosOrga5 = new Videos(5,"","1/4/2023","Unidad 5","Rutinas Q3")
videosOrga5.cambiarVideosAOtraPlataforma("https://archive.org/details/UNQ-U5-rutinas")
const videosOrga6 = new Videos(6,"","1/4/2023","Unidad 6","Sistema Enteros")
videosOrga6.cambiarVideosAOtraPlataforma("https://archive.org/details/u-6-sm")
const videosOrga7 = new Videos(7,"","1/4/2023","Unidad 8","Mascaras-Repeticiones")
videosOrga7.cambiarVideosAOtraPlataforma("https://archive.org/details/UNQ-u8-mascaras-repeticions")
const videosOrga8 = new Videos(8,"","1/4/2023","Unidad 9","Arreglos")
videosOrga8.cambiarVideosAOtraPlataforma("https://archive.org/details/UNQ-u9-arreglos")
const videosOrga9 = new Videos(9,"","1/4/2023","Unidad 10","Subsistema de memoria, Memoria Cache")
videosOrga9.cambiarVideosAOtraPlataforma("https://archive.org/details/UNQ-u10-memoria")
const videosOrga10 = new Videos(10,"","1/4/2023","Unidad 11","Sistema Fraccionarios")
videosOrga10.cambiarVideosAOtraPlataforma("https://archive.org/details/u-11-1-intro-punto-fijo")



const apunteTOrga = new ApuntesT(1,"1Z2FwekNtOzq1c-ZuAWJL2P3hD9BSUlIj","1/7/2023","Libro de Orga UNQ V0.34","Sistema de numeracion, Logica Digital, Q1, Q2, Q3, Q4, Q5, Arreglos, Memoria Cache","Teorico","Todos","Todos","Todos")


const apuntePOrga1 = new ApuntesP(1,"1DlIhcCmtQUG6L4x3UP8UVXfbO6CKH3oy","1/4/2023","Practica 1","Sistema de numeracion Natural","Practico")
const apuntePOrga2 = new ApuntesP(2,"15ubyvojwBcCRylnZXXqQIP0NUg9X6crM","1/4/2023","Practica 2","Q1","Practico")
const apuntePOrga3 = new ApuntesP(3,"1M4L9wjWJBP-FkjeZS_njxJagiaiOzoFb","1/4/2023","Practica 3","Logica Digital","Practico")
const apuntePOrga4 = new ApuntesP(4,"1GbAzin9LT00xFAhYYB0TIP4xMQpuGOi9","1/4/2023","Practica 4","Q2","Practico")
const apuntePOrga5 = new ApuntesP(5,"1BaRPGm5x-jpZpLHSZMnaxwaaUDlJ-Inx","1/4/2023","Practica 5","Sistemas Enteros","Practico")
const apuntePOrga6 = new ApuntesP(6,"1bxbDGXrg_hiF6ScBaRNC1LZ-ZNy4KD4t","1/4/2023","Practica 6","Q3, Rutinas","Practico")
const apuntePOrga7 = new ApuntesP(7,"1--mZK6yRBygoadvLTnIf-LXb_oucnZHs","1/4/2023","Practica 7","Q4, Saltos","Practico")
const apuntePOrga8 = new ApuntesP(8,"1vlt7bsa-4GdkrRFjwFoJzEwwJ7VD2eTL","1/4/2023","Practica 8","Q5, Repeticiones y mascaras","Practico")
const apuntePOrga9 = new ApuntesP(9,"1jNF7UXZlwS12Dc7eNT9hOPvX0eSOPd5t","1/4/2023","Practica 9","Q6, Arreglos","Practico")
const apuntePOrga10 = new ApuntesP(10,"1fc_HtURAokHpoelCPDxtQ1YYMkFT1EZq","1/4/2023","Practica 10","Ssitemas Fraccionarios","Practico")
const apuntePOrga11 = new ApuntesP(11,"1zu-Z0A7mu8_LP6hgIh6cLdQOPilLY0yS","1/4/2023","Practica 11","Memoria Cache","Practico")

orga.videos.push(videosOrga1,videosOrga2,videosOrga3,videosOrga4,videosOrga5,videosOrga6,videosOrga7,videosOrga8,videosOrga9,videosOrga10)
orga.apuntesteoricos.push(apunteTOrga)
orga.apuntespracticos.push(apuntePOrga1,apuntePOrga2,apuntePOrga3,apuntePOrga4,apuntePOrga5,apuntePOrga6,apuntePOrga7,apuntePOrga8,apuntePOrga9,apuntePOrga10,apuntePOrga11)

// ESTRUCTURA DE DATOS

const estructuradDeDatos = new Materias("Estrd", "Estructura de Datos", 8,  "1DVThf_x4QrWbtlv3FEQLVjpCl7HpPCIq", "","")

const videosEstrd1 = new Videos(1,"CW09lRWB1cY?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 1","Tipos Algebraicos")
const videosEstrd2 = new Videos(2,"AuzMeB7XXE8?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 2","Listas y Recursion Estructural")
const videosEstrd3 = new Videos(3,"EewENzmemDE?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 3","Tipos Algebraicos Recursivos")
const videosEstrd4 = new Videos(4,"-uoj0NMj3fQ?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 4","Repaso 1")
const videosEstrd5 = new Videos(5,"4oNVo2qcYk4?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 5","Tipos Abstractos de datos 1")
const videosEstrd6 = new Videos(6,"hmXWEqI4HfQ?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 6","Tipos Abstractos de datos 2")
const videosEstrd7 = new Videos(7,"aSQmW__iWpc?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 7","Tipos Abstractos de datos 3")
const videosEstrd8 = new Videos(8,"BN28qFArYkw?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 8","Repaso 2")
const videosEstrd9 = new Videos(9,"-AVvybCqFiE?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 9","Modelo Imperativo")
const videosEstrd10 = new Videos(10,"abli7OdhazQ?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 10","Puntero y Arrays")
const videosEstrd11 = new Videos(11,"zo9z5ngShvY?list=PL6lbGW3UNWzwDvcKTCyGlNBeEtHvdKzKk","1/4/2023","Clase 11","Linked List")



const apunteTestrd1 = new ApuntesT(1,"1j9ovAKwbHFMbDgZT7MKcEPXKLm44d2w6","1/4/2023","Clase 1","Tipos Algebraicos","Teorico",1,1,"Todos")
const apunteTestrd2 = new ApuntesT(2,"15Np56bMPyJ6M3KHizAF4hJgPknO-zBjK","1/4/2023","Clase 2","Listas y Recursion estructural","Teorico",2,2,"Todos")
const apunteTestrd3 = new ApuntesT(3,"1HxiA6fTJTE9fSu8NF8BFimyDxvJLStgH","1/4/2023","Clase 3","Tipos Algebraicos recursivos y recursion estructural","Teorico",3,3,"Todos")
const apunteTestrd4 = new ApuntesT(4,"13gIzyQx1nz2Au9VhcrfAchozk02HRkvu","1/4/2023","Clase 4","Repaso 1","Teorico",4,4,"Todos")
const apunteTestrd5 = new ApuntesT(5,"17GfcVxKPlT7prlhfnv9cVQfHOnITalQ5","1/4/2023","Clase 5","Tipos Abstractos 1 (Stack, Queue, Set)","Teorico",5,5,"Todos")
const apunteTestrd6 = new ApuntesT(6,"1Sp3x_WiItLwV-bq3dDKwbNkkcuXA5oAf","1/4/2023","Clase 6","Tipos Abstractos 2 (Multisets, Maps y Priority Queue)","Teorico",6,6,"Todos")
const apunteTestrd7 = new ApuntesT(7,"1BPpYtQjP95rTk5ErHWH07J_P4Fcp3yU1","1/4/2023","Clase 7","Tipos Abstractos 3 (Heaps, BSTs y AVLs)","Teorico",7,7,"Todos")
const apunteTestrd8 = new ApuntesT(8,"1DObebMQEcLvIvOYic8tGXVnLoqyNSyTq","1/4/2023","Clase 8","Repaso 2","Teorico",8,8,"Todos")
const apunteTestrd9 = new ApuntesT(9,"1HMgy2qwRzQvzdCqpXzd6V7szSJJO3usE","1/4/2023","Clase 9","Modelo Imperativo","Teorico",9,9,"Todos")
const apunteTestrd10 = new ApuntesT(10,"1JjGby5F1DjtcO77hWJsQaB7bMP3ngpAH","1/4/2023","Clase 10","Puntero y Arrays","Teorico",10,10,"Todos")
const apunteTestrd11 = new ApuntesT(11,"14LbdZzYaDSydLek7S8xzY38LrgSN5AP0","1/4/2023","Clase 11","Linked List y arboles en imperativo","Teorico",11,11,"Todos")

const apuntePestrd1 = new ApuntesP(1,"1MXNflDHKp8Fwt4UFabdIxv38W9gUDJ-F","1/4/2023","Practica 1","Tipos Algebraicos","Practico")
const apuntePestrd2 = new ApuntesP(2,"1VVMRldVtH3G28sxIlhkx3iFWZoEP8c1N","1/4/2023","Practica 2","Listas y Recursion Estrucutral","Practico")
const apuntePestrd3 = new ApuntesP(3,"1sDmFx4Mza7vmZNiRDPDPfycVizeCEYOL","1/4/2023","Practica 3","Tipos algebraicos recursivos","Practico")
const apuntePestrd4 = new ApuntesP(4,"1Lxzfz9dSxjgXSrc1SyjjJnaLDr37vh5q","1/4/2023","Practica 4","Repaso","Practico")
const apuntePestrd5 = new ApuntesP(5,"1Sx58qvHFNc0WVVDncjJ9pUIJkUfHiRUJ","1/4/2023","Practica 5","Tipos Abstractos 1","Practico")
const apuntePestrd6 = new ApuntesP(6,"10g1itzC_qJNLMyHtH9U8xXrVuUKJJ_NN","1/4/2023","Practica 6","Tipos Abstractos 2","Practico")
const apuntePestrd7 = new ApuntesP(7,"1uJ5IKmV1JVn8KbseHFAZ5lYtGNoTvQoe","1/4/2023","Practica 7","Heaps, Bsts","Practico")
const apuntePestrd8 = new ApuntesP(8,"1N5iTESeI9nD4LieP8PnQM9EKPAZ5xSD","1/4/2023","Practica 8","Repaso 2 (unidos)","Practico")
const apuntePestrd9 = new ApuntesP(9,"1T-9TLD1ndd90MoMnUBuKM_1AwEEyC53e","1/4/2023","Practica 9","Modelo Imperativo","Practico")
const apuntePestrd10 = new ApuntesP(10,"1_x-b4r52_4mIMPJst4850TZ8JVffgmyh","1/4/2023","Practica 10","Puntero y Arrays","Practico")
const apuntePestrd11 = new ApuntesP(11,"1c31s97Cu5f6Umy0kqQGBCB7qdSzDZsx8","1/4/2023","Practica 11","Linkedin list y arboles en impertativo","Practico")


estructuradDeDatos.videos.push(videosEstrd1,videosEstrd2,videosEstrd3,videosEstrd4,videosEstrd5,videosEstrd6,videosEstrd7,videosEstrd8,videosEstrd9,videosEstrd10,videosEstrd11)
estructuradDeDatos.apuntesteoricos.push(apunteTestrd1,apunteTestrd2,apunteTestrd3,apunteTestrd4,apunteTestrd5,apunteTestrd6,apunteTestrd7,apunteTestrd8,apunteTestrd9,apunteTestrd10,apunteTestrd11)
estructuradDeDatos.apuntespracticos.push(apuntePestrd1,apuntePestrd2,apuntePestrd3,apuntePestrd4,apuntePestrd5,apuntePestrd6,apuntePestrd7,apuntePestrd8,apuntePestrd9,apuntePestrd10,apuntePestrd11)


// PROGRAMACION ORIENTADA A OBJETOS 1

const objetos1 = new Materias("obj1", "Programacion orientado a Objetos 1",8, "1go2lxBuBd8JZGamaMMTqZS6FQMKoif-F",`<a href="https://sites.google.com/view/unq-cpi-obj1-c1/home?authuser=0" target="_blank">Pagina de la materia</a>`,null)

const apunteTobj1 = new ApuntesT(1,"1FbMbK0s67lSzHjA80Dklm1d6QTDo23jx","1/4/2023","Dispositivas Primera Clase","Principios Programacion orientada a Objetos","Teorica",null,null,null)
const apunteTobj2 = new ApuntesT(2,"19QFQwrxQd546rAxdoryTj-8oQ69gN6Di","1/4/2023","Cuis University","Cuis University","Teorica",null,null,null)
const apunteTobj3 = new ApuntesT(3,"173wK5NS7aV1eGcXGGDmx31KJDeKdOrxW","1/4/2023","TDD","Concepto y Utilidad del TDD","Teorica",null,null,null)
const apunteTobj4 = new ApuntesT(4,"1WhSpvFnwW_BHdPQqk-Tv6O1OqXA8TuYs","1/4/2023","Delegacion y Doble Dispatch","Delegacion y Doble Dispatch","Teorica",null,null,null)
const apunteTobj5 = new ApuntesT(5,"1gTnZ8gvYce9BlezCYQ-FSEs2YgmRVfno","1/4/2023","Colecciones","Distintas Colecciones y sus mensajes","Teorica",null,null,null)

const apuntePobj1 = new ApuntesP(1,"1wcrS2t0L36fJP7OLaRsVeCn_gdqXH_es","1/4/2023","Practica 1","Objetos denotativos","Practico")
const apuntePobj2 = new ApuntesP(2,"1hxCKlVlQgiFpEbhiu98dA9hQVx3Rf2Xw","1/4/2023","Practica 2","Clases y Colecciones","Practico")
const apuntePobj3 = new ApuntesP(3,"1paqbXeLCbuUc_2gQaOXW5d9Wwm5vxObB","1/4/2023","Practica 3","Mas Clases","Practico")

objetos1.apuntesteoricos.push(apunteTobj1,apunteTobj2,apunteTobj3,apunteTobj4,apunteTobj5)
objetos1.apuntespracticos.push(apuntePobj1,apuntePobj2,apuntePobj3)

// Redes de Computadoras

const redes = new Materias("red","Redes de Computadoras",6,null,null,null)


const apunteTred1 = new ApuntesT(1,"","15/8/2023","Libro de la Materia","Redes de computadores Tanenbaum","Teorico",null,null,"")
apunteTred1.cambiarPlataforma("https://bibliotecavirtualapure.wordpress.com/wp-content/uploads/2015/06/redes_de_computadoras-freelibros-org.pdf")

redes.apuntespracticos.push( 
    new ApuntesP(1,"1viohzSl2pXYO7FDTpAI1cBWLJjmmgckB","15/8/2023","Practica 1","Introduccion","Practico"),
    new ApuntesP(2,"16-2skzQm_nah0K_dxu-qvJAFx86E_Jix","15/8/2023","Practica 2","DNS","Practico"),
    new ApuntesP(3,"1BF2qyOdibjKPCR-wVLV6Eas_MT5WIE7p","15/8/2023","Laboratorio 2","DNS","Laboratorio"),
    new ApuntesP(4,"1F33fPxhPJRKQ7jjYhLtGfVDTCHuov6Qg","15/8/2023","Practica 3","World Wide Web","Practico"),
    new ApuntesP(5,"1aSpTHMmkXdUbwxsIixg8A7IzdRwccAGk","15/8/2023","Laboratorio 3","World Wide Web","Laboratorio"),
    new ApuntesP(6,"1Bf9qkb5FbVV6u2knIs87p5AEpVy9ZoVX","15/8/2023","Practica 4","Correo Electronico","Practico"),
    new ApuntesP(7,"1j0F0272b6aU29mQAXLqVLF5zlzVhsGHg","15/8/2023","Laboratorio 4","Correo Electronico","Laboratorio"),
    new ApuntesP(8,"1xFC8Whgh_mfnrN7awOQGMF4o2Wz4TW9r","15/8/2023","Practica 5","Transporte","Practico"),
    new ApuntesP(9,"1Y59FOVJ8o9AxdYkdwVPGAfxtuoPE4F8k","15/8/2023","Laboratorio 5","Transporte","Laboratorio"),
    new ApuntesP(10,"1Vyk6NbIJpfRuRW4ea9sgVva81Df23K4l","15/8/2023","Practica 6","Red","Practico"),
    new ApuntesP(11,"1Fd8MuYHHSYGQ-_v_2z8tqGH4OWKGXCod","15/8/2023","Laboratorio 6","Red","Laboratorio"),
    new ApuntesP(12,"1cSsjS_0XIeevKXAAcpsr__CL1679LFbC","15/8/2023","Laboratorio Extra","DHCP","Laboratorio"),
    new ApuntesP(13,"1a3i2mdz35Hv2vDKHrGevYS0uLcHSDuEI","15/8/2023","Practica 7","Enlace de datos - MAC","Practico"),
    new ApuntesP(14,"12ujfX7yCjdIqTl2AT5eU6fAfbydXunb4","15/8/2023","Laboratorio 7","Enlace de datos - VLAN","Laboratorio"),
    new ApuntesP(15,"1g-k7SRJxNRUoJx4bbLNEOimD5X1sFSuC","15/8/2023","Laboratorio Extra","NAT","Laboratorio")
)

redes.apuntesteoricos.push(
    apunteTred1,
    new ApuntesT(2,"1kESMQUtksz3ITWyclTd_P0dgozOkgiTv","15/8/2023","Presentacion","Intro Osi","Teorico","","",""),
    new ApuntesT(3,"1WUk48PmIVFaW3uUdOc25vNNcPBRw8YpV","15/8/2023","Aplicacion 1","Capa de  Aplicacion","Teorico","","",""),
    new ApuntesT(4,"1pnVMIeeVTFhsQU2-nVgzoBdKk2UBbyBg","15/8/2023","Aplicacion 2","SMTP - POP","Teorico","","",""),
    new ApuntesT(5,"1tGeHEOAQRmKw3onQ3PusW-ncOaQlmOyN","15/8/2023","Aplicacion 3","HTML","Teorico","","",""),
    new ApuntesT(6,"1-A1KHxfvSXVw_XK0VUA2is8m-RNo8quo","15/8/2023","Aplicacion 4","HTTP","Teorico","","",""),
    new ApuntesT(7,"19R7OFdemXEIANo_E_A6PnXk5OS0iEqrS","15/8/2023","Aplicacion 5","DHCP","Teorico","","",""),
    new ApuntesT(8,"12syTt5yQi4kq2pjKfCy44H5CnB8tyZPd","15/8/2023","Transporte","Capa de Transporte","Teorico","","",""),
    new ApuntesT(9,"1YfCWxHBzSThAR8ZTeACVCCHi003ID12Q","15/8/2023","Red 1","Capa De Red","Teorico","","",""),
    new ApuntesT(10,"1s9Zz7gRHpxhvWY3Y2Gphia1VpNbm6Nix","15/8/2023","Red 2","Subneteo","Teorico","","",""),
    new ApuntesT(11,"15VDVFhmIRmJ4mEFbZnmq_6G04gd9S2uO","15/8/2023","Red 3","Ruteo","Teorico","","",""),
    new ApuntesT(12,"17AEfl3qzuaQNMCXrnBjGPetfytnpE-67","15/8/2023","Protocolocs Auxiliares 1","Protocolo ICMP","Teorico","","",""),
    new ApuntesT(13,"1cLWUD4g1s7WtW-nKxhOcPQlFyzCcZASX","15/8/2023","Protocolos Auxiliares 2","Protocolo Nat","Teorico","","",""),
    new ApuntesT(14,"1Vzd6ZHp0Sf0Z1J_Mge_WjuJg2EebeNSk","15/8/2023","Enlace","Capa de Enlace","Teorico","","",""),
    new ApuntesT(15,"1-kB5IoAP1xFjSi_JmO4E6pQmj4162fHn","15/8/2023","Enlace 2","Protocolo ARP","Teorico","","",""),
)





// Base de Datos

const bsd = new Materias("bsd","Base de Datos", 6, null,null,null)

bsd.videos.push(
    new Videos(1,"IaSKuNzFHEg","6/7/2024","1 Clase Teorica BSD","Introduccion de DBMS"),
    new Videos(2,"RH7UJeZHbA0","6/7/2024","2 Clase Teorica BSD","MER"),
    new Videos(3,"BPT8oeF0LnM","6/7/2024","3 Clase Teorica BSD","MR: Modelo relacional"),
    new Videos(4,"f6B-uKeKXmA","6/7/2024","4 Clase Teorica BSD","MR: mapeo de entidades y relaciones MER"),
    new Videos(5,"31XrdUYiYQw","6/7/2024","5 Clase Teorica BSD","MR: relaciones recursivas"),
    new Videos(6,"zfctP6PpJsw","6/7/2024","6 Clase Teorica BSD","MER, MR ,SQL/DDL"),
    new Videos(7,"NsqnkUGZLMM","6/7/2024","7 Clase Teorica BSD","SQL - Clase 1"),
    new Videos(8,"-9eiwxURAvQ","6/7/2024","8 Clase Teorica BSD","SQL - Clase 2"),
    new Videos(9,"9FROGCaFaEQ","6/7/2024","9 Clase Teorica BSD","SQL - Clase 3"),
    new Videos(10,"uK_Wj-Tip-s","6/7/2024","10 Clase Teorica BSD","SQL - Clase 4")
)

bsd.apuntesteoricos.push(
    new ApuntesT(1,"1T59DHzc6tmpzVxCjtkKrMvUSv10lG6L2","10/7/2024","Teorica 1","MER-MR","Teorico","","",""),
    new ApuntesT(2,"1n4nSnauiChPmUFt31P-K0fryaCYcRiWv","10/7/2024","Teorica 2","MR","Teorico","","",""),
    new ApuntesT(3,"1o6RdzzrlNOLkv2btHMagcvbcBRxJTV1s","10/7/2024","Teorica 3","Mapeos","Teorico","","",""),
    new ApuntesT(4,"1KasHuZtsgwwMNnpckKg_a2RWNmY_BBo_","10/7/2024","Teorica 4","SQL","Teorico","","",""),
    new ApuntesT(5,"1-BpJlG0Gx179TcZY-eZ_lVp3AM1jleCI","10/7/2024","Extra","Explicacion Cardinalidades","Teorico","","",""),
    new ApuntesT(6,"1OVqApxqdt26MC65C4SC1y2PHcCxdhQM9","10/7/2024","Teorica 5","AR","Teorico","","",""),
    new ApuntesT(7,"1G_8IE7POdbmZCvymCXyPJmztSxxSyhX0","10/7/2024","Extra","Renombre","Teorico","","",""),
    new ApuntesT(8,"1c2GPuSiJJQZ2N2U0QEE66Xuqv_2o-J6n","10/7/2024","Teorica 6-1","SQL","Teorico","","",""),
    new ApuntesT(9,"1fEfWE1n9uLxR4dkec-af_X537Xbb81LK","10/7/2024","Teorica 6-2","SQL-DDL","Teorico","","",""),
    new ApuntesT(10,"1aexSL6D4zSpGm_aZ9-erZ-F160pXC6sb","10/7/2024","Teorica 6-3","SQL-DML","Teorico","","",""),
    new ApuntesT(11,"1qgxZ_tsWkgTdXHc0aunScJogAPrj1bTM","10/7/2024","Teorica 7","SQL agregation funcion","Teorico","","",""),
    new ApuntesT(12,"1kkxjOqcj7ZRtd0q9NrjSX4wH82gXITeN","10/7/2024","Extra","Having","Teorico","","",""),
    new ApuntesT(13,"1ph_RITnbMQbqV-yssj-EntJ96534UMtW","10/7/2024","Teorica 8","SQL JOINS","Teorico","","",""),
    new ApuntesT(14,"17JkHgMry0wX82C3d1ng6YuRMEmzjnPuu","10/7/2024","Extra","Transacciones","Teorico","","",""),
    new ApuntesT(15,"1uo_jXLouZDB6BkOk6feHZszhwppUCm80","10/7/2024","Extra","Indices, Vsita, Triggers","Teorico","","",""),
    new ApuntesT(16,"13Vs1UR-wuqoQBco2jVRpG269R2WuRdjJ","10/7/2024","Teorica 9-1","Normalizacion - DF y 1FN","Teorico","","",""),
    new ApuntesT(17,"1NSIFNs8eHOl7jL4S3DiGjv0_lSStPjXo","10/7/2024","Teorica 9-2","Normalizaion - 2FN y 3FN","Teorico","","",""),
    new ApuntesT(18,"193jF9uZ3sdQh1jTlyH0vR3uDXCgpRJjj","10/7/2024","Teorica 9-3","Normalizacion DM y 4FN","Teorico","","",""),

)

bsd.apuntespracticos.push(
    new ApuntesP(1,"1D3L-GODYBzvld2J-UwPlJ6yaa1c8FYpO","10/7/2024","Practica 1","Mer - mr","Practica"),
    new ApuntesP(2,"1VPz4Y0mqMVrBzjMujlw8hW1RdqeOrNR8","10/7/2024","Practica 2","Mr - Sql","Practica"),
    new ApuntesP(3,"1ejiV-te6E_qBhfCHNSkoNGyEOWiZ74gs","10/7/2024","Practica 3","Ar","Practica"),
    new ApuntesP(4,"11Mu8HD0BmbegNh0EZYSQHG2ALQo-ECxl","10/7/2024","Practica 4","Ar - Sql","Practica"),
    new ApuntesP(5,"14-dTwzeWSWrBGDyAsK_TG7y6JCbUPhX7","10/7/2024","Practica 5","Sql","Practica"),
    new ApuntesP(6,"1mJGijlcqSvc5SjIqyKs3btEcu6F8M6aJ","10/7/2024","Practica 6","Df","Practica"),
    new ApuntesP(7,"1A6SWCHa6ze2WIz35VGhAY1YcDRRPqjo0","10/7/2024","Practica 7","2FN, 3FN, 4FN","Practica"),

)


// Matematica 2

const mat2 = new Materias("mat2","Matematica 2",4,null,null, null)

const apunteTmat2_1 = new ApuntesT(1,"133y5QjHSjAlnQOHUcbJyXO7Aq8OW6s95","15/8/2023","Matrices 1","Concepto de matrices, propiedades","Teorico",null,1,"1-?")
const apunteTmat2_2 = new ApuntesT(2,"16-5o2U3fbrvnT96qOfjWrRKSGsLw2Jre","15/8/2023","Matrices 2","Producto de matrices","Teorico",null,1,"?-??")
const apunteTmat2_3 = new ApuntesT(3,"1RoieM7qOJkSNwpv6Xv-pPZ2mnC9iZWOc","22/8/2023","Matrices 3","Matrices Inversas","Teorico",null,1,"??-???")
const apunteTmat2_4 = new ApuntesT(4, "1dcBryEvhkg_qNe0a4Xi_PaTLxsD38iFD", "22/8/2023","Matrices 4","Determinantes","Teorico",null,"1","??-???")
const apunteTmat2_5 = new ApuntesT(5, "1k5nKvMQScDxE8SCt9YrJXE2mVD-d5rm0", "05/9/2023","Sistema de ecuaciones","Sistema de ecuaciones","Teorico",null,"2","??-???")
const apunteTmat2_6 = new ApuntesT(6, "1wKJ9aVvyzCbchlCQwx0eeiQzwMXrMKhp", "1/10/2023","Grupos","Grupos","Teorico",null,"3","??-???")
const apunteTmat2_7 = new ApuntesT(7, "1YIBBQvd5xfBA585lzNEsRSn8MT-gY6zx", "15/10/2023","Espacios Vectoriales","Espacio vectoriales","Teorico",null,"4","??-???")
const apunteTmat2_8 = new ApuntesT(8, "1BSP3nUI1KLaMcRgZ7_pS626WaaV4pyFh", "1/10/2023","Divisibilidad en enteros","Divisibilidad en enteros","Teorico",null,"3","??-???")


const apuntePmate2_1 = new ApuntesP(1,"1RjjxT1ue2Aqs-QQrgnlgNIdlyUI8-9b_","15/8/2023","TP 1","Matrices","Practico")
const apuntePmate2_2 = new ApuntesP(2,"1MdZnNJPs8U-9Ks4uHSOR1x0JScwxxSEZ","5/9/2023","TP 2","Sistema de ecuaciones Lineales","Practico")
const apuntePmate2_3 = new ApuntesP(3,"17Xru-IvyzE8G-vhyFJM-woxmACqhrljS","1/10/2023","TP 3","Grupo","Practico")
const apuntePmate2_4 = new ApuntesP(4,"1TXqphH8QIUO7GzFg-zbhOr26I0HmyK9t","1/10/2023","TP 4","Espacio vectorial","Practico")
const apuntePmate2_5 = new ApuntesP(5,"1NEhm_oVEI5ONvSqBJMVZeRVFNPS1SRcr","1/10/2023","TP 5","Divisibilidad en enteros","Practico")

mat2.apuntespracticos.push(apuntePmate2_1, apuntePmate2_2,apuntePmate2_3,apuntePmate2_4,apuntePmate2_5)
mat2.apuntesteoricos.push(apunteTmat2_1, apunteTmat2_2, apunteTmat2_3 , apunteTmat2_4 , apunteTmat2_5 ,apunteTmat2_6 , apunteTmat2_7 , apunteTmat2_8)

// Sistemas Operativos
const so = new Materias("so","Sistemas Operativos",6, null, "","")

const videosSo1 = new Videos(1,"Gz5KVCGndXw?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Introduccion 1","Introduccion 1")
const videosSo2 = new Videos(2,"WQ5PeRt8caM?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Introduccion 2","Introduccion 2")
const videosSo3 = new Videos(3,"Z5CDSY0km5Q?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Procesos 1","Procesos 1")
const videosSo4 = new Videos(4,"TrkvA4FWrAY?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Procesos 2","Procesos 2")
const videosSo5 = new Videos(5,"4JKOiJJ8UJc?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Threads","Threads")
const videosSo6 = new Videos(6,"bt6w757FJMk?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Practica IRQ Handlers","Practica IRQ Handlers")
const videosSo7 = new Videos(7,"VAAdrLlXq7c?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","CPU Scheduleres 1","CPU Schedulers 1")
const videosSo8 = new Videos(8,"KW7lLSSXaUM?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","CPU Schedulers 2","CPU Schedulers 2")
const videosSo9 = new Videos(9,"CNcX30rYtl8?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Schedulers 3","Grafico de GANTT")
const videosSo10 = new Videos(10,"ecksZI3QAqk?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Practica 4","Practica 4")
const videosSo11 = new Videos(11,"VIVRVqXC2x8?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Memoria 1","Memoria - Sin Abstraccion")
const videosSo12 = new Videos(12,"VVdlQeKPacY?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Memoria 2","Memoria - Asignacion Continua")
const videosSo13 = new Videos(13,"mxqaeL0PX18?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Memoria 3","Memoria - Paginacion")
const videosSo14 = new Videos(14,"oDP54QuE7P4?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Practica - Ejercicios","Paginacion: Direccionamiento")
const videosSo15 = new Videos(15,"ItoML6qsL7k?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Practica 5","Practica 5")
const videosSo16 = new Videos(16,"1294Rh6KpG4?list=PLA6U-4x2PwVZDJ57VFEk4_i4xSHIFaNcC","28/8/2023","Memoria 4","Memoria - Paginacion Bajo Demanda")

so.apuntesteoricos.push(
    new ApuntesT(1,"16MARbSXvArV3yC_byNOseeHm9L5AN06y","28/8/2023","Clase 1","Introduccion de Sistemas Operativso","Teorico",[1,2],2,"Todos"),
    new ApuntesT(2,"1W2Yp1L8OU4a5Ek8YR8jjZjSigwG8qobc","28/8/2023","Clase 2-1","Procesos","Teorico",[3,4],2,"Todos"),
    new ApuntesT(3,"1Ym1wUJwrJxT27xazChyD3ywqBhzzI17I","28/8/2023","Clase 2-2","Threads","Teorico",5,2,"Todos"),
    new ApuntesT(4,"1qmw3CepJMZc5UrVuKWqE9Cf0i42qQvj-","28/8/2023","Clase 3","Scheduling","Teorico",[7,8,9],3,"Todos"),
    new ApuntesT(5,"14UpeTSiTiALtvgrtdMAYY1_VEc-BmYFL","28/8/2023","Clase 4","Memoria","Teorico",[11,12],4,"Todos"),
    new ApuntesT(6,"161UYSXSqQvQ3EngPBpzZVgKkYO-UJFhF","28/8/2023","Clase 5","Paginacion","Teorico",13,4,"Todos"),
    new ApuntesT(7,"13k-kt-t_-671_PCtF49NVK1rj0t_g30X","28/8/2023","Clase 6","Memoria Virtual","Teorico",16,5,"Todos")
)

so.apuntespracticos.push(
    new ApuntesP(1,"1XwKhMHqZIodLQ_vQoNMlubPLAl5vmtxz","28/8/2023","Practica1","Introduccion de Sistemas Operativso","Practica"),
    new ApuntesP(2,"1ZpNltKWLXpTVfwrlt3avPMB1ZicpetTh","28/8/2023","Practica 2","Procesos","Practica"),
    new ApuntesP(3,"17TSMXSkHBTnoZFmWpIsKfvmLYydeRoq7","28/8/2023","Practica 3","Scheduling","Practica"),
    new ApuntesP(4,"155MbB1kn0IJ2esQxnWYZ9_kyywq0pJmn","28/8/2023","Practica 4","Memoria","Practica"),
    new ApuntesP(5,"1iJ8g4tbU-5Hn1-vIthbdHgSMqagVgBPC","28/8/2023","Practica 5","Paginacion","Practica"),
    new ApuntesP(6,"168uSjA9WmJl8pgSwXMeduvKm1oiQzZ3M","28/8/2023","Practica 6","Memoria Virtual","Practica")
)



so.videos.push(videosSo1,videosSo2,videosSo3,videosSo4,videosSo5,videosSo6,videosSo7,videosSo8,videosSo9,videosSo10,videosSo11,videosSo12,videosSo13,videosSo14,videosSo15,videosSo16)

// Programacion Concurrente

const progconcu = new Materias("progconcu","Programacion Concurrente",4, null, "","")

progconcu.videos.push(
   new Videos(1,"dZAV1NZYSio","15/8/2023","Clase 1","Introduccion"),
   new Videos(2,"Z0DN-G-1k3I","15/8/2023","Clase 2","Teoricas Trazas, Exclusion Mutua"),
   new Videos(3,"Zn62jF4h31w","15/8/2023","Clase 3","Practica Trazas"),
   new Videos(4,"_cRBaYRuZe4","15/8/2023","Clase 4","Teoricas Acciones Atomicas"),
   new Videos(5,"YT-YZNXuDPM","15/8/2023","Clase 5","Practica Acciones Atomicas"),
   new Videos(6,"Oirh1mRCA2I","15/8/2023","Clase 6","Teorica semaforos 1"),
   new Videos(7,"wHjF1loE464","15/8/2023","Clase 7","Practica semaforos 1"),
   new Videos(8,"R8Sl82XPcIQ","15/8/2023","Clase 8","Teorica semaforos 2"),
   new Videos(9,"jkMk364jCi8","15/8/2023","Clase 9","Practica Semaforos 2"),
   new Videos(10,"9RAeB5otuss","15/8/2023","Clase 10","Consultas 1 Semaforos"),
   new Videos(11,"HBLqoosi8ek","15/8/2023","Clase 11","Consultas 2 Semaforos"),
   new Videos(12,"2JHcG0Fx6n4","15/8/2023","Clase 12","Teoria de Monitores"),
   new Videos(13,"Bqq01o2wf0I","15/8/2023","Clase 13","Practica de Monitores"),
   new Videos(14,"13c26lC6uCU","15/8/2023","Clase 14","Teoria de Mensajes"),
   new Videos(15,"crpcsqGzUVU","15/8/2023","Clase 15","Practica Mensajes"),
   new Videos(16,"ItWhG1EKYy0","15/8/2023","Clase 16","+ Practica Mensajes"),
   new Videos(17,"MbVwSvURP3Q","15/8/2023","Clase 17","Cierre de la Materia")
   


)

const apunteTconcu1 = new ApuntesT(1,"1WfiaYfkrN1zwWxZ8dLx4elB3mUGLhNUz","15/8/2023","PC.01","Introduccion","Teorico",null,1,"Todos")
const apunteTconcu2 = new ApuntesT(2,"1nGWO1QvUsAQ4KLtO2d1gAyjEmo9hbDVq","15/8/2023","PC.02","Exclusion Mutua","Teorico",null,2,"Todos")
const apunteTconcu3 = new ApuntesT(3,"1bkca0uIs7SV_qzImtTzxidBOsrLwIW1E","15/8/2023","PC.03","Acciones Atomicas","Teorico",null,3,"Todos")
const apunteTconcu4 = new ApuntesT(4,"1X7j9-h-VUry4dLqt4kl6vNLvAkf9uLVO","15/8/2023","PC.04","Semaforos","Teorico",null,4,"Todos")
const apunteTconcu5 = new ApuntesT(5,"12_u65RGFS2_2G_buBW8RpWnOaJOqgqU8","15/8/2023","PC.05","Esquema con semaforos","Teorico",null,5,"Todos")
const apunteTconcu6 = new ApuntesT(6,"1cD3UxTxjkKSLzBdKBoEYsG1tmQ_8ZDpm","15/8/2023","PC.06","Monitores","Teorico",null,6,"Todos")
const apunteTconcu7 = new ApuntesT(7,"1S-Lknei4HDC93X_Tu6VxTxSeiMhaFQdR","15/8/2023","PC.07","Mensajes","Teorico",null,7,"Todos")

const apuntePconcu1 = new ApuntesP(1,"1KT65XBd0B9n_2BrFYbYSnre8w_NlfXBk","15/8/2023","Practica 1","Trazas","Practico")
const apuntePconcu2 = new ApuntesP(2,"11Eu9bZmDLyQQ9DsiLbq8XbpnDwtCOCHP","15/8/2023","Practica 2","Mutex","Practico")
const apuntePconcu3 = new ApuntesP(3,"11cAc4HY8huQHGWWdhTOkiiX8Io0PsG_Y","15/8/2023","Practica 3","Atomicidad","Practico")
const apuntePconcu4 = new ApuntesP(4,"1vRMgijbAcRdJsjBRR96skTt9NDewQM81","15/8/2023","Practica 4","Semaforos 1","Practico")
const apuntePconcu5 = new ApuntesP(5,"1fdFjfgEVQx3XBam82s1PKcHAmKQnzfCy","15/8/2023","Practica 5","Semaforos 2","Practico")
const apuntePconcu6 = new ApuntesP(6,"1a5zF8xiHhTGPWLWXtn-IYCqL25AWTbXA","15/8/2023","Practica 6","Monitores","Practico")
const apuntePconcu7 = new ApuntesP(7,"1z-a525r4pq7EWZL6PJ-7t2iAlBPgKDju","15/8/2023","Practica 7","Mensajes","Practico")

progconcu.apuntespracticos.push(apuntePconcu1,apuntePconcu2,apuntePconcu3,apuntePconcu4,apuntePconcu5,apuntePconcu6,apuntePconcu7)
progconcu.apuntesteoricos.push(apunteTconcu1,apunteTconcu2,apunteTconcu3,apunteTconcu4,apunteTconcu5,apunteTconcu6,apunteTconcu7)

// Programacion Funcional

const progFunc = new Materias("progfunc", "Programacion Funcional", 4 , null ,"", "")
// Videos
progFunc.videos.push(
    new Videos(1,"CFuvy-w9o6I","6/7/2024","1 Clase Teorica Funcional","Modelo Funcional, Alto Orden"),
    new Videos(2,"bIx0Zi8YjMY","6/7/2024","2 Clase Teorica Funcional","Sistema de Tipos"),
    new Videos(3,"gthqrFWG6oA","6/7/2024","3 Clase Teorica Funcional","Currificacion"),
    new Videos(4,"u_Q1dP2g5FQ","6/7/2024","4 Clase Teorica Funcional","Reduccion"), 
    new Videos(5,"d-DocFmRdQc","6/7/2024","5 Clase Teorica Funcional","Tipos  Algebraicos"),
    new Videos(6,"vrae0isqwNM","6/7/2024","6 Clase Teorica Funcional","Propiedades y Demostraciones"),
    new Videos(7,"9piJQAaWCpk","6/7/2024","7 Clase Teorica Funcional","Induccion y recursion 1"),
    new Videos(8,"b2gKGcvq_bo","6/7/2024","8 Clase Teorica Funcional","Induccion y recursion 2"),
    new Videos(9,"9CIqSAVran8","6/7/2024","9 Clase Teorica Funcional","Induccion y recursion 3"),
    new Videos(10,"B6D2rkBw1uo","6/7/2024","10 Clase Teorica Funcional","Induccion y recursion 4"),
    new Videos(11,"OrrzkDNzVW8","6/7/2024","9 Clase Teorica Funcional","Esquema de funciones 1"),
    new Videos(12,"L3gU250guP4","6/7/2024","10 Clase Teorica Funcional","Esquema de funciones 2"),
    new Videos(13,"FaLO_tlI4oI","6/7/2024","9 Clase Teorica Funcional","Monadas"),
    new Videos(14,"28QX5EUabDQ","6/7/2024","10 Clase Teorica Funcional","Calculo Lambda")

)
progFunc.apuntesteoricos.push(
    new ApuntesT(1, "1A-qaTDJZ45bVmtMKRCPIohNIESe7MPnA","6/7/2024" ,"Clase teorico 1","Modelo Funcional","Teorico",1,1,"Todos"),
    new ApuntesT(2, "127QqqKiAZXCK7toxdoBpsD0pRCyGRPNT","6/7/2024" ,"Clase teorico 2","Sistema de tipos","Teorico",2,2,"Todos"),
    new ApuntesT(3, "1AjEVjXJU659JBqlVqlQO9s6cKbeF9df3","6/7/2024" ,"Clase teorico 3","Currificacion","Teorico",3,3,"Todos"),
    new ApuntesT(4, "136UecSUZsJ9d_APqtDe_yCd9sshys155","6/7/2024" ,"Clase teorico 4","Reduccion","Teorico",4,4,"Todos"),
    new ApuntesT(5, "10YkN3O_NeohE6CTMj1aVy6exUr0ChYYZ","6/7/2024" ,"Clase teorico 5","Tipos Algebraicos","Teorico",5,5,"Todos"),
    new ApuntesT(6, "103Yu6Hq44FbwJLLYax7y0O_AOg6GPoT5","6/7/2024" ,"Clase teorico 6","Propiedades y Demostraciones","Teorico",6,6,"Todos"),
    new ApuntesT(7, "14mhHYFVd2JhM7l6FfmdyoYQKSuUHTNM8","6/7/2024" ,"Clase teorico 7","Induccion y recursion 1","Teorico",7,7,"Todos"),
    new ApuntesT(8, "1_VPvJZqUVmdagYxGyPugNWXFa1NXnI2T","6/7/2024" ,"Clase teorico 8","Induccion y recursion 2","Teorico",8,8,"Todos"),
    new ApuntesT(9, "1jYElgkj2zwwXMKwhNQVbkvGvBPCmPkr0","6/7/2024" ,"Clase teorico 9","Induccion y recursion 3","Teorico",9,9,"Todos"),
    new ApuntesT(10, "1k-RUw2_Eg2KGD78F7KiStJ5GjRHYbfBv","6/7/2024" ,"Clase teorico 10","Induccion y recursion 4","Teorico",10,10,"Todos"),
    new ApuntesT(11, "11PjgXCrzYMaRDhOMc0KRuuFNsCbSv-6u","6/7/2024" ,"Clase teorico 11","Esquema de funciones 1","Teorico",11,11,"Todos"),
    new ApuntesT(12, "1pr-JaReKmYe6HuVKgIFYaoe9WWp6zQ5V","6/7/2024" ,"Clase teorico 12","Esquema de funciones 2","Teorico",12,12,"Todos"),
    new ApuntesT(13, "19W37tbHxTJXFkt82cwki2HiSXmB_IqTk","6/7/2024" ,"Clase teorico 13","Monadas","Teorico",13,13,"Todos"),
    new ApuntesT(14, "1FHyZnsMKyYR1U2ygimipA0hIOFtWwTsx","6/7/2024" ,"Clase teorico 14","Calculo Lambda","Teorico",14,14,"Todos")
)
progFunc.apuntespracticos.push(
new ApuntesP(1, "1F5s1YnFpUCDPJ9SZo6mPgYqZPZWaDZZc","6/7/2024" ,"Clase practica 1","Modelo Funcional","Practico"),
new ApuntesP(2, "1b34qBVRKkP6xQMl4r2hK56elKhWcc1Vr","6/7/2024" ,"Clase practica 2","Sistema de tipos","Practico"),
new ApuntesP(3, "1OxGW9-44k4AgCOwv1DGzkYPSaGu4-vss","6/7/2024" ,"Clase practica 3","Currificacion","Practico"),
new ApuntesP(4, "1uaCdh7UMUko8UYWblIqC8c21LTGXrgJr","6/7/2024" ,"Clase practica 4","Reduccion","Practico"),
new ApuntesP(5, "15fArKEg5AMpj0SfLejfwcRMpgo7-FB0V","6/7/2024" ,"Clase practica 5","Tipos Algebraicos","Practico"),
new ApuntesP(6, "1fL5-x-6InHULb5nWNXBWNw_OZkfcivAU","6/7/2024" ,"Clase practica 6","Propiedades y Demostraciones","Practico"),
new ApuntesP(7, "1d5HZ8cm4TIINLhie0sPllXG8u0OFJ7Kh","6/7/2024" ,"Clase practica 7","Induccion y recursion 1","Practico"),
new ApuntesP(8, "16cwGBctit_f7Fpre1bGsK_9IZ46RSIG5","6/7/2024" ,"Clase practica 8","Induccion y recursion 2","Practico"),
new ApuntesP(9, "1NfOVzY7qNt6n_YdJeTgxXxMUoZA_wjhJ","6/7/2024" ,"Clase practica 9","Induccion y recursion 3","Practico"),
new ApuntesP(10, "1WYs8V2H6QsY95kjMrYAGNeLMv9xcdJ4Y","6/7/2024" ,"Clase practica 10","Induccion y recursion 4","Practico"),
new ApuntesP(11, "13UluPhwmSUdZBLGfw2IPAcYr3DZN-owK","6/7/2024" ,"Clase practica 11","Esquema de funciones 1","Practico"),
new ApuntesP(12, "1GNG2xrJdd0BIMuJUSo39o_GMjMSLWiB-","6/7/2024" ,"Clase practica 12","Esquema de funciones 2","Practico"),
new ApuntesP(13, "1t3FabRPQw-hcXWp0GwEW0Km3tYY1N3Xy","6/7/2024" ,"Clase practica 13","Monadas","Practico"),
new ApuntesP(14, "1WNPsTCLVlul04ngGfbBR3ym3mvSfiKzH","6/7/2024" ,"Clase practica 14","Calculo Lambda","Practico"))


// Programacion Orinetada a Objetos 2
const progObj2 = new Materias("pobj2","Programacion Orientada a Objetos 2", 6,`<a href="https://poo2unq.github.io/site/" target = "_blanck">Sitie</a>`,"")

progObj2.videos.push(
    new Videos(1,"oYSLwORU0ZM","año 2020","Teoria UML","UML"),
    new Videos(2,"3ITG-OFhThc","2020","Startup Java Eclipse GIT","Inicializar workspace"),
    new Videos(3,"C-WgNtdGsR4","2020","GIT","GIT consola"),
    new Videos(4,"XWqH1TvMhTc","2020","Interfaces Java","Abstractas vs Interfaces"),
    new Videos(5,"k_btrOB7Arg","30/9/2024","Test Doubles","Repaso TDD, Test y Test"),
    new Videos(6,"Tys62sak1Jk","30/9/2024","Teorica Mockito","Mockito")
    
)

progObj2.apuntespracticos.push(
    new ApuntesP(1,"1l0MDQGyMH-h-BBt7T-W9U_AfqBgxjuBT","20/8/2024","TP1","Repaso","Practico"),
    new ApuntesP(2,"1DgRvcd6OdkT1qyUi2TUHY-bqK95xrqHg","20/8/2024","TP2","UML","Practico"),
    new ApuntesP(3,"1lbcKidtbPv1Y_6nO7FrndlmY_0myW4UV","20/8/2024","TP3","Java primeros pasos","Practico"),
    new ApuntesP(4,"1CmXeiMtR5ZJADnszM2xdjgNRdELgM4p2","7/9/2024","TP4","Java POO","Practico"),
    new ApuntesP(5,"1KDHLuzVwnQ3Fdj6YAaYYXtpEFFX87Jjc","7/9/2024","TP5","Abstracta vs Interfaces","Practico"),
    new ApuntesP(6,"1-TeflJGseztbZaap4GdqiW3rCiGrWk5V","7/9/2024","TP6","SOLID","Practico"),
    new ApuntesP(7, "1EyqldbnGgAimev5rXjEvHq4sYdchsuVd","30/9/2024","TP7","Template Method y Adapter","Practica"),
    new ApuntesP(8, "1ZMNKKxwlfDUrkzZB-Xk8T2vl4h4iZVQc","30/9/2024","TP8","Streams y Enums","Practico"),
    new ApuntesP(9,"1YFVpeEYVg7oyHSHBFwgdIU8P3bdVpnmp","30/9/2024","TP9","Test Doubles,  Mockito","Practica")
    
)
 
progObj2.apuntesteoricos.push(
    new ApuntesT(1,"1bvnk3E6KufZ2572dCeMQvLPUfYZyEd4v","20/8/2024","Teorica 1","Repaso de Objetos 1 y Java","Teorico",null,[1,2,3],"Todos"),
    new ApuntesT(2,"15DLZulqlX2waMYDWqj7oMNMyFaXDkTNT","7/9/2024","Teorica 2","Pilares del Lenguaje Java","Teorico",null, null,null),
    new ApuntesT(3,"14fkZcHCsUeM0032anYfUjp2CeumTHZNm","7/9/2024","Teorica 3","Contrato de interfaces","Teorico",null,null,null),
    new ApuntesT(4,"14fkZcHCsUeM0032anYfUjp2CeumTHZNm","7/9/2024","Teorica 4","Ejemplo de interfaces","Teorico",null,null,null),
    new ApuntesT(5,"1kZ21q7q0UiVzXY6FwTRFY7uUUi1Pk164","30/9/2024","Teorico 5","Template Method y  Adapter","Teorico",null,7,"Todos"),
    new ApuntesT(6,"11N7f5msmFhhQODNOFV4KYQgJbUYvruaX","30/9/2024","Teorico 6","Enums","Teorico",null, 8,"1"),
    new ApuntesT(7,"1ykHUPfnjB6h5yYS4Xy2lV5GaMEAUoVYt","30/9/2024","Teorico 7","Streams","Teorico",null, 8,"2"),
    new ApuntesT(8,"1lYatRlTCM8PCbjytp9ePQwGdgn59kVeE","30/9/2024","Teorica 8","Test Doubles, Mockito","Teorica",6,9,"Todos")
)




// Logica y Programacion
const log = new Materias("log","Logica y Programacion",4,"","")

log.apuntespracticos.push(
    new ApuntesP(1,"1Pid1y5-A8_ru4HjiZvgsyVhjjg5Hdwyi" ,"16/8/2024","Practica 1","Logica Proposicional, sintxis y semantica","Practica"),
    new ApuntesP(2,"1I60cuNgeDm3SMcuvEvd8UuiVugzuF2RY" ,"16/8/2024","Practica 2","Deduccion Natural, Correccion y Completitud para PROP","Practica"),
    new ApuntesP(3,"1i7_0VStdjd6tmC_iqWqRqz-YEpq9_vjn" ,"13/9/2024","Practica 3","Logica de Predicados","Practica")
)

log.apuntesteoricos.push(
    new ApuntesT(1,"19rbIW5_gERLN7u2OhUyLpHy9szFgZiGz","16/8/2024","Teorica 1","Logica Proposicional y Forma Normal Coguntiva","Teorico",null,"1","Todos"),
    new ApuntesT(2,"1pBHT7aAU00qrvwpPuwTH963mJTMaBpSh","16/8/2024","Teorica 2","Deduccion Natural","Teorico",null,"2","Todos"),
    new ApuntesT(3,"1UTv35tOZjSvSpBlDPNncTKN6aRDo1cqP","16/8/2024","Teorica 3","Correccion y Completitud PROP","Teorico",null,"2","Todos"),
    new ApuntesT(4,"1o3n_JUrN34eYDDqaacCeGXMdXoGYJX6E","13/9/2024","Teorica 4","Logica de Predicados","Teorico",null,"3","Todos"),
)

//REGISTRO DE MATERIAS

let todasLasMaterias =[]

todasLasMaterias.push(matematica1,introduccionProgramacion,tallerTabajoUniversitario, orga, estructuradDeDatos, objetos1,redes, bsd, mat2, so , progconcu , progFunc ,log, progObj2)
