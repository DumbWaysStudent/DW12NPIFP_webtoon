import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Item, Input, Label, CardItem } from 'native-base';

export default class CreateWebtoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                id: 0,
                title: 'Episode 1',
                date: '19-09-2010',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                image: [{
                    title: 'Cover',
                    date: '19-09-2010',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                },
                {
                    title: 'Intro',
                    date: '19-09-2010',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                },
                ]
            }, {
                id: 1,
                title: 'Episode 2',
                date: '09-11-2022',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                image: [{
                    title: 'Cover',
                    date: '19-09-2010',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                },
                {
                    title: 'Intro',
                    date: '19-09-2010',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                },
                ]

            }, {
                id: 2,
                title: 'Episode 3',
                date: '04-12-2000',
                url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90',
                image: [{
                    title: 'Cover',
                    date: '19-09-2010',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                },
                {
                    title: 'Intro',
                    date: '19-09-2010',
                    url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
                },
                ]
            }],
            text: ''
        };
    }

    render() {
        return (
            <View>
                <Header style={style.header} androidStatusBarColor="black">
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon
                                name='ios-arrow-back'
                                style={{ color: 'black' }}
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: 'black' }}>Create Webtoon</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('MyWebtoon')}>
                            <Icon style={{ color: 'orange' }} name='check' type='FontAwesome' />
                        </Button>
                    </Right>
                </Header>
                <View>
                    <Item stackedLabel style={style.ItemInput}>
                        <Label style={style.Label}>Judul Komik</Label>
                        <Input
                            style={style.Input}
                            onChangeText={(text) => this.setState({ text: text })}
                        />
                    </Item>
                </View>
                <View>
                    <Text style={style.Episode}>Episode</Text>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditEpisode', {
                                id: index,
                                title: item.title,
                                image: item.image
                            })}>
                                <CardItem key={index}>
                                    <Image source={{ uri: item.url }} style={style.ImageFlatListDetail} />
                                    <Text style={{ alignSelf: 'flex-start', paddingTop: 20, fontWeight: 'bold', fontSize: 22, paddingLeft: 10 }}>{item.title}</Text>
                                    <Text style={{ alignSelf: 'center', position: 'absolute', fontSize: 14, marginLeft: 130 }}>{item.date}</Text>
                                </CardItem>
                            </TouchableOpacity>
                        )}
                    />
                    <Button
                        style={style.button}
                        full
                        warning
                        onPress={() => { this.props.navigation.navigate('CreateEpisode') }}>
                        <Icon name='plus' type='Entypo' />
                        <Text style={{ paddingLeft: 0, color: 'white' }}>Add Episode</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        color: 'black'
    },
    Label: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    ItemInput: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        borderBottomWidth: 2,
    },
    Input: {
        fontSize: 16,
        height: 50,
        paddingTop: 10,
        flex: 1,
        width: "100%",
    },
    Episode: {
        marginLeft: 20,
        marginTop: 30,
        fontSize: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    ImageFlatListDetail: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: 'black',
        marginBottom: 10
    },
    button: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    }
})