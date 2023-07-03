import {
	SHOW_NOTIFICATION,
	HIDE_NOTIFICATION
} from '../constants';
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