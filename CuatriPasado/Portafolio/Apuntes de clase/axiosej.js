import axios from 'axios';
//forma de exportar la libreria de axios xd.

const url = "https://jsonplaceholder.typicode.com/users"

// axios.get(url).then(({data}) =>{
//     data.forEach(element => {    
//         console.log(element.username)
//     });
// }) TODO ESTO ES EL PRIMER EJEMPLO TENEMOS QUE INSTALAR LA LIBRERIA DE AXIOS
// LA CUAL AUN NO PUEDO DESCARGAR NO SE PQ XD


axios.post(url, {
    username: "Foo",
    mail: "foo@foo.com"
}).then((response) => {
    if (response.status === 201) {
        console.log("El registro fue guardado de forma correcta!!");
    }
}).catch(error => {
    console.error("Error al realizar la solicitud:", error);
});