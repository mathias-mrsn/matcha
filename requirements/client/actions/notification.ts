import {
	SHOW_NOTIFICATION,
	HIDE_NOTIFICATION
} from '../constants/notification.constant';
import {NotificationState, NotificationValidType} from "../types/notification.type";
export function showNotification(notificationOpt: {message: string, type: NotificationValidType}) {
	return {
		type: SHOW_NOTIFICATION,
		payload: {
			isShow: true,
			...notificationOpt,
		},
	}
}

export function hideNotification() {
	return {
		type: HIDE_NOTIFICATION,
		payload: {}
	}
}