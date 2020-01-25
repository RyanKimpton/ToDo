import React from '../../node_modules/react';
import {StyleSheet, View, TouchableOpacity, Text, Alert} from '../../node_modules/react-native';

export class Menu extends React.Component {
    onPress = () => {
        Alert.alert('You pressed the button!');
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.buttonRow}>
                    <TouchableOpacity style = {styles.buttonStyles} onPress = {this.onPress}>
                        <Text style = {styles.buttonText}>
                            Calender 
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.buttonStyles} onPress = {this.onPress}>
                        <Text style = {styles.buttonText}>
                            List
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.buttonStyles} onPress = {this.onPress}>
                        <Text style = {styles.buttonText}>
                            Contact Us
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#35605a'
    },
    buttonRow: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles: {
        backgroundColor: '#35605a',
        flex: 1,
        width: '50%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#000000',
        fontSize: 18
    }

})