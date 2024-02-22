import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import {endAsyncEvent} from 'react-native/Libraries/Performance/Systrace';
import BottomTabStack from '../shells/BottomTabStack';
const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [shoepassword, setShowPassword] = useState(true);
  const loginApoi = async () => {
    data = {
      email: email,
      Password: Password,
      device_token: 'BNQASDFWP30KCYBER678IPFO',

      //   email: 'verma98yogesh@gmail.com',
      //   Password: 'Admin@1234',
      //   device_token: 'BNQASDFWP30KCYBER678IPFO',
    };

    try {
      const res = await axios.post(
        'https://sureshsecurity.cyberx-infosystem.us/api/s1/login',
        data,
      );
      console.log('resdata', res.data);
      if (res.data.status == true) {
        navigation.replace('BottomTabStack');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={{
        backgroundColor: 'white',

        paddingHorizontal: 15,
        height: '100%',
        width: '100%',
        paddingTop: 50,
      }}>
      <StatusBar backgroundColor={'#f23839'} barStyle="light-content" />
      <ScrollView contentContainerStyle={{paddingBottom: 30}}>
        <Image
          source={require('../assets/image/Logo.png')}
          resizeMode="contain"
          style={{height: 90, width: 90, alignSelf: 'center', marginBottom: 5}}
        />
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: 'black',
                fontSize: 30,
                fontWeight: '500',
              }}>
              Welcome To{' '}
            </Text>
            <Text
              style={{
                color: '#f23839',
                fontSize: 31,
                fontWeight: '500',
              }}>
              Suresh
            </Text>
          </View>
          <Text
            style={{
              color: '#f23839',
              fontSize: 31,
              fontWeight: '500',
            }}>
            Security
          </Text>
        </View>

        <Text style={{fontSize: 16, color: 'gray', opacity: 0.8}}>
          Hello there,login to continue
        </Text>

        <View style={{marginTop: 40}}>
          <View style={{}}>
            <Text style={{color: 'black', marginBottom: 5}}>Email*</Text>
            <View
              style={{
                borderWidth: 0.2,
                elevation: 2,
                borderColor: 'grey',
                width: '100%',
                height: 55,
                backgroundColor: 'white',
                borderRadius: 4,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="email-open-outline"
                  color="#f23839"
                  size={30}
                />
              </View>

              <TextInput
                style={{flex: 1, borderRadius: 4, color: 'black'}}
                placeholder="Enter Your Email"
                value={email}
                onChangeText={text => setEmail(text)}
                placeholderTextColor={'grey'}
              />
            </View>
          </View>
          <View style={{marginTop: 14}}>
            <Text style={{color: 'black', marginBottom: 5}}>Password*</Text>

            <View
              style={{
                borderWidth: 0.2,
                elevation: 2,
                borderColor: 'grey',
                width: '100%',
                height: 55,
                backgroundColor: 'white',
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Feather name="unlock" color="#f23839" size={30} style={{}} />
              </View>
              <TextInput
                style={{
                  flex: 1,
                  borderRadius: 4,
                  color: 'black',
                }}
                placeholder="Enter Your password"
                value={Password}
                onChangeText={text => setPassword(text)}
                placeholderTextColor={'grey'}
                secureTextEntry={shoepassword}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!shoepassword)}
                style={{
                  width: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo
                  name={!shoepassword ? 'eye' : 'eye-with-line'}
                  color="#f23839"
                  size={25}
                  style={{}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={{color: 'red', marginTop: 6, alignSelf: 'flex-end'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={loginApoi}
          style={{
            width: '100%',
            backgroundColor: '#f23839',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            height: 45,
            elevation: 3,
            borderRadius: 5,
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;
