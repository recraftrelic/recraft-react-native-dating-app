import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, TouchableOpacity, Image, ImageStyle, TextInput, Platform } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

const isIOS = (): Boolean => Platform.OS == "ios";

// @ts-ignore
const home = require("../../images/unbox.png");
const group = require("../../images/smile.png");
const setting = require("../../images/send.png");
const contact = require("../../images/add-plus.png");

interface Props extends RouteComponentProps {
    history: any
}

const ChatBox: React.FunctionComponent<Props> = ({
    history
}: Props) => {
    const theme: AppTheme = useTheme();

    return (
        <View style={[style.container, {backgroundColor: theme.profileColor}]}>
            <TouchableOpacity>
                <View style={style.iconContainer}>
                    <Image source={home} style={style.logoImage}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={style.iconContainer}>
                    <Image source={group} style={style.logoImage}/>
                </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', justifyContent: "space-between", backgroundColor: theme.backgroundColor}}>
                <View style={style.leftContainer}>
                    <TextInput placeholder="Type a message...." placeholderTextColor={theme.profileTextColor} style={[style.textContainer, { color: theme.profileTextColor }]} />
                </View>
                <View style={style.rightContainer}>
                    <TouchableOpacity>
                        <Image source={setting} style={style.logoImage}/>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity>
                <View style={style.iconContainer}>
                    <Image source={contact} style={style.logoImage}/>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default ChatBox;

interface Style {
    container: ViewStyle;
    iconContainer: ViewStyle;
    textContainer: ViewStyle;
    leftContainer: ViewStyle;
    rightContainer: ViewStyle;
    logoImage: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        position: 'absolute',
        padding: 10,
        paddingTop: 20,
        paddingBottom: 20,
        bottom: 0,
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    iconContainer: {
        alignItems: 'center'
    },
    logoImage: {
        justifyContent: 'center',
        width: 40, 
        height: 40,
    },
    textContainer: {
        height: isIOS() ? 10 : 45,
        paddingLeft: isIOS() ? 10 : 10, 
        paddingRight: isIOS() ? 10 : 10, 
        paddingTop: isIOS() ? 20: 15,
        fontSize: 18,
    },
    leftContainer: {
        flex: 0, 
        justifyContent: "flex-start",
    },
    rightContainer: {
        flex: 0, 
        justifyContent: 'flex-end',
    },
});
