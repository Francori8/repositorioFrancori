
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
        new Pregunta ("Partimos de las premisas Verdaderas y la Conclucion falsa y se intenta llegar a una contradiccion ¿A que tipo de resolucion de razonamiento hace referencia?","Metodo por el absurdo",["Metodo Directo","Metodo Indirecto","Metodo del bufon"],""),
        new Pregunta ("¿Cual de las siguientes es una Tautologia?","Todas son Tautologias",["Ninguna es tautologia","p --> p","-p v p","-(-p) <--> p","(p -> q) <--> (-p v q)"],""),
        new Pregunta ("¿Cual es la propiedad de la involucion?","- (-p)",["p v p","p v (-p)"," p ∧ p ","p ∧ (-p)"]),
        new Pregunta ("Tautologia, Contradiccion, Contingencias son clasificaciones de ....","Proposiciones Compuestas",["Proposiciones Simples","Formula Proposicional"],""),
        new Pregunta ("¿Que nos permiten hacer las leyes logicas?","Simplificar proposiciones o probar equivalencias logicas",["Dormir tranquilos en la noche","Hacer tablas de verdad","Hacer formulas proposicionales o proposiciones correctamente"],""),
        new Pregunta ("Se supone la conclucion falsa y se trata de demostrar que la conjuncion de las premisas son falsas","Metodo Indirecto",["Metodo por el absurdo","Metodo directo","Metodo del bufon"],""),
        new Pregunta ("¿Cual/es son maneras de obtener una proposicion a partir de una formula proposicional?","Las dos",["reemplazar la x por un elemento a de su Universal","Cuantificando las formulas proposicionales"]),
        new Pregunta("¿Que es el conjunto de Verdad de una formula proposicional?","Conjunto formado por los elementos del Universal, que al reemplazar a la x, da una proposicion verdadera",["Todo el conjunto Universal","Conjunto formado por todos los elementos del Universal","Conjutno formado por todos los elementos del Universal que permiten convertir la formula proposicional en una proposicion",""]),
        new Pregunta("¿Que representa el simbolo U?","Conjunto Universal",["Conjunto de Verdad","Para Todos","Algunos","NInguno","Formula Porposicional","Proposicion"]),
        new Pregunta("¿Cuales de los siguientes no es un cuantificador?","a veces",["Existe alguno","Para Todos"]),
        
        

    ]),
        
    new Juego ("jm2","Unidad 2: Teoria de conjuntos",
    [new Pregunta("¿Como se designan los conjuntos usualmente?","Letras Mayusculas",["Letras Minusculas","Numeros Positivos","Numeros Negativo","Numero Binario","Numero Romano","Simbolos Griegos"],"Los conjutnos son designados comunmente por letras Mayusculas, como los conjuntos de los numeros naturales N, enteros Z, racionales Q, etc "),
     new Pregunta("¿Como se designan los elementos de un conjunto usualmente?","Letras Minusculas",["Letras Mayusculas","Numeros Romanos","Numeros Decimales"], "Los elemento se representan con letras minusculas"),
     new Pregunta("x ∈ A ¿Que quiere decir?","el elemento x pertenece al conjutno A",["el elemento x no pertenece al conjunto A","el elemento x esta incluido en el conjunto A","el elemento x no esta incluido en el conjunto A"])
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
        new Pregunta ("Un programa es un texto que describe la solucion a un problema computacional y que debe poder ser ejecutado por una maquina","Verdadero",["Falso","No entendi nada"]),
        new Pregunta ("Como se escriben los comentarios en Gobstone?","//comentario",["[comentario]","(comentario)","{{comentario"]),
        new Pregunta ("Mover y Sacar son comandos parciales..¿Que significa esto?","Son comandos que tienen precondicion por si solo",["Porque funcionan siempre","Porque su precondicion es nula"]),
        new Pregunta("Siempre se busca la precondicion mas debil","Verdadero",["Falso"],""),
        new Pregunta ("Para que sirve el contrato de un programa?","Todas son Correctas",["Indica que hace el programa","Indica cuando funciona y cuando no","Para reutilizar codigo","Pensar el problema antes de intentar solucionarlo"],""),
        new Pregunta("Para que sirve el proposito de un programa?","Indicar la transformacion del tablero",["Para nada","Para saber como se resuelve el problema","Para saber cuando sirve y cuando no"]),
        new Pregunta("La precondicion nos permite saber cuando funciona o no funciona el programa","Verdadero",["Falso"],"")
    ]),

]

matematica1.agregarJuego(matematica1Juego)
introduccionProgramacion.agregarJuego(introduccionalaprogramacionJuego)

