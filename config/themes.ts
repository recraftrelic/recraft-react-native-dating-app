import { AppTheme } from "./DefaultConfig"

export enum ThemeKey {
    light = "light",
    dark = "dark"
}

export interface ThemesMap {
    [key: string]: AppTheme;
}

export const darkTheme: AppTheme = {
    backgroundColor: "#000000",
    highlightColor: "grey",
    highlightTextColor: "#ffffff",
    textColor: "#fff",
    lightTextColor: "#b3b3b3",
    lightBottomColor: "#666666",
    alternateMessageBackgroundColor: '#4682b4',
    appColor: '#fd7c62',
    facebookColor: '#39579a',
    googleColor: '#e3384c',
    twitterColor: '#00acee',
    inputColor: "#aaaaaa",
    inputBorderColor: "#dadada",
    errorColor: '#FF0000',
    forgetColor: '#fd8f90',
}
  
export const lightTheme: AppTheme = {
    backgroundColor: "#ffffff",
    highlightColor: "green",
    highlightTextColor: "#ffffff",
    textColor: "#333",
    lightTextColor: "#b3b3b3",
    lightBottomColor: "#e6e6e6",
    alternateMessageBackgroundColor: '#B0E0E6',
    appColor: '#fd7c62',
    facebookColor: '#39579a',
    googleColor: '#e3384c',
    twitterColor: '#00acee',
    inputColor: "#aaaaaa",
    inputBorderColor: "#dadada",
    errorColor: '#FF0000',
    forgetColor: '#fd8f90',
}

export const themes: ThemesMap = {
    [ThemeKey.light]: lightTheme,
    [ThemeKey.dark]: darkTheme
}
