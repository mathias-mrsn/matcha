/* Libraries */
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import {View, Text} from "react-native";
import {GestureDetector} from "react-native-gesture-handler";
import Animated, {
	Easing,
	runOnJS,
	useAnimatedStyle,
	withTiming
} from "react-native-reanimated";
import {Link} from "expo-router";

/* Redux */
import {useDispatch} from "react-redux";

/* Components */
import AuthenticationButton from "../../components/AuthenticationButton/AuthenticationButton"
import AuthenticationInputField from "../../components/AuthenticationInputField/AuthenticationInputField";

/* Icons */
import {AntDesign, Entypo} from "@expo/vector-icons";
import SwipeUpIcon from "../../assets/jsx-icons/SwipeUpIcon";

/* Hooks */
import useSwipe from "../../hooks/useSwipe";

/* Actions */
import {showNotification} from "../../actions/notification";

/* Layout */
import Notification from "../../layout/Notification";
import HeaderText from "../../components/HeaderText/HeaderText";
import RegularText from "../../components/RegularText/RegularText";

/* Constants */
import {SCREEN_MAX_WIDTH} from "../../constants/screen.constant";

/* Local constants */
const FOOTER_HEIGHT = 450
const TEXT_WHEN_SHOWN = [
	'Hi.',
	'Glad to see you here !',
]
const TEXT_WHEN_HIDDEN = [
	'Welcome.',
	'Join matcha and find many people who share your interests !'
]

const SignInScreen = () => {
	/* States */
	const [email, setEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')
	const [headerText, setHeaderText] = React.useState<string[]>(TEXT_WHEN_HIDDEN)

	/* Hooks */
	const {handleSwipe, swipeDistance, swipePercentage} = useSwipe({
		direction: 'vertical',
		minDistance: 1,
		fullDistance: FOOTER_HEIGHT - 50,
		bounder: FOOTER_HEIGHT / 2,
		WhileSwiping: (distance) => {
			if (distance < FOOTER_HEIGHT / 2) {
				runOnJS(setHeaderText)(TEXT_WHEN_HIDDEN);
			}
			else {
				runOnJS(setHeaderText)(TEXT_WHEN_SHOWN);
			}
		}
	})

	/**
	 * Animated styles for the footer and the opacity of the swipe up icon
	 */
	const animatedFooterStyle = useAnimatedStyle(() => {
		return {
			transform: [
				{translateY: withTiming((FOOTER_HEIGHT - 50) -swipeDistance.value, {
					duration: 200,
					easing: Easing.linear,
				})}
			]
		};
	});
	const opacityStyle = useAnimatedStyle(() => {
		return {
			opacity: withTiming((100 - swipePercentage.value) / 100, {
						duration: 200,
						easing: Easing.linear,
			})
		};
	});

	const dispatch = useDispatch();

	return (
		<LinearGradient
			/* Background gradient */
			colors={['#D38787', '#6B4A4A']}
			style={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<GestureDetector gesture={handleSwipe}>
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
						<HeaderText
							primary={headerText[0]}
							primaryColor={'#000000'}
							secondary={headerText[1]}
							secondaryColor={'#ffffff'}
						/>
					</View>
					<Animated.View
						/* Footer container */
						style={{
							width: '100%',
							height: FOOTER_HEIGHT,
						}}
					>
						<Animated.View
							/* Footer background */
							style={[{
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								zIndex: 1,
								backgroundColor: '#F6F6F6',
								borderTopLeftRadius: 30,
								borderTopRightRadius: 30,
							},
								animatedFooterStyle
							]}
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
								<RegularText
									text={'Sign in to your account'}
									lineNumber={1}
								/>
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
										onClicked={() => {dispatch(showNotification({
											type: 'success',
											message: 'This feature is not available yet',
										}))}}
									/>
									<AuthenticationButton
										/* Connect with google button */
										type={'icon'}
										icon={<AntDesign name="google" size={24} color="white" />}
										onClicked={() => {dispatch(showNotification({
											type: 'error',
											message: 'This is a test notification',
										}))}}
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
										// to={'/register'}
										href={'/register'}
										style={{color: '#AA4444', fontWeight: 'bold'}}
									>Register</Link>
								  </View>
							</View>
						</Animated.View>
					</Animated.View>
					<Animated.View
						/* Swipe up indicator */
						style={[{
							position: 'absolute',
							bottom: 500,
							width: '100%',
							height: 50,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							gap: 10,
							zIndex: -1,
						},
							animatedFooterStyle,
							opacityStyle,
						]}
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
					</Animated.View>
				</View>
			</GestureDetector>
		</LinearGradient>
	)
}

export default SignInScreen
