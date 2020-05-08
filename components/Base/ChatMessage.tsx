import React from 'react';
import { StyleSheet, View, ViewStyle, TextStyle, Image, ImageStyle, ImageSourcePropType } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';

interface Props {
    message: string;
    isRightAlign: boolean;
    image: ImageSourcePropType;
};

const ChatMessage: React.FunctionComponent<Props> = ({
    message,
    image,
    isRightAlign,
}: Props) => {
    const theme: AppTheme = useTheme();
    const rowStyle: ViewStyle = { flexDirection: isRightAlign ? 'row' : 'row-reverse' }

    return (
      <>
        <View style={[style.container, rowStyle]}>
            <View style={ isRightAlign ? [style.topContentData, {backgroundColor: theme.alternateMessageBackgroundColor}] :  [style.flipContentData, {backgroundColor: theme.profileColor}]}>
                <View style={style.dataContainer}>
                    <ThemedText styleKey="textColor" style={[style.userNameStyle, {color:  isRightAlign ? theme.highlightTextColor : theme.textColor}]}>{message}</ThemedText>
                </View>
            </View>
            <View style={ isRightAlign ? style.topContentContainer : style.flipContentContainer }>
                <View style={style.timeContainer}>
                    <Image source={image} style={style.logoImage}/>
                </View>
            </View>
        </View>
        <View style={ isRightAlign ? [style.flipContentData, style.extraStyle] :  [style.topContentData, style.extraStyle]}>
            <ThemedText styleKey="textColor" style={[style.smallStyle, {color: theme.textColor}]}>SENT 11:20 AM  SEEN 11:25AM</ThemedText>
        </View>
      </>
    );
};

export default ChatMessage;

interface Style {
    container: ViewStyle;
    topContentContainer: ViewStyle;
    flipContentContainer: ViewStyle;
    timeContainer: ViewStyle;
    dataContainer: ViewStyle;
    userNameStyle: TextStyle;
    smallStyle: TextStyle;
    topContentData: ViewStyle;
    flipContentData: ViewStyle;
    logoImage: ImageStyle;
    extraStyle: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
    container: {
        paddingTop: 30,
        flex: 1,
    },
    topContentContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
    },
    topContentData: {
        flexDirection: 'row-reverse',
        flex: 2,
        borderRadius: 10,
        marginRight: 30
    },
    flipContentContainer: {
        flexDirection: 'row-reverse',
        flex: 1,
        alignItems: 'center',
    },
    flipContentData: {
        flexDirection: 'row',
        flex: 2,
        borderRadius: 10,
        marginRight: 30
    },
    timeContainer: {
        flex: 1,
        alignItems: 'center',
    },
    dataContainer: {
        flex: 2,
        padding: 10,
    },
    userNameStyle: {
        fontSize: 16,
    },
    smallStyle: {
        fontSize: 10,
    },
    logoImage: {
        justifyContent: 'center',
        width: 80, 
        height: 80,
        borderRadius: 50,
    },
    extraStyle: {
        marginLeft: 40
    },
})
