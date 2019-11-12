import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, FlatList, TouchableOpacity, StatusBar, Share } from 'react-native';
import { Button, Icon, Header, Left, Body, Right, Title } from 'native-base';

import { connect } from 'react-redux'
import * as actionComics from './../redux/actions/actionComics'

const shareOption = {
    title: "Download realToon",
    message: "Download segera realToon di PlayStore anda"
}

class DetailEpisode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: '',
        };
    }
    async componentDidMount() {
        await this.props.handleGetDetailEpisodes(this.props.navigation.getParam('id_episode'))
    }
    onSharePress = () =>
        Share.share(shareOption);

    render() {
        const dataDetailEpisodes = this.props.detailEpisodesLocal.detailEpisodes
        return (
            < ScrollView >
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

                <View>
                    <FlatList
                        data={dataDetailEpisodes}
                        horizontal={false}
                        renderItem={({ item }) =>
                            <View>
                                <Image style={{ height: 500, width: 500 }} source={{ uri: item.image }} />
                            </View>
                        }
                        keyExtractor={(item, index) => index.toString()
                        }
                    />
                </View>
            </ScrollView>
        );
    }
}


const mapStateToProps = state => {
    return {
        detailEpisodesLocal: state.detailEpisodes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleGetDetailEpisodes: (id_episode) => dispatch(actionComics.handleGetDetailEpisodes(id_episode)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailEpisode);