import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, Image, ImageStyle, ImageBackground, TouchableOpacity } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import useTheme from '../../hooks/useTheme';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterNavigation from '../Footer/Index';

// @ts-ignore
const ImagePath = require("../../images/dual-tone.png");
const search = require("../../images/search.png");
const profile1 = require("../../images/profile1.png");
const profile2 = require("../../images/profile2.png");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Nearby: React.FunctionComponent<Props> = ({
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
        <ImageBackground source={ImagePath} style={style.imageStyle}>
          <View style={style.backContainer}>
            <TouchableOpacity  onPress={backButton}>
              <View style={style.leftContainer}>
                <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
              </View>
            </TouchableOpacity>
            <View style={style.centerContainer}>
              <View style={style.childContainer}>
                <View style={style.leftContainer}>
                  <ThemedText style={style.leftStyle} styleKey="lightBottomColor">{constants.discover}</ThemedText>
                </View>
                <View style={[style.rightContainer, {paddingRight: 0,}]}>
                  <ThemedText style={style.rightStyle} styleKey="highlightTextColor">{constants.nearby}</ThemedText>
                </View>
              </View>
            </View>
            <View style={style.rightContainer}>
              <Image source={search} style={style.searchStyle}/>
            </View>
          </View>
          <View style={style.childContainer}>
            <View style={[style.leftContainer, {paddingRight: 10, }]}>
              <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
                <Image source={profile1} style={style.profileStyle}/>
                <ThemedText style={style.textStyle} styleKey="textColor">Aaron</ThemedText>
                <ThemedText style={style.smallStyle} styleKey="textColor">26, los angles</ThemedText>
              </View>
            </View>
            <View style={[style.rightContainer, {paddingRight: 0, paddingLeft: 10}]}>
              <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
                <Image source={profile2} style={style.profileStyle}/>
                <ThemedText style={style.textStyle} styleKey="textColor">Jennifer</ThemedText>
                <ThemedText style={style.smallStyle} styleKey="textColor">2.1 Washington (88)</ThemedText>
              </View>
            </View>
          </View>
          <View style={style.childContainer}>
            <View style={[style.leftContainer, {paddingRight: 10, }]}>
              <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
                <Image source={profile1} style={style.profileStyle}/>
                <ThemedText style={style.textStyle} styleKey="textColor">Aaron</ThemedText>
                <ThemedText style={style.smallStyle} styleKey="textColor">26, los angles</ThemedText>
              </View>
            </View>
            <View style={[style.rightContainer, {paddingRight: 0, paddingLeft: 10}]}>
              <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
                <Image source={profile2} style={style.profileStyle}/>
                <ThemedText style={style.textStyle} styleKey="textColor">Jennifer</ThemedText>
                <ThemedText style={style.smallStyle} styleKey="textColor">2.1 Washington (88)</ThemedText>
              </View>
            </View>
          </View>
        </ImageBackground>
        <FooterNavigation history={history} />    
      </View>
    </>
  )
};

export default Nearby;

interface Style {
  container: ViewStyle;
  mainContainer: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  centerContainer: ViewStyle;
  rightContainer: ViewStyle;
  backContainer: ViewStyle;
  backIcon: ViewStyle;
  textStyle: TextStyle;
  smallStyle: TextStyle;
  leftStyle: TextStyle;
  rightStyle: TextStyle;
  imageStyle: ImageStyle;
  searchStyle: ImageStyle;
  extraStyle: ViewStyle;
  profileStyle: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    fontSize: 16,
    justifyContent: "flex-start",
    alignItems: 'flex-start',
    borderRadius: 20,
    marginTop: 40
  },
  mainContainer: {
    flex: 1, 
    flexDirection:'column'
  },
  leftContainer: {
    flex: 0, 
    justifyContent: "flex-start",
  },
  rightContainer: {
    flex: 0, 
    justifyContent: "flex-end", 
    paddingRight: 20
  },
  centerContainer: {
    flex: 3, 
    justifyContent: "center", 
    paddingTop: 20
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 20,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  imageStyle: {
    width: '100%', 
    height: '100%',
  },
  searchStyle: {
    justifyContent: 'center',
    width: 20, 
    height: 20,
  },
  textStyle: {
    fontSize: 24, 
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 10
  },
  smallStyle: {
    fontSize: 14, 
    textAlign: 'center',
    alignSelf: 'center',
    paddingBottom: 15
  },
  leftStyle: {
    fontSize: 20, 
    textAlign: 'left', 
    paddingRight: 10, 
    fontWeight: 'bold'
  },
  rightStyle: {
    fontSize: 20, 
    textAlign: 'right', 
    textDecorationLine: "underline", 
    fontWeight: 'bold', 
    paddingLeft: 10
  },
  extraStyle: {
    marginLeft: 30, 
    marginRight: 30,  
    borderRadius: 40, 
    paddingBottom: 40,
    height: 200
  },
  profileStyle: {
    width: 180, 
    height: 220, 
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20
  }
});
