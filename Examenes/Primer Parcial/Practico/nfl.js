const readlineSync = require('readline-sync');

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





// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y TITLES--------------------------------------------------------------------
async function IDsNTitles() {
    try {
      // guardar la url en una variable
      const respuesta = await fetch('http://jsonplaceholder.typicode.com/todos');
  
      // Verificar si la solicitud fue exitosa
      if (!respuesta.ok) {
        throw new Error(`Error al obtener los datos. Código de estado: ${respuesta.status}`);
      }
  
      // // Hacer la respuesta formato JSON
      const datos = await respuesta.json();
  
      // Iterar sobre los datos y mostrar en la consola
      datos.forEach(item => {
        console.log(`Pendiente Número: ${item.id}, Descripción: ${item.title}`);
      });
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  
// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y TITLES--------------------------------------------------------------------


// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y TITLES SIN RESOLVER--------------------------------------------------------------------
async function unresolved() {
    try {
      // guardar la url en una variable
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
  
      // Verificar si la solicitud fue exitosa
      if (!respuesta.ok) {
        throw new Error(`Error al obtener los datos. Código de estado: ${respuesta.status}`);
      }
  
      // Hacer la respuesta formato JSON
      const datos = await respuesta.json();
  
      // Filtrar los datos para obtener solo los elementos con false
      const datosFiltrados = datos.filter(item => !item.completed);
  
      // Iterar sobre los datos filtrados y mostrar en la consola
      datosFiltrados.forEach(item => {
        console.log(`Pendiente sin resolver número: ${item.id}, Descripción: ${item.title}`);
      });
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y TITLES SIN RESOLVER--------------------------------------------------------------------

// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y TITLES RESUELTOS--------------------------------------------------------------------
async function resolved() {
    try {
      // guardar la url en una variable
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
  
      // Verificar si la solicitud fue exitosa 
      if (!respuesta.ok) {
        throw new Error(`Error al obtener los datos. Código de estado: ${respuesta.status}`);
      }
  
      // Hacer la respuesta formato JSON
      const datos = await respuesta.json();
  
      // Filtrarlo con una funcion filter 
      const datosFiltrados = datos.filter(item => item.completed);
  
      // Filtrar los datos para obtener solo los elementos con true
      datosFiltrados.forEach(item => {
        console.log(`Pendiente resuelto número: ${item.id}, Descripción: ${item.title}`);
      });
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y TITLES RESUELTOS--------------------------------------------------------------------

// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y Usuarios--------------------------------------------------------------------
async function usersNids() {
    try {
      // Hacer una solicitud a la URL
      const respuesta = await fetch('http://jsonplaceholder.typicode.com/todos');
  
      // Verificar si la solicitud fue exitosa (código de estado 200)
      if (!respuesta.ok) {
        throw new Error(`Error al obtener los datos. Código de estado: ${respuesta.status}`);
      }
  
      // // Hacer la respuesta formato JSON
      const datos = await respuesta.json();
  
      // Iterar sobre los datos y mostrar en la consola
      datos.forEach(item => {
        console.log(`Usuario: ${item.userId}, Con el pendiente Número: ${item.id}`);
      });
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  
// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y Usuarios--------------------------------------------------------------------

// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y Usuarios que han resolvido--------------------------------------------------------------------
async function userResolved() {
    try {
      // guardar la url en una variable
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
  
      // Verificar si la solicitud fue exitosa 
      if (!respuesta.ok) {
        throw new Error(`Error al obtener los datos. Código de estado: ${respuesta.status}`);
      }
  
      // Hacer la respuesta formato JSON
      const datos = await respuesta.json();
  
      // Filtrarlo con una funcion filter 
      const datosFiltrados = datos.filter(item => item.completed);
  
      // Filtrar los datos para obtener solo los elementos con true
      datosFiltrados.forEach(item => {
        console.log(`Usuario: ${item.userId}, Resolvió el Pendiente número: ${item.id}`);
      });
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y TITLES RESUELTOS--------------------------------------------------------------------

// ----------------------------------------------CLASE PARA OBTENER TODOS LOS IDS Y USUARIOS QUE NO HAN RESUELTO--------------------------------------------------------------------
async function userUnresolved() {
    try {
      // guardar la url en una variable
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');
  
      // Verificar si la solicitud fue exitosa 
      if (!respuesta.ok) {
        throw new Error(`Error al obtener los datos. Código de estado: ${respuesta.status}`);
      }
  
      // Hacer la respuesta formato JSON
      const datos = await respuesta.json();
  
      // Filtrar los datos para obtener solo los elementos con false 
      const datosFiltrados = datos.filter(item => !item.completed);
  
      // Iterar los datos filatrados
      datosFiltrados.forEach(item => {
        console.log(`Usuario: ${item.userId}, Aún no resuelve el pendiente número: ${item.id}`);
      });
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
// ----------------------------------------------CIERRE DE CLASE PARA OBTENER TODOS LOS IDS Y USUARIOS QUE NO HAN RESUELTO--------------------------------------------------------------------

