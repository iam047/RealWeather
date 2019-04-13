import { MockReducer } from './MockReducer';
import { WeatherReducer } from './WeatherReducer';

export interface IInitialState {
    mockReducer: MockReducer;
    navReducer: any;
    weatherReducer: WeatherReducer;
}
