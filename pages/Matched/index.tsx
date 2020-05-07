import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, Image, ImageStyle, ImageBackground, ScrollView } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/useTheme';
import FooterNavigation from '../Footer/Index';

// @ts-ignore
const ImagePath = require("../../images/gender.png");
const girl = require("../../images/new-girl.jpg");
const boy = require("../../images/new-boy.jpg");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Matched: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/matching')
  }

  const goToSearching = () => {
    history.push('/searching')
  }

  const goToCalling = () => {
    history.push('/calling')
  }

  return (
    <View style={style.mainContainer}>
      <ScrollView>
        <ImageBackground source={ImagePath} style={style.imageStyle} >
          <TouchableOpacity style={style.backContainer} onPress={backButton}>
            <View style={style.leftContainer}>
              <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
            </View>
            <View style={style.rightContainer}>
              <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{constants.backText}</ThemedText>
            </View>
          </TouchableOpacity>
          <View style={[style.topContainer, style.nexStyle]}>
            <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.specialText]}>{constants.matched}</ThemedText>
          </View>
          <View style={style.bottomContainer}>
            <View style={style.bottomContent}>
                <View style={style.childContainer}>
                    <View style={[style.iconContainer, style.leftMatchContainer]}>
                        <Image source={girl} style={style.logoImage}/>
                    </View>
                    <View style={[style.iconContainer, style.rightMatchContainer]}>
                        <Image source={boy} style={style.logoImage}/>
                    </View>
                </View>
            </View>
          </View>
          <View style={style.childContainer}>
            <ThemedText style={[style.forgotPassword, style.messageContent]} styleKey="highlightTextColor">{constants.matchText}</ThemedText>
          </View>
        </ImageBackground>
        <RoundButton buttonStyle={style.inputLabel} label={constants.message} buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} onPress={goToSearching}/>
        <RoundButton buttonStyle={[style.inputLabel, style.title]} label={constants.gifts} buttonColor={theme.backgroundColor} labelStyle={theme.appColor} onPress={goToCalling}/>
      </ScrollView>
      <FooterNavigation history={history} /> 
    </View>
  )
};

export default Matched;

interface Style {
  container: ViewStyle;
  mainContainer: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  bottomContainer: ViewStyle;
  leftMatchContainer: ViewStyle;
  backContainer: ViewStyle;
  inputLabel: ViewStyle;
  forgotPassword: TextStyle;
  title: ViewStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  backIcon: ViewStyle;
  logoImage: ImageStyle;
  textStyle: TextStyle;
  rightMatchContainer: ViewStyle;
  nexStyle: ViewStyle;
  specialText: TextStyle;
  messageContent: TextStyle;
  imageStyle: ImageStyle;
  bottomContent: ViewStyle;
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
    alignItems: 'flex-start', 
    flexDirection: 'row'
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    paddingLeft: 20
  },
  inputLabel: {
    minWidth: 230,
    paddingTop: 20,
    minHeight: 60,
    marginTop: 40,
    borderRadius: 50,
    marginBottom: 30,
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
  leftMatchContainer: { 
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    position: 'relative', 
    left: 15,
  },
  title: {
    marginTop: 10,
    marginBottom: 100
  },
  iconContainer: {
    minWidth: 190,
    height: 190,
    borderRadius: 150,
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
    width: 130, 
    height: 130,
    margin: 32,
    borderRadius: 130
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  rightMatchContainer: { 
    backgroundColor: 'rgba(255, 255, 255, 0.3)', 
    position: 'relative', 
    right: 15,
  },
  nexStyle: {
    marginTop: 80, 
    marginBottom: 30
  },
  specialText: {
    fontSize: 32, 
  },
  imageStyle: {
    width: '100%', 
    height: 480,
  },
  bottomContent: {
    flex: 1, 
    justifyContent: 'flex-start'
  },
  messageContent: {
    width: 170, 
    fontWeight: "bold", 
    textAlign: "center", 
    paddingBottom: 20
  },
});
