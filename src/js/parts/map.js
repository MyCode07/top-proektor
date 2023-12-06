let myMap;
const mapIconPath = '/wp-content/themes/blank-sheet/assets/img/icons/map-icon.svg';
const mapTabs = document.querySelectorAll('.map-tabs li');
const zoom = 15.5;

export const createMap = () => {
    if (!mapTabs.length) return;

    const defaultmap = mapTabs[0];
    const defLat = +defaultmap.dataset.lat
    const defLong = +defaultmap.dataset.long

    ymaps.ready(function () {
        myMap = new ymaps.Map('map', {
            center: [defLat, defLong],

            zoom: zoom,
        });

        var myPlacemark = new ymaps.Placemark(
            [defLat, defLong],
            {},
            {
                iconLayout: 'default#image',
                iconImageHref: mapIconPath,
                iconImageSize: [70, 70]
            }
        );

        myMap.geoObjects.add(myPlacemark);

    });

    mapTabs.forEach(tab => {
        const tabId = tab.dataset.id;
        tab.addEventListener('click', () => {

            if (!tab.classList.contains('_active')) {
                mapTabs.forEach(item => {
                    if (item.dataset.id == tabId)
                        item.classList.add('_active')
                    else
                        item.classList.remove('_active')
                })

                changeMapLocation(tab)
            }
        })
    })
}


function changeMapLocation(tab) {
    const lat = +tab.dataset.lat
    const long = +tab.dataset.long

    if (myMap && myMap.geoObjects) {
        myMap.geoObjects.removeAll();
    }

    let newPlacemark = new ymaps.Placemark(
        [+lat, +long],
        {},
        {
            iconLayout: 'default#image',
            iconImageHref: mapIconPath,
            iconImageSize: [70, 70]
        }
    );

    if (myMap) {
        myMap.geoObjects.add(newPlacemark);
        myMap.setCenter([+lat, +long], 15.52);
    }
    console.log([+lat, +long]);
}