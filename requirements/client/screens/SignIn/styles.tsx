import {PixelRatio, StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    header: {
        position: 'absolute',
        left: 40,
        top: '35%',
    },
    header_title: {
        color: '#000000',
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: {width: 0, height: 4},
        textShadowRadius: 4,
        fontSize: 32,
        fontFamily: 'Poppins',
        fontWeight: '600',
        letterSpacing: 1.28,
    },
    footer_container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: PixelRatio.getPixelSizeForLayoutSize(480 / PixelRatio.get()),
        backgroundColor: '#F6F6F6',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        display: 'flex',
        alignItems: 'center',
    },
    separator_line: {
        width: 140,
        marginVertical: 10,
        height: 3,
        borderRadius: 9999,
        backgroundColor: '#000000',
    },
    form: {
        display: 'flex',
        alignItems: 'center',
        marginVertical: 40,
        gap: 36,
        paddingHorizontal: 36,
        width: '100%',
    },
    form_title: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: '500',
        color: '#000000',
    },
    buttons: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: 53,
        gap: 17,
    },
    register_text: {
        display: 'flex',
        flexDirection: 'row',
    }
});