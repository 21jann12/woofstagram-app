import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SignInScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Woofstagram</Text>
      
      <View style={{ marginBottom: 20, width: '80%' }}>
        <Button 
          title="Entrar" 
          onPress={() => navigation.navigate('Main')} 
          color="#01970e"
        />
      </View>

      <Text>Não tem uma conta?</Text>
      <Button 
        title="Criar conta agora" 
        onPress={() => navigation.navigate('SignUp')} 
        color="#2196F3"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
});