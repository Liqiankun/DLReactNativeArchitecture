import React, { Component } from 'react'
import { View } from 'react-native'
import SwitchStack from './src/routes'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import logger from 'redux-logger'
import DropdownAlert from 'react-native-dropdownalert'
import reducers from './src/store/reducers'

const client = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
})

const middlewareConfig = {
    interceptors: {
        request: [
            {
                success: async function (_, req) {
                    // const token = await AsyncStorage.getItem('user_token')
                    const newReq = {
                        ...req,
                        headers: {
                            ...req.headers,
                            common: {
                                ...req.headers.common,
                                // Authorization: token
                            },
                        }
                    }
                    return newReq
                }
            }
        ],
        response: [
            {
                success: function (_, res) {
                    return res
                },
                error: function (_, error) {
                    DropDownHolder.getDropDown().alertWithType('error', 'Error', error.message)
                    return Promise.reject(error)
                }
            }
        ]
    }
}

export const store = createStore(reducers, applyMiddleware(axiosMiddleware(client, middlewareConfig), logger))

console.disableYellowBox = true

export class DropDownHolder {
    static dropDown
    static setDropDown(dropDown) {
        this.dropDown = dropDown
    }
    static getDropDown() {
        return this.dropDown
    }
}

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ width: '100%', height: '100%' }}>
                    <SwitchStack />
                    <DropdownAlert
                        ref={(ref) => DropDownHolder.setDropDown(ref)}
                        closeInterval={2000}
                    />
                </View>
            </Provider>
        )
    }
}
