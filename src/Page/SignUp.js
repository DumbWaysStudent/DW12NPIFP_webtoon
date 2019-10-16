import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { Button, Input, Item } from 'native-base';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                        <Input style={styles.userInput} autoCapitalize='none' placeholder='Username' placeholderTextColor="white"></Input>
                    </Item>
                    <Item rounded style={styles.viewUserInput}>
                        <Input style={styles.userInput} autoCapitalize='none' placeholder='Email' placeholderTextColor="white"></Input>
                    </Item>
                    <Item rounded style={styles.viewUserInput}>
                        <Input style={styles.userInput} autoCapitalize='none' secureTextEntry={true} placeholder='Password' placeholderTextColor="white"></Input>
                    </Item>
                    <Button rounded style={styles.buttonStyle} onPress={}>
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
        height: 40,
        marginVertical: 10
    },
    userInput: {
        width: 300,
        backgroundColor: '#01CB75',
        color: 'white'
    }
});