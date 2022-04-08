import '../../styles/vendor/DashboardStyles.css';
import React, {useState} from 'react'
import Sidebar from './Sidebar.js'
import Dashboard from './Dashboard.js'
import Products from './Products.js'
import Orders from './Orders.js'
import Report from './Report.js'
import Reviews from './Reviews.js'
import kika from "../../assets/vendor/images/kika.svg"


function Vendor() {
  const [page, setPage] = useState("dashboard")
  return (
    <div id="vendor">
        <div id="header">
            <img src={kika} alt="kika logo"/>
            <form>
                <input type="text" placeholder="Search" value = {""}/>
            </form>

        </div >
        <section className="vendor main">
        <Sidebar setPage={setPage}/>
        <div className="main_container">            
            {page==="Dashboard"?<Dashboard/>
            :page==="Products"?<Products/>
            :page==="Orders"?<Orders/>
            :page==="Report"?<Report/>
            :page==="Reviews"?<Reviews/>
            :<Dashboard/>}
        </div>
        </section>
    </div>
  )
}

export default Vendor
