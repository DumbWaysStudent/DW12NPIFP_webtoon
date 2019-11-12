import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Item, Input, Button, Icon, Card, CardItem, } from 'native-base';

import Search from '../component/Search';
import ImageSlide from './../component/ImageSlide'

import { connect } from 'react-redux'
import * as actionComics from './../redux/actions/actionComics'


class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: '',
        };
    }

    async componentDidMount() {
        await this.props.handleGetComics()
    }

    render() {
        const dataComics = this.props.comicsLocal.comics
        return (
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <StatusBar backgroundColor="#01CB75" barStyle="light-content" />
                <View style={styles.searchStyleView}>
                    {/* <Search /> */}
                    <Item rounded>
                        <Input placeholder='Search' onChangeText={text => { this.setState({ search: text }) }} />
                        <View>
                            <Button transparent onPress={() => this.search(this.state.search)}>
                                <Icon active name='md-search' style={styles.search} />
                            </Button>
                        </View>
                    </Item>
                    <ImageSlide />
                </View>
                <View style={{ paddingVertical: 10 }}>
                    <Text style={{ fontSize: 30 }}>
                        Favorite
                    </Text>
                    <View>
                        <FlatList
                            data={dataComics}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <Card>
                                    <CardItem button onPress={() => this.props.navigation.navigate('DetailWebtoon', { id: item.id, title: item.title })}>
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
                        data={dataComics}
                        horizontal={false}
                        renderItem={({ item }) =>
                            <Card>
                                <CardItem button onPress={() => this.props.navigation.navigate('DetailWebtoon', { id: item.id, title: item.title })}>
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
    search: {
        marginHorizontal: 40,
        color: '#01CB75'
    },
    scrollView: {
        paddingHorizontal: 10,
        flex: 1,
    },
    favHorizontal: {
        flexDirection: 'row'
    },
    imgBorderVertical: {
        borderColor: '#ecf0f1',
        borderWidth: 2
    }
});

//for reducer
const mapStateToProps = state => {
    return {
        comicsLocal: state.comics
    }
}

//for action
const mapDispatchToProps = dispatch => {
    return {
        handleGetComics: () => dispatch(actionComics.handleGetComics()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
