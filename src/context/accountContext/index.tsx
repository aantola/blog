/* eslint-disable @typescript-eslint/no-empty-function */
import  React, { createContext, useState } from 'react';



interface AccountProviderProps {
	children: React.ReactNode;
}

interface accountContextType {
    tokenExists: boolean
    login: (t: string) => void
    logout: () => void,
    userData: null | user,
}


interface user {
    username: string,
    id: number,
    public: boolean,
    googleid: string,
}


const AccountContext = createContext<accountContextType>({
    tokenExists: false,
    login: () => {},
    logout: () => {},
    userData: null,
});


const AccountProvider : React.FC<AccountProviderProps> = ({children}) => {
    
    const [tokenExists,setTokenExists] = useState(localStorage.getItem('token') != null) 
    const [userData, setUserData] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData') || '')[0] : null);

    console.log("userData",userData);

    const login = async (token : string) => {
        // Request for verification backend
        await fetch(process.env.REACT_APP_BACKEND_URL+ "user/login",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({token})
        }).then((res : Response) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            res.json().then((data : [user]) => {

                setTokenExists(true);
                setUserData(data[0]);

                localStorage.setItem('userData', JSON.stringify(data));
                // TODO: move token get to backend and use it as cookie with http-only
                // using localstorage to save token is not the best option, but for now it will do
                // there isn't any sensible user info
                localStorage.setItem('token', token);
            })  

        
        
        }).catch((e : Error) => {
            console.error("Authentification error: " + e.message)
        })
        
        
    }

    const logout = () => {
        setTokenExists(false);
        setUserData(null);
        localStorage.removeItem('userData')
        localStorage.removeItem('token');
    } 

    const accountImports ={
        login,
        logout,
        tokenExists,
        userData,
    }


    return (
        <AccountContext.Provider value={accountImports}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider
export { AccountContext }