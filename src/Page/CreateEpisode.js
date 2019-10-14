import React, { Component } from 'react';
import { FlatList, StyleSheet, Image } from 'react-native';
import { Text, Header, Left, Body, Right, Button, Icon, Title, CardItem, View } from 'native-base';
import ImagePicker from 'react-native-image-picker';

export default class CreateEpisode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
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
                        <Title style={{ color: 'black' }}>Create Episode</Title>
                    </Body>
                    <Right>
                        <Button transparent
                            onPress={() => this.AddEpisode()}>
                            <Icon style={{ color: 'orange' }} name='check' type='FontAwesome' />
                        </Button>
                    </Right>
                </Header>
                <View>
                    <Text style={style.Episode}>Episode</Text>
                    <FlatList

                        style={{ height: 500 }}
                        scrollEnabled={true}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.data}
                        renderItem={({ item, index }) => (
                            <CardItem key={index}>
                                <Image source={{ uri: item.url }} style={style.ImageFlatListDetail} />
                                <Text style={{ alignSelf: 'flex-start', fontWeight: 'bold', fontSize: 22, paddingLeft: 10 }}>{item.title}</Text>
                                <Button full danger
                                    onPress={() => this.delImage(index)}
                                    style={{ position: 'absolute', fontSize: 14, marginLeft: 130, alignItems: 'flex-start', paddingTop: 15, marginTop: 65 }}>
                                    <Text>Delete</Text>
                                </Button>
                            </CardItem>
                        )}
                    />
                    <Button
                        style={style.button}
                        onPress={() => this.addimage()}
                        full
                        warning>
                        <Icon name='plus' type='Entypo' />
                        <Text style={{ paddingLeft: 0 }}>Add Image</Text>
                    </Button>
                </View>
            </View>
        );
    }
    addimage() {
        const option = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        }
        ImagePicker.showImagePicker(option, res => {
            let ImageSource = res.uri
            let Title = res.fileName;
            if (!res.didCancel) {
                if (!res.error) {
                    this.state.data.push({
                        title: Title,
                        url: ImageSource
                    })
                    this.setState({ data: this.state.data })
                }
            }
        })
    }
    delImage(index) {
        this.state.data.splice(index, 1);
        this.setState({ data: this.state.data })
    }
    AddEpisode() {
        var d = new Date().toDateString()
        this.props.navigation.navigate('CreateWebtoon', {
            title: this.state.text,
            date: d,
            image: [
                this.state.data
            ]
        })
    }
}
const style = StyleSheet.create({
    button: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
    },
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
})
