import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default class DetailEpisode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [
                {
                    id: 0,
                    title: 'The Secret of Angel',
                    episode: 1,
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg',
                    datePost: '20 Oktober 2019'
                },
                {
                    id: 1,
                    title: 'The Secret of Angel',
                    episode: 2,
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg',
                    datePost: '20 Oktober 2019'
                },
                {
                    id: 2,
                    title: 'The Secret of Angel',
                    episode: 3,
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg',
                    datePost: '20 Oktober 2019'
                },
                {
                    id: 3,
                    title: 'The Secret of Angel',
                    episode: 4,
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg',
                    datePost: '20 Oktober 2019'
                },
                {
                    id: 4,
                    title: 'The Secret of Angel',
                    episode: 5,
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg',
                    datePost: '20 Oktober 2019'
                },
                {
                    id: 5,
                    title: 'The Secret of Angel',
                    episode: 6,
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg',
                    datePost: '20 Oktober 2019'
                },
                {
                    id: 6,
                    title: 'The Secret of Angel',
                    episode: 7,
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg',
                    datePost: '20 Oktober 2019'
                },
                {
                    id: 7,
                    title: 'The Secret of Angel',
                    episode: 8,
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg',
                    datePost: '20 Oktober 2019'
                },
                {
                    id: 8,
                    title: 'The Secret of Angel',
                    episode: 9,
                    img: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg',
                    datePost: '20 Oktober 2019'
                },
            ],
        };
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <FlatList
                        data={this.state.dataSource}
                        horizontal={false}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEpisode', { item })}>
                                <View>
                                    <Image style={{ height: 500, width: 500 }} source={{ uri: item.img }} />
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
