import React from 'react';
import {Home} from './app/views/Home.js';
import {Contact} from './app/views/Contact.js'
import {createStackNavigator, createAppContainer} from 'react-navigation-stack';

const MyRoutes = createStackNavigator({
  HomeRoute: {
    screen: Home
  },
  ListRoute: {
    screen: List
  },
  SignInRoute: {
    screen: SignIn
  }
},
  {
    initialRouteName: 'HomeRT'
  }
)

const App = createAppContainer(MyRoutes);

export default App;
