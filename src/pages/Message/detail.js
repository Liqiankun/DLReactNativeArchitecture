import React, { Component } from 'react'
import {
    SafeAreaView,
    WebView
} from 'react-native'
import { connect } from 'react-redux'

import styles from '../../styles'
import { deleteMessage } from '../../store/actions/message'
import NavigationBar from '../../components/NavigationBar';

 class Detail extends Component {
    componentDidMount() {
    }

    render() {
        const { navigation, removeMessage } = this.props
        const { state, goBack } = navigation
        const { params } = state
        const { uri, itemId } = params 
        
        return (
            <SafeAreaView style={styles.container} forceInset={{ top: 'never' }}>
                <NavigationBar 
                    title='详情'
                    onLeft={() => goBack()}
                    onRight={() => {
                        removeMessage(itemId)
                        goBack()
                    }}
                />
                <WebView
                    style={styles.webView}
                    source={{ uri }}
                />
            </SafeAreaView>
        )
    }
}


const mapDispatchToProps = {
    removeMessage: deleteMessage
}

export default connect(null, mapDispatchToProps)(Detail)
