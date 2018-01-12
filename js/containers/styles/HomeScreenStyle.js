import {
  StyleSheet,
  Dimensions
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
  title: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 17
  },
  mainMessage: {
    fontSize: 17,
    fontWeight: 'bold',
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
  loaderBox: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#ffffff7c',
    zIndex: 1
  }


});

export default styles;