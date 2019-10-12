import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Item, Input, Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import Search from '../component/Search';

export default class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    title: 'The Secret of Angel',
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg',
                    fav: 100
                }, {
                    title: 'Pasutri Gaje',
                    img: 'https://otaku.dafunda.com/wp-content/uploads/sites/11/2019/04/Pasutri-Gaje-Season-3-Dafunda-Otaku.jpg',
                    fav: 5
                }, {
                    title: 'Naruto',
                    img: 'https://www.awn.com/sites/default/files/styles/inline/public/image/featured/1015106-naruto-shippuden-headed-cartoon-network.jpg',
                    fav: 68
                },],
            data: '',
            search: '',
            isLoading: true,
            onClick: false
        };
    }
    dataSearch() {
        if (this.state.search) {
            return this.state.data
        } else {
            return this.state.dataSource
        }
    }
    SearchFunc() {
        if (this.state.search) {
            const textData = this.state.search.toUpperCase();
            const FilterData = this.state.dataSource.filter(function (item) {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            this.setState({
                data: FilterData
            })
        }
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.divSlide}>
                    <Item regular>
                        <Input placeholder='Search' onChangeText={text => { this.setState({ search: text }) }} />
                        <View style={styles.searchBut}>
                            <Button transparent onPress={() => { this.SearchFunc() }}>
                                <Icon active name='md-search' style={styles.search} />
                            </Button>
                        </View>
                    </Item>
                </View>
                <View>

                    <FlatList
                        data={this.state.dataSource}
                        horizontal={false}
                        data={this.dataSearch()}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailWebtoon', { item })}>
                                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                    <View style={{ borderWidth: 2, padding: 3 }}>
                                        <Image style={{ height: 50, width: 50 }} source={{ uri: item.img }} />
                                    </View>
                                    <View style={{ paddingHorizontal: 5, paddingTop: 2, flex: 1 }}>
                                        <Text style={{ fontSize: 17 }}>{item.title}</Text>
                                        <View style={{ width: 100 }}>
                                            <Text>{item.fav} Favorite</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={(item, index) => index.toString()
                        }
                    />

                </View>
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
});
