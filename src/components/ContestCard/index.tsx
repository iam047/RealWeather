import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {Text, Card, Divider} from 'react-native-elements';

import styles from './styles';

export interface IProps {
    detail: any;
    location: any;
}

export default class ForecastCard extends Component<IProps> {

    render() {
        const {location, detail} = this.props;
        let time;
        const date = new Date(detail.dt * 1000);
        const month = date.getUTCMonth() + 1;
        const day = date.getUTCDate();
        const year = date.getUTCFullYear();
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        time = hours + ':' + minutes.substr(-2);
        const newDate = year + "/" + month + "/" + day;
        return (
            <Card containerStyle={styles.card}>
                <View style={[styles.contentWrapper, {alignItems: 'center'}]}>
                    <Text style={styles.notes}>{location}</Text>
                    <Text style={styles.notes}>{newDate}</Text>
                </View>
                <View style={[styles.contentWrapper, {alignItems: 'center'}]}>
                    <Image style={{width: 100, height: 100}}
                           source={{uri: "https://openweathermap.org/img/w/" + detail.weather[0].icon + ".png"}}/>
                    <Text style={styles.time}>{time}</Text>
                </View>

                <Divider style={{backgroundColor: '#dfe6e9', marginVertical: 20}}/>

                <View style={styles.contentWrapper}>
                    <Text style={styles.notes}>{detail.weather[0].description}</Text>
                    <Text style={styles.notes}>{Math.round(detail.main.temp * 10) / 10}&#8451;</Text>
                </View>
            </Card>
        )
            ;
    }
}
