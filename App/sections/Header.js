import React from '../../node_modules/react';
import {Alert} from 'react-native'
import {StyleSheet, Text, View, Image} from '../../node_modules/react-native';
import { navigation } from 'react-navigation';


export class Header extends React.Component {
    constructor(props) {
        super(props);

        console.log(this.props)
        
        this.state = {navi : this.props.navigator};
    }

    static navigationOptions = {
        headerShown: false
      };


    render() {
        let name = this.props.message;

        return (
            <View style = {styles.headStyle}>
                <Text onPress =  {() => this.state.navi.navigate('LandingRoute')} style = {styles.logoutText}>
                    Logout
                </Text>

                <Text style = {styles.headText}>
                    {name}'s todo list
                </Text>
            </View>
        )
    }
}

export default Header;

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    logoutText: {
        textAlign: 'left',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#008080',
        flex: 1,
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined
    }
});