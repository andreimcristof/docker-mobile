import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Navigator } from 'react-native';


//screens
import ContainersScreen from './ContainersScreen'
import ContainerScreen from './ContainerScreen'
import ErrorScreen from './ErrorScreen'



//main
class DockerNavigator extends Component {

    renderScene(route, navigator) {
        navigator.navigateTo = (container) => {
            navigator.push(container)
        }

        var globalNavigatorProps = {
            navigator: navigator
        }

        switch(route.id){
            case "list":
                return (<ContainersScreen {...globalNavigatorProps} />);
                break;
            case "find meaningful ID here":
                return (<ContainerScreen {...globalNavigatorProps} container={route.id} />);
                break;
            default:
                return (<ErrorScreen msg={route} />)
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
