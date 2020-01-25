import React from '../../node_modules/react';
import {StyleSheet, Text, View, Image} from '../../node_modules/react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn : false};
    }

    toggleUser = () => {
        this.setState(previousState => {
            return { isLoggedIn: !previousState.isLoggedIn};
        });
    }

    render() {
        let display = this.state.isLoggedIn ? 'sample User' : this.props.message;
        return (
            <View style = {styles.headStyle}>
                <Text onPress = {this.toggleUser} style = {styles.headText}>
                    {display}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        backgroundColor: '#35605a',
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