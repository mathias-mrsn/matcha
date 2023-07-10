import React, { useState, useEffect } from 'react';
import {Button, Image, View, Platform, TouchableOpacity, Pressable} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import {AntDesign} from "@expo/vector-icons";

type _ChooseImageProps = {
	onImageAdded: (uri: string) => void,
	onImageRemoved: (uri: string) => void,
}

const ChooseImage = (props: _ChooseImageProps) => {
	const [image, setImage] = useState<string>('');

	const pickImage = async () => {
		// No permissions request is necessary for launching the image library
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.canceled) {
			setImage(result.assets[0].uri);
			props.onImageAdded(result.assets[0].uri);
		}
	};

	const removeImage = async () => {
		setImage('');
		props.onImageRemoved(image);
	}

	return (
		<View style={{
			flex: 1,
			backgroundColor: '#B8B8B8',
			aspectRatio: 1,
			borderRadius: 10,
		}}>
			{!image ?
			<TouchableOpacity
				onPress={pickImage}
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<AntDesign
					name={'plus'}
					color={'white'}
					size={40}
				/>
			</TouchableOpacity>
				:
				<View>
					<Image source={{ uri: image }} style={{ width: '100%', height: '100%', borderRadius: 10 }} />
					<Pressable
						style={{
							position: 'absolute',
							right: -7,
							top: -7,
							borderRadius: 9999,
							width: 26,
							height: 26,
							backgroundColor: 'white',
							justifyContent: 'center',
							alignItems: 'center',

						}}
						onPress={removeImage}
					>
						<AntDesign
							name={'closecircle'}
							color={'black'}
							size={26}
						/>
					</Pressable>
				</View>
			}
		</View>
	);
}

export default ChooseImage;