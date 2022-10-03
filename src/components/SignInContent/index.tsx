import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './styles';

import Illustration from '../../assets/images/illustration.png'

export function SignInContent() {
  return (
    <View style={styles.container}>

      <Image 
        source={Illustration}
        style={styles.illustration}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Partiu?
        </Text>

        <Text style={styles.subtitle}>
          Entre com sua conta Google para {'\n'}
          ser mais rápido e vamos decolar.
        </Text>

        <Text style={styles.description}>
          Compreendendo os conceitos e implementando na prática
          a estratégia de login social utilizando o padrão OAuth.
        </Text>
      </View>
    </View>
  );
}