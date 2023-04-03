import React from 'react';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {Text} from 'react-native';

import styles from './otpInput-styles';

const CELL_COUNT = 4;
const OtpInput = (props: {otp: string; setOtp: (val: string) => void}) => {
  const {otp, setOtp} = props;

  const ref = useBlurOnFulfill({value: otp, cellCount: CELL_COUNT});
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });
  return (
    <CodeField
      ref={ref}
      {...prop}
      value={otp}
      onChangeText={setOtp}
      cellCount={CELL_COUNT}
      rootStyle={styles.codeFieldRoot}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <Text
          key={index}
          style={[styles.cell, isFocused && styles.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
      )}
    />
  );
};

export default OtpInput;
