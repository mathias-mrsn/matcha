/**
 * Redux type
 * @typedef {Object} NotificationState
 * @param {boolean} isShow - is show notification
 * @param {string} message - message notification
 * @param {'success' | 'error' | 'warning' | 'info'} type - type notification
 * @description Notification state used in redux
 */
type NotificationState = {
	isShow?: boolean,
	message?: string,
	type?: 'success' | 'error' | 'warning' | 'info',
	onClicked?: () => void,
}