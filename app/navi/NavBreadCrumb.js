
'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class NavBreadCrumb extends Component {

    render() {
        return (
            <TouchableOpacity
                style={styles.breadcrumb}
                onPress={ (event) => this.props.navigator.pop() }
            >
                <Icon name="chevron-left" size={20} /><Text style={styles.breadcrumbtext}>Back to {this.props.previousScreen}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    breadcrumb: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        margin: 5
    },
    breadcrumbtext : {
        fontWeight: 'bold',
        marginLeft: 5
    }
})

module.exports = NavBreadCrumb
