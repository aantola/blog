import { useState, useContext, useEffect } from 'react';

import { AccountContext } from 'context/accountContext'

export interface TaskType {
    title: string,
    details: string,
    icon?: string,
    id: number,
    score: number,
    solved: boolean,
}



function UseTasks(){

    const { userData } = useContext(AccountContext);
    const [error,setError] = useState('');
    const [tasks, setTasks] = useState<Array<TaskType>>([]);
    const [loading, setLoading] = useState(true); 



    useEffect(() => {
        setLoading(true);
        fetch(process.env.REACT_APP_BACKEND_URL+ "task/getAll/" + userData?.id)
        .then((res : Response) => {
            res.json().then((data : Array<TaskType>) => {
                setTasks(data);
            })
            setLoading(false);
        })
        .catch((e : Error) => {
                setError(e.message);
        });


    },[userData?.id]);

    

    return {tasks, loading, error};
}

export default UseTasks;