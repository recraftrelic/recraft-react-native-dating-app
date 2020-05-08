import React from 'react';
import { RouteComponentProps } from 'react-router-native';
import { View, ViewStyle, StyleSheet, ImageBackground, Image, ImageStyle, TextStyle, TouchableOpacity } from 'react-native';
import { Dispatch } from 'redux';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useConstants from '../../hooks/useConstants';
import useTheme from "../../hooks/useTheme";
import ThemedText from '../../components/UI/ThemedText';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ions from 'react-native-vector-icons/Ionicons';

// @ts-ignore
const ImagePath = require("../../images/video-bg.jpg");
const person = require("../../images/main-call.jpg");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any,
}

const VideoCall: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/calling')
  }

  return (
    <View style={style.mainContainer}>
      <ImageBackground source={ImagePath} style={style.imageStyle} >
        <TouchableOpacity style={style.backContainer} onPress={backButton}>
          <View style={style.leftContainer}>
            <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
          </View>
        </TouchableOpacity>
        <View style={[style.topContainer, style.titleContainer]}> 
          <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.title]}>Josephina</ThemedText>
        </View>
        <View style={style.topContainer}> 
          <ThemedText styleKey="highlightTextColor" style={style.textStyle}>05:53</ThemedText>
        </View>
        <View style={style.bottomContainer}>
          <View style={style.bottomContent}>
            <View style={style.childContainer}>
              <View style={style.iconContainer}>
                <TouchableOpacity>
                  <Ions name="md-call" size={50} color={theme.highlightTextColor}/>
                </TouchableOpacity>
              </View>
              <View style={[style.iconContainer, style.extraStyle]}>
                <TouchableOpacity>
                  <Ions name="md-close" size={50} color={theme.highlightTextColor}/>
                </TouchableOpacity>
              </View>
              <View style={style.iconContainer}>
                <TouchableOpacity>
                  <Ions name="md-camera" size={50} color={theme.highlightTextColor}/>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={style.specialStyle}>
          <Image source={person} style={style.logoImage}/>
        </View>
      </ImageBackground>
    </View>
  );
};

export default VideoCall;

interface Style {
  mainContainer : ViewStyle;
  topContainer: ViewStyle;
  leftContainer: ViewStyle;
  backContainer: ViewStyle;
  backIcon: ViewStyle;
  imageStyle: ImageStyle;
  logoImage: ImageStyle;
  textStyle: TextStyle;
  title: TextStyle;
  titleContainer: ViewStyle;
  bottomContainer: ViewStyle;
  bottomContent: ViewStyle;
  childContainer: ViewStyle;
  iconContainer: ViewStyle;
  extraStyle: ViewStyle;
  specialStyle: ViewStyle;
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
  logoImage: {
    justifyContent: 'center',
    width: 100, 
    height: 150,
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between",
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    paddingLeft: 50,
    paddingRight: 50,
  },
  leftContainer: {
    flex: 0, 
    justifyContent: "flex-start",
  },
  textStyle: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
  imageStyle: { 
    width: '100%', 
    height: '100%',
  },
  title: {
    fontSize: 40,
    paddingBottom: 10
  },
  titleContainer: {
    paddingTop: 70
  },
  bottomContent: {
    flex: 1, 
    justifyContent: 'flex-end',
  },
  iconContainer: {
    margin: 12,
    minWidth: 100,
    height: 100,
    borderRadius: 100,
    padding: 25,
    paddingLeft: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  bottomContainer: { 
    alignItems: 'flex-end', 
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 40
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: "center",
  },
  extraStyle: {
    paddingLeft: 35
  },
  specialStyle: {
    position: 'absolute', 
    bottom: 200, 
    right: 50
  },
});
