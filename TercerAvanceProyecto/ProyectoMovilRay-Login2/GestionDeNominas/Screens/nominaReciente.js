import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { useUser } from './Sesion';
import datosNomReciente from '../datosNomReciente.json';
import * as FileSystem from 'expo-file-system';

export default function NominaRecienteScreen() {
    const { user } = useUser();
    const [nomina, setNomina] = useState(null);

    useEffect(() => {
        const nominaUsuario = datosNomReciente.find(nomina => nomina.RFC === user.RFC);
        setNomina(nominaUsuario);
    }, [user]);

    const generarPdf = async () => {
        if (nomina) {
            try {
                const html = `
                <html>
                    <head>
                        <style>
                            /* Estilos CSS */
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <h1>Nómina</h1>
                            <p><strong>Empresa:</strong> ${nomina['Nombre de la empresa']}</p>
                            <p><strong>RFC de la empresa:</strong> ${nomina['RFC de la empresa']}</p>
                            <p><strong>Nombre:</strong> ${nomina.name} ${nomina.lastName} ${nomina.lastName2}</p>
                            <p><strong>RFC:</strong> ${nomina.RFC}</p>
                            <p><strong>NSS:</strong> ${nomina.NSS}</p>
                            <p><strong>CURP:</strong> ${nomina.CURP}</p>
                            <p><strong>Teléfono:</strong> ${nomina.number}</p>
                            <p><strong>Fecha de ingreso:</strong> ${formatFecha(nomina.entryDate)}</p>
                            <p><strong>Días trabajados:</strong> ${nomina['Días trabajados']}</p>
                            <p><strong>Ingreso total:</strong> ${nomina.income}</p>
                            <p><strong>Sueldo diario:</strong> ${nomina['sueldo diario']}</p>
                            <p><strong>Séptimo día:</strong> ${nomina['septimo dia']}</p>
                            <p><strong>Prima dominical:</strong> ${formatPrimaDominical(nomina['Prima dominical'])}</p>
                            <p><strong>Beneficio(s):</strong> ${nomina.benefits}</p>
                            <p><strong>Salario ordinal:</strong> ${nomina.salary}</p>
                            <p><strong>Nombre del beneficio:</strong> ${nomina['Nombre del beneficio']}</p>
                            <p><strong>Total:</strong> ${nomina.total}</p>
                        </div>
                    </body>
                </html>
            `;

                const file = await printToFileAsync({
                    html: html,
                    base64: true,
                    fileName: 'Nómina.pdf',
                });

                if (file) {
                    await FileSystem.copyAsync({
                        from: file.uri,
                        to: FileSystem.documentDirectory + 'Nómina.pdf'
                    });
                    await shareAsync(file.uri);
                } else {
                    console.error('No se pudo generar el archivo PDF.');
                }
            } catch (error) {
                console.error('Error al generar el archivo PDF:', error);
            }
        }
    };

    const formatFecha = (fecha) => {
        // Obtenemos solo la parte de la fecha y eliminamos la parte del tiempo
        const fechaSinTiempo = fecha.split('T')[0];
        return fechaSinTiempo;
    };

    const formatPrimaDominical = (primaDominical) => {
        // Si la prima dominical es null, retornamos 0, de lo contrario, retornamos el valor de primaDominical
        return primaDominical !== null ? primaDominical : 0;
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Nómina Reciente</Text>
                <View style={styles.nominaContainer}>
                    {nomina && (    
                        <>
                            <Text style={styles.label}>Empresa:</Text>
                            <Text>{nomina['Nombre de la empresa']}</Text>
                            <Text style={styles.label}>RFC de la empresa:</Text>
                            <Text>{nomina['RFC de la empresa']}</Text>
                            <Text style={styles.label}>Nombre:</Text>
                            <Text>{`${nomina.name} ${nomina.lastName} ${nomina.lastName2}`}</Text>
                            <Text style={styles.label}>RFC:</Text>
                            <Text>{nomina.RFC}</Text>
                            <Text style={styles.label}>NSS:</Text>
                            <Text>{nomina.NSS}</Text>
                            <Text style={styles.label}>CURP:</Text>
                            <Text>{nomina.CURP}</Text>
                            <Text style={styles.label}>Teléfono:</Text>
                            <Text>{nomina.number}</Text>
                            <Text style={styles.label}>Fecha de ingreso:</Text>
                            <Text>{formatFecha(nomina.entryDate)}</Text>
                            <Text style={styles.label}>Días trabajados:</Text>
                            <Text>{nomina['Días trabajados']}</Text>
                            <Text style={styles.label}>Ingreso total:</Text>
                            <Text>{nomina.income}</Text>
                            <Text style={styles.label}>Sueldo diario:</Text>
                            <Text>{nomina['sueldo diario']}</Text>
                            <Text style={styles.label}>Séptimo día:</Text>
                            <Text>{nomina['septimo dia']}</Text>
                            <Text style={styles.label}>Prima dominical:</Text>
                            <Text>{formatPrimaDominical(nomina['Prima dominical'])}</Text>
                            <Text style={styles.label}>Beneficio(s):</Text>
                            <Text>{nomina.benefits}</Text>
                            <Text style={styles.label}>Salario ordinal:</Text>
                            <Text>{nomina.salary}</Text>
                            <Text style={styles.label}>Nombre del beneficio:</Text>
                            <Text>{nomina['Nombre del beneficio']}</Text>
                            <Text style={styles.label}>Total:</Text>
                            <Text>{nomina.total}</Text>
                        </>
                    )}
                </View>
                <View style={[styles.buttonContainer, { bottom: 10 }]}>
                    <Button
                        title='Imprimir'
                        onPress={generarPdf}
                        style={styles.imprimir}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    nominaContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 15,
        width: '100%',
        backgroundColor: '#fff',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 2,
        marginTop: 10
    },
    buttonContainer: {
        position: 'absolute', 
        right: 30,
        top: 35 
    },
    imprimir: {
        width: 150, 
    },
});
