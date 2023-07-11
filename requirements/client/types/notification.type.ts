/**
 * Redux type
 * @typedef {Object} NotificationState
 * @param {boolean} isShow - is show notification
 * @param {string} message - message notification
 * @param {'success' | 'error' | 'warning' | 'info'} type - type notification
 * @description Notification state used in redux
 */
export type NotificationState = {
	isShow?: boolean,
	message?: string,
	type?: 'success' | 'error' | 'warning' | 'info',
	onClicked?: () => void,
};

/**
 * @description This type is used to be sure that the notification type is one of the valid types
 */
export type NotificationValidType = 'success' | 'error' | 'warning' | 'info';

/**
 * @description This type is used to transfer every information we need to show the icon of the notification
 * @typedef {Object} NotificationIconDTO
 * @param {NotificationValidType} type - type notification
 * @param {string} color - color notification (css) (example: '128, 0, 147')
 * @param {string} icon - icon name (example: 'check')
 */
export type NotificationIconDTO = {
	type: NotificationValidType,
	color: string,
	icon: string,
}