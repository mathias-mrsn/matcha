import { Text } from 'react-native';
import React from "react";

type HeaderTextProps = {
	primary: string,
	secondary?: string,
	primaryColor: string,
	secondaryColor?: string,
};

const HeaderText = (props: HeaderTextProps) => {

	return (
		<Text
			/* Header title */
			style={{
				textShadowColor: 'rgba(0, 0, 0, 0.25)',
				textShadowOffset: {width: 0, height: 4},
				textShadowRadius: 4,
				fontSize: 32,
				fontFamily: 'Poppins_SemiBold',
				letterSpacing: 1.28,
				position: 'absolute',
				bottom: 0,
				margin: 40,
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Text
				style={{color: props.primaryColor}}
			>{props.primary}{"\n"}</Text>
			{ props.secondary &&
				<Text
					style={{color: props.secondaryColor ?? '#ffffff'}}
				>{props.secondary}</Text>
			}
		</Text>
	);
}

export default HeaderText;