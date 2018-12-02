import React from 'react'
import {
    TouchableWithoutFeedback,
    View,
    Text
} from 'react-native'
import styles from '../styles'
import PropTypes from 'prop-types'

const Button = ({ title, onPress }) => (
    <TouchableWithoutFeedback onPress={() => onPress && onPress()}>
        <View style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>{title}</Text>
        </View>
    </TouchableWithoutFeedback>
)

Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
}

export default Button
