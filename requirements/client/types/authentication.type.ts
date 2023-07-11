import React from "react";

/**
 * @param {string} emailAddress - The email address of the user
 * @param {string} username - The username of the user
 * @param {string} password - The password of the user
 * @param {string} confirmPassword - The password confirmation of the user
 * @param {string[]} hobbies - The hobbies of the user
 * @param {string[]} picture - The picture of the user
 * @param {number} currentPage - The current page on the register page
 * @param {number} width - The width of the screen
 */
export type RegisterStateType = {
	emailAddress: string,
	username: string,
	password: string,
	confirmPassword: string,
	hobbies: string[],
	picture: string[],
	currentPage: number,
	width: number,
}

/**
 * @param {RegisterStateType} state - The state of the register page
 * @param {any} dispatch - The dispatch function of the register page
 */
export type RegisterSubPagesProps = {
	state: RegisterStateType,
	localDispatch: any,
}

export type HobbyType = {
	type:
		| "Art"
		| "Sports"
		| "Music"
		| "Reading"
		| "Writing"
		| "Programming"
		| "Cooking"
		| "Photography"
		| "Gardening"
		| "Dancing"
		| "Hiking"
		| "Traveling"
		| "Chess"
		| "Knitting"
		| "Yoga"
		| "Cycling"
		| "Swimming"
		| "Running"
		| "Singing"
		| "Acting"
		| "Painting"
		| "Drawing"
		| "Pottery"
		| "Sculpting"
		| "Woodworking"
		| "Calligraphy"
		| "Sewing"
		| "Embroidery"
		| "Quilting"
		| "Scrapbooking"
		| "Origami"
		| "Fishing"
		| "Surfing"
		| "Skiing"
		| "Snowboarding"
		| "Rock Climbing"
		| "Mountaineering"
		| "Kayaking"
		| "Canoeing"
		| "Sailing"
		| "Skydiving"
		| "Bungee Jumping"
		| "Kiteboarding"
		| "Wakeboarding"
		| "Archery"
		| "Bowling"
		| "Billiards"
		| "Table Tennis"
		| "Badminton"
		| "Tennis"
		| "Golf"
		| "Basketball"
		| "Football"
		| "Baseball"
		| "Volleyball"
		| "Cricket"
		| "Rugby"
		| "Boxing"
		| "Wrestling"
		| "Martial Arts"
		| "Gymnastics"
		| "Horseback Riding"
		| "Fencing"
		| "Magic Tricks"
		| "Astrology"
		| "Video Games"
		| "Board Games"
		| "Puzzles"
		| "Collecting"
		| "Coin Collecting"
		| "Stamp Collecting"
		| "Card Collecting"
		| "Comic Books"
		| "Movies"
		| "TV Series"
		| "Camping"
		| "Hunting"
		| "Bird Watching"
		| "Star Gazing"
		| "Writing Poetry"
		| "Playing Instruments"
		| "Online Gaming"
		| "Blogging"
		| "Social Media"
		| "Volunteering"
		| "Charity Work"
		| "Community Service"
		| "Fundraising"
	color: string,
}

