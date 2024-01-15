import React from 'react';
import { jwtDecode } from 'jwt-decode';
// import { axiosPrivate } from './axiosPrivate';
import { useContext } from 'react';
import { AuthProvider } from '../AuthProvider/AuthProvider';
import axios from 'axios';
const axiosJWT = axios.create()
const refreshToken = async()=>{
   
    const {auth,setAuth} = useContext(AuthProvider)
    try {

            const response = await axios.get('http://localhost:3000/auth/refreshAccessToken', { withCredentials: true });
            console.log('token is refrehsef')
            
            setAuth({...auth,token:response.accesstoken})
           } catch (error) {
            console.log(error)
           }
          
                
        }
        



function useAxiosPrivate() {

   const decodeToken = jwtDecode(localStorage.getItem('token'))
   axiosJWT.interceptors.request.use(async(config)=>{
        let currentDate = Date.now()
        if(currentDate.getTime()>decodeToken.exp*1000){
            const response = await refreshToken()
            config.headers["authorization"] = "Bearer  " + response?.accesstoken
        }

        return config
     },error=>{
        return Promise.reject(error)
     })
     console.log('in axios interceptor')
    return axiosJWT
}
export default useAxiosPrivate;