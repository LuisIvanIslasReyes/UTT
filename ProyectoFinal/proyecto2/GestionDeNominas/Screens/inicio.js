import React from 'react';
import{View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InicioScreen = () =>{
    const navigation = useNavigation();

    return(
        <View>
            <Text 
            style ={{
                fontSize: 30,
                textAlign: "center",
                marginTop: "20%"
            }}
            >Bienvenido</Text>
            <TouchableOpacity 
                onPress={() => navigation.navigate("Nómina Reciente")}
                style={{
                    backgroundColor: "rgba(0, 120, 254, 0.5)",
                    padding: 10,
                    borderRadius: 10,
                    width: "50%",
                    alignSelf: "center",
                    marginTop: "20%"
                }}
            >
                <Text style={{
                    color: "white",
                    textAlign: "center"
                }}>Nómina reciente</Text>
        
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Estadísticas")}
                style={{
                    backgroundColor: "rgba(0, 120, 254, 0.5)",
                    padding: 10,
                    borderRadius: 10,
                    width: "50%",
                    alignSelf: "center",
                    marginTop: "5%"
                }}
            >
                <Text style={{
                    color: "white",
                    textAlign: "center"
                }}>Estadísticas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate("Historial de Nóminas")}
                style={{
                    backgroundColor: "rgba(0, 120, 254, 0.5)",
                    padding: 10,
                    borderRadius: 10,
                    width: "50%",
                    alignSelf: "center",
                    marginTop: "5%"
                }}
            >
                <Text style={{
                    color: "white",
                    textAlign: "center"
                }}>Historial de Nóminas</Text>

            </TouchableOpacity>
            
        </View>
    );
}

export default InicioScreen;