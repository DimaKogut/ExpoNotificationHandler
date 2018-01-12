import { StyleSheet } from 'react-native';

import globalStyles from './GlobalStyles';

const styles = StyleSheet.create({
  ...globalStyles,
  container: {
    flex: 1,
    margin: 20,
    marginLeft: 15,
    marginRight: 15,
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
    backgroundColor: '#1072B6'
  },
  buttonText: {
    fontSize: 17,
    color: 'white'
  },
  scoreText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '600'
  },
  sighItem: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  question: {
    flex: 0.9,
    justifyContent: 'center',
    paddingLeft: 10
  },
  scrollBlock: {
    marginTop: 20,
    marginBottom: 20
  },
  sighItemIconRed: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold'
  },
  sighItemIconGreen: {
    color: '#00b700',
    fontSize: 30,
    fontWeight: 'bold'
  }


});

export default styles;