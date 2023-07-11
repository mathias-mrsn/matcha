import {SafeAreaView, View, Text, TextInput, StyleSheet} from "react-native";
import {SCREEN_MAX_WIDTH} from "../../constants/screen.constant";
import RegularText from "../../components/RegularText/RegularText";
import React, {useState} from "react";

// const MAX_CODE_LENGTH = 6
const TFA = () => {

	const [code, setCode] = useState<string>('')

	const handleCodeChange = (code: string) => {
		setCode(code.replace(/[^0-9]/g, ''))
	}

	return (
		<SafeAreaView
			style={{
				position: 'relative',
				width: '100%',
				maxWidth: SCREEN_MAX_WIDTH,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
			}}
		>
			<View style={{flex: 0.3, width: '100%'}}/>
			<View
				style={{
					flex: 0.7,
					gap: 40,
					marginHorizontal: 80,
					alignItems: 'center',
				}}
			>
				<RegularText text={'TFA code'} lineNumber={1}/>
				<View
					style={{
						width: 340,
						height: 70,
					}}
				>
					<TextInput
						keyboardType = 'numeric'
						style={{
							height: '100%',
							width: '100%',
							gap: 40,
							opacity: 0,
							zIndex: 2,
						}}
						onChangeText={handleCodeChange}
						maxLength={6}
					/>
					<View
						style={{
							display: 'flex',
							gap: 10,
							flexDirection: 'row',
							position: 'absolute',
							width: '100%',
							height: '100%',
						}}
					>
						<View style={styles.number_box}>
							<Text style={styles.number_box_text}>{code.charAt(0)}</Text>
						</View>
						<View style={styles.number_box}>
							<Text style={styles.number_box_text}>{code.charAt(1)}</Text>
						</View>
						<View style={styles.number_box}>
							<Text style={styles.number_box_text}>{code.charAt(2)}</Text>
						</View>
						<View style={styles.number_box}>
							<Text style={styles.number_box_text}>{code.charAt(3)}</Text>
						</View>
						<View style={styles.number_box}>
							<Text style={styles.number_box_text}>{code.charAt(4)}</Text>
						</View>
						<View style={styles.number_box}>
							<Text style={styles.number_box_text}>{code.charAt(5)}</Text>
						</View>
					</View>

				</View>
			</View>
		</SafeAreaView>
	)
}

export default TFA;

const styles = StyleSheet.create({
	number_box: {
		flex: 1,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 2,
	},
	number_box_text: {
		fontSize: 30,
	}
})