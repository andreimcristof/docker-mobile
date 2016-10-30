import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

//screens
import DockerNavigator from './app/navi/DockerNavigator'



//main
class dockermobile extends Component {
  render() {
    return (
        <DockerNavigator />
    );
  }
}
AppRegistry.registerComponent('dockermobile', () => dockermobile);
