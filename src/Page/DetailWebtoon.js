import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'native-base';

export default class DetailWebtoon extends Component {
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
                    <Image style={styles.imageHeader} source={{ uri: this.state.dataSource[0].img }} />
                </View>
                <View>
                    <FlatList
                        data={this.state.dataSource}
                        horizontal={false}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEpisode', { item })}>
                                <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                    <View style={{ borderWidth: 2, padding: 3 }}>
                                        <Image style={{ height: 50, width: 50 }} source={{ uri: item.img }} />
                                    </View>
                                    <View style={{ paddingHorizontal: 5, paddingTop: 2, flex: 1 }}>
                                        <Text style={{ fontSize: 17 }}>Episode {item.episode}</Text>
                                        <View style={{ width: 100 }}>
                                            <Text>{item.datePost}</Text>
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
    imageHeader: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: "100%",
        height: 300,
    }
});
