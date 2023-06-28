import {
    TextInput,
    View,
    Text,
    NativeSyntheticEvent,
    TextInputFocusEventData,
    Animated,
} from "react-native";
import React from "react";

import Ionicons from '@expo/vector-icons/Ionicons';

type AuthenticationInputFieldProps = {
    type: 'emailAddress' | 'password' | 'username',
    placeholder: string,
    value: string,
    onChange: (value: string) => void
}
const AuthenticationInputField = (props: AuthenticationInputFieldProps) => {
    const refPlaceFolder = React.useRef<{
        y: Animated.Value,
        scale: Animated.Value,
    }>({y: new Animated.Value(18), scale: new Animated.Value(1)});

    const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);

    const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        Animated.timing(refPlaceFolder.current.y, {
            toValue: 6,
            duration: 200,
            useNativeDriver: false,
        }).start();
        Animated.timing(refPlaceFolder.current.scale, {
            toValue: 0.7,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }

    const handleOffFocus = () => {
        if (props.value.length > 0) return;
        Animated.timing(refPlaceFolder.current.y, {
            toValue: 18,
            duration: 200,
            useNativeDriver: false,
        }).start();
        Animated.timing(refPlaceFolder.current.scale, {
            toValue: 1,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }

    const handlePasswordVisibility = () => {
        setIsPasswordVisible((current) => !current);
    }

    return (
        <View style={{
            position: 'relative',
            width: '100%',
        }}>
            <TextInput
                value={props.value}
                onChangeText={props.onChange}
                textContentType={props.type}
                secureTextEntry={props.type  === 'password' && !isPasswordVisible}
                style={{
                    width: '100%',
                    height: 53,
                    borderRadius: 10,
                    borderStyle: 'solid',
                    borderWidth: 1.5,
                    borderColor: '#8E8E8E',
                    padding: 18,
                    paddingBottom: 10,
                    paddingLeft: 24,
                }}
                onFocus={handleOnFocus}
                onBlur={handleOffFocus}
                maxLength={50}
            />
            <Animated.Text
                style={{
                    position: 'absolute',
                    transform: [
                        {scale: refPlaceFolder.current.scale},
                        {translateY: refPlaceFolder.current.y},
                    ],
                    left: 24,
                    color: '#8E8E8E',
                    fontFamily: 'Poppins_Medium',
                    fontSize: 14,
                }}
            >
                {props.placeholder}</Animated.Text>
            { props.type === 'password' && (
                <Ionicons
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    style={{
                        position: 'absolute',
                        width: 24,
                        height: 24,
                        right: 24,
                        top: 14,
                    }}
                    size={24}
                    onPress={handlePasswordVisibility}
                />
            )}
        </View>
    );
}

export default AuthenticationInputField;