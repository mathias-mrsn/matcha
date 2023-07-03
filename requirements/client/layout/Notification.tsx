import {useDispatch, useSelector} from "react-redux";
import {
	View,
	Text, Button
} from "react-native";
import Modal from "react-native-modal/dist/modal";
import {hideNotification} from "../actions/notification";
import {NotificationIconDTO, NotificationState } from "types/notification.type";
import {useEffect, useState } from "react";
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

	return (
		<Modal
			animationIn={'slideInDown'}
			animationOut={'slideOutUp'}
			animationInTiming={1000}
			animationOutTiming={1000}
			// backdropTransitionInTiming={800}
			// backdropTransitionOutTiming={800}
			hasBackdrop={false}
			isVisible={notification.isShow}
			coverScreen={false}
			swipeDirection={["up", "left", "right"]}
			style={{
				justifyContent: 'flex-start',
				marginTop: 80,
			}}
			onSwipeComplete={() => {
				dispatch(hideNotification());
			}}


		>
			<View
				style={{
					backgroundColor: '#ffffff',
					height: 70,
					borderRadius: 10,
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					padding: 20,
				}}
			>
				<View
					style={{
						width: 30,
						height: 30,
						backgroundColor: `${icon.color}`,
						borderRadius: 7,
						alignItems: 'center',
						justifyContent: 'center',
						marginRight: 15,
					}}
				>
					<AntDesign name={icon.icon as any} size={24} color="rgba(255, 0, 0, 0.8)" />
				</View>
				<Text>{notification.message}</Text>
				{/*<Button title={''} onPress={() => {*/}
				{/*	dispatch(hideNotification());*/}
				{/*}}/>*/}


			</View>
		</Modal>
	);
}

export default Notification;