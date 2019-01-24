import React from 'react'
import { Image } from 'react-native'
import {
    createBottomTabNavigator,
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation'

import HomePage from '../pages/Home'
import MessagePage from '../pages/Message'
import MessageDetailPage from '../pages/Message/detail'
import ProfilePage from '../pages/Profile'
import HomeDetailPage from '../pages/Home/detail'
import LaunchPage from '../pages/Launch'
import BadgeItem from '../components/BadgeTabbarItem'

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
            return <BadgeItem focused={focused} />
        }
    }
}

const HomeStack = createStackNavigator({
    Home: {
       screen: HomePage,
       navigationOptions: {
           title: '首页'
       }
    },
    HomeDetail: {
       screen: HomeDetailPage,
       navigationOptions: {
           title: '详情'
       } 
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff',
            borderBottomWidth: 0,
        },
        headerTintColor: '#5B99FA',
        headerBackTitle: null
    }
})

HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true
    if (navigation.state.index > 0) {
        tabBarVisible = false
    }
    return {
        tabBarVisible
    }
}

const MessageStack = createStackNavigator({
    Message: {
        screen: MessagePage,
        navigationOptions: {
            header: null
        }
    },
    MessageDetail: {
        screen: MessageDetailPage,
        navigationOptions: {
            header: null
        }
    }
}, {
    defaultNavigationOptions: {
        
        headerStyle: {
            backgroundColor: '#fff',
            borderBottomWidth: 0,
        },
        headerTintColor: '#5B99FA',
        headerBackTitle: null
    }
})

const TabBarStack = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: '首页'
        }   
    },
    Message: {
        screen: MessageStack,
        navigationOptions: {
            tabBarLabel: '信息'
        }
    },
    Profile: {
        screen: ProfilePage,
        navigationOptions: {
            tabBarLabel: '我的'
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


const SwitchStack = createSwitchNavigator({
    Launch: {
        screen: LaunchPage,
        navigationOptions: {
            header: null
        }
    },
    Tabbar: {
        screen: TabBarStack
    }
}, {
    initialRouteName: 'Launch'
})

export default createAppContainer(SwitchStack)
