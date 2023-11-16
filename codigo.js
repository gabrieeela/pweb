const databasePreguntas = [

    {
     pregunta: "\n Bernardino Rivadavia fue elegido como nuestro primer presidente luego de la declaración de la Independencia en 1816. \n\n ¿Entre que periodo de tiempo duró su mandato?",
     a: "Entre febrero de 1826 y junio de 1827", 
     b: "Entre marzo de 1821 y abril de 1824", 
     c: "Entre julio y agosto de 1827",
     rta: "a",
     imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Bernardino_Rivadavia_2.jpg",
    },
 
    {
     pregunta: "\n Durante el modelo agroexportador se realizaron importantes cambios a nivel económico, político, y social. Uno de los presidentes durante esta etapa fue Roque Saenz Peña. \n\n ¿En qué año de su presidencia se sancionó la denominada 'Ley Saenz Peña'? La cual permitió que los ciudadanos puedan votar.",
     a: "1910",
     b: "1912",
     c: "1914",
     rta: "b",
     imagen: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Roque_Saenz_Pe%C3%B1a_%28obituario_1914%29.jpg",
    },
 
    {
     pregunta: "\n La etapa del modelo por sustitución de importaciones fue caracterizada por el impulso que se le dió a la industria nacional. Uno de sus presidentes más recordados fue Juan Domingo Perón, el cual tuvo más de un mandato. \n\n ¿Cómo se llamó el plan que él implementó para unificar las medidas que afectaban la exportación e importación?",
     a: "Plan de cinco años", 
     b: "Plan Cóndor", 
     c: "Plan Quinquenal",
     rta: "c",
     imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Juan_Domingo_Per%C3%B3n.jpg",
    },
 
    {
     pregunta: "\n El neoliberalismo se inició durante la última dictadura militar, la cual terminó en 1983 con la vuelta de la democracia de la mano de Raúl Alfonsín. \n\n ¿Qué hecho histórico el cual marcó un antes y despues en la historia se dió durante su presidencia?",
     a: "La creación del Plan Quinquenal",
     b: "El juicio a las juntas militares",
     c: "La conquista del desierto",
     rta: "b",
     imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Ra%C3%BAl_Alfons%C3%ADn1983.jpg",
    },
 
    {
     pregunta: "\n Otro presidente característico del neoliberalismo fue Carlos Menem. \n\n ¿En que año impuso al peso como moneda nacional? (Moneda que seguimos teniendo hasta la actualidad)",
     a: "1995",
     b: "1990",
     c: "1992",
     rta: "c",
     imagen: "https://upload.wikimedia.org/wikipedia/commons/1/14/Menem_con_banda_presidencial.jpg"
    },
 ]
 
 const quiz = document.getElementById('quiz')
 const rtasElegidas = document.querySelectorAll('.opcion')
 const preg = document.getElementById('pregunta')
 const a_text = document.getElementById('a_text')
 const b_text = document.getElementById('b_text')
 const c_text = document.getElementById('c_text')
 const submitBtn = document.getElementById('submit')
 const imagenes = document.querySelector('.quiz-container > img')
 
 let currentQuiz = 0
 let puntaje = 0

 var nombre = document.getElementById('nom')

function comenzarJuego(){
    var verificar = true;
    var expRegNom = /^[a-zA-ZÑñÁáÉéÍíÓóÚúü\s]+$/;

    if(!nombre.value){
        alert("No ingresaste tu nombre!! Por favor, antes de jugar ingresá tu nombre.");
        nombre.focus();
        verificar == false;
    }

    else if (!expRegNom.exec(nombre.value)) {
        alert("Eso no es un nombre!! Por favor, antes de jugar ingresá tu nombre.");
        nombre.focus();
        verificar = false;
        
    }

    else{
        window.location.replace("#preguntas");
    }
}

cargarQuiz()

function cargarQuiz(){
    desmarcarOpcion()
    const currentQuizData = databasePreguntas[currentQuiz]

    preg.innerText = currentQuizData.pregunta
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    imagenes.src = currentQuizData.imagen
}

function desmarcarOpcion() {
    rtasElegidas.forEach(rtaElegida => rtaElegida.checked = false)
}

function opcionMarcada() {
    let respuesta

    rtasElegidas.forEach(rtaElegida => {
        if(rtaElegida.checked){
            respuesta = rtaElegida.id
        }
    }) 
    
    return respuesta
}

submitBtn.addEventListener('click', () => {
    const respuesta = opcionMarcada()

    if (respuesta) {
        if (respuesta === databasePreguntas[currentQuiz].rta) {  
            puntaje++
        }

        currentQuiz++ 

        if (currentQuiz < databasePreguntas.length) {
            cargarQuiz()
        } 
        
        else{
           quiz.innerHTML = `
           <h2>Contestaste ${puntaje}/${databasePreguntas.length} preguntas correctamente.</h2>
           <button onclick="location.reload()"> Volver a jugar </button> `
        } 

    }
})

function tablaDePuntajes() {
    var fila="<tr><td>"+nombre+"</td><td>"+puntaje+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablaPuntajes").appendChild(btn);
}








