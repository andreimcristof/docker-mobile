import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DockerContainer extends React.Component {
  render() {
    return (
      <View style={styles.DockerContainer}>
        <Text>docker version is { this.t }</Text>
      </View>
    );
  }
}
let t;
fetch("--unix-socket /var/run/docker.sock http:/v1.24/version?stdout=1").then(response => {
t = response.status;
})
.catch(err =>  {console.error(err)})

const styles = StyleSheet.create({
  DockerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
