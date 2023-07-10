import {HobbyType} from "../types/authentication.type";
import {ColorsContant} from "./colors.contant";

export const EMAIL_REGEX = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$');
export const PASSWORD_REGEX = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})');
export const USERNAME_REGEX = new RegExp('^[a-zA-Z0-9._-]{3,}$');

export const HOBBIES : HobbyType[][] = [
[
	{type: "Art", color: ColorsContant.BEIGE}
	, {type : "Gardening", color: ColorsContant.BLUE}
	, {type : "Hiking", color: ColorsContant.BEIGE}
	, {type : "Cycling", color: ColorsContant.BEIGE}
	, {type : "Cooking", color: ColorsContant.LIGHT_GREEN}
	, {type : "Traveling", color: ColorsContant.LIGHT_GREEN}
	, {type : "Chess", color: ColorsContant.GREEN}
	, {type : "Reading", color: ColorsContant.BLUE}
	, {type : "Knitting", color: ColorsContant.BLUE}
	, {type : "Music", color: ColorsContant.GREEN}
	, {type : "Programming", color: ColorsContant.BEIGE}
	, {type : "Sports", color: ColorsContant.LIGHT_GREEN}
	, {type : "Writing", color: ColorsContant.RED}
	, {type : "Yoga", color: ColorsContant.RED}
	, {type : "Photography", color: ColorsContant.GREEN}
	, {type : "Dancing", color: ColorsContant.RED}
],[
	{type : "Swimming", color: ColorsContant.RED}
	, {type : "Running", color: ColorsContant.LIGHT_GREEN}
	, {type : "Singing", color: ColorsContant.BLUE}
	, {type : "Acting", color: ColorsContant.RED}
	, {type : "Painting", color: ColorsContant.LIGHT_GREEN}
	, {type : "Drawing", color: ColorsContant.GREEN}
	, {type : "Pottery", color: ColorsContant.LIGHT_GREEN}
	, {type : "Sculpting", color: ColorsContant.GREEN}
	, {type : "Woodworking", color: ColorsContant.RED}
	, {type : "Calligraphy", color: ColorsContant.BEIGE}
	, {type : "Sewing", color: ColorsContant.LIGHT_GREEN}
	, {type : "Embroidery", color: ColorsContant.BLUE}
	, {type : "Quilting", color: ColorsContant.GREEN}
	, {type : "Scrapbooking", color: ColorsContant.RED}
	, {type : "Origami", color: ColorsContant.LIGHT_GREEN}
	, {type : "Fishing", color: ColorsContant.BLUE}
	, {type: "Surfing", color: ColorsContant.BEIGE}
	, {type: "Skiing", color: ColorsContant.GREEN}
	, {type: "Snowboarding", color: ColorsContant.BLUE}
],[
	{type: "Rock Climbing", color: ColorsContant.RED}
	, {type: "Mountaineering", color: ColorsContant.LIGHT_GREEN}
	, {type: "Kayaking", color: ColorsContant.BLUE}
	, {type: "Canoeing", color: ColorsContant.GREEN}
	, {type: "Sailing", color: ColorsContant.RED}
	, {type: "Skydiving", color: ColorsContant.LIGHT_GREEN}
	, {type: "Bungee Jumping", color: ColorsContant.BLUE}
	, {type: "Kiteboarding", color: ColorsContant.GREEN}
	, {type: "Wakeboarding", color: ColorsContant.RED}
	, {type: "Archery", color: ColorsContant.LIGHT_GREEN}
	, {type: "Bowling", color: ColorsContant.BLUE}
	, {type: "Billiards", color: ColorsContant.GREEN}
	, {type: "Table Tennis", color: ColorsContant.RED}
	, {type: "Badminton", color: ColorsContant.LIGHT_GREEN}
	, {type: "Tennis", color: ColorsContant.BLUE}
	, {type: "Golf", color: ColorsContant.GREEN}
	, {type: "Basketball", color: ColorsContant.RED}
	, {type: "Football", color: ColorsContant.LIGHT_GREEN}
	, {type: "Baseball", color: ColorsContant.BLUE}
],[
	{ type: "Martial Arts", color: ColorsContant.GREEN}
	, { type: "Gymnastics", color: ColorsContant.RED}
	, { type: "Horseback Riding", color: ColorsContant.LIGHT_GREEN}
	, { type: "Fencing", color: ColorsContant.BLUE}
	, { type: "Magic Tricks", color: ColorsContant.GREEN}
	, { type: "Astrology", color: ColorsContant.RED}
	, { type: "Video Games", color: ColorsContant.LIGHT_GREEN}
	, { type: "Board Games", color: ColorsContant.BLUE}
	, { type: "Puzzles", color: ColorsContant.GREEN}
	, { type: "Collecting", color: ColorsContant.RED}
	, { type: "Coin Collecting", color: ColorsContant.LIGHT_GREEN}
	, { type: "Stamp Collecting", color: ColorsContant.BLUE}
	, { type: "Card Collecting", color: ColorsContant.GREEN}
	, { type: "Comic Books", color: ColorsContant.RED}
	, { type: "Movies", color: ColorsContant.LIGHT_GREEN}
	, { type: "TV Series", color: ColorsContant.BLUE}
	, { type: "Camping", color: ColorsContant.GREEN}
],[
	{ type: "Hunting", color: ColorsContant.LIGHT_GREEN}
	, { type: "Bird Watching", color: ColorsContant.BLUE}
	, { type: "Star Gazing", color: ColorsContant.GREEN}
	, { type: "Writing Poetry", color: ColorsContant.RED}
	, { type: "Playing Instruments", color: ColorsContant.LIGHT_GREEN}
	, { type: "Online Gaming", color: ColorsContant.BLUE}
	, { type: "Blogging", color: ColorsContant.GREEN}
	, { type: "Social Media", color: ColorsContant.RED}
	, { type: "Volunteering", color: ColorsContant.LIGHT_GREEN}
	, { type: "Community Service", color: ColorsContant.BLUE}
	, { type: "Charity Work", color: ColorsContant.GREEN}
	, { type: "Fundraising", color: ColorsContant.RED}
]];