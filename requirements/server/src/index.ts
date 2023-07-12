import express from "express";
import { authenticationRouter } from "@routes";
import "module-alias/register";
import swaggerUi from 'swagger-ui-express';
import morgan from "morgan";
import * as swaggerConfig from "./config/swagger.json";
import { client } from "@config";
const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

/**
 * MySQL connection
 */
client.connect((err: any) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
    return;
  }
  console.log('Connected to MySQL database');
});

/**
 * package to show logs in console
 */
app.use(morgan("tiny"));

/**
 * swagger documentation
 */
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

app.use("/authentication", authenticationRouter);

export { app };
