import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, ImageBackground, Image, ImageStyle, TextStyle } from 'react-native';
import { Dispatch } from 'redux';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../../components/UI/ThemedText';
import RoundButton from '../../components/Base/RoundButton';

// @ts-ignore
const ImagePath = require("../../images/new-banner.jpg");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any,
}

const BaseHome: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const goToSignUp = () => {
    history.push('/signup')
  }

  const goToLogin = () => {
    history.push('/login')
  }

  return (
    <View style={style.mainContainer}>
      <ImageBackground source={ImagePath} style={style.imageStyle} >
        <View style={[style.topContainer, style.logoContainer]}> 
          <Image source={constants.recraftLogo} style={style.logoImage}/>
        </View>
        <View style={[style.topContainer, style.titleContainer]}> 
          <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.title]}>{constants.title}</ThemedText>
        </View>
        <View style={style.topContainer}> 
          <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{constants.welcome}</ThemedText>
        </View>
        <View style={style.rightContainer}> 
          <View style={style.sloganContainer}>
            <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.sloganStyle]}>{constants.slogan}</ThemedText>
          </View>
        </View>
        <View style={style.secondContainer}>
          <RoundButton buttonStyle={style.button} label="Login" buttonColor={theme.highlightTextColor} onPress={goToLogin} />
          <RoundButton buttonStyle={style.button} label="Sign Up" buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} onPress={goToSignUp} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default BaseHome;

interface Style {
  mainContainer : ViewStyle;
  container: ViewStyle;
  topContainer: ViewStyle;
  secondContainer: ViewStyle;
  rightContainer: ViewStyle;
  button: ViewStyle;
  sloganContainer: ViewStyle;
  sloganStyle: TextStyle;
  imageStyle: ImageStyle;
  logoImage: ImageStyle;
  logoContainer: ViewStyle;
  textStyle: TextStyle;
  title: TextStyle;
  titleContainer: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    fontSize: 16,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  logoImage: {
    justifyContent: 'center',
    width: 120, 
    height: 120,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    alignContent: 'flex-end',
    paddingRight: 30,
    paddingLeft: 40,
  },
  button: {
    marginTop: 10,
    minWidth: 270,
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  imageStyle: { 
    width: '100%', 
    height: '100%',
  },
  sloganContainer: {
    width: 245, 
    paddingTop: 50,
  },
  sloganStyle: {
    fontSize: 36, 
    textAlign: 'right'
  },
  title: {
    fontSize: 32
  },
  titleContainer: {
    paddingTop: 20
  },
  logoContainer: {
    paddingTop: 70
  },
});
