import React from "react";
import { View, Text } from "react-native";

const DetalleNominaScreen = ({ route }) => {
    const { nomina } = route.params;

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
