import React, { Component } from 'react';
import { StyleSheet, Image, View, TouchableOpacity, FlatList, AsyncStorage } from 'react-native'
import { Container, Text, Header, Left, Body, Right, Title, Button, Icon, CardItem } from 'native-base'
import jwt_decode from 'jwt-decode';

import { connect } from 'react-redux'
import * as actionMyWebtoons from './../redux/actions/actionMyWebtoons'

class MyWebtoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem('userToken')
        const idUser = jwt_decode(token)
        const id = idUser.userId

        await this.props.handleGetMyWebtoons(id, token)
    }

    render() {
        const getMyWebtoons = this.props.getMyWebtoonsLocal.myWebtoons
        console.log(getMyWebtoons)
        return (
            <View>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={getMyWebtoons}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity key={item.id} onPress={() => this.props.navigation.navigate('EditMyWebtoon', {
                            id: index,
                            title: item.title,
                            url: item.url,
                            image: item.image,
                            imageEpisode: item.image[index].image
                        })}>
                            <CardItem>
                                <Image source={{ uri: item.thumbImg }} style={style.ImageFlatListDetail} />
                                <Text style={style.title}>{item.title}</Text>
                                <Text style={style.titleText}>{item.episode} Episode</Text>
                            </CardItem>
                        </TouchableOpacity>

                    )}
                />
                <View style={style.button}>
                    <Button
                        onPress={() => this.props.navigation.navigate('CreateWebtoon')}
                        rounded
                        warning
                        style={{ height: 55 }}>
                        <Icon
                            name='plus'
                            type='Entypo'
                            style={{ fontSize: 24 }}
                        />
                    </Button>
                </View>
            </View >
        );
    }
}
const style = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        color: 'black'
    },
    ImageFlatListDetail: {
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: 'black',
        marginBottom: 20
    },
    title: {
        alignSelf: 'flex-start',
        paddingTop: 20,
        fontWeight: 'bold',
        fontSize: 22,
        paddingLeft: 10
    },
    titleText: {
        alignSelf: 'center',
        position: 'absolute',
        fontSize: 16,
        marginLeft: 130
    },
    button: {
        position: 'absolute',
        height: 70,
        alignSelf: 'flex-end',
        marginTop: "160%",
        paddingRight: 20

    }
})

const mapStateToProps = state => {
    return {
        getMyWebtoonsLocal: state.getMyWebtoons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetMyWebtoons: (id, token) => dispatch(actionMyWebtoons.handleGetMyWebtoons(id, token)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyWebtoon);