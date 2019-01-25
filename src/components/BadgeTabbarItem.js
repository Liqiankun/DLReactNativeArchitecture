import React, { Component } from 'react'
import { 
    Text,
    Image,
    View
} from 'react-native'
import { connect } from 'react-redux'
import styles from '../styles'

class BadgeTabbarItem extends Component {
    render() {
        const { unreadCount, focused } = this.props
        return (
            <View style={styles.itemContainer}>
                <Image
                    style={styles.iconImage}
                    source={
                        focused ? require('../images/tabbar_profile_selected.png') :
                            require('../images/tabbar_profile.png')
                    }
                />
                {unreadCount > 0 ?
                    <View style={styles.badgeContainer}>
                        <Text style={styles.badgeCount}>{unreadCount}</Text>
                    </View>
                    : undefined}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        unreadCount: state.Message.unreadCount
    }
}

export default connect(mapStateToProps, null)(BadgeTabbarItem)
