import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  viewReview: {
    flexDirection: 'row',
    padding: 10,
    paddingBottom: 20,
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1
  },
  viewAvatar: {
    marginRight: 15
  },
  containerAvatar: {
    width: 50,
    height: 50
  },
  viewInfo: {
    flex: 1,
    alignItems: 'flex-start'
  },
  reviewTitle: {
    fontWeight: 'bold'
  },
  reviewContent: {
    marginBottom: 5,
    paddingTop: 2,
    color: 'grey'
  },
  reviewDate: {
    marginTop: 5,
    color: 'grey',
    fontSize: 12,
    position: 'absolute',
    right: 0,
    bottom: 0
  }
})

export default styles
