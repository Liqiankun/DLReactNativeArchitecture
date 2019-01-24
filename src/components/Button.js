import React from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
import styles from '../styles'
import PropTypes from 'prop-types'

const Button = ({ title, onPress }) => (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.8} onPress={() => onPress && onPress()}>
        <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
)

Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
}

export default Button
