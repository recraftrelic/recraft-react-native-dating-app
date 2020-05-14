import React, { useState, useEffect } from 'react';
import { View, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { AppConstants, AppTheme } from '../../config/DefaultConfig';
import ThemedText from '../UI/ThemedText';
import useTheme from '../../hooks/useTheme';
import useConstants from '../../hooks/useConstants';
import RNPickerSelect from 'react-native-picker-select';
import { AppLanguage } from '../../config/languages';
import useLanguage from '../../hooks/useLanguage';

interface Props {
  updateLanguage: (language: string) => void;
};

const LanguageSelector: React.FunctionComponent<Props> = ({
  updateLanguage,
}: Props) => {
  const theme: AppTheme = useTheme();
  const { selectedLanguage }: AppConstants = useConstants();
  const constant: AppLanguage = useLanguage();
  const [language, setLanguage] = useState<string>(selectedLanguage);

  const languages = [
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Spanish', value: 'sp' },
    { label: 'German', value: 'gr' },
    { label: 'Chinese', value: 'ch' },
  ];

  useEffect(() => {
    updateLanguage(language)
  }, []);

  const onChangeLanguage = (value) => {
    updateLanguage(value)
    setLanguage(value)
  }

  return (
    <View>
      <View style={style.container}>
        <View style={style.leftContainer}>
          <ThemedText styleKey="textColor" style={{color: theme.textColor}}>{constant.defaultLanguage}</ThemedText>
        </View>
        <View style={style.rightContainer}>
          <RNPickerSelect style={{inputIOS:{color: theme.textColor},inputAndroid:{color: theme.textColor}}} value={language} onValueChange={(value) => onChangeLanguage(value)} items={languages} useNativeAndroidPickerStyle={false}/>
        </View>
      </View>
    </View>
  )
};

export default LanguageSelector;

interface Style {
  container: ViewStyle;
  leftContainer: ViewStyle;
  rightContainer: ViewStyle;
  title: TextStyle;
}

const style: Style = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginLeft: 50,
    marginRight: 50,
    paddingTop: 10,
    paddingBottom: 20,
  },  
  leftContainer: {
    alignItems: "flex-start",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});
