import {
	HIDE_NOTIFICATION,
	SHOW_NOTIFICATION
} from '../constants/notification.constant';
import {NotificationState} from "../types/notification.type";

const initialState : NotificationState = {
	isShow: false,
	message: '',
	type: 'success',
};
const NotificationReducer = (state : NotificationState = initialState, action: any) => {
	switch(action.type) {
		case SHOW_NOTIFICATION: {
			return {
				...state,
				...action.payload,
			};
		}
		case HIDE_NOTIFICATION: {
			return {
				isShow: false,
				message: '',
				type: 'success',
			}
		}
		default:
			return state;
	}
}
export default NotificationReducer;