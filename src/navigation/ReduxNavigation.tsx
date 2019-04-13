import * as React from 'react';
import {BackHandler} from 'react-native';
import {NavigationDispatch, NavigationState} from 'react-navigation';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {IInitialState} from '../store/initialStateTypes';
import AppNavigation from './AppNavigation';
import {navBack} from "../actions";

const Navigation = reduxifyNavigator(AppNavigation, 'root');

interface IProps {
    state: NavigationState;
    dispatch: NavigationDispatch;
    navBack: () => {};
}

class ReduxNavigation extends React.Component<IProps> {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress = () => this.props.navBack();

    render() {
        const { state, dispatch } = this.props;

        return <Navigation state={ state } dispatch={ dispatch }/>;
    }
}

const mapStateToProps = ({ navReducer }: IInitialState) => ({
    state       : navReducer,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    { dispatch, navBack },
    dispatch,
);

export default connect(mapStateToProps, mapDispatchToProps)(ReduxNavigation);
