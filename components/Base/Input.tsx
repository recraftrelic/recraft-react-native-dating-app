import React from 'react';
import { StyleSheet, View, ViewStyle, TextInput, TextInputProps, Image, ImageStyle, Platform } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ErrorText from './ErrorText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const isIOS = (): Boolean => Platform.OS == "ios";

// @ts-ignore
const confirmImage = require("../../images/confirm.png");

interface Props extends TextInputProps {
    errors: string[];
    icon: string;
    iconStyle?: any;
    choose?: boolean;
    confirmIcon?: boolean;
};

const Input: React.FunctionComponent<Props> = (props: Props) => {
    const theme: AppTheme = useTheme();
    const { errors, icon, iconStyle, choose, confirmIcon, ...restProps } = props;

    return (
        <> 
            <View style={[style.searchContainer, { borderBottomColor: theme.textColor }]}>
                <View style={style.iconStyle}>
                    { choose ?
                    <AntDesign name={icon} size={15} color={theme.textColor} style={iconStyle} />
                    : confirmIcon ? 
                    <Image source={confirmImage} style={style.imageStyle}/>
                    : <Fontisto name={icon} size={15} color={theme.textColor} style={iconStyle} /> }
                </View>
                <View style={style.textContainer}>
                    <TextInput
                        placeholderTextColor={theme.textColor}
                        style={[style.textContainer, { color: theme.textColor }]}
                        {...restProps}
                    />
                </View>
            </View>
            <View style={style.errorContainer}>
                <ErrorText
                    errors={errors}
                /> 
            </View>
        </>
    );
};

export default Input;

interface Style {
    textContainer: ViewStyle;
    errorContainer: ViewStyle;
    searchContainer: ViewStyle;
    iconStyle: ViewStyle;
    imageStyle: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
    textContainer: {
        flex: 2,
        paddingBottom: isIOS() ? 0 : 4, 
        height: isIOS() ? 15 : 35,
        paddingLeft: isIOS() ? 3 : 5, 
    },
    errorContainer: {
        flex: 1, 
        alignSelf: 'flex-start',
    },
    searchContainer: {
        borderBottomWidth: 0.5,
        flexDirection: "row",
        alignItems: "center",
        paddingTop: isIOS() ? 20 : 10,
        paddingBottom: isIOS() ? 10 : 0,
    },
    iconStyle: {
        flex: 0,
        alignItems: "flex-start",
    },
    imageStyle: {
        width: 12, 
        height: 15,
        marginRight: isIOS() ? 3 : 5, 
    },
})
