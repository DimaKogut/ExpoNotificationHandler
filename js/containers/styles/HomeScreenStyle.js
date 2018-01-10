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
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 17
  },
  mainMessage: {
    fontSize: 24
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
  }


});

export default styles;