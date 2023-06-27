/* Libraries */
import {
    PixelRatio,
    Text,
    View,
    StyleSheet, Animated,
} from "react-native";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";

/* Components */
import AuthenticationsInputField from "../../components/AuthenticationInputField";
import AuthenticationButton from "../../components/AuthenticationButton";

/* Icons */
import {AntDesign} from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';

/* Styles */
import {styles} from "./styles";


const SignInScreen = ({navigation}: any) => {
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const refSwipe = React.useRef(new Animated.Value(0));

    // const gestureHandler = useAnimatedGestureHandler({
    //     onStart: (event, ctx) => {
    //
    //     },
    //     onActive: (event, ctx) => {
    //
    //     },
    //     onEnd: (event, ctx) => {
    //
    //     },
    // });



    return (
        <LinearGradient
            colors={['#D38787', '#6B4A4A']}
            style={styles.container}
        >
            <View style={styles.header}>
                <Text style={styles.header_title}>
                    Hello.
                </Text>
                <Text style={{...styles.header_title, color: '#ffffff'}} >
                    Great to see you !
                </Text>
            </View>
            <Animated.View style={{
                ...styles.footer_container,
                transform: [
                    {
                        translateY: refSwipe.current.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 1],
                        })
                    }
                ]
            }}>
                <View style={styles.separator_line}/>
                <View style={styles.form}>
                    <Text style={styles.form_title}>Sign in to your account</Text>
                    <AuthenticationsInputField
                        type={'emailAddress'}
                        placeholder={'Email'}
                        value={email}
                        onChange={(event) => {setEmail(event)}}
                    />
                    <AuthenticationsInputField
                        type={'password'}
                        placeholder={'Password'}
                        value={password}
                        onChange={(event) => {setPassword(event)}}
                    />
                    <View style={styles.buttons}>
                        <AuthenticationButton
                            type={'string'}
                            value={'Connect'}
                            style={{flex: 1,}}
                        />
                        <AuthenticationButton
                            type={'icon'}
                            icon={<AntDesign name="google" size={24} color="white" />}

                        />
                        <AuthenticationButton
                            type={'icon'}
                            icon={<Entypo name="facebook" size={24} color="white" />}
                        />
                    </View>
                    <View style={styles.register_text}>
                        <Text>You don't have an account ? </Text>
                        <Text
                            style={{color: '#AA4444', fontWeight: 'bold'}}
                        >Register</Text>
                    </View>
                </View>
            </Animated.View>
        </LinearGradient>
    );
};
export default SignInScreen;