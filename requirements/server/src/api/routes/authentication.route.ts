import {
	Request,
	Response,
	Router
} from "express";
import {AuthenticationController} from "@controllers";

export const authenticationRouter = Router();

authenticationRouter.get("/signin", async (req : Request, res : Response) => {
	/**
	 * Must validate the request body against the SignInRequest type
	 */
	await AuthenticationController.signIn({
		email: "mathias",
		password: "1234"
	});
	res.send("Sign in");
});
