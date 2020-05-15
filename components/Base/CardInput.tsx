import React from 'react';
import { StyleSheet, View, ViewStyle, TextInput, TextInputProps, Platform, TextStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ErrorText from './ErrorText';
import ThemedText from '../UI/ThemedText';

const isIOS = (): Boolean => Platform.OS == "ios";

interface Props extends TextInputProps {
    errors: string[];
    label: string;
    specialStyle?: ViewStyle;
};

const CardInput: React.FunctionComponent<Props> = (props: Props) => {
    const theme: AppTheme = useTheme();
    const { errors, label, specialStyle, ...restProps } = props;

    return (
        <View style={[style.searchContainer, specialStyle]}>
            <ThemedText styleKey="textColor" style={style.labelStyle}>{label}</ThemedText>
            <TextInput placeholderTextColor={theme.cardTextColor} style={[style.textContainer, { color: theme.textColor, backgroundColor: theme.profileColor }]} {...restProps}/>
            <View style={style.errorContainer}>
                <ErrorText errors={errors} /> 
            </View>
        </View>
    );
};

export default CardInput;

interface Style {
    textContainer: ViewStyle;
    errorContainer: ViewStyle;
    searchContainer: ViewStyle;
    labelStyle: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
    textContainer: {
        height: 45,
        width: '90%',
        paddingLeft: isIOS() ? 17 : 20, 
        paddingRight: isIOS() ? 17 : 20, 
        fontSize: 18,
        marginLeft: 20,
        alignSelf: 'flex-start',
    },
    errorContainer: {
        flex: 1, 
        alignSelf: 'flex-start',
        marginLeft: 20
    },
    searchContainer: {
        flex: 3, 
        justifyContent: "center", 
        alignItems: 'center',
    },
    labelStyle: {
        fontSize: 16, 
        fontWeight: 'bold',
        marginBottom: 10, 
        alignSelf: 'flex-start', 
        marginLeft: 20
    },
})
