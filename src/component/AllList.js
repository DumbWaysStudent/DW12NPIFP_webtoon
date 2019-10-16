import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'native-base';

export default class AllList extends Component {
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
                    horizontal={false}
                    renderItem={({ item }) =>
                        <TouchableOpacity>
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
        );
    }
}
