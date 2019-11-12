import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, AsyncStorage } from 'react-native';
import { Header, Body, Right, Button, Icon, Title } from 'native-base';
import jwt_decode from 'jwt-decode';

import { connect } from 'react-redux'
import * as actionUsers from './../redux/actions/actionUsers'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'User Name',
            url: { uri: 'http://getdrawings.com/free-icon-bw/avatar-icon-23.png' }
        };
    }


    async componentDidMount() {
        const token = await AsyncStorage.getItem('userToken')
        const id = jwt_decode(token)
        const idUser = id.userId

        await this.props.handleGetUser(idUser, token)

    };
    async _handleLogOut() {
        await AsyncStorage.clear();
        await this.props.navigation.navigate('login')
    };

    render() {
        const dataUser = this.props.detailUserInfoLocal.detailUser
        return (
            < View >
                <Header style={{ backgroundColor: '#01CB75' }}>
                    <StatusBar backgroundColor="#01CB75" barStyle="light-content" />
                    <Body style={{ paddingLeft: 15 }}>
                        <Title style={{ color: 'white' }}>Profile</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('EditProfile', {
                            url: dataUser.image,
                            username: dataUser.username
                        })}>
                            <Icon name='create' style={{ color: 'white' }} />
                        </Button>
                    </Right>
                </Header>
                <View style={styles.avatarPage}>
                    <Image style={styles.avatar} source={{ uri: dataUser.image }} />
                    <Text style={{ fontSize: 25 }}>{dataUser.username}</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button full success onPress={() => this.props.navigation.navigate('MyWebtoon')}>
                        <Text style={{ color: 'white', fontSize: 20, justifyContent: 'flex-start' }}>My Webtoon Creation</Text>
                    </Button>
                </View>
                <View>
                    <Button full transparent onPress={() => this._handleLogOut(this.props)}>
                        <Text style={{ color: 'red', fontSize: 20, justifyContent: 'flex-start' }}>Log Out</Text>
                    </Button>
                </View>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    avatarPage: {
        alignItems: 'center',
        marginTop: 20,
    },
    avatar: {
        padding: 20,
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: '#eaebd8',
        borderWidth: 3
    },
    buttonView: {
        marginVertical: 20
    }

});

//For reducer
const mapStateToProps = state => {
    return {
        detailUserInfoLocal: state.detailUser
    }
}

//for action
const mapDispatchToProps = dispatch => {
    return {
        handleGetUser: (idUser, token) => dispatch(actionUsers.handleGetUser(idUser, token)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);