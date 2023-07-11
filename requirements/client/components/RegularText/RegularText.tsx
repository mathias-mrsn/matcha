import { Text } from 'react-native';
import React from "react";

type RegularTextProps = {
	text: string,
	lineNumber: number,
};

const RegularText = (props: RegularTextProps) => {

	return (
		<Text
			/* Form title */
			style={{
				fontSize: 18,
				fontFamily: 'Poppins_Medium',
				textAlign: 'center',
			}}
			numberOfLines={props.lineNumber}
		>{props.text}</Text>
	);
}

export default RegularText;