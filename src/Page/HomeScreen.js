import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Item, Input, Button, Icon, Card, CardItem, } from 'native-base';
import axios from 'axios';

import { API_TOON } from '../component/server'

import Search from '../component/Search';
import ImageSlide from './../component/ImageSlide'


export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: '',
        };
    }

    componentDidMount() {
        axios.get(`${API_TOON}/api/v1/comics`)
            .then(result => {
                this.setState({
                    dataSource: result.data
                })
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.searchStyleView}>
                    <Search />
                    {/* <Item rounded>
                        <Input placeholder='Search' onChangeText={text => { this.setState({ search: text }) }} />
                        <View>
                            <Button transparent>
                                <Icon active name='md-search' style={styles.search} />
                            </Button>
                        </View>
                    </Item> */}
                    <ImageSlide />
                </View>
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
                                <Card>
                                    <CardItem button onPress={() => this.props.navigation.navigate('DetailWebtoon', { item })}>
                                        <View>
                                            <View style={styles.imgBorderVertical}>
                                                <Image style={{ height: 150, width: 150 }} source={{ uri: item.bumpImg }} />
                                            </View>
                                            <Text style={{ fontSize: 16, marginTop: 5 }}>{item.title}</Text>
                                        </View>
                                    </CardItem>
                                </Card>
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
                            <Card>
                                <CardItem button onPress={() => this.props.navigation.navigate('DetailWebtoon', { item })}>
                                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                        <View style={{ borderWidth: 2, borderColor: '#ecf0f1', padding: 3 }}>
                                            <Image style={{ height: 50, width: 50 }} source={{ uri: item.thumbImg }} />
                                        </View>
                                        <View style={{ paddingHorizontal: 5, paddingTop: 2, flex: 1 }}>
                                            <Text style={{ fontSize: 17 }}>{item.title}</Text>
                                            <View style={{ width: 100 }}>
                                                <Button small style={{ justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#01CB75' }}>
                                                    <Icon name='add' />
                                                    <Text style={{ color: 'white' }}>Favorite</Text>
                                                </Button>
                                            </View>
                                        </View>
                                    </View>
                                </CardItem>
                            </Card>
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
    searchStyleView: {
        marginTop: 20,
    },
    scrollView: {
        paddingHorizontal: 10,
        flex: 1,
    },
    search: {
        marginHorizontal: 40,
        color: '#01CB75'
    },
    favHorizontal: {
        flexDirection: 'row'
    },
    imgBorderVertical: {
        borderColor: '#ecf0f1',
        borderWidth: 2
    }
});
