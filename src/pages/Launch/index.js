import React, { Component } from 'react'
import {
    View,
    ImageBackground
} from 'react-native'
import { connect } from 'react-redux'

import { changeStack } from '../../store/actions/login'
import styles from '../../styles'
import Button from '../../components/Button'

class Launch extends Component {
    render() {
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
                            this.props.switch()
                        }}
                    />
                </ImageBackground>
            </View>
        )
    }
}


export default connect(undefined, {
    switch: changeStack
})(Launch)
