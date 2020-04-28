import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TextInput, ScrollView, TouchableOpacity, Image, ImageStyle, ImageBackground } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import useTheme from '../../hooks/useTheme';
import { Platform } from "react-native";

const isIOS = (): Boolean => Platform.OS == "ios";

// @ts-ignore
const ImagePath = require("../../images/dual-tone.png");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Login: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/')
  }

  const goToForget = () => {
    history.push('/')
  }

  const goToHome = () => {
    history.push('/home/')
  }

  return (
    <>
    <View style={{flex: 1, flexDirection:'column'}}>
    <ScrollView>
      <ImageBackground source={ImagePath} style={{ width: '100%', height: '78%',}} >
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: "space-between", paddingLeft: 20}} onPress={backButton}>
          <View style={style.leftContainer}>
            <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
          </View>
          <View style={style.rightContainer}>
            <ThemedText styleKey="highlightTextColor" style={style.textStyle}>Back</ThemedText>
          </View>
        </TouchableOpacity>
        <View style={[style.topContainer, {marginTop: 80, marginBottom: 10}]}>
          <Image source={constants.recraftLogo} style={[style.logoImage, {width: 150, height: 150}]}/>
        </View>
        <View style={[style.topContainer, {marginTop: 0, marginBottom: 30}]}>
          <ThemedText styleKey="highlightTextColor" style={[style.textStyle, {fontSize: 32, textTransform: 'capitalize'}]}>{constants.title}</ThemedText>
        </View>
      </ImageBackground>
      <View style={{flex:1, backgroundColor: theme.backgroundColor}}>
        <View style={[style.container, {backgroundColor: theme.backgroundColor, position: 'relative', bottom : 340, shadowOffset: { width: 0, height: 8 },shadowOpacity: 0.2,elevation: 6, marginLeft:50, marginRight: 50, borderRadius: 40, paddingBottom: 70}]}>
          <View style={[style.topContainer, {marginTop: 20}]}>
            <ThemedText styleKey="textColor" style={style.textStyle}>{constants.labelLogin}</ThemedText>
          </View>
          <View style={[style.searchContainer, { borderBottomColor: theme.textColor }]}>
            <View style={style.iconStyle}>
              <AntDesign name="user" size={15} color={theme.textColor} />
            </View>
            <View style={style.textContainer}>
              <TextInput
                placeholder={constants.userPlaceholder}
                placeholderTextColor={theme.textColor}
                style={{ color: theme.textColor, paddingBottom: isIOS() ? 0 : 7, height: isIOS() ? 15 : 35 }}
              />
            </View>
          </View>
          <View style={[style.searchContainer, { borderBottomColor: theme.textColor }]}>
            <View style={style.iconStyle}>
              <AntDesign name="key" size={15} color={theme.textColor} style={{transform: [{ rotate: '80deg' }]}} />
            </View>
            <View style={style.textContainer}>
              <TextInput
                placeholder={constants.passPlaceholder}
                placeholderTextColor={theme.textColor}
                style={{ color: theme.textColor, paddingBottom: isIOS() ? 0 : 7, height: isIOS() ? 15 : 35 }}
                secureTextEntry={true}
              />
            </View>
          </View>
          <ThemedText style={[style.forgotPassword, {fontWeight: 'bold', textAlign: 'right', alignSelf: 'flex-end'}]} styleKey="appColor">{constants.labelForget}</ThemedText>
          <RoundButton buttonStyle={{minWidth: 230, marginTop: 30}} label="Sign in" buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} onPress={goToHome} />
          <View style={style.childContainer}>
            <ThemedText style={style.forgotPassword} styleKey="textColor">{constants.labelCheckAcc}</ThemedText>
          </View>
        </View>
        <View style={{position: 'relative', bottom : 340,}}>
        <RoundButton buttonStyle={{minWidth: 300, marginTop: 30}} label="Sign in with" buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} onPress={goToHome} />
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
      </ScrollView>
    </View>
    </>
  )
};

export default Login;

interface Style {
  container: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  bottomContainer: ViewStyle;
  inputContainer: TextStyle;
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
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  inputLabel: {
    width: "100%",
    fontSize: 13
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
    fontSize: 12,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 15,
    borderBottomWidth: 2,
    fontSize: 16,
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: isIOS() ? 20 : 10,
    paddingBottom: isIOS() ? 10 : 0
  },
  iconStyle: {
    flex: 1,
    alignItems: "flex-start"
  }
});
