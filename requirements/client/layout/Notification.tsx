import {useDispatch, useSelector} from "react-redux";
import {
	View,
	Text, Button
} from "react-native";
import Modal from "react-native-modal/dist/modal";
import {hideNotification} from "../actions/notification";

const Notification = () => {
	const notification : NotificationState = useSelector((state: any) => state.notification);
	const dispatch = useDispatch();

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
			swipeDirection={["up", "down", "left", "right"]}
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
					backgroundColor: '#F6F6F6',
					height: 80,
					borderRadius: 10,
				}}
			>
				<Text>{notification.message}</Text>
				{/*<Button title={''} onPress={() => {*/}
				{/*	dispatch(hideNotification());*/}
				{/*}}/>*/}


			</View>
		</Modal>
	);
}

export default Notification;