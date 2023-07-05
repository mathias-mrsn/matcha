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

type _ReducerState = {
	emailAddress: string,
	username: string,
	password: string,
	confirmPassword: string,
	hobbies: string[],
	picture: string[],
}

const initialState : _ReducerState = {
	emailAddress: '',
	username: '',
	password: '',
	confirmPassword: '',
	hobbies: [],
	picture: ['', '', '', '', ''],
}

const reducer = (state: _ReducerState = initialState, action: any) : void => {
	switch (action.type) {
		case 'SET_EMAIL_ADDRESS': {
			state.emailAddress = action.payload;
		}
	}
}

const SignInScreen = () => {

	const [emailAddress, setEmailAddress] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const [width, setWidth] = useState<number>(0);

	// const [state, localDispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
	}, [])

	const [pageIndex, setPageIndex] = useState<number>(1);

	const scrollRef = React.useRef<ScrollView>(null);

	// const {width} = useWindowDimensions();

	const router = useRouter();

	const dispatch = useDispatch();

	const handlePage = (ToIndex: number) => {
		if (scrollRef.current) {
			// try {
			// 	switch (pageIndex) {
			// 		case 1: {
			// 			verifyEmail(emailAddress);
			// 			verifyUsername(username);
			// 			verifyPassword(password, confirmPassword);
			// 			break;
			// 		}
			// 	}
			// } catch (e: any) {
			// 	dispatch(showNotification({
			// 		type: 'error',
			// 		message: e.message,
			// 	}));
			// 	return;
			// }

			scrollRef.current.scrollTo({
				x: width * (ToIndex - 1),
				y: 0,
				animated: true,
			});
			setPageIndex(ToIndex);
		}
	}

	useEffect(() => {
		console.log(width);
	}, [width])

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
					setWidth(event.nativeEvent.layout.width);
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
					<RegisterProgressIndicator index={pageIndex} maxIndex={4}/>
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

					<View
						/* First page container */
						style={{
							width: width,
							maxWidth: SCREEN_MAX_WIDTH,
							height: '100%',
							alignItems: 'center',
						}}
					>
						<View
							/* Entire form */
							style={{
								width: width,
								maxWidth: SCREEN_MAX_WIDTH,
								height: '100%',
								gap: 30,
								alignItems: 'center',
								paddingHorizontal: 38,
							}}
						>
							<RegularText
								/* Title */
								text={'Register a new account'}
								lineNumber={1}
							/>
							<AuthenticationInputField
								/* Email input */
								type={'emailAddress'}
								placeholder={'Email'}
								value={emailAddress}
								onChange={(text: string) => {setEmailAddress(text)}}
								enableCheck={true}
							/>
							<AuthenticationInputField
								/* Username input */
								type={'username'}
								placeholder={'Username'}
								value={username}
								onChange={(text: string) => {setUsername(text)}}
								enableCheck={true}
							/>
							<AuthenticationInputField
								/* Password input */
								type={'password'}
								placeholder={'Password'}
								value={password}
								onChange={(text: string) => {setPassword(text)}}
								enableCheck={true}
							/>
							<AuthenticationInputField
								/* Confirm password input */
								type={'password'}
								placeholder={'Confirm Password'}
								value={confirmPassword}
								onChange={(text: string) => {setConfirmPassword(text)}}
								enableCheck={true}
							/>
							<View
								/* Buttons container */
								style={{
									display: 'flex',
									gap: 14,
									width: '100%',
								}}
							>
								<View
									/* Upper buttons */
									style={{
										display: 'flex',
										flexDirection: 'row',
										gap: 14,
									}}
								>
									<AuthenticationButton
										/* Previous button */
										type={'icon'}
										icon={<AntDesign name="left" size={24} color="white" />}
										onClicked={() => {router.push('/signin')}}
									/>
									<AuthenticationButton
										/* Next button */
										type={'string'}
										value={'Next'}
										style={{flex: 1,}}
										onClicked={() => {handlePage(2)}}
									/>
								</View>
								<View
									/* Lower buttons */
									style={{
										display: 'flex',
										flexDirection: 'row',
										gap: 14,
									}}
								>
									<AuthenticationButton
										/* Google button */
										type={'icon'}
										icon={<AntDesign name="google" size={24} color="white" />}
										style={{flex: 1,}}
										onClicked={() => {console.log('Google')}}
									/>
									<AuthenticationButton
										/* Facebook button */
										type={'icon'}
										icon={<Entypo name="facebook" size={24} color="white" />}
										style={{flex: 1,}}
										onClicked={() => {}}
									/>
								</View>
							</View>
							<View
								/* Sign In link */
								style={{
									display: 'flex',
									flexDirection: 'row',
								}}
							>
								<Text>You already have an account ? </Text>
								<Link
									href={'/signin'}
									style={{color: '#000000', fontWeight: 'bold'}}
								>Sign in</Link>
							</View>
						</View>
					</View>

					{/* -------------------------------------------------- */}

					<View
						/* Second page container */
						style={{
							width: width,
							maxWidth: SCREEN_MAX_WIDTH,
							height: '100%',
							alignItems: 'center',
							overflow: 'hidden',
						}}
					>
						<View
							style={{
								width: width,
								maxWidth: SCREEN_MAX_WIDTH,
								height: '100%',
								gap: 30,
								alignItems: 'center',
								paddingHorizontal: 38,
							}}
						>
							<RegularText text={'Tell us more about what you like'} lineNumber={1}/>
							<View
								style={{gap: 15,}}
							>
								<CarouselHobbies width={width}/>
							</View>
							<View
								/* Buttons container */
								style={{
									flexDirection: 'row',
									gap: 14,
									width: '100%',
								}}
							>
								<AuthenticationButton
									type={"icon"}
									icon={<AntDesign name="left" size={24} color="white" />}
									onClicked={() => {handlePage(1)}}
								/>
								<AuthenticationButton
									type={"string"}
									value={"Next"}
									style={{flex: 1,}}
									onClicked={() => {handlePage(3)}}
								/>
							</View>
						</View>
					</View>

					<View
						/* First page container */
						style={{
							width: width,
							maxWidth: SCREEN_MAX_WIDTH,
							height: '100%',
							alignItems: 'center',
						}}
					>
						<Text>salut</Text>
					</View>

				</ScrollView>
			</SafeAreaView>
		</View>
	);
}

export default SignInScreen;