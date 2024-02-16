import { useContext, useState } from 'react' 
import AppBar from '@mui/material/AppBar'
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MenuIcon from '@mui/icons-material/Menu';
import Profile from 'components/profile';
import { AccountContext } from 'context/accountContext'
import GoogleLogin from 'components/googleLogin'
import Index from 'components/index'

import './style.css'


export default function Topbar(){

    const [drawerView, setDrawerView] = useState(false);
    const toggleDrawer = () => {
        setDrawerView((val) => !val)
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { tokenExists, logout } = useContext(AccountContext)

    return (
        <>
            <AppBar position="fixed" style={{zIndex: 1400, backgroundColor: "buttonface",  }}  >
                <span className='topbar-flex-container'>
                    <span style={{padding:"1rem"}}>
                        <button className="topbar-button" onClick={toggleDrawer}>
                            <MenuIcon />
                        </button>
                               
                    </span>
                    <span className='topbar-flex-container'>
                        <span>
                            <Link to="/">
                                <button className="topbar-button"> <HomeIcon /> <h2>Home </h2> </button>
                            </Link>   
                        </span>
                        <span>
                            <Link to="/about"> <button className="topbar-button">  <InfoIcon /> <h2>About me  </h2> </button></Link>
                        </span>
                        <span className='topbar-flex-container' style={{gap: 0}}>

                            {
                            tokenExists
                                ? <Profile className="topbar-button" />
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