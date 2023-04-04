import React, {useState} from 'react';
import {
  ImageBackground,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import phoneLogin from '../../redux/actions/user-login-action';
import PhoneNumberInput from '../../components/phone-number-input/PhoneNumberInput';
import Next from '../../assets/icons/next.svg';
import {validatePhoneNumber} from '../../utils/utility';

import styles from './loginScreen-styles';

const ERROR_MSG = 'Please Enter a valid Phone Number';
const LoginScreen = () => {
  const {t} = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  const {isLoadingLogin, errorMessage} = useSelector(state => state.authStore);

  const dispatch = useDispatch();
  const handleContinuePress = () => {
    setError('');

    if (!validatePhoneNumber(phoneNumber)) {
      setError(ERROR_MSG);
    } else {
      dispatch(
        phoneLogin(`+91 ${phoneNumber}`, () => {
          navigation.navigate('VerifyOtp', {
            phoneNumber,
          });
        }),
      );
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
            {!isLoadingLogin ? (
              <View style={styles.buttonGroup}>
                <Text style={styles.buttonText}>{t('login.continue')}</Text>

                <View style={styles.btnImageContainer}>
                  <Next height={50} width={50} />
                </View>
              </View>
            ) : (
              <ActivityIndicator size="large" color="white" />
            )}
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default LoginScreen;
