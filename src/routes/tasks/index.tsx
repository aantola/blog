
import { useState, useContext } from 'react';
import Task from 'components/task';
import { AccountContext } from 'context/accountContext'


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


function Tasks(){

    const { tokenExists }= useContext(AccountContext); 

    const [expanded, setExpanded] = useState<number | false>(false);

    const handleChange = (panel: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

    return (
        <div style={{width:"100%"}}>
            {!tokenExists && <h2> Conectese a su cuenta para acceder a las tareas </h2>}
            {dummyTasks.map((t : {details: string, title: string, icon?: React.ReactElement}, i: number) => {
                return (
                    <Task 
                        id={i} 
                        title={t.title} 
                        details={t.details}
                        expanded={expanded}
                        handleChange={handleChange}
                    />
                )
            })}
        </div>
    )
}

export default Tasks;







