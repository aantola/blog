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

    const login = async (token : string) => {
        // Login code
        await fetch(process.env.REACT_APP_BACKEND_URL+ "user/login",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({token})
        }).then((res : Response) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            res.json().then((data : any) => {
                console.log(data)
            })  

        
        
        }).catch((e : Error) => {
            console.error("Authentification error: " + e.message)
        })
        
        //setTokenExists(true)
        //localStorage.setItem('token', token);
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