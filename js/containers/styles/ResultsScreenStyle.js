import {
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';

import globalStyles from './GlobalStyles';

const styles = StyleSheet.create({
  ...globalStyles,
  container: {
    flex: 1,
    margin: 30,
    padding: 20,
    justifyContent: 'space-between',
  },
  questionItem: {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row'
  },
  beginButton: {
    flex: null,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5
  },
  buttonText: {
    fontSize: 17
  },
  scoreText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600'
  },
  sighItem: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    flex: 0.95,
    justifyContent: 'center',
    paddingLeft: 10
  },
  scrollBlock: {
    marginTop: 20,
    marginBottom: 20
  }


});

export default styles;