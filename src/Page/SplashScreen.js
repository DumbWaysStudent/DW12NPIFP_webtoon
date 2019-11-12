import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, Image, AsyncStorage } from 'react-native';
import { Button } from 'native-base';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.cekToken()
    }

    async cekToken() {
        const token = await AsyncStorage.getItem('userToken')
        if (token) {
            this.props.navigation.navigate('MainNavigation')
        } else {
            this.props.navigation.navigate('login')
        }
    }

    render() {
        return (
            <View style={styles.splashScreenbg}>
                <StatusBar backgroundColor="#01CB75" barStyle="light-content" />
                <View style={styles.bgImgView} >
                    <Image style={styles.bgImg} source={require('./../assets/imgBg/RealToon.png')} />
                </View>
                {/* <View style={styles.buttonStyleView}>
                    <Button rounded style={styles.buttonStyle} onPress={() => this.props.navigation.navigate('signup')}>
                        <Text style={styles.textButtonSignUp}>SIGN UP</Text>
                    </Button>
                    <Button rounded style={styles.buttonStyleSign} onPress={() => this.props.navigation.navigate('login')}>
                        <Text style={styles.textButtonSignIn}>SIGN IN</Text>
                    </Button>
                </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    splashScreenbg: {
        backgroundColor: '#01CB75',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bgImgView: {
        flex: 1,
        justifyContent: 'center'
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
        fontFamily: 'GOTHIC',
        width: 300,
        textAlign: 'center'

    },
    textButtonSignIn: {
        color: '#01CB75',
        fontSize: 15,
        fontFamily: 'GOTHIC',
        width: 300,
        textAlign: 'center'

    },
});

