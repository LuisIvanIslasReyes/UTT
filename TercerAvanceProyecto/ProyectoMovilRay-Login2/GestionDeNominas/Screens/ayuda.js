import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AyudaScreen = () => {
    const [correo, setCorreo] = useState('');
    const [tituloProblema, setTituloProblema] = useState('');
    const [descripcionProblema, setDescripcionProblema] = useState('');
    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const handleEnviar = () => {
        // Realizar aquí la lógica de envío

        // Mostrar mensaje
        setMostrarMensaje(true);

        // Limpiar campos
        setCorreo('');
        setTituloProblema('');
        setDescripcionProblema('');

        // Ocultar mensaje después de 2 segundos
        setTimeout(() => {
            setMostrarMensaje(false);
        }, 2000);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cuéntanos tu problema</Text>

            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={correo}
                onChangeText={text => setCorreo(text)}
                keyboardType="email-address"
                placeholderTextColor="#000" 
            />

            <TextInput
                style={styles.input}
                placeholder="Título del problema"
                value={tituloProblema}
                onChangeText={text => setTituloProblema(text)}
                placeholderTextColor="#000" 
            />
            <TextInput
                style={[styles.input, { height: 150 }]}
                placeholder="Descripción del problema (máximo 164 caracteres)"
                multiline={true}
                maxLength={400}
                value={descripcionProblema}
                onChangeText={text => setDescripcionProblema(text)}
                placeholderTextColor="#000"
            />

            <TouchableOpacity onPress={handleEnviar} style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>

            {mostrarMensaje && (
                <Text style={styles.mensaje}>Problema reportado</Text>
            )}
        </View>
    );
}

export default AyudaScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: 'rgba(0, 120, 254, 0.5)',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 50,
        marginTop: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    mensaje: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        color: '#fff'
    },
});
