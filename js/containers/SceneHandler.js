'use strict';

import { PureComponent } from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';

class HomeScreen extends PureComponent {

  componentWillMount() {
    const { storage } = this.props;
    const { quizStarted, questionIndex, showResult } = storage;

    if(showResult) Actions.results({ type: ActionConst.RESET })
    else questionIndex === 0 && !quizStarted ? Actions.home({ type: ActionConst.RESET }) : Actions.quiz({ type: ActionConst.RESET })

  }

  render() {
    return (null)
  }

}


const mapStateToProps = state => {
  return {
    storage: state.storage,
  }
}

export default connect(mapStateToProps)(HomeScreen)