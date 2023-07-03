import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Provider} from "react-redux";
import {store} from "../store/ConfigureStore";

import Notification from "../layout/Notification";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(auth)',
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins_Black: require('../assets/fonts/Poppins-Black.ttf'),
    Poppins_BlockItalic: require('../assets/fonts/Poppins-BlackItalic.ttf'),
    Poppins_Bold: require('../assets/fonts/Poppins-Bold.ttf'),
    Poppins_BoldItalic: require('../assets/fonts/Poppins-BoldItalic.ttf'),
    Poppins_ExtraBold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
    Poppins_ExtraBoldItalic: require('../assets/fonts/Poppins-ExtraBoldItalic.ttf'),
    Poppins_ExtraLight: require('../assets/fonts/Poppins-ExtraLight.ttf'),
    Poppins_ExtraLightItalic: require('../assets/fonts/Poppins-ExtraLightItalic.ttf'),
    Poppins_Italic: require('../assets/fonts/Poppins-Italic.ttf'),
    Poppins_Light: require('../assets/fonts/Poppins-Light.ttf'),
    Poppins_LightItalic: require('../assets/fonts/Poppins-LightItalic.ttf'),
    Poppins_Medium: require('../assets/fonts/Poppins-Medium.ttf'),
    Poppins_MediumItalic: require('../assets/fonts/Poppins-MediumItalic.ttf'),
    Poppins_Regular: require('../assets/fonts/Poppins-Regular.ttf'),
    Poppins_SemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
    Poppins_SemiBoldItalic: require('../assets/fonts/Poppins-SemiBoldItalic.ttf'),
    Poppins_Thin: require('../assets/fonts/Poppins-Thin.ttf'),
    Poppins_ThinItalic: require('../assets/fonts/Poppins-ThinItalic.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  return (
    <>
      {/* Keep the splash screen open until the assets have loaded. In the future, we should just support async font loading with a native version of font-display. */}
      {!loaded && <SplashScreen />}
      {loaded && <RootLayoutNav />}
    </>
  );
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Provider store={store}>
          {/*<Notification/>*/}
          <Stack>
            <Stack.Screen name="(auth)/signin" options={{ headerShown: false }} />
            <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          </Stack>
        </Provider>
      </ThemeProvider>
    </>
  );
}
