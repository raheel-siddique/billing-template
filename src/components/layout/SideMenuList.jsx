import { useNavigate } from 'react-router-dom';
import {Collapse, List, ListItem} from '@mui/material'


console.log('sidebar items re-rendering')


function SideMenuList({handleToggleAuthSide, openAuthSide, menuItemsAuth, menuTitle, titleClass}) {
    const navigate = useNavigate();


    const redirectOnPage=(uri)=>{
        navigate(uri)
    }
    
  return (

    <div>


        <li className="nav-item">
            <a onClick={handleToggleAuthSide} className="nav-link menu-link"  data-bs-toggle="collapse" role="button" aria-expanded={openAuthSide} >
                <i className={titleClass}></i> <span>{menuTitle}</span>
            </a>
            <Collapse className="collapse menu-dropdown show" in={openAuthSide} >
                <List className="nav nav-sm" sx={{ '& > .nav-item': { marginTop: '-8px', marginBottom: '-8px' } }}>

                    {menuItemsAuth.map((menuItems, index)=>{

                        const {label, icon,url,key}=menuItems
                        return(
                            <>
                            <ListItem key={index} className="nav-item nav-item-own" onClick={()=>{redirectOnPage(url)}}>
                        <span  className="nav-link" data-key={key}>{label}</span>
                    </ListItem>
                            </>
                        )
                    })}
                    
                 
                </List>
            </Collapse>
        </li>
    </div>
  )
}

export default SideMenuList