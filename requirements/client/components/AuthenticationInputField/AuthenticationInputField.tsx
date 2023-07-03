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
        font: Animated.Value,
    }>({y: new Animated.Value(18), font: new Animated.Value(14)});

    const [isPasswordVisible, setIsPasswordVisible] = React.useState<boolean>(false);

    const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        Animated.timing(refPlaceFolder.current.y, {
            toValue: 6,
            duration: 200,
            useNativeDriver: false,
        }).start();
        Animated.timing(refPlaceFolder.current.font, {
            toValue: 10,
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
        Animated.timing(refPlaceFolder.current.font, {
            toValue: 14,
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
            <View
                pointerEvents={'none'}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: 53,
                }}
            >
                <Animated.Text
                    style={{
                        position: 'absolute',
                        transform: [{translateY: refPlaceFolder.current.y},],
                        left: 24,
                        color: '#8E8E8E',
                        fontFamily: 'Poppins_Medium',
                        fontSize: refPlaceFolder.current.font
                    }}
                >
                    {props.placeholder}</Animated.Text>
            </View>
            { props.type === 'password' && (
                <Ionicons
                    name={isPasswordVisible ? 'eye' : 'eye-off'}
                    style={{
                        color: '#8E8E8E',
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