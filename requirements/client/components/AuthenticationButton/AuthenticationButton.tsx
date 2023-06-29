import {
    TouchableOpacity,
    Text,
} from "react-native";
import React from "react";

type AuthenticationButtonProps = {
    type: 'string' | 'icon',
    value?: string,
    icon?: any,

    style?: any,
}

const AuthenticationButton = (props: AuthenticationButtonProps) => {
    return (
        <TouchableOpacity
            style={{
                position: 'relative',
                backgroundColor: '#000000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 53,
                minWidth: 53,
                borderRadius: 10,
                ...props.style,
            }}
        >
            { props.type === 'string' ? (
                <Text
                    style={{
                        color: '#ffffff',
                        fontSize: 14,
                        fontFamily: 'Poppins_Medium',
                    }}
                >{props.value}</Text>
            ) : (
                <>
                    {props.icon}
                </>
            )}
        </TouchableOpacity>
    );
}

export default AuthenticationButton;