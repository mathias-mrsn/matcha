import {client} from '@config'

export class AuthenticationModel {

	static async getUsers(): Promise<any> {
		return new Promise((resolve, reject) => {
			const sql : string = "SELECT * FROM users";
			client.query(sql, (err, res) => {
				if (err) reject(err)
				else resolve(res)
			})
		})
	}
}