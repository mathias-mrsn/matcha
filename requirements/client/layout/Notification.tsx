import {useDispatch, useSelector} from "react-redux";
import {
	View,
	Text,
	Button,
	TouchableOpacity
} from "react-native";
import Modal from "react-native-modal/dist/modal";
import {hideNotification} from "../actions/notification";
import {NotificationIconDTO, NotificationState } from "types/notification.type";
import React, {useEffect, useState } from "react";
import { NotificationTypes } from "../constants/notification.constant";
import { getIconByType } from "../services/notification.service";
import {AntDesign} from "@expo/vector-icons";

const Notification = () => {
	const notification : NotificationState = useSelector((state: any) => state.notification);
	const dispatch = useDispatch();

	const [icon, setIcon] = useState<NotificationIconDTO>(NotificationTypes[0]);

	useEffect(() => {
		if (!notification.isShow || !notification.type) return;
		const icon: NotificationIconDTO = getIconByType(notification.type);
		setIcon(icon);
	}, [notification]);

	const handleClose = () => {
		console.log('close');
		dispatch(hideNotification());
	}

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
				</View>
			</TouchableOpacity>
		</Modal>
	);
}

export default Notification;