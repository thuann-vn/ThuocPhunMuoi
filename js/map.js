function initMap() {
    //Center map to Ha Noi: 
    var centerMap = { lat: 21.027763, lng: 105.834160};

    // Create a map object and specify the DOM element
    // for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: centerMap,
        zoom: 14
    });

    $('.contact-list').find('li').each(function () {
        var itemEl = $(this).find('a');
        var lat = itemEl.data('lat');
        var lng = itemEl.data('lng');
        var marker = { lat: parseFloat(lat), lng: parseFloat(lng) };

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
            map: map,
            position: marker,
            title: itemEl.data('title')
        });

        itemEl.click(function(e){
            e.preventDefault();

            map.panTo({ lat: parseFloat(lat), lng: parseFloat(lng) });

            var addressEl = $('address');
            var dataList = ['address', 'tel', 'mobile', 'email'];

            for(var i=0; i<dataList.length; i++){
                var name = dataList[i];
                addressEl.find('.' + name).html($(this).data(name));
            }

            $('.map-title').html($(this).data('title'));
        })
    });

    $('.contact-list').find('li').eq(0).find('a').trigger('click');
}