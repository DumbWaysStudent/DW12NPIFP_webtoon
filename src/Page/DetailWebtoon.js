import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity, StatusBar, Share } from 'react-native';
import { Button, Icon, Header, Left, Body, Right, Title } from 'native-base';

import { connect } from 'react-redux'
import * as actionComics from './../redux/actions/actionComics'

const shareOption = {
    title: "Download realToon",
    message: "Download segera realToon di PlayStore anda"
}
class DetailWebtoon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: '',
        };
    }
    async componentDidMount() {
        await this.props.handleGetDetailComics(this.props.navigation.getParam('id'))
    }

    onSharePress = () =>
        Share.share(shareOption);


    render() {
        const dataDetailComics = this.props.detailComicsLocal.detailComics
        return (
            <View>
                <Header style={{ backgroundColor: '#01CB75' }}>
                    <StatusBar backgroundColor="#01CB75" barStyle="light-content" />
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='arrow-round-back' style={{ color: 'white' }} />
                        </Button>
                    </Left>
                    <Body style={{ paddingLeft: 15 }}>
                        <Title style={{ color: 'white' }}>{this.props.navigation.getParam('title')}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.onSharePress}>
                            <Icon name='share' style={{ color: 'white' }} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    <View>
                        {/* <Image style={styles.imageHeader} source={{ uri: this.state.dataSource[0].img }} /> */}
                    </View>
                    <View style={styles.episodeStyle}>
                        <FlatList
                            data={dataDetailComics}
                            horizontal={false}
                            renderItem={({ item }) =>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEpisode', { id_episode: item.id, title: item.title })}>
                                    <View style={{ flexDirection: 'row', marginVertical: 5 }}>
                                        <View style={styles.thumbImgStyle}>
                                            <Image style={{ height: 50, width: 50 }} source={{ uri: item.thumbImg }} />
                                        </View>
                                        <View style={{ paddingHorizontal: 5, paddingTop: 2, flex: 1 }}>
                                            <Text style={{ fontSize: 17 }}>{item.title}</Text>
                                            <View style={{ width: 100 }}>
                                                <Text>{item.updatedAt}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            }
                            keyExtractor={(item, index) => index.toString()
                            }
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    imageHeader: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: "100%",
        height: 300,
    },
    episodeStyle: {
        paddingHorizontal: 10
    },
    thumbImgStyle: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
});


const mapStateToProps = state => {
    return {
        detailComicsLocal: state.detailComics
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetDetailComics: (id) => dispatch(actionComics.handleGetDetailComics(id)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailWebtoon);