import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, Image, ImageStyle, ImageBackground } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import FooterNavigation from '../Footer/Index';

// @ts-ignore
const ImagePath = require("../../images/dual-tone.png");
const girl = require("../../images/girl.png");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Searching: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  return (
    <>
      <View style={style.mainContainer}>
        <ImageBackground source={ImagePath} style={style.imageStyle} >
          <View style={[style.topContainer, style.nexStyle]}>
            <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.specialText]}>{constants.searching}</ThemedText>
          </View>
          <View style={[style.childContainer]}>
            <ThemedText style={[style.forgotPassword, style.messageContent]} styleKey="highlightTextColor">{constants.nearby}</ThemedText>
          </View>
          <View style={style.bottomContainer}>
            <View style={style.bottomContent}>
                <View style={[style.childContainer, style.extraStyle]}>
                    <View style={style.outerContainer}>
                        <View style={style.iconContainer}>
                            <Image source={girl} style={style.logoImage}/>
                        </View>
                    </View>
                </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <FooterNavigation history={history} />    
    </>
  )
};

export default Searching;

interface Style {
  container: ViewStyle;
  mainContainer: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  bottomContainer: ViewStyle;
  forgotPassword: TextStyle;
  iconContainer: ViewStyle;
  outerContainer: ViewStyle;
  logoImage: ImageStyle;
  textStyle: TextStyle;
  nexStyle: ViewStyle;
  specialText: TextStyle;
  messageContent: TextStyle;
  imageStyle: ImageStyle;
  bottomContent: ViewStyle;
  extraStyle: ViewStyle;
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
  },
  bottomContainer: { 
    flex: 1, 
    alignItems: 'flex-start', 
    flexDirection: 'row'
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  forgotPassword: {
    marginBottom: 15,
    fontSize: 22,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 200,
    height: 200,
    borderRadius: 200,
    marginLeft: 35,
    backgroundColor: '#fc5660', 
    justifyContent: 'center',
  },
  outerContainer: {
    minWidth: 270,
    height: 270,
    borderRadius: 200,
    backgroundColor: '#fd9ca5', 
    marginTop: 70,
    marginBottom: 70,
    justifyContent: 'center',
  },
  logoImage: {
    justifyContent: 'center',
    width: 150, 
    height: 150,
    marginLeft: 25
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  nexStyle: {
    marginTop: 80, 
  },
  specialText: {
    fontSize: 40, 
  },
  imageStyle: {
    width: '100%', 
    height: '100%',
  },
  bottomContent: {
    flex: 1, 
    justifyContent: 'flex-start'
  },
  messageContent: {
    textAlign: "center", 
    paddingBottom: 20
  },
  extraStyle: {
    backgroundColor: '#ffbcc3', 
    borderRadius: 250, 
    marginLeft: 10, 
    marginRight: 10
  },
});
