import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import LoginScreen from './Screens/login';
import Navigation from './Navigation';

const Stack = createNativeStackNavigator();

function StackNavi() {
    return(
        <Stack.Navigator
        >
            <Stack.Screen
                name="Iniciar Sesión"
                component={LoginScreen}
                options={{ headerShown: false }}// ocultamos el fakin encabezado
            />
            <Stack.Screen 
                name='Menú Principal'component={Navigation}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

            );
        }
export default function NavigationLogin(){
    return(
        <StackNavi/>
    );
}
