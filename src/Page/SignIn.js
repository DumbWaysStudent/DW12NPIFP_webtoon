import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, AsyncStorage } from 'react-native';
import { Item, Input, Button, Icon } from 'native-base';

import { API_TOON } from '../component/server'
import axios from 'axios';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: '',
            inputPassword: '',
            hiddenPass: true,
            icon: 'eye',
        };
    }
    authEmailPassword() {
        // let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const { inputEmail, inputPassword } = this.state
        const { navigation } = this.props
        if (inputEmail != '' && inputPassword != '') {
            if (reg.test(inputEmail) == true) {
                axios.post(`${API_TOON}/api/v1/login`, {
                    email: inputEmail,
                    password: inputPassword
                })
                    .then(result => {
                        AsyncStorage.setItem('userToken', result.data.token)
                        navigation.navigate('MainNavigation')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } else {
                alert('Email yang anda masukkan tidak sesuai format')
            }
        } else {
            alert('Email & Password tidak boleh kosong')
        }
    };

    _changeIcon = () => {
        if (this.state.icon == 'eye-off' || this.state.password != '') {
            this.setState(prevState => ({ icon: prevState.icon == 'eye' ? 'eye-off' : 'eye', hiddenPass: !prevState.hiddenPass }));
        }
    };
    demoAkun = () => {
        const { inputEmail, inputPassword } = this.state
        this.setState({
            inputEmail: 'admin@gmail.com',
            inputPassword: 'admin'
        })
    }

    render() {
        return (
            <View style={styles.signInBg}>
                <StatusBar backgroundColor="#01CB75" barStyle="light-content" />
                <View style={styles.bgImgView} >
                    <Image style={styles.bgImg} source={require('./../assets/imgBg/RealToon.png')} />
                    <Text style={styles.loginText}>Login With Your Account </Text>
                </View>
                <View style={styles.loginTextView}>
                    <Item rounded style={styles.inputStyle}>
                        <Input autoCapitalize='none' returnKeyType='next' placeholder='Email' placeholderTextColor='white' style={styles.txtFormStyle} value={this.state.inputEmail} onChangeText={(inputEmail) => this.setState({ inputEmail })} />
                    </Item>
                    <Item rounded style={styles.inputStyle}>
                        <Input autoCapitalize='none' returnKeyType='go' secureTextEntry={this.state.hiddenPass} placeholder='Password' placeholderTextColor='white' style={styles.txtFormStyle} value={this.state.inputPassword} onChangeText={(inputPassword) => this.setState({ inputPassword })} />
                        <Icon style={styles.iconStyle} active name={this.state.icon} onPress={() => this._changeIcon()} />
                    </Item>
                    <Button rounded style={styles.buttonLogin} onPress={() => this.authEmailPassword()}>
                        <Text style={styles.textButtonSignIn}> SIGN IN </Text>
                    </Button>
                    <Button rounded style={styles.buttonLogin} onPress={() => this.demoAkun()}>
                        <Text style={styles.textButtonSignIn}> DEMO </Text>
                    </Button>
                    <Text onPress={() => this.props.navigation.navigate('signup')} style={{ color: 'white' }}>If you dont have account please Klik Me</Text>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    signInBg: {
        backgroundColor: '#01CB75',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    bgImgView: {
        flex: 2,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    bgImg: {
        width: 250,
        height: 250,
    },
    loginTextView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 30,
        marginBottom: 50,
    },
    loginText: {
        fontSize: 20,
        color: 'white',
        marginTop: 20,
        alignSelf: 'center'
    },
    inputStyle: {
        marginVertical: 5,
        paddingHorizontal: 10
    },
    txtFormStyle: {
        color: 'white',
    },
    iconStyle: {
        color: 'white'
    },
    buttonLogin: {
        width: 330,
        justifyContent: 'center',
        marginVertical: 10,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    textButtonSignIn: {
        color: '#01CB75',
        fontSize: 15,
        fontFamily: 'GOTHIC',
        width: 300,
        textAlign: 'center'
    }
});








{/* <View style={styles.homeScreen}>
    <View style={styles.headerInfo}>
        <Text style={styles.loginText}>SIGN IN</Text>
        <Text style={styles.detailText}>Login with your account WEBTOON</Text>
    </View>
    <Text style={styles.emailPassDetail}>Email</Text>
    <Item regular>
        <Input autoCapitalize='none' returnKeyType='next' value={this.state.email} onChangeText={(email) => this.setState({ email })} />
    </Item>
    <Text style={styles.emailPassDetail}>Password</Text>
    <Item regular style={styles.passForm}>
        <Input autoCapitalize='none' returnKeyType='go' secureTextEntry={this.state.hiddenPass} value={this.state.password} onChangeText={(password) => this.setState({ password })} />
        <Icon active name={this.state.icon} onPress={() => this._changeIcon()} />
    </Item> */}
{/* <Button block success style={styles.buttonLogin} onPress={() => this.props.navigation.navigate('MainNavigation')}><Text> Sign In </Text></Button> */ }
{/* <Button block success style={styles.buttonLogin} onPress={() => this.authEmailPassword()}><Text> Sign In </Text></Button>
</View> */}

// const styles = StyleSheet.create({
//     homeScreen: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         flex: 1,
//         marginHorizontal: 50,
//     },
//     headerInfo: {
//         alignItems: 'center',
//         marginBottom: 20,
//     },
//     loginText: {
//         justifyContent: 'center',
//         alignSelf: 'center',
//         fontSize: 50,
//     },
//     detailText: {
//         fontSize: 20,
//         marginTop: 30,
//     },
//     emailPassDetail: {
//         fontSize: 20,
//         alignSelf: 'flex-start',
//         marginBottom: 10,
//         marginTop: 10,
//     },
//     passForm: {
//         marginBottom: 20,
//     },
//     loginButton: {
//         fontSize: 200,
//         color: 'white',
//     }
// });