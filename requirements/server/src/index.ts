import express from "express";
import { authenticationRouter } from "@routes";
import "module-alias/register";

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.use("/api/authentication", authenticationRouter);

export { app };
