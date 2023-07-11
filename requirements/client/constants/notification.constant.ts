import { NotificationIconDTO } from "types/notification.type";

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export const NotificationTypes : NotificationIconDTO[] = [
	{
		type: 'success',
		color: '36,159,110',
		icon: 'check',
	},
	{
		type: 'error',
		color: '240,82,82',
		icon: 'close',
	},
	{
		type: 'warning',
		color: '250,90,31',
		icon: 'warning',
	},
	{
		type: 'info',
		color: '24,58,215',
		icon: 'exclamationcircleo',
	}
]