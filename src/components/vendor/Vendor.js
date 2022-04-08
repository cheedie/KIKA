import '../../styles/vendor/DashboardStyles.css';
import React from 'react'
import {Routes, Route} from "react-router-dom"
import Sidebar from './Sidebar.js'
import Dashboard from './Dashboard.js'
import Products from './Products.js'
import Orders from './Orders.js'
import Report from './Report.js'
import Reviews from './Reviews.js'
import kika from "../../assets/vendor/images/kika.svg"
import Withdraw from './Withdraw';
import Settings from './Settings';


function Vendor() {
  //const [page, setPage] = useState("dashboard")
  return (
    <div id="vendor">
        <div id="header">
            <img src={kika} alt="kika logo"/>
            <form>
                <input type="text" placeholder="Search" value = {""}/>
            </form>

        </div >
        <section className="vendor main">
         
        <Sidebar/>
        <div className="main_container">            
            {/* {page==="Dashboard"?<Dashboard/>
            :page==="Products"?<Products/>
            :page==="Orders"?<Orders/>
            :page==="Report"?<Report/>
            :page==="Reviews"?<Reviews/>
            :<Dashboard/>} */}
           <Routes>
              <Route path='/' element={<Dashboard/>} />
              <Route path="/products" element={<Products/>} />
              <Route path="/orders" element={<Orders/>} />
              <Route path="/report" element={<Report/>} />
              <Route path="/reviews" element={<Reviews/>} />
              <Route path="/withdraw" element={<Withdraw/>} />
              <Route path="/settings" element={<Settings/>} />
           </Routes>

        </div>
         
        </section>
    </div>
  )
}

export default Vendor
