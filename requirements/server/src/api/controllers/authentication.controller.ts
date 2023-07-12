import {SignInRequestType} from "@types";
import { AuthenticationModel } from "@models";

export class AuthenticationController {

	constructor(
		private authenticationModel: AuthenticationModel
	) {
		this.authenticationModel = authenticationModel;
	}

	static async signIn(dto: SignInRequestType) {
		// const sql : any = await AuthenticationModel.getUsers();
		console.log("result from controller: ", await AuthenticationModel.getUsers());

	}
}