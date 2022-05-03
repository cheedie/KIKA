//import "../../styles/vendor/DashboardStyles.css";
import React from "react";
import Chart from "../../assets/vendor/images/Chart.svg";
// import announcement from "../../assets/vendor/images/announcement.png"
import orders from "../../assets/vendor/images/orders.png";

function Dashboard() {
  return (
    <div id="dashboard">
      <div className="wrapper">
        <Summary />
        <Orders cardName="Orders" />
        <Reviews cardName="Reviews" />
        <Products cardName="Products" />
      </div>

      <div className="secondary wrapper">
        <SalesOverview />
        <Announcements />
      </div>
    </div>
  );
}

export default Dashboard;

function Summary() {
  const data = [
    { subtitle: "Page View", figure: "3" },
    { subtitle: "Order", figure: "5" },
    { subtitle: "Sales", figure: "N30,000" },
    { subtitle: "Earnings", figure: "N15,000" },
  ];
  return (
    <div className="card inner">
      {data.map((data, index) => (
        <div className="col" key={`${index}-key`}>
          <p className="subtitle summary">{data.subtitle}</p>
          <p className="fig">{data.figure}</p>
        </div>
      ))}
    </div>
  );
}
function Orders({ cardName }) {
  const cardDetails = [
    { subtitle: "Total", fig: "5", color: "" },
    { subtitle: "Completed", fig: "5", color: "" },
    { subtitle: "Pending", fig: "2", color: "" },
    { subtitle: "Processing", fig: "1", color: "" },
    { subtitle: "Cancelled", fig: "0", color: "" },
    { subtitle: "Refunded", fig: "0", color: "" },
    { subtitle: "On Hold", fig: "1", color: "" },
  ];
  return (
    <div className="col card">
      <header className="title">{cardName}</header>
      <div className="col orders">
        <div>
          {cardDetails.map((detail, index) => {
            return (
              <div key={`${detail.subtitle}${index}`} className="row">
                <p className="subtitle" styles={`color:${detail.color}`}>
                  {detail.subtitle}
                </p>
                <p>{detail.fig}</p>
              </div>
            );
          })}
        </div>
        <div className="orderimg">
          <img src={orders} alt="" />
        </div>
      </div>
    </div>
  );
}
function Reviews({ cardName }) {
  const cardDetails = ["All", "Pending", "Spam", "Trash"];
  return (
    <div className="col card">
      <header className="title">{cardName}</header>
      <div className="col">
        {cardDetails.map((detail, index) => {
          return (
            <div key={`${detail}${index}`} className="row">
              <p className="detail subtitle">{detail}</p>
              <p>0</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Products({ cardName }) {
  const cardDetails = ["All", "Pending", "Spam", "Trash"];
  return (
    <div className="col card">
      <header className="title">{cardName}</header>
      <div className="col">
        {cardDetails.map((detail, index) => {
          return (
            <div key={`${detail}${index}`} className="row">
              <p className="detail subtitle">{detail}</p>
              <p>0</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SalesOverview() {
  return (
    <div className="col card end">
      <header className="title">Sales Overview</header>
      <div>
        <img src={Chart} alt="chart" />
      </div>
    </div>
  );
}

function Announcements() {
  return (
    <div className="card end notification">
      <div className="header">
        <header className="title">Announcements</header>
        <a href="/" className="subtitle">
          See All
        </a>
      </div>
      <div className="img" />
    </div>
  );
}
