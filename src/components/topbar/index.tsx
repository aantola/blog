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
        <AppBar position="fixed"  >
            <span style={{justifyContent: "space-between", alignItems: "center", display: "flex"}}>
                <span style={{padding:"1rem"}}>
                    <Link to="/">
                        <HomeIcon />
                    </Link>          
                </span>
                <span style={{justifyContent: "space-between", alignItems: "center", display: "flex"}}>
                    <span style={{ marginRight: "1rem"}}>

                        {
                        tokenExists
                            ? <h1> Logout </h1>
                            : <GoogleLogin />   
                        }
                    </span>
                    <span style={{ marginRight: "1rem"}}>
                        <Link to="/about">About me</Link>
                    </span>
                </span>
            </span>
        </AppBar>
    )
}