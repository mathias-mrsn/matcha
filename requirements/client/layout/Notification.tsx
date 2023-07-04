/* Libraries */
import {useDispatch, useSelector} from "react-redux";
import {
	View,
	Text,
	TouchableOpacity,
	LayoutChangeEvent,
	Animated,
} from "react-native";
import React, {
	useEffect,
	useRef,
	useState
} from "react";
import Modal from "react-native-modal/dist/modal";

/* Actions */
import {hideNotification} from "../actions/notification";

/* Types */
import {NotificationIconDTO, NotificationState } from "types/notification.type";

/* Services */
import { getIconByType } from "../services/notification.service";

/* Icons */
import {AntDesign} from "@expo/vector-icons";

/* Constants */
import { NotificationTypes } from "../constants/notification.constant";

/* Local constants */
const NOTIFICATION_DURATION = 5000;

/**
 * @description Notification component
 * This component is used to display a notification on the screen
 * It is a modal that is displayed at the top of the screen
 *
 * This component uses the NotificationState from the redux store and its called in _layout.tsx
 */
const Notification = () => {
	/* Redux */
	const notification : NotificationState = useSelector((state: any) => state.notification);
	const dispatch = useDispatch();

	/* States */
	const [icon, setIcon] = useState<NotificationIconDTO>(NotificationTypes[0]);
	const [notificationDimensions, setNotificationDimensions] = useState<{width: number, height: number}>({
		width: 0,
		height: 0,
	});

	/* Refs */
	const refAnimation = useRef<Animated.Value>(new Animated.Value(0));

	/**
	 * Function called when the notification is rendered it will load the bar animation
	 */
	const loadBar = () => {
		Animated.timing(refAnimation.current, {
			toValue: notificationDimensions.width,
			duration: NOTIFICATION_DURATION,
			useNativeDriver: false,
		}).start();
	}

	/**
	 * Function called when the notification is closed it will reset the bar animation to 0
	 */
	const resetBar = () => {
		refAnimation.current.setValue(0);
	}

	/**
	 * Function called when the notification closed or swiped
	 */
	const handleClose = () => {
		console.log('Notification: window closed');
		resetBar();
		dispatch(hideNotification());
	}

	useEffect(() => {
		console.log('Notification: useEffect render');
		resetBar();
		if (!notification.isShow || !notification.type) return;

		const icon: NotificationIconDTO = getIconByType(notification.type);
		setIcon(icon);
		loadBar();

		const timeout = setTimeout(() => {
			handleClose();
		}, NOTIFICATION_DURATION);

		return () => {
			clearTimeout(timeout);
			console.log('Notification: useEffect clear');
		}
	}, [notification]);


	return (
		<Modal
			animationIn={'slideInDown'}
			animationOut={'slideOutUp'}
			animationInTiming={800}
			animationOutTiming={800}
			hasBackdrop={false}
			isVisible={notification.isShow}
			coverScreen={false}
			swipeDirection={["up", "left", "right"]}
			style={{
				justifyContent: 'flex-start',
				marginTop: 80,
				maxWidth: 500,
				width: '100%',
				height: 70,
				alignSelf: 'center',

				maxHeight: 70,
				paddingHorizontal: 20,
			}}
			pointerEvents={'auto'}
			onSwipeComplete={handleClose}
		>
			<TouchableOpacity
				disabled={!notification.onClicked}
				onPress={() => {
					if (notification.onClicked) return;
					notification.onClicked;
					handleClose();
				}}
			>
				<View
					style={{
						backgroundColor: '#ffffff',
						borderRadius: 10,
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
						padding: 20,
						overflow: 'hidden',
					}}
					pointerEvents={'auto'}
					onLayout={(e: LayoutChangeEvent) => {
						setNotificationDimensions({
							width: e.nativeEvent.layout.width,
							height: e.nativeEvent.layout.height,
						});
					}}
				>
					<View
						style={{
							width: 30,
							height: 30,
							backgroundColor: `rgba(${icon.color}, 0.2)`,
							borderRadius: 7,
							alignItems: 'center',
							justifyContent: 'center',
							marginRight: 15,
						}}
					>
						<AntDesign name={icon.icon as any} size={20} color={`rgba(${icon.color}, 0.8)`} />
					</View>
					<View
						style={{
							flex: 1,
							paddingRight: 10,
						}}
					>
						<Text
							style={{color: '#727885',}}
							numberOfLines={1}
						>{notification.message}</Text>
					</View>
					<TouchableOpacity
						style={{
							width: 30,
							height: 30,
							alignItems: 'center',
							justifyContent: 'center',
						}}
						onPress={handleClose}

					>
						<AntDesign name="close" size={24} color="#b6bbc4" />
					</TouchableOpacity>
					<Animated.View
						style={{
							position: 'absolute',
							left: 0,
							bottom: 0,
							padding: 0,
							margin: 0,
							height: 4,
							backgroundColor: `rgba(${icon.color}, 0.8)`,
							width: refAnimation.current,
						}}
					>
					</Animated.View>
				</View>
			</TouchableOpacity>
		</Modal>
	);
}

export default Notification;