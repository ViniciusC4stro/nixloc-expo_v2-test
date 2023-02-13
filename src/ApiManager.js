import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const api = axios.create({
  baseURL: 'https://backend-cliente-dev.azurewebsites.net'
})

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('userToken')

    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  } catch(err) {
    console.log(err)
  }
})

// api.interceptors.response.use((response) => {
//   return response
// }, (error) => {
//   if(error.response.status == 401) {
//     AsyncStorage.removeItem('userToken') 
//     AsyncStorage.removeItem('userInfo') 
//     window.location.href="/Preload "
//   }
// })

export default api