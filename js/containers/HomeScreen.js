'use strict';

import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TextInput,
  AsyncStorage,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  Platform,
  Alert
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { fetchData } from '../actions/index';
import styles from './styles/HomeScreenStyle';


class HomeScreen extends PureComponent {

  constructor(props) {
    super(props);

    this._fetchTestData = this._fetchTestData.bind(this)
  }

  componentDidUpdate() {
    console.log(this.props)
    const { quizStarted } = this.props;

    if(quizStarted) Actions.quiz({ type: Actions.RESET })
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.title}>Welcome to the Trivia Challenge!</Text>
        <Text style={[styles.title, styles.mainMessage]}>You will be presented with 10 True of False questions.</Text>
        <Text style={styles.title}>Can you score 100%?</Text>

        <TouchableOpacity onPress={this._fetchTestData}
                          style={styles.beginButton}>
          <Text style={styles.buttonText}>
            BEGIN
          </Text>
        </TouchableOpacity>

      </View>

    )
  }


  _fetchTestData() {

    const { storage, fetchData } = this.props;
    if(!!storage.questionsList.length) Actions.quiz({ type: ActionConst.RESET })
    else fetchData()

  }

}


const mapStateToProps = state => {

  return {
    storage: state.storage,
    quizStarted: state.storage.quizStarted
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
