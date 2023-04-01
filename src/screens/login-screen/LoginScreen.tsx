import React, {useState} from 'react';
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
import {validatePhoneNumber} from '../../utils/utility';

import styles from './loginScreen-styles';

const ERROR_MSG = 'Please Enter a valid Phone Number';
const LoginScreen = () => {
  const {t} = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleContinuePress = () => {
    setError('');
    if (!validatePhoneNumber(phoneNumber)) {
      setError(ERROR_MSG);
    }
  };

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
          <PhoneNumberInput
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
            setError={setError}
          />
          <Text style={styles.errorTxt}>{error}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleContinuePress}>
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
