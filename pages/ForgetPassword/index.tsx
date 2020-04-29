import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TextInput, ScrollView, TouchableOpacity, Image, ImageStyle, ImageBackground, Platform } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useTheme from '../../hooks/useTheme';

const isIOS = (): Boolean => Platform.OS == "ios";

// @ts-ignore
const ImagePath = require("../../images/dual-tone.png");
const forget = require("../../images/forget.png");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const ForgetPassword: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/')
  }

  return (
    <>
    <View style={style.mainContainer}>
        <ImageBackground source={ImagePath} style={{ width: '100%', height: 550,}} >
          <TouchableOpacity style={style.backContainer} onPress={backButton}>
            <View style={style.leftContainer}>
              <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
            </View>
            <View style={style.rightContainer}>
              <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{constants.backText}</ThemedText>
            </View>
          </TouchableOpacity>
          <View style={[style.topContainer, style.extraStyle]}>
            <View style={[style.forgetContainer, {backgroundColor: theme.backgroundColor}]}>
              <Image source={forget} style={[style.logoImage, {width: 50, height: 50}]}/>
            </View>
          </View>
          <View style={[style.topContainer, style.nexStyle]}>
            <ThemedText styleKey="highlightTextColor" style={[style.textStyle, {fontSize: 32, textTransform: 'capitalize'}]}>{constants.forgetText}</ThemedText>
          </View>
          <RoundButton buttonStyle={style.inputLabel} label={constants.choiceOne} buttonColor={theme.forgetColor} labelStyle={theme.highlightTextColor} />
          <RoundButton buttonStyle={[style.inputLabel, {marginTop: 10}]} label={constants.resetPass} buttonColor={theme.backgroundColor} labelStyle={theme.appColor} />
          <View style={style.childContainer}>
            <ThemedText style={style.forgotPassword} styleKey="highlightTextColor">{constants.newAccount}</ThemedText>
          </View>
        </ImageBackground>
    </View>
    <View style={style.bottomContainer}>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={style.childContainer}>
          <View style={[style.iconContainer, { backgroundColor: theme.facebookColor }]}>
            <Icon name="facebook" size={30} color={theme.highlightTextColor} style={style.Icon} />
          </View>
          <View style={[style.iconContainer, { backgroundColor: theme.googleColor }]}>
            <Icon name="google" size={30} color={theme.highlightTextColor} style={style.Icon} />
          </View>
          <View style={[style.iconContainer, { backgroundColor: theme.twitterColor }]}>
            <Icon name="twitter" size={30} color={theme.highlightTextColor} style={style.Icon} />
          </View>
        </View>
      </View>
    </View>
    </>
  )
};

export default ForgetPassword;

interface Style {
  container: ViewStyle;
  mainContainer: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  bottomContainer: ViewStyle;
  forgetContainer: ViewStyle;
  backContainer: ViewStyle;
  inputLabel: TextStyle;
  forgotPassword: TextStyle;
  title: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  backIcon: ViewStyle;
  logoImage: ImageStyle;
  textStyle: TextStyle;
  searchContainer: ViewStyle;
  iconStyle: ViewStyle;
  textContainer: ViewStyle;
  extraStyle: ViewStyle;
  nexStyle: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 16,
    backgroundColor: 'transparent',
    justifyContent: "center",
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1, 
    flexDirection:'column'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 80,
    marginBottom: 20,
  },
  bottomContainer: { 
    flex: 1, 
    alignItems: 'flex-end', 
    flexDirection: 'row'
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    paddingLeft: 20
  },
  inputLabel: {
    minWidth: 230, 
    marginTop: 0
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  leftContainer: {
    flex: 0, 
    justifyContent: "flex-start",
  },
  rightContainer: {
    flex: 3, 
    justifyContent: "center", 
    paddingTop: 17, 
    paddingLeft: 5,
  },
  forgotPassword: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 16,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  forgetContainer: {
    width: 100, 
    height: 100, 
    alignContent: 'center', 
    paddingLeft: 25, 
    justifyContent: 'center', 
    borderRadius: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  iconContainer: {
    margin: 12,
    minWidth: 50,
    height: 50,
    borderRadius: 50,
  },
  Icon: {
    fontSize: 25,
    padding: 15,
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  logoImage: {
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 9
  },
  searchContainer: {
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: isIOS() ? 20 : 10,
    paddingBottom: isIOS() ? 10 : 0
  },
  iconStyle: {
    flex: 1,
    alignItems: "flex-start"
  },
  extraStyle: {
    marginTop: 120, 
    marginBottom: 10
  },
  nexStyle: {
    marginTop: 0, 
    marginBottom: 30
  },
});
