import React, { Component } from 'react'
import {
    Text,
    View
}  from 'react-native'

import styles from '../../styles'

export default class Message extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Message Page</Text>
            </View>
        )
    }
}