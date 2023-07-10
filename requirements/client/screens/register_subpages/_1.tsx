/* Libraries */
import {Text, View} from "react-native";
import React, {useState} from "react";
import {Link, useRouter} from "expo-router";

/* Constants */
import {SCREEN_MAX_WIDTH} from "../../constants/screen.constant";

/* Components */
import RegularText from "../../components/RegularText/RegularText";
import AuthenticationInputField from "../../components/AuthenticationInputField/AuthenticationInputField";
import AuthenticationButton from "../../components/AuthenticationButton/AuthenticationButton";

/* Icons */
import {AntDesign, Entypo} from "@expo/vector-icons";

/* Types */
import {RegisterSubPagesProps} from "../../types/authentication.type";

/* Services */
import {verifyEmail, verifyPassword, verifyUsername} from "../../services/authentication.service";

/* Redux */
import {useDispatch} from "react-redux";

/* Actions */
import {hideNotification, showNotification} from "../../actions/notification";

const _1 = ({state, localDispatch}: RegisterSubPagesProps) => {

	/* States */
	const [emailAddress, setEmailAddress] = useState<string>('');
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	/* Expo router */
	const router = useRouter();

	/* Redux */
	const dispatch = useDispatch();

	/* Functions */
	const handleNextPage = () => {
		try {
			verifyEmail(emailAddress);
			verifyUsername(username);
			verifyPassword(password, confirmPassword);
			localDispatch({type: 'VALID_REGISTER_FORM', payload: {
				emailAddress,
				username,
				password,
				confirmPassword
			}});
			dispatch(hideNotification())
		} catch (e: any) {
			dispatch(showNotification({
				type: 'error',
				message: e.message,
			}));
		}
	}

	return (
		<View
			/* First page container */
			style={{
				width: state.width,
				maxWidth: SCREEN_MAX_WIDTH,
				height: '100%',
				alignItems: 'center',
			}}
		>
			<View
				/* Entire form */
				style={{
					width: state.width,
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
							onClicked={handleNextPage}
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
	)
}

export default _1;