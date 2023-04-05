import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import OnBoardingNavigator from './OnboardingNavigator';

function RootNavigator() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const getCurrentUser = async () => {
    setLoading(true);
    const val = await AsyncStorage.getItem('uid');
    if (val) {
      setIsLoggedIn(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <OnBoardingNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
