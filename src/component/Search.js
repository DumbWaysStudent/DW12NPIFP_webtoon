import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Item, Input } from 'native-base';

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
                <Item regular>
                    <Input placeholder='Search' />
                    <View style={styles.searchBut}>
                        <Icon active name='md-search' style={styles.search} />
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
        borderWidth: 2,
    },
    searchBut: {
        marginRight: 20,
    },
    search: {
        fontSize: 20
    }
})