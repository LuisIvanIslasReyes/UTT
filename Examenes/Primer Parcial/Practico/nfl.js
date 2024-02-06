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

//FUNCION PARA OBTENER LOS DATOS Y LLAMARLA PARA METER LA URL COMO PARAMETRO.
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


// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y TITLES--------------------------------------------------------------------
async function IDsNTitles() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');

  if (datos) {
    datos.forEach(item => {
      console.log(`Pendiente Número: ${item.id}, Descripción: ${item.title}`);
    });
  }
}
// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y TITLES--------------------------------------------------------------------



// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y TITLES SIN RESOLVER--------------------------------------------------------------------
async function unresolved() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');
  const datosFiltrados = datos.filter(item => !item.completed);

  if (datosFiltrados) {
    datosFiltrados.forEach(item => {
      console.log(`Pendiente sin resolver número: ${item.id}, Descripción: ${item.title}`);
    });
  }
}
// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y TITLES SIN RESOLVER--------------------------------------------------------------------


// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y TITLES RESUELTOS--------------------------------------------------------------------
async function resolved() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');
  const datosFiltrados = datos.filter(item => item.completed);

  if (datosFiltrados) {
    datosFiltrados.forEach(item => {
      console.log(`Pendiente resuelto número: ${item.id}, Descripción: ${item.title}`);
    });
  }
}
// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y TITLES RESUELTOS--------------------------------------------------------------------



// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y Usuarios--------------------------------------------------------------------
async function usersNids() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');

  if (datos) {
    datos.forEach(item => {
      console.log(`Usuario: ${item.userId}, Con el pendiente Número: ${item.id}`);
    });
  }
}
// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y Usuarios--------------------------------------------------------------------

// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y Usuarios que han resolvido--------------------------------------------------------------------
async function userResolved() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');
  const datosFiltrados = datos.filter(item => item.completed);

  if (datosFiltrados) {
    datosFiltrados.forEach(item => {
      console.log(`Usuario: ${item.userId}, Resolvió el Pendiente número: ${item.id}`);
    });
  }
}

// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y TITLES RESUELTOS--------------------------------------------------------------------

// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y USUARIOS QUE NO HAN RESUELTO--------------------------------------------------------------------
async function userUnresolved() {
  const datos = await fetchData('https://jsonplaceholder.typicode.com/todos');
  const datosFiltrados = datos.filter(item => !item.completed);

  if (datosFiltrados) {
    datosFiltrados.forEach(item => {
      console.log(`Usuario: ${item.userId}, Aún no resuelve el pendiente número: ${item.id}`);
    });
  }
}

// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y TITLES RESUELTOS--------------------------------------------------------------------
