import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, Image, ImageStyle, ImageBackground, ScrollView, TextInput, Platform } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/useTheme';

const isIOS = (): Boolean => Platform.OS == "ios";

// @ts-ignore
const ImagePath = require("../../images/profile.png");
const card = require("../../images/new-card.png");


interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const NewCard: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const [selected,setSelected] = useState<Boolean>(false);

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
          <View style={[style.rightContainer, {alignItems: 'center'}]}>
            <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.specialText]}>{constants.newCard}</ThemedText>
          </View>
        </View>
        <View style={[style.backContainer, style.extraStyle]}>
          <View style={[style.rightContainer, style.extraContainer]}>
            <Image source={card} style={style.styleImage}/>
          </View>
        </View>
      </ImageBackground>
      <ScrollView>
      <View style={[style.backContainer, style.extraStyle]}>
        <View style={[style.rightContainer, style.extraContainer]}>
          <ThemedText styleKey="textColor" style={[style.textStyle, style.labelStyle]}>Card Number</ThemedText>
          <TextInput placeholder="2365   5225   5255   52522" placeholderTextColor={theme.textColor} style={[style.textContainer, { color: theme.textColor, backgroundColor: theme.profileColor }]} />
        </View>
      </View>
      <View style={[style.backContainer, style.extraStyle]}>
        <View style={[style.rightContainer, style.extraContainer]}>
          <ThemedText styleKey="textColor" style={[style.textStyle, style.labelStyle]}>Expiry Date</ThemedText>
          <TextInput placeholder="06/2020" placeholderTextColor={theme.textColor} style={[style.textContainer, { color: theme.textColor, backgroundColor: theme.profileColor }]} />
        </View>
        <View style={[style.rightContainer, style.extraContainer]}>
          <ThemedText styleKey="textColor" style={[style.textStyle, style.labelStyle]}>CVV</ThemedText>
          <TextInput placeholder="563" placeholderTextColor={theme.textColor} style={[style.textContainer, { color: theme.textColor, backgroundColor: theme.profileColor }]} />
        </View>
      </View>
      <View style={[style.backContainer, style.extraStyle]}>
        <View style={[style.rightContainer, style.extraContainer]}>
          <ThemedText styleKey="textColor" style={[style.textStyle, style.labelStyle]}>Name</ThemedText>
          <TextInput placeholder="Delbert Shibata" placeholderTextColor={theme.textColor} style={[style.textContainer, { color: theme.textColor, backgroundColor: theme.profileColor }]} />
        </View>
      </View>
      <View style={[style.backContainer, style.extraStyle]}>
        <View style={[style.leftContainer, {marginLeft: 20}]}>
            <TouchableOpacity onPress={() => {setSelected(!selected)}}>
                <MaterialIcon name={selected ? "checkbox-marked" : "checkbox-blank-outline"} size={15} color={selected ? theme.appColor: theme.textColor} style={{paddingTop: isIOS() ? 2 : 3}}/>
            </TouchableOpacity>
        </View>
            <View style={[style.rightContainer, style.extraContainer]}>
                <ThemedText styleKey="textColor" style={[style.textStyle, style.labelStyle]}>{constants.saveCard}</ThemedText>
            </View>
      </View>
      <RoundButton buttonStyle={style.inputLabel} label="Add Card" buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} />
      </ScrollView>
    </View>
  )
};

export default NewCard;

interface Style {
  mainContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  backContainer: ViewStyle;
  inputLabel: ViewStyle;
  backIcon: ViewStyle;
  extraStyle: ViewStyle;
  extraContainer: ViewStyle;
  textContainer: ViewStyle;
  textStyle: TextStyle;
  specialText: TextStyle;
  labelStyle: TextStyle;
  imageStyle: ImageStyle;
  styleImage: ImageStyle;
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
    minWidth: 230,
    paddingTop: 20,
    minHeight: 60,
    marginTop: 20,
    borderRadius: 50,
    marginBottom: 30,
  },
  leftContainer: {
    flex: 0, 
    justifyContent: "flex-start",
  },
  rightContainer: {
    flex: 3, 
    justifyContent: "center", 
    alignItems: 'flex-start',
    paddingTop: 17, 
    marginRight: 50,
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  extraStyle: {
    marginTop: 40,
    marginLeft: 25,
    marginRight: 25,
  },
  extraContainer: {
    paddingTop: 0, 
    marginRight: 0,
    alignItems: 'center',
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
  labelStyle: {
    marginBottom: 10, 
    alignSelf: 'flex-start', 
    marginLeft: 20
  },
  imageStyle: {
    width: '100%', 
    height: 250,
    marginBottom: 30
  },
  styleImage: {
    justifyContent: 'center',
    width: 350, 
    height: 190,
  },
  textContainer: {
    height: 45,
    width: '90%',
    paddingLeft: isIOS() ? 17 : 20, 
    paddingRight: isIOS() ? 17 : 20, 
    fontSize: 18,
    marginLeft: 20,
    alignSelf: 'flex-start'
  },
});
