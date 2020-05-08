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
const ImagePath = require("../../images/profile.png");
const girl = require("../../images/new-profile.jpg");
const chat = require("../../images/message.png");
const image = require("../../images/images.png");
const logout = require("../../images/logout.png");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Profile: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const backButton = () => {
    history.push('/matching')
  }

  const goToEditProfile = () => {
    history.push('/edit')
  }

  const goToPremium = () => {
    history.push('/premium')
  }

  return (
    <>
      <View style={style.mainContainer}>
        <ImageBackground source={ImagePath} style={style.imageStyle}>
          <View style={style.backContainer}>
            <TouchableOpacity onPress={backButton}>
              <View style={style.leftContainer}>
                <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
              </View>
            </TouchableOpacity>
            <View style={style.centerContainer}>
              <View style={style.childContainer}>
                  <ThemedText style={style.specialText} styleKey="highlightTextColor">{constants.profile}</ThemedText>
              </View>
            </View>
          </View>
          <View style={style.childContainer}>
            <Image source={girl} style={[style.logoImage, {borderColor: theme.backgroundColor}]}/>
          </View>
        </ImageBackground>
        <View style={[style.childContainer, style.nexStyle]}>
          <RoundButton buttonStyle={style.inputLabel} label={constants.editProfile} buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} onPress={goToEditProfile}/>
        </View>
        <ScrollView>
          <TouchableOpacity style={[style.backContainer, style.title]} onPress={backButton}>
            <View style={style.leftContainer}>
                <Icon name="home" size={30} color={theme.inputColor} style={style.backIcon}/>
            </View>
            <View style={style.rightContainer}>
                <ThemedText styleKey="inputColor" style={style.textStyle}>Home</ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[style.backContainer, style.title]} onPress={goToPremium}>
            <View style={style.leftContainer}>
                <MaterialIcon name="search-web" size={30} color={theme.inputColor} style={style.backIcon}/>
            </View>
            <View style={style.rightContainer}>
                <ThemedText styleKey="inputColor" style={style.textStyle}>Explore</ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[style.backContainer, style.title]} >
            <View style={style.leftContainer}>
                <MaterialIcon name="gender-female" size={30} color={theme.inputColor} style={style.backIcon} />
            </View>
            <View style={style.rightContainer}>
                <ThemedText styleKey="inputColor" style={style.textStyle}>Matches</ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[style.backContainer, style.title]} >
            <View style={style.leftContainer}>
                <Image source={chat} style={style.iconImage}/>
            </View>
            <View style={style.rightContainer}>
                <ThemedText styleKey="inputColor" style={style.textStyle}>Chat</ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[style.backContainer, style.title]} >
            <View style={style.leftContainer}>
                <Image source={image} style={style.iconImage}/>
            </View>
            <View style={style.rightContainer}>
                <ThemedText styleKey="inputColor" style={style.textStyle}>Images</ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[style.backContainer, style.title]} >
            <View style={style.leftContainer}>
                <Icon name="play-circle" size={30} color={theme.inputColor} style={[style.backIcon, style.Icon]}/>
            </View>
            <View style={style.rightContainer}>
                <ThemedText styleKey="inputColor" style={style.textStyle}>Video</ThemedText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={[style.backContainer, style.title, style.extraStyle]} >
            <View style={style.leftContainer}>
                <Image source={logout} style={style.iconImage}/>
            </View>
            <View style={style.rightContainer}>
                <ThemedText styleKey="inputColor" style={style.textStyle}>Sign Out</ThemedText>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <FooterNavigation history={history} />
      </View>
    </>
  )
};

export default Profile;

interface Style {
  mainContainer: ViewStyle;
  childContainer: ViewStyle;
  centerContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  backContainer: ViewStyle;
  inputLabel: ViewStyle;
  title: ViewStyle;
  Icon: TextStyle;
  backIcon: ViewStyle;
  logoImage: ImageStyle;
  textStyle: TextStyle;
  extraStyle: ViewStyle;
  nexStyle: ViewStyle;
  specialText: TextStyle;
  imageStyle: ImageStyle;
  iconImage: ImageStyle;
}

const style: Style = StyleSheet.create<Style>({
  mainContainer: {
    flex: 1, 
    flexDirection:'column'
  },
  centerContainer: {
    flex: 1, 
    justifyContent: "center", 
    paddingTop: 20,
    paddingRight: 50,
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between",
  },
  inputLabel: {
    minWidth: 200,
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
  title: {
    marginLeft: 30, 
    marginRight: 50,
    paddingBottom: 10
  },
  Icon: {
    paddingLeft: 30
  },
  backIcon: {
    fontSize: 25,
    paddingTop: 20,
    paddingLeft: 25,
  },
  logoImage: {
    justifyContent: 'center',
    width: 200, 
    height: 200,
    borderWidth: 5,
    borderRadius: 150,
    marginTop: 70,
  },
  textStyle: {
    fontSize: 22, 
    fontWeight: 'bold',
    paddingLeft: 10
  },
  extraStyle: {
    paddingBottom: 70
  },
  nexStyle: {
    marginTop: 100
  },
  specialText: {
    fontSize: 22,
    fontWeight: 'bold', 
    textTransform: 'capitalize'
  },
  imageStyle: {
    width: '100%', 
    height: 230,
  },
  iconImage: {
    width: 20,
    height: 20,
    marginLeft: 30,
    marginTop: 20,
  }
});
