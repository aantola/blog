import { useContext } from 'react';
import useLoadScript from '../../hooks/useLoadScript';
import { AccountContext } from '../../context/accountContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let google : any;

export default function Login(){

    const { login } = useContext(AccountContext)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleCredentialResponse(response : any) {
        
        console.log("Encoded JWT ID token: " + response.credential);
        login(response.credential)
    }

    function onSuccess(){
        google.accounts.id.initialize({
            client_id: "",
            callback: handleCredentialResponse
            });
        google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
        );
    }
    function onError(e : Event | string){
        console.log(e)
    }
    const src = "https://accounts.google.com/gsi/client"

    useLoadScript({src, onSuccess, onError})

    return (
        
        <div style={{display: "flex"}}id="buttonDiv" />
    )
}