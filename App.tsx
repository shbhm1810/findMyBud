import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/strore';
import RootNavigator from './src/navigation/RootNavigator';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
