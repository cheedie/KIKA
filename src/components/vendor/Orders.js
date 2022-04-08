import React from "react";

export default function Orders() {
  return (
    <div id="wrapper" className="orders">
      <nav>
        <div>
          <a href="/" className="subtitle active">
            All (2)
          </a>
          <a href="/" className="subtitle">
            Online (0)
          </a>
          <a href="/" className="subtitle">
            Pending Review (0)
          </a>
          <a href="/" className="subtitle">
            Draft (0)
          </a>
        </div>
        <button className="button">Export</button>
      </nav>
      <div className="body">
        <div className="filters">
          <div className="dropdown">
            <select name="size" type="date">
              <option>Filter by date</option>
            </select>
            <select name="size" placeholder="select">
              <option > Select Category</option>
            </select>
            <label htmlFor="Filter" className="button">
              Filter
            </label>
          </div>
          <form>
            <input
              name="search"
              placeholder="Search Products"
              type="dropdown"
              defaultValue=""
            />
            <input
              name="submit"
              type="submit"
              placeholder="submit"
              className="button"
              defaultValue=""
            />
          </form>
        </div>

        <div className="order_list">
            <div className="order_titles">
                <p className="checkbox"></p>
                <p>Order</p>
                <p>Order Total</p>
                <p>Earning</p>
                <p>Status</p>
                <p>Customer</p>
                <p>Date</p>
                <p>Actions</p>
            </div>

            <div className="order">
                <OrderTile/>
            </div>

        </div>
      </div>
    </div>
  );
}

function OrderTile() {
    const tile=[
        {
            order_title:"Order 23",
            order_total:"N20,000",
            earning:"N15,000",
            status:"Waiting",
            customer:"Faith MugahFaith MugahFaith MugahFaith Mugah",
            date:"March 29th, 2022"
        },
        {
            order_title:"Order 23",
            order_total:"N20,000",
            earning:"N15,000",
            status:"Delivered",
            customer:"Faith Mugah",
            date:"March 29th, 2022"
        },
        {
            order_title:"Order 23",
            order_total:"N20,000",
            earning:"N15,000",
            status:"Waiting",
            customer:"Faith Mugah",
            date:"March 29th, 2022"
        },
        {
            order_title:"Order 23",
            order_total:"N20,000",
            earning:"N15,000",
            status:"Waiting",
            customer:"Faith Mugah",
            date:"March 29th, 2022"
        },
    ]
  return (
      <>
      {tile.map((item,index)=>{
          return(
            <div className="order_tile" key={`order-${index}`}>
                <div>
                  <input type="checkbox" />
                </div>
                <p className="order_title">{item.order_title}</p>
                <p className="order_total">{item.order_total}</p>
                <p className="earning">{item.earning}</p>
                <p className="status">{item.status}</p>
                <p className="customer">{item.customer}</p>
                <p className="date">{item.date}</p>
                <div className="actions">
                    <button className="action_button">s</button>
                    <button className="action_button">g</button>
                    <button className="action_button">x</button>
                </div>
            </div>
          )
      })}
      </>
      )  
}



