/* Libraries */
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import {View, Text, useWindowDimensions, Image} from "react-native";
import {Gesture, GestureDetector, PanGesture} from "react-native-gesture-handler";
import Animated, {
	Easing, runOnJS, runOnUI,
	useAnimatedGestureHandler,
	useAnimatedStyle, useDerivedValue,
	useSharedValue,
	withSpring,
	withTiming
} from "react-native-reanimated";

/* Components */
import AuthenticationButton from "../../components/AuthenticationButton/AuthenticationButton"
import AuthenticationInputField from "../../components/AuthenticationInputField/AuthenticationInputField";

/* Icons */
import {AntDesign, Entypo} from "@expo/vector-icons";
import SwipeUpIcon from "../../assets/jsx-icons/SwipeUpIcon";
import {Link} from "expo-router";

/* Constants */
const SCREEN_MAX_WIDTH = 600
const TEXT_WHEN_SHOWN = [
	'Hi.',
	'Glad to see you here !',
]
const TEXT_WHEN_HIDDEN = [
	'Welcome.',
	'Join matcha and find many people who share your interests !'
]

const SignInScreen = ({navigation}: any) => {
	/* States */
	const [email, setEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')
	const [footerDimensions, setFooterDimensions] = React.useState<{
		width: number,
		height: number,
	}>({
		width: 0,
		height: 0,
	});
	const [headerText, setHeaderText] = React.useState<string[]>(TEXT_WHEN_HIDDEN)

	/* Shared values */
	const topValue = useSharedValue<number>(0);
	const swipeUpOpacity = useSharedValue<number>(0);

	/**
	 * Animated style for the footer
	 */
	const animatedFooterStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{translateY: withTiming(topValue.value, {
					duration: 100,
					easing: Easing.linear,
				})}
			]
		};
	});


	/**
	 * Function to handle the swipe up gesture
	 */
	const handleGesture : PanGesture = Gesture.Pan()
		.onBegin(() => {
			console.log('Begin')
		})
		.onUpdate((event) => {
			const dir = event.velocityY > 0 ? 1 : -1;
			topValue.value = Math.min(Math.max(topValue.value + (event.translationY / 6), 0), footerDimensions.height / 2);
		})
		.onEnd(() => {
			if (topValue.value < footerDimensions.height / 2) {
				topValue.value = 0;
				swipeUpOpacity.value = 0;
				runOnJS(setHeaderText)(TEXT_WHEN_SHOWN);
			}
			else {
				topValue.value = footerDimensions.height - 50;
				swipeUpOpacity.value = 1;
				runOnJS(setHeaderText)(TEXT_WHEN_HIDDEN);
			}
		});

	return (
		<LinearGradient
			/* Background gradient */
			colors={['#D38787', '#6B4A4A']}
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<GestureDetector gesture={handleGesture}>
			<View
				/* Wrap the screen for web usage */
				style={{
					position: 'relative',
					width: '100%',
					maxWidth: SCREEN_MAX_WIDTH,
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden',
				}}
			>
				<View
					/* Header container */
					style={{
						flex: 1,
						width: '100%',
					}}
				>
					<Text
						/* Header title */
						style={{
							textShadowColor: 'rgba(0, 0, 0, 0.25)',
							textShadowOffset: {width: 0, height: 4},
							textShadowRadius: 4,
							fontSize: 32,
							fontFamily: 'Poppins_SemiBold',
							letterSpacing: 1.28,
							position: 'absolute',
							bottom: 0,
							margin: 40,
							display: 'flex',
							flexDirection: 'column',
						}}
					>
							<Text>{headerText[0]}{"\n"}</Text>
							<Text
								style={{color: '#ffffff'}}
							>{headerText[1]}</Text>
					</Text>
				</View>
					<Animated.View
						/* Footer container */
						style={{
							width: '100%',
							flex: 1,
						}}
					>
						<Animated.View
							/* Footer background */
							style={[{
								height: '100%',
								backgroundColor: '#F6F6F6',
								borderTopLeftRadius: 30,
								borderTopRightRadius: 30,
								display: 'flex',
								alignItems: 'center',
								zIndex: 1,
							},
								animatedFooterStyle
							]}
							onLayout={(event) => {
								setFooterDimensions({
									width: event.nativeEvent.layout.width,
									height: event.nativeEvent.layout.height,
								})
							}}
						>
							<Animated.View
								/* Footer separator bar */
								style={{
									width: '30%',
									marginVertical: 10,
									height: 3,
									borderRadius: 9999,
									backgroundColor: '#000000',
								}}
							></Animated.View>
							<View
								/* Form container */
								style={{
									display: 'flex',
									gap: 30,
									alignItems: 'center',
									width: '100%',
									paddingHorizontal: 38,
									paddingVertical: 30,
								}}
							>
								  <Text
									  /* Form title */
									  style={{
										  fontSize: 18,
										  fontFamily: 'Poppins_Medium',
									  }}
								  >Sign in to your account</Text>
								  <AuthenticationInputField
									  type={'emailAddress'}
									  placeholder={'Email'}
									  value={email}
									  onChange={(event) => {setEmail(event)}}
								  />
								  <AuthenticationInputField
									  type={'password'}
									  placeholder={'Password'}
									  value={password}
									  onChange={(event) => {setPassword(event)}}
								  />
								  <View
									  /* Connect buttons */
									  style={{
										  display: 'flex',
										  flexDirection: 'row',
										  gap: 14,
										  width: '100%'
									  }}
								  >
									<AuthenticationButton
										/* Connect button */
										type={'string'}
										value={'Connect'}
										style={{flex: 1,}}
									/>
									<AuthenticationButton
										/* Connect with google button */
										type={'icon'}
										icon={<AntDesign name="google" size={24} color="white" />}
									/>
									<AuthenticationButton
										/* Connect with facebook button */
										type={'icon'}
										icon={<Entypo name="facebook" size={24} color="white" />}
									/>
								  </View>
								  <View
									  /* Register link */
									  style={{
										  display: 'flex',
										  flexDirection: 'row',
									  }}
								  >
									<Text>You don't have an account ? </Text>
									<Link
										to={'/register'}
										href={'/register'}
										style={{color: '#AA4444', fontWeight: 'bold'}}
									>Register</Link>
								  </View>
							</View>
						</Animated.View>
					</Animated.View>
				<View
					/* Swipe up indicator */
					style={{
						position: 'absolute',
						bottom: 90,
						width: '100%',
						height: 50,
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						gap: 10,
						zIndex: -1,
					}}
				>
					<View
						/* Swipe up icon */
						style={{
							width: 50,
							height: 50,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<SwipeUpIcon/>
					</View>
					<Text
						/* Swipe up text */
						style={{
							color: '#AEAEAE',
							fontSize: 16,
							fontFamily: 'Poppins_Medium',
						}}
					>Swipe Up</Text>
				</View>
			</View>
			</GestureDetector>
		</LinearGradient>
	)
}

export default SignInScreen

/** TODO
 * [x] - FIx input padding
 * [ ] change header text when form is hidden
 */