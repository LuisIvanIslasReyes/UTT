const readlineSync = require('readline-sync');
const fetch = require('node-fetch');

async function main() {
  do {
    console.log("NFL To-Do List");
    console.log("Please choose an option to see:");
    console.log("1) List of all to-dos");
    console.log("2) List of all unresolved issues");
    console.log("3) List of all pending resolved issues");
    console.log("4) List of all users and their problem number");
    console.log("5) List of all users with Your Pending Issues Solved");
    console.log("6) List of all users with Unresolved Issues.");

    const opcion = readlineSync.question('');
    const opcionNumero = parseInt(opcion);

    switch (opcionNumero) {
      case 1:
        await IDsNTitles();
        break;
      case 2:
        await unresolved();
        break;
      case 3:
        await resolved();
        break;
      case 4:
        await usersNids();
        break;
      case 5:
        await userResolved();
        break;
      case 6:
        await userUnresolved();
        break;
      case 0:
        break;
      default:
        console.log("Ingrese una opción válida.");
    }

    if (opcionNumero !== 0) {
      console.log("¿Que desea hacer?");
      console.log("1) Volver al menú   2) Salir del programa.");
      const menu = readlineSync.question('');
      const decisionMenu = parseInt(menu);
      if (decisionMenu === 2) {
        console.log("Saliendo...");
        break;
      }
    }
  } while (true);
}

main();

// Function to get data from the specified URL
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Function to get all IDs and titles
async function IDsNTitles() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');

  if (datos) {
    datos.forEach(item => {
      console.log(`Pendiente Número: ${item.id}, Descripción: ${item.title}`);
    });
  }
}

// Function to get unresolved issues
async function unresolved() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');
  const datosFiltrados = datos.filter(item => !item.completed);

  if (datosFiltrados) {
    datosFiltrados.forEach(item => {
      console.log(`Pendiente sin resolver número: ${item.id}, Descripción: ${item.title}`);
    });
  }
}

// Function to get resolved issues
async function resolved() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');
  const datosFiltrados = datos.filter(item => item.completed);

  if (datosFiltrados) {
    datosFiltrados.forEach(item => {
      console.log(`Pendiente resuelto número: ${item.id}, Descripción: ${item.title}`);
    });
  }
}

// Function to get all users and their problem numbers
async function usersNids() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');

  if (datos) {
    datos.forEach(item => {
      console.log(`Usuario: ${item.userId}, Con el pendiente Número: ${item.id}`);
    });
  }
}

// Function to get users who have resolved issues
async function userResolved() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');
  const datosFiltrados = datos.filter(item => item.completed);

  if (datosFiltrados) {
    datosFiltrados.forEach(item => {
      console.log(`Usuario: ${item.userId}, Resolvió el Pendiente número: ${item.id}`);
    });
  }
}

// Function to get users who have unresolved issues
async function userUnresolved() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');
  const datosFiltrados = datos.filter(item => !item.completed);

  if (datosFiltrados) {
    datosFiltrados.forEach(item => {
      console.log(`Usuario: ${item.userId}, Aún no resuelve el pendiente número: ${item.id}`);
    });
  }
}
