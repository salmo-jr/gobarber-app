import React from 'react';
import { TextInputProps } from 'react-native';
import * as SC from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({ name, icon, ...rest }) => {
  return (
    <SC.Container>
      <SC.Icon name={icon} size={20} color="#666360" />
      <SC.TextInput
        keyboardApperance="dark"
        placeholderTextColor="#666360"
        {...rest}
      />
    </SC.Container>
  );
};

export default Input;
