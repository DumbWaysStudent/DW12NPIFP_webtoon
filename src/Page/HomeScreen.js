import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

import Search from '../component/Search';
import ImageSlide from './../component/ImageSlide'
import FavoriteList from './../component/FavoriteList'
import AllList from './../component/AllList'

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Search style={styles.search} />
                <ImageSlide />
                <View style={{ paddingVertical: 10 }}>
                    <Text style={{ fontSize: 30 }}>
                        Favorite
                    </Text>
                    <FavoriteList />
                </View>
                <Text style={{ fontSize: 30 }}>
                    All
                </Text>
                <AllList />

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 10,
        flex: 1,
    },
    search: {
        marginHorizontal: 40
    },
    favHorizontal: {
        flexDirection: 'row'
    }
});
