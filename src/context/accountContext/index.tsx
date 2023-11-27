/* eslint-disable @typescript-eslint/no-empty-function */
import  React, { createContext, useState } from 'react';

interface AccountProviderProps {
	children: React.ReactNode;
}

interface accountContextType {
    tokenExists: boolean
    login: (t: string) => void
    logout: () => void
}

const AccountContext = createContext<accountContextType>({
    tokenExists: false,
    login: () => {},
    logout: () => {},
});



const AccountProvider : React.FC<AccountProviderProps> = ({children}) => {
    
    const [tokenExists,setTokenExists] = useState(localStorage.getItem('token') != null) 

    const login = (token : string) => {
        setTokenExists(true)
        localStorage.setItem('token', token);
    }

    const logout = () => {
        setTokenExists(false)
        localStorage.removeItem('token');
    } 

    const accountImports ={
        login,
        logout,
        tokenExists,
    }


    return (
        <AccountContext.Provider value={accountImports}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
export { AccountContext }