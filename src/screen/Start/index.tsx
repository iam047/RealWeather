import React                            from 'react';
import { connect }                      from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';
import config                           from 'react-native-config';

import { IStartProps, IStartState } from './types';
import { navBack }                  from '../../actions';
import styles                       from './styles';

class StartScreen extends React.Component<IStartProps, IStartState> {
    componentDidMount() {
        fetch(`https://api.darksky.net/forecast/${config.API_DARKSKY_NET_KEY}/49.42854,32.06207`)
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
