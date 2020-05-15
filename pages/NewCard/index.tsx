import React, { useState } from 'react';
import { RouteComponentProps, Link } from 'react-router-native';
import { Dispatch } from 'redux';
import { View, ViewStyle, StyleSheet, TextStyle, TouchableOpacity, Image, ImageStyle, ImageBackground, ScrollView, Platform } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../../components/UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import RoundButton from '../../components/Base/RoundButton';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import useTheme from '../../hooks/useTheme';
import microValidator from 'micro-validator';
import { ValidationError } from '../../config/validation';
import CardInput from '../../components/Base/CardInput';

interface CardField {
  cardNumber?: string;
  expiry?: string;
  cvv?: string;
  name?: string;
}

const isIOS = (): Boolean => Platform.OS == "ios";

// @ts-ignore
const ImagePath = require("../../images/profile.png");
const card = require("../../images/new-card2.png");


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
  const [cardNumber,onChangeCard] = useState<string>("")
  const [expiry,onChangeExpiry] = useState<string>("")
  const [cvv,onChangeCvv] = useState<string>("")
  const [name,onChangeName] = useState<string>("")
  const [errors,setErrors] = useState<ValidationError>({})

  const validate = (data: CardField): ValidationError => {
    const errors = microValidator.validate({
      cardNumber: {
        required: {
          errorMsg: constants.cardValidation.cardNumber
        },
        length: {
          min: 12,
          max: 12,
          errorMsg: constants.cardValidation.cardLength
        }
      },
      expiry: {
        required: {
          errorMsg: constants.cardValidation.expiry
        },
        length: {
          min: 7,
          max: 7,
          errorMsg: constants.cardValidation.expiryValid
        }
      },
      cvv: {
        required: {
          errorMsg: constants.cardValidation.cvv
        },
        length: {
          min: 3,
          max: 3,
          errorMsg: constants.cardValidation.cvvLength
        }
      },
      name: {
        required: {
          errorMsg: constants.cardValidation.name
        },
      },
    },data)
    
    return errors
  }

  const backButton = () => {
    history.push('/premium')
  }

  const goToPaymentProcess = () => {
    const errors: ValidationError = validate({cardNumber: cardNumber,expiry: expiry,cvv: cvv,name: name})
    if(!Object.keys(errors).length)
    {
      history.push('/process')
    }
    else {
      setErrors(errors)
    }
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
        <CardInput 
          placeholder={"2365   5225   5255   52522"}
          onChangeText={onChangeCard}
          value={cardNumber}
          errors={errors.cardNumber}
          label={"Card Number"}
          secureTextEntry={true} />
      </View>
      <View style={[style.backContainer, style.extraStyle]}>
        <CardInput 
          placeholder={"06/2020"}
          onChangeText={onChangeExpiry}
          value={expiry}
          errors={errors.expiry}
          label={"Expiry Date"} />
        <CardInput 
          placeholder={"563"}
          onChangeText={onChangeCvv}
          value={cvv}
          errors={errors.cvv}
          label={"CVV"}
          specialStyle={{marginRight: 20}} />
      </View>
      <View style={[style.backContainer, style.extraStyle]}>
        <CardInput 
          placeholder={"Delbert Shibata"}
          onChangeText={onChangeName}
          value={name}
          errors={errors.name}
          label={"Name"} />
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
      <RoundButton buttonStyle={style.inputLabel} label="Add Card" buttonColor={theme.appColor} labelStyle={theme.highlightTextColor} onPress={goToPaymentProcess}/>
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
});
