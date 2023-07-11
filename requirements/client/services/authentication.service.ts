import {
	EMAIL_REGEX,
	PASSWORD_REGEX,
	USERNAME_REGEX
} from "../constants/authentication.constant";

export const verifyEmail = (email: string): void => {
	if (!email)
		throw new Error("An email is required");
	if (!EMAIL_REGEX.test(email))
		throw new Error("This email is invalid");
}

export const verifyPassword = (password: string, confirmPassword: string): void => {
	if (!password)
		throw new Error("A password is required");
	if (!confirmPassword)
		throw new Error("A password confirmation is required");
	if (password !== confirmPassword)
		throw new Error("The passwords do not match");
	if (!PASSWORD_REGEX.test(password))
		throw new Error("This password is invalid, it must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character");
}

export const verifyUsername = (username: string): void => {
	if (!username)
		throw new Error("A username is required");
	if (!USERNAME_REGEX.test(username))
		throw new Error("This username is invalid");
}

/**
 * TODO :
 * SignIn
 * Register
 * Google
 * Facebook
 */