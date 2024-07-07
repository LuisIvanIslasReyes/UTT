import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import InicioScreen from './Screens/inicio';
import InformacionScreen from './Screens/informacion';
import AyudaScreen from './Screens/ayuda';
import NominaRecienteScreen from './Screens/nominaReciente';
import HistorialNominasScreen from './Screens/historialNominas';
 
const Stack = createNativeStackNavigator();

const HomeStack = () =>{
    return(
        <Stack.Navigator
        >

            <Stack.Screen 
                name="Home" 
                component={InicioScreen}
                options={{
                    headerShown: false,
                }}
                initialParams={{ userId: null }}
            />

            <Stack.Screen
                name = "Nómina Reciente"
                component={NominaRecienteScreen}
                options={{
                    headerShown: true,
                    title: "Inicio",

                    headerStyle: {
                        backgroundColor: 'rgba(0, 120, 254, 0.5)',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />
            <Stack.Screen
                name = "Historial de Nóminas"
                component={HistorialNominasScreen}
                options={{
                    headerShown: true,
                    title: "Inicio",
                    headerStyle: {
                        backgroundColor: 'rgba(0, 120, 254, 0.5)',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }}
            />

        </Stack.Navigator>
    );
}
const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
        <Tab.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                activeTintColor: 'blue', // Color de la pestaña activa
                tabBarActiveTintColor: 'black', // Hace que el ícono de la pestaña activa sea transparente
                inactiveTintColor: 'blue', // Color de la pestaña inactiva
            }}
        >
            <Tab.Screen 
                name="Inicio" 
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" size={24} color="rgba(0, 120, 254, 0.5)  " />                    
                    ),

                }}
            />
            <Tab.Screen 
                name="Información" 
                component={InformacionScreen}
                options={{
                    tabBarLabel: 'Información',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="account" size={24} color="rgba(0, 120, 254, 0.5)" />                    
                    ),
                    headerStyle: {
                        backgroundColor: 'rgba(0, 120, 254, 0.5)',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: 'white'
                    },
                }}
            />

            <Tab.Screen 
            name ="Ayuda" 
            component={AyudaScreen}
            options={{
                tabBarLabel:'Ayuda',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="help" size={20} color="rgba(0, 120, 254, 0.5)  " />                    
                ),
                headerStyle: {
                    backgroundColor: 'rgba(0, 120, 254, 0.5)',
                },
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'white'
                },
            }}
            />
        </Tab.Navigator>
    );
}
export default function Navigation(){
    return(
            <MyTabs/>

    );
}