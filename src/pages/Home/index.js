import React, { Component } from 'react'
import {
    Text,
    View,
    Button
}  from 'react-native'

import styles from '../../styles'

export default class Home extends Component {
    render() {
        const { navigation } = this.props
        const { navigate } = navigation
        return (
            <View style={styles.container}>
                <Text>Home Page</Text>
                <Button
                    title='Go to Detail'
                    onPress={() => navigate('HomeDetail')}
                />
            </View>
        )
    }
}