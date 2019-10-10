import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
// import { ScrollView, Image } from 'native-base';

import Search from '../component/Search';

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <Search style={styles.search} />
                <ScrollView horizontal={true}>
                    <Text>
                        HomeScreenadskndasdaskdbiasndkansd
                    </Text>
                </ScrollView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 10,
        flex: 1,
        backgroundColor: 'tomato',
    },
    search: {
        marginHorizontal: 40
    }
});
