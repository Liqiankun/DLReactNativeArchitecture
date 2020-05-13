import React, { Component } from 'react'
import {
    View
} from 'react-native'
import { connect } from 'react-redux'
import DLButton from '../../components/Button'
import styles from '../../styles'
import { changeStack } from '../../store/actions/login'

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <DLButton
                    buttonStyle={styles.logoutButton}
                    title='Log out'
                    onPress={() => this.props.switch()}
                />
            </View>
        )
    }
}

export default connect(undefined, {
    switch: changeStack
})(Profile)
