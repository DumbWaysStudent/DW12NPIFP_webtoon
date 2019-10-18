import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slideshow from 'react-native-image-slider-show';
import axios from 'axios';

export default class ImageSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'The Secret of Angel',
                    url: 'https://i.ytimg.com/vi/hNKk5qf9JMI/maxresdefault.jpg'
                }, {
                    title: 'Pasutri Gaje',
                    url: 'https://otaku.dafunda.com/wp-content/uploads/sites/11/2019/04/Pasutri-Gaje-Season-3-Dafunda-Otaku.jpg'
                }, {
                    title: 'Naruto',
                    url: 'https://www.awn.com/sites/default/files/styles/inline/public/image/featured/1015106-naruto-shippuden-headed-cartoon-network.jpg'
                }
            ],
        };

    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }

    render() {
        return (
            <View style={styles.slide}>
                <Slideshow
                    height={200}
                    arrowSize={0}
                    dataSource={this.state.dataSource}
                    indicatorSelectedColor="#2ce617"
                    titleStyle={{ color: "black" }}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({ position })} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        borderWidth: 3,
        borderColor: '#ecf0f1',
        marginTop: 15
    }
})
