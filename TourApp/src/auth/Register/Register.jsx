import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {bgColor, mainHeading, title} from '../../Components/Constants';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Btn from '../../Components/Btn';

const Register = ({navigation}) => {
  return (
    <View>
      {/* Contianer 1 */}
      <View style={{backgroundColor: '#ffffff'}}>
        <View
          style={{
            backgroundColor: bgColor,
            padding: 50,
            borderBottomLeftRadius: 60,
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: mainHeading,
                fontWeight: 900,
                color: '#fff',
                fontFamily: 'Andika-Bold',
              }}>
              {title}
            </Text>

            <Text style={{fontWeight: '300', fontSize: 15, color: '#fff'}}>
              Create New Account
            </Text>
          </View>
        </View>
      </View>

      {/* Container 2 */}
      <View style={{backgroundColor: bgColor}}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: '#fff',
            paddingHorizontal: 30,
            borderTopRightRadius: 60,
            maxHeight: '100',
            paddingBottom: '15%',
          }}>
          <View style={styles.spacing_big}></View>

          <View>
            <View style={styles.label}>
              <Text style={styles.label}>Email</Text>
            </View>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              // value={'username'}
              placeholder="Enter Your Email"
            />
          </View>

          <View style={styles.spacing}></View>

          <View>
            <View style={styles.label}>
              <Text style={styles.label}>Password</Text>
            </View>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              // value={'password'}
              placeholder="Enter Your Password"
            />
          </View>

          <View style={styles.spacing}></View>

          <View>
            <View style={styles.label}>
              <Text style={styles.label}>Confrim Password</Text>
            </View>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true}
              // value={'password'}
              placeholder="Re-write The Password"
            />
          </View>

          <View
            style={{
              marginLeft: 10,
              marginTop: 5,
            }}>
            <Text>
              I have read the{' '}
              <Text style={{color: bgColor}}>Terms of Service.</Text>
            </Text>
          </View>

          <View style={styles.spacing_big}></View>
          <View style={styles.spacing_big}></View>

          <Btn btnLabel={'Register'} bgColor={bgColor} />

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: bgColor,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  spacing: {
    margin: 10,
  },
  spacing_big: {
    margin: 30,
  },
  label: {
    fontWeight: '300',
    paddingLeft: 5,
    fontSize: 17,
    color: '#999',
  },
  input: {
    height: 40,
    margin: 5,
    borderRadius: 100,
    backgroundColor: '#e7e7e7',
    padding: 10,
  },
});
