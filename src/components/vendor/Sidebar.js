import {useState} from 'react'
import {vendor_nav_links} from '../../data/vendor/vendor_nav_links'
import avatar from "../../assets/vendor/icons/avatar.png"
import logout from "../../assets/vendor/icons/logout.png"
import external from "../../assets/vendor/icons/externa_link.png"


export default function Sidebar() {
    // Using UseState and link index to set active button
    const [active, setActive] = useState(0)
  return (
      <>
    <div className="sidebar">
        {vendor_nav_links.map((link, index)=>{
            return(
                <div key={`${link.title}-${index}`}>
                    <a href={link.link} className={active == index? "active" : ""}>
                        {link.title}
                    </a>
                </div>
                
            )
        })}
    </div>

    <div className="bottomNav">
        <a href="/">
            <img src={external} alt="share" />
        </a>
        <a href="/">
            <img src={avatar} alt="profile" />
        </a>
        <a href="/">
            <img src={logout} alt="logout" />
        </a>
    </div>
    </>
  )
}