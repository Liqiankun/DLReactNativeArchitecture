import React, { PureComponent } from 'react'
import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native'
import PropTypes from 'prop-types'
import styles from '../styles'

class MessageItem extends PureComponent {
    render() {
        const { itemData, onItem } = this.props
        return (
            <TouchableOpacity style={styles.messageItemContainer} activeOpacity={0.8} onPress={() => onItem && onItem(itemData.id)}>
                <Image style={styles.avatar} source={{ uri: itemData.owner.avatar_url }} />
                <View style={styles.nameDescriptionContainer}>
                    <Text style={styles.nameText}>{itemData.name}</Text>
                    <Text style={styles.descriptionText}>{itemData.description}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

MessageItem.propTypes = {
    itemData: PropTypes.object,
    onItem: PropTypes.func
}

export default MessageItem
