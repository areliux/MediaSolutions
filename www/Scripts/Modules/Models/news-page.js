$(document).on('pageshow', '#news-page', function () {
    console.log("inicializando noticias...");
    var medias = ['2night', '101', 'ahora',
        'cnn', 'CNNmexico', 'milenio',
        'reforma', 'Televisa', 'tvazteca', 'zunoticia'];
    var titles = ['Lorem ipsum dolor', 'Consectetur adipisicing elit',
        'Sed do eiusmod', 'Tempor incididunt ut labore',
        'Dolore magna aliqua', 'Ut enim ad minim ',
        'Quis nostrud', 'Exercitation ullamco',
        'Laboris nisi', 'Duis aute irure'];
    var abstracts = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur enim dui, semper sed accumsan vitae, eleifend varius orci. Ut sed justo quam.',
    'In at risus ullamcorper, interdum erat a, iaculis tellus. Proin nec leo sed augue faucibus ullamcorper at quis magna. Nulla facilisi.',
    'Mauris a nisl aliquam, laoreet augue volutpat, cursus tortor. Morbi quis justo tincidunt, molestie nisi ut, condimentum lacus.',
    'Aenean eu vehicula dolor, vitae tincidunt lectus. Proin cursus nibh neque, at tincidunt dolor feugiat quis. ',
    'Vestibulum elementum neque enim, ac aliquam leo fringilla ac. Pellentesque ut felis nec dui rutrum eleifend eget nec ante. ',
    'Donec imperdiet ligula non orci tincidunt lacinia. Nullam pretium justo sit amet urna lacinia, non consequat metus tincidunt.']
    var mediaTypes = ['internet',
    'periodicos',
    'radio',
    'redes-sociales',
    'revista',
    'television'];
    var newsTypes = ['analisis', 'articulo', 'carta',
        'cartones', 'columna', 'comunicados',
        'debate', 'desplegado', 'edicto-convocatoria',
        'editorial', 'entrevista', 'esquela',
        'estadistica', 'nota-comun', 'ocho-columnas',
        'portada-seccion', 'primera-plana', 'publicidad',
        'publireportaje', 'recuadro', 'redes-sociales', 'reportaje'];
    for (var indice = 0; indice < 10; indice++) {
        var media = medias[Math.floor(Math.random() * medias.length)];
        var title = titles[Math.floor(Math.random() * titles.length)];
        var abstract = abstracts[Math.floor(Math.random() * abstracts.length)];
        var mediaType = mediaTypes[Math.floor(Math.random() * mediaTypes.length)];
        var newsType = newsTypes[Math.floor(Math.random() * newsTypes.length)];
        var newsItem = '<li data-icon="false">' + '<a href="news-detail.html" rel="external" class="news-itemlist">' +
            '<img alt="' + media + '" src="Resources/Images/Media/' + media + '.png" class="media-logo" />' +
            '<img alt="' + mediaType + '" src="Resources/Images/MediaTypes/' + mediaType + '.png" class="media-type" />' +
            '<img alt="' + newsType + '" src="Resources/Images/NewsTypes/' + newsType + '.png" class="news-type" />' +
            '<h2>' + title + '</h2><p>' +
            abstract + '</p></a></li>';
        $("#news-feed").append(newsItem);
    }
    $('#news-feed').listview('refresh');
});