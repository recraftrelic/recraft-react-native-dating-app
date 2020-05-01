import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, Image, ImageStyle, ImageBackground } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/useTheme';

// @ts-ignore
const ImagePath = require("../../images/gender.png");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Gender: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/login')
  }

  const goToMatching = () => {
    history.push('/matching')
  }

  return (
    <>
      <View style={style.mainContainer}>
        <ImageBackground source={ImagePath} style={style.imageStyle} >
          <TouchableOpacity style={style.backContainer} onPress={backButton}>
            <View style={style.leftContainer}>
              <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
            </View>
          </TouchableOpacity>
          <View style={[style.topContainer, style.nexStyle]}>
            <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.specialText]}>{constants.GenderText}</ThemedText>
          </View>
          <View style={style.childContainer}>
            <ThemedText style={style.forgotPassword} styleKey="highlightTextColor">{constants.selectGender}</ThemedText>
          </View>
        </ImageBackground>
      </View>
      <View style={style.bottomContainer}>
        <View style={style.bottomContent}>
          <View style={style.childContainer}>
            <TouchableOpacity>
              <View style={[style.iconContainer, { backgroundColor: 'purple' }]}>
                <MaterialIcon name="gender-male" size={50} color={theme.highlightTextColor} style={style.Icon} />
              </View>
              <ThemedText style={style.genderStyle} styleKey="textColor">Male</ThemedText>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[style.iconContainer, { backgroundColor: theme.googleColor }]}>
                <MaterialIcon name="gender-female" size={50} color={theme.highlightTextColor} style={style.Icon} />
              </View>
              <ThemedText style={style.genderStyle} styleKey="textColor">Female</ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <RoundButton buttonStyle={style.inputLabel} label="Next" buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} onPress={goToMatching}/>
    </>
  )
};

export default Gender;

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
  inputLabel: ViewStyle;
  forgotPassword: TextStyle;
  genderStyle: TextStyle;
  title: ViewStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  backIcon: ViewStyle;
  logoImage: ImageStyle;
  textStyle: TextStyle;
  extraStyle: ViewStyle;
  nexStyle: ViewStyle;
  specialText: TextStyle;
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
  },
  bottomContainer: { 
    flex: 1, 
    alignItems: 'flex-start', 
    flexDirection: 'row',
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between",
  },
  inputLabel: {
    minWidth: 230,
    paddingTop: 20,
    minHeight: 60,
    marginTop: 0,
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
    fontSize: 20,
    fontWeight:'bold',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  genderStyle: {
    fontSize: 18,
    fontWeight:'bold',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
    marginTop: 10
  },
  iconContainer: {
    margin: 12,
    minWidth: 80,
    height: 80,
    borderRadius: 50,
    padding: 15
  },
  Icon: {
    justifyContent: "center",
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  logoImage: {
    justifyContent: 'center',
    width: 80, 
    height: 80,
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  extraStyle: {
    marginTop: 120, 
    marginBottom: 10
  },
  nexStyle: {
    marginTop: 100, 
    marginBottom: 5,
  },
  specialText: {
    fontSize: 36, 
    textTransform: 'capitalize'
  },
  imageStyle: {
    width: '100%', 
    height: 300,
  },
  bottomContent: {
    flex: 1, 
    justifyContent: 'flex-end',
    marginTop: 50,
  },
});
