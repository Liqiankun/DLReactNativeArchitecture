import React, { Component } from 'react'
import {
    View,
    ImageBackground
} from 'react-native'

import styles from '../../styles'
import Button from '../../components/Button'

export default class Launch extends Component {
    render() {
        const { navigation } = this.props
        const { navigate } = navigation
        return (
            <View style={styles.container}>
                <ImageBackground 
                    style={styles.launchImage}
                    source={require('../../images/launch_image.png')}
                >
                    <Button 
                        title='跳过'
                        buttonStyle={styles.launchButton}
                        onPress={() => {
                            navigate('Tabbar')
                        }}
                    />
                </ImageBackground>
            </View>
        )
    }
}
