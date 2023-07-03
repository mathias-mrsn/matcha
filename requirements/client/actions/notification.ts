import {
	SHOW_NOTIFICATION,
	HIDE_NOTIFICATION
} from '../constants/notification.constant';
import {NotificationState} from "../types/notification.type";
export function showNotification(notificationOpt: NotificationState) {
	return {
		type: SHOW_NOTIFICATION,
		payload: notificationOpt,
	}
}

export function hideNotification() {
	return {
		type: HIDE_NOTIFICATION,
		payload: {}
	}
}