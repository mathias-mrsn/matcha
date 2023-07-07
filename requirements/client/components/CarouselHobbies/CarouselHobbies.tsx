import {
	FlatList,
	View,
	Text,
	useWindowDimensions,
	Platform,
	SafeAreaView,
	TouchableOpacity,
	LogBox, VirtualizedList, YellowBox
} from "react-native";
import {colors} from "../../constants/colors.contant";
import {useEffect, useState} from "react";
import {AntDesign} from "@expo/vector-icons";
import CarouselItem from "../CarouselItem/CarouselItem";
import {HobbyType} from "../../types/authentication.type";

type _CarouselHobbiesProps = {
	width: number,
	items: HobbyType[],
	onClick: (item: string) => boolean
}

const CarouselHobbies = (props: _CarouselHobbiesProps) => {

	useEffect(() => {
		LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
	}, [])
	LogBox.ignoreLogs(["VirtualizedLists should never be nested"])

	return (
		<SafeAreaView
			style={{
				width: props.width,
				height: 50,
				maxHeight: 50,
			}}
		>
			<FlatList
				data={props.items}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				renderItem={
					({item, index}) => {
						return (
							<CarouselItem
								item={item}
								onClick={props.onClick}
								index={index}
							/>
						);
				}}
				contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
			/>
		</SafeAreaView>
	);
}

export default CarouselHobbies;