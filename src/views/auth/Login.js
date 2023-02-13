import React, {useContext, useState } from "react";
import { 
  Image, 
  Text, 
  StyleSheet, 
  View,
  TouchableOpacity, 
  Alert,
} from "react-native";
import { useNavigation } from  '@react-navigation/native'

import logoImage from '../../../assets/imgs/logo.png'

import InputText from "../../components/shared/forms/InputText"
import InputPassword from '../../components/shared/forms/InputPassword'

import { SafeAreaView } from "react-native-safe-area-context";
import { AuthContext } from "../../contexts/AuthContext";

export default () => {
  const navigation = useNavigation()

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const {signIn, userInfo, userToken} = useContext(AuthContext)

  const [loginScreen, setLoginScreen] = useState(true)

  const resetPassword = () => {

  }

  const handleSignIn = () => {
    if (userName != '' && password != '') {
      signIn(userName, password)
      if(userToken != null) {
        navigation.navigate('MainTab')
      } else {
        Alert.alert('Usuário e/ou senha errados')
      }
    } else {
      Alert.alert('Preencha os campos corretamente!')
    }
  }

    return (
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={logoImage}/>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.subTitle}>{loginScreen ? 'Login de acesso' : 'Redefinir senha'}</Text>
        </View>
        <View style={styles.formContainer}>
          <InputText icon='user' placeholder="Usuário" 
            value={userName} 
            style={styles.input} onChangeText={userName => setUserName( userName )}/>
          {loginScreen &&
            <InputPassword icon='lock' placeholder="Senha" 
              value={password} 
              style={styles.input} onChangeText={password => setPassword( password )}/>
          }

            <TouchableOpacity style={{marginTop: 6}} onPress={loginScreen ? handleSignIn : resetPassword}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>
                  {loginScreen ? 'Entrar' : 'Solicitar'}
                </Text>
              </View>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.changePassword} 
        onPress={() => setLoginScreen(!loginScreen)}>
            <Text style={{color: '#577696', fontSize: 15}}>{loginScreen ? 'Esqueceu a senha?' : 'Voltar para login' }</Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: 181,
    height: 54,
    marginTop: 96,
  },
  subTitle: {
    marginTop: 58,
    marginBottom: 7,
    fontSize: 25,
  },
  formContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 27
  },
  input: {
    width: 296,
    height: 39,
    paddingHorizontal: 9,
    borderWidth: 1,
    borderColor: '#E9EDF3',
    borderRadius: 5,
    marginBottom: 18,
  },
  button: {
    backgroundColor: '#577696',
    width: 211,
    height: 39,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  changePassword: {
    height: 20,
    marginTop: 33,
    alignItems: 'center'
  }
})
