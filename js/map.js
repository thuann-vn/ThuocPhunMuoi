function initMap() {
    //Center map to Ha Noi: 
    var centerMap = {lat: 21.027763, lng: 105.834160};

    // Create a map object and specify the DOM element
    // for display.
    var map = new google.maps.Map(document.getElementById('map'), {
    center: centerMap,
    zoom: 14
    });

    $('.contact-list').find('li').each(function(){
        var itemEl = $(this).find('a');
        var lat = itemEl.data('lat');
        var lng = itemEl.data('lng');
    var marker = {lat: parseInt(lat), lng: parseInt(lng)};

        
    // Create a marker and set its position.
    var marker = new google.maps.Marker({
    map: map,
    position: marker,
    title: itemEl.data('title')
    });
    })
}