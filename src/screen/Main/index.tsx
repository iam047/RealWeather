import React from 'react';
import {connect} from 'react-redux';
import {Icon} from "react-native-elements";

import {Text, View, TouchableOpacity, ImageBackground, TextInput} from 'react-native';
import * as image from '../../resources/images/images'
import {IMainProps, IMainState} from './types';
import {navByRouteName, findCityWeather, findLocationWeather} from '../../actions';
import {fetchWeather, fetchLocationWeather} from "../../api"

import styles from './styles';
import {IInitialState} from "../../store/initialStateTypes";

class MainScreen extends React.Component<IMainProps, IMainState> {
    state = {
        longitude: 0,
        latitude: 0,
        city: '',
        ShowErrorMes: false,
    };

    changeText = (value: string) => {
        this.setState({city: value})
    };


    getLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState(
                    (prevState) => ({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    }), () => {
                        this.fetchLocWeather();
                    }
                );
            },
            (error) => this.setState({forecast: error.message}),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
    }

    findCityWeather = async () => {
        const {city} = this.state;
        const weatherCityData = await fetchWeather(city);

        if (weatherCityData.cod === '404') {
            this.setState({ShowErrorMes: true});
            setTimeout(() => this.setState({ShowErrorMes: false}), 1200)
        } else {
            this.props.findCityWeather(weatherCityData);
            this.props.navByRouteName('Start');
            this.setState({city: ''})
        }
    };


    fetchLocWeather = async () => {
        const {longitude, latitude} = this.state;
        const locationWeatherData = await fetchLocationWeather(latitude, longitude);

        if (locationWeatherData.cod === '404') {
            this.setState({ShowErrorMes: true});
            setTimeout(() => this.setState({ShowErrorMes: false}), 1200)
        } else {
            this.props.findLocationWeather(locationWeatherData);
            this.props.navByRouteName('LocationWeather');
            this.setState({city: ''})
        }
    };

    render() {
        const {city, ShowErrorMes} = this.state;
        return (
            <ImageBackground
                style={{flex: 1}}
                source={image.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <Text style={styles.titleText}>Real Weather</Text>
                </View>
                <View style={styles.container}>
                    {ShowErrorMes && <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10,}}>
                        <Text style={{color: 'red', fontSize: 15}}>
                            Unfortunately, this city does not have in our database
                        </Text>
                    </View>}
                    <TextInput
                        value={this.state.city}
                        placeholder={'Enter city name'}
                        placeholderTextColor="black"
                        onChangeText={this.changeText}
                        underlineColorAndroid="white"
                        style={styles.inputStyle}
                    />
                </View>

                <View style={styles.wrapperButton}>
                    <TouchableOpacity
                        style={[styles.buttonStyle, !city.length && styles.buttonColorGrey]}
                        onPress={!city.length ? () => {
                        } : () => this.findCityWeather()}
                    >
                        <Text style={styles.textButtonStyle}>FIND CITY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        onPress={() => this.getLocation()}
                    >
                        <Icon name={'room'}/>
                    </TouchableOpacity>

                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = ({weatherReducer}: IInitialState) => ({
    dataLocationWeather: weatherReducer.dataLocationWeather,
});

export default connect(mapStateToProps, {findLocationWeather, findCityWeather, navByRouteName})(MainScreen);
