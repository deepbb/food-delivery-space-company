import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from 'react'
import * as LocalAuthentication from 'expo-local-authentication'
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import store from "./store";
import SignIn from "./screens/SignIn";
import { NhostClient, NhostProvider } from "@nhost/react";
import * as SecureStore from "expo-secure-store"
import SignUp from "./screens/SignUp";

export default function App() {
  let [isAuthenticated, setIsAuthenticated] = useState(false);

  const nhost = new NhostClient({
    backendUrl:"https://whqvcynnknldfcnkjeek.nhost.run",
    clientStorageType:"expo-secure-storage",
    clientStorage:SecureStore
  }) 

  useEffect(() => {
    async function authenticate() {
      const result = await LocalAuthentication.authenticateAsync();
      console.log(result);
      setIsAuthenticated(result.success);
      if(result.success == false) {
        console.log("error log in");
      }
    }
    authenticate();
  }, []);
  return (
    <>
      <Provider store={store}>
      <NhostProvider nhost={nhost}>
        {isAuthenticated && <StackNavigator /> }
         </NhostProvider>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});