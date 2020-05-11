import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, Image, ImageStyle, ImageBackground, TouchableOpacity } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import Ions from 'react-native-vector-icons/Ionicons';

// @ts-ignore
const ImagePath = require("../../images/payment.png");
const cross = require("../../images/cross.png");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Payment: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/premium')
  }

  return (
    <>
      <View style={style.mainContainer}>
        <TouchableOpacity style={style.nexStyle} onPress={backButton}>
          <Image source={cross} style={style.logoStyle}/>
        </TouchableOpacity>
        <ImageBackground source={ImagePath} style={style.imageStyle} >
          <View style={[style.topContainer, style.extraStyle, {backgroundColor: theme.backgroundColor }]}>
            <ThemedText styleKey="textColor" style={style.specialText}>{constants.paymentDone}</ThemedText>
            <Ions name="ios-checkmark-circle" size={120} color={theme.successColor} style={{marginTop: 20}}/>
            <View style={style.backContainer}>
              <View style={style.leftContainer}>
                <ThemedText styleKey="profileTextColor" style={style.textStyle}>Sent Sucessfully by </ThemedText>
              </View>
              <View style={style.leftContainer}>
                <ThemedText styleKey="textColor" style={style.textStyle}>Brice Seraphin</ThemedText>
              </View>
            </View>
            <ThemedText styleKey="successColor" style={style.forgotPassword}>$49.99.00</ThemedText>
            <View style={style.backContainer}>
              <View style={style.leftContainer}>
                <ThemedText styleKey="profileTextColor" style={style.textStyle}>Transtition done on </ThemedText>
              </View>
              <View style={style.leftContainer}>
                <ThemedText styleKey="textColor" style={style.textStyle}>12 Janurary 2020</ThemedText>
              </View>
            </View>
            <View style={style.backContainer}>
              <View style={style.leftContainer}>
                <ThemedText styleKey="profileTextColor" style={style.textStyle}>Your Transtition Id is </ThemedText>
              </View>
              <View style={style.leftContainer}>
                <ThemedText styleKey="textColor" style={style.textStyle}>23841265540</ThemedText>
              </View>
            </View>
          </View>
        </ImageBackground>  
      </View>
    </>
  )
};

export default Payment;

interface Style {
  mainContainer: ViewStyle;
  topContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  backContainer: ViewStyle;
  forgotPassword: TextStyle;
  textStyle: TextStyle;
  specialText: TextStyle;
  imageStyle: ImageStyle;
  logoStyle: ImageStyle;
  extraStyle: ViewStyle;
  nexStyle: ViewStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    flex: 1, 
    flexDirection:'column'
  },
  topContainer: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
    backgroundColor: 'transparent',
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingTop: 50
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between",
    marginBottom: 20
  },
  leftContainer: {
    flex: 0, 
    justifyContent: "flex-start",
  },
  rightContainer: {
    flex: 0, 
    justifyContent: "flex-end", 
  },
  forgotPassword: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 30
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  specialText: {
    fontSize: 32, 
    fontWeight: '500',
  },
  imageStyle: {
    width: '100%', 
    height: '100%',
  },
  extraStyle: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    elevation: 6, 
    marginLeft: 25, 
    marginRight: 25, 
    marginTop: 80,
    marginBottom: 80,
    borderRadius: 40, 
  },
  logoStyle: {
    width: 70, 
    height: 70
  },
  nexStyle: {
    position: 'absolute', 
    top: 70, 
    right: 15, 
    zIndex: 9999999
  }
});
