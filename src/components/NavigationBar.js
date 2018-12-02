import React from 'react'
import {
    TouchableWithoutFeedback,
    View,
    Text,
    Image
} from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles'

const NavigationBar = ({ title, onLeft, onRight }) => (
    <View style={styles.navigationBar}>
        <TouchableWithoutFeedback onPress={() => onLeft && onLeft()}>
            <Image style={styles.backButton} source={require('../images/back-icon.png')} />
        </TouchableWithoutFeedback>
        <Text style={styles.navigationTitleText}>{title}</Text>
        <TouchableWithoutFeedback onPress={() => onRight && onRight()}>
            <Image style={styles.deleteButton} source={require('../images/delete.png')} />
        </TouchableWithoutFeedback>
    </View>
)

NavigationBar.propTypes = {
    title: PropTypes.object,
    onLeft: PropTypes.func,
    onRight: PropTypes.func
}

export default NavigationBar
