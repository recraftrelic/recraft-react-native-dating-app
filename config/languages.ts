import { en } from './languages/en';
import { fr } from './languages/fr';
import { gr } from './languages/gr';
import { sp } from './languages/sp';
import { ch } from './languages/ch';

export enum LanguageKey {
  en = "en",
  fr = "fr",
  gr = "gr",
  sp = "sp",
  ch = "ch",
}

export interface AppLanguage {
  defaultTheme: string,
  defaultLanguage: string,
  matching: string,
  forgetText: string,
  profileName: string,
  matched: string,
  profile: string,
  premium: string,
  GenderText: string,
  matchText: string,
  message: string,
  gifts: string,
  welcome: string,
  slogan: string,
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
  namePlaceholder: string,
  confirmPlaceholder: string,
  labelForget: string,
  labelSignupOr: string,
  labelSignupWith: string,
  checkText: string,
  activatePremium: string,
  activateYearly: string,
  save: string,
  choiceOne: string,
  resetPass: string,
  newAccount: string,
  selectGender: string,
  editProfile: string,
  searching: string,
  nearby: string,
  discover: string,
  calling: string,
  perMonth: string,
  perYear: string,
  payment: string,
  newCard: string,
  saveCard: string,
  paymentDone: string,
  messageText: string,
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

export interface LanguagesMap {
  [key: string]: AppLanguage;
}

export const languages: LanguagesMap = {
  [LanguageKey.en]: en,
  [LanguageKey.fr]: fr,
  [LanguageKey.gr]: gr,
  [LanguageKey.sp]: sp,
  [LanguageKey.ch]: ch,
}
