import React, { Component } from 'react';
import { Router, Scene, Actions, ActionConst } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

import appStore from './store/appStore';
import HomeScreen from './containers/HomeScreen';
import QuizScreen from './containers/QuizScreen';
import ResultsScreen from './containers/ResultsScreen';


const RouterWithRedux = connect()(Router);

const scenes = Actions.create(
    <Scene key="root">

      <Scene key="home"
             component={ HomeScreen }
             initial={true}
             hideNavBar={true}
      />

      <Scene key="quiz"
             component={ QuizScreen }
             hideNavBar={true}
      />

      <Scene key="results"
             component={ ResultsScreen }
             hideNavBar={true}
      />

    </Scene>

  )

const App = (props) => {
  return <RouterWithRedux scenes={scenes} hideNavBar={true} />
};

export default connect(state => state)(App);