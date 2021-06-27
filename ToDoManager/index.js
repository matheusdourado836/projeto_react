import 'react-native-gesture-handler'
import React from 'react';
import {AppRegistry, SafeAreaView} from 'react-native'
import {name as appName} from './app.json'
import Routes from './src/routes/Routes';
import {NavigationContainer} from '@react-navigation/native';
import { initializeFirebaseApi } from './src/services/FirebaseApi';

const wrappedRoutes = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  )
}
AppRegistry.registerComponent(appName, () => {
    initializeFirebaseApi();
    return wrappedRoutes;
})
