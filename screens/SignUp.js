import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NhostClient,NhostProvider, useAuthenticationStatus, useNhostClient } from '@nhost/react'
import { Button } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const navigation = useNavigation();

 const nhost = useNhostClient()
  const onRegisterPressed = async() => {
    const response = await nhost.auth.signUp({
      email,
      password,
      options:{
        displayName:name
      }
    });
    if(response.error) {
      Alert.alert("Error Signup", response.error.message)
    } else {
      navigation.navigate("Home") 
    }
    console.log(response);
};

const onTermsOfUsePressed =()=> {
  //
}

const onPrivacyPressed =()=> {
  //
}

const onSignInPress =()=> {
  navigation.navigate("SignIn") 
}
const GoogleLogin =async ()=> {
    const res = await nhost.auth.signIn({
    provider: 'google'
  })
  console.log(res);
}
  console.log(nhost);
  
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Full name"
        style={styles.input}
      />

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <Button title="Register" onPress={onRegisterPressed} />

      <Text style={styles.text}>
        By registering, you confirm that you accept our{" "}
        <Text style={styles.link} onPress={onTermsOfUsePressed}>
          Terms of Use
        </Text>{" "}
        and{" "}
        <Text style={styles.link} onPress={onPrivacyPressed}>
          Privacy Policy
        </Text>
      </Text>

      <Button
        title="Have an account? Sign in"
        onPress={onSignInPress}
      />
       <Button
        title="Googe signin"
        onPress={GoogleLogin}
      />
    </View>
  </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:100,
    padding:20
  
  },
  input: {
    backgroundColor: "white",
    width: "100%",

    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
    height: 50,
  },
  link: {
    color:"red"
  },
})