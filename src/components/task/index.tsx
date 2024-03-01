import { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import TaskSolution from './taskSolution';
import { AccountContext } from 'context/accountContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DynamicmuiIcon, { IconNames } from 'components/dynamicIcon';

interface TaskProps {
    title: string,
    details: string,
    icon?: string,
    expanded: number | false,
    handleChange: (i: number) => (event: React.SyntheticEvent, newExpanded: boolean) => void,
    id: number,
    score: number,
    solved: boolean,
}

function Task({title, details, icon, expanded,handleChange, id, score, solved} : TaskProps){

    const { tokenExists }= useContext(AccountContext); 

    return (

        <Accordion expanded={expanded === id} onChange={handleChange(id)} disabled={!tokenExists || solved} > 
            <AccordionSummary
                expandIcon={solved ?  <CheckCircleIcon color="success" /> : <ArrowDropDownIcon />}
                aria-controls="panel1-content"
            >
                
            <h2 style={{display: "flex", alignItems: "center"}}> 
                <DynamicmuiIcon iconName={icon as IconNames} /> 
                {title} ({score} Points)
            </h2> 
            </AccordionSummary>
            <AccordionDetails>
                <div style={{marginBottom: "1rem"}}>
                    {details}
                </div>
                <TaskSolution id={id} />
            </AccordionDetails>
        </Accordion>

    )
}

export default Task;