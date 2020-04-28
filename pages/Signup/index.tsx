import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TextInput, ScrollView, TouchableOpacity, Image, ImageStyle, ImageBackground, Platform } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import useTheme from '../../hooks/useTheme';
import microValidator from 'micro-validator';
import { ValidationError } from '../../config/validation';
import ErrorText from '../../components/Base/ErrorText';

interface LoginField {
  username?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPass?: string;
}

const isIOS = (): Boolean => Platform.OS == "ios";

// @ts-ignore
const ImagePath = require("../../images/dual-tone.png");
const confirmImage = require("../../images/confirm.png");

interface Props extends RouteComponentProps {
  dispatch: Dispatch,
  history: any
}

const Signup: React.FunctionComponent<Props> = ({
  history
}: Props) => {
  const constants: AppConstants = useConstants();
  const theme: AppTheme = useTheme();
  const [selected,setSelected] = useState<Boolean>(false);

  const validate = (data: LoginField): ValidationError => {
    const errors = microValidator.validate({
        username: {
            required: {
                errorMsg: constants.signupValidation.username
            }
        },
        email: {
            required: {
                errorMsg: constants.signupValidation.email
            },
            email: {
                errorMsg: constants.signupValidation.validEmail
            }
        },
        phone: {
            required: {
                errorMsg: constants.signupValidation.phone
            },
            regex: {
              pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
              errorMsg: constants.signupValidation.validPhone
            }
        },
        password: {
            required: {
                errorMsg: constants.signupValidation.password
            },
            length: {
                min: 6,
                max: 12,
                errorMsg: constants.signupValidation.passwordLength
            }
        },
        confirmPass: {
            required: {
              errorMsg: constants.signupValidation.confirmPassword
            },
            equals: {
              to: password, // you can pass anything here for e.g. variables
              errorMsg: constants.signupValidation.checkPassword
            }
        }
    }, data)
    
    return errors
  }

  const [username,onChangeUsername] = useState<string>("")
  const [email,onChangeEmail] = useState<string>("")
  const [phone,onChangePhone] = useState<string>("")
  const [password,onChangePassword] = useState<string>("")
  const [confirmPass,onChangeConfirm] = useState<string>(password)
  const [errors,setErrors] = useState<ValidationError>({})

  const backButton = () => {
    history.push('/')
  }

  const goToHome = () => {
    const errors: ValidationError = validate({username: username,email: email,phone: phone,password: password,confirmPass: confirmPass})

    if(!Object.keys(errors).length)
    {
      history.push('/home/')
    }
    else {
      setErrors(errors)
    }
  }

  return (
    <>
    <View style={{flex: 1, flexDirection:'column'}}>
    <ScrollView>
      <ImageBackground source={ImagePath} style={{ width: '100%', height: isIOS() ? '78%' :'82%',}} >
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: "space-between", paddingLeft: 20}} onPress={backButton}>
          <View style={style.leftContainer}>
            <MaterialIcon name="chevron-left-circle-outline" size={30} color={theme.highlightTextColor} style={style.backIcon}/>
          </View>
          <View style={style.rightContainer}>
            <ThemedText styleKey="highlightTextColor" style={style.textStyle}>{constants.backText}</ThemedText>
          </View>
        </TouchableOpacity>
        <View style={[style.topContainer, {marginTop: 40, marginBottom: 10}]}>
          <Image source={constants.recraftLogo} style={[style.logoImage, {width: 120, height: 120}]}/>
        </View>
        <View style={[style.topContainer, {marginTop: 0, marginBottom: 30}]}>
          <ThemedText styleKey="highlightTextColor" style={[style.textStyle, {fontSize: 28, textTransform: 'capitalize'}]}>{constants.title}</ThemedText>
        </View>
      </ImageBackground>
      <View style={{flex:1, backgroundColor: theme.backgroundColor}}>
        <View style={[style.container, {backgroundColor: theme.backgroundColor, position: 'relative', bottom: isIOS() ? 350 : 370, shadowOffset: { width: 0, height: 8 },shadowOpacity: 0.2,elevation: 6, marginLeft:50, marginRight: 50, borderRadius: 40, paddingBottom: 50}]}>
          <View style={[style.searchContainer, { borderBottomColor: theme.textColor }]}>
            <View style={style.iconStyle}>
              <AntDesign name="user" size={15} color={theme.textColor} />
            </View>
            <View style={style.textContainer}>
              <TextInput
                placeholder={constants.userPlaceholder}
                placeholderTextColor={theme.textColor}
                onChangeText={onChangeUsername}
                value={username}
                style={{ color: theme.textColor, paddingBottom: isIOS() ? 0 : 7, height: isIOS() ? 15 : 35 }}
              />
            </View>
          </View>
          <View style={{flex: 1, alignSelf: 'flex-start'}}>
            <ErrorText
              errors={errors.username}
            /> 
          </View>
          <View style={[style.searchContainer, { borderBottomColor: theme.textColor }]}>
            <View style={style.iconStyle}>
              <Fontisto name="email" size={15} color={theme.textColor} />
            </View>
            <View style={style.textContainer}>
              <TextInput
                placeholder={constants.emailPlaceholder}
                placeholderTextColor={theme.textColor}
                onChangeText={onChangeEmail}
                value={email}
                style={{ color: theme.textColor, paddingBottom: isIOS() ? 0 : 7, height: isIOS() ? 15 : 35 }}
              />
            </View>
          </View>
          <View style={{flex: 1, alignSelf: 'flex-start'}}>
            <ErrorText
              errors={errors.email}
            /> 
          </View>
          <View style={[style.searchContainer, { borderBottomColor: theme.textColor }]}>
            <View style={style.iconStyle}>
              <AntDesign name="mobile1" size={15} color={theme.textColor} />
            </View>
            <View style={style.textContainer}>
              <TextInput
                placeholder={constants.phonePlaceholder}
                placeholderTextColor={theme.textColor}
                onChangeText={onChangePhone}
                value={phone}
                style={{ color: theme.textColor, paddingBottom: isIOS() ? 0 : 7, height: isIOS() ? 15 : 35 }}
              />
            </View>
          </View>
          <View style={{flex: 1, alignSelf: 'flex-start'}}>
            <ErrorText
              errors={errors.phone}
            /> 
          </View>
          <View style={[style.searchContainer, { borderBottomColor: theme.textColor }]}>
            <View style={style.iconStyle}>
              <AntDesign name="key" size={15} color={theme.textColor} style={{transform: [{ rotate: '80deg' }]}} />
            </View>
            <View style={style.textContainer}>
              <TextInput
                placeholder={constants.passPlaceholder}
                placeholderTextColor={theme.textColor}
                onChangeText={onChangePassword}
                value={password}
                style={{ color: theme.textColor, paddingBottom: isIOS() ? 0 : 7, height: isIOS() ? 15 : 35 }}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={{flex: 1, alignSelf: 'flex-start'}}>
            <ErrorText
              errors={errors.password}
            /> 
          </View>
          <View style={[style.searchContainer, { borderBottomColor: theme.textColor }]}>
            <View style={style.iconStyle}>
              <Image source={confirmImage} style={{width: 12, height: 15}}/>
            </View>
            <View style={style.textContainer}>
              <TextInput
                placeholder={constants.confirmPlaceholder}
                placeholderTextColor={theme.textColor}
                onChangeText={onChangeConfirm}
                value={confirmPass}
                style={{ color: theme.textColor, paddingBottom: isIOS() ? 0 : 7, height: isIOS() ? 15 : 35 }}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={{flex: 1, alignSelf: 'flex-start'}}>
            <ErrorText
              errors={errors.confirmPass}
            /> 
          </View>
          <View style={[style.searchContainer, { borderBottomWidth: 0, paddingTop: 10}]}>
            <View style={style.iconStyle}>
              <TouchableOpacity onPress={() => {setSelected(!selected)}}>
                <MaterialIcon name={selected ? "checkbox-marked" : "checkbox-blank-outline"} size={15} color={selected ? theme.appColor: theme.textColor} style={{paddingTop: isIOS() ? 2 : 0}}/>
              </TouchableOpacity>
            </View>
            <View style={style.textContainer}>
              <ThemedText style={{fontSize: 10}} styleKey="textColor">{constants.checkText}</ThemedText>
            </View>
          </View>
          <RoundButton buttonStyle={{minWidth: 230, marginTop: 40}} label={constants.labelSignup} buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} onPress={goToHome} />
          <View style={style.childContainer}>
            <ThemedText style={style.forgotPassword} styleKey="textColor">{constants.labelSignupOr}</ThemedText>
          </View>
        </View>
        <View style={{position: 'relative', bottom: isIOS() ? 340 : 370,}}>
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
    </>
  )
};

export default Signup;

interface Style {
  container: ViewStyle;
  topContainer: ViewStyle;
  childContainer: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  bottomContainer: ViewStyle;
  inputContainer: TextStyle;
  inputLabel: TextStyle;
  forgotPassword: TextStyle;
  title: TextStyle;
  Icon: TextStyle;
  iconContainer: ViewStyle;
  backIcon: ViewStyle;
  logoImage: ImageStyle;
  textStyle: TextStyle;
  searchContainer: ViewStyle;
  iconStyle: ViewStyle;
  textContainer: ViewStyle;
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
    flexDirection: 'row',
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  inputLabel: {
    width: "100%",
    fontSize: 13
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
  inputContainer: {
    height: 40,
    marginTop: 10,
    width: "100%",
    marginBottom: 15,
    borderBottomWidth: 2,
    fontSize: 16,
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
  },
  textStyle: {
    fontSize: 16, 
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 9
  },
  searchContainer: {
    borderBottomWidth: 0.5,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: isIOS() ? 20 : 10,
    paddingBottom: isIOS() ? 10 : 0
  },
  iconStyle: {
    flex: 1,
    alignItems: "flex-start"
  }
});
