import * as mysql from "mysql";

export const client = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Motdepasse42DB",
	database: "matcha_db",
	port: 3306
});