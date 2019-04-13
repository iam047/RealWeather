import {IDataWeather} from "../../store/initialStateTypes/WeatherReducer";

export interface IStartProps {
    navBack: () => any;
    findCityWeather: (value: string) => any;
    dataCityWeather: IDataWeather;
}

export interface IStartState {

}
