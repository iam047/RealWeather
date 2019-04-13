import React from 'react';
import {connect} from 'react-redux';
import {
    Text,
    View,
    ImageBackground,
    Image, ScrollView,
} from 'react-native';

import {IPropsLocationWeather, IStateLocationWeather} from './types';
import styles from './styles';
import * as image from "../../resources/images/images";
import {IInitialState} from "../../store/initialStateTypes";

class LocationWeather extends React.Component<IPropsLocationWeather, IStateLocationWeather> {

    render() {
        const {dataLocationWeather: {name, dt, weather, main, wind, sys: {sunrise, sunset}}} = this.props;
        let time;
        const date = new Date(dt * 1000);
        const dataSunrise = new Date(sunrise * 1000);
        const hoursSunrise = dataSunrise.getHours();
        const minSunrise = '0' + dataSunrise.getMinutes();
        const Sunrise = hoursSunrise + ':' + minSunrise.substr(-2);
        const dataSunset = new Date(sunset * 1000);
        const hoursSunset = dataSunset.getHours();
        const minSunset = '0' + dataSunset.getMinutes();
        const Sunset = hoursSunset + ':' + minSunset.substr(-2);
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        time = hours + ':' + minutes.substr(-2);
        const newDate = year + "/" + month + "/" + day;
        console.log(time, newDate);
        console.log(main);
        const T = `max${Math.round(main.temp_max - 273)}/min${Math.round(main.temp_min - 273)}`;
        return (
            <ImageBackground
                style={{flex: 1}}
                source={image.backgroundImage}
                resizeMode="cover"
            >
                <ScrollView>
                    <View style={styles.container}>
                        <View style={{marginTop: 40, justifyContent: 'center', alignItems: 'center'}}>
                            <Text style={styles.textCityName}>{name}</Text>
                        </View>
                    </View>

                    <View style={{margin: 20}}>
                        <View style={[styles.contentWrapper, {alignItems: 'center'}]}>
                            <Image style={{width: 100, height: 100}}
                                   source={{uri: "https://openweathermap.org/img/w/" + weather[0].icon + ".png"}}/>
                            <Text style={styles.time}>{time}</Text>
                        </View>

                        <View style={styles.contentWrapper}>
                            <Text style={styles.notes}>{weather[0].description}</Text>
                            <Text style={styles.notes}>{Math.round(main.temp - 273)}&#8451;</Text>
                        </View>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.notes}>Temperature</Text>
                            <Text style={styles.notes}>{T}&#8451;</Text>
                        </View>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.notes}>Speed Wind</Text>
                            <Text style={styles.notes}>{wind.speed}m/s</Text>
                        </View>
                        <View style={styles.contentWrapper}>
                            <Text style={styles.notes}>Sunrise/Sunset</Text>
                            <Text style={styles.notes}>{`${Sunrise}/${Sunset}`}</Text>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const mapStateToProps = ({weatherReducer}: IInitialState) => ({
    dataLocationWeather: weatherReducer.dataLocationWeather,
});

export default connect(mapStateToProps, null)(LocationWeather);
