
import { useState, useContext } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


import Task from 'components/task';
import { AccountContext } from 'context/accountContext';
import useTasks, { TaskType } from 'hooks/useTasks'; 

/*
const dummyTasks = [
    {
        title: "Tarea 1",
        details: "lore ipsum",
    },
    {
        title: "Tarea 2",
        details: "lore ipsum",
    },
    {
        title: "Tarea 3",
        details: "lore ipsum",
    },
    {
        title: "Tarea 4",
        details: "lore ipsum",
    },
    {
        title: "Tarea 5",
        details: "lore ipsum",
    },
] 
*/

function Tasks(){


    const {tasks, loading, error} = useTasks();
    console.log("tasks", tasks);
    const { tokenExists }= useContext(AccountContext); 

    const [expanded, setExpanded] = useState<number | false>(false);

    const handleChange = (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    if(error){
        console.error(error);
        return <> An error has occurred please reload</>;
    }

    if(loading){
        return <div style={{margin: "auto"}}> <CircularProgress /> </div>
    }

    return (
        <>
            

            <div style={{width:"100%"}}>
                {!tokenExists && <h2> Please login to access the avaiable tasks </h2>}
                {tasks.map((t : TaskType, i: number) => {
                    return (
                        <Task 
                            key={i}
                            id={t.id} 
                            title={t.title} 
                            details={t.details}
                            expanded={expanded}
                            handleChange={handleChange}
                            score={t.score}
                            icon={t.icon}
                            solved={t.solved}
                            
                        />
                    )
                })}
            </div>
        
        </>
        
    )
}

export default Tasks;







