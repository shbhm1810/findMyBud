import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import Back from '../../assets/icons/back.svg';

const Header = (props: {onBackPress: () => void}) => {
  const {onBackPress} = props;
  return (
    <View>
      <TouchableOpacity onPress={onBackPress}>
        <Back height={30} width={30} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
