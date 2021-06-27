import React from 'react'
import {StyleSheet, ActivityIndicator, View, Text} from 'react-native'
import {CommonActions} from '@react-navigation/native'
import {currentFirebaseUser} from '../services/FirebaseApi'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator style={styles.loading} />
      </View>
    )
  }

  async componentDidMount () {
    let resetNavigation = CommonActions.reset({
      index: 0,
      routes: [{name: 'Login'}],
    })
    try {
      const user = await currentFirebaseUser()
      if (user) {
        this.props.navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'TaskList'}],
          }),
        )
      }
      this.props.navigation.dispatch(resetNavigation)
    } catch (error) {
      this.props.navigation.dispatch(resetNavigation)
    }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    width: 50,
    height: 50,
  },
})

export default App
