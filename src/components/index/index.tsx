import Drawer from '@mui/material/Drawer';
import Toolbar from "@mui/material/Toolbar";
import IndexList from './indexList';


interface IndexProps {
    drawerView : boolean,
    setDrawerView: (b : boolean) => void,
}

export default function Index({drawerView , setDrawerView} : IndexProps){
    const closeDrawer = () => {
        setDrawerView(false)
    }

    return (
        <Drawer open={drawerView} onClose={closeDrawer}>
            <Toolbar />
            <IndexList />
        </Drawer>
    )
}