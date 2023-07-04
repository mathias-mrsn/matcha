import {
	View,
	Text,
	ScrollView,
	useWindowDimensions, SafeAreaView,
} from "react-native";
import RegularText from "../../components/RegularText/RegularText";
import AuthenticationButton from "../../components/AuthenticationButton/AuthenticationButton";
import AuthenticationInputField from "../../components/AuthenticationInputField/AuthenticationInputField";
import React, {useState} from "react";
import {showNotification} from "../../actions/notification";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {Link} from "expo-router";
import RegisterProgressIndicator from "../../components/RegisterProgressIndicator/RegisterProgressIndicator";
import {SCREEN_MAX_WIDTH} from "../../constants/screen.constant";
import { useRouter } from "expo-router";


const SignInScreen = () => {

	const [emailAddress, setEmailAddress] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const scrollRef = React.useRef<ScrollView>(null);

	const {width} = useWindowDimensions();

	const router = useRouter();

	const handleNext = (fromIndex: number, ToIndex: number) => {
		if (scrollRef.current) {

			scrollRef.current.scrollTo({
				x: width * (ToIndex - fromIndex),
				y: 0,
				animated: true,
			});
		}
	}

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
					<RegisterProgressIndicator index={1} maxIndex={4}/>
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
						width: '100%',
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
										onClicked={() => {}}
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
						style={{
							width: width,
							height: '100%',
							backgroundColor: '#FF00FF',
						}}
					>
						<Text>Sign In</Text>
					</View>

				</ScrollView>
			</SafeAreaView>
		</View>
	);
}

export default SignInScreen;