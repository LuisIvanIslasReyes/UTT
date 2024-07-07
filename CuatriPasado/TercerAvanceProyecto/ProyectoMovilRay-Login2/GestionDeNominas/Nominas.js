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
    e.name AS 'Nombre de la empresa',
    e.RFC AS 'RFC de la empresa',
    w.name,
    w.lastName,
    w.lastName2,
    w.RFC,
    w.NSS,
    w.CURP,
    w.number,
    w.entryDate,
    (s.days / 2) AS 'Días trabajados',
    p.income,
    s.total AS 'sueldo diario',
    (s.total / 6) AS 'septimo dia',
    CASE WHEN s.sunday = 1 THEN (p.income / 2) END AS 'Prima dominical',
    sb.benefits,
    sb.salary,
    sb.total,
    b.name AS 'Nombre del beneficio'
FROM 
    salary AS s
INNER JOIN 
    worker AS w ON s.worker = w.code
INNER JOIN 
    enterprise AS e ON w.enterprise = e.code
INNER JOIN 
    profile AS p ON w.profile = p.code
LEFT JOIN 
    salary_benefits AS sb ON s.code = sb.salary
LEFT JOIN 
    benefits AS b ON b.code = sb.benefits
WHERE 
    s.finished = 1
    AND sb.salary IN (SELECT code FROM salary WHERE finished = 1); `; 
    
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error al ejecutar la consulta:', err);
            return;
        }

        const jsonData = JSON.stringify(results, null, 2);

        fs.writeFile('datosNomReciente.json', jsonData, (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
                return;
            }
            console.log('Datos exportados correctamente a datosNomReciente.json');
        });
        connection.end();
    });
});
