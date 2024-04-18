import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './Screens/Sesion'; 
import NavigationLogin from "./NavigationLogin";

export default function App() {
  return (
    <NavigationContainer>
      <UserProvider> 
        <NavigationLogin /> 
      </UserProvider>
    </NavigationContainer>
  );
}
