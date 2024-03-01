import { useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import { AccountContext } from 'context/accountContext';
import { useSnackbar } from 'notistack';


function taskSolution({id} : {id: number}){
    
    const { userData } = useContext(AccountContext);

    const [text, setText] = useState("");

    const ChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }
    const { enqueueSnackbar } = useSnackbar();

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
                if(s == "CORRECT"){
                    enqueueSnackbar("Correct answer", {
                        variant: "success"
                    });
                }else{ // wrong
                    enqueueSnackbar("Incorrect answer, try again", {
                        variant: "warning"
                    });
                }
                
            });

        
        
        }).catch((e : Error) => {
            console.error("Authentification error: " + e.message)
            enqueueSnackbar("Error: "+e, {
                variant: "error"
            });
        })
    }

    return (
        <div style={{display:"flex", alignItems:"end"}}>
        
            <TextField 
                style={{width: "100%"}}
                label="Submit" 
                variant="standard" 
                value={text}
                onChange={ChangeText}
            />
            <Button onClick={checkAnswer} variant="contained" endIcon={<SendIcon />}>
                Submit
            </Button>
        </div>
    )

}  

export default taskSolution;