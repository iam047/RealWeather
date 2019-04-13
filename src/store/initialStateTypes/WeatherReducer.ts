export interface WeatherReducer {
    dataCityWeather: IDataWeather;
    dataLocationWeather: IDataLocationWeather;
}

export interface IDataWeather {
    city: ICityData;
    list: IListData;
}

export interface IDataLocationWeather {
    base: string;
    coord: LatLon;
    dt: number;
    id: number;
    main: IMain;
    name: string;
    sys: ISys;
    visibility: number;
    weather: IWeather[];
    wind: IWind;
}

export interface IMain {
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number,
}

export interface ISys {
    country: string,
    id: number,
    message: number,
    sunrise: number,
    sunset: number,
    type: number,
}

export interface IWeather {
    description: string,
    icon: string,
    id: number,
    main: string,
}

export interface ICityData {
    coord: LatLon
    country: string,
    id: number,
    name: string,
    population: number,
    cnt: number,
    cod: string,
}

export interface IWind {
    deg: number,
    speed: number,
}

export interface IListData {
    data: any
}

export interface LatLon {
    lat: any
    lon: any
}
