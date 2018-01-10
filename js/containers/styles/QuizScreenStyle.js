import {
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';

import globalStyles from './GlobalStyles';

const styles = StyleSheet.create({
  ...globalStyles,
  swiper: {
    marginTop: 20
  },
  questionBlock: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-around',
  },
  questionBox: {
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 20,
    padding: 20
  },
  questionTextStyle: {
    textAlign: 'center'
  },
  category: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  },
  counter: {
    textAlign: 'center'
  },
  buttonsBlock: {
    flexDirection: 'row', marginLeft: 20, marginRight: 20
  },
  buttonItem: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 20
  },
  trueButton: {
    backgroundColor: 'green',
    marginRight: 10,
  },
  falseButton: {
    backgroundColor: 'red',
    marginLeft: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold'
  }

});

export default styles;