import '../../styles/vendor/vendor.css';
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Routes, Route, useNavigate, Link} from "react-router-dom"
import Sidebar from '../../components/vendor/Sidebar.js'
import Dashboard from './Dashboard.js'
import Products from './Products.js'
import Orders from './Orders.js'
import Report from './Report.js'
import Reviews from './Reviews.js'
import kika from "../../assets/vendor/images/kika.svg"
import Withdraw from './Withdraw';
import Settings from './Settings';
import Loading from "../../components/Global/Loading";
import Error from "../../components/Global/Error";
import { useVendorContext } from "../../context/vendor_context";
import Message from "../../components/Global/Message";

function Vendor() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const {
    signOut,
    getVendor,
    vendorDetails,
    products,
    getVendorProducts,
    vendor_details_loading: loading,
    vendor_details_error: error,
    getting_products_loading: product_loading,
    getting_details_error: product_error,
  } = useVendorContext();

  useEffect(() => {
    getVendor();
  }, []);

  const fetchProducts = (id) => getVendorProducts(id)

  const handleSignOut = async () => {
    const sign = await signOut();
    if (sign) {
      navigate("/vendor/signin");
    } else return;
  }

  return (
    <div id="vendor">
      <div id="header">
        <Link to="/home">
            <img src={kika} alt="kika logo"/>
            </Link>
            <div className="wrapper">
            <Link to="/home">Home</Link>
            <form>
                <input type="text" placeholder="Search" 
                onChange = {(event)=>setSearch(event.target.value)} value = {search}/>
            </form>
            
            </div>

        </div >
      <section className="vendor main">
        <Sidebar handleSignOut={handleSignOut}/>
        <div className="main_container">
        { loading ? <Loading/> : error ? <Error/> : 
          <><Heading> Welcome {vendorDetails.name} </Heading>
          <Routes>
            <Route path={"" ? "" : "/"} element={<Dashboard/>} />
            <Route path="/products" element={<Products/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/report" element={<Report/>} />
            <Route path="/reviews" element={<Reviews/>} />
            <Route path="/withdraw" element={<Withdraw/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
          </>
          }
        </div>
      </section>
    </div>
  );
}

export default Vendor;

const Heading = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: ${(props) => (props.smallHeading ? "1em" : "2em")};
  line-height: 78px;
  width: 100%;
  text-align: left;
  text-transform:capitalize;
  color: ${({ smallHeading, color }) => (smallHeading && color ? color : "")};
  @media (max-width: 720px) {
    font-size: 36px;
    line-height: 40px;
  }
`;