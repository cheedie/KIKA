import { NavLink } from "react-router-dom"
import avatar from "../../assets/vendor/icons/avatar.png";
import logout from "../../assets/vendor/icons/logout.png";
import external from "../../assets/vendor/icons/externa_link.png";

export default function Sidebar() {


  return (
    <>
      <div id="sidebar">
        <div  className="nav_items">
        {vendor_nav_links.map((link, index) => {
          
          return (
              <NavLink to={link.link} 
                key={`${link.title}-${index}`}
                // className="link"
                // activeClassName="active"
               // isActive={(match, location) => {if (!match) {return false;}
                className={({ isActive }) => isActive ? 'active link' : 'link'  }          
                >
                {link.title}
              </NavLink>
          );
        })}
        </div>

        <div className="bottomNav">
          <a href="/" className="icons">
            <img src={external} alt="share" />
          </a>
          <a href="/" className="icons">
            <img src={avatar} alt="profile" />
          </a>
          <a href="/" className="icons">
            <img src={logout} alt="logout" />
          </a>
        </div>
      </div>
    </>
  );
}

const vendor_nav_links =[
  {title: "Dashboard", link:"/vendor/"},
  {title: "Products", link:"/vendor/products"},
  {title: "Orders", link:"/vendor/orders"},
  {title: "Report", link:"/vendor/report"},
  {title: "Reviews", link:"/vendor/reviews"},
  {title: "Withdraw", link:"/vendor/withdraw"},
  {title: "Settings", link:"/vendor/settings"},
] ;
