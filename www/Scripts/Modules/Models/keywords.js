$(document).on('pageshow', '#keywords', function () {
    console.log("Inicializando palabras clave...");
    var tagWidth;
    var tagHeight;
    var tagMaxSize;
    tagWidth = $("#tagcloud").width();
    tagHeight = $("#tagcloud").height();
    tagMaxSize = (tagWidth >= tagHeight) ? tagWidth : tagHeight;
    console.log(tagWidth);
    console.log(tagHeight);
    console.log(tagMaxSize);
    $('#tagcloud-canvas').width(tagMaxSize);
    //$('#tagcloud-canvas').height(tagHeight);
    if (!$('#tagcloud-canvas').tagcanvas({
        textColour: 'rgb(45,74, 128)',
        outlineThickness: 1,
        maxSpeed: 0.03,
        depth: 0.75,
        dragControl: true,
        initial: [0.2, -0.3],
        textHeight: 20, txtOpt: true, wheelZoom: false, txtScale: 2
    })) {
        // TagCanvas failed to load
        console.log("Sin inicializar");
        $('#tagcloud').hide();
    }
    else {
        console.log("Componente inicializado");
    }
});