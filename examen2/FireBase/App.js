import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyChBloP80K4kyskXZvT_FQ5Cuo31tCwowg",
  authDomain: "auth-3bd92.firebaseapp.com",
  projectId: "auth-3bd92",
  storageBucket: "auth-3bd92.appspot.com",
  messagingSenderId: "472240436682",
  appId: "1:472240436682:web:ae901542d8111d8a5acb33",
  measurementId: "G-1VV9L94HKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// No need to get analytics if not used
// const analytics = getAnalytics(app);

const AuthScreen = ({ email, setEmail, password, setPassword, nickname, setNickname, isLogin, setIsLogin, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>{isLogin ? 'Sign In' : 'Sign Up'}</Text>
      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {!isLogin && (
        <TextInput
          style={styles.input}
          placeholder='Nickname'
          value={nickname}
          onChangeText={setNickname}
        />
      )}
      <View style={styles.buttonContainer}>
        <Button
          title={isLogin ? 'Sign In' : 'Sign Up'}
          onPress={handleAuthentication}
          color={'#3498db'}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Text style={styles.toggleText} onPress={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Create an account' : 'Login'}
        </Text>
      </View>
    </View>
  )
}

const AuthenticationScreen = ({ user, handleAuthentication }) => {
  return (
    <View style={styles.authContainer}>
      <Text style={styles.title}>Logged in as {user.displayName || user.email}</Text>
      <Text style={styles.emailText}>Logged in as {user.email}</Text>
      <Button
        title='Logout'
        onPress={handleAuthentication}
        color={'#e74c3c'} />
    </View>
  );
}

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleAuthentication = async () => {
    try {
      if (user) {
        console.log("User logged out successfully");
        await signOut(auth);
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("User signed in successfully");
        } else {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          console.log("User created successfully");
          if (nickname) {
            await updateProfile(userCredential.user, { displayName: nickname });
          }
        }
      }
    } catch (error) {
      console.error("Authentication failed", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {user ? (
        <AuthenticationScreen
          user={user}
          handleAuthentication={handleAuthentication} />
      ) : (
        <AuthScreen
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          nickname={nickname}
          setNickname={setNickname}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          handleAuthentication={handleAuthentication}
        />
      )}
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  authContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    borderRadius: 4,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  toggleText: {
    color: '#3498db',
    textAlign: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  emailText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
});
