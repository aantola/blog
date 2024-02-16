import { useContext } from 'react' 
import Logout from '@mui/icons-material/Logout';
import { AccountContext } from 'context/accountContext'



function Profile ({className} : {className : string})  {
    const { userData, logout } = useContext(AccountContext)

    
    
    return (      
        <>
            <button className={className} onClick={logout} > <Logout />   </button>
            <button className={className} > <h2> {userData?.username}</h2> </button>
        </>     
        

        
    )
    
}


export default Profile;