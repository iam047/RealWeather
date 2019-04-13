import { NavigationParams } from 'react-navigation';

export interface IMainProps {
    navByRouteName: (routeName: string, params?: NavigationParams) => any;
    findCityWeather: (value: string) => any;
    findLocationWeather: (val: any) => any;
}

export interface IMainState {

}
