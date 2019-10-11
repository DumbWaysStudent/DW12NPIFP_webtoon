import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'native-base';

import Search from '../component/Search';
import ImageSlide from './../component/ImageSlide'


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    title: 'The Secret of Angel',
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg'
                }, {
                    title: 'Pasutri Gaje',
                    img: 'https://otaku.dafunda.com/wp-content/uploads/sites/11/2019/04/Pasutri-Gaje-Season-3-Dafunda-Otaku.jpg'
                }, {
                    title: 'Naruto',
                    img: 'https://www.awn.com/sites/default/files/styles/inline/public/image/featured/1015106-naruto-shippuden-headed-cartoon-network.jpg'
                }, {
                    title: 'Naruto1',
                    img: 'https://www.awn.com/sites/default/files/styles/inline/public/image/featured/1015106-naruto-shippuden-headed-cartoon-network.jpg'
                }, {
                    title: 'Naruto2',
                    img: 'https://www.awn.com/sites/default/files/styles/inline/public/image/featured/1015106-naruto-shippuden-headed-cartoon-network.jpg'
                }, {
                    title: 'Naruto3',
                    img: 'https://www.awn.com/sites/default/files/styles/inline/public/image/featured/1015106-naruto-shippuden-headed-cartoon-network.jpg'
                }, {
                    title: 'Naruto4',
                    img: 'https://www.awn.com/sites/default/files/styles/inline/public/image/featured/1015106-naruto-shippuden-headed-cartoon-network.jpg'
                }
            ],
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
                    <View>
                        <FlatList
                            data={this.state.dataSource}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailWebtoon', { item })}>
                                    <View style={{ margin: 10 }}>
                                        <View style={{ borderWidth: 3 }}>
                                            <Image style={{ height: 150, width: 150 }} source={{ uri: item.img }} />
                                        </View>
                                        <Text style={{ fontSize: 15 }}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                            keyExtractor={(item, index) => index.toString()
                            } />

                    </View>
                </View>
                <Text style={{ fontSize: 30 }}>
                    All
                </Text>
                <View>
                    <FlatList
                        data={this.state.dataSource}
                        horizontal={false}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailWebtoon', { item })}>
                                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                    <View style={{ borderWidth: 2, padding: 3 }}>
                                        <Image style={{ height: 50, width: 50 }} source={{ uri: item.img }} />
                                    </View>
                                    <View style={{ paddingHorizontal: 5, paddingTop: 2, flex: 1 }}>
                                        <Text style={{ fontSize: 17 }}>{item.title}</Text>
                                        <View style={{ width: 100 }}>
                                            <Button small warning style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Icon name='add' />
                                                <Text>Favorite</Text>
                                            </Button>
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
    favHorizontal: {
        flexDirection: 'row'
    }
});
