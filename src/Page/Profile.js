import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Header, Body, Right, Button, Icon, Title } from 'native-base';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'User Name',
            url: { uri: 'http://getdrawings.com/free-icon-bw/avatar-icon-23.png' }
        };
    }

    render() {
        return (
            <View>
                <Header style={{ backgroundColor: 'white' }}>
                    <Body style={{ paddingLeft: 15 }}>
                        <Title style={{ color: 'black' }}>Profile</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('EditProfile', {
                            url: this.state.url,
                            name: this.state.name
                        })}>
                            <Icon name='create' style={{ color: 'black' }} />
                        </Button>
                    </Right>
                </Header>
                <View style={styles.avatarPage}>
                    <Image style={styles.avatar} source={this.props.navigation.getParam('url') ? this.props.navigation.getParam('url') : this.state.url} />
                    <Text style={{ fontSize: 25 }}>{this.props.navigation.getParam('name') ? this.props.navigation.getParam('name') : this.state.name}</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button full success onPress={() => this.props.navigation.navigate('MyWebtoon')}>
                        <Text style={{ color: 'white', fontSize: 20, justifyContent: 'flex-start' }}>My Webtoon Creation</Text>
                    </Button>
                </View>
                <View>
                    <Button full transparent>
                        <Text style={{ color: 'red', fontSize: 20, justifyContent: 'flex-start' }}>Log Out</Text>
                    </Button>
                </View>
            </View>
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
