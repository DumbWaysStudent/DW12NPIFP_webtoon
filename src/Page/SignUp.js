import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { Button, Input, Item } from 'native-base';
import axios from 'axios';

import { API_TOON } from '../component/server'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputUsername: '',
            inputEmail: '',
            inputPassword: '',
            inputImage: 'https://www.clipartwiki.com/clipimg/detail/248-2480210_user-staff-man-profile-person-icon-circle-png.png'
        };
    }

    registerValue() {
        const { inputEmail, inputPassword, inputUsername, inputImage } = this.state
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const { navigation } = this.props
        if (inputUsername || inputEmail || inputPassword != '') {
            if (reg.test(inputEmail)) {
                axios.post(`${API_TOON}/api/v1/register`, {
                    email: inputEmail,
                    username: inputUsername,
                    password: inputPassword,
                    image: inputImage
                })
                    .then(async (result) => {
                        await navigation.navigate('login')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } else {
                alert('Email tidak sesuai format')
            }
        } else {
            alert('Maaf form tidak boleh kosong')
        }
    }


    render() {
        return (
            <View style={styles.splashScreenbg}>
                <StatusBar backgroundColor="#ecf0f1" barStyle="light-content" />
                <View style={styles.bgImgView} >
                    <Image style={styles.bgImg} source={require('./../assets/imgBg/RealToonReverse.png')} />
                </View>
                <View style={styles.buttonStyleView}>
                    <Item rounded style={styles.viewUserInput}>
                        <Input autoCapitalize='none' placeholder='Username' placeholderTextColor="white" style={styles.txtFormStyle} value={this.state.inputUsername} onChangeText={(text) => this.setState({ inputUsername: text })}></Input>
                    </Item>
                    <Item rounded style={styles.viewUserInput}>
                        <Input autoCapitalize='none' placeholder='Email' placeholderTextColor="white" style={styles.txtFormStyle} value={this.state.inputEmail} onChangeText={(text) => this.setState({ inputEmail: text })}></Input>
                    </Item>
                    <Item rounded style={styles.viewUserInput}>
                        <Input autoCapitalize='none' secureTextEntry={true} placeholder='Password' placeholderTextColor="white" style={styles.txtFormStyle} value={this.state.inputPassword} onChangeText={(text) => this.setState({ inputPassword: text })}></Input>
                    </Item>
                    <Button rounded style={styles.buttonStyle} onPress={() => this.registerValue()}>
                        <Text style={styles.textButtonSignUp}>SIGN UP</Text>
                    </Button>
                </View>
            </View >
        );
    }
}


const styles = StyleSheet.create({
    splashScreenbg: {
        backgroundColor: '#ecf0f1',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImgView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    bgImg: {
        width: 250,
        height: 250,
    },
    buttonStyleView: {
        flex: 1,
        justifyContent: 'center'

    },
    buttonStyle: {
        width: 300,
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 0.5,
        backgroundColor: '#01CB75',
        marginVertical: 10

    },
    buttonStyleSign: {
        width: 300,
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: 'white',
        alignItems: 'center'

    },
    textButtonSignUp: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'centuryGothic',
        width: 300,
        textAlign: 'center'

    },
    textButtonSignIn: {
        color: '#01CB75',
        fontSize: 15,
        fontFamily: 'centuryGothic',
        width: 300,
        textAlign: 'center'

    },
    viewUserInput: {
        height: 50,
        marginVertical: 5,
        backgroundColor: '#01CB75',
    },
    txtFormStyle: {
        color: 'white',
    },
});