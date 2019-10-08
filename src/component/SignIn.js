import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Item, Input, Button, Icon } from 'native-base';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            trueEmail: 'abc@gmail.com',
            truePass: 'abcdef',
            hiddenPass: true,
            icon: 'eye',
        };

    };
    authEmailPassword() {
        let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        const { email, password, trueEmail, truePass } = this.state;
        if (email != '' && password != '') {
            if (reg.test(email) == true) {
                if (email == trueEmail && password == truePass) {
                    this.props.navigation.navigate('HomeUser')
                } else {
                    alert('Email & Password yang anda masukkan salah')
                }
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

    render() {
        return (
            <View style={styles.homeScreen}>
                <View style={styles.headerInfo}>
                    <Text style={styles.loginText}>SIGN IN</Text>
                    <Text style={styles.detailText}>Login with your account WEBTOON</Text>
                </View>
                <Text style={styles.emailPassDetail}>Email</Text>
                <Item regular>
                    <Input autoCapitalize='none' value={this.state.email} onChangeText={(email) => this.setState({ email })} />
                </Item>
                <Text style={styles.emailPassDetail}>Password</Text>
                <Item regular style={styles.passForm}>
                    <Input autoCapitalize='none' secureTextEntry={this.state.hiddenPass} value={this.state.password} onChangeText={(password) => this.setState({ password })} />
                    <Icon active name={this.state.icon} onPress={() => this._changeIcon()} />
                </Item>
                <Button block success style={styles.buttonLogin} onPress={() => this.authEmailPassword()}><Text> Sign In </Text></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginHorizontal: 50,
    },
    headerInfo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    loginText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 50,
    },
    detailText: {
        fontSize: 20,
        marginTop: 30,
    },
    emailPassDetail: {
        fontSize: 20,
        alignSelf: 'flex-start',
        marginBottom: 10,
        marginTop: 10,
    },
    passForm: {
        marginBottom: 20,
    },
    loginButton: {
        fontSize: 200,
        color: 'white',
    }
});
