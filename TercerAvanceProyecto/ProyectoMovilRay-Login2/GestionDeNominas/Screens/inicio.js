import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useUser } from './Sesion';

const InicioScreen = () => {
    const navigation = useNavigation();
    const { user, setUser } = useUser();
    const route = useRoute();
    const userName = route.params.userName;

    const handleLogout = () => {
        // Lógica para cerrar sesión
        setUser(null); // Reinicia el usuario a null
        navigation.navigate('Iniciar Sesión'); // Navega de vuelta a la pantalla de inicio de sesión
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
                <Text style={styles.logoutButtonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
            <Image
                source={require('../assets/img/TFT.png')}
                style={styles.imageDos}
            />
            <Text style={styles.title}>Bienvenido {user && user.email}</Text>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Nómina Reciente")}
                    style={styles.button}
                >
                    <Image
                        source={require('../assets/img/historial.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <Text style={styles.buttonText}>Nómina reciente</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate("Historial de Nóminas")}
                    style={[styles.button, { marginTop: 20 }]}
                >
                    <Image
                        source={require('../assets/img/nominareciente.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
                <Text style={styles.buttonText}>Historial de Nóminas</Text>
            </View>
        </View>
    );
}

export default InicioScreen;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5E5E5',
        paddingHorizontal: 20
    },
    imageDos: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 20
    },
    buttonsContainer: {
        width: '100%',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'rgba(0, 120, 254, 0.5)',
        borderRadius: 10,
        width: 100,
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    image: {
        width: 60,
        height: 60,
        resizeMode: 'contain',
    },
    logoutButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 120, 254, 0.5)',
    },
    logoutButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
