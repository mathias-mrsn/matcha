import {FlatList, View, Text, useWindowDimensions, Platform, SafeAreaView, TouchableOpacity} from "react-native";
import {colors} from "../../constants/colors.contant";
import {useState} from "react";
import {AntDesign} from "@expo/vector-icons";

type CarouselHobbiesProps = {
	width: number,
	// items: string[],
}

const items = [
	"Football",
	"Baseball",
	"Basketball",
	"Volleyball",
	"Swimming",
	"Running",
];

const CarouselHobbies = (props: CarouselHobbiesProps) => {

	const [isSelected, setIsSelected] = useState(false);

	return (
		<SafeAreaView
			style={{
				width: props.width,
				height: 350,
				maxHeight: 350,
				paddingHorizontal: 130,
			}}
		>
			<FlatList
				data={items}
				pagingEnabled={true}
				renderItem={
					({item, index}) => {
						return (
							<View
								style={{
									marginVertical: 10,
									alignItems: 'center',
									paddingHorizontal: 20,
									paddingVertical: 20,
									backgroundColor: colors[Math.floor(Math.random() * colors.length)],
									justifyContent: 'center',
									borderRadius: 10,
								}}
								pointerEvents={'none'}
								key={index}
							>
								<Text>{item}</Text>
							</View>
						);
				}}
				style={{
				}}
			/>
		</SafeAreaView>
	);
}

export default CarouselHobbies;