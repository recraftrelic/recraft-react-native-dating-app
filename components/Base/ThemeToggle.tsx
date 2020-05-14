import React, { useState, useEffect } from 'react';
import { View, ViewStyle, StyleSheet, Switch, TextStyle } from 'react-native';
import { AppTheme, AppConstants } from '../../config/DefaultConfig';
import useTheme from '../../hooks/useTheme';
import ThemedText from '../UI/ThemedText';
import useConstants from '../../hooks/useConstants';
import { ThemeKey } from '../../config/themes';

interface Props {
  updateTheme: (theme: ThemeKey) => void
}

const ThemeToggle: React.FunctionComponent<Props> = ({
  updateTheme
}: Props) => {
  const theme: AppTheme = useTheme();
  const constants: AppConstants = useConstants();
  const { selectedTheme }: AppConstants = useConstants();
  const [isDarkTheme, toggleDarkTheme] = useState<boolean>(selectedTheme == ThemeKey.dark);

  useEffect(() => {
    const newSelectedTheme = isDarkTheme ? ThemeKey.dark : ThemeKey.light
    updateTheme(newSelectedTheme)
  }, [isDarkTheme]);

  return (
    <View style={style.container}>
      <View style={style.leftContainer}>
        <ThemedText styleKey="textColor" style={{color: theme.lightTextColor}}>{constants.defaultTheme}</ThemedText>
      </View>
      <View style={style.rightContainer}>
        <Switch trackColor={{
            false: theme.lightTextColor,
            true: theme.lightTextColor
          }} thumbColor={theme.textColor} value={isDarkTheme} onValueChange={toggleDarkTheme} />
      </View>
    </View>
  )
};

export default ThemeToggle;

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
    paddingTop: 30,
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