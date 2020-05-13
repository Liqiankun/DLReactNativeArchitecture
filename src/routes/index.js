import React from 'react'
import { Image } from 'react-native'
import { connect } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

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

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const StackNavigatorOptions = {
  headerStyle: {
    backgroundColor: '#fff',
    borderBottomWidth: 0,
  },
  headerTintColor: '#5B99FA',
  headerBackTitle: ' ',
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

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={StackNavigatorOptions}
  >
    <Stack.Screen name="Home" component={HomePage} options={{ title: '首页' }} />
    <Stack.Screen name="HomeDetail" component={HomeDetailPage} options={{ title: '详情' }} />
  </Stack.Navigator>
)

const MessageStack = () => (
  <Stack.Navigator
    screenOptions={StackNavigatorOptions}
  >
    <Stack.Screen name="Message" component={MessagePage} options={{ headerShown: false, animationEnabled: false }} />
    <Stack.Screen name="MessageDetail" component={MessageDetailPage} options={{ headerShown: false, animationEnabled: false }} />
  </Stack.Navigator>
)

const TabBarStack = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#6699ff',
      inactiveTintColor: '#999',
    }}
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => tabarIcons[route.name].render(focused),
    })}
  >
    <Tab.Screen name="Home" component={HomeStack} options={({ route }) => ({
      tabBarLabel: '首页',
      tabBarVisible: route.state && route.state.index === 0
    })} />
    <Tab.Screen name="Message" component={MessageStack} options={{ tabBarLabel: '信息' }} />
    <Tab.Screen name="Profile" component={ProfilePage} options={{ tabBarLabel: '我的' }} />
  </Tab.Navigator>
)

const AppStack = ({ isLaunching }) => (
  <Stack.Navigator
    screenOptions={{
      animationEnabled: false
    }}
  >
    {
      isLaunching ?
        <Stack.Screen name="Launch" component={LaunchPage} options={{ headerShown: false, animationEnabled: false }} />
        : <Stack.Screen name="TabBar" component={TabBarStack} options={{ headerShown: false }} />
    }
  </Stack.Navigator>
)

const SwitchStack = ({ isLaunching }) => {
  return (
    <NavigationContainer>
      <AppStack isLaunching={isLaunching} />
    </NavigationContainer>
  )
}

export default connect((state) => ({
  isLaunching: state.Login.isLaunching
}))(SwitchStack)
