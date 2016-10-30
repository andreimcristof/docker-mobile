import React, { Component } from 'react';
import { StyleSheet, Text, ListView } from 'react-native';
import ViewContainer from '../../../shared/components/ViewContainer'

class ContainerListScene extends Component {
    constructor(props){
        super(props);
        var self = this;
        self.state = {
            loading: true
        };
        self.containers = {
            dataSource: []
        };
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        self.containers.dataSource = ds.cloneWithRows([])
            }

    render() {
        if(this.state.loading) {return (<ViewContainer><Text>loading...</Text></ViewContainer>)}

        return (
            <ViewContainer>
                <Text style={styles.header}>
                    Running Containers:
                </Text>
                <ListView
                  dataSource={this.containers.dataSource}
                  renderRow={(item) => <Text>{item.Id}</Text>}
                />
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
