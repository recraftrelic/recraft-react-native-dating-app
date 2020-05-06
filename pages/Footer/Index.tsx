import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, Image, ImageStyle } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';

// @ts-ignore
const home = require("../../images/home.png");
const group = require("../../images/group.png");
const message = require("../../images/message.png");
const setting = require("../../images/setting.png");
const contact = require("../../images/contact.png");

interface Props extends RouteComponentProps {
    history: any
}

const FooterNavigation: React.FunctionComponent<Props> = ({
    history
}: Props) => {
    const theme: AppTheme = useTheme();

    const backButton = () => {
        history.push('/gender')
    }

    const goToNearby = () => {
        history.push('/nearby')
    }

    const goToSearching = () => {
        history.push('/searching')
    }

    const goToSetting = () => {
        history.push("/")
    }

    const goToProfile = () => {
        history.push("/")
    }

    return (
        <View style={[style.container, {borderColor: theme.lightBottomColor, backgroundColor: theme.backgroundColor}]}>
            <TouchableOpacity onPress={backButton}>
                <View style={style.iconContainer}>
                    <Image source={home} style={style.logoImage}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToNearby}>
                <View style={style.iconContainer}>
                    <Image source={group} style={style.logoImage}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToSearching}>
                <View style={style.iconContainer}>
                    <Image source={message} style={style.logoImage}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToSetting}>
                <View style={style.iconContainer}>
                    <Image source={setting} style={style.logoImage}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToProfile}>
                <View style={style.iconContainer}>
                    <Image source={contact} style={style.logoImage}/>
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default FooterNavigation;

interface Style {
    IconTitle: TextStyle;
    container: ViewStyle;
    iconContainer: ViewStyle;
    logoImage: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        flexDirection: 'row',
        justifyContent: "space-around",
        position: 'absolute',
        padding: 10,
        bottom: 0,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        borderTopWidth: 2,
    },
    iconContainer: {
        alignItems: 'center'
    },
    IconTitle: {
        fontSize: 12,
    },
    logoImage: {
        justifyContent: 'center',
        width: 30, 
        height: 30,
    },
});
