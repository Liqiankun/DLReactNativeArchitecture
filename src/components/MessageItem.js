import React from 'react'
import {
    TouchableWithoutFeedback,
    View,
    Text,
    Image
} from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles'

const MessageItem = ({ itemData, onItem }) => (
    <TouchableWithoutFeedback onPress={() => onItem && onItem(itemData.id)}>
        <View style={styles.messageItemContainer}>
            <Image style={styles.avatar} source={{ uri: itemData.owner.avatar_url }} />
            <View style={styles.nameDescriptionContainer}>
                <Text style={styles.nameText}>{itemData.name}</Text>
                <Text style={styles.descriptionText}>{itemData.description}</Text>
            </View>
        </View>
    </TouchableWithoutFeedback>
)

MessageItem.propTypes = {
    itemData: PropTypes.object,
    onItem: PropTypes.func
}

export default MessageItem