import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Item, Input, Icon } from 'native-base';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Item regular>
                <Input placeholder='Search' />
                <Icon active name='search' />
            </Item>
        );
    }
}
