import {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {colors} from "../../constants/colors.contant";
import {HobbyType} from "../../types/authentication.type";

type _CarouselItemProps = {
    item: HobbyType,
    onClick: (item: string) => boolean,
    index: number,
}
const CarouselItem = (props: _CarouselItemProps) => {

    const [isSelected, setIsSelected] = useState<boolean>(false);


    const handleClick = () => {
        if (props.onClick(props.item.type))
            setIsSelected((_) => !_);
    }

    return (
        <TouchableOpacity
            style={{
                marginHorizontal: 5,
                alignItems: 'center',
                paddingHorizontal: 20,
                backgroundColor: props.item.color,
                justifyContent: 'center',
                borderRadius: 10,
            }}
            onPress={handleClick}
        >
            <Text style={{color: '#fff'}}>{props.item.type}</Text>
            { isSelected &&
                <View
                    style={{
                        position: 'absolute',
                        backgroundColor: 'rgba(9,230,39,0.8)',
                        padding: 2,
                        borderRadius: 9999,
                    }}
                >
                    <AntDesign name="checkcircleo" size={24} color="#333" style={{

                    }}/>
                </View>
            }
        </TouchableOpacity>
    );
}

export default CarouselItem;