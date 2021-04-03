import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as SC from './styles';
import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <SC.Container>
            <Image source={logoImg} />
            <View>
              <SC.Title>Faça seu logon</SC.Title>
            </View>
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />
            <Button
              onPress={() => {
                console.log('button');
              }}
            >
              Enviar
            </Button>
            <SC.ForgotPassword
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            >
              <SC.ForgotPasswordText>Esqueci minha senha</SC.ForgotPasswordText>
            </SC.ForgotPassword>
          </SC.Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <SC.CreateAccountButton
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <Icon name="log-in" size={20} color="#ff9000" />
        <SC.CreateAccountButtonText>Criar uma conta</SC.CreateAccountButtonText>
      </SC.CreateAccountButton>
    </>
  );
};

export default SignIn;
