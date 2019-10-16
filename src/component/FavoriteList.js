import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

export default class FavoriteList extends Component {
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
            <View>
                <FlatList
                    data={this.state.dataSource}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailWebtoon')}>
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
        );
    }
}
