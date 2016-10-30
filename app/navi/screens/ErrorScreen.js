import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import ViewContainer from '../shared/components/ViewContainer'
import StatusBarBackground from '../shared/components/StatusBarBackground'

class ErrorScreen extends Component {
  render() {
    return (
        <ViewContainer>
            <StatusBarBackground />
            <Text>Oops, an error occurred for {this.props.msg}</Text>
        </ViewContainer>
    );
  }
}

module.exports = ErrorScreen
