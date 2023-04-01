import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';

import styles from './phoneNumberInput-styles';

const PhoneNumberInput = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.prefixText}>{t('login.prefix')} </Text>
      <TextInput inputMode="numeric" style={styles.textInput} />
    </View>
  );
};

export default PhoneNumberInput;
