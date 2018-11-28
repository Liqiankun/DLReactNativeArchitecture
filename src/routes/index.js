import React from 'react'
import { Image } from 'react-native'
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation'

import HomePage from '../pages/Home'
import MessagePage from '../pages/Message'
import ProfilePage from '../pages/Profile'

import styles from '../styles'

function _renderTabbarIcon(icon) {
	return <Image source={icon} style={styles.tabBarIcon} />
}

const tabarIcons = {
    Home: {
        render: focused => {
            return focused
                ? _renderTabbarIcon(require('../images/tabbar_home_selected.png'))
                : _renderTabbarIcon(require('../images/tabbar_home.png'))
        }
    },
    Message: {
        render: focused => {
            return focused
                ? _renderTabbarIcon(require('../images/tabbar_message_selected.png'))
                : _renderTabbarIcon(require('../images/tabbar_message.png'))
        }
    },
    Profile: {
        render: focused => {
            return focused
                ? _renderTabbarIcon(require('../images/tabbar_profile_selected.png'))
                : _renderTabbarIcon(require('../images/tabbar_profile.png'))
        }
    }
}

const tabBarStack = createBottomTabNavigator({
    Home: {
        screen: HomePage,
        navigationOptions: {
            tabBarLabel: '首页'
        }   
    },
    Message: {
        screen: MessagePage,
        navigationOptions: {
            tabBarLabel: '信息'
        }
    },
    Profile: {
        screen: ProfilePage,
        navigationOptions: {
            header: null
        }
    }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused }) => {
            const { routeName } = navigation.state
            return tabarIcons[routeName].render(focused)
        }
    }),
    tabBarOptions: {
        activeTintColor: '#6699ff',
        inactiveTintColor: '#333'
    }
})

export default createAppContainer(tabBarStack)
