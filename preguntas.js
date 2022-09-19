
class Juego{
    constructor(id,seccion,preguntas){
        this.id = id
        this.indice = seccion
        this.preguntas = preguntas
    }
}

class Pregunta{
    constructor (pregunta,respuesta,distractores,explicacion){
        
        this.pregunta = pregunta
        this.respuesta = respuesta
        this.distractores = distractores
        this.explicacion = explicacion
    }

}

let matematica1Juego = [
    new Juego("jm1","Unidad 1: Logica",
        [new Pregunta(
            "¿Cual de los siguientes es un metodo de resolucion de razonamientos?",
            "Todos los anteriores",
            ["Metodo Directo","Metodo Indirecto","Metodo por el absurdo"],
            "El metodo directo: con todas las premisas se consideran verdaderas y se intenta llegar a la conclucion verdadera"),
        new Pregunta(
            "¿Cual de las siguientes no es un operador logico en logica proposicional?","U (union)",["- (negacion)","v (disyuncion)","-->(implicacion)","<--> (bicondiconal)"],"dvsv"),
        new Pregunta("p --> q ¿Cual es el contrareciproco?","-q --> (-p)",["q --> p","-p --> q","p --> q", "-p v q"],""),
        new Pregunta ("¿Cual de las siguientes no cumple la propiedad de conmutatividad?","Implicacion",["Conjuncion","Disyuncion","Bicondicional","Multiplicacion"],""),
        new Pregunta("p v (q ∧ r) = ¿?","(p v q) ∧ (p v r)",["(p v q) ∧ r","(q v r) ∧ p","(p ∧ q) v (p ∧ r)"]),
        new Pregunta ("¿Cual de las siguientes opciones define la ley de Morgan?"," - (p v q) = -p ∧ -q",["p v (q ∧ r) = (p v q) ∧ (p v r)","p v (q v r) = (p v q) v r"," - (-p) = p","- (p ∧ q) = -p ∧ -q"]),
        new Pregunta ("x es inteligente, es una proposicion","Falso",["Verdadero"]),
        new Pregunta ("x es inteligente, es una formula proposicional","Falso",["Verdadero"]),
        new Pregunta ("¿Cual de los siguientes es una formula proposicional?"," x + 2 = 5",["2 + 2 = 4","China es el pais mas chico que existe","El cielo es violeta"]),
        new Pregunta ("¿Que significan que dos expresiones sean logicamente equivalentes?","Sus tablas de verdad son iguales",["Sus tablas de verdad son contrarias"],""),
        new Pregunta ("¿Que es el conjunto Universal?", "El conjunto donde al reemplazar cada elemento en la funcion proposicional se obtienen proposiciones",["El conjunto de elemento que de verdadero la formula proposicional","El conjunto de elemento que de falso la formula proposicional"],""),
        new Pregunta ("Partimos de las premisas Verdaderas y la Conclucion falsa y se intenta llegar a una contradiccion ¿A que tipo de resolucion de razonamiento hace referencia?","Metodo por le absurdo",["Metodo Directo","Metodo Indirecto","Metodo del bufon"],""),
        new Pregunta ("¿Cual de las siguientes es una Tautologia?","Todas son Tautologias",["Ninguna es tautologia","p --> p","-p v p","-(-p) <--> p","(p -> q) <--> (-p v q)"],""),
        new Pregunta ("¿Cual es la propiedad de la involucion?","- (-p)",["p v p","p v (-p)"," p ∧ p ","p ∧ (-p)"]),
        new Pregunta ("Tautologia, Contradiccion, Contingencias son clasificaciones de ....","Proposiciones Compuestas",["Proposiciones Simples","Formula Proposicional"],""),
        new Pregunta ("¿Que nos permiten hacer las leyes logicas?","Simplificar proposiciones o probar equivalencias logicas",["Dormir tranquilos en la noche","Hacer tablas de verdad","Hacer formulas proposicionales o proposiciones correctamente"],""),
        new Pregunta ("Se supone al conclucion falsa y se trata de demostrar que la conjuncion de las premisas son falsas","Metodo Indirecto",["Metodo por el absurdo","Metodo directo","Metodo del bufon"],"")
        

    ]),
        
    new Juego ("jm2","Unidad 2: Teoria de conjuntos",
    [new Pregunta("a","b",["c","d","e"],"porque si"),
     new Pregunta("g","h",["i","j","k"], "tengo ganas")
]
    )


]

let introduccionalaprogramacionJuego = [
    new Juego("ji1","Unidad 1: Introduccion a Gobstone",
        [new Pregunta("¿Como se programa en Gobstone JR?", "Bloques",["Texto","Emojis","Audio"],""),
        new Pregunta("¿De que color pueden ser las bolitas?","Ninguna de las mencionadas",["Amarillo","Gris","Celeste","Naranja"]),
        new Pregunta ("¿Como se programa en Gobstone SR?","Texto",["Bloques","Audio","Emojis"],""),
        new Pregunta ("El lenguaje es lo mas importante al aprender la logica de la programacion","Falso",["Verdadero"]),
        new Pregunta ("Si deseo sacar una bolita rojo ¿Que comando se tendria que utilizar?","Sacar(Rojo)",["Destruir(Rojo)","Sacar(Violeta-Azul)","Sacar(Rojito)","Eliminar(Roja)"]),
        new Pregunta ("Un programa es un texto que describe la solucion a un problema computacional y que debe poder ser ejecutado por una maquina","Verdadero",["Falso","No entendi nada"])
 ])
]

matematica1.agregarJuego(matematica1Juego)
introduccionProgramacion.agregarJuego(introduccionalaprogramacionJuego)

