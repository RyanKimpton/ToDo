import React from '../../node_modules/react';
import {StyleSheet, Text, View} from '../../node_modules/react-native/Libraries/react-native/react-native-implementation';
import {Header} from '../sections/Header.js';
import {Menu} from '../sections/Menu.js';
import AddButton from '../utils/AddButton.js'

import { FAB } from 'react-native-paper';




export class Home extends React.Component{
    static navigationOptions = {
        headerShown: false
    };

    
    
    render() {
        const {navigate} = this.props.navigation;

        const user = this.props.navigation.state.params.username;



        return (
            <View style = {styles.container}>
                <Header message = {user} navigator = {this.props.navigation}/>

                <View style = {styles.middle}>
                    <FAB
                        style={styles.fab}
                        small
                        icon="plus"
                        color = '#008080'
                        onPress={() => console.log('Pressed')}
                    />
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
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
    
})