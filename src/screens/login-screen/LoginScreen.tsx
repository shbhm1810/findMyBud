import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';

import PhoneNumberInput from '../../components/phone-number-input/PhoneNumberInput';
import Next from '../../assets/icons/next.svg';

import styles from './loginScreen-styles';

const LoginScreen = () => {
  const {t} = useTranslation();
  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require('../../assets/images/login.png')}
      resizeMode="cover">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={{flex: 2}} />
        <View style={styles.subContainer}>
          <Text style={styles.heading}>{t('login.mobile-number')}</Text>
          <Text style={styles.subHeading}>
            {t('login.continue-tap')}
            <Text style={styles.boldSubHeading}>{t('login.otp')}</Text>
            {t('login.on-this-num')}
          </Text>
          <PhoneNumberInput />
          <TouchableOpacity style={styles.buttonContainer}>
            <View style={styles.buttonGroup}>
              <Text style={styles.buttonText}>{t('login.continue')}</Text>

              <View style={styles.BtnImageContainer}>
                <Next height={50} width={50} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;
