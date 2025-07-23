import { configureStore } from '@reduxjs/toolkit'
import LoginFormSclice from './Redux-tooltik/Reducers/LoginFormSclice';
import  SignUpFormSlice  from './Redux-tooltik/Reducers/SignUpFormSlice';
import AuthSlice from './Redux-tooltik/Reducers/AuthSlice';


export const store = configureStore({
  reducer: {
    LoginForm: LoginFormSclice,
    SignUpForm: SignUpFormSlice,
    auth: AuthSlice
  },
})
