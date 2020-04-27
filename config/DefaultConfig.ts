import { ThemeKey } from "./themes";

export interface AppTheme {
  backgroundColor: string,
  highlightColor: string,
  highlightTextColor: string,
  textColor: string,
  lightTextColor: string,
  lightBottomColor: string,
  alternateMessageBackgroundColor: string,
  appColor: string,
}

export interface AppConstants {
  selectedTheme: ThemeKey,
  title: string,
  welcome: string,
  slogan: string,
  recraftLogo: string,
}

export interface ApplicationConfig {
  constants?: AppConstants
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
}

// @ts-ignore
const Logo = require("../images/logo.png")

export const defaultConfig: ApplicationConfig = {
  constants: {
    selectedTheme: ThemeKey.light,
    title: "RECRAFT DATING",
    welcome: 'Welcome Back',
    slogan: "Meet and share every moments",
    recraftLogo: Logo,
  }
}
