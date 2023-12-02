import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DynamicIcon, {IconNames} from '../dynamicIcon';


export default function IndexList(){
    
    const lista = [
        {
            text: "CTF",
            icon: "Interests",

        },
        {
            text: "First blog",
            icon: "Interests",

        },
        {
            text: "VJW0RM malware analysis",
            icon: "Interests",
        }

    ]
    
    return (
        <List>
            {lista.map((e) => {
                return (
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <DynamicIcon iconName={e.icon as IconNames} />
                            </ListItemIcon>
                            <ListItemText primary={e.text} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>   
    )
}