'use strict';

import React, { PureComponent } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import { Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { fetchData, saveToken, receivedToken } from '../actions/index';
import styles from './styles/HomeScreenStyle';

import { Permissions, Notifications } from 'expo';

class HomeScreen extends PureComponent {

  constructor(props) {
    super(props);

    this._fetchTestData = this._fetchTestData.bind(this)
    this._handleNotification = this._handleNotification.bind(this);
    this.registerForPushNotificationsAsync = this.registerForPushNotificationsAsync.bind(this);

    this.state = {
      showLoader: false
    }
  }

  componentDidUpdate() {
    const { quizStarted } = this.props;
    if(quizStarted) Actions.quiz({ type: ActionConst.RESET })
  }

  componentWillMount() {
    const { token } = this.props;
    if(!token) this.registerForPushNotificationsAsync()

    // registerForPushNotificationsAsync();

    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification(notification, some) {
    console.log(notification, 'notification', some);
    const { message } = notification.data;
    Alert.alert(message);
  }


  async registerForPushNotificationsAsync() {
    const { receivedToken } = this.props;
    const PUSH_ENDPOINT = 'http://192.168.0.81:8000/push-token';

    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token)
    // POST the token to your backend server from where you can retrieve it to send push notifications.
    // return fetch(PUSH_ENDPOINT, {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     token: {
    //       value: token,
    //     },
    //     user: {
    //       username: 'Brent',
    //     },
    //   }),
    // });


  try {
    const response = await fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: {
          value: token,
        },
        user: {
          username: 'Brent',
        },
      }),
    });
    const posts = await response.json()
    console.log(posts, 'posts')
    receivedToken(posts);
    // this.setState({loading: false, posts})
  } catch (e) {
    // this.setState({loading: false, error: true})
  }


  }


  render() {
    const { showLoader } = this.state

    // console.log('heres', Permissions, Notifications)

    return (
      <View style={{flex: 1, paddingBottom: 50}}>

          <TouchableOpacity onPress={this.registerForPushNotificationsAsync}
                            style={[{marginTop: 50}, styles.beginButton]}>
            <Text style={styles.buttonText}>
              Start tracking notifications
            </Text>
          </TouchableOpacity>

{/*        { showLoader &&
          <View style={styles.loaderBox}>
            <ActivityIndicator
              size='small'
              color='black'
            />
          </View>
        }

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
        </View>*/}

      </View>
    )
  }


  _fetchTestData() {

    const { storage, fetchData } = this.props;
    if(!!storage.questionsList.length) Actions.quiz({ type: ActionConst.RESET })
    else {
      this.setState({showLoader: true});
      fetchData()
    }

  }

}


const mapStateToProps = state => {

  return {
    token: state.tokens.token,
    storage: state.storage,
    quizStarted: state.storage.quizStarted
  }

}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData())
    },
    receivedToken: (data) => {
      dispatch(receivedToken(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
