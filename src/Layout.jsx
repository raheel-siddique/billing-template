import { useEffect, useState } from "react";
import Navbar from "./components/layout/navbar/Navbar"
import Sidebar from "./components/layout/sidebar/Sidebar"

console.log('layout re-rendering')

function Layout() {


    const [sidebarSize, setSidebarSize] = useState('lg');

    useEffect(() => {
      document.documentElement.setAttribute('data-sidebar-size', sidebarSize);
    }, [sidebarSize]);
  
    const toggleSidebarSize = () => {
      setSidebarSize(prevSize => (prevSize === 'lg' ? 'sm' : 'lg'));
    };
    return (
        <div>
            <Navbar toggleSidebarSize={toggleSidebarSize} />


            <Sidebar />

        </div>
    )
}

export default Layout