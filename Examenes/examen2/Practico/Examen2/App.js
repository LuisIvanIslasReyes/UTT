import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

// Pantalla para mostrar la lista de todos
const TodoScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        const todosData = data.map(todo => ({ id: todo.id, title: todo.title }));
        setTodos(todosData);
      })
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>List of all to-dos</Text>
        {todos.map(todo => (
          <View key={todo.id} style={styles.todo}>
            <Text style={styles.todoId}>ID: {todo.id}</Text>
            <Text style={styles.todoTitle}>Title: {todo.title}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
// Pantalla para mostrar la lista de empleados y sus problemas asociados
const EmployeesScreen = () => {
    const [employeeProblems, setEmployeeProblems] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          // Creamos un objeto para almacenar los problemas de cada usuario
          const employeeProblemsMap = {};
          data.forEach(todo => {
            if (!employeeProblemsMap[todo.userId]) {
              employeeProblemsMap[todo.userId] = { userId: todo.userId, problemCount: 0 };
            }
            employeeProblemsMap[todo.userId].problemCount++;
          });
          // Convertimos el objeto en un array para facilitar su renderizado
          const employeeProblemsArray = Object.values(employeeProblemsMap);
          setEmployeeProblems(employeeProblemsArray);
        })
        .catch(error => console.error('Error fetching employee problems:', error));
    }, []);
  
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>List of all employees and their problem number</Text>
          {employeeProblems.map(employee => (
            <View key={employee.userId} style={styles.employee}>
              <Text style={styles.employeeId}>User ID: {employee.userId}</Text>
              <Text style={styles.employeeProblemCount}>Problem Count: {employee.problemCount}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };


// Pantalla para mostrar la lista de problemas pendientes de resolución
const ResolvedScreen = () => {
    const [resolvedIssues, setResolvedIssues] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          const resolvedIssuesData = data.filter(issue => issue.completed);
          const issuesData = resolvedIssuesData.map(issue => ({ id: issue.id, title: issue.title }));
          setResolvedIssues(issuesData);
        })
        .catch(error => console.error('Error fetching resolved issues:', error));
    }, []);
  
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>List of all resolved issues</Text>
          {resolvedIssues.map(issue => (
            <View key={issue.id} style={styles.todo}>
              <Text style={styles.todoId}>ID: {issue.id}</Text>
              <Text style={styles.todoTitle}>Title: {issue.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

// Pantalla para mostrar la lista de problemas no resueltos
const UnresolvedScreen = () => {
    const [issues, setIssues] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos') // Cambiado a una nueva URL de ejemplo que incluye el campo completed
        .then(response => response.json())
        .then(data => {
          // Filtrar los datos para obtener solo los elementos con completed en false
          const unresolvedIssues = data.filter(issue => !issue.completed);
          // Mapear los datos filtrados para obtener solo id y title
          const issuesData = unresolvedIssues.map(issue => ({ id: issue.id, title: issue.title }));
          setIssues(issuesData);
        })
        .catch(error => console.error('Error fetching unresolved issues:', error));
    }, []);
  
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>List of all unresolved issues</Text>
          {issues.map(issue => (
            <View key={issue.id} style={styles.todo}>
              <Text style={styles.todoId}>ID: {issue.id}</Text>
              <Text style={styles.todoTitle}>Title: {issue.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };


  // Pantalla para mostrar la lista de usuarios con problemas resueltos
const PendingIssuesSolvedScreen = () => {
    const [pendingIssuesSolved, setPendingIssuesSolved] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          // Filtramos los elementos con 'completed' en true
          const solvedIssues = data.filter(issue => issue.completed);
          // Mapeamos los datos filtrados para obtener el ID de usuario y el ID del problema
          const pendingIssuesSolvedData = solvedIssues.map(issue => ({ id: issue.id, userId: issue.userId }));
          setPendingIssuesSolved(pendingIssuesSolvedData);
        })
        .catch(error => console.error('Error fetching pending issues solved:', error));
    }, []);
  
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>List of all users with your pending issues solved</Text>
          {pendingIssuesSolved.map(issue => (
            <View key={issue.id} style={styles.pendingIssue}>
              <Text style={styles.pendingIssueUserId}>User ID: {issue.userId}</Text>
              <Text style={styles.pendingIssueId}>Issue ID: {issue.id}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };

// Pantalla para mostrar la lista de usuarios con problemas pendientes sin resolver
const EmployeesWithUnresolvedIssuesScreen = () => {
    const [employeesWithUnresolvedIssues, setEmployeesWithUnresolvedIssues] = useState([]);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
          // Filtramos los elementos con 'completed' en false
          const unresolvedIssues = data.filter(issue => !issue.completed);
          // Mapeamos los datos filtrados para obtener el ID de usuario y el ID del problema
          const employeesData = unresolvedIssues.map(issue => ({ id: issue.id, userId: issue.userId }));
          setEmployeesWithUnresolvedIssues(employeesData);
        })
        .catch(error => console.error('Error fetching employees with unresolved issues:', error));
    }, []);
  
    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>List of all employees with unresolved issues</Text>
          {employeesWithUnresolvedIssues.map(issue => (
            <View key={issue.id} style={styles.pendingIssue}>
              <Text style={styles.pendingIssueUserId}>User ID: {issue.userId}</Text>
              <Text style={styles.pendingIssueId}>Issue ID: {issue.id}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  };
  


// Componente para el menú
const Menu = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="List of all to-dos" onPress={() => navigation.navigate('Todo')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="List of all unresolved issues" onPress={() => navigation.navigate('Unresolved')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="List of all resolved issues" onPress={() => navigation.navigate('Resolved')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="List of all employees and their problem number" onPress={() => navigation.navigate('Employees')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="List of all users with Your Pending Issues Solved" onPress={() => navigation.navigate('PendingIssuesSolved')} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="List of all employees with Unresolved Issues" onPress={() => navigation.navigate('EmployeesWithUnresolvedIssues')} />
        </View>
      </View>
    );
  };
  

// Componente principal con el navegador
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Todo" component={TodoScreen} />
        <Stack.Screen name="Unresolved" component={UnresolvedScreen} />
        <Stack.Screen name="Resolved" component={ResolvedScreen} />
        <Stack.Screen name="Employees" component={EmployeesScreen} />
        <Stack.Screen name="PendingIssuesSolved" component={PendingIssuesSolvedScreen} />
        <Stack.Screen name="EmployeesWithUnresolvedIssues" component={EmployeesWithUnresolvedIssuesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  todo: {
    marginBottom: 10,
  },
  todoId: {
    fontWeight: 'bold',
  },
  todoTitle: {
    marginLeft: 10,
  },
});

export default App;
