'use strict';

import React from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View } from 'react-native';

import appStore from './store/appStore';
import SceneHandler from './containers/SceneHandler';
import HomeScreen from './containers/HomeScreen';
import QuizScreen from './containers/QuizScreen';
import ResultsScreen from './containers/ResultsScreen';


const RouterWithRedux = connect()(Router);

const scenes = Actions.create(
    <Scene key="root">

      <Scene key="router"
             component={ SceneHandler }
             initial={true}
             hideNavBar={true}
      />

      <Scene key="home"
             component={ HomeScreen }
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
  return  props.storage.storageLoaded ? <RouterWithRedux scenes={scenes} hideNavBar={true} /> : <View />
};

export default connect(state => state)(App);