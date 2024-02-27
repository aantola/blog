import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import { AccountContext } from 'context/accountContext';


function taskSolution({id} : {id: number}){
    
    const { userData } = useContext(AccountContext);

    const [text, setText] = useState("");

    const ChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    async function checkAnswer(){
        await fetch(process.env.REACT_APP_BACKEND_URL+ "task/checkSolution",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id, userId: userData?.id, answer: text})
        }).then((res : Response) => {
            res.text().then((s: string) => {
                console.log("res", s);
            });

        
        
        }).catch((e : Error) => {
            console.error("Authentification error: " + e.message)
        })
    }

    return (
        <>
        
            <TextField 
                style={{width: "100%"}}
                label="Inserte la flag" 
                variant="standard" 
                value={text}
                onChange={ChangeText}
            />
            <button onClick={checkAnswer}> Enviar </button>
        </>
    )

}  

export default taskSolution;