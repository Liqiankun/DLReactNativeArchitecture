import React, { Component } from 'react'
import {
    Text,
    View
} from 'react-native'
import { connect } from 'react-redux'
import styles from '../../styles'
import Button from '../../components/Button'
import { increaseUnreadCount } from '../../store/actions/message'

class Profile extends Component {
    render() {
        const { increase } = this.props
        return (
            <View style={styles.container}>
                <Text>Profile Page</Text>
                <Button
                    buttonStyle={styles.unreadButton}
                    title='Unread Count +'
                    onPress={() => increase()}
                />
            </View>
        )
    }
}

const mapDispatchToProps = {
    increase: increaseUnreadCount
}

export default connect(null, mapDispatchToProps)(Profile)
