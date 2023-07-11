import {
	FlatList,
	View,
	Text,
	useWindowDimensions,
	Platform,
	SafeAreaView,
	TouchableOpacity,
	LogBox, VirtualizedList, YellowBox, ScrollView
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

	return (
		<SafeAreaView
			style={{
				width: props.width,
				height: 50,
				maxHeight: 50,
			}}
		>
			<ScrollView
				// data={props.items}
				showsHorizontalScrollIndicator={false}
				horizontal={true}
				contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
			>
				{ props.items.map((item, index) => {
					return (
						<CarouselItem
							item={item}
							onClick={props.onClick}
							index={index}
							key={index}
						/>
					);
				})}

			</ScrollView>
		</SafeAreaView>
	);
}

export default CarouselHobbies;