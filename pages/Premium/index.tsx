import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, Image, ImageStyle, ImageBackground, ScrollView, } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/useTheme';

// @ts-ignore
const ImagePath = require("../../images/gender.png");
const forget = require("../../images/premium.png");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Premium: React.FunctionComponent<Props> = ({
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
        <ImageBackground source={ImagePath} style={style.imageStyle} >
          <TouchableOpacity style={style.backContainer} onPress={backButton}>
            <View style={style.leftContainer}>
              <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
            </View>
          </TouchableOpacity>
          <View style={[style.topContainer, style.extraStyle]}>
            <View style={[style.forgetContainer, {backgroundColor: theme.backgroundColor}]}>
              <Image source={forget} style={style.logoImage}/>
            </View>
          </View>
          <View style={[style.topContainer, style.nexStyle]}>
            <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.specialText]}>{constants.premium}</ThemedText>
          </View>
        </ImageBackground>
        <ScrollView>
        <View style={[style.extraStyle, style.title]}>
          <View style={style.childContainer}>
            <View style={style.listContainer}>
              <View style={[style.listStyle, {backgroundColor: theme.appColor}]}>
                <ThemedText styleKey="appColor" style={style.Icon}>{'\u2022' + " "}</ThemedText>
              </View>
              <View style={style.bottomContent}>
                <ThemedText styleKey="premiumColor" style={style.iconStyle}>Unlimted Swipes</ThemedText>
              </View>
            </View>
          </View>
          <View style={style.childContainer}>
            <View style={style.listContainer}>
              <View style={[style.listStyle, {backgroundColor: theme.appColor}]}>
                <ThemedText styleKey="appColor" style={style.Icon}>{'\u2022' + " "}</ThemedText>
              </View>
              <View style={style.bottomContent}>
                <ThemedText styleKey="premiumColor" style={style.iconStyle}>No Ads</ThemedText>
              </View>
            </View>
          </View>
          <View style={style.childContainer}>
            <View style={style.listContainer}>
              <View style={[style.listStyle, {backgroundColor: theme.appColor}]}>
                <ThemedText styleKey="appColor" style={style.Icon}>{'\u2022' + " "}</ThemedText>
              </View>
              <View style={style.bottomContent}>
                <ThemedText styleKey="premiumColor" style={style.iconStyle}>See who likes you</ThemedText>
              </View>
            </View>
          </View>
          <View style={style.childContainer}>
            <View style={style.listContainer}>
              <View style={[style.listStyle, {backgroundColor: theme.appColor}]}>
                <ThemedText styleKey="appColor" style={style.Icon}>{'\u2022' + " "}</ThemedText>
              </View>
              <View style={style.bottomContent}>
                <ThemedText styleKey="premiumColor" style={style.iconStyle}>See who visit you</ThemedText>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity>
          <View style={[style.nexContainer, style.inputLabel, { backgroundColor: theme.appColor }]}>
            <View style={style.iconContainer}>
              <ThemedText styleKey="textColor" style={[style.textStyle, style.forgotPassword, {color: theme.highlightTextColor}]}>{constants.activatePremium}</ThemedText>
              <ThemedText styleKey="textColor" style={[style.textStyle, {color: theme.highlightTextColor}]}>{constants.perMonth}</ThemedText>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[style.nexContainer, style.inputLabel, { backgroundColor: theme.appColor }]}>
            <View style={style.iconContainer}>
              <ThemedText styleKey="textColor" style={[style.textStyle, style.forgotPassword, {color: theme.highlightTextColor}]}>{constants.activateYearly}</ThemedText>
              <ThemedText styleKey="textColor" style={[style.textStyle, {color: theme.highlightTextColor}]}>{constants.perYear}</ThemedText>
            </View>
          </View>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  )
};

export default Premium;

interface Style {
  mainContainer: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  forgetContainer: ViewStyle;
  backContainer: ViewStyle;
  inputLabel: ViewStyle;
  forgotPassword: TextStyle;
  title: ViewStyle;
  Icon: TextStyle;
  iconStyle: TextStyle;
  iconContainer: ViewStyle;
  backIcon: ViewStyle;
  logoImage: ImageStyle;
  textStyle: TextStyle;
  extraStyle: ViewStyle;
  nexStyle: ViewStyle;
  specialText: TextStyle;
  imageStyle: ImageStyle;
  bottomContent: ViewStyle;
  nexContainer: ViewStyle;
  listContainer: ViewStyle;
  listStyle: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
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
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    paddingLeft: 20
  },
  inputLabel: {
    minWidth: 270, 
    height: 70,
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
  forgotPassword: {
    fontSize: 26
  },
  forgetContainer: {
    width: 120, 
    height: 120, 
    alignContent: 'center', 
    justifyContent: 'center', 
    borderRadius: 120,
  },
  title: {
    marginBottom: 70
  },
  iconContainer: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignContent: 'center', 
    alignItems: 'center'
  },
  Icon: {
    fontSize: 12
  },
  iconStyle: {
    fontSize: 22
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  logoImage: {
    justifyContent: 'center',
    width: 120, 
    height: 120,
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  extraStyle: {
    marginTop: 80, 
    marginBottom: 10
  },
  nexStyle: {
    marginTop: 0, 
    marginBottom: 30
  },
  specialText: {
    fontSize: 40, 
    textTransform: 'capitalize'
  },
  imageStyle: {
    width: '100%', 
    height: 350,
  },
  bottomContent: {
    flex: 1, 
  },
  nexContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: "center",
    borderRadius: 50,
    minWidth: 30,
    height: 45,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginLeft: 80,
  },
  listStyle: {
    width: 15, 
    marginRight: 30, 
    borderRadius: 50,
  }
});
