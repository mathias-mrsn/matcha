import { Text } from 'react-native';
import React from "react";

type SmallTextProps = {
	text: string,
	lineNumber: number,
};

const SmallText = (props: SmallTextProps) => {

	return (
		<Text
			/* Form title */
			style={{
				fontSize: 14,
				fontFamily: 'Poppins_LightItalic',
			}}
			numberOfLines={props.lineNumber}
		>{props.text}</Text>
	);
}

export default SmallText;