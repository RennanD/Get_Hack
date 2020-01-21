/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container, Text} from './styles';

export default function Button({children, loading, ...rest}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size={20} color="#fff" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}
