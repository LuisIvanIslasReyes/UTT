import React, {useState} from 'react';
import{View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const AyudaScreen = () =>{
    const [mostrarMensaje, setMostrarMensaje] = useState(false);
    
    const handleEnviar = () => {
        setMostrarMensaje(true);
        setTimeout(() => {
            setMostrarMensaje(false);
        },  2000);
    };

    return(
        <View>
            <Text style={styles.titles}>Cuéntanos tu problema</Text>

            <Text style={styles.body}>Correo electrónico</Text>
            {/* Aqui debe de ir un label donde el usuario coloque su  correo electrónico */}

            <Text style={styles.body}>Título del problema</Text>
            {/* Aqui debe de ir un label donde el usuario coloque el título del problema */}

            <Text style={styles.body}>Descripción del problema</Text>
            {/* Aqui debe de ir un label donde el usuario coloque la descripción del problema */}

            <TouchableOpacity onPress={handleEnviar} style={styles.button}>
                <Text style={styles.but}>Enviar</Text>
            </TouchableOpacity>
            {mostrarMensaje && (
                <Text style={styles.mensaje}>  Problema reportado </Text> 
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titles: {
        fontSize: 30,
        textAlign: "center",
        marginTop: "10%"
    },
    body:{
        fontSize: 20,
        textAlign: "center",
        marginTop: "5%"
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
    but: {
            color: 'white',
            fontWeight: 'bold',
    },
    mensaje: {
        backgroundColor: 'green',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
        alignSelf: 'center',
        fontSize: 20,
        textAlign: "center",
        marginTop: "5%",
        color: '#fff',
      },
});

export default AyudaScreen;
