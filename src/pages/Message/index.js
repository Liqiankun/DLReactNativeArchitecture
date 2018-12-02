import React, { Component } from 'react'
import {
    SafeAreaView,
    FlatList,
    ActivityIndicator,
} from 'react-native'
import { connect } from 'react-redux'

import styles from '../../styles'
import MessageItem from '../../components/MessageItem'
import { fetchMessageList } from '../../store/actions/message'

 class Message extends Component {
    componentDidMount() {
        this.props.fetchList({
            q: 'react native'
        }).then()
    }
    render() {
        const { loading, list, navigation } = this.props
        const { navigate } = navigation
        return (
            <SafeAreaView style={styles.container}>
                {
                    loading ? <ActivityIndicator size='large' /> :
                    <FlatList
                        style={styles.listView}
                        data={list}
                        renderItem={(r) => (
                            <MessageItem
                                itemData={r.item}
                                onItem={() => navigate('MessageDetail', {
                                    itemId: r.item.id,
                                    uri: r.item.html_url
                                })}
                            />
                        )}
                    />                    
                }
            </SafeAreaView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.Message.list,
        loading: state.Message.loading,
    }
}

const mapDispatchToProps = {
    fetchList: fetchMessageList
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
