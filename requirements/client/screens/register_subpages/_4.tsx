/* Libraries */
import {View} from "react-native";
import React from "react";

/* Components */
import AuthenticationButton from "../../components/AuthenticationButton/AuthenticationButton";
import HeaderText from "../../components/HeaderText/HeaderText";
import SmallText from "../../components/SmallText/SmallText";

/* Types */
import {RegisterSubPagesProps} from "../../types/authentication.type";

/* Constants */
import {SCREEN_MAX_WIDTH} from "../../constants/screen.constant";

/* Icons */
import {AntDesign} from "@expo/vector-icons";

const _4 = ({state, localDispatch}: RegisterSubPagesProps) => {
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
				<HeaderText primary={'Only one step before finding your '} primaryColor={'#000'} secondary={'love'} secondaryColor={'#D38787'}/>
				<View
					style={{
						width: '100%',
						gap: 30,
						position: 'absolute',
						bottom: 0,
						margin: 30,

					}}
				>
					<SmallText text={'Before going further, make sure that the previous fields are correct.'} lineNumber={3}/>
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
							value={"Register"}
							style={{flex: 1,}}
							onClicked={() => {}	}
						/>
					</View>

				</View>
			</View>
		</View>
	)
}

export default _4;