'use strict';

import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import { setAnswer, finishedQuiz } from '../actions/index';
import styles from './styles/QuizScreenStyle';
import appStore from '../store/appStore';


class QuizScreen extends PureComponent {

  constructor(props) {
    super(props);


    this._renderContent = this._renderContent.bind(this)
    this._scrollTo = this._scrollTo.bind(this)
    this._onMomentumScrollEnd = this._onMomentumScrollEnd.bind(this)
    this._setAnswer = this._setAnswer.bind(this)


    const { storage } = appStore.getState()
    const { questionIndex, questionsList } = storage;
    this.currentIndex = questionIndex;
    this.questionsList = questionsList;

  }

  _onMomentumScrollEnd(e, state, context) {
    this.currentIndex = state.index;
  }


  _scrollTo() {
    const index = this.currentIndex - this.swiper.state.index;

    this.swiper.scrollBy(index + 1);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Swiper style={styles.swiper}
                showsPagination={false}
                loop={false}
                onMomentumScrollEnd={this._onMomentumScrollEnd}
                index={this.currentIndex}
                scrollEnabled={false}
                ref={component => this.swiper = component}>

            { this._renderContent() }

        </Swiper>
      </View>
    )
  }

  _renderContent() {

    return this.questionsList.map((item, index) => {

      return(
        <View key={index} style={styles.questionBlock}>
        <View>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={[styles.counter, styles.globalStyles]}>{index + 1} / 10</Text>
          </View>
          <View>

            <View style={styles.questionBox}>
              <Text style={[styles.questionTextStyle, styles.globalStyles]}>{ item.question }</Text>
            </View>

            <View style={styles.buttonsBlock}>
            <TouchableOpacity activeOpacity={0.8}
                              onPress={() => this._setAnswer('True')}
                              style={[styles.buttonItem, styles.trueButton]}>
              <Text style={styles.buttonText}>TRUE</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}
                              onPress={() => this._setAnswer('False')}
                              style={[styles.buttonItem, styles.falseButton]}>
              <Text style={styles.buttonText}>FALSE</Text>
            </TouchableOpacity>
            </View>

          </View>

        </View>
      )
    })
  }

  _setAnswer(answer) {

    const { setAnswer, finishedQuiz } = this.props;

    if(this.currentIndex < this.questionsList.length - 1){
      setAnswer({answer, questionIndex: this.currentIndex});
      this._scrollTo()
    } else {
      finishedQuiz()
      Actions.results({type: ActionConst.RESET })
    }

  }

}


const mapStateToProps = state => {

  return {

  }

}

const mapDispatchToProps = dispatch => {
  return {
    setAnswer: (data) => { dispatch(setAnswer(data)) },
    finishedQuiz: () => { dispatch(finishedQuiz()) },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen)
