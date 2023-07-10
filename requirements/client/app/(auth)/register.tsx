/* Libraries */
import {
	View,
	ScrollView,
	SafeAreaView
} from "react-native";
import React, {useEffect, useReducer} from "react";

/* Components */
import RegisterProgressIndicator from "../../components/RegisterProgressIndicator/RegisterProgressIndicator";

/* Constants */
import {SCREEN_MAX_WIDTH} from "../../constants/screen.constant";

/* Types */
import {RegisterStateType} from "../../types/authentication.type";

/* Sub pages */
import _1 from "../../screens/register_subpages/_1";
import _2 from "../../screens/register_subpages/_2";
import _3 from "../../screens/register_subpages/_3";
import _4 from "../../screens/register_subpages/_4";

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
		case 'VALID_REGISTER_FORM' : {
			return {
				...state,
				emailAddress: action.payload.emailAddress,
				username: action.payload.username,
				password: action.payload.password,
				confirmPassword: action.payload.confirmPassword,
				currentPage: state.currentPage + 1,
			};
		}

		case 'VALID_HOBBIES' : {
			return {
				...state,
				hobbies: action.payload,
				currentPage: state.currentPage + 1,
			}
		}

		case 'VALID_IMAGES' : {
			return {
				...state,
				picture: action.payload,
				currentPage: state.currentPage + 1,
			}
		}

		case 'PREVIOUS_PAGE': return {...state, currentPage: state.currentPage - 1};

		case 'SET_WIDTH': return {...state, width: action.payload};

		default: throw new Error('Invalid action type');
	}
}

const SignInScreen = () => {

	/* Reducer */
	const [state, localDispatch] = useReducer(reducer, initialState);

	/* Refs */
	const scrollRef = React.useRef<ScrollView>(null);

	/* Hooks */
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
						/* Second page container */
						state={state}
						localDispatch={localDispatch}
					/>

					{/* -------------------------------------------------- */}

					<_3
						/* Third page container */
						state={state}
						localDispatch={localDispatch}
					/>

					{/* -------------------------------------------------- */}

					<_4
						/* Fourth page container */
						state={state}
						localDispatch={localDispatch}
					/>
				</ScrollView>
			</SafeAreaView>
		</View>
	);
}

export default SignInScreen;