import { useState } from "react";
import { vendor_nav_links } from "../../data/vendor/vendor_nav_links";
import avatar from "../../assets/vendor/icons/avatar.png";
import logout from "../../assets/vendor/icons/logout.png";
import external from "../../assets/vendor/icons/externa_link.png";

export default function Sidebar() {
  // Using UseState and link index to set active button
  const [active, setActive] = useState(0);
  return (
    <>
      <div id="sidebar">
        <div  className="nav_items">
        {vendor_nav_links.map((link, index) => {
          return (
            <div key={`${link.title}-${index}`}>
              <a href={link.link} className={active === index ? "link active" : "link"}>
                {link.title}
              </a>
            </div>
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
