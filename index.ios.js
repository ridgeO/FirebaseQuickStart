'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
// This will import your configured firebase reference from the component
// It will be ready to use with methods like .auth() and .database()
// For example you might use firebaseRef.auth().signInWithEmailAndPassword(email, password)
// Or maybe firebaseRef.database().ref("your-reference")
import firebaseRef from './components/firebaseRef.js';

export default class FirebaseQuickStart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to FirebaseQuickStart!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit ./components/firebaseRef.js
          by adding in your firebase app credentials from
          console.firebase.google.com > Your App > Add Firebase to your web app
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirebaseQuickStart', () => FirebaseQuickStart);
