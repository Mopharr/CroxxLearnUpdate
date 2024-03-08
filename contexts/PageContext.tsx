import React, {useContext, useState} from 'react';

interface PageContext{
    page:string,
    setPage: React.Dispatch<React.SetStateAction<string>>
}

export const PageContext = React.createContext<PageContext>({page:'',setPage:()=>{}})

export const usePage = ()=> useContext(PageContext);

type Props = {
    children:React.ReactNode
}

export function PageContextProvider(props:Props){
    const [page, setPage] = useState('landing')

    return(
        <PageContext.Provider value={{page, setPage}}>
            {props.children}
        </PageContext.Provider>
    );
}