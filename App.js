import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import initTables from './db/models';
import {initSettings} from './db/settingQueries';
import {Provider as StoreProvider} from 'react-redux';
import store from './redux/store/index';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';
// Open database & Create tables, post basic settings
initTables();
initSettings();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
        </PaperProvider>
      </StoreProvider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
