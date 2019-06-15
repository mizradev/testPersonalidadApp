$(document).ready(function(){
    const preguntas = [
        {
            pregunta: "Te resulta difícil presentarte a ti mismo ante otras personas.",
            tipo: 1
        },
        {
            pregunta: "A menudo te quedas tan absorto en tus pensamientos que ignoras el entorno que te rodea o te olvidas de él.",
            tipo: 2
        },
        {
            pregunta: "Tratas de responder a todos tus correos electrónicos lo más pronto posible y no soportas una bandeja de entrada descuidada.",
            tipo: 3
        },
        {
            pregunta: "Te resulta fácil permanecer relajado y concentrado incluso cuando hay algo de presión.",
            tipo: 4
        },
        {
            pregunta: "Normalmente no sueles iniciar las conversaciones.",
            tipo: 1
        },
        {
            pregunta: "Es muy raro que hagas algo simplemente por pura curiosidad.",
            tipo: 2
        },
        {
            pregunta: "No te importa ni te incomoda ser el centro de atención.",
            tipo: 3
        },
        {
            pregunta: "Te consideras una persona más práctica que creativa.",
            tipo: 4
        },
        {
            pregunta: "Es muy raro que la gente te haga sentirte molesto o alterado.",
            tipo: 1
        },
        {
            pregunta: "Tus planes de viaje generalmente están bien pensados.",
            tipo: 2
        },
        {
            pregunta: "Con frecuencia te resulta difícil entender los sentimientos de otras personas.",
            tipo: 3
        },
        {
            pregunta: "Tu estado de ánimo o humor puede cambiar muy rápidamente.",
            tipo: 4
        },

    ]

    // obtener el container de preguntas (ul)
    var $listContanier = $(".list-group");
    for(let i = 0; i < preguntas.length; i++){
        // extraer texto del arreglop (pregunta)
        let pregunta = preguntas[i].pregunta;

        //creamos el elemenot del DOM (li)
        let $listItem = $("<li>");
        $listItem.addClass("list-group-item");
        // $listItem.text(pregunta);

        let $divPregunta = $("<div>");
        $pregunta = "<p>" + pregunta + "</p>"
        $divPregunta.append($pregunta);
        $listItem.append($divPregunta);

        // div acciones - botones
        $divAccionesBotones = $("<div>");
        $divAccionesBotones.addClass("text-right");


        // creamos los botones
        let $botonSi = $("<button>");
        $botonSi.addClass("btn btn-success mr-1");
        $botonSi.text("SI");
        // obtener rl tipo de la pregunta
        let tipoPregunta = preguntas[i].tipo;
        // ATTR para boton sí -> establece una propiedad en el boton
        $botonSi.data("tipo", tipoPregunta);  //attr("id", tipoPregunta);


        
        let $botonNo = $("<button>");
        $botonNo.addClass("btn btn-danger");
        $botonNo.text("NO");

        // push hacia div acciones
        $divAccionesBotones.append($botonSi);
        $divAccionesBotones.append($botonNo);


        //push a div Pregunta
        $divPregunta.append($divAccionesBotones);

        // apend to HTML
        $listContanier.append($listItem);
    } // fin del for



    // accion para boton SÍ
    $(".btn-success").click(function(){
        let tipo = $(this).data("tipo");
        alert( "hisciste click en: " +  tipo + " ");
    });

    //acción para boton NO
    $(".btn-danger").click(function(){
        $(this).parent().parent()[0].childNodes[0]
            .style.textDecoration = 'line-through';
        
    });


    $("#boton-data-id").click(function(){

        let id = $(this).data("id");
        alert(id);

    });

  }
);