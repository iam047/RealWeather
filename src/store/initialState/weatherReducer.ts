export default {
    dataCityWeather: {
        city: {
            coord: {
                lat: 0,
                lon: 0,
            },
            country: '',
            id: 0,
            name: '',
            population: 0,
            cnt: 0,
            cod: '',
        },
        list: []
    },
    dataLocationWeather: {
        base: '',
        clouds: {
            all: 0
        },
        coord: {
            lat: 0,
            lon: 0,
        },
        dt: 0,
        id: 0,
        main: {
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0,
        },
        name: '',
        sys: {
            country: '',
            id: 0,
            message: 0,
            sunrise: 0,
            sunset: 0,
            type: 0,
        },
        visibility: 0,
        weather: [{
            description: '',
            icon: '',
            id: 0,
            main: '',
        }],
        wind: {
            deg: 0,
            speed: 0,
        },
    }

};
