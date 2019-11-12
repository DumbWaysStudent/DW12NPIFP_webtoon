import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native'
import { Container, Header, Body, Right, Button, Icon, Title, Input, Item } from 'native-base'
import ImagePicker from 'react-native-image-picker';

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.selectPhoto = this.selectPhoto.bind(this);
        this.state = {
            imageSource: this.props.navigation.getParam('url'),
            name: this.props.navigation.getParam('name')
        }
    }
    componentDidMount() {
        this.setState({
            imageSource: this.state.imageSource,
            name: this.state.name
        })
    }
    selectPhoto() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };
        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = {uri: response.uri};
            this.setState({
                imageSource: source,
            });
            }
        });
    }

    render() {
        return (
            <Container>
                <Header style={style.header} androidStatusBarColor="black">
                    <Body>
                        <Title style={{ color: 'black' }}>Edit Profile</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('Profile', {
                            url: this.state.imageSource,
                            name: this.state.name
                        })}>
                            <Icon style={{ color: 'Black' }} name='check' type='FontAwesome' />
                        </Button>
                    </Right>
                </Header>
                <View style={style.userProfile}>
                    <Image
                        source={{ uri: this.state.imageSource }}
                        style={{ width: 200, height: 200, borderRadius: 100 }} />
                    <Button
                        primary
                        style={style.btncamera}
                        rounded
                        onPress={this.selectPhoto.bind(this)}
                    >
                        <Icon name='camera' style={style.camera} />
                    </Button>
                    <Item>
                        <Input
                            style={style.inputProfile}
                            defaultValue={this.state.name}
                            onChangeText={(text) => this.setState({ name: text })}
                        />
                    </Item>

                </View>
            </Container>
        )
    }
}
const style = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        color: 'black'
    },
    userProfile: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 40
    },
    textUser: {
        fontSize: 40,
    },
    camera: {
        color: 'white',
        fontSize: 18
    },
    btncamera: {
        position: 'relative',
        marginTop: 10
    },
    inputProfile: {
        textAlign: 'center',
        fontSize: 24
    }
})
