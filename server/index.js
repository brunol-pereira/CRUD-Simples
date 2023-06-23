const express = require("express");
const app = express();
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "0305",
    database: "crud",
});

app.get('/', (req, res) => {
    let SQL = "INSERT INTO games( name, cost, category) VALUES ('GTA  V', '220', 'Ação')";

    db.query(SQL, (err, result) => {
        console.log(err);
    })
});

app.listen(3001, () => {
    console.log("rodando servidor");
});