import React, { useContext, useState } from 'react';
import { userType } from '../types/user';

interface UserContext {
    userProfile?: userType,
    setUserProfile: React.Dispatch<React.SetStateAction<userType | undefined>>
}

export const UserProfileContext = React.createContext<UserContext>({ userProfile: undefined, setUserProfile: () => { } });

export const useUserProfile = () => useContext(UserProfileContext);

interface Props {
    children: React.ReactNode;
}

export function UserContextProvider(props: Props) {
    const [userProfile, setUserProfile] = useState<userType>()

    return (
        <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
            {props.children}
        </UserProfileContext.Provider>
    );
}
