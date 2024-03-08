import React, {useContext, useState} from 'react';
import { userType } from '../types/user';

interface UserContext{
    user?:userType,
    setUser: React.Dispatch<React.SetStateAction<userType|undefined>>
}
export const UserContext = React.createContext<UserContext>({user:undefined, setUser:()=>{}})

export const useUser = ()=> useContext(UserContext);

interface Props{
    children:React.ReactNode;
}

export function UserContextProvider(props:Props){
    const [user, setUser] = useState<userType>()

    return(
        <UserContext.Provider value={{user, setUser}}>
            {props.children}
        </UserContext.Provider>
    );
}