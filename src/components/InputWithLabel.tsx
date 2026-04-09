import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputWithLabel = ({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  secureTextEntry, 
  onSubmitEditing
}: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { padding: 8, fontSize: 18 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, fontSize: 16, borderRadius: 8 }
});

export default InputWithLabel;