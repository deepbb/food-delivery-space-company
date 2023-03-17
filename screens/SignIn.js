import {
    View,
    Image,
    StyleSheet,
    useWindowDimensions,
    ScrollView,
    TextInput,
    Alert,
  } from "react-native";
  import { useState } from "react";
  import { useNhostClient } from "@nhost/react";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
  
  const SignInScreen = () => {
    const nhost = useNhostClient()
    const { height } = useWindowDimensions();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation()
  
    const onSignInPressed = async() => {
      const response = await nhost.auth.signIn({
        email,
        password,
      });
      if(response.error) {
        Alert.alert("Error Sign in" , response.error.message)
      } else {
        navigation.navigate("Home")
      }
      console.log(response);
      // validate user
       navigation.navigate('Home');
    };
  
    const onForgotPasswordPressed = () => {
      console.warn("Forgot password");
    };
  
    const onSignUpPress = () => {
       navigation.navigate("SignUp");
    };
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          {/* <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          /> */}
  
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Eamil"
            style={styles.input}
          />
  
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />
  
  
          <Button
            title="Forgot password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />
    <Button
            title="signIn"
            onPress={onSignInPressed}
            type="TERTIARY"
          />
  
          <Button
            title="Don't have an account? Create one"
            onPress={onSignUpPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    root: {
      alignItems: "center",
      padding: 20,
      marginTop:100
    },
    logo: {
      width: "70%",
      maxWidth: 300,
      maxHeight: 200,
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
  });
  
  export default SignInScreen;
  