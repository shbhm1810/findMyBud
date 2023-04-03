import React, {useState, useEffect} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '../../components/header/Header';
import Next from '../../assets/icons/next.svg';
import OtpInput from '../../components/otp-input/OtpInput';

import styles from './verifyOtpScreen-styles';

const VerifyOtpScreen = ({route, navigation}) => {
  const {phoneNumber} = route.params;

  const [seconds, setSeconds] = useState(0);
  const [otp, setOtp] = useState('');
  const {t} = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  return (
    <ImageBackground
      style={styles.imageContainer}
      source={require('../../assets/images/login.png')}
      resizeMode="cover">
      <SafeAreaView edges={['right', 'left', 'top']}>
        <Header
          onBackPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.subContainer}>
          <Text style={styles.heading}>{t('verifyOtp.verification')}</Text>
          <Text style={styles.subHeading}>
            {t('verifyOtp.heading', {phoneNumber})}
          </Text>
        </View>
        <OtpInput otp={otp} setOtp={setOtp} />
        <TouchableOpacity
          style={styles.buttonContainer}
          disabled={otp.length < 4}
          onPress={() => {
            // navigation.navigate('HomeScreen');
          }}>
          <View style={styles.buttonGroup}>
            <Text style={styles.buttonText}>{t('login.continue')}</Text>

            <View style={styles.btnImageContainer}>
              <Next height={50} width={50} />
            </View>
          </View>
        </TouchableOpacity>
        {seconds > 0 ? (
          <Text style={[styles.resendText]}>
            {t('verifyOtp.resend')}
            <Text
              style={[
                styles.resendText,
                styles.secondsText,
              ]}>{`${seconds} seconds`}</Text>
          </Text>
        ) : (
          <Text style={styles.resendText}>
            {t('verifyOtp.not-recieved')}
            <Text
              style={[styles.resendText, styles.secondsText]}
              onPress={() => {
                setSeconds(60);
              }}>
              {t('verifyOtp.code')}
            </Text>
          </Text>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};

export default VerifyOtpScreen;
