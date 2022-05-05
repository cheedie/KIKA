import React from "react";
import { useState, useEffect } from "react";
import Loading from "../../components/Global/Loading";
import Error from "../../components/Global/Error";
import Message from "../../components/Global/Message";

import { useVendorContext } from "../../context/vendor_context";

export default function Orders() {
  const { 
    orders, 
    getVendorOrders, 
    getting_orders_loading: loading,
    getting_orders_error: error,
} = useVendorContext();

  useEffect(() => {
    getVendorOrders()
  }, []);

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

        { loading ? <Loading/>  
        : error ? <Error/> 
        : orders.length <=0 ? 
        <Message message="You do not have any orders yet..."/>:
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
                <OrderTile orders={orders}/>
            </div>

        </div>
        }
      </div>
    </div>
  );
}

function OrderTile({orders}) {
  //let orderObject = Object.keys(orders)
  console.log("Order OBKJECT",orderObject)
  const tile = orders.map((value) =>{
     let vendorOrder =   {
          order_title:orders.orderId,
          order_total:orders.totalPrice,
          earning:orders.totalPrice,
          status:"Waiting",
          customer:orders.buyer,
          date:"March 29th, 2022"
        }
        return vendorOrder
    })
    // let product= {
    //                 order_title:value.order.orderId,
    //                 order_total:value.totalPrice,
    //                 status:"Pending review",
    //                 stock:value.countInStock > 0 ? "In Stock" : "Out of Stock",
    //                 price:`₦ ${value.price}`,
    //                 views:"5",
    //                 date:"09/04/2022",
    //                 id:value._id,
    //                 reviews: value.review,
    //                 size: value.size,
    //             };
    //  return product
    // const tile=[
    //     {
    //         order_title:"Order 23",
    //         order_total:"N20,000",
    //         earning:"N15,000",
    //         status:"Waiting",
    //         customer:"Faith MugahFaith MugahFaith MugahFaith Mugah",
    //         date:"March 29th, 2022"
    //     },
    //     {
    //         order_title:"Order 23",
    //         order_total:"N20,000",
    //         earning:"N15,000",
    //         status:"Delivered",
    //         customer:"Faith Mugah",
    //         date:"March 29th, 2022"
    //     },
    //     {
    //         order_title:"Order 23",
    //         order_total:"N20,000",
    //         earning:"N15,000",
    //         status:"Waiting",
    //         customer:"Faith Mugah",
    //         date:"March 29th, 2022"
    //     },
    //     {
    //         order_title:"Order 23",
    //         order_total:"N20,000",
    //         earning:"N15,000",
    //         status:"Waiting",
    //         customer:"Faith Mugah",
    //         date:"March 29th, 2022"
    //     },
    // ]
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



