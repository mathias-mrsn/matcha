// /* Libraries */
// import {
//   PixelRatio,
//   Text,
//   View,
//   StyleSheet,
//   Animated,
// } from "react-native";
// import React from "react";
// import {LinearGradient} from "expo-linear-gradient";
//
// /* Components */
// import AuthenticationsInputField from "../../components/AuthenticationInputField/AuthenticationInputField";
// import AuthenticationButton from "../../components/AuthenticationButton/AuthenticationButton";
//
// /* Icons */
// import {AntDesign} from "@expo/vector-icons";
// import { Entypo } from '@expo/vector-icons';
//
// const SignInScreen = ({navigation}: any) => {
//   const [email, setEmail] = React.useState<string>('')
//   const [password, setPassword] = React.useState<string>('')
//
//   const refSwipe = React.useRef(new Animated.Value(0));
//
//   // const gestureHandler = useAnimatedGestureHandler({
//   //     onStart: (event, ctx) => {
//   //
//   //     },
//   //     onActive: (event, ctx) => {
//   //
//   //     },
//   //     onEnd: (event, ctx) => {
//   //
//   //     },
//   // });
//
//
//
//   return (
// 	  <LinearGradient
// 		  colors={['#D38787', '#6B4A4A']}
// 		  style={styles.container}
// 	  >
// 		  <View
// 			  style={{
// 				position: 'relative',
// 				width: '100%',
// 				height: '100%',
// 				flex: 1,
// 				alignContent: 'center',
// 				justifyContent: 'center',
// 			  }}
// 		  >
// 		  <View style={styles.main}>
// 			<View style={styles.header}>
// 			<Text style={styles.header_title}>
// 			  Hello.
// 			</Text>
// 			<Text style={{...styles.header_title, color: '#ffffff'}} >
// 			  Great to see you !
// 			</Text>
// 		  </View>
// 		  <Animated.View style={{
// 			...styles.footer_container,
// 			transform: [
// 			  {
// 				translateY: refSwipe.current.interpolate({
// 				  inputRange: [0, 1],
// 				  outputRange: [0, 1],
// 				})
// 			  }
// 			]
// 		  }}>
// 			<View style={styles.separator_line}/>
// 			<View style={styles.form}>
// 			  <Text style={styles.form_title}>Sign in to your account</Text>
// 			  <AuthenticationsInputField
// 				  type={'emailAddress'}
// 				  placeholder={'Email'}
// 				  value={email}
// 				  onChange={(event) => {setEmail(event)}}
// 			  />
// 			  <AuthenticationsInputField
// 				  type={'password'}
// 				  placeholder={'Password'}
// 				  value={password}
// 				  onChange={(event) => {setPassword(event)}}
// 			  />
// 			  <View style={styles.buttons}>
// 				<AuthenticationButton
// 					type={'string'}
// 					value={'Connect'}
// 					style={{flex: 1,}}
// 				/>
// 				<AuthenticationButton
// 					type={'icon'}
// 					icon={<AntDesign name="google" size={24} color="white" />}
//
// 				/>
// 				<AuthenticationButton
// 					type={'icon'}
// 					icon={<Entypo name="facebook" size={24} color="white" />}
// 				/>
// 			  </View>
// 			  <View style={styles.register_text}>
// 				<Text>You don't have an account ? </Text>
// 				<Text
// 					style={{color: '#AA4444', fontWeight: 'bold'}}
// 				>Register</Text>
// 			  </View>
// 			</View>
// 		  </Animated.View>
// 		  </View>
// 		  </View>
// 	  </LinearGradient>
//   );
// };
// export default SignInScreen;
//
// const styles = StyleSheet.create({
//   container: {
// 	position: 'absolute',
// 	width: '100%',
// 	height: '100%',
// 	flex: 1,
// 	alignContent: 'center',
// 	justifyContent: 'center',
//   },
//   main: {
// 	position: 'relative',
// 	maxWidth: 600,
// 	  width: '100%',
// 	height: '100%',
//   },
//   header: {
// 	position: 'absolute',
// 	left: 40,
// 	bottom: 500,
//   },
//   header_title: {
// 	color: '#000000',
// 	textShadowColor: 'rgba(0, 0, 0, 0.25)',
// 	textShadowOffset: {width: 0, height: 4},
// 	textShadowRadius: 4,
// 	fontSize: 32,
// 	fontFamily: 'Poppins_SemiBold',
// 	letterSpacing: 1.28,
//   },
//   footer_container: {
// 	position: 'absolute',
// 	bottom: 0,
// 	width: '100%',
// 	height: PixelRatio.getPixelSizeForLayoutSize(480 / PixelRatio.get()),
// 	backgroundColor: '#F6F6F6',
// 	borderTopLeftRadius: 30,
// 	borderTopRightRadius: 30,
// 	display: 'flex',
// 	alignItems: 'center',
//   },
//   separator_line: {
// 	width: 140,
// 	marginVertical: 10,
// 	height: 3, borderRadius: 9999,
// 	backgroundColor: '#000000',
//   },
//   form: {
// 	display: 'flex',
// 	alignItems: 'center',
// 	marginVertical: 40,
// 	gap: 36,
// 	paddingHorizontal: 36,
// 	width: '100%',
//   },
//   form_title: {
// 	fontSize: 18,
// 	fontFamily: 'Poppins_Medium',
// 	color: '#000000',
//   },
//   buttons: {
// 	display: 'flex',
// 	flexDirection: 'row',
// 	width: '100%',
// 	height: 53,
// 	gap: 17,
//   },
//   register_text: {
// 	display: 'flex',
// 	flexDirection: 'row',
// 	fontSize: 14,
//   }
// });


import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import {View, Text, Animated} from "react-native";
import {Gesture, GestureDetector} from "react-native-gesture-handler";
import {useAnimatedStyle, useSharedValue} from "react-native-reanimated";

const SCREEN_MAX_WIDTH = 600

const SignInScreen = ({navigation}: any) => {
	const [email, setEmail] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')

	const topValue = useSharedValue<number>(0);
	// const animatedFooterStyle = useAnimatedStyle(() => ({
	// 	transform: [{translateY: topValue.value}]
	// }))
	// const refTop = React.useRef<Animated.Value>(new Animated.Value(0));

	const handleGesture = Gesture.Pan()
		.onBegin(() => {
			console.log('Begin')
		})
		.onUpdate((event) => {
			topValue.value = event.translationY
			// Animated.timing(refTop.current, {
			// 	toValue: event.translationY,
			// 	duration: 200,
			// 	useNativeDriver: false,
			// }).start();
			console.log('Update', event.translationY)
		})
		.onEnd(() => {
			console.log('End')
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
				<View
					/* Wrap the screen for web usage */
					style={{
						position: 'relative',
						width: '100%',
						maxWidth: SCREEN_MAX_WIDTH,
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
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
							<Text>Hello.{"\n"}</Text>
							<Text
								style={{color: '#ffffff'}}
							>Great to see you !</Text>

						</Text>
					</View>
					<GestureDetector gesture={handleGesture}>
						<View
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
									// ...animatedFooterStyle,
									transform: [{translateY: refTop.current}]
								},
									// animatedFooterStyle
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

							</Animated.View>
						</View>
					</GestureDetector>

				</View>
			</LinearGradient>
	)
}

export default SignInScreen
