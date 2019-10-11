import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default class DetailEpisode extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
