/** @format */

import React from 'react';
import{View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

const InformacionScreen = () =>{
    return(
        <View style= {styles.container}>
            <Text style={styles.titles}>Acerca de tu cuenta</Text>

            {/*AQUI IRA UNA TABLA PERO NO ME SALIO XD*/}

            <Text style={styles.body}>Correo</Text>
            <Text style={styles.body}>Contraseña</Text>

            <Text style={styles.titles}>Datos del empleado</Text>

            {/* AQUI IRA UNA TABLA PERO NO ME SALIO XD*/}
            <Text style={styles.body}>Nombre</Text>
            <Text style={styles.body}>Apellido paterno</Text>
            <Text style={styles.body}>Apellido materno</Text>
            <Text style={styles.body}>RFC</Text>
            <Text style={styles.body}>NSS</Text>
            <Text style={styles.body}>CURP</Text>
            <Text style={styles.body}>Télefono</Text>
            <Text style={styles.body}>Fecha de entrada</Text>
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
    }
});


export default InformacionScreen;
