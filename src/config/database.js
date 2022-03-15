const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1nF05y5",
    database: "cardapio"
});

db.connect(function (err) {
    if (err) {
        console.log("Erro ao conectar:", err.message);
    }
});

module.exports = db;