import {SCREEN_MAX_WIDTH} from "../../constants/screen.constant";
import {Text, View} from "react-native";
import RegularText from "../../components/RegularText/RegularText";
import AuthenticationInputField from "../../components/AuthenticationInputField/AuthenticationInputField";
import AuthenticationButton from "../../components/AuthenticationButton/AuthenticationButton";
import {AntDesign, Entypo} from "@expo/vector-icons";
import {Link, useRouter} from "expo-router";
import React, {useEffect} from "react";
import {RegisterSubPagesProps} from "../../types/authentication.type";

const _1 = ({state, localDispatch}: RegisterSubPagesProps) => {

	const router = useRouter();

	useEffect(() => {
		console.log(state.width)
	}, [state.width])

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
					value={state.emailAddress}
					onChange={(text: string) => {localDispatch({type: 'SET_EMAIL_ADDRESS', payload: text})}}
					enableCheck={true}
				/>
				<AuthenticationInputField
					/* Username input */
					type={'username'}
					placeholder={'Username'}
					value={state.username}
					onChange={(text: string) => {localDispatch({type: 'SET_USERNAME', payload: text})}}
					enableCheck={true}
				/>
				<AuthenticationInputField
					/* Password input */
					type={'password'}
					placeholder={'Password'}
					value={state.password}
					onChange={(text: string) => {localDispatch({type: 'SET_PASSWORD', payload: text})}}
					enableCheck={true}
				/>
				<AuthenticationInputField
					/* Confirm password input */
					type={'password'}
					placeholder={'Confirm Password'}
					value={state.confirmPassword}
					onChange={(text: string) => {localDispatch({type: 'SET_CONFIRM_PASSWORD', payload: text})}}
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
							onClicked={() => {localDispatch({type: 'NEXT_PAGE'})}}
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