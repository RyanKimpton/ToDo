import React from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { StackNavigator} from 'react-navigation-stack';


export class Landing extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  static navigationOptions = {
    headerShown: false
  };
  
  onLogin() {
    
    const { username, password } = this.state;

    this.props.navigation.navigate('HomeRoute', {username});

    Alert.alert(`Welcome ${username}`, `The password entered is ${password}`);

    
  }

  render() {
    

    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
