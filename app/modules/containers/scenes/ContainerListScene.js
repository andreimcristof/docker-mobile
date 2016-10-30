import React, { Component } from 'react';
import { StyleSheet, Text, ListView } from 'react-native';
import ViewContainer from '../../../shared/components/ViewContainer'

class ContainerListScene extends Component {
  render() {
    return (
        <ViewContainer>
            <Text style={styles.header}>
                Running Containers:
            </Text>
            <ListView>

            </ListView>
        </ViewContainer>
    );
  }
}

module.exports = ContainerListScene

const styles = StyleSheet.create({
    header : {
        fontSize: 25
    }
})
