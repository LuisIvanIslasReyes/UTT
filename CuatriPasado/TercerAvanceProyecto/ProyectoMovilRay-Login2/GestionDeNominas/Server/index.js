const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors"); // Importa el paquete cors

const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "calculo_de_nominas",
});

connection.connect((err) => {
  if (err) {
    console.error("Error de conexión a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos MySQL establecida");
});

app.use(bodyParser.json());
app.use(cors());



app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const query = "SELECT code, email FROM user WHERE email = ? AND password = ?";
    connection.query(query, [email, password], async (error, results) => {
      if (error) {
        console.error("Error al realizar la consulta:", error);
        return res.status(500).json({ mensaje: "Error interno del servidor" });
      }
  
      if (results.length === 0) {
        return res.json({ status: false });
      }

      const usuarioEncontrado = results[0];
      res.json(usuarioEncontrado);
    });
  } catch (error) {
    console.error("Error en la ruta /login:", error);
    return res.status(500).json({ mensaje: "Error interno del servidor" });
  }
});



app.get('/user', (req, res) => {
    connection.query('SELECT * FROM user', (error, results, fields) => {
      if (error) {
        console.error('Error al realizar la consulta:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
        return;
      }
        res.json(results);
    });
  });

app.listen(9000, () => {
  console.log("Servidor iniciado en el puerto 9000");
});