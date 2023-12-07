import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {bgColor, mainHeading} from '../../Components/Constants';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Btn from '../../Components/Btn';

const Login = props => {
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
              style={{fontSize: mainHeading, fontWeight: 900, color: '#fff'}}>
              Welcome Back !
            </Text>

            <Text style={{fontWeight: '300', fontSize: 15, color: '#fff'}}>
              Login To Your Account
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
            paddingBottom: '5%',
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
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: '#999',
              }}></View>

            <View
              style={{
                marginLeft: 99,
                marginTop: -12,
                backgroundColor: '#fff',
                width: '33%',
              }}>
              <Text
                style={{
                  color: bgColor,
                }}>
                or continue with
              </Text>
            </View>
          </View>

          <View style={styles.spacing}></View>

          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
            }}>
            <TouchableOpacity style={{...styles.icon, borderColor: '#3b5998'}}>
              <Icon name="facebook-f" color="#3b5998" size={35} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                ...styles.icon,
                borderTopColor: 'red',
                borderBottomColor: 'green',
                borderRightColor: 'yellow',
              }}>
              <Image
                source={require('../../assesets/images/google.png')}
                style={styles.image}
              />
            </TouchableOpacity>

            <TouchableOpacity style={{...styles.icon, borderColor: '#0a66c2'}}>
              <Icon name="linkedin" color="#0a66c2" size={35} />
            </TouchableOpacity>
          </View>

          <View style={styles.spacing_big}></View>
          <View style={styles.spacing_big}></View>
          <View style={styles.spacing}></View>

          <Btn btnLabel={'Login'} bgColor={bgColor} />

          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Text>Create a new account? </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: bgColor,
                }}>
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  spacing: {
    margin: 10,
  },
  spacing_big: {
    margin: 30,
  },
  label: {
    // justifyContent: 'center',
    // alignItems: 'center',\
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

  card: {
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 7,
    elevation: 5,
    marginTop: 100,

    // alignItems:'center',
    // justifyContent:'center'
  },

  icon: {
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 35,
    height: 35,
    resizeMode: 'cover',
  },
});
