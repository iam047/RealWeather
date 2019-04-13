import initialState from './../store/initialState';
import * as types from './../store/actionTypes';
import { WeatherReducer } from '../store/initialStateTypes/WeatherReducer';
import { handleActions } from '../store/utils';

export default handleActions(initialState.weatherReducer, {
    [types.FIND_CITY_WEATHER]: (state: WeatherReducer, { payload }: { payload: WeatherReducer }) => ({
        ...state,
        dataCityWeather: payload,
    }),
    [types.FIND_LOCATION_WEATHER]: (state: WeatherReducer, { payload }: { payload: WeatherReducer }) => ({
        ...state,
        dataLocationWeather: payload
    }),
});
