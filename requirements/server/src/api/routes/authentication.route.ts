import { Router } from "express";

export const authenticationRouter = Router();

authenticationRouter.get("/signin", (req, res) => {
  res.send({
    it: "Hello World!",
  });
});
