import React from 'react';
import { StyleSheet, View } from 'react-native';
import Expo from 'expo';

export default class StatusBarBackground extends React.Component {
  render() {
    return (
      <View style={styles.StatusBarBackground}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //design statusbar  
  StatusBarBackground: {
        height:Expo.Constants.statusBarHeight,
        backgroundColor: 'black'
  },
});