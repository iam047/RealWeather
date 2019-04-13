import React from 'react';
import {connect} from 'react-redux';
import {
    Text,
    View,
    ImageBackground,
    FlatList
} from 'react-native';

import {IStartProps, IStartState} from './types';
import {navBack, findCityWeather} from '../../actions';
import styles from './styles';
import * as image from "../../resources/images/images";
import {IInitialState} from "../../store/initialStateTypes";
import ForecastCard from "../../components/ContestCard";

class StartScreen extends React.Component<IStartProps, IStartState> {

    render() {
        const {dataCityWeather: {city: {name, population}, list},} = this.props;
        return (
            <ImageBackground
                style={{flex: 1}}
                source={image.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.container}>
                    <View style={{marginTop: 40, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.textCityName}>{name}</Text>
                        <Text style={{fontSize: 15, color: 'grey'}}>Population of the city {population}</Text>
                    </View>
                </View>
                <FlatList
                    data={list}
                    style={{marginTop: 20}}
                    keyExtractor={item => item.dt_txt}
                    renderItem={({item}) => <ForecastCard detail={item} location={name}/>}/>
            </ImageBackground>
        );
    }
}

const mapStateToProps = ({weatherReducer}: IInitialState) => ({
    dataCityWeather: weatherReducer.dataCityWeather,
});

export default connect(mapStateToProps, {findCityWeather, navBack})(StartScreen);
