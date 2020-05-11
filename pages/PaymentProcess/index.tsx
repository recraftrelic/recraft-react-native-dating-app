import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, Image, ImageStyle, ImageBackground, ScrollView } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import useTheme from '../../hooks/useTheme';

// @ts-ignore
const ImagePath = require("../../images/profile.png");
const add = require("../../images/add-btn.png");
const card = require("../../images/card.png");
const pay = require("../../images/paytm.png");


interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const PaymentProcess: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/premium')
  }

  return (
    <View style={style.mainContainer}>
      <ImageBackground source={ImagePath} style={style.imageStyle} >
        <View style={style.backContainer}>
          <TouchableOpacity onPress={backButton}>
            <View style={style.leftContainer}>
              <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
            </View>
          </TouchableOpacity>
          <View style={style.rightContainer}>
            <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.specialText]}>{constants.payment}</ThemedText>
          </View>
        </View>
        <View style={[style.backContainer, style.extraStyle]}>
          <View style={style.leftContainer}>
            <Image source={add} style={style.logoImage}/>
            <MaterialIcon name="plus" size={30} color={theme.textColor} style={style.nexStyle}/>
          </View>
          <View style={[style.rightContainer, style.extraContainer]}>
            <Image source={card} style={style.styleImage}/>
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
      <TouchableOpacity style={style.backContainer}>
        <View style={style.leftContainer}>
          <Icon name="credit-card-alt" size={30} color={theme.textColor} style={style.backIcon}/>
        </View>
        <View style={style.rightContainer}>
          <ThemedText styleKey="textColor" style={[style.textStyle, style.contentText]}>Credit/Debit Card</ThemedText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={style.backContainer}>
        <View style={style.leftContainer}>
          <Icon name="google-wallet" size={30} color={theme.textColor} style={style.backIcon}/>
        </View>
        <View style={style.rightContainer}>
          <ThemedText styleKey="textColor" style={[style.textStyle, style.extraText]}>Google wallet</ThemedText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={style.backContainer}>
        <View style={style.leftContainer}>
          <Icon name="amazon" size={30} color={theme.textColor} style={style.backIcon}/>
        </View>
        <View style={style.rightContainer}>
          <ThemedText styleKey="textColor" style={[style.textStyle, style.extraText]}>Amazon Pay</ThemedText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={style.backContainer}>
        <View style={style.leftContainer}>
          <Image source={pay} style={style.newImage}/>
        </View>
        <View style={style.rightContainer}>
          <ThemedText styleKey="textColor" style={[style.textStyle, style.contentText]}>Paytm</ThemedText>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={style.backContainer}>
        <View style={style.leftContainer}>
          <Icon name="paypal" size={30} color={theme.textColor} style={[style.backIcon, {marginLeft: 5}]}/>
        </View>
        <View style={style.rightContainer}>
          <ThemedText styleKey="textColor" style={[style.textStyle, style.extraText]}>Pay Pal</ThemedText>
        </View>
      </TouchableOpacity>
      <RoundButton buttonStyle={style.inputLabel} label="Pay" buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} />
      </ScrollView>
    </View>
  )
};

export default PaymentProcess;

interface Style {
  mainContainer: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  backContainer: ViewStyle;
  inputLabel: ViewStyle;
  backIcon: ViewStyle;
  extraStyle: ViewStyle;
  extraContainer: ViewStyle;
  nexStyle: TextStyle;
  textStyle: TextStyle;
  specialText: TextStyle;
  contentText: TextStyle;
  extraText: TextStyle;
  imageStyle: ImageStyle;
  logoImage: ImageStyle;
  styleImage: ImageStyle;
  newImage: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    flex: 1, 
    flexDirection:'column'
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between",
  },
  inputLabel: {
    minWidth: 150,
    paddingTop: 20,
    minHeight: 60,
    marginTop: 80,
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
    marginRight: 50,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  extraStyle: {
    marginTop: 80,
    marginLeft: 25,
    marginRight: 25,
  },
  extraContainer: {
    paddingTop: 0, 
    paddingLeft: 15
  },
  nexStyle: {
    position: 'absolute', 
    left: 25, 
    top: 80
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  specialText: {
    fontSize: 24, 
    textTransform: 'capitalize',
    textAlign: 'center'
  },
  contentText: {
    fontSize: 20,
    paddingLeft: 15
  },
  extraText: {
    fontSize: 20,
    paddingLeft: 22
  },
  imageStyle: {
    width: '100%', 
    height: 250,
    marginBottom: 120
  },
  logoImage: {
    justifyContent: 'center',
    width: 80, 
    height: 180,
  },
  styleImage: {
    justifyContent: 'center',
    width: 280, 
    height: 180,
  },
  newImage: {
    marginLeft: 25, 
    marginTop: 20,
  }
});
