import { Link, NavLink } from "react-router-dom"
import avatar from "../../assets/vendor/icons/avatar.png";
import logout from "../../assets/vendor/icons/logout.png";
import external from "../../assets/vendor/icons/externa_link.png";
import styled from "styled-components"

export default function Sidebar({handleSignOut}) {


  return (
    <>
      <div id="sidebar">
        <div  className="nav_items">
        {vendor_nav_links.map((link, index) => {
          
          return (
              <NavLink to={link.link} 
                key={`${link.title}-${index}`}
                className={({ isActive }) => isActive ? 'active link' : 'link'  }          
                >
                {link.title}
              </NavLink>
          );
        })}
        </div>

        <div className="bottomNav">
          <Icon>
          <span>Share</span>
            <img src={external} alt="share" />
          </Icon>
          <Icon>
          <span>Profile</span>
            <img src={avatar} alt="profile" />
          </Icon>
          <Icon onClick={()=>handleSignOut()}>
            <span>Logout</span>
            <img src={logout} alt="logout" />
          </Icon>
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

const Icon = styled.button`
  position:relative;
    display: flex;
    justify-content:center;
    align-items:center;
    background:#2e3192;
    height:40px;
    width:40px;
    border:none;
    border-radius:5px;
    box-sizing:border-box;
    transition:background 0.01s cubic-bezier(0.075, 0.82, 0.165, 1);
    img{
      width:24px;
      height:24px;     
      transition:background 0.02s cubic-bezier(0.075, 0.82, 0.165, 1),
      transform 0.02s cubic-bezier(0.075, 0.82, 0.165, 1);
    }
    span{
      position: absolute;
      top: -1.8em;
      font-family: "Montserrat";
      font-style: normal;
      font-size: 12px;
      display:none;
    }

    :hover{
      background: whitesmoke;
      filter: drop-shadow(1px 3px 3px grey);
      cursor:pointer;
      span{
        display:flex;
        filter: drop-shadow(0px 0px 0px white);
      }
      img{ 
        filter:invert(1);    
        transform:scale(1.05);
        
      }
    }

`