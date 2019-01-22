import React                            from 'react';
import { connect }                      from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

import { IMainProps, IMainState } from './types';
import { navByRouteName }         from '../../actions';
import styles                     from './styles';

class MainScreen extends React.Component<IMainProps, IMainState> {


    render() {
        return (
            <View style={ styles.container }>
                <TouchableOpacity onPress={ () => this.props.navByRouteName('Start') }>
                    <Text>MainScreen</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect(null, { navByRouteName })(MainScreen);
