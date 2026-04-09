import InputWithLabel from '@/src/components/InputWithLabel';
import { Formik } from 'formik';
import React from 'react';
import { Alert, Button, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native';

const SignUpScreen = ({ navigation }: any) => {

    const handleRegister = (values: any) => {
        if (values.password !== values.confirmPassword) {
            alert("As senhas não coincidem!");
            return;
        }

        console.log("Formulário Enviado:", values);

        Alert.alert(
            "Sucesso!", 
            "Seu cadastro foi realizado.",
            [
                { 
                    text: "OK", 
                    onPress: () => navigation.navigate('Main')
                }
            ]
        );
    };

  return (
    <Formik
        initialValues={{ email: '', password: '', confirmPassword: '', name: '', birthday: '', breed: '', toy: '' }}
        onSubmit={handleRegister}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <KeyboardAvoidingView behavior={'height'}
            style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: '#ecf0f1' }}
                contentContainerStyle={{flexGrow: 1, padding:20, paddingBottom:40, minHeight: '100%'}}>

                    <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
                        Woofstagram
                    </Text>

                    <InputWithLabel
                        label="Email"
                        placeholder="Type your email here"
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                    />
                    <InputWithLabel
                        label="Password"
                        placeholder="Type your password here"
                        value={values.password}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        secureTextEntry
                    />
                    <InputWithLabel
                        label="Confirm password"
                        placeholder="Re-type your password here"
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry
                    />
                    <InputWithLabel
                        label="Name"
                        placeholder="Type your dog's name here"
                        value={values.name}
                        onChangeText={handleChange('name')}
                        onBlur={handleBlur('name')}
                    />
                    <InputWithLabel
                        label="Birthday"
                        placeholder="Type your dog's date of birth here"
                        value={values.birthday}
                        onChangeText={handleChange('birthday')}
                        onBlur={handleBlur('birthday')}
                    />
                    <InputWithLabel
                        label="Breed"
                        placeholder="Type your dog's breed here"
                        value={values.breed}
                        onChangeText={handleChange('breed')}
                        onBlur={handleBlur('breed')}
                    />
                    <InputWithLabel
                        label="Favorite toy"
                        placeholder="Type your dog's favorite toy here"
                        value={values.toy}
                        onChangeText={handleChange('toy')}
                        onBlur={handleBlur('toy')}
                    />

                    <View style={{ marginTop: 20 }}>
                        <Button 
                            title="Enviar Formulário" 
                            onPress={() => handleSubmit()} 
                            color="#01970e" 
                        />
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        )}
    
    </Formik>
  );
}

export default SignUpScreen;

function confirmPasswordsMatch(confirmation:string, original:string) {
  if (confirmation !== original) {
    alert('Passwords do not match, please try again.');
  } else{
    alert('Sucesso! Senhas coincidem.');
  }
}
