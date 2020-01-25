import React from '../../node_modules/react';
import {StyleSheet, Text, View} from '../../node_modules/react-native';
import {Header} from '../sections/Header.js';
import {Menu} from '../sections/Menu.js';

export class Home extends React.Component{
    static navigationOptions = {
        headerShown: false
    };
    
    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style = {styles.container}>
                <Header message = 'Press to Login' />
                
                <View style = {styles.middle}>

                </View>

                <Menu navigate = {navigate} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    middle: {
        flex: 15
    }
    
})