import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator } from 'react-native';

import ContainerListScene from '../modules/containers/scenes/ContainerListScene'
import ContainerScene from '../modules/containers/scenes/ContainerScene'
import ErrorScene from '../shared/scenes/ErrorScene'


class DockerNavigator extends Component {

    renderScene(route, navigator) {
        navigator.navigateTo = (container) => {
            navigator.push(container)
        }

        var globalNavigatorProps = {
            navigator: navigator
        }

        switch(route.id){
            case "main":
                return (<MainScene {...globalNavigatorProps} />);
            case "list":
                return (<ContainerListScene {...globalNavigatorProps} />);
                break;
            case "find meaningful ID here":
                return (<ContainerScene {...globalNavigatorProps} container={route.id} />);
                break;
            default:
                return (<ErrorScene msg={route} />)
                break;
        }
    }

    render() {
    return (
        <Navigator
            initialRoute={{id: "list"}}
            ref="dockerNavigator"
            style={styles.navigatorStyles}
            renderScene={this.renderScene}
        />
    );
    }
}

const styles = StyleSheet.create({
    navigatorStyles: { }
})

module.exports = DockerNavigator
