import React from 'react';
import { StyleSheet, View, } from 'react-native';
import StatusBarBackground from './StatusBarBackground';

export default class ViewContainer extends React.Component {
  render() {
    return (
      <View behaviour='padding' style={styles.container}>
        <StatusBarBackground/>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //write styles for view-container here
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'powderblue',
    alignItems: 'stretch',
    
  },
});