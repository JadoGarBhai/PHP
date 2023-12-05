import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Btn({bgColor, btnLabel, Press}) {
  return (
    <TouchableOpacity onPress={Press}>
      <View
        style={{
          margin: 10,
          backgroundColor: bgColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}>
          {btnLabel}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
