/* Libraries */
import {useDispatch} from "react-redux";
import React, {useState} from "react";
import {View} from "react-native";

/* Components */
import RegularText from "../../components/RegularText/RegularText";
import AuthenticationButton from "../../components/AuthenticationButton/AuthenticationButton";
import ChooseImage from "../../components/ChooseImage/ChooseImage";

/* Types */
import {RegisterSubPagesProps} from "../../types/authentication.type";

/* Constants */
import {SCREEN_MAX_WIDTH} from "../../constants/screen.constant";

/* Icons */
import {AntDesign} from "@expo/vector-icons";

/* Actions */
import {hideNotification, showNotification} from "../../actions/notification";

const _3 = ({state, localDispatch} : RegisterSubPagesProps) => {

	/* States */
	const [images, setImages] = useState<string[]>([]);

	/* Redux */
	const dispatch = useDispatch();

	/* Functions */
	const handleImageAdded = (uri: string) => {
		if (images.length >= 6) {return;}
		setImages([...images, uri]);
	}

	const handleImageRemoved = (uri: string) => {
		setImages(images.filter((image) => image !== uri));
	}

	const handleNextPage = () => {
		if (images.length === 0) {
			dispatch(showNotification({
				type: 'error',
				message: 'Please select at least one image',
			}))
		} else {
			localDispatch({type: 'VALID_IMAGES', payload: images});
			dispatch(hideNotification())
		}
	}

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
				<RegularText text={'Show the whole world your beautiful face 😍.'} lineNumber={2}/>
				<View
					style={{
						gap: 15,
						flexDirection: 'column',
						width: '100%',
					}}
				>
					<View
						style={{
							flexDirection: 'row',
							gap: 15,
							width: '100%',
							maxWidth: SCREEN_MAX_WIDTH,
						}}
					>
						<ChooseImage onImageAdded={handleImageAdded} onImageRemoved={handleImageRemoved}/>
						<ChooseImage onImageAdded={handleImageAdded} onImageRemoved={handleImageRemoved}/>
						<ChooseImage onImageAdded={handleImageAdded} onImageRemoved={handleImageRemoved}/>
					</View>
					<View
						style={{
							flexDirection: 'row',
							gap: 15,
							width: '100%',
							maxWidth: SCREEN_MAX_WIDTH,
						}}
					>
						<ChooseImage onImageAdded={handleImageAdded} onImageRemoved={handleImageRemoved}/>
						<ChooseImage onImageAdded={handleImageAdded} onImageRemoved={handleImageRemoved}/>
						<ChooseImage onImageAdded={handleImageAdded} onImageRemoved={handleImageRemoved}/>
					</View>

				</View>
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
						value={"Next"}
						style={{flex: 1,}}
						onClicked={handleNextPage}
					/>
				</View>
			</View>
		</View>
	)
}

export default _3;