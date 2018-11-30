import { getStatusBarHeight } from 'react-native-status-bar-height'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listView: {
        flex: 1,
        width: '100%'
    },
    tabBarIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    },
    launchImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    buttonContainer: {
        position: 'absolute',
        width: 60,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#ccc',
        right: 20,
        top: getStatusBarHeight() + 10
    },
    buttonTitle: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        lineHeight: 30
    },
    messageItemContainer: {
        width: '100%',
        height: 70,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 1.5,
        borderBottomColor: '#eee'
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 22.5
    },
    nameDescriptionContainer: {
        flex: 1,
        marginLeft: 15,
        height: 50,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    nameText: {
        fontSize: 15,
        color: '#333',
        fontWeight: '600'
    },
    descriptionText: {
        fontSize: 13,
        color: '#999'
    }
})

export default styles