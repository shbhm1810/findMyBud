import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/redux/strore';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <Provider store={store}>
        <View />
      </Provider>
    </SafeAreaView>
  );
}

export default App;
