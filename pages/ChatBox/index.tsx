import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, Image, ImageStyle, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ions from 'react-native-vector-icons/Ionicons';
import ChatBottom from '../../components/Base/ChatBox';
import ChatMessage from '../../components/Base/ChatMessage';

// @ts-ignore
const ImagePath = require("../../images/rectangle-3.png");
const user1 = require("../../images/call.jpg");
const user2 = require("../../images/searching.jpg");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const ChatBox: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/message')
  }

  return (
    <>
      <View style={style.mainContainer}>
        <ImageBackground source={ImagePath} style={style.imageStyle}>
          <View style={style.backContainer}>
            <TouchableOpacity  onPress={backButton}>
              <View style={style.leftContainer}>
                <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
              </View>
            </TouchableOpacity>
            <View style={style.centerContainer}>
              <View style={style.childContainer}>
                <View style={style.leftContainer}>
                  <Image source={user1} style={[style.searchStyle, {borderColor: theme.highlightTextColor }]}/>
                </View>
                <View style={style.centerContainer}>
                  <ThemedText style={style.leftStyle} styleKey="highlightTextColor">John Rhoades</ThemedText>
                  <ThemedText style={style.textStyle} styleKey="highlightTextColor">Last Seen 5:23am</ThemedText>
                </View>
                <View style={style.rightContainer}>
                  <Ions name="ios-videocam" size={35} color={theme.highlightTextColor} style={[style.backIcon, style.extraStyle]}/>
                </View>
              </View>
            </View>
            <View style={style.rightContainer}>
              <Ions name="md-call" size={30} color={theme.highlightTextColor} style={[style.backIcon, style.specialStyle]}/>
            </View>
          </View>
        </ImageBackground>
        <ScrollView style={style.extraContainer}>
        <ChatMessage
            message="Lorem ipsum dolor sit amet, conse cte tempor incididunt ut labore et dolore, quis nostrud."
            isRightAlign={false}
            image={user1}
        />
        <ChatMessage
            message="incididunt ut labore et dolore ,"
            isRightAlign={true}
            image={user2}
        />
        <ChatMessage
            message="Lorem ipsum dolor sit amet, conse cte tempor incididunt ut labore et dolore, quis nostrud."
            isRightAlign={false}
            image={user1}
        />
        <ChatMessage
            message="incididunt ut labore et dolore ,"
            isRightAlign={true}
            image={user2}
        />
         <ChatMessage
            message="Lorem ipsum dolor sit amet, conse cte tempor incididunt ut labore et dolore, quis nostrud."
            isRightAlign={false}
            image={user1}
        />
        <ChatMessage
            message="incididunt ut labore et dolore ,"
            isRightAlign={true}
            image={user2}
        />
        <ChatMessage
            message="Lorem ipsum dolor sit amet, conse cte tempor incididunt ut labore et dolore, quis nostrud."
            isRightAlign={false}
            image={user1}
        />
        <ChatMessage
            message="incididunt ut labore et dolore ,"
            isRightAlign={true}
            image={user2}
        />
        </ScrollView>
        <ChatBottom history={history} />    
      </View>
    </>
  )
};

export default ChatBox;

interface Style {
  mainContainer: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  rightContainer: ViewStyle;
  backContainer: ViewStyle;
  backIcon: ViewStyle;
  extraStyle: ViewStyle;
  textStyle: TextStyle;
  leftStyle: TextStyle;
  imageStyle: ImageStyle;
  searchStyle: ImageStyle;
  specialStyle: ViewStyle;
  extraContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    flex: 1, 
    flexDirection:'column'
  },
  leftContainer: {
    flex: 0, 
    justifyContent: "flex-start",
  },
  rightContainer: {
    flex: 0, 
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 3, 
    justifyContent: "center", 
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    paddingTop: 20
  },
  extraStyle: {
    paddingTop: 12
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 20,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  imageStyle: {
    width: '100%', 
    height: 130,
  },
  searchStyle: {
    width: 50, 
    height: 50, 
    borderRadius: 50, 
    borderWidth: 3, 
    marginTop: 5, 
    marginLeft: 20, 
  },
  specialStyle: {
    paddingTop: 12, 
    marginRight: 20
  },
  textStyle: {
    fontSize: 12, 
    textAlign: 'center', 
    fontWeight: 'bold'
  },
  leftStyle: {
    fontSize: 20, 
    textAlign: 'center', 
    paddingTop: 12, 
    fontWeight: 'bold'
  },
  extraContainer: {
    marginBottom: 100,
  }
});
