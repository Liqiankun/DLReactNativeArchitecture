import React, { Component } from 'react'
import {
    Text,
    View,
    SafeAreaView
}  from 'react-native'

import styles from '../../styles'

export default class Message extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Message Page</Text>
            </SafeAreaView>
        )
    }
}