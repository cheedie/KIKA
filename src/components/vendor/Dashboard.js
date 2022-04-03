import '../../styles/vendor/DashboardStyles.css';
import React, {useState} from 'react'
import Sidebar from './Sidebar.js'
import {vendor_nav_links} from '../../data/vendor/vendor_nav_links'
import kika from "../../assets/vendor/images/kika.svg"
import Chart from "../../assets/vendor/images/Chart.svg"




function Dashboard() {
  return (
    <div id="dashboard">
        <div id="header">
            <img src={kika} alt="kika logo"/>
            <form>
                <input type="text" placeholder="Search" value = {""}/>
            </form>

        </div >
        <section className="dashboard main">
        <Sidebar/>
        <div className="reports">
            <div className="wrapper">
            <Summary/>
            <StatsCard cardName="Reviews"/>
            <StatsCard cardName="Products"/> 
            </div>

            <div className="secondary wrapper">
            <SalesOverview />
            <Announcements />
            
            </div>
        </div>
        </section>
    </div>
  )
}

export default Dashboard



function Summary() {
    const data = [
        {subtitle:"Page View", figure:"3"},
        {subtitle:"Order", figure:"5"},
        {subtitle:"Sales", figure:"N30,000"},
        {subtitle:"Earnings", figure:"N15,000"},
    ]
  return (
        <div className = "card inner">
            {data.map((data,index)=>
                <div className = "col" key={`${index}-key`} >
                    <p className="subtitle">{data.subtitle}</p>
                    <p className="fig">{data.figure}</p>
                </div> 
            )}
        </div>
  )
}
function StatsCard({cardName}) {
    const cardDetails = ["All", "Pending", "Spam", "Trash"];
  return (
    <div className = "card">
        <header className="title">{cardName}</header>
        <div className = "col">
            {cardDetails.map((detail, index)=>{
                return(
                    <div key={`${detail}${index}`} className="row">
                        <p classname="subtitle">{detail}</p>
                        <p>0</p>
                    </div>

                )
            })}
        </div>


    </div>
  )
}

function SalesOverview() {
  return (
    <div className="card end">
        <header className="title">Sales Overview</header>
        <div>
            <img src={Chart} alt="chart"/>
        </div>
    </div>
  )
}

function Announcements() {
    return (
      <div className="card end">
          <header className="title">Announcements</header>
          <div>
              <img src={Chart} alt="chart"/>
          </div>
      </div>
    )
  }


