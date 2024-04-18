import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import usersData from '../datos.json';
import { useUser } from './Sesion';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setUser } = useUser();

  const handleLogin = () => {
    const user = usersData.find(user => user.email === email && user.password === password && user.userType === 2);
    if (user) {
      setUser(user);
      navigation.navigate('Menú Principal', { userName: user.name }); 
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <Image
          source={require('../assets/Icns/TFT.png')}
          style={styles.img}
        />
      <Text style={styles.text}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Axis@example.com"
        value={email}
        onChangeText={setEmail}
      />
      <Text style={styles.text}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="* * * * * * * * * * * * * *"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#E5E5E5",
  },
  form: {
      marginTop: "10%",
  },
  title: {
      fontSize: 50,
      textAlign: "center",
      marginTop: "25%",
  },
  text: {
      fontSize: 20,
      textAlign: "left",
      marginLeft: "11%",
      marginTop: "10%",
  },
  subtitle: {
      fontSize: 20,
      textAlign: 'center',
      marginBottom: "15%",
      marginTop: "25%",
      marginHorizontal: "25%",
  },
  button: {
      backgroundColor: 'rgba(0, 120, 254, 0.5)', 
      borderRadius: 10, 
      paddingVertical: 12, 
      paddingHorizontal: 24, 
      marginTop: "15%", 
      alignSelf: 'center', 
  },
  buttonText: {
      fontSize: 20,
      color: '#fff', 
  },
  input: {
      width: "80%",
      marginTop: "1%",
      marginLeft: "10%",
      padding: 10,
      height: 55,
      borderColor: "rgba(0, 120, 254, 0.3)",
      borderWidth: 1.5,
      borderRadius: 16,
      backgroundColor: "rgba(0, 120, 254, 0.1)",
  },
  icon: {
      marginLeft: 1,
      color: 'rgba(0, 120, 254, 0.5)',
  },
  img: {
      width: 200, 
      height: 150, 
      alignSelf: 'center', 
      marginTop: "20%",
  },
});

