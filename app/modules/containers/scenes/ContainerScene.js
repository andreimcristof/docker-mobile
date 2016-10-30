import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import ViewContainer from '../../../shared/components/ViewContainer'

class ContainerListScene extends Component {
  render() {
    return (
        <ViewContainer>
            <Text>Single Docker container. </Text>
        </ViewContainer>
    );
  }
}

module.exports = ContainerListScene
