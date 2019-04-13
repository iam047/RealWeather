import * as actions from '../store/actionTypes';

export function findCityWeather(dataCityWeather: any) {
    return {
        type: actions.FIND_CITY_WEATHER,
        payload: dataCityWeather
    }
}

export function findLocationWeather(dataLocationWeather: any) {
    return {
        type: actions.FIND_LOCATION_WEATHER,
        payload: dataLocationWeather,
    }
}
