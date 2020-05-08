import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, Image, ImageStyle, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterNavigation from '../Footer/Index';
import UserItem from '../../components/Base/UserItem';

// @ts-ignore
const ImagePath = require("../../images/rectangle-3.png");
const search = require("../../images/search.png");
const add = require("../../images/add-message.png");
const user1 = require("../../images/call.jpg");
const user2 = require("../../images/new-profile.jpg");
const user3 = require("../../images/profile5.jpg");
const user4 = require("../../images/new-profile4.jpg");
const user5 = require("../../images/new-profile3.jpg");
const user6 = require("../../images/new-profile2.jpg");
const user7 = require("../../images/searching.jpg");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Message: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/matching')
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
                  <ThemedText style={style.leftStyle} styleKey="highlightTextColor">{constants.messageText}</ThemedText>
                </View>
              </View>
            </View>
            <View style={style.rightContainer}>
              <Image source={search} style={style.searchStyle}/>
            </View>
          </View>
        </ImageBackground>
        <ScrollView style={{marginBottom: 40}}>
          <View style={style.childContainer}>
            <View style={[style.rightContainer, style.extraStyle]}>
              <TouchableOpacity>
                <Image source={add} style={style.addStyle}/>
              </TouchableOpacity>
            </View>
          </View>
          <UserItem image={user1} title="John Rhoades" content="Hey How are you ?" />
          <UserItem image={user2} title="ds Chiogna" content="Yeah, it’s been great! Are you enjoying it too?" notificationCount={1}/>
          <UserItem image={user3} title="D Afzal-khan" content="love this song – do you like this kind of music?" />
          <UserItem image={user4} title="L Seheult" content="I loved visiting New York. Are there things you.." notificationCount={6}/>
          <UserItem image={user5} title="F Casteris" content="So, what do you do for a living? ..." />
          <UserItem image={user6} title="Michal Franci" content="These are great! I absolutely hate small talk, but " />
          <UserItem image={user7} title="Moore Torff" content="do you like this kind of music? " />
        </ScrollView>
        <FooterNavigation history={history} />    
      </View>
    </>
  )
};

export default Message;

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
  addStyle: ImageStyle;
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
    justifyContent: "flex-end", 
    paddingRight: 20
  },
  centerContainer: {
    flex: 3, 
    justifyContent: "center", 
    paddingTop: 20
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    paddingTop: 20
  },
  extraStyle: {
    flex: 1, 
    alignItems: 'flex-end',
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
    justifyContent: 'center',
    width: 20, 
    height: 20,
  },
  addStyle: {
    justifyContent: 'center',
    width: 40, 
    height: 40,
  },
  textStyle: {
    fontSize: 24, 
    paddingTop: 10
  },
  leftStyle: {
    fontSize: 20, 
    textAlign: 'left', 
    paddingRight: 10, 
    fontWeight: 'bold'
  },
});
