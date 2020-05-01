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
  errorColor: string,
  forgetColor: string,
}

export interface AppConstants {
  selectedTheme: ThemeKey,
  selectedLanguage: LanguageKey,
  title: string,
  matching: string,
  forgetText: string,
  GenderText: string,
  welcome: string,
  slogan: string,
  recraftLogo: any,
  backText: string,
  labelLogin: string,
  labelCheckAcc: string,
  labelChoice: string,
  labelSignin: string,
  labelSignup: string,
  phonePlaceholder: string,
  emailPlaceholder: string,
  userPlaceholder: string,
  passPlaceholder: string,
  confirmPlaceholder: string,
  labelForget: string,
  labelSignupOr: string,
  labelSignupWith: string,
  checkText: string,
  choiceOne: string,
  resetPass: string,
  newAccount: string,
  selectGender: string,
  loginValidation: loginValidation,
  signupValidation: signupValidation,
}

export interface loginValidation {
  username: string,
  password: string,
  passwordLength: string,
}

export interface signupValidation {
  username: string,
  email: string,
  validEmail: string,
  phone: string,
  validPhone: string,
  password: string,
  passwordLength: string,
  confirmPassword: string,
  checkPassword: string,
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
    matching: "Matching",
    forgetText: "Forget Password",
    GenderText: "Gender",
    welcome: 'Welcome Back',
    slogan: "Meet and share every moments",
    recraftLogo: Logo,
    backText: "Back",
    labelLogin: "Login Account",
    labelCheckAcc: "Don't have an account?",
    labelChoice: "Or Login With",
    labelSignupWith: "Sign up with",
    labelSignupOr: "or Sign Up with",
    labelSignin: "Sign in",
    labelSignup: "Sign Up",
    phonePlaceholder: "Phone",
    emailPlaceholder: "Email",
    userPlaceholder: "Username",
    passPlaceholder: "Password",
    confirmPlaceholder: "Confirm Password",
    labelForget: "Forget password?",
    checkText: "I agree Terms of use & Privacy Policy",
    choiceOne: "Email or Phone",
    resetPass: "Reset Password",
    newAccount: "or Create New Account",
    selectGender: "Select your gender",
    loginValidation : {
      username: `Username is required`,
      password: `Password is required`,
      passwordLength: 'Password length between 6 and 12',
    },
    signupValidation : {
      username: `Username is required`,
      email: `Email is required`,
      validEmail: 'Please enter a valid email',
      phone: `Phone No. is required`,
      validPhone: 'Please enter a valid phone no.',
      password: `Password is required`,
      passwordLength: 'Password length between 6 and 12',
      confirmPassword: 'Confirm Password is required',
      checkPassword: 'Confirm password should be same',
    },
  },
}
