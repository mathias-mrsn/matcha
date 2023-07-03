import {
	Gesture,
	PanGesture
} from "react-native-gesture-handler";
import {
	runOnJS,
	SharedValue,
	useSharedValue
} from "react-native-reanimated";

/**
 * @description Props for the useSwipe hook
 * @param direction - Direction of the swipe
 * @param distanceOnAction - Distance to travel to trigger the action
 * @param onAction - Function to call when the action is triggered
 * @param WhileSwiping - Function to call while swiping
 * @param minDistance - Minimum value of the swipe distance
 * @param fullDistance - Maximum value of the swipe distance
 * @param bounder - On end if the swipe distance is less than the bounder, the swipe is canceled otherwise it is completed
 */
type _useSwipeProps = {
	direction: 'vertical' | 'horizontal',
	distanceOnAction?: number,
	onAction?: () => void,
	WhileSwiping?: (_: number) => void,
	minDistance?: number,
	fullDistance?: number,
	bounder?: number
};

/**
 * @param handleSwipe - Gesture handler
 * @param isSwiping - Boolean to know if the user is swiping
 * @param swipeDistance - Distance swiped
 * @param swipePercentage - Percentage of the distance swiped
 * @param isSwiped - Boolean to know if the swipe is completed
 */
type _useSwipeReturnData = {
	handleSwipe: PanGesture,
	isSwiping: SharedValue<boolean>,
	swipeDistance: SharedValue<number>,
	swipePercentage: SharedValue<number>
	isSwiped: SharedValue<boolean>
}

const useSwipe = (props: _useSwipeProps) : _useSwipeReturnData => {
	/* Shared Values */
	const isSwiping = useSharedValue<boolean>(false);
	const swipeDistance = useSharedValue<number>(props.minDistance ?? 0);
	const swipePercentage = useSharedValue<number>(0);
	const isSwiped = useSharedValue<boolean>(false);

	const handleSwipe : PanGesture = Gesture.Pan()
		.onBegin(() => {
			isSwiping.value = true;
		})
		.onUpdate((event) => {
			const translation = props.direction === 'horizontal' ? event.translationX : event.translationY;
			let max;

			if (props.minDistance)
				max = Math.max(swipeDistance.value - translation, props.minDistance);
			else
				max = swipeDistance.value - translation;

			if (props.fullDistance)
				swipeDistance.value = Math.min(max, props.fullDistance);
			else
				swipeDistance.value = max;

			if (props.fullDistance && props.minDistance)
				swipePercentage.value = swipeDistance.value / props.fullDistance * 100;
			if (props.WhileSwiping)
				runOnJS(props.WhileSwiping)(swipeDistance.value);
		})
		.onEnd(() => {
			isSwiping.value = false;
			if (props.bounder) {
				swipeDistance.value = (swipeDistance.value > props.bounder) ? props.fullDistance ?? 0 : props.minDistance ?? 0;
				isSwiped.value = swipeDistance.value > props.bounder;
			}
			else if (props.onAction && props.distanceOnAction && swipeDistance.value > props.distanceOnAction)
				runOnJS(props.onAction)();
		});

	return {
		handleSwipe : handleSwipe,
		isSwiping: isSwiping,
		swipeDistance: swipeDistance,
		swipePercentage: swipePercentage,
		isSwiped: isSwiped,
	}
}

export default useSwipe;