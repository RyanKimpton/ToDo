import React from '../../node_modules/react';
import {StyleSheet, Text, View, Image} from '../../node_modules/react-native';
import { withNavigation } from 'react-navigation';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn : false};
    }

    static navigationOptions = {
        headerShown: false
      };

    logout() {
        console.log("hello");
        console.log(this.props);

        this.props.navigation.navigate('LandingRoute');

        Alert.alert(`Goodbye ${username}`);
    }

    render() {
        let name = this.state.isLoggedIn ? 'sample User' : this.props.message;
        return (
            <View style = {styles.headStyle}>
                <Text onPress = {this.logout} style = {styles.logoutText}>
                    Logout
                </Text>

                <Text style = {styles.headText}>
                    {name}'s todo list
                </Text>
            </View>
        )
    }
}

export default withNavigation(Header);

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