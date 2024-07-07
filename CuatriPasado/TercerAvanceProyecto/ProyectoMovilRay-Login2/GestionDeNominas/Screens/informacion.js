import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useUser } from './Sesion';

const InformacionScreen = () => {
  const { user } = useUser(); // Obtén el usuario del contexto
  const { name, lastName, lastName2, RFC, NSS, number, entryDate, password } = user;

  // Estado para controlar si se muestra la contraseña o no
  const [mostrarContraseña, setMostrarContrasena] = useState(false);

  return (
    <View contentContainerStyle={styles.container}>
      <Text style={styles.titles}>Acerca de tu cuenta</Text>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.label}>Correo:</Text>
          <Text style={styles.value}>{user.email}</Text> 
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Contraseña:</Text>
          <View style={styles.inputGroup}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              value={password}
              secureTextEntry={!mostrarContraseña} 
              editable={false}
            />
            <TouchableOpacity onPress={() => setMostrarContrasena(!mostrarContraseña)}>
              <Ionicons 
                  name={mostrarContraseña ? 'eye' : 'eye-off'} 
                  size={24} 
                  color="grey" 
                />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.titles}>Datos del empleado</Text>

      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            value={name}
            editable={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Apellido paterno:</Text>
          <TextInput
            style={styles.input}
            value={lastName}
            editable={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Apellido materno:</Text>
          <TextInput
            style={styles.input}
            value={lastName2}
            editable={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>RFC:</Text>
          <TextInput
            style={styles.input}
            value={RFC}
            editable={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>NSS:</Text>
          <TextInput
            style={styles.input}
            value={NSS}
            editable={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Télefono:</Text>
          <TextInput
            style={styles.input}
            value={number}
            editable={false}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Fecha de Entrada:</Text>
          <TextInput
            style={styles.input}
            value={entryDate}
            editable={false}
          />
        </View>
      </View>
    </View>
  );
}

export default InformacionScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    paddingVertical: 20,
  },
  titles: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#333',
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 20,
    width: '90%',
    backgroundColor: '#fff', 
    marginLeft: 20,
  },
  row: {
    alignSelf: 'flex-start',
    marginBottom: 1.5,
  },
  label: {
    fontSize: 18,
    color: '#666',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 2
  },
  input: {
    fontSize: 18,
    borderRadius: 5,
    paddingHorizontal: 1,
    color: '#333',
    marginTop: 2,
    marginBottom: 10
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 1,
    width: '100%', 
    marginLeft: 2,
  },
});
