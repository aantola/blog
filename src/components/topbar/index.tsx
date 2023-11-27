import { useContext } from 'react' 
import AppBar from '@mui/material/AppBar'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

import { AccountContext } from '../../context/accountContext'
import GoogleLogin from '../../components/googleLogin'

import './style.sass'

export default function Topbar(){

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { tokenExists } = useContext(AccountContext)

    return (
        <AppBar  >
            <span style={{justifyContent: "space-between", display: "flex"}}>
                <span>
                    <Link to="/">
                        <HomeIcon />
                    </Link>
                    
                </span>
                
                
                <span >
                    {
                    tokenExists
                        ? <h1> Logout </h1>
                        : <GoogleLogin />   
                    }
                    <Link to="/about">About me</Link>
                    
                    
                </span>
            </span>
            
            
        </AppBar>
    )
}