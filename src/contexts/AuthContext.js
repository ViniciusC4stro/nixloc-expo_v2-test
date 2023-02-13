import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useState } from "react";
import api from "../ApiManager";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const [userInfo, setUserInfo] = useState({})
  const [userToken, setUserToken] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const signIn = async (userName, password) => {
    setIsLoading(true)

      let URL = 'https://backend-cliente-dev.azurewebsites.net'

      const req = await axios.post(`${URL}/api/v1/adm/auth/login`, { userName, password})
      .then(res => {
        let userInfo = res.data
        let userToken = userInfo.content.token
        console.log(userInfo)
        setUserInfo(userInfo)
        setUserToken(userToken)

        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
        AsyncStorage.setItem('userToken', userToken)
        setIsLoading(false)
      })
  }



    return (
        <AuthContext.Provider value={{
          isLoading,
          userInfo,
          userToken,
          signIn,
        }}>
          {children}
        </AuthContext.Provider>
    )
}