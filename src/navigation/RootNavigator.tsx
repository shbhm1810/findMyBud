import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import OnBoardingNavigator from './OnboardingNavigator';

function RootNavigator(): JSX.Element {
  const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <OnBoardingNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
