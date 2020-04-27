import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, ImageBackground, Image } from 'react-native';
import { connect } from "react-redux";
import { setThemeAction } from '../../store/reducers/config';
import { Dispatch } from 'redux';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../../components/UI/ThemedText';
import RoundButton from '../../components/Base/RoundButton';
import Button from '../../components/Base/ButtonItem';

// @ts-ignore
const ImagePath = require("../../images/main-banner.jpg");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any,
}

const BaseHome: React.FunctionComponent<Props> = ({
  dispatch,
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
      <ImageBackground source={ImagePath} style={{ width: '100%', height: '100%' }} >
        <View style={[style.topContainer,{paddingTop: 70}]}> 
          <Image source={constants.recraftLogo} style={[style.logoImage ,{width: 120, height: 120}]}/>
        </View>
        <View style={[style.topContainer,{paddingTop: 20}]}> 
          <ThemedText styleKey="highlightTextColor" style={[style.textStyle, {fontSize: 32}]}>{constants.title}</ThemedText>
        </View>
        <View style={style.topContainer}> 
          <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{constants.welcome}</ThemedText>
        </View>
        <View style={style.rightContainer}> 
          <View style={{width: 270, paddingTop: 50, paddingRight: 60}}>
            <ThemedText styleKey="highlightTextColor" style={[style.textStyle, {fontSize: 36, textAlign: 'right'}]}>{constants.slogan}</ThemedText>
          </View>
        </View>
        <View style={style.secondContainer}>
          <RoundButton buttonStyle={style.button} label="Login" buttonColor={theme.backgroundColor} onPress={goToLogin} />
          <RoundButton buttonStyle={style.button} label="Sign Up" buttonColor={theme.appColor} onPress={goToSignUp} labelStyle={theme.highlightTextColor} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default connect(({ dispatch}) => ({ dispatch }))(BaseHome);

interface Style {
  mainContainer : ViewStyle;
  container: ViewStyle;
  topContainer: ViewStyle;
  secondContainer: ViewStyle;
  rightContainer: ViewStyle;
  button: ViewStyle;
  logoImage: ViewStyle;
  textStyle: TextStyle;
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
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  button: {
    marginTop: 10,
    minWidth: 300,
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  }
});
