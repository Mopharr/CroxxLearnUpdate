import React, {useContext, useState} from 'react';

interface LoadingContext{
    loading:boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoadingContext = React.createContext<LoadingContext>({loading:false,setLoading:()=>{}});
// export const SetLoadingContext = React.createContext((a:boolean)=>{})

export const useLoading = () => useContext(LoadingContext);


type Props = {
    children:React.ReactNode
}

export function LoadingContextProvider(props:Props){
    const [loading, setLoading] = useState(false)


    return(
        <LoadingContext.Provider value={{loading, setLoading}}>
                {props.children}
        </LoadingContext.Provider>
    );
}