import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, FlatList } from 'react-native';
import { Container, Text, Header, Left, Body, Right, Button, Icon, Title, Item, Input, Label, CardItem } from 'native-base';

export default class EditMyWebtoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            text: ''
        };
    }
    componentDidMount() {
        this.setState({
            data: this.props.navigation.getParam('image')
        })
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
                        <Title style={{ color: 'black' }}>Edit Webtoon</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('MyWebtoon')}>
                            <Icon style={{ color: 'orange' }} name='check' type='FontAwesome' />
                        </Button>
                    </Right>
                </Header>
                <Item stackedLabel style={style.ItemInput}>
                    <Label style={style.Label}>Name</Label>
                    <Input
                        style={style.Input}
                        value={this.props.navigation.getParam('title')}
                        onChangeText={(text) => this.setState({ text: text })}
                    />
                </Item>
                <View>
                    <Text style={style.Episode}>Episode</Text>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate('EditEpisode', {
                                id: index,
                                title: item.title,
                                image: item.image,
                                navigation: true
                            })}>
                                <CardItem>
                                    <Image source={{ uri: item.url }} style={style.ImageFlatListDetail} />
                                    <Text style={{ alignSelf: 'flex-start', paddingTop: 20, fontWeight: 'bold', fontSize: 22, paddingLeft: 10 }}>{item.title}</Text>
                                    <Text style={{ alignSelf: 'center', position: 'absolute', fontSize: 14, marginLeft: 130 }}>{item.date}</Text>
                                </CardItem>
                            </TouchableOpacity>
                        )}
                    />
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
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderBottomWidth: 2,
    },
    Input: {
        fontSize: 16,
        height: 50,
        paddingTop: 10,
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
        marginBottom: 20,
    }
})
