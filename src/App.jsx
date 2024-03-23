import './App.css'
// import './assets/libs/jsvectormap/css/jsvectormap.min.css';

import Home from './pages/home/Home.jsx';
import Layout from './Layout.jsx';


function App() {



  return (
    <>


      <div id="layout-wrapper">

        <Layout />

        <Home />

      </div>



      <button className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
      </button>




    </>
  )
}

export default App
