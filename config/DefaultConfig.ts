import { ThemeKey } from "./themes";
import { LanguageKey } from "./languages";

export interface AppTheme {
  backgroundColor: string,
  highlightColor: string,
  highlightTextColor: string,
  textColor: string,
  lightTextColor: string,
  lightBottomColor: string,
  alternateMessageBackgroundColor: string,
  appColor: string,
  facebookColor: string,
  googleColor: string,
  twitterColor: string,
  inputColor: string,
  inputBorderColor: string,
}

export interface AppConstants {
  selectedTheme: ThemeKey,
  selectedLanguage: LanguageKey,
  title: string,
  welcome: string,
  slogan: string,
  recraftLogo: any,
  labelLogin: string,
  labelCheckAcc: string,
  labelChoice: string,
  labelSubmit: string,
  namePlaceholder: string,
  emailPlaceholder: string,
  userPlaceholder: string,
  passPlaceholder: string,
  labelForget: string,
  labelSignupWith: string,
}

export interface ApplicationConfig {
  constants?: AppConstants
}

// @ts-ignore
const Logo = require("../images/logo.png")

export const defaultConfig: ApplicationConfig = {
  constants: {
    selectedTheme: ThemeKey.light,
    selectedLanguage: LanguageKey.en,
    title: "RECRAFT DATING",
    welcome: 'Welcome Back',
    slogan: "Meet and share every moments",
    recraftLogo: Logo,
    labelLogin: "Login Account",
    labelCheckAcc: "Don't have an account?",
    labelChoice: "Or Login With",
    labelSignupWith: "Sign up with",
    labelSubmit: "SUBMIT",
    namePlaceholder: "Enter Name",
    emailPlaceholder: "Enter Email",
    userPlaceholder: "Username",
    passPlaceholder: "Password",
    labelForget: "Forget password?",
  }
}
