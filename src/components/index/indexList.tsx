import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";
import DynamicIcon, {IconNames} from '../dynamicIcon';


export default function IndexList(){
    
    const lista = [
        {
            text: "Tareas",
            icon: "Interests",
            url: "/tasks"

        }
    ]
    
    return (
        <List>
            {lista.map((e, i) => {
                return (
                    <ListItem id={"item" + i} disablePadding>
                        <ListItemButton>
                            <Link to={e.url}>
                                <ListItemIcon>
                                    <DynamicIcon iconName={e.icon as IconNames} />
                                </ListItemIcon>
                                <ListItemText primary={e.text} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>   
    )
}