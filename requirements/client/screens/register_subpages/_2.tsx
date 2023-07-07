import {RegisterSubPagesProps} from "../../types/authentication.type";
import {SCREEN_MAX_WIDTH} from "../../constants/screen.constant";
import {View} from "react-native";
import RegularText from "../../components/RegularText/RegularText";
import CarouselHobbies from "../../components/CarouselHobbies/CarouselHobbies";
import AuthenticationButton from "../../components/AuthenticationButton/AuthenticationButton";
import {AntDesign} from "@expo/vector-icons";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {showNotification} from "../../actions/notification";
import {HOBBIES} from "../../constants/authentication.constant";

const _2 = ({state, localDispatch} : RegisterSubPagesProps ) => {

	const dispatch = useDispatch();
	const handleHobbiesChange = (hobby: string) : boolean => {
		if (state.hobbies.includes(hobby)) {
			localDispatch({type: 'REMOVE_HOBBY', payload: hobby});
		} else {
			localDispatch({type: 'ADD_HOBBY', payload: hobby});
			console.log("here", state._error);
			if (state._error) {
				dispatch(showNotification({
					type: 'error',
					message: 'You can only select up to 5 hobbies',
				}))
				return false;
			}
		}
		return true;
	}

	useEffect(() => {console.log(state.hobbies)}, [state.hobbies]);

	return (
		<View
			/* Second page container */
			style={{
				width: state.width,
				maxWidth: SCREEN_MAX_WIDTH,
				height: '100%',
				alignItems: 'center',
				overflow: 'hidden',
			}}
		>
			<View
				style={{
					width: state.width,
					maxWidth: SCREEN_MAX_WIDTH,
					height: '100%',
					gap: 30,
					alignItems: 'center',
					paddingHorizontal: 38,
				}}
			>
				<RegularText text={'Tell us more about what you like'} lineNumber={1}/>
				<View
					style={{gap: 15,}}
				>
					<CarouselHobbies width={state.width} items={HOBBIES[0]} onClick={handleHobbiesChange}/>
					<CarouselHobbies width={state.width} items={HOBBIES[1]} onClick={handleHobbiesChange}/>
					<CarouselHobbies width={state.width} items={HOBBIES[2]} onClick={handleHobbiesChange}/>
					<CarouselHobbies width={state.width} items={HOBBIES[3]} onClick={handleHobbiesChange}/>
					<CarouselHobbies width={state.width} items={HOBBIES[4]} onClick={handleHobbiesChange}/>
				</View>
				<View
					/* Buttons container */
					style={{
						flexDirection: 'row',
						gap: 14,
						width: '100%',
					}}
				>
					<AuthenticationButton
						type={"icon"}
						icon={<AntDesign name="left" size={24} color="white" />}
						onClicked={() => localDispatch({type: 'PREVIOUS_PAGE'})}
					/>
					<AuthenticationButton
						type={"string"}
						value={"Next"}
						style={{flex: 1,}}
						onClicked={() => localDispatch({type: 'NEXT_PAGE'})}
					/>
				</View>
			</View>
		</View>
	);
}

export default _2;