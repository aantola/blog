import { useState } from 'react';
import TextField from '@mui/material/TextField';

function taskSolution({id} : {id: number}){
    
    const [text, setText] = useState("");

    const ChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    return (
        <TextField 
            style={{width: "100%"}}
            label="Inserte la flag" 
            variant="standard" 
            value={text}
            onChange={ChangeText}
        />
    )

}  

export default taskSolution;