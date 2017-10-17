import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DockerContainer from './app/views/docker/docker.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DockerContainer></DockerContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
