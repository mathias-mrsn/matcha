// import {useState} from "react";
// import {Gesture, PanGesture} from "react-native-gesture-handler";
// import {runOnJS, useSharedValue} from "react-native-reanimated";
// import {run} from "jest";
//
// /**
//  * @param direction - Direction of the swipe
//  * @param distanceOnAction - Distance to travel to trigger the action
//  * @param onAction - Function to call when the action is triggered
//  * @param WhileSwiping - Function to call while swiping
//  * @param minDistance - Minimum value of the swipe distance
//  * @param maxDistance - Maximum value of the swipe distance
//  */
// type _useSwipeProps = {
// 	direction: 'vertical' | 'horizontal',
// 	distanceOnAction: number,
// 	onAction: () => void,
// 	onActionFailed?: () => void,
// 	WhileSwiping: (_: number) => void,
//
// 	minDistance: number,
// 	maxDistance: number,
// };
//
// /**
//  * @param handleSwipe - Gesture handler
//  * @param isSwiping - Boolean to know if the user is swiping
//  * @param swipeDistance - Distance swiped
//  */
// type _useSwipeReturnData = {
// 	handleSwipe: PanGesture,
// 	isSwiping: boolean,
// 	swipeDistance: number,
// }
//
// const useSwipe = (props: _useSwipeProps) : _useSwipeReturnData => {
// 	/* Shared Values */
// 	const isSwiping = useSharedValue<boolean>(false);
// 	const swipeDistance = useSharedValue<number>(0);
//
//
// 	const handleSwipe : PanGesture = Gesture.Pan()
// 		.onBegin(() => {
// 			console.log('useSwipe: Begin');
// 			isSwiping.value = true;
// 		})
// 		.onUpdate((event) => {
// 			if (props.direction === 'left' || props.direction === 'right') {
// 				swipeDistance.value = Math.min(Math.max(swipeDistance.value + (event.translationX), props.minDistance), props.maxDistance);
// 			} else {
// 				swipeDistance.value = Math.min(Math.max(swipeDistance.value + (event.translationY / 6), props.minDistance), props.maxDistance);
// 			}
// 			swipeDistance.value = Math.abs(swipeDistance.value);
// 			runOnJS(props.WhileSwiping)(swipeDistance.value);
// 		})
// 		.onEnd(() => {
// 			console.log('useSwipe: End');
// 			isSwiping.value = false;
// 			if (swipeDistance.value >= props.distanceOnAction) {
// 				runOnJS(props.onAction)();
// 			}
// 		});
//
// 	return {
// 		handleSwipe : handleSwipe,
// 		isSwiping: isSwiping.value,
// 		swipeDistance: swipeDistance.value,
// 	}
// }
//
// export default useSwipe;
