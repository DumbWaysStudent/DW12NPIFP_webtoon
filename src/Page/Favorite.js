import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'native-base';

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
                },]
        };
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <Search style={styles.search} />
                <View>
                    <FlatList
                        data={this.state.dataSource}
                        horizontal={false}
                        renderItem={({ item }) =>
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
});
