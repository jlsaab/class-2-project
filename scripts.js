// $('button').click(function () {
//     $('#column-right').updateClass(".active").fadeToggle();
// })
$('#column-right').hide()

$('button').on('click', function () {
    var place = $(this).data('place')

    $('#column-right').empty().css("background-color", "rgba(37, 49, 84, 0.7)").show()

    if (place === 'idaho') {
        $('#column-right').css('background-image', 'url("https://www.hubblehomes.com/images/headerimage/mountain-home-idaho-new-homes-hubble-homes-01.jpg")')
        $('#column-right').text('Mountain Home, Idaho')
    }
    if (place === 'italy') {
        $('#column-right').css('background-image', 'url("https://www.igotravelnetwork.com/immagini/articoli_itinerario/large/79_382_shutterstock_1136337089.jpg")')
        $('#column-right').text('Pordenone, Italy')
    }
    if (place === 'nj') {
        $('#column-right').css('background-image', 'url("https://photos.zillowstatic.com/fp/d3210d9e288fe5fb2447544a8d80162f-p_e.jpg")')
        $('#column-right').text('Browns Mills, New Jersey')
    }
    if (place === 'fl') {
        $('#column-right').css('background-image', 'url("https://us1-photo.nextdoor.com/post_photos/e6/72/e6720edbd6309e907ca5332dba4b0731.jpg")')
        $('#column-right').text('Valrico, Florida')
    }
    if (place === 'spain') {
        $('#column-right').css('background-image', 'url("https://cycling-friendly.com/wp-content/uploads/2023/04/san-javier-cycling-friendly-000.jpg")')
        $('#column-right').text('San Javier, Spain')
    }
    if (place === 'germany') {
        $('#column-right').css('background-image', 'url("https://us.images.westend61.de/0001365228pw/germany-baden-wurttemberg-kongen-aerial-view-of-countryside-highway-at-springtime-sunset-WDF05967.jpg")')
        $('#column-right').text('Stuttgart, Germany')
    }
    if (place === 'tx') {
        $('#column-right').css('background-image', 'url("https://visit-abilene.s3.amazonaws.com/images/abilene.jpg?v=1650071420")')
        $('#column-right').text('Abilene, Texas')
    }
    if (place === 'nyc') {
        $('#column-right').css('background-image', 'url("https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iU.dprk0DbdQ/v1/-1x-1.jpg")')
        $('#column-right').text('Bushwick, Brooklyn')
    }
})
