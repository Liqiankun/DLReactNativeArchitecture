import React, { Component } from 'react'
import {
    Text,
    View,
    Button
} from 'react-native'
import { connect } from 'react-redux'
import { increaseUnreadCount } from '../../store/actions/message'
import styles from '../../styles'
import DLButton from '../../components/Button'

class Home extends Component {
    render() {
        const { navigation, increase } = this.props
        const { navigate } = navigation

        return (
            <View style={styles.container}>
                <Text>Home Page</Text>
                <Button
                    title='Go to Detail'
                    onPress={() => navigate('HomeDetail')}
                />
                <DLButton
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

export default connect(null, mapDispatchToProps)(Home)
