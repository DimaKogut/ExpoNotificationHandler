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

import { passAgain } from '../actions/index';
import styles from './styles/ResultsScreenStyle';


class ResultsScreen extends PureComponent {

  constructor(props) {
    super(props);

    this._passAgain = this._passAgain.bind(this)
    this._renderList = this._renderList.bind(this)
  }


  render() {

    const { storage } = this.props;
    const { score, questionsList } = storage

    return (
      <View style={styles.container}>

        <View>
          <Text style={[styles.globalStyles, styles.scoreText]}>You scored</Text>
          <Text style={[styles.globalStyles, styles.scoreText]}>{ storage.score } / {questionsList.length}</Text>
        </View>

        <ScrollView style={styles.scrollBlock}>
          {
            this._renderList()
          }
        </ScrollView>

        <TouchableOpacity onPress={this._passAgain}
                          style={styles.beginButton}>
          <Text style={styles.buttonText}>
            Try Again ?
          </Text>
        </TouchableOpacity>

      </View>

    )

  }

  _renderList() {
    const { questionsList } = this.props.storage;

    return questionsList.map((item, index) => {
      return(
        <View key={index}
              style={styles.questionItem}>
          <View style={styles.sighItem}>
            {
              item.answer ?
                <Text style={styles.sighItemIcon}>+</Text>
              :
               <Text style={styles.sighItemIcon}>-</Text>
            }
          </View>
          <View style={styles.question}>
            <Text style={styles.questionText}>{item.question}</Text>
          </View>
        </View>
      )
    })
  }

  _passAgain() {
    this.props.passAgain()
    Actions.home({ type: ActionConst.RESET })
  }

}


const mapStateToProps = state => {

  return {
    storage: state.storage,
  }

}

const mapDispatchToProps = dispatch => {
  return {
    passAgain: () => {
      dispatch(passAgain())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsScreen)
