import { getStatusBarHeight } from 'react-native-status-bar-height'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    }
})

export default styles