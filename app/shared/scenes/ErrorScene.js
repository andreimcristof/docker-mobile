import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import ViewContainer from '../../shared/components/ViewContainer'

class ErrorScene extends Component {
  render() {
    return (
        <ViewContainer>
            <Text>Oops, an error occurred for {this.props.msg}</Text>
        </ViewContainer>
    );
  }
}

module.exports = ErrorScene
