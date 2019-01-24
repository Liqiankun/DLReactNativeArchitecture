import React from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
import styles from '../styles'
import PropTypes from 'prop-types'

const Button = ({ title, onPress, buttonStyle }) => (
    <TouchableOpacity style={[styles.buttonContainer, buttonStyle]} activeOpacity={0.8} onPress={() => onPress && onPress()}>
        <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
)

Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    buttonStyle: PropTypes.object
}

export default Button
