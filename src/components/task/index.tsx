import { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TaskSolution from './taskSolution';
import { AccountContext } from 'context/accountContext'



interface TaskProps {
    title: string,
    details: string,
    icon?: React.ReactElement,
    expanded: number | false,
    handleChange: (i: number) => (event: React.SyntheticEvent, newExpanded: boolean) => void,
    id: number,
}

function Task({title, details, icon, expanded,handleChange, id} : TaskProps){

    const { tokenExists }= useContext(AccountContext); 

    return (

        <Accordion expanded={expanded === id} onChange={handleChange(id)} disabled={!tokenExists} > 
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel1-content"
            >
                
                {icon}{title}
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