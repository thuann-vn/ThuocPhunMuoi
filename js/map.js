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
        $(this).find('a').click(function (e) {
            e.preventDefault();
            var itemEl = $(this);
            var lat = itemEl.data('lat');
            var lng = itemEl.data('lng');
            if (lat && lng) {
                var marker = { lat: parseFloat(lat), lng: parseFloat(lng) };

                // Create a marker and set its position.
                new google.maps.Marker({
                    map: map,
                    position: marker,
                    title: itemEl.data('title')
                });
                map.panTo({ lat: parseFloat(lat), lng: parseFloat(lng) });
                $('#image').hide();
            } else {
                $('#image').css('background-image', 'url(' + $(this).data('image') + ')').show();
            }

            var addressEl = $('address');
            var dataList = ['address', 'tel', 'mobile', 'email'];

            for (var i = 0; i < dataList.length; i++) {
                var name = dataList[i];
                addressEl.find('.' + name).html($(this).data(name));
            }

            $('.map-title').html($(this).data('title'));
            $('.contact-list').removeClass('active');
        })
    });

    $('.contact-list').find('li').eq(0).find('a').trigger('click');

    $('.contact-list-toggle').click(function(e){
        e.preventDefault();
        $('.contact-list').toggleClass('active');
    })
}