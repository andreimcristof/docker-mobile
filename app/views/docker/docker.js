import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DockerService } from './docker.service.js';

export default class DockerContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      dockerInfo : { }
    };

    this.dockerService = new DockerService();
  }

  componentDidMount(){
    this.dockerService.getDockerVersionAsync()
    .then(res => {
      this.setState({dockerInfo: res});
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <View style={styles.DockerInfoContainer}>
        <Text>Local Docker Engine found</Text>
         <Text>Version: {this.state.dockerInfo.Version}</Text>
         <Text>ApiVersion: {this.state.dockerInfo.ApiVersion}</Text>
         <Text>KernelVersion: {this.state.dockerInfo.KernelVersion}</Text>
         <Text>Os: {this.state.dockerInfo.Os}</Text>
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
