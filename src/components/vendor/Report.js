import chart from "../../assets/vendor/images/bar-chart.png";

export default function Report() {
  return (
    <div id="wrapper" className="reports">
        <div className="figures">
            <div className="block">
                <h1>N 30,000</h1>
                <p>Sales in this period</p>
            </div>
            <div className="block">
                <h1>N 5,000</h1>
                <p>Average daily sales</p>
            </div>
            <div className="block">
                <h1>15</h1>
                <p>Products sold</p>
            </div>
            <div className="block">
                <h1>N 5,000</h1>
                <p>Charged for delivery</p>
            </div>
            <div className="block">
                <h1>N 2,000</h1>
                <p>Charged for refund</p>
            </div>
        </div>
        <SalesOverview/>
    
    </div>
  )
}

function SalesOverview() {
    return (
      <div className="card">
        <header className="title">Sales Overview</header>
        <div className="sub_details">
            <p className="percentage">4% more</p>
            <p>in 2021</p>
        </div>
        <div>
          <img src={chart} alt="chart" />
        </div>
      </div>
    );
  }