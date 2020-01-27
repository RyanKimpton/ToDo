import React from 'react';
import {Home} from './App/views/Home.js';
import {Landing} from './App/views/Landing.js';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


const MyRoutes = createStackNavigator({
  HomeRoute: {
    screen: Home
  },
  // ListRoute: {
  //   screen: List
  // },
  // SignInRoute: {
  //   screen: SignIn
  // },
  LandingRoute: {
    screen: Landing
  },
},
  {
    initialRouteName: 'LandingRoute'
  }
)

const App = createAppContainer(MyRoutes);

export default App;
