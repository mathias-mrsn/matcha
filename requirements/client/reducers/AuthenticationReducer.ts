import {NotificationState} from "../types/notification.type";

const initialState : NotificationState = {
	isShow: false,
	message: '',
	type: 'success',
	onClicked: undefined,
};
const NotificationReducer = (state : NotificationState = initialState, action: any) => {
	switch(action.type) {
		default:
			return state;
	}
}
export default NotificationReducer;