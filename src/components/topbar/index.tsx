import { useContext, useState } from 'react' 
import AppBar from '@mui/material/AppBar'
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import Logout from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { AccountContext } from '../../context/accountContext'
import GoogleLogin from '../googleLogin'
import Index from '../index'

import './style.sass'


export default function Topbar(){

    const [drawerView, setDrawerView] = useState(false);
    const openDrawer = () => {
        setDrawerView(true)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { tokenExists, logout } = useContext(AccountContext)
    
    const onClick = () => {
        logout()
    }   

    return (
        <>
            <AppBar position="fixed" style={{zIndex: 1400 }}  >
                <span style={{justifyContent: "space-between", alignItems: "center", display: "flex"}}>
                    <span style={{padding:"1rem"}}>
                        <button onClick={openDrawer}>
                            <MenuIcon />
                        </button>
                               
                    </span>
                    <span style={{justifyContent: "space-between", alignItems: "center", display: "flex"}}>
                        <span style={{ marginRight: "1rem"}}>
                            <Link to="/">
                                <button> <HomeIcon /> </button>
                            </Link>   
                        </span>
                        <span style={{ marginRight: "1rem"}}>
                            <Link to="/about">About me</Link>
                        </span>
                        <span style={{ marginRight: "1rem"}}>

                            {
                            tokenExists
                                ? <button onClick={onClick} > <Logout /></button>
                                : <GoogleLogin />   
                            }
                        </span>
                        
                    </span>
                </span>
            </AppBar>
            <Toolbar />
            <Index drawerView={drawerView} setDrawerView={setDrawerView} />
        </>
    )
}