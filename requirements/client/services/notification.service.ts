import { NotificationTypes } from '../constants/notification.constant';
import {
	NotificationIconDTO,
} from '../types/notification.type';

/**
 * Get icon by status
 * @param type
 * @returns {NotificationIconDTO} - icon object to show
 * @description Get icon by type
 */
export function getIconByType(type: string): NotificationIconDTO {
	const dto : NotificationIconDTO | undefined = NotificationTypes.find(
		(item: NotificationIconDTO) => item.type === type
	);
	return dto || NotificationTypes[0];
}