import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DockerService } from './docker.service.js';

export default class DockerContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      dockerver : ''
    };

    this.dockerService = new DockerService();
  }

  render() {
    this.dockerService.getDockerVersionAsync().then(res => {
      this.setState({dockerver: res.Version});
    });
    return (
      <View style={styles.DockerInfoContainer}>
        <Text>local docker version is: {this.state.dockerver}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  DockerInfoContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
