import { Collapse, List, ListItem } from '@mui/material';


function SideMenuList({handleToggleAuthSide, openAuthSide, menuItemsAuth, menuTitle, titleClass}) {
    
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
                            <ListItem key={index} className="nav-item">
                        <a href="#" className="nav-link" data-key={key}>{label}</a>
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