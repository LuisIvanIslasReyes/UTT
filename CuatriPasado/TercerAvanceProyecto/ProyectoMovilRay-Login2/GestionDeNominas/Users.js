const fs = require('fs');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "calculo_de_nominas",
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida');

    const sql = `
        SELECT
            w.code,
            w.name,
            w.lastName,
            w.lastName2,
            w.RFC,
            w.NSS,
            w.entryDate,
            u.email,
            u.password
        FROM
            worker w
        INNER JOIN
            user u ON w.user = u.code
        WHERE
            u.userType = 2`;
    
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            return;
        }

        const jsonData = JSON.stringify(results, null, 2);

        fs.writeFile('datosUser.json', jsonData, (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return;
            }
            console.log('Datos exportados correctamente a datosUser.json');
        });
        connection.end();
    });
});
