import React, {useState} from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, ScrollView, TouchableOpacity, Image, ImageStyle, ImageBackground, Platform } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/useTheme';
import microValidator from 'micro-validator';
import { ValidationError } from '../../config/validation';
import Input from '../../components/Base/Input';

interface LoginField {
  username?: string;
  password?: string;
}

const isIOS = (): Boolean => Platform.OS == "ios";

// @ts-ignore
const ImagePath = require("../../images/dual-tone.png");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Login: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();

  const validate = (data: LoginField): ValidationError => {
    const errors = microValidator.validate({
      username: {
          required: {
              errorMsg: constants.loginValidation.username
          }
      },
      password: {
          required: {
              errorMsg: constants.loginValidation.password
          },
          length: {
              min: 6,
              max: 12,
              errorMsg: constants.loginValidation.passwordLength
          }
      },
    },data)
    
    return errors
  }

  const [username,onChangeUsername] = useState<string>("")
  const [password,onChangePassword] = useState<string>("")
  const [errors,setErrors] = useState<ValidationError>({})

  const backButton = () => {
    history.push('/')
  }

  const goToHome = () => {
    const errors: ValidationError = validate({username: username,password: password})

    if(!Object.keys(errors).length)
    {
      history.push('/home/')
    }
    else {
      setErrors(errors)
    }
  }

  const goToForget = () => {
    history.push('/forget')
  }

  return (
    <View style={style.mainContainer}>
      <ScrollView>
        <ImageBackground source={ImagePath} style={{ width: '100%', height: '78%',}} >
          <TouchableOpacity style={style.backContainer} onPress={backButton}>
            <View style={style.leftContainer}>
              <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
            </View>
            <View style={style.rightContainer}>
              <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{constants.backText}</ThemedText>
            </View>
          </TouchableOpacity>
          <View style={[style.topContainer, style.imageContainer]}>
            <Image source={constants.recraftLogo} style={style.logoImage}/>
          </View>
          <View style={[style.topContainer, style.titleContainer]}>
            <ThemedText styleKey="highlightTextColor" style={[style.textStyle, style.titleStyle]}>{constants.title}</ThemedText>
          </View>
        </ImageBackground>
        <View style={{flex:1, backgroundColor: theme.backgroundColor}}>
          <View style={[style.container, style.extraStyle, {backgroundColor: theme.backgroundColor, position: 'relative', bottom : 340}]}>
            <View style={[style.topContainer, {marginTop: 20}]}>
              <ThemedText styleKey="textColor" style={style.textStyle}>{constants.labelLogin}</ThemedText>
            </View>
            <Input
              placeholder={constants.userPlaceholder}
              onChangeText={onChangeUsername}
              value={username}
              errors={errors.username}
              icon="user"
              choose={true}
            />
            <Input
              placeholder={constants.passPlaceholder}
              onChangeText={onChangePassword}
              value={password}
              errors={errors.password}
              secureTextEntry={true}
              icon="key"
              choose={true}
              iconStyle={{transform: [{ rotate: '80deg' }]}}
            />
            <TouchableOpacity onPress={goToForget} style={style.forgetContainer}>
              <ThemedText style={style.forgetStyle} styleKey="appColor">{constants.labelForget}</ThemedText>
            </TouchableOpacity>
            <RoundButton buttonStyle={style.signButton} label={constants.labelSignin} buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} onPress={goToHome} />
            <View style={style.childContainer}>
              <ThemedText style={style.forgotPassword} styleKey="textColor">{constants.labelCheckAcc}</ThemedText>
            </View>
          </View>
          <View style={{position: 'relative', bottom : 340,}}>
            <RoundButton buttonStyle={style.signupButton} label={constants.labelSignupWith} buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} onPress={goToHome} />
            <View style={style.childContainer}>
              <View style={[style.iconContainer, { backgroundColor: theme.facebookColor }]}>
                <Icon name="facebook" size={30} color={theme.highlightTextColor} style={style.Icon} />
              </View>
              <View style={[style.iconContainer, { backgroundColor: theme.googleColor }]}>
                <Icon name="google" size={30} color={theme.highlightTextColor} style={style.Icon} />
              </View>
              <View style={[style.iconContainer, { backgroundColor: theme.twitterColor }]}>
                <Icon name="twitter" size={30} color={theme.highlightTextColor} style={style.Icon} />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
};

export default Login;

interface Style {
  container: ViewStyle;
  mainContainer: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  forgotPassword: TextStyle;
  forgetStyle: TextStyle;
  title: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  backIcon: ViewStyle;
  logoImage: ImageStyle;
  textStyle: TextStyle;
  forgetContainer: ViewStyle;
  backContainer: ViewStyle;
  imageContainer: ViewStyle;
  titleStyle: TextStyle;
  titleContainer: ViewStyle;
  signButton: ViewStyle;
  signupButton: ViewStyle;
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
    marginBottom: 20,
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
    fontSize: 12,
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  forgetStyle: {
    fontWeight: 'bold', 
    textAlign: 'right', 
    marginTop: 10,
    marginBottom: 15,
    fontSize: 12,
  },
  forgetContainer: { 
    alignSelf: 'flex-end', 
    alignItems: 'flex-end', 
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
  },
  iconContainer: {
    margin: 12,
    minWidth: 50,
    height: 50,
    borderRadius: 50,
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
    width: 150, 
    height: 150,
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  backContainer: {
    flexDirection: 'row', 
    justifyContent: "space-between", 
    paddingLeft: 20
  },
  imageContainer: {
    marginTop: 80, 
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 32, 
    textTransform: 'capitalize'
  },
  titleContainer: {
    marginTop: 0, 
    marginBottom: 30
  },
  signButton: {
    minWidth: 230, 
    marginTop: 30
  },
  signupButton: {
    minWidth: 300, 
    marginTop: 30
  },
  extraStyle: {
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    elevation: 6, 
    marginLeft:50, 
    marginRight: 50, 
    borderRadius: 40, 
    paddingBottom: 70
  }
});
