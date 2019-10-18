import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Item, Input, Button } from 'native-base';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.divSlide}>
                <Item rounded>
                    <Input placeholder='Search' onChangeText={text => { this.setState({ search: text }) }} />
                    <View style={styles.searchBut}>
                        <Button transparent>
                            <Icon active name='md-search' style={styles.search} />
                        </Button>
                    </View>
                </Item>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    divSlide: {
        flex: 1,
        marginVertical: 10,
    },
    searchBut: {
        marginRight: 20,
    },
    search: {
        fontSize: 20,
    }
})