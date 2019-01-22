import React                            from 'react';
import { connect }                      from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

import { IStartProps, IStartState } from './types';
import { navBack }                  from '../../actions';
import styles                       from './styles';

class StartScreen extends React.Component<IStartProps, IStartState> {
    componentDidMount() {
        //fetch('http://api.openweathermap.org/data/2.5/weather?lat=49.26&lon=32.3&APPID=380333d47d591b073e01150c5943197a')
        fetch('https://api.darksky.net/forecast/e6c9afe1d5a53031082a853ae00ce790/49.42854,32.06207')
            .then(response => response.json())
            .then(date => console.log(JSON.stringify({ date }, null, 4)))
            .catch(error => {
                console.log('error', error);
            });
    }

    render() {
        return (
            <View style={ styles.container }>
                <TouchableOpacity onPress={ () => this.props.navBack() }>
                    <Text>StartScreen </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, { navBack })(StartScreen);
