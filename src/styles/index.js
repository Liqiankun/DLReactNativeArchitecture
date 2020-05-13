import { getStatusBarHeight } from 'react-native-status-bar-height'
import { StyleSheet, Dimensions } from 'react-native'
import DeviceInfo from 'react-native-device-info'

const { width, height } = Dimensions.get('window')
const notchHeight = getStatusBarHeight()
const navigationBarHeight = DeviceInfo.hasNotch() ? 88 : 64

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  webView: {
    width,
    height,
    marginTop: navigationBarHeight - notchHeight
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#ccc',
  },
  buttonTitle: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    lineHeight: 30
  },
  launchButton: {
    position: 'absolute',
    right: 20,
    top: getStatusBarHeight() + 10
  },
  messageItemContainer: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    color: '#999',
    lineHeight: 18,
    marginTop: 4
  },
  navigationBar: {
    position: 'absolute',
    top: 0,
    zIndex: 100,
    width: '100%',
    height: navigationBarHeight,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  navigationTitleText: {
    position: 'absolute',
    bottom: 15,
    fontSize: 15,
    fontWeight: '500',
    color: '#6699ff'
  },
  backButton: {
    position: 'absolute',
    width: 12,
    height: 21,
    left: 12,
    bottom: 10
  },
  deleteButton: {
    position: 'absolute',
    width: 21,
    height: 21,
    right: 12,
    bottom: 10
  },
  itemContainer: {
    zIndex: 0,
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  badgeContainer: {
    position: 'absolute',
    top: 4,
    left: 65,
    borderRadius: 8,
    backgroundColor: 'red',
    paddingHorizontal: 4,
    zIndex: 2
  },
  badgeCount: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500'
  },
  iconImage: {
    width: 22,
    height: 22
  },
  unreadButton: {
    backgroundColor: '#6699ff',
    marginTop: 10,
    width: 130
  },
  logoutButton: {
    backgroundColor: '#6699ff',
    width: 150,
    height: 40,
    borderRadius: 20
  }
})

export default styles
