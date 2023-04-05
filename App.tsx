import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {RootSiblingParent} from 'react-native-root-siblings';
import '../findMyBud/src/locales/i18n';

import store from './src/redux/store';
import RootNavigator from './src/navigation/RootNavigator';

function App(): JSX.Element {
  return (
    <RootSiblingParent>
      <SafeAreaProvider style={{flex: 1}} edges={['right', 'left', 'top']}>
        <StatusBar barStyle={'dark-content'} backgroundColor="white" />
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </SafeAreaProvider>
    </RootSiblingParent>
  );
}

export default App;
