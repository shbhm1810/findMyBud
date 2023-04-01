import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {useTranslation} from 'react-i18next';

import styles from './phoneNumberInput-styles';

const PhoneNumberInput = (props: {
  phoneNumber: string;
  setPhoneNumber: (val: string) => void;
  setError: (val: string) => void;
}) => {
  const {phoneNumber, setPhoneNumber, setError} = props;
  const {t} = useTranslation();

  const handleChangeText = (textInput: string) => {
    setError('');
    setPhoneNumber(textInput);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prefixText}>{t('login.prefix')} </Text>
      <TextInput
        inputMode="numeric"
        style={styles.textInput}
        value={phoneNumber}
        onChangeText={handleChangeText}
        maxLength={10}
      />
    </View>
  );
};

export default PhoneNumberInput;
