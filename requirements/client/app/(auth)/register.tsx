import {
	View,
	Text,
	ScrollView,
	useWindowDimensions, SafeAreaView, LogBox,
} from "react-native";
import RegularText from "../../components/RegularText/RegularText";
import AuthenticationButton from "../../components/AuthenticationButton/AuthenticationButton";
import AuthenticationInputField from "../../components/AuthenticationInputField/AuthenticationInputField";
import React, {useEffect, useReducer, useState} from "react";
import {showNotification} from "../../actions/notification";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {Link} from "expo-router";
import RegisterProgressIndicator from "../../components/RegisterProgressIndicator/RegisterProgressIndicator";
import {SCREEN_MAX_WIDTH} from "../../constants/screen.constant";
import { useRouter } from "expo-router";
import {verifyEmail, verifyPassword, verifyUsername} from "../../services/authentication.service";
import {useDispatch} from "react-redux";
import CarouselHobbies from "../../components/CarouselHobbies/CarouselHobbies";
import {RegisterStateType} from "../../types/authentication.type";
import _1 from "../../screens/register_subpages/_1";
import _2 from "../../screens/register_subpages/_2";

const initialState : RegisterStateType = {
	emailAddress: '',
	username: '',
	password: '',
	confirmPassword: '',
	hobbies: [],
	picture: [],
	currentPage: 1,
	width: 0,
}

const reducer = (state: RegisterStateType = initialState, action: any) : RegisterStateType => {

	switch (action.type) {
		case 'SET_EMAIL_ADDRESS': return {...state, emailAddress: action.payload};
		case 'SET_USERNAME': return {...state, username: action.payload};
		case 'SET_PASSWORD': return {...state, password: action.payload};
		case 'SET_CONFIRM_PASSWORD': return {...state, confirmPassword: action.payload};

		case 'NEXT_PAGE': return {...state, currentPage: state.currentPage + 1}; // TODO: Add validation
		case 'PREVIOUS_PAGE': return {...state, currentPage: state.currentPage - 1};

		case 'ADD_HOBBY': {
			const newHobbies = [...state.hobbies];
			newHobbies.push(action.payload);
			return {...state, hobbies: newHobbies};
		}

		case 'REMOVE_HOBBY': {
			const newHobbies = [...state.hobbies];
			newHobbies.forEach((hobby, index) => {
				if (hobby === action.payload) {
					newHobbies.splice(index, 1);
				}
			});
			return {...state, hobbies: newHobbies};
		}

		case 'SET_WIDTH': return {...state, width: action.payload};

		default: throw new Error('Invalid action type');
	}
}

const SignInScreen = () => {

	/**
	 * Ignore the warning about nested virtualized lists
	 * The warning is a false positive because the ScrollView is scrolling is disabled
	 */
	useEffect(() => {
		LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
	}, [])

	const [state, localDispatch] = useReducer(reducer, initialState);

	const scrollRef = React.useRef<ScrollView>(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTo({
				x: state.width * (state.currentPage - 1),
				y: 0,
				animated: true,
			});
		}
	}, [state.currentPage])

	return (
		<View
			/* Full screen container */
			style={{
				width: '100%',
				height: '100%',
				backgroundColor: '#fff',
				alignItems: 'center',
			}}
		>
			<SafeAreaView
				/* Mobile screen container */
				style={{
					width: '100%',
					maxWidth: SCREEN_MAX_WIDTH,
					height: '100%',
					backgroundColor: '#fff',
				}}
				onLayout={(event) => {
					localDispatch({type: 'SET_WIDTH', payload: event.nativeEvent.layout.width});
				}}
			>
				<View
					/* Upper part for progress */
					style={{
						alignSelf: 'center',
						zIndex: 1,
						flex: 0.3,
						justifyContent: 'center',
						maxWidth: SCREEN_MAX_WIDTH,
					}}
				>
					<RegisterProgressIndicator index={state.currentPage} maxIndex={4}/>
				</View>
				<ScrollView
					/* Carousel of pages */
					horizontal={true}
					pagingEnabled={true}
					showsHorizontalScrollIndicator={false}
					bounces={false}
					scrollEnabled={false}
					ref={scrollRef}
					style={{
						maxWidth: SCREEN_MAX_WIDTH,
						flex: 0.7,
					}}
				>

					{/* -------------------------------------------------- */}

					<_1
						/* First page container */
						state={state}
						localDispatch={localDispatch}
					/>

					{/* -------------------------------------------------- */}

					<_2
						state={state}
						localDispatch={localDispatch}
					/>



				</ScrollView>
			</SafeAreaView>
		</View>
	);
}

export default SignInScreen;