import { Text, TextProps as RNTextProps, TextStyle } from 'react-native';
import React from 'react';

interface TextProps extends RNTextProps {
  style?: TextStyle | TextStyle[];
}

export function AppText(props: TextProps) {
  return (
    <Text
      {...props}
      style={[{ fontFamily: 'SpaceMono' }, props.style]}
    />
  );
}
