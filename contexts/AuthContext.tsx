import React, {useContext, useState} from 'react';

interface AuthContext{
    auth:boolean,
    setAuth: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = React.createContext<AuthContext>({auth:false,setAuth:()=>{}})

export const useAuth = ()=> useContext(AuthContext)