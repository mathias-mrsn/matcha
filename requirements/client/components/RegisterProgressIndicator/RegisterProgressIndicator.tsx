import {View} from "react-native";

type RegisterProgressIndicatorProps = {
	index: number;
	maxIndex: number;
}

const RegisterProgressIndicator = (props: RegisterProgressIndicatorProps) => {

	const loopForEachElement = (maxIndex: number) => {
		let elements = [];
		for (let i = 0; i < maxIndex; i++) {
			elements.push(
				<View
					key={i}
					style={{
						width: 21,
						height: 21,
						backgroundColor: `${i < props.index ? '#000' : '#fff'}`,
						borderRadius: 9999,
						marginVertical: -9,
						borderStyle: 'solid',
						borderWidth: 3,
						borderColor: '#000',
					}}
				/>
			)
		}
		return elements;
	}

	return (
		<View
			style={{
				width: 160,
				maxWidth: 160,
				height: 30,
				maxHeight: 30,
				paddingVertical: 13,
			}}
		>
			<View
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
					backgroundColor: '#000',
				}}
			>
				{loopForEachElement(props.maxIndex)}
			</View>

		</View>
	)
}

export default RegisterProgressIndicator;