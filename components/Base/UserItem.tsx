import React from 'react';
import { StyleSheet, View, ViewStyle, Image, ImageStyle, ImageSourcePropType, TextStyle, TouchableOpacity } from 'react-native';
import { AppTheme } from '../../config/DefaultConfig';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../UI/ThemedText';

interface Props {
    image: ImageSourcePropType;
    title: string;
    content: string;
    notificationCount?: number;
};

const UserItem: React.FunctionComponent<Props> = (props: Props) => {
    const theme: AppTheme = useTheme();
    const { image, title, content, notificationCount } = props;

    return (
      <View style={[style.childContainer, style.backContainer]}>
        <View style={style.leftContainer}>
          <Image source={image} style={style.imageStyle}/>
        </View>
        <TouchableOpacity style={[style.centerContainer, { borderColor: theme.inputColor}]}>
          <View style={style.childContainer}>
            <View style={style.leftContainer}>
              <ThemedText style={style.textStyle} styleKey="premiumColor">{title}</ThemedText>
            </View>
            {
              notificationCount && (
                <View style={style.rightContainer}>
                  <View style={[style.container, { backgroundColor: theme.notifyColor }]}>
                    <ThemedText styleKey="highlightTextColor" style={style.text}>{notificationCount}</ThemedText>
                  </View>
                </View>
              )
            }
          </View>
          <View style={style.childContainer}>
            <View style={style.leftContainer}>
              <ThemedText style={style.leftStyle} styleKey="lightTextColor">{content}</ThemedText>
            </View>
            <View style={style.rightContainer}>
              <ThemedText style={[style.leftStyle, {paddingRight: 0}]} styleKey="lightTextColor">12.30 am</ThemedText>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
};

export default UserItem;

interface Style {
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  rightContainer: ViewStyle;
  backContainer: ViewStyle;
  container: ViewStyle,
  text: TextStyle,
  textStyle: TextStyle;
  leftStyle: TextStyle;
  imageStyle: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
  leftContainer: {
    flex: 1, 
    justifyContent: "flex-start",
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 0, 
    justifyContent: "flex-end", 
  },
  centerContainer: {
    flex: 3, 
    marginLeft: 10,
    justifyContent: 'flex-start', 
    borderBottomWidth: 1,
  },
  backContainer: {
    marginLeft: 20, 
    marginRight: 20, 
    marginBottom: 30,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  container: {
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 14
  },
  imageStyle: {
    width: 80, 
    height: 80, 
    borderRadius: 80
  },
  textStyle: {
    fontSize: 24, 
    paddingTop: 5
  },
  leftStyle: {
    fontSize: 12, 
    paddingTop: 10, 
    paddingRight: 10
  },
});

