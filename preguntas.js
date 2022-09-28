
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
        new Pregunta("¿Que es el conjunto de Verdad de una formula proposicional?","Conjunto formado por los elementos del Universal, que al reemplazar a la x, da una proposicion verdadera",["Todo el conjunto Universal","Conjunto formado por todos los elementos del Universal","Conjutno formado por todos los elementos del Universal que permiten convertir la formula proposicional en una proposicion"]),
        new Pregunta("¿Que representa el simbolo U?","Conjunto Universal",["Conjunto de Verdad","Para Todos","Algunos","NInguno","Formula Porposicional","Proposicion"]),
        new Pregunta("¿Cuales de los siguientes no es un cuantificador?","a veces",["Existe alguno","Para Todos"]),
        new Pregunta("Indicar si la siguiente proposicion es V o F: ∃n ∈N / n<5","Verdadero",["Falso"]),
        new Pregunta("Indicar si la siguiente proposicion es V o F: ∀n ∈N /(n >= 5 ∧ n <= 8","Falso",["Verdadero"]),
        new Pregunta("Sabiendo que el U = {1,2,3,4,5,6,7,8,9}, q(x): x es multiplo de 2 menor que 15  ¿Cual es el conjunto de verdad?","{2,4,6,8}",["Conjunto Vacio","Conjunto Universal","{1,2,3,4,5,6,7,8}","{1,2,3,4,5,6}"]),
        new Pregunta("¿De que otra forma puede ser representada esta negacion de un cuantificador para todos? - (∀x : t(x))","∃x : -t(x)",["∃x : t(x)","∀x : - t(x)","Solo existe esa forma de negarlo"]),
        new Pregunta("¿Este razonamiento es valido? P1: ∀x ∶ (e(x) → c(x))  P2: e(Paola) C: c(Paola)", "Razonamiento Valido",["Razonamiento Invalido"], ),
        new Pregunta("Si sabemos que una proposicion con un cuantificador Para Todos (∀), es verdadero,¿Que se puede afirmar del existencial de ese mismo conjunto?","Que para el existencial de alguno concreto tambien es verdadero",["Que el existencial siempre es falso","Que el existencial de alguno concreto puede ser verdadero o falso","No se puede afirmar nada"]),
        new Pregunta("Teniendo los conjuntos de verdad de p(x) y q(x) que son: {1,2,3} y {2,4,6} y el U = {1,2,3,4,6} ¿Cual de las siguientes proposiciones es falsa?","∀x: p(x) ∧ q(x)",["∀x: p(x) v q(x)","∃x: p(x) ∧ q(x)","∃x: p(x) <--> q(x)"]),
        new Pregunta("Dado el conjunto A={1,2,3,4,9} determine el valor de verdad de ∃x ∈ A ∀y ∈ A / x*y = y","Verdadero",["Falso"])

    ]),
        
    new Juego ("jm2","Unidad 2: Teoria de conjuntos",
    [new Pregunta("¿Como se designan los conjuntos usualmente?","Letras Mayusculas",["Letras Minusculas","Numeros Positivos","Numeros Negativo","Numero Binario","Numero Romano","Simbolos Griegos"],"Los conjutnos son designados comunmente por letras Mayusculas, como los conjuntos de los numeros naturales N, enteros Z, racionales Q, etc "),
     new Pregunta("x ∈ A ¿Que quiere decir?","el elemento x pertenece al conjunto A",["el elemento x no pertenece al conjunto A","el elemento x esta incluido en el conjunto A","el elemento x no esta incluido en el conjunto A"]),
     new Pregunta("¿Cuantos elementos tiene el conjunto vacio ? simbolizado: ∅ o {}.","0",["1","-1"]),
     new Pregunta("¿A que se le llama el cardinal de un conjunto?","Cantidad de elementos del conjunto",["Cantidad de productos cartesianos posibles en el conjunto","El conjunto de partes","la particion del conjunto"]),
     new Pregunta("Si un conjunto tiene infinitos elementos ¿Como puede ser definido?","Por Comprension",["Por extension","Por cualquiera de los dos"]),
     new Pregunta("Sean A y B dos conjuntos.si todo elemento de A pertence a B entonces el conjunto A está incluido en B. Se simboliza A ⊆ B. ¿Cual es la definicion de la inclucion?","A ⊆ B ⟺ ∀x ∶ x ∈ A ⟹ x ∈ B",["A ⊆ B ⟺ ∀x ∶ x ∈ A ⟹ x ∉ B","A ⊆ B ⟺ ∀x ∶ x ∉ A ⟹ x ∉ B"]),
     new Pregunta("¿Cual es la diferencia entre ⊆ y ⊂?","El primero admite que sean iguales y el segundo no",["El segundo admite que sean iguales y el primero no"]),
     new Pregunta("El conjunto Vacio este inlcuido en cualquier otro conjunto","Verdadero",["Falso"]),
     new Pregunta("¿Que significa que dos conjuntos sean iguales?","Que tienen los mismo elementos y la msima cantidad",["la unica condicion es que tengan el mismo cardinal","tienen elementos diferentes"]),
     new Pregunta("A = B si y sólo si ∀x ∶ (x ∈ A ↔ x ∈ B). Ademas de este ¿Que otra es la definicion de Igualdad?","A = B ⟺ A ⊆ B ∧ B ⊆ A",["A = B ⟺ A ⊆ B ","A = B ⟺  B ⊆ A", "A = B ⟺ A ⊆ B v B ⊆ A"]),
     new Pregunta("A̅ = {x ∈ U / x ∉ A} = {x/ x ∉ A} ¿Que quiere decir esto?","El complemento de A (A̅), es el conjunto de los elementos de U que no pertenecen a A",["El complemento de A (A̅), es el conjunto de los elementos de A que no pertenecen a U"]),
     new Pregunta("x ∈ A̅ ⟹ ????","x ∉ A",["x ∈ A"]),
     new Pregunta("{x ∈ U / x ∈ A ∨ x ∈ B} = {x/ x ∈ A ∨ x ∈ B} ¿A que definicion hace referencia?","Union",["Interseccion","Igualdad","Diferencia Simetrica","Diferencia entre conjuntos","Complemento"]),
     new Pregunta("¿Cual de las siguientes es una propiedad de la Union?","Todas",["Idempotencia A U A = A","Asociativa (A ∪ B) ∪ C = A ∪ (B ∪ C)","Conmutatividad: A ∪ B = B ∪ A","Elemento neutro de la unión: A ∪ ∅ = ∅ ∪ A = A","Solo dos de las mencionadas"]),
     new Pregunta("x ∈ A ?? B ⟺ x ∈ A ∧ x ∈ B  ¿Que simbolo va a donde estan los signos de pregunta?","∩ (interseccion)",["U (union)","- (diferencia)","Δ (diferencia simetrica)"]),
     new Pregunta("¿Cual de las siguientes es una propiedad de la Interseccion?","Todas",["Idempotencia A ∩ A = A","Asociativa (A ∩ B) ∩ C = A ∩ (B ∩ C)","Conmutatividad: A ∩ B = B ∩ A","Elemento neutro de la intersección: A ∩ U = U ∩ A = A","Solo dos de las mencionadas"]),
     new Pregunta("A ∩ (A ∪ B) = A  y  A ∪ (A ∩ B) = A ¿Estas dos igualdades son corectas?","Son Correctas por ley de Absorcion",["Son Incorrectas"]),
     new Pregunta("La diferencia entre dos conjuntos A y B en el conjunto formado por los elementos que pertenecen a A y que no pertenecen a B ¿Como se puede simbolizar esta definicion?","x ∈ A − B ⟺ x ∈ A ∧ x ∉ B",["x ∈ A − B ⟺ x ∈ A ∧ x ∈ B","x ∈ A − B ⟺ x ∈ A v x ∉ B"]),
     new Pregunta("¿Cual de las siguiente NO es una propiedad de la diferencia?","A - B = B - A",["A - A = ∅","U − A = A̅", "A − ∅ = A","∅ − A = ∅", "A − B ⊆ A","A ∩ (B − C) = (A ∩ B) − (A ∩ C)","Todas son propiedades de la diferencia"]),
     new Pregunta("La diferencia simétrica entre dos conjuntos A y B es la unión de los conjuntos A − B y B − A. Se simboliza A ∆ B. ¿Como se simboliza esta definicion?","A ∆ B = (A − B) ∪ (B − A)",["A ∆ B = (A − B)","A ∆ B = (B − A)", "A ∆ B = (A − B) ∩ (B − A)"]),
     new Pregunta("¿Cual de las siguientes es una equivalencia de la diferencia simetrica A ∆ B?","Las dos",["(A ∩ B̅ ) ∪ (B ∩ A̅)","(A ∪ B ) − (A ∩ B )"]),
     new Pregunta("El producto cartesiano de dos conjuntos A y B (en ese orden) es el conjunto cuyos elementos son todos los pares ordenados cuya primera componente pertenece a A y la segunda a B.","A X B = { (a , b) / a ∈ A ∧ b ∈ B}",["A X B = { (a , b) / a ∈ A ∧ b ∈ A}","A X B = { (a , b) / a ∈ B ∧ b ∈ B}"])
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

